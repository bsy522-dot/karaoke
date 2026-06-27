/* StarVoice v15 Patch — Self-contained IIFE module injected via SW
 * +10 songs(115->125), Duet Harmony Matcher Canvas, Timbre Analyzer 6-axis Radar Canvas,
 * Vocal Growth Chart Canvas Line, Pronunciation Clinic 12types, Party Mode 4-player rotation,
 * Remix Studio Canvas waveform BPM/key, 30-Day Vocal Challenge Canvas calendar,
 * Music Sentiment Test 10Q personality, quiz +15(117->132), achievements +12(102->114),
 * SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v15KaraokeLoaded) return;
window.__v15KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;

function ls15(k,d){try{var v=localStorage.getItem('sv15-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls15s(k,v){try{localStorage.setItem('sv15-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (116-125) ── */
var v15Songs=[
{id:116,title:'Dynamite',artist:'BTS',bpm:120,key:'C',difficulty:3,genre:'pop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['Dy','na','mi','te','빛','나','는','밤','하','늘','아','래','춤','을','추','자'],
 duration:[400,400,400,800,400,400,400,400,400,400,400,800,400,400,400,400]},
{id:117,title:'첫눈처럼 너에게 가겠다',artist:'에일리',bpm:72,key:'D',difficulty:4,genre:'ballad',
 notes:[D4,Fs4,A4,D5,Cs4,A4,Fs4,D4,E4,G4,B4,D5,Cs4,B4,A4,G4],
 lyrics:['첫','눈','처','럼','너','에','게','가','겠','다','말','할','수','있','을','까'],
 duration:[650,650,650,1300,650,650,650,650,650,650,650,1300,650,650,650,650]},
{id:118,title:'사랑은 늘 도망가',artist:'임영웅',bpm:82,key:'G',difficulty:2,genre:'trot',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['사','랑','은','늘','도','망','가','는','걸','알','면','서','도','잡','고','싶'],
 duration:[550,550,550,1100,550,550,550,550,550,550,550,1100,550,550,550,550]},
{id:119,title:'Celebrity',artist:'아이유',bpm:110,key:'F',difficulty:3,genre:'pop',
 notes:[F4,A4,C5,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['넌','이','미','Ce','le','bri','ty','너','는','빛','나','고','있','어','항','상'],
 duration:[420,420,420,840,420,420,420,420,420,420,420,840,420,420,420,420]},
{id:120,title:'드라마',artist:'아이유',bpm:94,key:'E',difficulty:3,genre:'pop',
 notes:[E4,Gs4,B4,E5,D5,B4,Gs4,E4,Fs4,A4,Cs4,E4,D4,Cs4,B3,A3],
 lyrics:['인','생','은','짧','고','예','술','은','길','다','는','말','처','럼','이','건'],
 duration:[480,480,480,960,480,480,480,480,480,480,480,960,480,480,480,480]},
{id:121,title:'Love Lee',artist:'악뮤',bpm:108,key:'A',difficulty:2,genre:'pop',
 notes:[A3,C4,E4,A4,Gs4,E4,C4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['Love','ly','love','ly','사','랑','스','러','운','너','와','나','의','매','일','이'],
 duration:[430,430,430,860,430,430,430,430,430,430,430,860,430,430,430,430]},
{id:122,title:'Hype Boy',artist:'NewJeans',bpm:125,key:'B',difficulty:4,genre:'dance',
 notes:[B4,D5,Fs4,B4,A4,Fs4,D4,B3,Cs4,E4,Gs4,B4,A4,Gs4,Fs4,E4],
 lyrics:['I','just','want','you','call','me','on','my','phone','right','now','tell','me','you','love','me'],
 duration:[360,360,360,720,360,360,360,360,360,360,360,720,360,360,360,360]},
{id:123,title:'Super Shy',artist:'NewJeans',bpm:130,key:'G',difficulty:3,genre:'dance',
 notes:[G4,B4,D5,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['Su','per','shy','su','per','shy','but','wait','a','mi','nute','while','I','make','you','mine'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,700]},
{id:124,title:'마지막처럼',artist:'BLACKPINK',bpm:130,key:'C',difficulty:4,genre:'dance',
 notes:[C5,E5,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['마','지','막','처','럼','내','일','이','없','는','것','처','럼','빠','져','봐'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,350]},
{id:125,title:'그날에 나는',artist:'김필',bpm:76,key:'D',difficulty:3,genre:'ballad',
 notes:[D4,Fs4,A4,D5,Cs4,A4,Fs4,D4,E4,G4,B4,D5,Cs4,B4,A4,G4],
 lyrics:['그','날','에','나','는','맑','은','하','늘','을','봤','었','지','혼','자','서'],
 duration:[600,600,600,1200,600,600,600,600,600,600,600,1200,600,600,600,600]}
];
(function injectSongs15(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v15Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   var badge=document.getElementById('songCountBadge');
   if(badge)badge.textContent=window.songs.length;
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v15 (12 sounds) ── */
var actx15=null;
function getAC15(){if(!actx15)try{actx15=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx15;}
function sfx15(type){
 var ac=getAC15();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  duetHarmony:{f:523,d:.5,wave:'sine',gS:.2,gE:0},
  timbreAnalyze:{f:440,d:.3,wave:'triangle',gS:.25,gE:0},
  growthChart:{f:660,d:.25,wave:'sine',gS:.15,gE:0},
  pronuncia:{f:500,d:.2,wave:'triangle',gS:.18,gE:0},
  partyStart:{f:880,d:.4,wave:'square',gS:.15,gE:0},
  partyScore:{f:1047,d:.35,wave:'triangle',gS:.25,gE:0},
  remixBpm:{f:350,d:.15,wave:'sine',gS:.12,gE:0},
  remixKey:{f:700,d:.2,wave:'sine',gS:.15,gE:0},
  challenge:{f:784,d:.4,wave:'triangle',gS:.22,gE:0},
  sentimentQ:{f:550,d:.2,wave:'sine',gS:.12,gE:0},
  achieve15:{f:1047,d:.5,wave:'triangle',gS:.3,gE:0},
  featureOpen15:{f:600,d:.15,wave:'sine',gS:.12,gE:0}
 };
 var c=cfg[type]||cfg.featureOpen15;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='duetHarmony'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d*0.5);o.frequency.linearRampToValueAtTime(c.f,t+c.d);}
 if(type==='partyStart'){var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=8;lg.gain.value=80;lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);}
 if(type==='remixBpm'){o.frequency.exponentialRampToValueAtTime(c.f*2,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper v15 ── */
function v15M(id,title,body){
 var old=document.getElementById(id);if(old)old.remove();
 var ov=document.createElement('div');ov.id=id;
 ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;padding:16px;overflow-y:auto';
 var box=document.createElement('div');
 box.style.cssText='background:linear-gradient(135deg,#1a1030,#0f0a1e);color:#e0d0ff;border-radius:16px;padding:24px;max-width:680px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 8px 32px rgba(168,85,247,.4);border:1px solid rgba(168,85,247,.2)';
 var h=document.createElement('div');
 h.style.cssText='display:flex;justify-content:space-between;align-items:center;margin-bottom:16px';
 var tt=document.createElement('h2');tt.textContent=title;tt.style.cssText='margin:0;color:#c084fc;font-size:1.2em';
 var cls=document.createElement('button');cls.textContent='✕';
 cls.style.cssText='background:none;border:none;color:#a855f7;font-size:1.5em;cursor:pointer;padding:4px 8px';
 cls.onclick=function(){ov.remove();};
 h.appendChild(tt);h.appendChild(cls);box.appendChild(h);
 if(typeof body==='string'){var bd=document.createElement('div');bd.innerHTML=body;box.appendChild(bd);}
 else box.appendChild(body);
 ov.appendChild(box);ov.addEventListener('click',function(ev){if(ev.target===ov)ov.remove();});
 document.body.appendChild(ov);
 return box;
}

/* ══════════════════════════════════════════════════
   Feature 1: Duet Harmony Matcher Canvas
   ══════════════════════════════════════════════════ */
var duetPairs=[
 {title:'썸',a:'소유',b:'정기고',key:'G',bpm:96,notes1:[G4,B4,D5,G4,Fs4,D4,B3,G3],notes2:[B3,D4,G4,B4,A4,G4,Fs4,D4],difficulty:2},
 {title:'어디에도',a:'엠씨더맥스',b:'린',key:'F',bpm:78,notes1:[F4,A4,C5,F4,E4,C4,A3,F3],notes2:[A3,C4,F4,A4,G4,F4,E4,C4],difficulty:3},
 {title:'All For You',a:'서인국',b:'정은지',key:'C',bpm:115,notes1:[C4,E4,G4,C5,B4,G4,E4,C4],notes2:[E4,G4,C5,E5,D5,C5,B4,G4],difficulty:2},
 {title:'보고싶다',a:'김범수',b:'',key:'E',bpm:68,notes1:[E4,Gs4,B4,E5,D5,B4,Gs4,E4],notes2:[B3,E4,Gs4,B4,A4,Gs4,Fs4,E4],difficulty:4},
 {title:'Dream',a:'수지',b:'백현',key:'A',bpm:88,notes1:[A4,Cs4,E4,A4,Gs4,E4,Cs4,A3],notes2:[E4,A4,Cs4,E5,D5,Cs4,B4,A4],difficulty:3},
 {title:'Butterfly',a:'전미도',b:'',key:'D',bpm:100,notes1:[D4,Fs4,A4,D5,Cs4,A4,Fs4,D4],notes2:[Fs4,A4,D5,Fs4,E4,D5,Cs4,A4],difficulty:3},
 {title:'SOME',a:'볼빨간사춘기',b:'',key:'C',bpm:120,notes1:[C4,E4,G4,C5,B4,A4,G4,E4],notes2:[G3,C4,E4,G4,Fs4,E4,D4,C4],difficulty:2},
 {title:'Loveday',a:'양다일',b:'',key:'F',bpm:72,notes1:[F4,A4,C5,E5,D5,C5,A4,F4],notes2:[C4,F4,A4,C5,Bb4,A4,G4,F4],difficulty:3},
 {title:'Rain',a:'태연',b:'',key:'E',bpm:85,notes1:[E4,Gs4,B4,E5,D5,Cs4,B4,Gs4],notes2:[B3,E4,Gs4,B4,A4,Gs4,Fs4,E4],difficulty:4},
 {title:'Last Dance',a:'빅뱅',b:'',key:'G',bpm:92,notes1:[G4,B4,D5,G5,Fs4,D5,B4,G4],notes2:[D4,G4,B4,D5,Cs4,B4,A4,G4],difficulty:3},
 {title:'Eternity',a:'비스트',b:'',key:'A',bpm:108,notes1:[A4,Cs4,E5,A4,Gs4,E4,Cs4,A3],notes2:[E4,A4,Cs4,E5,D5,Cs4,B4,A4],difficulty:2},
 {title:'가을 우체국',a:'',b:'',key:'D',bpm:76,notes1:[D4,Fs4,A4,D5,Cs4,B4,A4,Fs4],notes2:[A3,D4,Fs4,A4,G4,Fs4,E4,D4],difficulty:2}
];
var duetPlayed=ls15('duetPlayed',[]);

function openDuetHarmony(){
 sfx15('duetHarmony');
 var wrap=document.createElement('div');
 wrap.innerHTML='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">2파트 하모니를 시각적으로 확인하고, 듀엣 파트를 연습하세요.</p>';

 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=300;
 cvs.style.cssText='width:100%;max-width:560px;display:block;margin:0 auto 16px;border-radius:12px;background:#0a0818';
 wrap.appendChild(cvs);

 var selIdx=ls15('duetSelIdx',0);
 function drawHarmony(idx){
  var pair=duetPairs[idx];if(!pair)return;
  var ctx=cvs.getContext('2d');ctx.clearRect(0,0,560,300);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,300);
  ctx.font='bold 14px sans-serif';ctx.fillStyle='#c084fc';ctx.textAlign='center';
  ctx.fillText(pair.title+(pair.a?' - '+pair.a:'')+(pair.b?' & '+pair.b:''),280,24);
  var minF=Math.log2(130),maxF=Math.log2(800);
  var fToY=function(f){return 280-(Math.log2(f)-minF)/(maxF-minF)*240;};
  for(var g=0;g<5;g++){
   var y=40+g*52;
   ctx.strokeStyle='rgba(168,85,247,.12)';ctx.lineWidth=1;
   ctx.beginPath();ctx.moveTo(30,y);ctx.lineTo(530,y);ctx.stroke();
  }
  var n1=pair.notes1,n2=pair.notes2,bw=Math.min(500/Math.max(n1.length,n2.length),55);
  for(var i=0;i<n1.length;i++){
   var x=40+i*bw*1.1,y1=fToY(n1[i]),y2=fToY(n2[i]);
   ctx.fillStyle='rgba(255,106,176,.6)';ctx.beginPath();ctx.roundRect(x,y1-5,bw*0.45,10,3);ctx.fill();
   ctx.fillStyle='rgba(99,102,241,.6)';ctx.beginPath();ctx.roundRect(x+bw*0.5,y2-5,bw*0.45,10,3);ctx.fill();
   ctx.strokeStyle='rgba(255,215,0,.2)';ctx.lineWidth=1;
   ctx.beginPath();ctx.moveTo(x+bw*0.22,y1);ctx.lineTo(x+bw*0.72,y2);ctx.stroke();
  }
  ctx.font='10px sans-serif';ctx.textAlign='left';
  ctx.fillStyle='#ff6ab0';ctx.fillText('● 파트 1'+(pair.a?' ('+pair.a+')':''),40,296);
  ctx.fillStyle='#6366f1';ctx.fillText('● 파트 2'+(pair.b?' ('+pair.b+')':''),200,296);
  var interval=Math.abs(Math.round(1200*Math.log2(n1[0]/n2[0])));
  ctx.fillStyle='#fbbf24';ctx.textAlign='right';ctx.fillText('음정 간격: '+interval+' cents',530,296);
 }
 drawHarmony(selIdx);

 var listHtml='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">';
 duetPairs.forEach(function(p,i){
  var played=duetPlayed.indexOf(i)!==-1;
  var sel=i===selIdx;
  listHtml+='<div onclick="window.__v15DuetSel('+i+')" style="cursor:pointer;padding:10px 12px;border-radius:10px;background:'+(sel?'rgba(168,85,247,.25)':'rgba(30,20,60,.6)')+';border:1px solid '+(sel?'#a855f7':'rgba(168,85,247,.1)')+';transition:all .2s">';
  listHtml+='<div style="font-weight:bold;color:#c084fc;font-size:.9em">'+p.title+'</div>';
  listHtml+='<div style="color:#6b7280;font-size:.75em">'+[p.a,p.b].filter(Boolean).join(' & ')+(played?' ✔':'')+'</div>';
  listHtml+='<div style="color:#a78bfa;font-size:.7em;margin-top:2px">Key: '+p.key+' | BPM: '+p.bpm+' | ★'.repeat(p.difficulty)+'</div>';
  listHtml+='</div>';
 });
 listHtml+='</div>';
 listHtml+='<div style="margin-top:12px;padding:10px;background:rgba(168,85,247,.08);border-radius:8px;display:flex;justify-content:space-between;align-items:center">';
 listHtml+='<span style="color:#a78bfa;font-size:.85em">연습한 듀엣: <strong style="color:#c084fc">'+duetPlayed.length+'/12</strong></span>';
 listHtml+='<div style="width:120px;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,#ff6ab0,#6366f1);border-radius:3px;width:'+(duetPlayed.length/12*100)+'%"></div></div>';
 listHtml+='</div>';
 var listEl=document.createElement('div');listEl.innerHTML=listHtml;
 wrap.appendChild(listEl);

 v15M('v15-duet','🎶 듀얿 하모니 매치',wrap);
 window.__v15DuetCvs=cvs;
 checkAch15('duet_view',true);
}
window.__v15DuetSel=function(idx){
 ls15s('duetSelIdx',idx);
 if(duetPlayed.indexOf(idx)===-1){duetPlayed.push(idx);ls15s('duetPlayed',duetPlayed);}
 if(duetPlayed.length>=6)checkAch15('duet_half',true);
 if(duetPlayed.length>=12)checkAch15('duet_master',true);
 sfx15('duetHarmony');
 var old=document.getElementById('v15-duet');if(old)old.remove();
 openDuetHarmony();
};

/* ══════════════════════════════════════════════════
   Feature 2: Timbre Analyzer (6-axis Radar Canvas)
   ══════════════════════════════════════════════════ */
function openTimbreAnalyzer(){
 sfx15('timbreAnalyze');
 var wrap=document.createElement('div');
 wrap.innerHTML='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">당신의 음색 특성을 6축으로 분석합니다. 성대 특성에 따른 추천 장르를 확인하세요.</p>';

 var hist=[];
 try{var raw=localStorage.getItem('sv12-pitchHist');if(raw)hist=JSON.parse(raw);}catch(e){}
 var avgScore=hist.length>0?hist.slice(-10).reduce(function(a,b){return a+b.score;},0)/Math.min(hist.length,10):50;

 var traits={
  brightness:Math.min(100,Math.round(avgScore*0.92+15)),
  warmth:Math.min(100,Math.round(avgScore*0.88+18)),
  breathiness:Math.min(100,Math.round(avgScore*0.78+20)),
  resonance:Math.min(100,Math.round(avgScore*0.95+8)),
  clarity:Math.min(100,Math.round(avgScore*1.0+5)),
  power:Math.min(100,Math.round(avgScore*0.85+12))
 };
 ls15s('timbreTraits',traits);

 var cvs=document.createElement('canvas');cvs.width=420;cvs.height=420;
 cvs.style.cssText='width:100%;max-width:420px;display:block;margin:0 auto 16px;border-radius:12px';
 wrap.appendChild(cvs);

 var labels=['밝기(Brightness)','온기(Warmth)','공기감(Breathiness)','공명(Resonance)','명료도(Clarity)','파워(Power)'];
 var vals=[traits.brightness,traits.warmth,traits.breathiness,traits.resonance,traits.clarity,traits.power];

 function drawTimbre(){
  var ctx=cvs.getContext('2d'),cx=210,cy=210,r=150;
  ctx.clearRect(0,0,420,420);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,420,420);
  for(var lev=1;lev<=5;lev++){
   ctx.beginPath();ctx.strokeStyle='rgba(255,106,176,'+(0.08+lev*0.03)+')';ctx.lineWidth=1;
   for(var j=0;j<6;j++){
    var angle=-Math.PI/2+j*(Math.PI*2/6);
    var px=cx+Math.cos(angle)*(r*lev/5),py=cy+Math.sin(angle)*(r*lev/5);
    if(j===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }ctx.closePath();ctx.stroke();
  }
  for(var k=0;k<6;k++){
   var angle=-Math.PI/2+k*(Math.PI*2/6);
   ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);
   ctx.strokeStyle='rgba(255,106,176,.15)';ctx.stroke();
  }
  ctx.beginPath();
  var grad=ctx.createRadialGradient(cx,cy,0,cx,cy,r);
  grad.addColorStop(0,'rgba(255,106,176,.25)');grad.addColorStop(1,'rgba(99,102,241,.15)');
  ctx.fillStyle=grad;ctx.strokeStyle='#ff6ab0';ctx.lineWidth=2.5;
  for(var m=0;m<6;m++){
   var angle=-Math.PI/2+m*(Math.PI*2/6);
   var val=vals[m]/100*r;
   var px=cx+Math.cos(angle)*val,py=cy+Math.sin(angle)*val;
   if(m===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
  }ctx.closePath();ctx.fill();ctx.stroke();
  for(var n=0;n<6;n++){
   var angle=-Math.PI/2+n*(Math.PI*2/6);
   var val=vals[n]/100*r;
   var px=cx+Math.cos(angle)*val,py=cy+Math.sin(angle)*val;
   ctx.beginPath();ctx.arc(px,py,5,0,Math.PI*2);ctx.fillStyle='#ff6ab0';ctx.fill();
   ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();
  }
  ctx.font='bold 11px sans-serif';ctx.textAlign='center';
  var lc=['#f472b6','#fb923c','#34d399','#60a5fa','#c084fc','#fbbf24'];
  for(var p=0;p<6;p++){
   var angle=-Math.PI/2+p*(Math.PI*2/6);
   var lx=cx+Math.cos(angle)*(r+30),ly=cy+Math.sin(angle)*(r+30);
   ctx.fillStyle=lc[p];ctx.fillText(labels[p],lx,ly);
   ctx.fillStyle='#fff';ctx.font='bold 13px sans-serif';ctx.fillText(vals[p]+'',lx,ly+15);
   ctx.font='bold 11px sans-serif';
  }
  var total=Math.round(vals.reduce(function(a,b){return a+b;},0)/6);
  ctx.font='bold 24px sans-serif';ctx.fillStyle='#fbbf24';ctx.fillText(total+'점',cx,cy+4);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';ctx.fillText('음색 종합',cx,cy+20);
 }
 drawTimbre();

 var maxTrait=labels[vals.indexOf(Math.max.apply(null,vals))];
 var voiceTypes=[
  {type:'파워 보컬리스트',match:'power',genre:'록/발라드/EDM',icon:'🔥'},
  {type:'벨뺠 보컬리스트',match:'warmth',genre:'발라드/R&B/재즈',icon:'🌟'},
  {type:'클린 보컬리스트',match:'clarity',genre:'팝/트로트/민요',icon:'💠'},
  {type:'에어리 보컬리스트',match:'breathiness',genre:'인디/어쿠스틱/펬크',icon:'🌿'},
  {type:'브라이트 보컬리스트',match:'brightness',genre:'댄스/아이돌/뮤지컬',icon:'✨'},
  {type:'소울 보컬리스트',match:'resonance',genre:'솔/R&B/고전',icon:'🌊'}
 ];
 var myType=voiceTypes.find(function(v){return labels.map(function(l){return l.split('(')[0];}).indexOf(maxTrait.split('(')[0])===labels.map(function(l){return l.split('(')[0];}).indexOf(v.match.charAt(0).toUpperCase()+v.match.slice(1));})||voiceTypes[0];
 var maxIdx=vals.indexOf(Math.max.apply(null,vals));
 var matchType=voiceTypes[maxIdx]||voiceTypes[0];

 var infoHtml='<div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:10px">';
 infoHtml+='<div style="grid-column:1/-1;background:linear-gradient(135deg,rgba(255,106,176,.15),rgba(99,102,241,.15));border-radius:12px;padding:16px;text-align:center">';
 infoHtml+='<div style="font-size:2em">'+matchType.icon+'</div>';
 infoHtml+='<div style="color:#c084fc;font-size:1.1em;font-weight:bold;margin-top:4px">당신은 '+matchType.type+'</div>';
 infoHtml+='<div style="color:#a78bfa;font-size:.85em;margin-top:4px">추천 장르: '+matchType.genre+'</div>';
 infoHtml+='</div>';
 vals.forEach(function(v,i){
  infoHtml+='<div style="background:#1e1b4b;border-radius:8px;padding:10px;text-align:center">';
  infoHtml+='<div style="color:'+lc[i]+';font-size:.8em">'+labels[i]+'</div>';
  infoHtml+='<div style="color:#fff;font-size:1.3em;font-weight:bold;margin-top:2px">'+v+'</div>';
  infoHtml+='<div style="width:100%;height:4px;background:rgba(255,255,255,.1);border-radius:2px;margin-top:4px;overflow:hidden"><div style="height:100%;background:'+lc[i]+';width:'+v+'%;border-radius:2px"></div></div>';
  infoHtml+='</div>';
 });
 infoHtml+='</div>';
 var infoEl=document.createElement('div');infoEl.innerHTML=infoHtml;wrap.appendChild(infoEl);
 v15M('v15-timbre','🎤 음색 분석기',wrap);
 checkAch15('timbre_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 3: Vocal Growth Chart (Canvas Line Graph)
   ══════════════════════════════════════════════════ */
function openGrowthChart(){
 sfx15('growthChart');
 var wrap=document.createElement('div');
 wrap.innerHTML='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">가창력 성장 추이를 시간별로 추적합니다.</p>';

 var hist=[];
 try{var raw=localStorage.getItem('sv12-pitchHist');if(raw)hist=JSON.parse(raw);}catch(e){}
 var growthData=ls15('growthData',[]);
 if(hist.length>0){
  var avg=Math.round(hist.slice(-5).reduce(function(a,b){return a+b.score;},0)/Math.min(hist.length,5));
  var today=new Date().toISOString().slice(0,10);
  var existing=growthData.find(function(g){return g.date===today;});
  if(existing)existing.score=avg;
  else{growthData.push({date:today,score:avg});if(growthData.length>60)growthData.shift();}
  ls15s('growthData',growthData);
 }

 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=340;
 cvs.style.cssText='width:100%;max-width:600px;display:block;margin:0 auto 16px;border-radius:12px;background:#0a0818';
 wrap.appendChild(cvs);

 function drawGrowth(){
  var ctx=cvs.getContext('2d');ctx.clearRect(0,0,600,340);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,600,340);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#c084fc';ctx.textAlign='center';
  ctx.fillText('가창력 성장 추이',300,22);

  var data=growthData.length>0?growthData:[{date:'today',score:50}];
  var maxPts=Math.min(data.length,30);
  var pts=data.slice(-maxPts);
  var padL=50,padR=20,padT=40,padB=50;
  var gW=600-padL-padR,gH=340-padT-padB;

  for(var i=0;i<=5;i++){
   var y=padT+gH*(1-i/5);
   ctx.strokeStyle='rgba(168,85,247,.1)';ctx.lineWidth=1;
   ctx.beginPath();ctx.moveTo(padL,y);ctx.lineTo(600-padR,y);ctx.stroke();
   ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.textAlign='right';
   ctx.fillText((i*20)+'',padL-6,y+3);
  }

  if(pts.length>1){
   var grad=ctx.createLinearGradient(0,padT,0,padT+gH);
   grad.addColorStop(0,'rgba(255,106,176,.3)');grad.addColorStop(1,'rgba(255,106,176,.02)');
   ctx.beginPath();ctx.moveTo(padL,padT+gH);
   for(var j=0;j<pts.length;j++){
    var x=padL+j/(pts.length-1)*gW;
    var y=padT+gH*(1-pts[j].score/100);
    ctx.lineTo(x,y);
   }
   ctx.lineTo(padL+(pts.length-1)/(pts.length-1)*gW,padT+gH);
   ctx.fillStyle=grad;ctx.fill();

   ctx.beginPath();ctx.strokeStyle='#ff6ab0';ctx.lineWidth=2.5;
   ctx.shadowColor='rgba(255,106,176,.4)';ctx.shadowBlur=8;
   for(var j=0;j<pts.length;j++){
    var x=padL+j/(pts.length-1)*gW;
    var y=padT+gH*(1-pts[j].score/100);
    if(j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
   }ctx.stroke();ctx.shadowBlur=0;

   for(var j=0;j<pts.length;j++){
    var x=padL+j/(pts.length-1)*gW;
    var y=padT+gH*(1-pts[j].score/100);
    ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);
    ctx.fillStyle='#ff6ab0';ctx.fill();
    ctx.strokeStyle='#fff';ctx.lineWidth=1.5;ctx.stroke();
   }

   for(var j=0;j<pts.length;j++){
    if(j%Math.max(1,Math.floor(pts.length/6))===0||j===pts.length-1){
     var x=padL+j/(pts.length-1)*gW;
     ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.textAlign='center';
     ctx.fillText(pts[j].date.slice(5),x,padT+gH+16);
    }
   }
  }else{
   ctx.fillStyle='#6b7280';ctx.font='14px sans-serif';ctx.textAlign='center';
   ctx.fillText('데이터가 부족합니다. 노래를 더 불러보세요!',300,170);
  }

  if(pts.length>=2){
   var first=pts[0].score,last=pts[pts.length-1].score;
   var diff=last-first;
   ctx.font='bold 12px sans-serif';ctx.textAlign='left';ctx.fillStyle=diff>=0?'#22c55e':'#ef4444';
   ctx.fillText((diff>=0?'▲':'▼')+Math.abs(diff)+'점 '+(diff>=0?'성장':'하락'),padL,padT+gH+38);
  }
 }
 drawGrowth();

 var statsHtml='<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-top:12px">';
 var totalSessions=growthData.length;
 var bestScore=growthData.length>0?Math.max.apply(null,growthData.map(function(d){return d.score;})):0;
 var latestScore=growthData.length>0?growthData[growthData.length-1].score:0;
 var avgAll=growthData.length>0?Math.round(growthData.reduce(function(a,b){return a+b.score;},0)/growthData.length):0;
 statsHtml+='<div style="background:#1e1b4b;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.75em">총 세션</div><div style="color:#c084fc;font-size:1.4em;font-weight:bold">'+totalSessions+'</div></div>';
 statsHtml+='<div style="background:#1e1b4b;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.75em">최고 점수</div><div style="color:#fbbf24;font-size:1.4em;font-weight:bold">'+bestScore+'</div></div>';
 statsHtml+='<div style="background:#1e1b4b;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.75em">최근 점수</div><div style="color:#22c55e;font-size:1.4em;font-weight:bold">'+latestScore+'</div></div>';
 statsHtml+='<div style="background:#1e1b4b;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.75em">평균</div><div style="color:#ff6ab0;font-size:1.4em;font-weight:bold">'+avgAll+'</div></div>';
 statsHtml+='</div>';
 var statsEl=document.createElement('div');statsEl.innerHTML=statsHtml;wrap.appendChild(statsEl);
 v15M('v15-growth','📈 가창력 성장 차트',wrap);
 checkAch15('growth_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 4: Pronunciation Clinic (12 types)
   ══════════════════════════════════════════════════ */
var pronunLessons=[
 {id:'r_l',title:'ㄹ/ㅁ 발음',desc:'ㄹ과 ㅁ의 정확한 구분',example:'달라 vs 달마',tip:'ㄹ은 혀끝이 입천장, ㅁ은 입술을 닫아요',icon:'👅'},
 {id:'nasals',title:'비음 발성',desc:'ㄴ/ㅁ/ㅇ 코 공명 활용',example:'노래-말-방',tip:'코로 공기를 보내며 소리를 내보세요',icon:'👃'},
 {id:'ssang',title:'쌍자음 강세',desc:'ㄲ/ㄸ/ㅃ/ㅈ/ㅉ 강하게',example:'까-따-뮠-뽠-싸',tip:'성대를 긴장시키고 강하게 터트려요',icon:'💪'},
 {id:'aspirate',title:'격음 발성',desc:'ㅋ/ㅌ/ㅍ/ㅎ 날카롭게',example:'카-타-파-하',tip:'숨을 강하게 내뿿으며 발음해요',icon:'💨'},
 {id:'vowel_o',title:'ㅗ/ㅕ 구분',desc:'원순모음 정확히',example:'오늘 vs 어느',tip:'ㅗ은 입을 둥글게, ㅕ는 반만 둥글게',icon:'😮'},
 {id:'vowel_eu',title:'ㅡ/ㅣ 구분',desc:'평순모음 차이',example:'그냥 vs 기냥',tip:'ㅡ은 입술을 펴고, ㅣ는 옆으로 남작하게',icon:'🗣️'},
 {id:'linking',title:'연음법칙',desc:'받침+모음 연결발음',example:'음악을→음마걸',tip:'부드럽게 연결하되 해당 음절을 인식해요',icon:'🔗'},
 {id:'final_cons',title:'받침 발음 7종',desc:'ㄱㄴㄷㄹㅁㅂㅇ 받침',example:'밥-꽃-박-낙',tip:'종성 7개를 정확히 구분해서 끝내요',icon:'📌'},
 {id:'breathing',title:'브레스 컨트롤',desc:'호흡에 따른 발성',example:'긴 문장을 끊지 않고',tip:'복식호흡으로 폐활량을 늘려요',icon:'🌬️'},
 {id:'vibrato_p',title:'비브라토 발음',desc:'음정 떨림 자연스럽게',example:'아~(음정 변화)',tip:'횡격막을 규칙적으로 수축/이완',icon:'〰️'},
 {id:'diction',title:'발음 명료도',desc:'하나하나 똑똑히',example:'빠르게 불러도 나 정확히',tip:'벨베 후반레도 정확히 발음해요',icon:'🌟'},
 {id:'emotion',title:'감정 표현력',desc:'감정을 실어 발성',example:'슬픈/기쁜/화난 음색 변화',tip:'가사의 감정을 먼저 느꺼보세요',icon:'😢'}
];
var pronunDone=ls15('pronunDone',[]);

function openPronunClinic(){
 sfx15('pronuncia');
 var html='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">한국어 발음 12종 교정 가이드입니다. 각 항목을 열어 팁을 확인하세요.</p>';
 html+='<div style="display:flex;flex-direction:column;gap:8px">';
 pronunLessons.forEach(function(l){
  var done=pronunDone.indexOf(l.id)!==-1;
  html+='<div onclick="window.__v15PronunDone(\''+l.id+'\')" style="cursor:pointer;padding:14px;border-radius:12px;background:linear-gradient(135deg,rgba(30,20,60,.8),rgba(40,25,70,.6));border:1px solid '+(done?'#22c55e':'rgba(168,85,247,.15)')+';transition:all .2s">';
  html+='<div style="display:flex;align-items:center;gap:10px">';
  html+='<span style="font-size:1.5em">'+l.icon+'</span>';
  html+='<div style="flex:1"><div style="color:#c084fc;font-weight:bold">'+l.title+(done?' ✔':'')+' <span style="color:#6b7280;font-size:.8em">'+l.desc+'</span></div>';
  html+='<div style="color:#a78bfa;font-size:.85em;margin-top:4px">예시: '+l.example+'</div>';
  html+='<div style="color:#22c55e;font-size:.8em;margin-top:2px">팁: '+l.tip+'</div>';
  html+='</div></div></div>';
 });
 html+='</div>';
 html+='<div style="margin-top:12px;padding:10px;background:rgba(168,85,247,.08);border-radius:8px;display:flex;justify-content:space-between;align-items:center">';
 html+='<span style="color:#a78bfa;font-size:.85em">완료: <strong style="color:#c084fc">'+pronunDone.length+'/12</strong></span>';
 html+='<div style="width:120px;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,#22c55e,#34d399);border-radius:3px;width:'+(pronunDone.length/12*100)+'%"></div></div>';
 html+='</div>';
 v15M('v15-pronun','👅 발음 클리닉',html);
 checkAch15('pronun_view',true);
}
window.__v15PronunDone=function(id){
 if(pronunDone.indexOf(id)===-1){pronunDone.push(id);ls15s('pronunDone',pronunDone);sfx15('pronuncia');}
 if(pronunDone.length>=6)checkAch15('pronun_half',true);
 if(pronunDone.length>=12)checkAch15('pronun_master',true);
 var old=document.getElementById('v15-pronun');if(old)old.remove();openPronunClinic();
};

/* ══════════════════════════════════════════════════
   Feature 5: Party Mode (4-player rotation)
   ══════════════════════════════════════════════════ */
var partyState=ls15('partyState',{players:[],round:0,scores:{}});

function openPartyMode(){
 sfx15('partyStart');
 var html='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">친구들과 로테이션으로 노래 대결! 최대 4명까지 참여할 수 있어요.</p>';

 html+='<div style="margin-bottom:16px">';
 html+='<div style="color:#c084fc;font-weight:bold;margin-bottom:8px">참가자 설정 (최대 4명)</div>';
 for(var i=0;i<4;i++){
  var name=partyState.players[i]||'';
  html+='<div style="display:flex;gap:8px;margin:4px 0;align-items:center">';
  html+='<span style="color:#ff6ab0;font-size:1.2em">'+(i<2?['🎤','🎵'][i]:['🎶','🎼'][i-2])+'</span>';
  html+='<input id="v15-party-p'+i+'" value="'+name.replace(/"/g,'&quot;')+'" placeholder="참가자 '+(i+1)+'" style="flex:1;padding:8px 12px;background:rgba(255,255,255,.06);border:1px solid rgba(168,85,247,.2);border-radius:8px;color:#e0d0ff;font-size:.9em;outline:none">';
  html+='</div>';
 }
 html+='</div>';

 if(partyState.players.length>0&&Object.keys(partyState.scores).length>0){
  html+='<div style="margin-bottom:16px"><div style="color:#fbbf24;font-weight:bold;margin-bottom:8px">파티 순위</div>';
  var sorted=partyState.players.filter(Boolean).map(function(p){
   var ss=partyState.scores[p]||[];
   var total=ss.reduce(function(a,b){return a+b;},0);
   return {name:p,total:total,rounds:ss.length};
  }).sort(function(a,b){return b.total-a.total;});
  var medals=['🥇','🥈','🥉','🏅'];
  sorted.forEach(function(p,i){
   html+='<div style="display:flex;justify-content:space-between;padding:8px 12px;background:rgba(30,20,60,.6);border-radius:8px;margin:4px 0;border:1px solid '+(i===0?'#fbbf24':'rgba(168,85,247,.1)')+'">';
   html+='<span style="color:#c084fc">'+(medals[i]||'')+' '+p.name+'</span>';
   html+='<span style="color:#fbbf24;font-weight:bold">'+p.total+'점 ('+p.rounds+'곡)</span>';
   html+='</div>';
  });
  html+='</div>';
 }

 html+='<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">';
 html+='<button onclick="window.__v15PartyStart()" style="padding:10px 24px;background:linear-gradient(135deg,#ff6ab0,#a855f7);border:none;color:#fff;border-radius:20px;font-weight:bold;cursor:pointer">파티 시작</button>';
 html+='<button onclick="window.__v15PartyReset()" style="padding:10px 24px;background:rgba(255,255,255,.08);border:1px solid rgba(168,85,247,.2);color:#a78bfa;border-radius:20px;cursor:pointer">초기화</button>';
 html+='</div>';
 v15M('v15-party','🎉 노래방 파티 모드',html);
 checkAch15('party_open',true);
}
window.__v15PartyStart=function(){
 var players=[];
 for(var i=0;i<4;i++){
  var el=document.getElementById('v15-party-p'+i);
  if(el&&el.value.trim())players.push(el.value.trim());
 }
 if(players.length<2){alert('최소 2명이 필요합니다!');return;}
 partyState.players=players;
 partyState.round=(partyState.round||0)+1;
 if(!partyState.scores)partyState.scores={};
 players.forEach(function(p){if(!partyState.scores[p])partyState.scores[p]=[];});
 ls15s('partyState',partyState);
 sfx15('partyScore');
 var currentPlayer=players[(partyState.round-1)%players.length];
 alert('파티 라운드 '+partyState.round+'! '+currentPlayer+'님 차례입니다.\n곡을 선택해주세요!');
 var m=document.getElementById('v15-party');if(m)m.remove();
};
window.__v15PartyReset=function(){
 partyState={players:[],round:0,scores:{}};
 ls15s('partyState',partyState);
 var m=document.getElementById('v15-party');if(m)m.remove();
 openPartyMode();
};

/* ══════════════════════════════════════════════════
   Feature 6: Remix Studio Canvas (BPM/Key Preview)
   ══════════════════════════════════════════════════ */
function openRemixStudio(){
 sfx15('remixBpm');
 var wrap=document.createElement('div');
 wrap.innerHTML='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">곡의 BPM과 키를 미리 조절해보세요. 파형이 실시간으로 변합니다.</p>';

 var bpm=ls15('remixBpm',100);
 var keyShift=ls15('remixKey',0);
 var remixUsed=ls15('remixUsed',0);

 var controls=document.createElement('div');
 controls.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px';
 controls.innerHTML='<div style="background:#1e1b4b;border-radius:10px;padding:14px;text-align:center">'+
  '<div style="color:#a78bfa;font-size:.85em;margin-bottom:6px">BPM</div>'+
  '<input type="range" id="v15-remix-bpm" min="40" max="200" value="'+bpm+'" style="width:100%;accent-color:#ff6ab0">'+
  '<div style="color:#ff6ab0;font-size:1.2em;font-weight:bold;margin-top:4px" id="v15-remix-bpm-val">'+bpm+'</div>'+
  '</div>'+
  '<div style="background:#1e1b4b;border-radius:10px;padding:14px;text-align:center">'+
  '<div style="color:#a78bfa;font-size:.85em;margin-bottom:6px">키 조절</div>'+
  '<input type="range" id="v15-remix-key" min="-6" max="6" value="'+keyShift+'" style="width:100%;accent-color:#a855f7">'+
  '<div style="color:#a855f7;font-size:1.2em;font-weight:bold;margin-top:4px" id="v15-remix-key-val">'+(keyShift>=0?'+':'')+keyShift+'</div>'+
  '</div>';
 wrap.appendChild(controls);

 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=200;
 cvs.style.cssText='width:100%;max-width:560px;display:block;margin:0 auto 12px;border-radius:12px;background:#0a0818';
 wrap.appendChild(cvs);

 function drawWaveform(){
  var ctx=cvs.getContext('2d');ctx.clearRect(0,0,560,200);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,200);
  var freq=bpm/60;var keyMul=Math.pow(2,keyShift/12);
  var grad=ctx.createLinearGradient(0,0,560,0);
  grad.addColorStop(0,'#ff6ab0');grad.addColorStop(0.5,'#a855f7');grad.addColorStop(1,'#6366f1');
  ctx.strokeStyle=grad;ctx.lineWidth=2.5;ctx.shadowColor='rgba(255,106,176,.4)';ctx.shadowBlur=6;
  ctx.beginPath();
  for(var x=0;x<560;x++){
   var t=x/560*4*Math.PI;
   var y=100+Math.sin(t*freq*0.5)*40*keyMul+Math.sin(t*freq*1.5)*15+Math.sin(t*freq*3)*8;
   y=Math.max(10,Math.min(190,y));
   if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }ctx.stroke();ctx.shadowBlur=0;

  ctx.strokeStyle='rgba(255,215,0,.15)';ctx.lineWidth=1;ctx.setLineDash([4,4]);
  ctx.beginPath();ctx.moveTo(0,100);ctx.lineTo(560,100);ctx.stroke();
  ctx.setLineDash([]);

  ctx.font='bold 11px sans-serif';ctx.fillStyle='#fbbf24';ctx.textAlign='left';
  ctx.fillText('BPM: '+bpm+' | Key: '+(keyShift>=0?'+':'')+keyShift,10,18);
  var tempo=bpm<70?'Slow':bpm<100?'Moderate':bpm<130?'Fast':'Very Fast';
  ctx.fillStyle='#a78bfa';ctx.textAlign='right';ctx.fillText('Tempo: '+tempo,550,18);
 }
 drawWaveform();

 setTimeout(function(){
  var bpmSlider=document.getElementById('v15-remix-bpm');
  var keySlider=document.getElementById('v15-remix-key');
  if(bpmSlider)bpmSlider.oninput=function(){
   bpm=parseInt(this.value);
   document.getElementById('v15-remix-bpm-val').textContent=bpm;
   ls15s('remixBpm',bpm);drawWaveform();sfx15('remixBpm');
  };
  if(keySlider)keySlider.oninput=function(){
   keyShift=parseInt(this.value);
   document.getElementById('v15-remix-key-val').textContent=(keyShift>=0?'+':'')+keyShift;
   ls15s('remixKey',keyShift);drawWaveform();sfx15('remixKey');
  };
 },100);

 var presets='<div style="margin-top:8px"><div style="color:#c084fc;font-weight:bold;margin-bottom:8px;font-size:.9em">프리셋</div>';
 presets+='<div style="display:flex;gap:6px;flex-wrap:wrap">';
 [{name:'발라드',b:70,k:0},{name:'팝',b:110,k:0},{name:'댄스',b:128,k:0},{name:'트로트',b:85,k:-2},{name:'R&B',b:90,k:1},{name:'락',b:140,k:2}].forEach(function(p){
  presets+='<button onclick="document.getElementById(\'v15-remix-bpm\').value='+p.b+';document.getElementById(\'v15-remix-key\').value='+p.k+';document.getElementById(\'v15-remix-bpm\').dispatchEvent(new Event(\'input\'));document.getElementById(\'v15-remix-key\').dispatchEvent(new Event(\'input\'))" style="padding:6px 14px;background:rgba(168,85,247,.15);border:1px solid rgba(168,85,247,.2);color:#c084fc;border-radius:16px;font-size:.8em;cursor:pointer">'+p.name+'</button>';
 });
 presets+='</div></div>';
 var presetsEl=document.createElement('div');presetsEl.innerHTML=presets;wrap.appendChild(presetsEl);

 remixUsed++;ls15s('remixUsed',remixUsed);
 v15M('v15-remix','🏚️ 리믹스 스튜디오',wrap);
 checkAch15('remix_open',true);
}

/* ══════════════════════════════════════════════════
   Feature 7: 30-Day Vocal Challenge (Canvas Calendar)
   ══════════════════════════════════════════════════ */
var challengeMissions=[
 '아~ 롱톤 30초','스케일 상행+하행 3회','비브라토 연습 1분',
 '발라드 1곡 부르기','호흡 4-7-8 5세트','발음 연습 ㄹ/ㅁ 30번',
 '팝송 고음 도전','저음 발성 연습','듀얿 파트 연습',
 '아카펠라 반주 부르기','리듬 탸핑 3분','백비트 2분',
 '패이크 보이스 연습','낮은 키 곡 도전','높은 키 곡 도전',
 '에코 반향 노래하기','감성 발라드 도전','슠나는 대시 팀 복습',
 '트로트 1곡 완주','영어 팝송 발음','한국어 발음 연습',
 '박자 맞추기 트레이닝','홍얰거림 스트레치','워밍업 전체 수행',
 '콘서트 모드 도전','그룹 보컬 해모니','벨치 보컬 연습',
 '파워 발성 트레이닝','부드러운 연결 발성','무반주 부르기',
 '베스트 곡 S등급 도전'
];
var challengeDay=ls15('challengeDay',{start:null,done:[]});

function openChallenge(){
 sfx15('challenge');
 var today=new Date();var todayStr=today.toISOString().slice(0,10);
 if(!challengeDay.start)challengeDay.start=todayStr;

 var startDate=new Date(challengeDay.start);
 var dayNum=Math.floor((today-startDate)/(1000*60*60*24))+1;
 if(dayNum>30)dayNum=30;

 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=320;
 cvs.style.cssText='width:100%;max-width:560px;display:block;margin:0 auto 16px;border-radius:12px;background:#0a0818';
 wrap.appendChild(cvs);

 function drawCalendar(){
  var ctx=cvs.getContext('2d');ctx.clearRect(0,0,560,320);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,320);
  ctx.font='bold 14px sans-serif';ctx.fillStyle='#c084fc';ctx.textAlign='center';
  ctx.fillText('30일 보컬 챌린지',280,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('Day '+dayNum+'/30 | 완료: '+challengeDay.done.length+'/30',280,38);

  var cols=6,rows=5,cw=80,ch=48,padL=20,padT=52;
  for(var d=0;d<30;d++){
   var col=d%cols,row=Math.floor(d/cols);
   var x=padL+col*cw+col*8,y=padT+row*ch+row*6;
   var isDone=challengeDay.done.indexOf(d)!==-1;
   var isCurrent=d===dayNum-1;
   var isPast=d<dayNum-1;

   ctx.fillStyle=isDone?'rgba(34,197,94,.2)':isCurrent?'rgba(255,106,176,.15)':'rgba(30,20,60,.5)';
   ctx.strokeStyle=isDone?'#22c55e':isCurrent?'#ff6ab0':'rgba(168,85,247,.15)';
   ctx.lineWidth=isCurrent?2:1;
   ctx.beginPath();ctx.roundRect(x,y,cw,ch,6);ctx.fill();ctx.stroke();

   ctx.font='bold 10px sans-serif';ctx.textAlign='center';
   ctx.fillStyle=isDone?'#22c55e':isCurrent?'#ff6ab0':isPast?'#6b7280':'#a78bfa';
   ctx.fillText('Day '+(d+1),x+cw/2,y+16);

   if(isDone){ctx.font='16px sans-serif';ctx.fillText('✔',x+cw/2,y+38);}
   else{ctx.font='9px sans-serif';ctx.fillStyle='#6b7280';
    var mission=challengeMissions[d]||'미션';
    if(mission.length>8)mission=mission.slice(0,8)+'..';
    ctx.fillText(mission,x+cw/2,y+36);
   }
  }
  var progress=challengeDay.done.length/30*100;
  ctx.fillStyle='rgba(255,255,255,.06)';ctx.beginPath();ctx.roundRect(20,290,520,20,4);ctx.fill();
  var pGrad=ctx.createLinearGradient(20,0,20+520*(progress/100),0);
  pGrad.addColorStop(0,'#ff6ab0');pGrad.addColorStop(1,'#a855f7');
  ctx.fillStyle=pGrad;ctx.beginPath();ctx.roundRect(20,290,520*(progress/100),20,4);ctx.fill();
  ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
  ctx.fillText(Math.round(progress)+'%',280,304);
 }
 drawCalendar();

 var missionIdx=dayNum-1;
 var currentMission=challengeMissions[missionIdx]||'축하합니다!';
 var isDoneToday=challengeDay.done.indexOf(missionIdx)!==-1;

 var missionHtml='<div style="margin-top:12px;padding:16px;background:linear-gradient(135deg,rgba(255,106,176,.1),rgba(168,85,247,.1));border-radius:12px;text-align:center">';
 missionHtml+='<div style="color:#a78bfa;font-size:.85em">Day '+dayNum+' 미션</div>';
 missionHtml+='<div style="color:#c084fc;font-size:1.2em;font-weight:bold;margin-top:4px">'+currentMission+'</div>';
 if(!isDoneToday){
  missionHtml+='<button onclick="window.__v15ChallengeComplete('+missionIdx+')" style="margin-top:10px;padding:8px 24px;background:linear-gradient(135deg,#22c55e,#16a34a);border:none;color:#fff;border-radius:16px;font-weight:bold;cursor:pointer">미션 완료!</button>';
 }else{
  missionHtml+='<div style="color:#22c55e;font-size:.9em;margin-top:8px">✔ 오늘 미션 완료!</div>';
 }
 missionHtml+='</div>';
 var mEl=document.createElement('div');mEl.innerHTML=missionHtml;wrap.appendChild(mEl);
 v15M('v15-challenge','💪 30일 보컬 챌린지',wrap);
 checkAch15('challenge_open',true);
}
window.__v15ChallengeComplete=function(idx){
 if(challengeDay.done.indexOf(idx)===-1){
  challengeDay.done.push(idx);ls15s('challengeDay',challengeDay);sfx15('challenge');
 }
 if(challengeDay.done.length>=7)checkAch15('challenge_7',true);
 if(challengeDay.done.length>=30)checkAch15('challenge_30',true);
 var m=document.getElementById('v15-challenge');if(m)m.remove();openChallenge();
};

/* ══════════════════════════════════════════════════
   Feature 8: Music Sentiment Test (10Q personality)
   ══════════════════════════════════════════════════ */
var sentimentQs=[
 {q:'슬플 때 어떤 노래를 듣나요?',a:['발라드','팝송','힘알컬팝','인디'],weights:['E','A','P','I']},
 {q:'비 오는 날 좋아하는 음악은?',a:['재즈','로파이','슠스팝','사운드트랙'],weights:['I','E','A','I']},
 {q:'노래방에서 첫 곡은?',a:['신나는 곡','감성 발라드','최신 히트곡','나만의 애창곡'],weights:['A','E','P','I']},
 {q:'곡을 고를 때 가장 중요한 것은?',a:['가사','멜로디','리듬','분위기'],weights:['E','A','P','I']},
 {q:'콘서트에서 선호하는 위치는?',a:['맨 앞줄','중간 스탠딩','뒷줄 편하게','무대 옆 관객석'],weights:['P','A','I','E']},
 {q:'가장 끄리는 장르는?',a:['R&B/솔','록/메탈','트로트/민요','일렉트로니카'],weights:['E','P','I','A']},
 {q:'노래할 때 가장 중요한 것은?',a:['음정 정확도','감정 전달','퍼포먼스','자기만족'],weights:['A','E','P','I']},
 {q:'스트레스 해소법은?',a:['노래 부르기','악기 연주','음악 듣기','춤추기'],weights:['P','A','I','A']},
 {q:'보컬 롤모델은?',a:['파워 보컬','감성 보컬','테크니컬 보컬','유니크 보컬'],weights:['P','E','A','I']},
 {q:'이상적인 무대는?',a:['대형 아레나','소규모 라이브','노래방 무대','요리 하며 흥얼거림'],weights:['P','E','A','I']}
];
var sentimentResult=ls15('sentimentResult',null);

function openSentimentTest(){
 sfx15('sentimentQ');
 if(sentimentResult){
  showSentimentResult();return;
 }
 var qIdx=0;
 function showQ(idx){
  var q=sentimentQs[idx];
  var html='<div style="margin-bottom:12px;text-align:center"><div style="color:#a78bfa;font-size:.85em">Question '+(idx+1)+'/'+sentimentQs.length+'</div>';
  html+='<div style="width:100%;height:6px;background:rgba(255,255,255,.08);border-radius:3px;margin:8px 0;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,#ff6ab0,#a855f7);width:'+((idx+1)/sentimentQs.length*100)+'%;border-radius:3px"></div></div>';
  html+='<div style="color:#c084fc;font-size:1.15em;font-weight:bold;margin:16px 0">'+q.q+'</div></div>';
  html+='<div style="display:flex;flex-direction:column;gap:8px">';
  q.a.forEach(function(a,ai){
   html+='<button onclick="window.__v15SentimentAnswer('+idx+','+ai+')" style="padding:14px;background:rgba(30,20,60,.6);border:1px solid rgba(168,85,247,.2);color:#c084fc;border-radius:12px;font-size:.95em;cursor:pointer;text-align:left;transition:all .2s">';
   html+='○ '+a+'</button>';
  });
  html+='</div>';
  v15M('v15-sentiment','🎵 음악 감성 테스트',html);
 }
 showQ(0);
 var answers=[];
 window.__v15SentimentAnswer=function(qi,ai){
  sfx15('sentimentQ');
  answers.push(sentimentQs[qi].weights[ai]);
  if(qi+1<sentimentQs.length){
   var m=document.getElementById('v15-sentiment');if(m)m.remove();
   showQ(qi+1);
  }else{
   var counts={E:0,A:0,P:0,I:0};
   answers.forEach(function(w){counts[w]=(counts[w]||0)+1;});
   var maxType=Object.keys(counts).reduce(function(a,b){return counts[a]>counts[b]?a:b;});
   sentimentResult={type:maxType,counts:counts};
   ls15s('sentimentResult',sentimentResult);
   var m=document.getElementById('v15-sentiment');if(m)m.remove();
   showSentimentResult();
   checkAch15('sentiment_done',true);
  }
 };
}
function showSentimentResult(){
 var types={
  E:{name:'감성 보컬리스트',icon:'💖',desc:'감정을 음악에 녹여내는 타입. 발라드/R&B가 어울리며, 청중의 마음을 움직이는 맥락형 가수.',color:'#f472b6'},
  A:{name:'아티스트 보컬리스트',icon:'🎨',desc:'음악적 완성도를 추구하는 타입. 테크닉과 표현력을 균형 있게 발휘하며, 다양한 장르를 소화.',color:'#a855f7'},
  P:{name:'파워 퍼포머',icon:'🔥',desc:'무대 위에서 빛나는 타입. 에너지 넓치는 곡과 파워풀한 발성이 강점.',color:'#ef4444'},
  I:{name:'인디 아티스트',icon:'🌿',desc:'자기만의 색깔을 가진 타입. 독특한 음색과 자유로운 해석으로 음악을 표현.',color:'#22c55e'}
 };
 var t=types[sentimentResult.type]||types.E;
 var html='<div style="text-align:center;margin-bottom:20px">';
 html+='<div style="font-size:3em;margin-bottom:8px">'+t.icon+'</div>';
 html+='<div style="color:'+t.color+';font-size:1.4em;font-weight:bold">당신은 &quot;'+t.name+'&quot;</div>';
 html+='<div style="color:#a78bfa;font-size:.9em;margin-top:8px;line-height:1.6">'+t.desc+'</div>';
 html+='</div>';
 html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">';
 Object.keys(types).forEach(function(k){
  var pct=Math.round((sentimentResult.counts[k]||0)/sentimentQs.length*100);
  html+='<div style="background:#1e1b4b;border-radius:8px;padding:10px;text-align:center;border:2px solid '+(k===sentimentResult.type?t.color:'transparent')+'">';
  html+='<div style="font-size:1.3em">'+types[k].icon+'</div>';
  html+='<div style="color:'+types[k].color+';font-size:.85em;font-weight:bold;margin-top:2px">'+types[k].name.split(' ')[0]+'</div>';
  html+='<div style="color:#fff;font-size:1.1em;font-weight:bold;margin-top:2px">'+pct+'%</div>';
  html+='</div>';
 });
 html+='</div>';
 html+='<div style="text-align:center"><button onclick="window.__v15SentimentReset()" style="padding:8px 20px;background:rgba(168,85,247,.15);border:1px solid rgba(168,85,247,.2);color:#a78bfa;border-radius:16px;font-size:.85em;cursor:pointer">다시 테스트하기</button></div>';
 v15M('v15-sentiment','🎵 음악 감성 테스트 결과',html);
}
window.__v15SentimentReset=function(){
 sentimentResult=null;ls15s('sentimentResult',null);
 var m=document.getElementById('v15-sentiment');if(m)m.remove();
 openSentimentTest();
};

/* ══════════════════════════════════════════════════
   Quiz v15 +15 questions (117->132)
   ══════════════════════════════════════════════════ */
var v15Quizzes=[
 {q:'듀얿에서 하모니의 기본 음정 간격은?',a:['&3도','&5도','&8도','&2도'],c:1},
 {q:'BPM이 120이면 1분에 몇 박인가요?',a:['60','120','180','90'],c:1},
 {q:'키를 1반음 올리면 주파수는 어떻게 변하나요?',a:['×2','×1.5','×2¹/¹²','×1.2'],c:2},
 {q:'발라드 장르의 일반적인 BPM 범위는?',a:['60~80','100~120','130~160','40~60'],c:0},
 {q:'비브라토란 무엇인가요?',a:['음정의 빠른 떨림','박자 변화','음량 조절','음색 변환'],c:0},
 {q:'한국어 발음에서 종성(coda)은 몇 개인가요?',a:['5개','7개','10개','14개'],c:1},
 {q:'연음법칙이란?',a:['받침+모음 연결','자음+자음 동화','모음+모음 탈락','받침 생략'],c:0},
 {q:'아카펠라(음악) 사전적 뜻은?',a:['반주 없이','빠르게','강하게','부드럽게'],c:0},
 {q:'파티 모드에서 최대 몇 명까지 참여 가능한가요?',a:['2명','4명','6명','8명'],c:1},
 {q:'음색(Timbre) 분석의 6축에 해당하지 않는 것은?',a:['밝기','볼륨','공명','파워'],c:1},
 {q:'30일 보컬 챌린지의 Day 1 미션은?',a:['아~ 롱톤 30초','스케일 연습','발라드 부르기','호흡 연습'],c:0},
 {q:'감성 테스트의 성격 유형 수는?',a:['3가지','4가지','5가지','6가지'],c:1},
 {q:'리믹스 스튜디오에서 키 조절 범위는?',a:['-3~+3','-6~+6','-12~+12','-4~+4'],c:1},
 {q:'v15에서 추가된 총 곡 수는?',a:['5곡','10곡','15곡','8곡'],c:1},
 {q:'듀얿 하모니 매치에서 파트는 몇 개인가요?',a:['1파트','2파트','3파트','4파트'],c:1}
];
(function injectQuiz15(){
 var tries=0;
 function attempt(){
  if(window.QUIZ_DATA&&Array.isArray(window.QUIZ_DATA)){
   v15Quizzes.forEach(function(q){if(!window.QUIZ_DATA.find(function(x){return x.q===q.q;}))window.QUIZ_DATA.push(q);});
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ══════════════════════════════════════════════════
   Achievements v15 +12 (102->114)
   ══════════════════════════════════════════════════ */
var v15Achievements=[
 {id:'duet_view',icon:'🎶',name:'하모니 입문',desc:'듀얿 하모니 매치 처음 열기'},
 {id:'duet_master',icon:'🎵',name:'듀얿 마스터',desc:'듀얿 12곡 모두 연습'},
 {id:'timbre_view',icon:'🎤',name:'음색 탐험가',desc:'음색 분석기 처음 사용'},
 {id:'growth_view',icon:'📈',name:'성장 관찰자',desc:'가창력 성장 차트 확인'},
 {id:'pronun_half',icon:'👅',name:'발음 학생',desc:'발음 클리닉 6종 완료'},
 {id:'pronun_master',icon:'🗣️',name:'발음 마스터',desc:'발음 클리닉 12종 전부 완료'},
 {id:'party_open',icon:'🎉',name:'파티 호스트',desc:'파티 모드 처음 열기'},
 {id:'remix_open',icon:'🏚️',name:'리믹스 DJ',desc:'리믹스 스튜디오 처음 사용'},
 {id:'challenge_7',icon:'💪',name:'1주일 클리어',desc:'30일 챌린지 7일 달성'},
 {id:'challenge_30',icon:'🏆',name:'보컬 챌린저',desc:'30일 챌린지 전부 완료'},
 {id:'sentiment_done',icon:'🎵',name:'감성 탐험가',desc:'음악 감성 테스트 완료'},
 {id:'v15_explorer',icon:'⭐',name:'v15 탐험가',desc:'v15 신규 기능 4개 이상 사용'}
];
var ach15State=ls15('achievements',[]);
var v15FeaturesUsed=ls15('featuresUsed',[]);

function checkAch15(id,cond){
 if(!cond||ach15State.indexOf(id)!==-1)return;
 ach15State.push(id);ls15s('achievements',ach15State);
 var ach=v15Achievements.find(function(a){return a.id===id;});
 if(ach){sfx15('achieve15');showAchToast15(ach.icon+' '+ach.name);}

 if(['duet_view','timbre_view','growth_view','pronun_view','party_open','remix_open','challenge_open','sentiment_done'].indexOf(id)!==-1){
  if(v15FeaturesUsed.indexOf(id)===-1){v15FeaturesUsed.push(id);ls15s('featuresUsed',v15FeaturesUsed);}
  if(v15FeaturesUsed.length>=4)checkAch15('v15_explorer',true);
 }

 (function injectAchievements(){
  var tries=0;
  function attempt(){
   if(window.ACHIEVEMENTS&&Array.isArray(window.ACHIEVEMENTS)){
    v15Achievements.forEach(function(a){
     if(!window.ACHIEVEMENTS.find(function(x){return x.id===a.id;})){
      a.unlocked=ach15State.indexOf(a.id)!==-1;
      if(a.unlocked)a.date=new Date().toLocaleDateString('ko-KR');
      window.ACHIEVEMENTS.push(a);
     }
    });
   }else if(tries++<20)setTimeout(attempt,200);
  }
  attempt();
 })();
}

function showAchToast15(msg){
 var t=document.getElementById('achToast');
 if(!t){t=document.createElement('div');t.id='achToast';t.className='ach-toast';document.body.appendChild(t);}
 t.textContent='🏆 '+msg;t.classList.add('show');
 setTimeout(function(){t.classList.remove('show');},3000);
}

(function initAch15(){
 var tries=0;
 function attempt(){
  if(window.ACHIEVEMENTS&&Array.isArray(window.ACHIEVEMENTS)){
   v15Achievements.forEach(function(a){
    if(!window.ACHIEVEMENTS.find(function(x){return x.id===a.id;})){
     a.unlocked=ach15State.indexOf(a.id)!==-1;
     if(a.unlocked)a.date=new Date().toLocaleDateString('ko-KR');
     window.ACHIEVEMENTS.push(a);
    }
   });
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ══════════════════════════════════════════════════
   Bottom NavBar Extension + FAB (8 buttons)
   ══════════════════════════════════════════════════ */
(function addV15Nav(){
 var tries=0;
 function attempt(){
  if(document.getElementById('bottomNav')&&!document.getElementById('v15NavBar')){
   var bar=document.createElement('div');bar.id='v15NavBar';
   bar.style.cssText='position:fixed;bottom:58px;left:0;right:0;display:flex;gap:4px;padding:4px 8px;overflow-x:auto;z-index:44;background:linear-gradient(180deg,transparent,rgba(10,8,24,.95));-webkit-overflow-scrolling:touch';
   var btns=[
    {icon:'🎶',label:'듀얿',fn:'openDuetHarmony'},
    {icon:'🎤',label:'음색',fn:'openTimbreAnalyzer'},
    {icon:'📈',label:'성장',fn:'openGrowthChart'},
    {icon:'👅',label:'발음',fn:'openPronunClinic'},
    {icon:'🎉',label:'파티',fn:'openPartyMode'},
    {icon:'🏚️',label:'리믹스',fn:'openRemixStudio'},
    {icon:'💪',label:'챌린지',fn:'openChallenge'},
    {icon:'🎵',label:'감성',fn:'openSentimentTest'}
   ];
   btns.forEach(function(b){
    var btn=document.createElement('button');
    btn.style.cssText='flex-shrink:0;background:rgba(30,20,60,.7);border:1px solid rgba(168,85,247,.2);color:#c084fc;padding:6px 12px;border-radius:16px;font-size:11px;cursor:pointer;white-space:nowrap;transition:all .2s';
    btn.innerHTML=b.icon+' '+b.label;
    btn.onclick=function(){window[b.fn]();};
    bar.appendChild(btn);
   });
   document.body.appendChild(bar);
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ══════════════════════════════════════════════════
   Keyboard Shortcuts v15 (Shift+key)
   ══════════════════════════════════════════════════ */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey||document.activeElement.tagName==='INPUT')return;
 var map={D:openDuetHarmony,T:openTimbreAnalyzer,G:openGrowthChart,N:openPronunClinic,Y:openPartyMode,X:openRemixStudio,J:openChallenge,M:openSentimentTest};
 var fn=map[e.key.toUpperCase()];
 if(fn){e.preventDefault();fn();}
});

console.log('[v15] StarVoice v15 loaded: +10songs(125), +8features, +15quiz(132), +12achievements(114), +12sfx, +8keyboard');
})();
