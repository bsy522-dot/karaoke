/* StarVoice v26 Patch — Self-contained IIFE module injected via SW
 * +10 songs(225->235), VocalFrequencySpectrum Canvas, SongMasteryTreeMap Canvas,
 * VocalBreakthroughAnalyzer Canvas, KaraokeModeSelector Canvas,
 * VocalAgingSimulator Canvas, AIAuditionMatrix Canvas,
 * VocalPostureGuide Canvas, VocalCareerPath Canvas,
 * quiz +15(282->297), achievements +12(234->246), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v26KaraokeLoaded) return;
window.__v26KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls26(k,d){try{var v=localStorage.getItem('sv26-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls26s(k,v){try{localStorage.setItem('sv26-'+k,JSON.stringify(v));}catch(e){}}
function gradeFor26(pct){return pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';}
function gradeColor26(g){return g==='S'?'#fbbf24':g==='A'?'#34d399':g==='B'?'#60a5fa':g==='C'?'#c084fc':'#f87171';}
function cxy26(cv,e){var r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)*(cv.width/r.width),y:(e.clientY-r.top)*(cv.height/r.height)};}

/* ── 10 New Songs (226-235) ── */
var v26Songs=[
{id:226,title:'APT.',artist:'ROSÉ & Bruno Mars',bpm:126,key:'Ab',difficulty:3,genre:'pop',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db4,F4,Ab4,G4,F4,Eb4,Db4],
 lyrics:['A','P','T','아','파','트','게','임','시','작','해','볼','까','같','이','해'],
 duration:[357,357,357,714,357,357,357,357,357,357,357,714,357,357,357,357]},
{id:227,title:'Magnetic',artist:'ILLIT',bpm:114,key:'Eb',difficulty:2,genre:'dance',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['Mag','net','ic','끌','리','는','대','로','가','까','이','와','줘','내','게','로'],
 duration:[395,395,395,789,395,395,395,395,395,395,395,789,395,395,395,395]},
{id:228,title:'Sticky',artist:'KISS OF LIFE',bpm:108,key:'Fm',difficulty:3,genre:'rnb',
 notes:[F3,Ab3,C4,F4,Eb4,C4,Ab3,F3,G3,Bb3,Db4,F4,Eb4,Db4,C4,Bb3],
 lyrics:['Stic','ky','Stic','ky','끈','적','한','이','느','낌','이','좋','아','서','빠','져'],
 duration:[417,417,417,833,417,417,417,417,417,417,417,833,417,417,417,417]},
{id:229,title:'해야 (HEYA)',artist:'IVE',bpm:120,key:'Gm',difficulty:3,genre:'dance',
 notes:[G3,Bb3,D4,G4,F4,D4,Bb3,G3,A3,C4,Eb4,G4,F4,Eb4,D4,C4],
 lyrics:['해','야','해','야','해','야','떠','올','라','줘','빛','나','는','아','침','을'],
 duration:[375,375,375,750,375,375,375,375,375,375,375,750,375,375,375,375]},
{id:230,title:'Accendio',artist:'IVE',bpm:128,key:'Am',difficulty:3,genre:'dance',
 notes:[A3,C4,E4,A4,G4,E4,C4,A3,B3,D4,F4,A4,G4,F4,E4,D4],
 lyrics:['Ac','cen','di','o','마','법','처','럼','빛','나','는','우','리','의','시','작'],
 duration:[352,352,352,703,352,352,352,352,352,352,352,703,352,352,352,352]},
{id:231,title:'이름',artist:'이영지',bpm:88,key:'Db',difficulty:3,genre:'hiphop',
 notes:[Db4,F4,Ab4,Db5,C5,Ab4,F4,Db4,Eb4,Gb4,Bb4,Db5,C5,Bb4,Ab4,Gb4],
 lyrics:['내','이','름','을','불','러','줘','한','번','더','크','게','소','리','쳐','봐'],
 duration:[511,511,511,1023,511,511,511,511,511,511,511,1023,511,511,511,511]},
{id:232,title:'Love 119',artist:'RIIZE',bpm:122,key:'Bb',difficulty:2,genre:'pop',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['Love','one','one','nine','심','장','이','뛰','어','쿵','쿵','쿵','대','답','해','줘'],
 duration:[369,369,369,738,369,369,369,369,369,369,369,738,369,369,369,369]},
{id:233,title:'Supernova',artist:'aespa',bpm:136,key:'Cm',difficulty:4,genre:'dance',
 notes:[C4,Eb4,G4,C5,Bb4,G4,Eb4,C4,D4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['Su','per','no','va','폭','발','하','는','별','처','럼','빛','나','는','우','리'],
 duration:[331,331,331,662,331,331,331,331,331,331,331,662,331,331,331,331]},
{id:234,title:'눈물의 여왕',artist:'헤이즈(Heize)',bpm:72,key:'Eb',difficulty:3,genre:'ballad',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['눈','물','의','여','왕','이','라','부','르','지','마','그','냥','울','고','싶'],
 duration:[625,625,625,1250,625,625,625,625,625,625,625,1250,625,625,625,625]},
{id:235,title:'Small girl',artist:'오마이걸(OH MY GIRL)',bpm:110,key:'F',difficulty:2,genre:'pop',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['Small','girl','큰','꿈','을','가','진','작','은','소','녀','의','이','야','기','야'],
 duration:[409,409,409,818,409,409,409,409,409,409,409,818,409,409,409,409]}
];
(function injectSongs26(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v26Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX 16 sounds ── */
var actx26=null;
function sfx26(type){
 try{
  if(!actx26)actx26=new(window.AudioContext||window.webkitAudioContext)();
  var o=actx26.createOscillator(),g=actx26.createGain(),t=actx26.currentTime;
  o.connect(g);g.connect(actx26.destination);
  var presets={
   spectrumScan:{f:660,type:'sine',atk:0.01,dec:0.15,vol:0.18},
   spectrumPeak:{f:880,type:'triangle',atk:0.01,dec:0.12,vol:0.2},
   masteryUp:{f:523,type:'sine',atk:0.02,dec:0.25,vol:0.22},
   masteryComplete:{f:784,type:'triangle',atk:0.01,dec:0.3,vol:0.25},
   breakthroughHit:{f:698,type:'square',atk:0.01,dec:0.2,vol:0.15},
   breakthroughLevel:{f:988,type:'sine',atk:0.02,dec:0.35,vol:0.2},
   modeSelect:{f:440,type:'sine',atk:0.01,dec:0.1,vol:0.18},
   modeActivate:{f:587,type:'triangle',atk:0.01,dec:0.2,vol:0.2},
   agingScan:{f:330,type:'sine',atk:0.03,dec:0.25,vol:0.15},
   agingResult:{f:494,type:'triangle',atk:0.02,dec:0.2,vol:0.18},
   auditionJudge:{f:554,type:'sine',atk:0.01,dec:0.15,vol:0.2},
   auditionPass:{f:880,type:'triangle',atk:0.01,dec:0.3,vol:0.25},
   postureGuide:{f:392,type:'sine',atk:0.02,dec:0.2,vol:0.15},
   postureCorrect:{f:659,type:'triangle',atk:0.01,dec:0.15,vol:0.2},
   careerAdvance:{f:740,type:'sine',atk:0.01,dec:0.3,vol:0.22},
   navClick26:{f:523,type:'sine',atk:0.005,dec:0.08,vol:0.12}
  };
  var p=presets[type]||presets.navClick26;
  o.type=p.type;o.frequency.setValueAtTime(p.f,t);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(p.vol,t+p.atk);
  g.gain.exponentialRampToValueAtTime(0.001,t+p.atk+p.dec);
  o.start(t);o.stop(t+p.atk+p.dec+0.05);
 }catch(e){}
}

/* ── Quiz v26 +15 (282->297) ── */
var v26Quiz=[
{q:'보컬 주파수 분석에서 &quot;포먼트(Formant)&quot;란?',a:['성대 진동으로 생기는 공명 주파수 대역','마이크 감도','스피커 출력','음량 단위'],c:0},
{q:'트리맵(TreeMap) 시각화의 핵심 원리는?',a:['면적으로 비율 표현','높이로 비율 표현','색상으로 시간 표현','선으로 추세 표현'],c:0},
{q:'보컬 &quot;브레이크(Break)&quot; 포인트란?',a:['흉성에서 두성으로 전환되는 지점','숨 쉬는 지점','곡의 중간','무대 휴식 시간'],c:0},
{q:'노래방 &quot;에코(Echo)&quot; 이펙트의 원리는?',a:['소리를 지연 반복하여 잔향 생성','음정 보정','볼륨 증가','주파수 필터'],c:0},
{q:'성대 노화로 인한 대표적 변화는?',a:['음역 축소와 성대 근육 위축','음역 확장','청력 향상','호흡량 증가'],c:0},
{q:'오디션에서 &quot;톤(Tone)&quot; 평가 기준은?',a:['음색의 깨끗함과 풍부함','음정 정확도','리듬감','무대매너'],c:0},
{q:'발성 시 횡격막 호흡이 중요한 이유는?',a:['안정적 공기 공급으로 지속력 향상','소리가 커져서','자세가 좋아져서','고음이 나와서'],c:0},
{q:'보컬 커리어에서 &quot;데뷔(Debut)&quot;의 의미는?',a:['공식 첫 무대 또는 음반 발매','연습 시작','오디션 합격','팬미팅'],c:0},
{q:'스펙트로그램에서 밝은 부분은 무엇을 의미하나?',a:['에너지가 높은 주파수 대역','저주파 영역','무음 구간','잡음 영역'],c:0},
{q:'노래방에서 &quot;하울링(Howling)&quot;이 발생하는 원인은?',a:['마이크가 스피커 소리를 다시 수음하여 증폭','볼륨이 낮아서','음정이 맞아서','노래를 잘해서'],c:0},
{q:'보컬의 &quot;레지스터(Register)&quot; 종류 중 흉성은?',a:['Chest Voice','Head Voice','Falsetto','Whistle'],c:0},
{q:'곡 마스터리에서 S등급 기준은 보통 몇 % 이상?',a:['90% 이상','50% 이상','70% 이상','100%만'],c:0},
{q:'AI 음정 감지에 사용되는 대표 알고리즘은?',a:['FFT(Fast Fourier Transform)','K-means','Linear Regression','Decision Tree'],c:0},
{q:'보컬 워밍업에서 &quot;립트릴(Lip Trill)&quot;의 효과는?',a:['성대 이완 및 호흡 조절 훈련','고음 연습','리듬 연습','가사 암기'],c:0},
{q:'StarMaker의 핵심 기능 중 하나인 &quot;듀엣 모드&quot;란?',a:['다른 사용자와 함께 부르는 기능','혼자 부르기','가사 표시','점수 공유'],c:0}
];
(function injectQuiz26(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v26Quiz.forEach(function(q){
    var exists=window.quizQuestions.some(function(x){return x.q===q.q;});
    if(!exists)window.quizQuestions.push(q);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements +12 (234->246) ── */
var v26Achievements=[
{id:'spectrum_analyst',name:'스펙트럼 분석가',desc:'주파수 스펙트럼 분석 완료',icon:'🌊'},
{id:'mastery_hunter',name:'마스터리 헌터',desc:'곡 마스터리 진행도 80% 달성',icon:'🏆'},
{id:'breakthrough_star',name:'브레이크스루 스타',desc:'보컬 돌파 포인트 발견',icon:'⭐'},
{id:'mode_explorer',name:'모드 탐험가',desc:'4가지 노래방 모드 모두 체험',icon:'🎮'},
{id:'age_vocalist',name:'세월의 보컬리스트',desc:'음역 변화 시뮬레이션 완료',icon:'⌛'},
{id:'audition_survivor',name:'오디션 서바이버',desc:'AI 오디션 심사 통과',icon:'🎤'},
{id:'posture_master',name:'자세의 달인',desc:'발성 자세 가이드 마스터',icon:'🧘'},
{id:'career_dreamer',name:'커리어 드리머',desc:'보컬 커리어 패스 첫 단계 완료',icon:'🚀'},
{id:'quiz_v26_master',name:'퀴즈 마스터 v26',desc:'v26 퀴즈 전문 완료',icon:'🧠'},
{id:'song_235',name:'235곡 수집가',desc:'235곡 보유 달성',icon:'🎵'},
{id:'v26_explorer',name:'v26 탐험가',desc:'v26 기능 5개 이상 사용',icon:'🔭'},
{id:'v26_complete',name:'v26 마스터',desc:'v26 모든 기능 체험 완료',icon:'👑'}
];
(function injectAchievements26(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v26Achievements.forEach(function(a){
    if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Feature 1: Vocal Frequency Spectrum Analyzer ── */
window.__sv26FreqSpectrum=function(){
sfx26('spectrumScan');
var overlay=document.createElement('div');
overlay.id='sv26-freq-spectrum';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🌊 보컬 주파수 스펙트럼 분석기</h3><button id="sv26-freq-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-freq-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:crosshair;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">32밴드 주파수 스펙트럼 시각화. 클릭하여 밴드별 상세 정보 확인.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-freq-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-freq-cv');
var ctx=cv.getContext('2d');
var bands=32;
var freqLabels=['31','40','50','63','80','100','125','160','200','250','315','400','500','630','800','1k','1.25k','1.6k','2k','2.5k','3.15k','4k','5k','6.3k','8k','10k','12.5k','16k','18k','20k','22k','24k'];
var bandData=[];
for(var i=0;i<bands;i++){
 bandData.push({
  freq:freqLabels[i]||((i+1)*750+''),
  level:Math.random()*80+10,
  peak:Math.random()*90+10,
  type:i<6?'저음역':i<16?'중음역':i<26?'고음역':'초고음역'
 });
}
var hoverBand=-1;
var sessionData=ls26('freqSpectrum',[]);
if(sessionData.length===0){for(var s=0;s<5;s++){var sd=[];for(var b=0;b<bands;b++)sd.push(Math.random()*80+10);sessionData.push(sd);}ls26s('freqSpectrum',sessionData);}

function drawSpectrum(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,640,400);
 var pad={l:50,r:20,t:40,b:50};
 var w=640-pad.l-pad.r,h=400-pad.t-pad.b;
 var barW=w/bands-2;

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 주파수 스펙트럼 (32밴드)',320,25);

 ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;
 for(var gy=0;gy<=100;gy+=20){
  var yy=pad.t+h-h*(gy/100);
  ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(640-pad.r,yy);ctx.stroke();
  ctx.fillStyle='#8b5cf6';ctx.font='10px sans-serif';ctx.textAlign='right';
  ctx.fillText(gy+'dB',pad.l-5,yy+4);
 }

 for(var i=0;i<bands;i++){
  var x=pad.l+i*(barW+2);
  var bh=h*(bandData[i].level/100);
  var ph=h*(bandData[i].peak/100);
  var hue=i<6?280:i<16?240:i<26?200:160;
  var alpha=hoverBand===i?1:0.8;
  var grd=ctx.createLinearGradient(x,pad.t+h-bh,x,pad.t+h);
  grd.addColorStop(0,'hsla('+hue+',70%,65%,'+alpha+')');
  grd.addColorStop(1,'hsla('+hue+',70%,35%,'+alpha+')');
  ctx.fillStyle=grd;
  ctx.fillRect(x,pad.t+h-bh,barW,bh);

  ctx.fillStyle='#fbbf24';ctx.fillRect(x,pad.t+h-ph,barW,2);

  if(hoverBand===i){
   ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;
   ctx.strokeRect(x-1,pad.t+h-bh-1,barW+2,bh+2);
   ctx.lineWidth=0.5;
  }

  if(i%4===0||i===bands-1){
   ctx.save();ctx.translate(x+barW/2,pad.t+h+8);ctx.rotate(-Math.PI/4);
   ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='right';
   ctx.fillText(freqLabels[i]||'Hz',0,0);ctx.restore();
  }
 }

 ctx.fillStyle='#1e1036';ctx.fillRect(pad.l,pad.t+h+30,w,18);
 var zones=[{label:'저음역',color:'#a855f7',w:6},{label:'중음역',color:'#6366f1',w:10},{label:'고음역',color:'#3b82f6',w:10},{label:'초고음역',color:'#06b6d4',w:6}];
 var zx=pad.l;
 zones.forEach(function(z){
  var zw=w*(z.w/32);
  ctx.fillStyle=z.color+'40';ctx.fillRect(zx,pad.t+h+30,zw,18);
  ctx.fillStyle=z.color;ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText(z.label,zx+zw/2,pad.t+h+43);
  zx+=zw;
 });

 if(hoverBand>=0&&hoverBand<bands){
  var bd=bandData[hoverBand];
  var tx=Math.min(pad.l+hoverBand*(barW+2),520);
  ctx.fillStyle='#1a0e2e';ctx.fillRect(tx,pad.t,120,55);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(tx,pad.t,120,55);
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(bd.freq+' Hz ('+bd.type+')',tx+5,pad.t+15);
  ctx.fillText('현재: '+bd.level.toFixed(1)+' dB',tx+5,pad.t+30);
  ctx.fillText('피크: '+bd.peak.toFixed(1)+' dB',tx+5,pad.t+45);
 }
}
drawSpectrum();

cv.addEventListener('mousemove',function(e){
 var p=cxy26(cv,e);
 var pad={l:50,r:20};
 var barW=(640-pad.l-pad.r)/bands-2;
 hoverBand=Math.floor((p.x-pad.l)/(barW+2));
 if(hoverBand<0||hoverBand>=bands)hoverBand=-1;
 drawSpectrum();
});
cv.addEventListener('mouseleave',function(){hoverBand=-1;drawSpectrum();});
cv.addEventListener('click',function(e){
 var p=cxy26(cv,e);
 var pad={l:50,r:20};
 var barW=(640-pad.l-pad.r)/bands-2;
 var idx=Math.floor((p.x-pad.l)/(barW+2));
 if(idx>=0&&idx<bands){
  sfx26('spectrumPeak');
  bandData[idx].level=Math.random()*80+15;
  bandData[idx].peak=Math.max(bandData[idx].peak,bandData[idx].level);
  drawSpectrum();
 }
});
};

/* ── Feature 2: Song Mastery TreeMap ── */
window.__sv26MasteryTreeMap=function(){
sfx26('masteryUp');
var overlay=document.createElement('div');
overlay.id='sv26-mastery-treemap';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🏆 곡별 마스터리 트리맵</h3><button id="sv26-mastery-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-mastery-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">장르별 곡 마스터리 진행률. 면적 = 곡 수, 색상 = 마스터리 등급. 클릭하여 장르 상세.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-mastery-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-mastery-cv');
var ctx=cv.getContext('2d');
var genres=[
 {name:'발라드',songs:48,mastery:72,color:'#a855f7'},
 {name:'댄스/팝',songs:52,mastery:65,color:'#6366f1'},
 {name:'R&B/소울',songs:28,mastery:58,color:'#3b82f6'},
 {name:'록',songs:22,mastery:45,color:'#ef4444'},
 {name:'힙합/랩',songs:20,mastery:40,color:'#f59e0b'},
 {name:'트로트',songs:18,mastery:82,color:'#10b981'},
 {name:'재즈',songs:12,mastery:35,color:'#06b6d4'},
 {name:'인디/포크',songs:15,mastery:55,color:'#ec4899'},
 {name:'뮤지컬',songs:10,mastery:48,color:'#8b5cf6'},
 {name:'EDM',songs:10,mastery:38,color:'#14b8a6'}
];
var totalSongs=genres.reduce(function(s,g){return s+g.songs;},0);
var hoverGenre=-1;

function drawTreeMap(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,640,400);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('곡별 마스터리 진행도 트리맵 ('+totalSongs+'곡)',320,22);

 var pad={l:10,r:10,t:35,b:10};
 var totalW=640-pad.l-pad.r,totalH=400-pad.t-pad.b;
 var rects=[];
 var sorted=genres.slice().sort(function(a,b){return b.songs-a.songs;});
 var x=pad.l,y=pad.t,remW=totalW,remH=totalH;
 var remaining=sorted.slice();

 function layoutRow(items,rowX,rowY,rowW,rowH,horizontal){
  var total=items.reduce(function(s,g){return s+g.songs;},0);
  var pos=horizontal?rowX:rowY;
  items.forEach(function(g){
   var ratio=g.songs/total;
   var rw,rh;
   if(horizontal){rw=rowW*ratio;rh=rowH;rects.push({x:pos,y:rowY,w:rw,h:rh,g:g});pos+=rw;}
   else{rh=rowH*ratio;rw=rowW;rects.push({x:rowX,y:pos,w:rw,h:rh,g:g});pos+=rh;}
  });
 }

 var row1=sorted.slice(0,3);
 var row1H=totalH*0.45;
 layoutRow(row1,pad.l,pad.t,totalW,row1H,true);
 var row2=sorted.slice(3,6);
 var row2H=totalH*0.3;
 layoutRow(row2,pad.l,pad.t+row1H,totalW,row2H,true);
 var row3=sorted.slice(6,10);
 var row3H=totalH*0.25;
 layoutRow(row3,pad.l,pad.t+row1H+row2H,totalW,row3H,true);

 rects.forEach(function(r,idx){
  var g=r.g;
  var alpha=hoverGenre===idx?0.95:0.7;
  var masteryAlpha=Math.max(0.3,g.mastery/100);
  ctx.fillStyle=g.color;ctx.globalAlpha=masteryAlpha*alpha;
  ctx.fillRect(r.x+1,r.y+1,r.w-2,r.h-2);
  ctx.globalAlpha=1;
  ctx.strokeStyle=hoverGenre===idx?'#fbbf24':'#1a0e2e';
  ctx.lineWidth=hoverGenre===idx?2:1;
  ctx.strokeRect(r.x+1,r.y+1,r.w-2,r.h-2);

  if(r.w>40&&r.h>30){
   ctx.fillStyle='#ffffff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
   ctx.fillText(g.name,r.x+r.w/2,r.y+r.h/2-8);
   ctx.font='11px sans-serif';
   ctx.fillText(g.songs+'곡',r.x+r.w/2,r.y+r.h/2+6);
   var gr=gradeFor26(g.mastery);
   ctx.fillStyle=gradeColor26(gr);
   ctx.fillText(gr+' ('+g.mastery+'%)',r.x+r.w/2,r.y+r.h/2+20);
  }
 });

 if(hoverGenre>=0&&hoverGenre<rects.length){
  var hr=rects[hoverGenre];
  var hg=hr.g;
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(420,pad.t,210,80);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(420,pad.t,210,80);
  ctx.fillStyle='#e2d5f3';ctx.font='12px sans-serif';ctx.textAlign='left';
  ctx.fillText(hg.name+' ('+hg.songs+'곡)',428,pad.t+18);
  ctx.fillText('마스터리: '+hg.mastery+'% ['+gradeFor26(hg.mastery)+']',428,pad.t+35);
  ctx.fillText('완주 곡: '+Math.round(hg.songs*hg.mastery/100)+'곡',428,pad.t+52);
  ctx.fillText('평균 점수: '+Math.round(60+hg.mastery*0.35)+'점',428,pad.t+69);
 }
}
drawTreeMap();

cv.addEventListener('mousemove',function(e){
 var p=cxy26(cv,e);
 hoverGenre=-1;
 var pad={l:10,r:10,t:35};
 var totalW=620,totalH=355;
 var sorted=genres.slice().sort(function(a,b){return b.songs-a.songs;});
 var rects=[];
 var row1=sorted.slice(0,3),row1H=totalH*0.45;
 var total1=row1.reduce(function(s,g){return s+g.songs;},0);
 var px=pad.l;
 row1.forEach(function(g){var rw=totalW*(g.songs/total1);rects.push({x:px,y:pad.t,w:rw,h:row1H});px+=rw;});
 var row2=sorted.slice(3,6),row2H=totalH*0.3;
 var total2=row2.reduce(function(s,g){return s+g.songs;},0);
 px=pad.l;
 row2.forEach(function(g){var rw=totalW*(g.songs/total2);rects.push({x:px,y:pad.t+row1H,w:rw,h:row2H});px+=rw;});
 var row3=sorted.slice(6,10),row3H=totalH*0.25;
 var total3=row3.reduce(function(s,g){return s+g.songs;},0);
 px=pad.l;
 row3.forEach(function(g){var rw=totalW*(g.songs/total3);rects.push({x:px,y:pad.t+row1H+row2H,w:rw,h:row3H});px+=rw;});
 for(var i=0;i<rects.length;i++){
  var r=rects[i];
  if(p.x>=r.x&&p.x<=r.x+r.w&&p.y>=r.y&&p.y<=r.y+r.h){hoverGenre=i;break;}
 }
 drawTreeMap();
});
cv.addEventListener('click',function(){if(hoverGenre>=0)sfx26('masteryComplete');});
};

/* ── Feature 3: Vocal Breakthrough Point Analyzer ── */
window.__sv26Breakthrough=function(){
sfx26('breakthroughHit');
var overlay=document.createElement('div');
overlay.id='sv26-breakthrough';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">⭐ 보컬 브레이크스루 포인트 분석기</h3><button id="sv26-bt-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-bt-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">보컬 성장의 6대 돌파 포인트. 각 포인트 클릭하여 훈련법 확인.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-bt-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-bt-cv');
var ctx=cv.getContext('2d');
var milestones=[
 {name:'음정 안정화',desc:'정확한 피치 유지 능력',level:78,target:90,tip:'스케일 연습을 매일 15분씩'},
 {name:'흉성/두성 전환',desc:'레지스터 전환 부드럽게',level:55,target:85,tip:'글라이드 연습으로 전환점 매끄럽게'},
 {name:'호흡 지속력',desc:'긴 프레이즈 안정 유지',level:62,target:88,tip:'횡격막 호흡 훈련 집중'},
 {name:'비브라토 컨트롤',desc:'자연스러운 떨림 제어',level:45,target:80,tip:'느린 템포부터 점진적으로'},
 {name:'감정 표현력',desc:'곡 해석과 감정 전달',level:70,target:92,tip:'가사 의미 분석 후 감정 매핑'},
 {name:'고음 확장',desc:'안정적 고음역 확보',level:38,target:85,tip:'반음씩 점진적으로 확장'}
];
var hoverMs=-1;
var btData=ls26('breakthrough',milestones.map(function(m){return m.level;}));
milestones.forEach(function(m,i){m.level=btData[i]||m.level;});

function drawBreakthrough(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 브레이크스루 포인트 분석',310,25);

 var pad={l:40,r:20,t:45,b:60};
 var w=620-pad.l-pad.r,h=400-pad.t-pad.b;
 var cx=310,cy=pad.t+h/2,radius=Math.min(w,h)/2-10;

 for(var ring=0;ring<=100;ring+=25){
  var rr=radius*(ring/100);
  ctx.beginPath();ctx.arc(cx,cy,rr,0,Math.PI*2);
  ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;ctx.stroke();
  if(ring>0){
   ctx.fillStyle='#6b5b7b';ctx.font='9px sans-serif';ctx.textAlign='center';
   ctx.fillText(ring+'%',cx+rr+2,cy-3);
  }
 }

 var n=milestones.length;
 milestones.forEach(function(m,i){
  var angle=(-Math.PI/2)+(2*Math.PI*i/n);
  var levelR=radius*(m.level/100);
  var targetR=radius*(m.target/100);
  var ex=cx+Math.cos(angle)*radius;
  var ey=cy+Math.sin(angle)*radius;

  ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(ex,ey);
  ctx.strokeStyle='#3d2b5e';ctx.lineWidth=1;ctx.stroke();

  var tx=cx+Math.cos(angle)*targetR;
  var ty=cy+Math.sin(angle)*targetR;
  ctx.beginPath();ctx.arc(tx,ty,4,0,Math.PI*2);
  ctx.fillStyle='#fbbf2480';ctx.fill();

  var lx=cx+Math.cos(angle)*levelR;
  var ly=cy+Math.sin(angle)*levelR;

  var nextAngle=(-Math.PI/2)+(2*Math.PI*((i+1)%n)/n);
  var nextLevel=milestones[(i+1)%n].level;
  var nextR=radius*(nextLevel/100);
  var nlx=cx+Math.cos(nextAngle)*nextR;
  var nly=cy+Math.sin(nextAngle)*nextR;

  if(i===0){ctx.beginPath();ctx.moveTo(lx,ly);}
  ctx.lineTo(nlx,nly);
  if(i===n-1){
   ctx.closePath();
   ctx.fillStyle='#a855f730';ctx.fill();
   ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.stroke();
  }

  ctx.beginPath();ctx.arc(lx,ly,hoverMs===i?8:5,0,Math.PI*2);
  ctx.fillStyle=m.level>=m.target?'#34d399':m.level>=m.target*0.7?'#fbbf24':'#f87171';
  ctx.fill();
  if(hoverMs===i){ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.stroke();}

  var labelR=radius+18;
  var labelX=cx+Math.cos(angle)*labelR;
  var labelY=cy+Math.sin(angle)*labelR;
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='center';
  ctx.fillText(m.name,labelX,labelY);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText(m.level+'%',labelX,labelY+13);
 });

 if(hoverMs>=0&&hoverMs<n){
  var hm=milestones[hoverMs];
  var gap=hm.target-hm.level;
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(10,330,260,65);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(10,330,260,65);
  ctx.fillStyle='#e2d5f3';ctx.font='12px sans-serif';ctx.textAlign='left';
  ctx.fillText(hm.name+': '+hm.desc,18,348);
  ctx.fillText('현재: '+hm.level+'% → 목표: '+hm.target+'% (갭: '+gap+'%)',18,365);
  ctx.fillStyle='#fbbf24';ctx.fillText('팁: '+hm.tip,18,382);
 }

 var totalProgress=milestones.reduce(function(s,m){return s+Math.min(100,m.level/m.target*100);},0)/n;
 var gr=gradeFor26(totalProgress);
 ctx.fillStyle='#1a0e2e';ctx.fillRect(460,350,150,40);
 ctx.strokeStyle='#7c3aed';ctx.strokeRect(460,350,150,40);
 ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
 ctx.fillText('종합 진행률',535,365);
 ctx.fillStyle=gradeColor26(gr);ctx.font='bold 16px sans-serif';
 ctx.fillText(Math.round(totalProgress)+'% ['+gr+']',535,385);
}
drawBreakthrough();

cv.addEventListener('mousemove',function(e){
 var p=cxy26(cv,e);
 hoverMs=-1;
 var cx=310,cy=225,radius=120;
 var n=milestones.length;
 for(var i=0;i<n;i++){
  var angle=(-Math.PI/2)+(2*Math.PI*i/n);
  var levelR=radius*(milestones[i].level/100);
  var lx=cx+Math.cos(angle)*levelR;
  var ly=cy+Math.sin(angle)*levelR;
  var dx=p.x-lx,dy=p.y-ly;
  if(Math.sqrt(dx*dx+dy*dy)<15){hoverMs=i;break;}
 }
 drawBreakthrough();
});
cv.addEventListener('click',function(){
 if(hoverMs>=0){
  sfx26('breakthroughLevel');
  milestones[hoverMs].level=Math.min(100,milestones[hoverMs].level+Math.floor(Math.random()*5+1));
  ls26s('breakthrough',milestones.map(function(m){return m.level;}));
  drawBreakthrough();
 }
});
};

/* ── Feature 4: Karaoke Mode Selector ── */
window.__sv26ModeSelector=function(){
sfx26('modeSelect');
var overlay=document.createElement('div');
overlay.id='sv26-mode-selector';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🎮 노래방 모드 셀렉터</h3><button id="sv26-mode-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-mode-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">8가지 노래방 모드. 클릭하여 모드 활성화 및 상세 설명 확인.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-mode-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-mode-cv');
var ctx=cv.getContext('2d');
var modes=[
 {name:'솔로 연습',icon:'🎤',desc:'혼자서 집중 연습. 구간반복/속도조절 가능',color:'#a855f7',stats:{difficulty:'쉬움',social:'없음',scoring:'상세'}},
 {name:'듀엣 모드',icon:'👫',desc:'AI 또는 친구와 함께 듀엣 부르기',color:'#ec4899',stats:{difficulty:'보통',social:'높음',scoring:'개별'}},
 {name:'배틀 대결',icon:'⚔️',desc:'AI 싱어와 1:1 점수 대결',color:'#ef4444',stats:{difficulty:'어려움',social:'중간',scoring:'비교'}},
 {name:'파티 모드',icon:'🎉',desc:'여러 명이 돌아가며 부르는 파티',color:'#f59e0b',stats:{difficulty:'쉬움',social:'최고',scoring:'간단'}},
 {name:'콘서트 모드',icon:'🎸',desc:'풀 세트리스트 연속 공연 시뮬',color:'#6366f1',stats:{difficulty:'어려움',social:'중간',scoring:'종합'}},
 {name:'챌린지 모드',icon:'🔥',desc:'특수 조건(블라인드/고음/랩) 도전',color:'#14b8a6',stats:{difficulty:'최고',social:'없음',scoring:'특수'}},
 {name:'레슨 모드',icon:'📚',desc:'단계별 보컬 레슨 프로그램',color:'#3b82f6',stats:{difficulty:'적응형',social:'없음',scoring:'학습'}},
 {name:'릴레이 모드',icon:'🔁',desc:'곡을 파트별로 나눠 릴레이 부르기',color:'#10b981',stats:{difficulty:'보통',social:'높음',scoring:'파트별'}}
];
var hoverMode=-1;
var activeMode=ls26('activeMode',0);

function drawModes(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('노래방 모드 셀렉터 (8종)',310,22);

 var cols=4,rows=2;
 var cellW=140,cellH=130;
 var startX=(620-cols*cellW-(cols-1)*10)/2;
 var startY=40;

 modes.forEach(function(m,i){
  var col=i%cols,row=Math.floor(i/cols);
  var x=startX+col*(cellW+10);
  var y=startY+row*(cellH+15);
  var isActive=activeMode===i;
  var isHover=hoverMode===i;

  ctx.fillStyle=isActive?m.color+'40':isHover?m.color+'25':'#1a0e2e';
  ctx.fillRect(x,y,cellW,cellH);
  ctx.strokeStyle=isActive?m.color:isHover?m.color+'80':'#3d2b5e';
  ctx.lineWidth=isActive?2.5:isHover?2:1;
  ctx.strokeRect(x,y,cellW,cellH);

  if(isActive){
   ctx.fillStyle=m.color+'20';
   ctx.fillRect(x+2,y+2,cellW-4,cellH-4);
  }

  ctx.font='28px sans-serif';ctx.textAlign='center';
  ctx.fillText(m.icon,x+cellW/2,y+35);

  ctx.fillStyle=isActive?'#ffffff':'#e2d5f3';ctx.font='bold 12px sans-serif';
  ctx.fillText(m.name,x+cellW/2,y+58);

  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  var words=m.desc.split('');
  var line1=m.desc.substring(0,Math.min(14,m.desc.length));
  var line2=m.desc.substring(14);
  ctx.fillText(line1,x+cellW/2,y+75);
  if(line2)ctx.fillText(line2.substring(0,14),x+cellW/2,y+88);

  ctx.fillStyle=m.color;ctx.font='9px sans-serif';
  ctx.fillText('난이도:'+m.stats.difficulty,x+cellW/2,y+105);
  ctx.fillText('소셜:'+m.stats.social+' 채점:'+m.stats.scoring,x+cellW/2,y+118);
 });

 ctx.fillStyle='#1a0e2e';ctx.fillRect(10,355,600,38);
 ctx.strokeStyle='#3d2b5e';ctx.strokeRect(10,355,600,38);
 ctx.fillStyle='#c084fc';ctx.font='12px sans-serif';ctx.textAlign='center';
 var am=modes[activeMode];
 ctx.fillText('현재 모드: '+am.icon+' '+am.name+' — '+am.desc,310,378);
}
drawModes();

cv.addEventListener('mousemove',function(e){
 var p=cxy26(cv,e);
 hoverMode=-1;
 var cols=4,cellW=140,cellH=130;
 var startX=(620-cols*cellW-(cols-1)*10)/2;
 var startY=40;
 for(var i=0;i<8;i++){
  var col=i%cols,row=Math.floor(i/cols);
  var x=startX+col*(cellW+10);
  var y=startY+row*(cellH+15);
  if(p.x>=x&&p.x<=x+cellW&&p.y>=y&&p.y<=y+cellH){hoverMode=i;break;}
 }
 drawModes();
});
cv.addEventListener('click',function(e){
 if(hoverMode>=0){
  sfx26('modeActivate');
  activeMode=hoverMode;
  ls26s('activeMode',activeMode);
  drawModes();
 }
});
};

/* ── Feature 5: Vocal Aging Simulator ── */
window.__sv26AgingSim=function(){
sfx26('agingScan');
var overlay=document.createElement('div');
overlay.id='sv26-aging-sim';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">⌛ 보컬 에이징 시뮬레이터</h3><button id="sv26-aging-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-aging-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">연령대별 음역 변화 시뮬레이션. 막대 클릭하여 상세 정보.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-aging-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-aging-cv');
var ctx=cv.getContext('2d');
var ageGroups=[
 {age:'10대',rangeHigh:'E5',rangeLow:'A2',power:65,stamina:70,vibrato:30,flexibility:85,color:'#34d399'},
 {age:'20대',rangeHigh:'C5',rangeLow:'G2',power:80,stamina:85,vibrato:60,flexibility:90,color:'#60a5fa'},
 {age:'30대',rangeHigh:'A4',rangeLow:'F2',power:90,stamina:90,vibrato:80,flexibility:80,color:'#a855f7'},
 {age:'40대',rangeHigh:'G4',rangeLow:'E2',power:85,stamina:75,vibrato:85,flexibility:65,color:'#f59e0b'},
 {age:'50대',rangeHigh:'E4',rangeLow:'D2',power:70,stamina:60,vibrato:75,flexibility:50,color:'#ef4444'},
 {age:'60대+',rangeHigh:'C4',rangeLow:'C2',power:55,stamina:45,vibrato:65,flexibility:35,color:'#6b7280'}
];
var hoverAge=-1;
var metrics=['파워','지구력','비브라토','유연성'];

function drawAging(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('연령대별 보컬 능력 변화 시뮬레이터',310,22);

 var pad={l:55,r:15,t:45,b:65};
 var w=620-pad.l-pad.r,h=400-pad.t-pad.b;
 var groupW=w/ageGroups.length;
 var barW=(groupW-10)/4;

 ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;
 for(var gy=0;gy<=100;gy+=25){
  var yy=pad.t+h-h*(gy/100);
  ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(620-pad.r,yy);ctx.stroke();
  ctx.fillStyle='#8b5cf6';ctx.font='10px sans-serif';ctx.textAlign='right';
  ctx.fillText(gy+'%',pad.l-5,yy+4);
 }

 ageGroups.forEach(function(ag,gi){
  var gx=pad.l+gi*groupW;
  var vals=[ag.power,ag.stamina,ag.vibrato,ag.flexibility];
  var metColors=['#ef4444','#f59e0b','#a855f7','#3b82f6'];

  vals.forEach(function(v,vi){
   var bx=gx+5+vi*barW;
   var bh=h*(v/100);
   var isHover=hoverAge===gi;
   ctx.fillStyle=isHover?metColors[vi]:metColors[vi]+'90';
   ctx.fillRect(bx,pad.t+h-bh,barW-2,bh);
   if(isHover){
    ctx.fillStyle='#ffffff';ctx.font='9px sans-serif';ctx.textAlign='center';
    ctx.fillText(v+'%',bx+barW/2-1,pad.t+h-bh-4);
   }
  });

  ctx.fillStyle=isHover?'#ffffff':ag.color;ctx.font='bold 11px sans-serif';ctx.textAlign='center';
  ctx.fillText(ag.age,gx+groupW/2,pad.t+h+15);
  ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';
  ctx.fillText(ag.rangeLow+'~'+ag.rangeHigh,gx+groupW/2,pad.t+h+28);

  if(hoverAge===gi){
   ctx.strokeStyle='#fbbf24';ctx.lineWidth=1;
   ctx.strokeRect(gx+3,pad.t,groupW-6,h);
  }
 });

 var legY=pad.t+h+40;
 metrics.forEach(function(m,i){
  var lx=pad.l+i*140;
  ctx.fillStyle=['#ef4444','#f59e0b','#a855f7','#3b82f6'][i];
  ctx.fillRect(lx,legY,10,10);
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(m,lx+14,legY+9);
 });

 if(hoverAge>=0&&hoverAge<ageGroups.length){
  var ha=ageGroups[hoverAge];
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(400,pad.t,210,70);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(400,pad.t,210,70);
  ctx.fillStyle='#e2d5f3';ctx.font='12px sans-serif';ctx.textAlign='left';
  ctx.fillText(ha.age+' 보컬 특성',408,pad.t+16);
  ctx.fillText('음역: '+ha.rangeLow+' ~ '+ha.rangeHigh,408,pad.t+33);
  var avg=Math.round((ha.power+ha.stamina+ha.vibrato+ha.flexibility)/4);
  ctx.fillStyle=gradeColor26(gradeFor26(avg));
  ctx.fillText('종합: '+avg+'% ['+gradeFor26(avg)+']',408,pad.t+50);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText(ha.age==='30대'?'최적기: 기술과 체력의 균형':ha.age==='20대'?'성장기: 체력 최고, 기술 발전중':'변화기: 경험으로 보완 가능',408,pad.t+64);
 }
}
drawAging();

cv.addEventListener('mousemove',function(e){
 var p=cxy26(cv,e);
 var pad={l:55,r:15,t:45,b:65};
 var w=620-pad.l-pad.r;
 var groupW=w/ageGroups.length;
 hoverAge=Math.floor((p.x-pad.l)/groupW);
 if(hoverAge<0||hoverAge>=ageGroups.length)hoverAge=-1;
 drawAging();
});
cv.addEventListener('click',function(){if(hoverAge>=0)sfx26('agingResult');});
};

/* ── Feature 6: AI Audition Judging Matrix ── */
window.__sv26AuditionMatrix=function(){
sfx26('auditionJudge');
var overlay=document.createElement('div');
overlay.id='sv26-audition-matrix';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🎤 AI 오디션 심사 매트릭스</h3><button id="sv26-aud-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-aud-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">5명 AI 심사위원 × 6항목 심사 매트릭스. 셀 클릭으로 상세 피드백.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-aud-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-aud-cv');
var ctx=cv.getContext('2d');
var judges=[
 {name:'유희열',style:'음악성',color:'#a855f7'},
 {name:'박진영',style:'퍼포먼스',color:'#ec4899'},
 {name:'이선희',style:'보컬 기술',color:'#3b82f6'},
 {name:'양현석',style:'스타성',color:'#f59e0b'},
 {name:'이효리',style:'감정 표현',color:'#10b981'}
];
var criteria=['음정','리듬','감정','테크닉','무대매너','잠재력'];
var scores=[];
judges.forEach(function(){
 var row=[];
 criteria.forEach(function(){row.push(Math.floor(Math.random()*40+55));});
 scores.push(row);
});
var hoverCell={r:-1,c:-1};

function drawAudition(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,640,400);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('AI 오디션 심사 매트릭스 (5심사위원 × 6항목)',320,22);

 var pad={l:80,r:20,t:55,b:55};
 var cellW=(640-pad.l-pad.r)/criteria.length;
 var cellH=(400-pad.t-pad.b)/judges.length;

 criteria.forEach(function(c,ci){
  ctx.fillStyle='#c084fc';ctx.font='11px sans-serif';ctx.textAlign='center';
  ctx.fillText(c,pad.l+ci*cellW+cellW/2,pad.t-8);
 });

 judges.forEach(function(j,ji){
  ctx.fillStyle=j.color;ctx.font='11px sans-serif';ctx.textAlign='right';
  ctx.fillText(j.name,pad.l-8,pad.t+ji*cellH+cellH/2+4);

  criteria.forEach(function(c,ci){
   var score=scores[ji][ci];
   var x=pad.l+ci*cellW;
   var y=pad.t+ji*cellH;
   var isHover=hoverCell.r===ji&&hoverCell.c===ci;

   var intensity=Math.max(0.2,score/100);
   ctx.fillStyle='hsla('+(score>80?140:score>60?50:0)+',60%,'+(30+intensity*25)+'%,'+(isHover?0.95:0.7)+')';
   ctx.fillRect(x+1,y+1,cellW-2,cellH-2);
   ctx.strokeStyle=isHover?'#fbbf24':'#2d1b4e';
   ctx.lineWidth=isHover?2:0.5;
   ctx.strokeRect(x+1,y+1,cellW-2,cellH-2);

   ctx.fillStyle='#ffffff';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText(score,x+cellW/2,y+cellH/2+2);
   ctx.fillStyle=gradeColor26(gradeFor26(score));ctx.font='10px sans-serif';
   ctx.fillText(gradeFor26(score),x+cellW/2,y+cellH/2+16);
  });

  var rowAvg=Math.round(scores[ji].reduce(function(s,v){return s+v;},0)/criteria.length);
  ctx.fillStyle='#1a0e2e';ctx.fillRect(640-pad.r-2,pad.t+ji*cellH+1,pad.r,cellH-2);
 });

 var colAvgs=criteria.map(function(c,ci){
  return Math.round(judges.reduce(function(s,j,ji){return s+scores[ji][ci];},0)/judges.length);
 });
 colAvgs.forEach(function(avg,ci){
  var x=pad.l+ci*cellW;
  ctx.fillStyle='#1a0e2e';ctx.fillRect(x+1,400-pad.b+5,cellW-2,20);
  ctx.fillStyle=gradeColor26(gradeFor26(avg));ctx.font='bold 11px sans-serif';ctx.textAlign='center';
  ctx.fillText('평균:'+avg,x+cellW/2,400-pad.b+19);
 });

 var totalAvg=Math.round(colAvgs.reduce(function(s,v){return s+v;},0)/colAvgs.length);
 var gr=gradeFor26(totalAvg);
 ctx.fillStyle='#1a0e2eee';ctx.fillRect(240,370,160,25);
 ctx.strokeStyle='#7c3aed';ctx.strokeRect(240,370,160,25);
 ctx.fillStyle=gradeColor26(gr);ctx.font='bold 13px sans-serif';ctx.textAlign='center';
 ctx.fillText('종합: '+totalAvg+'점 ['+gr+'] '+(totalAvg>=70?'합격!':'아쉬워요'),320,388);

 if(hoverCell.r>=0&&hoverCell.c>=0){
  var feedback=['음정이 매우 안정적입니다','리듬감이 뛰어납니다','감정 전달이 인상적입니다','기술적 완성도가 높습니다','무대 장악력이 좋습니다','성장 잠재력이 보입니다'];
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(10,pad.t-3,230,35);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(10,pad.t-3,230,35);
  ctx.fillStyle='#fbbf24';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(judges[hoverCell.r].name+': '+criteria[hoverCell.c],18,pad.t+11);
  ctx.fillStyle='#e2d5f3';ctx.font='10px sans-serif';
  ctx.fillText(feedback[hoverCell.c],18,pad.t+25);
 }
}
drawAudition();

cv.addEventListener('mousemove',function(e){
 var p=cxy26(cv,e);
 var pad={l:80,r:20,t:55,b:55};
 var cellW=(640-pad.l-pad.r)/criteria.length;
 var cellH=(400-pad.t-pad.b)/judges.length;
 var ci=Math.floor((p.x-pad.l)/cellW);
 var ri=Math.floor((p.y-pad.t)/cellH);
 hoverCell=(ci>=0&&ci<criteria.length&&ri>=0&&ri<judges.length)?{r:ri,c:ci}:{r:-1,c:-1};
 drawAudition();
});
cv.addEventListener('click',function(){
 if(hoverCell.r>=0&&hoverCell.c>=0){
  sfx26('auditionPass');
  scores[hoverCell.r][hoverCell.c]=Math.min(100,scores[hoverCell.r][hoverCell.c]+Math.floor(Math.random()*5+1));
  drawAudition();
 }
});
};

/* ── Feature 7: Vocal Posture Guide ── */
window.__sv26PostureGuide=function(){
sfx26('postureGuide');
var overlay=document.createElement('div');
overlay.id='sv26-posture-guide';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🧘 발성 포지션 가이드</h3><button id="sv26-posture-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-posture-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">8가지 발성 포지션의 6축 역량 Radar. 클릭하여 포지션 전환.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-posture-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-posture-cv');
var ctx=cv.getContext('2d');
var postures=[
 {name:'서서 부르기',axes:[90,85,80,70,88,85],tip:'기본 자세. 어깨 편하게, 무릎 살짝 굽히기'},
 {name:'앉아서 부르기',axes:[75,70,85,80,72,78],tip:'등받이에 기대지 않기. 복부 지지 유지'},
 {name:'무릎 꿇기',axes:[80,65,75,60,82,70],tip:'무대 퍼포먼스용. 호흡 제한 주의'},
 {name:'걸으면서 부르기',axes:[65,55,70,85,80,65],tip:'콘서트 무빙. 호흡 불안정 보완 필요'},
 {name:'눕기(이완)',axes:[70,80,90,50,60,88],tip:'호흡 연습 최적 자세. 실전에선 비현실적'},
 {name:'마이크 스탠드',axes:[88,82,78,75,90,80],tip:'양손 자유. 제스처와 표현력 극대화'},
 {name:'댄스 중 부르기',axes:[60,50,60,90,75,55],tip:'체력 소모 큼. 호흡법 특수 훈련 필요'},
 {name:'무대 위 점프',axes:[50,40,55,95,85,45],tip:'임팩트 순간용. 지속 사용 비추'}
];
var axisLabels=['호흡안정','발성파워','비브라토','무대자유','표현력','지구력'];
var curPosture=0;

function drawPosture(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('발성 포지션 가이드 (6축 Radar)',310,22);

 var cx=240,cy=210,radius=120;
 var n=axisLabels.length;
 var p=postures[curPosture];

 for(var ring=25;ring<=100;ring+=25){
  ctx.beginPath();
  for(var a=0;a<n;a++){
   var angle=(-Math.PI/2)+(2*Math.PI*a/n);
   var rx=cx+Math.cos(angle)*radius*(ring/100);
   var ry=cy+Math.sin(angle)*radius*(ring/100);
   if(a===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
  }
  ctx.closePath();ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;ctx.stroke();
 }

 for(var a=0;a<n;a++){
  var angle=(-Math.PI/2)+(2*Math.PI*a/n);
  var ex=cx+Math.cos(angle)*radius;
  var ey=cy+Math.sin(angle)*radius;
  ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(ex,ey);ctx.strokeStyle='#3d2b5e';ctx.lineWidth=0.5;ctx.stroke();
  var labelR=radius+20;
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='center';
  ctx.fillText(axisLabels[a],cx+Math.cos(angle)*labelR,cy+Math.sin(angle)*labelR+4);
 }

 ctx.beginPath();
 p.axes.forEach(function(v,i){
  var angle=(-Math.PI/2)+(2*Math.PI*i/n);
  var px=cx+Math.cos(angle)*radius*(v/100);
  var py=cy+Math.sin(angle)*radius*(v/100);
  if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
 });
 ctx.closePath();ctx.fillStyle='#a855f730';ctx.fill();
 ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.stroke();

 p.axes.forEach(function(v,i){
  var angle=(-Math.PI/2)+(2*Math.PI*i/n);
  var px=cx+Math.cos(angle)*radius*(v/100);
  var py=cy+Math.sin(angle)*radius*(v/100);
  ctx.beginPath();ctx.arc(px,py,4,0,Math.PI*2);ctx.fillStyle='#c084fc';ctx.fill();
  ctx.fillStyle='#fbbf24';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText(v+'%',px,py-8);
 });

 var infoX=420,infoY=60;
 ctx.fillStyle='#1a0e2e';ctx.fillRect(infoX,infoY,190,130);
 ctx.strokeStyle='#7c3aed';ctx.strokeRect(infoX,infoY,190,130);
 ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
 ctx.fillText(p.name,infoX+10,infoY+22);
 var avg=Math.round(p.axes.reduce(function(s,v){return s+v;},0)/n);
 var gr=gradeFor26(avg);
 ctx.fillStyle=gradeColor26(gr);ctx.font='bold 14px sans-serif';
 ctx.fillText(avg+'% ['+gr+']',infoX+10,infoY+45);
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
 var tipLines=p.tip.match(/.{1,22}/g)||[p.tip];
 tipLines.forEach(function(line,li){
  ctx.fillText(line,infoX+10,infoY+65+li*14);
 });

 var btnY=350;
 postures.forEach(function(pp,pi){
  var bx=10+pi*75;
  ctx.fillStyle=pi===curPosture?'#7c3aed':'#1a0e2e';
  ctx.fillRect(bx,btnY,70,35);
  ctx.strokeStyle=pi===curPosture?'#c084fc':'#3d2b5e';ctx.lineWidth=1;
  ctx.strokeRect(bx,btnY,70,35);
  ctx.fillStyle=pi===curPosture?'#ffffff':'#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='center';
  var shortName=pp.name.length>6?pp.name.substring(0,6)+'..':pp.name;
  ctx.fillText(shortName,bx+35,btnY+15);
  var pavg=Math.round(pp.axes.reduce(function(s,v){return s+v;},0)/6);
  ctx.fillStyle=gradeColor26(gradeFor26(pavg));
  ctx.fillText(gradeFor26(pavg),bx+35,btnY+28);
 });
}
drawPosture();

cv.addEventListener('click',function(e){
 var p=cxy26(cv,e);
 if(p.y>=350&&p.y<=385){
  var idx=Math.floor((p.x-10)/75);
  if(idx>=0&&idx<postures.length){
   sfx26('postureCorrect');
   curPosture=idx;
   drawPosture();
  }
 }
});
};

/* ── Feature 8: Vocal Career Path ── */
window.__sv26CareerPath=function(){
sfx26('careerAdvance');
var overlay=document.createElement('div');
overlay.id='sv26-career-path';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🚀 보컬 커리어 패스</h3><button id="sv26-career-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv26-career-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">5단계 보컬 커리어 로드맵. 각 단계 클릭하여 필요 스킬 확인.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv26-career-close').onclick=function(){sfx26('navClick26');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx26('navClick26');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv26-career-cv');
var ctx=cv.getContext('2d');
var stages=[
 {name:'입문자',level:1,xp:0,maxXp:100,skills:['기본 호흡','음정 듣기','리듬 따라하기'],color:'#6b7280',icon:'🌱',progress:85},
 {name:'아마추어',level:2,xp:60,maxXp:200,skills:['비브라토 기초','감정 표현','장르 탐험'],color:'#3b82f6',icon:'🌟',progress:62},
 {name:'세미프로',level:3,xp:30,maxXp:400,skills:['믹스보이스','고급 테크닉','무대 매너'],color:'#a855f7',icon:'🔥',progress:35},
 {name:'프로',level:4,xp:10,maxXp:800,skills:['음반 녹음','라이브 퍼포먼스','팬 소통'],color:'#f59e0b',icon:'⭐',progress:12},
 {name:'슈퍼스타',level:5,xp:0,maxXp:1600,skills:['월드투어','프로듀싱','레거시 구축'],color:'#fbbf24',icon:'👑',progress:3}
];
var hoverStage=-1;
var careerData=ls26('careerProgress',stages.map(function(s){return s.progress;}));
stages.forEach(function(s,i){s.progress=careerData[i]||s.progress;});

function drawCareer(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,640,400);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 커리어 패스 (5단계 로드맵)',320,22);

 var stageW=110,stageH=280;
 var startX=(640-stages.length*stageW-(stages.length-1)*8)/2;
 var startY=45;

 stages.forEach(function(s,i){
  var x=startX+i*(stageW+8);
  var y=startY;
  var isHover=hoverStage===i;
  var fillH=stageH*(s.progress/100);

  ctx.fillStyle='#1a0e2e';ctx.fillRect(x,y,stageW,stageH);
  var grd=ctx.createLinearGradient(x,y+stageH-fillH,x,y+stageH);
  grd.addColorStop(0,s.color+'60');grd.addColorStop(1,s.color+'20');
  ctx.fillStyle=grd;
  ctx.fillRect(x,y+stageH-fillH,stageW,fillH);
  ctx.strokeStyle=isHover?'#fbbf24':s.color;
  ctx.lineWidth=isHover?2.5:1;
  ctx.strokeRect(x,y,stageW,stageH);

  ctx.font='24px sans-serif';ctx.textAlign='center';
  ctx.fillText(s.icon,x+stageW/2,y+30);

  ctx.fillStyle=isHover?'#ffffff':s.color;ctx.font='bold 12px sans-serif';
  ctx.fillText(s.name,x+stageW/2,y+50);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText('Lv.'+s.level,x+stageW/2,y+65);

  ctx.fillStyle='#2d1b4e';ctx.fillRect(x+10,y+75,stageW-20,12);
  var progW=(stageW-20)*(s.progress/100);
  ctx.fillStyle=s.color;ctx.fillRect(x+10,y+75,progW,12);
  ctx.fillStyle='#ffffff';ctx.font='9px sans-serif';ctx.textAlign='center';
  ctx.fillText(s.progress+'%',x+stageW/2,y+84);

  s.skills.forEach(function(sk,si){
   var unlocked=s.progress>=(si+1)*30;
   ctx.fillStyle=unlocked?s.color+'90':'#3d2b5e';
   ctx.fillRect(x+8,y+95+si*28,stageW-16,22);
   ctx.fillStyle=unlocked?'#ffffff':'#6b5b7b';ctx.font='9px sans-serif';ctx.textAlign='center';
   ctx.fillText((unlocked?'✓ ':'🔒 ')+sk,x+stageW/2,y+109+si*28);
  });

  if(i<stages.length-1){
   var arrowX=x+stageW+1;
   var arrowY=y+stageH/2;
   ctx.fillStyle=stages[i].progress>=80?'#34d399':'#3d2b5e';
   ctx.beginPath();ctx.moveTo(arrowX,arrowY-5);ctx.lineTo(arrowX+6,arrowY);ctx.lineTo(arrowX,arrowY+5);ctx.fill();
  }
 });

 var totalProgress=Math.round(stages.reduce(function(s,st){return s+st.progress;},0)/stages.length);
 ctx.fillStyle='#1a0e2eee';ctx.fillRect(220,345,200,45);
 ctx.strokeStyle='#7c3aed';ctx.strokeRect(220,345,200,45);
 ctx.fillStyle='#c084fc';ctx.font='11px sans-serif';ctx.textAlign='center';
 ctx.fillText('커리어 종합 진행률',320,360);
 var gr=gradeFor26(totalProgress);
 ctx.fillStyle=gradeColor26(gr);ctx.font='bold 16px sans-serif';
 ctx.fillText(totalProgress+'% ['+gr+']',320,382);
}
drawCareer();

cv.addEventListener('mousemove',function(e){
 var p=cxy26(cv,e);
 var stageW=110,startX=(640-5*stageW-4*8)/2,startY=45,stageH=280;
 hoverStage=-1;
 for(var i=0;i<5;i++){
  var x=startX+i*(stageW+8);
  if(p.x>=x&&p.x<=x+stageW&&p.y>=startY&&p.y<=startY+stageH){hoverStage=i;break;}
 }
 drawCareer();
});
cv.addEventListener('click',function(){
 if(hoverStage>=0){
  sfx26('careerAdvance');
  stages[hoverStage].progress=Math.min(100,stages[hoverStage].progress+Math.floor(Math.random()*5+2));
  ls26s('careerProgress',stages.map(function(s){return s.progress;}));
  drawCareer();
 }
});
};

/* ── Nav buttons injection ── */
document.addEventListener('DOMContentLoaded',function(){
setTimeout(function(){

var existingNav=document.querySelector('.bottomNav')||document.querySelector('[class*="bottom"]')||document.querySelector('nav');
if(!existingNav){
 var allDivs=document.querySelectorAll('div');
 for(var i=allDivs.length-1;i>=0;i--){
  var s=window.getComputedStyle(allDivs[i]);
  if(s.position==='fixed'&&parseInt(s.bottom)<=5){existingNav=allDivs[i];break;}
 }
}
if(!existingNav){
 existingNav=document.querySelector('[style*="overflow-x"]')||document.querySelector('[style*="flex-wrap"]');
}

var btnDefs=[
 {label:'🌊스펙트럼',fn:'__sv26FreqSpectrum',key:'A'},
 {label:'🏆트리맵',fn:'__sv26MasteryTreeMap',key:'S'},
 {label:'⭐돌파점',fn:'__sv26Breakthrough',key:'D'},
 {label:'🎮모드',fn:'__sv26ModeSelector',key:'F'},
 {label:'⌛에이징',fn:'__sv26AgingSim',key:'G'},
 {label:'🎤오디션',fn:'__sv26AuditionMatrix',key:'H'},
 {label:'🧘자세',fn:'__sv26PostureGuide',key:'J'},
 {label:'🚀커리어',fn:'__sv26CareerPath',key:'K'},
 {label:'🔄v26',fn:null,key:'0'}
];

btnDefs.forEach(function(def){
 var btn=document.createElement('button');
 btn.textContent=def.label;
 btn.title='v26: '+def.label+(def.key?' (Shift+'+def.key+')':'');
 btn.style.cssText='padding:6px 10px;margin:2px;background:linear-gradient(135deg,#059669,#10b981);color:white;border:none;border-radius:8px;cursor:pointer;font-size:11px;font-weight:bold;box-shadow:0 2px 6px rgba(5,150,105,0.4);';
 btn.addEventListener('mouseenter',function(){btn.style.transform='scale(1.08)';});
 btn.addEventListener('mouseleave',function(){btn.style.transform='scale(1)';});
 btn.onclick=function(){
  sfx26('navClick26');
  if(def.fn&&window[def.fn])window[def.fn]();
 };
 if(existingNav)existingNav.appendChild(btn);
});

/* ── Keyboard Shortcuts (Shift+A/S/D/F/G/H/J/K/0) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'A':'__sv26FreqSpectrum','S':'__sv26MasteryTreeMap','D':'__sv26Breakthrough',
  'F':'__sv26ModeSelector','G':'__sv26AgingSim','H':'__sv26AuditionMatrix',
  'J':'__sv26PostureGuide','K':'__sv26CareerPath'
 };
 var key=e.key.toUpperCase();
 if(map[key]&&window[map[key]]){e.preventDefault();sfx26('navClick26');window[map[key]]();}
 if(key==='0'||e.code==='Digit0'){e.preventDefault();sfx26('navClick26');}
});

},800);
});
})();
