const CACHE_NAME = 'starvoice-v17';
const ASSETS = ['./', './index.html', './noraebang-v6.html', './v7_patch.js', './v8_patch.js', './v9_patch.js', './v10_patch.js', './v11_patch.js', './v12_patch.js', './v13_patch.js', './v14_patch.js', './v15_patch.js', './v16_patch.js', './v17_patch.js', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
));

self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())
));

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isHTML = e.request.mode === 'navigate' || url.pathname.endsWith('.html');

  if (isHTML && !url.pathname.includes('_archive')) {
    e.respondWith(
      (async () => {
        let response;
        try {
          response = await fetch(e.request);
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        } catch {
          response = await caches.match(e.request);
          if (!response) response = await caches.match('./index.html');
        }
        if (response && response.headers.get('content-type')?.includes('text/html')) {
          const text = await response.text();
          if (text.includes('noraebang') || text.includes('StarVoice')) {
            const injected = text.replace('</body>', '<script src="./v7_patch.js"><\/script>\n<script src="./v8_patch.js"><\/script>\n<script src="./v9_patch.js"><\/script>\n<script src="./v10_patch.js"><\/script>\n<script src="./v11_patch.js"><\/script>\n<script src="./v12_patch.js"><\/script>\n<script src="./v13_patch.js"><\/script>\n<script src="./v14_patch.js"><\/script>\n<script src="./v15_patch.js"><\/script>\n<script src="./v16_patch.js"><\/script>\n<script src="./v17_patch.js"><\/script>\n</body>');
            return new Response(injected, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
          }
        }
        return response || new Response('Offline', { status: 503 });
      })()
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        if (res.ok) { const clone = res.clone(); caches.open(CACHE_NAME).then(c => c.put(e.request, clone)); }
        return res;
      }).catch(() => caches.match('./index.html')))
    );
  }
});
