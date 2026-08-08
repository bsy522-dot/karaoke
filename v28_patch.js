/* StarVoice v28 Patch — Self-contained IIFE module injected via SW
 * +10 songs(245->255), VocalTimbreSpectrogram Canvas, SongKeyModulator Canvas,
 * BreathCapacityMeter Canvas, VocalVibratoPrecision Canvas,
 * GenreMasteryWheel Canvas, PhraseBreakdownAnalyzer Canvas,
 * StagePresenceSimulator Canvas, ComprehensiveVocalDNA Canvas,
 * quiz +15(312->327), achievements +12(258->270), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v28KaraokeLoaded) return;
window.__v28KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls28(k,d){try{var v=localStorage.getItem('sv28-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls28s(k,v){try{localStorage.setItem('sv28-'+k,JSON.stringify(v));}catch(e){}}
function gradeFor28(pct){return pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';}
function gradeColor28(g){return g==='S'?'#fbbf24':g==='A'?'#34d399':g==='B'?'#60a5fa':g==='C'?'#c084fc':'#f87171';}
function cxy28(cv,e){var r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)*(cv.width/r.width),y:(e.clientY-r.top)*(cv.height/r.height)};}

/* ── 10 New Songs (246-255) ── */
var v28Songs=[
{id:246,title:'Supernova',artist:'aespa',bpm:138,key:'Fm',difficulty:4,genre:'dance',
 notes:[F3,Ab3,C4,F4,Eb4,C4,Ab3,F3,G3,Bb3,D4,F4,Eb4,D4,C4,Bb3],
 lyrics:['Su','per','no','va','빛','나','는','별','이','되','어','날','아','올','라','가'],
 duration:[326,326,326,652,326,326,326,326,326,326,326,652,326,326,326,326]},
{id:247,title:'Magnetic',artist:'ILLIT',bpm:120,key:'Ab',difficulty:2,genre:'pop',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,D4,F4,Ab4,G4,F4,Eb4,D4],
 lyrics:['Mag','ne','tic','끌','려','가','는','대','로','널','향','해','가','고','싶','어'],
 duration:[375,375,375,750,375,375,375,375,375,375,375,750,375,375,375,375]},
{id:248,title:'해야 (HEYA)',artist:'IVE',bpm:128,key:'Gm',difficulty:3,genre:'dance',
 notes:[G3,Bb3,D4,G4,F4,D4,Bb3,G3,A3,C4,Eb4,G4,F4,Eb4,D4,C4],
 lyrics:['해','야','해','야','해','야','떠','올','라','라','밝','은','빛','을','비','춰'],
 duration:[352,352,352,703,352,352,352,352,352,352,352,703,352,352,352,352]},
{id:249,title:'Welcome to the Show',artist:'DAY6',bpm:110,key:'E',difficulty:3,genre:'rock',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['Wel','come','to','the','show','무','대','위','에','서','빛','나','는','순','간','을'],
 duration:[409,409,409,818,409,409,409,409,409,409,409,818,409,409,409,409]},
{id:250,title:'Love Lee',artist:'AKMU',bpm:96,key:'C',difficulty:2,genre:'pop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['Love','Lee','사','랑','스','러','운','그','대','오','늘','도','예','뻐','보','여'],
 duration:[469,469,469,938,469,469,469,469,469,469,469,938,469,469,469,469]},
{id:251,title:'Power',artist:'G-DRAGON',bpm:135,key:'Bbm',difficulty:4,genre:'hiphop',
 notes:[Bb3,Db4,F4,Bb4,Ab4,F4,Db4,Bb3,C4,Eb4,Gb4,Bb4,Ab4,Gb4,F4,Eb4],
 lyrics:['Pow','er','파','워','를','보','여','줄','게','이','건','나','의','무','대','야'],
 duration:[333,333,333,667,333,333,333,333,333,333,333,667,333,333,333,333]},
{id:252,title:'소나기',artist:'이클립스(ECLIPSE)',bpm:78,key:'D',difficulty:2,genre:'ballad',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['소','나','기','처','럼','너','에','게','쏟','아','지','고','싶','은','마','음'],
 duration:[577,577,577,1154,577,577,577,577,577,577,577,1154,577,577,577,577]},
{id:253,title:'Super Shy',artist:'NewJeans',bpm:130,key:'Ab',difficulty:3,genre:'dance',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,D4,F4,Ab4,G4,F4,Eb4,D4],
 lyrics:['Su','per','shy','su','per','shy','느','낌','이','와','내','맘','이','널','원','해'],
 duration:[346,346,346,692,346,346,346,346,346,346,346,692,346,346,346,346]},
{id:254,title:'꽃',artist:'지수(JISOO)',bpm:88,key:'Eb',difficulty:3,genre:'ballad',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['꽃','이','피','고','지','듯','이','우','리','의','계','절','도','그','렇','게'],
 duration:[511,511,511,1023,511,511,511,511,511,511,511,1023,511,511,511,511]},
{id:255,title:'Fighting (Feat. Lee Young Ji)',artist:'BSS(부석순)',bpm:122,key:'G',difficulty:2,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['파','이','팅','해','야','지','오','늘','도','힘','내','서','가','보','자','고'],
 duration:[369,369,369,738,369,369,369,369,369,369,369,738,369,369,369,369]}
];
(function injectSongs28(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v28Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX 16 sounds ── */
var actx28=null;
function sfx28(type){
 try{
  if(!actx28)actx28=new(window.AudioContext||window.webkitAudioContext)();
  var o=actx28.createOscillator(),g=actx28.createGain(),t=actx28.currentTime;
  o.connect(g);g.connect(actx28.destination);
  var presets={
   timbreScan:{f:520,type:'sine',atk:0.01,dec:0.2,vol:0.18},
   timbreHit:{f:740,type:'triangle',atk:0.01,dec:0.14,vol:0.2},
   keyMod:{f:466,type:'sine',atk:0.02,dec:0.22,vol:0.2},
   keyShift:{f:622,type:'triangle',atk:0.01,dec:0.18,vol:0.22},
   breathIn:{f:330,type:'sine',atk:0.05,dec:0.35,vol:0.15},
   breathOut:{f:220,type:'sine',atk:0.01,dec:0.25,vol:0.12},
   vibratoWave:{f:587,type:'sine',atk:0.01,dec:0.3,vol:0.18},
   vibratoPeak:{f:784,type:'triangle',atk:0.01,dec:0.15,vol:0.2},
   genreUnlock:{f:698,type:'square',atk:0.01,dec:0.15,vol:0.12},
   genreMaster:{f:880,type:'sine',atk:0.01,dec:0.2,vol:0.18},
   phraseBreak:{f:440,type:'sine',atk:0.02,dec:0.18,vol:0.18},
   phraseScore:{f:659,type:'triangle',atk:0.01,dec:0.22,vol:0.2},
   stageLit:{f:523,type:'sine',atk:0.01,dec:0.25,vol:0.2},
   stageCheer:{f:784,type:'square',atk:0.01,dec:0.12,vol:0.12},
   dnaReveal:{f:494,type:'sine',atk:0.02,dec:0.3,vol:0.18},
   navClick28:{f:580,type:'sine',atk:0.01,dec:0.08,vol:0.12}
  };
  var p=presets[type]||presets.navClick28;
  o.type=p.type;o.frequency.setValueAtTime(p.f,t);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(p.vol,t+p.atk);
  g.gain.exponentialRampToValueAtTime(0.001,t+p.atk+p.dec);
  o.start(t);o.stop(t+p.atk+p.dec+0.05);
 }catch(e){}
}

/* ── Quiz +15 (312->327) ── */
var v28Quiz=[
{q:'보컬 &quot;팀버(Timbre)&quot;란 무엇인가?',a:['음색, 같은 높이와 크기의 소리를 구별하는 특성','음정의 높낮이','리듬의 빠르기','호흡의 길이'],c:0},
{q:'노래에서 &quot;전조(Modulation)&quot;란?',a:['곡 중간에 조성(Key)이 바뀌는 것','빠르기가 변하는 것','볼륨이 바뀌는 것','가사가 변하는 것'],c:0},
{q:'보컬에서 &quot;폐활량(Vital Capacity)&quot;이 중요한 이유는?',a:['긴 프레이즈를 끊김 없이 부를 수 있게 해줌','고음을 내기 위해','리듬감을 위해','음정을 맞추기 위해'],c:0},
{q:'비브라토의 &quot;진폭(Amplitude)&quot;이란?',a:['음이 흔들리는 폭의 크기','비브라토의 속도','음의 높이','음의 크기'],c:0},
{q:'장르별 발성법 중 &quot;벨팅(Belting)&quot;이 주로 쓰이는 장르는?',a:['뮤지컬/팝/R&amp;B','클래식 성악','재즈 보사노바','랩/힙합'],c:0},
{q:'보컬 프레이즈(Phrase)에서 &quot;브레스 마크(Breath Mark)&quot;란?',a:['숨을 쉬는 위치를 표시한 기호','음의 세기를 나타내는 기호','템포 변화 기호','반복 기호'],c:0},
{q:'무대에서 &quot;스테이지 프레즌스(Stage Presence)&quot;란?',a:['공연자가 무대 위에서 청중을 사로잡는 존재감','마이크 기술','의상 스타일','조명 효과'],c:0},
{q:'보컬 DNA 분석에서 &quot;포먼트 주파수&quot;가 결정하는 것은?',a:['모음의 음색과 목소리 개성','리듬 패턴','호흡 방법','비브라토 속도'],c:0},
{q:'aespa &quot;Supernova&quot;의 장르적 특징은?',a:['하이퍼팝 요소를 결합한 댄스 팝','발라드','트로트','어쿠스틱'],c:0},
{q:'노래에서 &quot;다이나믹 콘트라스트&quot;란?',a:['노래 내에서 조용한 부분과 큰 부분의 차이','음정의 범위','템포의 변화','가사의 내용'],c:0},
{q:'호흡법 중 &quot;복식호흡(Diaphragmatic Breathing)&quot;이란?',a:['횡격막을 활용하여 깊게 호흡하는 방법','가슴만 사용하는 호흡','코만 사용하는 호흡','입으로만 호흡'],c:0},
{q:'DAY6 &quot;Welcome to the Show&quot;의 음악적 특징은?',a:['밴드 사운드 기반의 록 발라드','일렉트로닉 댄스','트로트','힙합'],c:0},
{q:'보컬 워밍업에서 &quot;립 트릴(Lip Trill)&quot;의 효과는?',a:['성대의 긴장을 풀고 안정적인 호흡 유지','고음 확장','음정 교정','리듬 연습'],c:0},
{q:'노래의 &quot;프레이즈 매핑(Phrase Mapping)&quot;이란?',a:['곡의 문장 구조를 분석하여 호흡과 표현을 계획하는 것','악보 읽기','리듬 연습','보이스 이펙트 적용'],c:0},
{q:'NewJeans &quot;Super Shy&quot;의 보컬 테크닉 특징은?',a:['위스퍼 보컬과 팝적인 깔끔한 음색의 조합','파워 벨팅','오페라 창법','래핑 중심'],c:0}
];
(function injectQuiz28(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v28Quiz.forEach(function(q){
    var exists=window.quizQuestions.some(function(x){return x.q===q.q;});
    if(!exists)window.quizQuestions.push(q);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements +12 (258->270) ── */
var v28Achievements=[
{id:'timbre_analyst',name:'음색 분석가',desc:'보컬 팀버 스펙트로그램 분석 완료',icon:'🎙'},
{id:'key_master',name:'키 마스터',desc:'전조 모듈레이터 12키 전부 탐험',icon:'🔑'},
{id:'breath_champion',name:'호흡 챔피언',desc:'호흡 용량 80% 이상 달성',icon:'💨'},
{id:'vibrato_precision',name:'비브라토 정밀가',desc:'비브라토 정밀도 85% 이상 달성',icon:'〰'},
{id:'genre_explorer',name:'장르 탐험가',desc:'장르 마스터리 휠 10장르 달성',icon:'🌀'},
{id:'phrase_decoder',name:'프레이즈 해독가',desc:'프레이즈 분해 분석 완료',icon:'📝'},
{id:'stage_star',name:'스테이지 스타',desc:'무대 존재감 시뮬 S등급 달성',icon:'⭐'},
{id:'vocal_dna',name:'보컬 DNA 해독',desc:'종합 보컬 DNA 분석 완료',icon:'🧬'},
{id:'quiz_v28_master',name:'퀴즈 마스터 v28',desc:'v28 퀴즈 전문 완료',icon:'🧠'},
{id:'song_255',name:'255곡 수집가',desc:'255곡 보유 달성',icon:'🎵'},
{id:'v28_explorer',name:'v28 탐험가',desc:'v28 기능 5개 이상 사용',icon:'🔭'},
{id:'v28_complete',name:'v28 마스터',desc:'v28 모든 기능 체험 완료',icon:'🏆'}
];
(function injectAchievements28(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v28Achievements.forEach(function(a){
    if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Feature 1: Vocal Timbre Spectrogram Canvas 640x400 ── */
window.__sv28TimbreSpectrogram=function(){
sfx28('timbreScan');
var overlay=document.createElement('div');
overlay.id='sv28-timbre';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:680px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">🎙 보컬 팀버 스펙트로그램</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-timbre-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">8개 주파수 대역별 보컬 음색 스펙트로그램. 클릭하여 새 분석 실행</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-timbre-cv'),ctx=cv.getContext('2d');
var bands=['저음 (80-200Hz)','중저음 (200-500Hz)','중음 (500-1kHz)','중고음 (1-2kHz)','고음 (2-4kHz)','초고음 (4-8kHz)','에어 (8-12kHz)','프레즌스 (12-16kHz)'];
var bandColors=['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#3b82f6','#8b5cf6','#ec4899'];

function genData(){return bands.map(function(){
 var arr=[];for(var i=0;i<20;i++)arr.push(20+Math.random()*80);return arr;
});}

var data=genData();
function drawTimbre(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,640,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 팀버 스펙트로그램 (주파수 대역 x 시간)',320,22);

 var gx=60,gy=40,gw=560,gh=300;
 var bh=gh/bands.length;
 ctx.strokeStyle='rgba(255,255,255,0.1)';
 for(var b=0;b<bands.length;b++){
  var by=gy+b*bh;
  ctx.fillStyle='rgba(255,255,255,0.7)';ctx.font='9px sans-serif';ctx.textAlign='right';
  ctx.fillText(bands[b],gx-4,by+bh/2+3);
  for(var t=0;t<20;t++){
   var tx=gx+t*(gw/20);
   var val=data[b][t];
   var alpha=val/100;
   ctx.fillStyle=bandColors[b];ctx.globalAlpha=alpha*0.85+0.15;
   ctx.fillRect(tx+1,by+1,gw/20-2,bh-2);
  }
 }
 ctx.globalAlpha=1;

 ctx.fillStyle='rgba(255,255,255,0.5)';ctx.font='9px sans-serif';ctx.textAlign='center';
 for(var t=0;t<20;t+=4){
  ctx.fillText((t*0.5).toFixed(1)+'s',gx+t*(gw/20)+gw/40,gy+gh+14);
 }

 var avgVals=data.map(function(arr){return arr.reduce(function(a,b){return a+b;},0)/arr.length;});
 var maxBand=avgVals.indexOf(Math.max.apply(null,avgVals));
 var rX=gx+gw+10,rY=gy;
 ctx.fillStyle='#c084fc';ctx.font='bold 10px sans-serif';ctx.textAlign='left';
 ctx.fillText('강조 대역:',rX-gw+10,gy+gh+30);
 ctx.fillStyle=bandColors[maxBand];
 ctx.fillText(bands[maxBand],rX-gw+70,gy+gh+30);

 var grade=gradeFor28(avgVals[maxBand]);
 ctx.fillStyle=gradeColor28(grade);ctx.font='bold 28px sans-serif';ctx.textAlign='right';
 ctx.fillText(grade,gx+gw,gy+gh+36);
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
 ctx.fillText('음색 풍부도',gx+gw-35,gy+gh+38);
}
drawTimbre();
cv.addEventListener('click',function(){sfx28('timbreHit');data=genData();drawTimbre();});
};

/* ── Feature 2: Song Key Modulator Canvas 620x400 ── */
window.__sv28KeyModulator=function(){
sfx28('keyMod');
var overlay=document.createElement('div');
overlay.id='sv28-keymod';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:660px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">🔑 곡 키 전조 모듈레이터</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-keymod-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">12키 원형 다이어그램 + 전조 적합도. 클릭하여 키 변경</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-keymod-cv'),ctx=cv.getContext('2d');
var keys=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
var keyColors=['#ef4444','#f97316','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4','#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899'];
var currentKey=0;
var suitability=keys.map(function(){return 40+Math.random()*60;});
suitability[0]=92;suitability[5]=85;suitability[7]=88;

function drawKeyMod(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('곡 키 전조 모듈레이터 (Circle of Keys)',310,22);

 var cx=220,cy=210,r=140;
 for(var i=0;i<12;i++){
  var angle=(i/12)*Math.PI*2-Math.PI/2;
  var x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r;
  var isActive=i===currentKey;
  ctx.beginPath();ctx.arc(x,y,isActive?24:18,0,Math.PI*2);
  ctx.fillStyle=isActive?keyColors[i]:'rgba(255,255,255,0.1)';
  ctx.fill();
  ctx.strokeStyle=keyColors[i];ctx.lineWidth=isActive?3:1;ctx.stroke();
  ctx.fillStyle=isActive?'#fff':'#ccc';ctx.font=(isActive?'bold 14':'12')+'px sans-serif';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(keys[i],x,y);
 }

 var bx=420,by=50,bw=180,bbh=22;
 ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='left';
 ctx.fillText('전조 적합도 (%)',bx,by);
 for(var i=0;i<12;i++){
  var barY=by+14+i*bbh;
  ctx.fillStyle='rgba(255,255,255,0.05)';ctx.fillRect(bx,barY,bw,bbh-4);
  var w=suitability[i]/100*bw;
  ctx.fillStyle=i===currentKey?keyColors[i]:'rgba('+parseInt(keyColors[i].slice(1,3),16)+','+parseInt(keyColors[i].slice(3,5),16)+','+parseInt(keyColors[i].slice(5,7),16)+',0.5)';
  ctx.fillRect(bx,barY,w,bbh-4);
  ctx.fillStyle='#fff';ctx.font='9px sans-serif';ctx.textAlign='right';
  ctx.fillText(keys[i]+' '+Math.round(suitability[i])+'%',bx-4,barY+12);
  var g=gradeFor28(suitability[i]);
  ctx.fillStyle=gradeColor28(g);ctx.textAlign='left';
  ctx.fillText(g,bx+bw+4,barY+12);
 }

 ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='center';
 ctx.fillText('현재 키: '+keys[currentKey]+' (클릭으로 키 변경)',310,390);
}
drawKeyMod();
cv.addEventListener('click',function(e){
 var p=cxy28(cv,e);
 var cx=220,cy=210,r=140;
 for(var i=0;i<12;i++){
  var angle=(i/12)*Math.PI*2-Math.PI/2;
  var x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r;
  var dx=p.x-x,dy2=p.y-y;
  if(Math.sqrt(dx*dx+dy2*dy2)<25){currentKey=i;sfx28('keyShift');drawKeyMod();return;}
 }
 currentKey=(currentKey+1)%12;sfx28('keyShift');drawKeyMod();
});
};

/* ── Feature 3: Breath Capacity Meter Canvas 620x400 ── */
window.__sv28BreathCapacity=function(){
sfx28('breathIn');
var overlay=document.createElement('div');
overlay.id='sv28-breath';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:660px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">💨 호흡 용량 측정기</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-breath-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">6종 호흡 훈련 용량 반원 게이지 + 20세션 트렌드. 클릭하여 세션 추가</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-breath-cv'),ctx=cv.getContext('2d');
var exercises=['복식호흡','립트릴','허밍','시간유지','스타카토','프레이즈'];
var exColors=['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#8b5cf6'];
var caps=exercises.map(function(){return 40+Math.random()*55;});
var trend=[];for(var i=0;i<20;i++)trend.push(50+Math.random()*40);

function drawBreath(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('호흡 용량 측정기 (6종 훈련 + 트렌드)',310,22);

 for(var i=0;i<6;i++){
  var col=i%3,row=Math.floor(i/3);
  var gcx=75+col*190,gcy=100+row*140,gr=50;
  var startA=Math.PI,endA=Math.PI+Math.PI*(caps[i]/100);
  ctx.beginPath();ctx.arc(gcx,gcy,gr,Math.PI,2*Math.PI);
  ctx.strokeStyle='rgba(255,255,255,0.1)';ctx.lineWidth=14;ctx.stroke();
  ctx.beginPath();ctx.arc(gcx,gcy,gr,startA,endA);
  ctx.strokeStyle=exColors[i];ctx.lineWidth=14;ctx.stroke();
  ctx.lineWidth=1;
  var g=gradeFor28(caps[i]);
  ctx.fillStyle=gradeColor28(g);ctx.font='bold 18px sans-serif';ctx.textAlign='center';
  ctx.fillText(g,gcx,gcy-4);
  ctx.fillStyle='#fff';ctx.font='10px sans-serif';
  ctx.fillText(Math.round(caps[i])+'%',gcx,gcy+12);
  ctx.fillStyle=exColors[i];ctx.font='10px sans-serif';
  ctx.fillText(exercises[i],gcx,gcy+gr+18);
 }

 var tx=50,ty=310,tw=520,th=70;
 ctx.fillStyle='#c084fc';ctx.font='bold 10px sans-serif';ctx.textAlign='left';
 ctx.fillText('20세션 호흡 용량 트렌드',tx,ty-6);
 ctx.strokeStyle='rgba(255,255,255,0.1)';ctx.beginPath();
 ctx.moveTo(tx,ty+th);ctx.lineTo(tx+tw,ty+th);ctx.stroke();
 ctx.beginPath();ctx.moveTo(tx,ty);ctx.lineTo(tx+tw,ty);ctx.stroke();
 ctx.strokeStyle='#22c55e';ctx.lineWidth=2;ctx.beginPath();
 for(var i=0;i<trend.length;i++){
  var px=tx+i*(tw/(trend.length-1)),py=ty+th-(trend[i]/100)*th;
  if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
 }
 ctx.stroke();ctx.lineWidth=1;
 for(var i=0;i<trend.length;i++){
  var px=tx+i*(tw/(trend.length-1)),py=ty+th-(trend[i]/100)*th;
  ctx.beginPath();ctx.arc(px,py,2.5,0,Math.PI*2);ctx.fillStyle='#22c55e';ctx.fill();
 }
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
 ctx.fillText('클릭: 새 세션 시뮬레이션',310,395);
}
drawBreath();
cv.addEventListener('click',function(){
 sfx28('breathOut');
 caps=exercises.map(function(){return 40+Math.random()*55;});
 trend.push(50+Math.random()*40);if(trend.length>20)trend.shift();
 drawBreath();
});
};

/* ── Feature 4: Vocal Vibrato Precision Canvas 620x400 ── */
window.__sv28VibratoPrecision=function(){
sfx28('vibratoWave');
var overlay=document.createElement('div');
overlay.id='sv28-vibrato';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:660px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">〰 비브라토 정밀도 분석기</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-vibrato-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">6종 비브라토 유형 6축 Radar + 파형 시각화. 클릭으로 유형 전환</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-vibrato-cv'),ctx=cv.getContext('2d');
var types=['Arm','Wrist','Finger','Jaw','Diaphragm','Lip'];
var typeColors=['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6'];
var axes=['속도(Hz)','진폭(cents)','균일성','안정성','따뜻함','컨트롤'];
var currentType=0;
var typeData=types.map(function(){return axes.map(function(){return 30+Math.random()*65;});});

function drawVibrato(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('비브라토 정밀도 분석기',310,22);

 var rcx=200,rcy=210,rr=120;
 for(var ring=5;ring>=1;ring--){
  ctx.beginPath();
  for(var a=0;a<6;a++){
   var angle=(a/6)*Math.PI*2-Math.PI/2;
   var x=rcx+Math.cos(angle)*rr*(ring/5),y=rcy+Math.sin(angle)*rr*(ring/5);
   if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.stroke();
 }
 for(var a=0;a<6;a++){
  var angle=(a/6)*Math.PI*2-Math.PI/2;
  ctx.beginPath();ctx.moveTo(rcx,rcy);
  ctx.lineTo(rcx+Math.cos(angle)*rr,rcy+Math.sin(angle)*rr);
  ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.stroke();
  var lx=rcx+Math.cos(angle)*(rr+18),ly=rcy+Math.sin(angle)*(rr+18);
  ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(axes[a],lx,ly);
 }
 var d=typeData[currentType];
 ctx.beginPath();
 for(var a=0;a<6;a++){
  var angle=(a/6)*Math.PI*2-Math.PI/2;
  var x=rcx+Math.cos(angle)*rr*(d[a]/100),y=rcy+Math.sin(angle)*rr*(d[a]/100);
  if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
 }
 ctx.closePath();ctx.fillStyle=typeColors[currentType].replace(')',',0.25)').replace('rgb','rgba').replace('#','');
 ctx.fillStyle='rgba('+parseInt(typeColors[currentType].slice(1,3),16)+','+parseInt(typeColors[currentType].slice(3,5),16)+','+parseInt(typeColors[currentType].slice(5,7),16)+',0.25)';
 ctx.fill();ctx.strokeStyle=typeColors[currentType];ctx.lineWidth=2;ctx.stroke();ctx.lineWidth=1;

 var wx=380,wy=60,ww=220,wh=100;
 ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
 ctx.fillText(types[currentType]+' 비브라토 파형',wx,wy-6);
 ctx.strokeStyle='rgba(255,255,255,0.1)';ctx.setLineDash([3,3]);
 ctx.beginPath();ctx.moveTo(wx,wy+wh/2);ctx.lineTo(wx+ww,wy+wh/2);ctx.stroke();
 ctx.setLineDash([]);
 ctx.strokeStyle=typeColors[currentType];ctx.lineWidth=2;ctx.beginPath();
 var freq=4+currentType*0.8,amp=15+Math.random()*15;
 for(var x=0;x<ww;x++){
  var py=wy+wh/2+Math.sin(x/ww*freq*Math.PI*2+Math.random()*0.15)*amp;
  if(x===0)ctx.moveTo(wx+x,py);else ctx.lineTo(wx+x,py);
 }
 ctx.stroke();ctx.lineWidth=1;

 var avg=d.reduce(function(a,b){return a+b;},0)/d.length;
 var g=gradeFor28(avg);
 ctx.fillStyle=gradeColor28(g);ctx.font='bold 28px sans-serif';ctx.textAlign='center';
 ctx.fillText(g,490,250);
 ctx.fillStyle='#fff';ctx.font='12px sans-serif';
 ctx.fillText(Math.round(avg)+'점',490,272);
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
 ctx.fillText(types[currentType]+' 비브라토',490,290);

 for(var i=0;i<types.length;i++){
  var bx=380,by2=310+i*14;
  ctx.fillStyle=i===currentType?typeColors[i]:'rgba(255,255,255,0.3)';ctx.font=(i===currentType?'bold ':'')+' 10px sans-serif';ctx.textAlign='left';
  ctx.fillText((i===currentType?'▶ ':'')+types[i],bx,by2);
  var bavg=typeData[i].reduce(function(a,b){return a+b;},0)/typeData[i].length;
  ctx.fillStyle=gradeColor28(gradeFor28(bavg));ctx.textAlign='right';
  ctx.fillText(gradeFor28(bavg)+' '+Math.round(bavg)+'%',bx+220,by2);
 }
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
 ctx.fillText('클릭으로 비브라토 유형 전환',310,395);
}
drawVibrato();
cv.addEventListener('click',function(){
 sfx28('vibratoPeak');
 currentType=(currentType+1)%types.length;
 typeData[currentType]=axes.map(function(){return 30+Math.random()*65;});
 drawVibrato();
});
};

/* ── Feature 5: Genre Mastery Wheel Canvas 640x400 ── */
window.__sv28GenreMastery=function(){
sfx28('genreUnlock');
var overlay=document.createElement('div');
overlay.id='sv28-genre';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:680px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">🌀 장르 마스터리 휠</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-genre-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">10장르 도넛차트 마스터리 + 장르별 곡수/정확도. 클릭하여 갱신</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-genre-cv'),ctx=cv.getContext('2d');
var genres=['발라드','댄스','팝','록','R&B','힙합','트로트','인디','OST','뮤지컬'];
var gColors=['#ef4444','#f97316','#eab308','#22c55e','#14b8a6','#06b6d4','#3b82f6','#6366f1','#8b5cf6','#ec4899'];
var mastery=genres.map(function(){return 25+Math.random()*70;});
var songCounts=[42,38,35,28,22,20,18,16,20,16];

function drawGenre(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,640,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('장르 마스터리 휠 (10장르 분석)',320,22);

 var dcx=200,dcy=210,outerR=140,innerR=70;
 var total=songCounts.reduce(function(a,b){return a+b;},0);
 var startAngle=-Math.PI/2;
 for(var i=0;i<genres.length;i++){
  var sliceAngle=(songCounts[i]/total)*Math.PI*2;
  ctx.beginPath();
  ctx.arc(dcx,dcy,outerR,startAngle,startAngle+sliceAngle);
  ctx.arc(dcx,dcy,innerR,startAngle+sliceAngle,startAngle,true);
  ctx.closePath();
  ctx.fillStyle=gColors[i];ctx.globalAlpha=0.3+mastery[i]/100*0.7;ctx.fill();
  ctx.globalAlpha=1;ctx.strokeStyle='rgba(0,0,0,0.3)';ctx.stroke();
  var midAngle=startAngle+sliceAngle/2;
  var lx=dcx+Math.cos(midAngle)*(outerR+16),ly=dcy+Math.sin(midAngle)*(outerR+16);
  if(sliceAngle>0.2){
   ctx.fillStyle='#fff';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
   ctx.fillText(genres[i],lx,ly);
  }
  startAngle+=sliceAngle;
 }
 var avgM=mastery.reduce(function(a,b){return a+b;},0)/mastery.length;
 var tg=gradeFor28(avgM);
 ctx.fillStyle=gradeColor28(tg);ctx.font='bold 24px sans-serif';ctx.textAlign='center';
 ctx.fillText(tg,dcx,dcy);
 ctx.fillStyle='#fff';ctx.font='11px sans-serif';
 ctx.fillText(Math.round(avgM)+'%',dcx,dcy+18);

 var bx=390,by=48;
 ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
 ctx.fillText('장르별 마스터리',bx,by);
 for(var i=0;i<genres.length;i++){
  var iy=by+16+i*33;
  ctx.fillStyle=gColors[i];ctx.font='10px sans-serif';ctx.textAlign='left';
  ctx.fillText(genres[i]+' ('+songCounts[i]+'곡)',bx,iy);
  ctx.fillStyle='rgba(255,255,255,0.08)';ctx.fillRect(bx,iy+4,220,12);
  ctx.fillStyle=gColors[i];ctx.fillRect(bx,iy+4,mastery[i]/100*220,12);
  var g=gradeFor28(mastery[i]);
  ctx.fillStyle=gradeColor28(g);ctx.font='bold 9px sans-serif';ctx.textAlign='right';
  ctx.fillText(g+' '+Math.round(mastery[i])+'%',bx+240,iy+14);
 }
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
 ctx.fillText('클릭: 새 마스터리 분석',320,395);
}
drawGenre();
cv.addEventListener('click',function(){sfx28('genreMaster');mastery=genres.map(function(){return 25+Math.random()*70;});drawGenre();});
};

/* ── Feature 6: Phrase Breakdown Analyzer Canvas 620x400 ── */
window.__sv28PhraseBreakdown=function(){
sfx28('phraseBreak');
var overlay=document.createElement('div');
overlay.id='sv28-phrase';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:660px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">📝 프레이즈 분해 분석기</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-phrase-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">8구간 프레이즈 정확도 바차트 + 브레스 포인트 타임라인. 클릭으로 새 분석</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-phrase-cv'),ctx=cv.getContext('2d');
var phrases=['인트로','A절 전반','A절 후반','B절 전반','B절 후반','코러스 전반','코러스 후반','아웃트로'];
var pColors=['#ef4444','#f97316','#eab308','#22c55e','#14b8a6','#06b6d4','#3b82f6','#8b5cf6'];
var accuracy=phrases.map(function(){return 40+Math.random()*55;});
var breathPoints=[2,5,8,11,14,17,20,23,26,29];

function drawPhrase(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('프레이즈 분해 분석기',310,22);

 var bx=60,by=50,bw=500,bh=190;
 var barW=bw/phrases.length-8;
 ctx.strokeStyle='rgba(255,255,255,0.08)';
 for(var h=0;h<=4;h++){
  var y=by+bh-h*(bh/4);
  ctx.beginPath();ctx.moveTo(bx,y);ctx.lineTo(bx+bw,y);ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='9px sans-serif';ctx.textAlign='right';
  ctx.fillText(h*25+'%',bx-4,y+3);
 }
 for(var i=0;i<phrases.length;i++){
  var x=bx+i*(bw/phrases.length)+4;
  var h=accuracy[i]/100*bh;
  var grd=ctx.createLinearGradient(x,by+bh-h,x,by+bh);
  grd.addColorStop(0,pColors[i]);grd.addColorStop(1,'rgba(0,0,0,0.3)');
  ctx.fillStyle=grd;ctx.fillRect(x,by+bh-h,barW,h);
  ctx.fillStyle=pColors[i];ctx.font='9px sans-serif';ctx.textAlign='center';
  ctx.fillText(phrases[i],x+barW/2,by+bh+14);
  ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';
  ctx.fillText(Math.round(accuracy[i])+'%',x+barW/2,by+bh-h-6);
  var g=gradeFor28(accuracy[i]);
  ctx.fillStyle=gradeColor28(g);ctx.font='bold 12px sans-serif';
  ctx.fillText(g,x+barW/2,by+bh-h-20);
 }

 var ty=290,tw=500,th=50;
 ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
 ctx.fillText('브레스 포인트 타임라인',bx,ty-6);
 ctx.strokeStyle='rgba(255,255,255,0.15)';ctx.beginPath();
 ctx.moveTo(bx,ty+th/2);ctx.lineTo(bx+tw,ty+th/2);ctx.stroke();
 for(var i=0;i<breathPoints.length;i++){
  var px=bx+breathPoints[i]/30*tw;
  ctx.beginPath();ctx.arc(px,ty+th/2,6,0,Math.PI*2);
  ctx.fillStyle='#22c55e';ctx.fill();
  ctx.fillStyle='#fff';ctx.font='7px sans-serif';ctx.textAlign='center';
  ctx.fillText('B',px,ty+th/2+3);
  ctx.fillStyle='rgba(255,255,255,0.5)';ctx.font='8px sans-serif';
  ctx.fillText(breathPoints[i]+'s',px,ty+th/2+16);
 }

 var avgA=accuracy.reduce(function(a,b){return a+b;},0)/accuracy.length;
 var tg=gradeFor28(avgA);
 ctx.fillStyle=gradeColor28(tg);ctx.font='bold 20px sans-serif';ctx.textAlign='center';
 ctx.fillText('종합: '+tg+' ('+Math.round(avgA)+'%)',310,380);
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
 ctx.fillText('클릭: 새 프레이즈 분석',310,395);
}
drawPhrase();
cv.addEventListener('click',function(){sfx28('phraseScore');accuracy=phrases.map(function(){return 40+Math.random()*55;});drawPhrase();});
};

/* ── Feature 7: Stage Presence Simulator Canvas 620x400 ── */
window.__sv28StagePresence=function(){
sfx28('stageLit');
var overlay=document.createElement('div');
overlay.id='sv28-stage';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:660px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">⭐ 무대 존재감 시뮬레이터</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-stage-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">8가지 무대 요소 스택 수평바 + 관객 반응 게이지. 클릭하여 공연 재시뮬</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-stage-cv'),ctx=cv.getContext('2d');
var elements=['보컬 파워','감정 표현','아이컨택','제스처','공간 활용','에너지 관리','관객 소통','카리스마'];
var elColors=['#ef4444','#f97316','#eab308','#22c55e','#14b8a6','#06b6d4','#3b82f6','#8b5cf6'];
var scores=elements.map(function(){return 35+Math.random()*60;});
var audienceReaction=55+Math.random()*40;

function drawStage(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('무대 존재감 시뮬레이터',310,22);

 var bx=130,by=44,bw=380,bh=28;
 for(var i=0;i<elements.length;i++){
  var iy=by+i*(bh+8);
  ctx.fillStyle=elColors[i];ctx.font='10px sans-serif';ctx.textAlign='right';
  ctx.fillText(elements[i],bx-8,iy+18);
  ctx.fillStyle='rgba(255,255,255,0.05)';ctx.fillRect(bx,iy,bw,bh);
  var w=scores[i]/100*bw;
  var grd=ctx.createLinearGradient(bx,iy,bx+w,iy);
  grd.addColorStop(0,elColors[i]);grd.addColorStop(1,elColors[i]+'88');
  ctx.fillStyle=grd;ctx.fillRect(bx,iy,w,bh);
  var g=gradeFor28(scores[i]);
  ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
  ctx.fillText(Math.round(scores[i])+'%',bx+w+6,iy+18);
  ctx.fillStyle=gradeColor28(g);ctx.textAlign='right';
  ctx.fillText(g,bx+bw+35,iy+18);
 }

 var gy=340,gcx=310,gr=30;
 ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
 ctx.fillText('관객 반응',gcx,gy-gr-12);
 var startA=Math.PI,endA=Math.PI+Math.PI*(audienceReaction/100);
 ctx.beginPath();ctx.arc(gcx,gy,gr,Math.PI,2*Math.PI);
 ctx.strokeStyle='rgba(255,255,255,0.1)';ctx.lineWidth=10;ctx.stroke();
 ctx.beginPath();ctx.arc(gcx,gy,gr,startA,endA);
 ctx.strokeStyle='#ec4899';ctx.lineWidth=10;ctx.stroke();ctx.lineWidth=1;
 var ag=gradeFor28(audienceReaction);
 ctx.fillStyle=gradeColor28(ag);ctx.font='bold 18px sans-serif';
 ctx.fillText(ag,gcx,gy-2);
 ctx.fillStyle='#fff';ctx.font='10px sans-serif';
 ctx.fillText(Math.round(audienceReaction)+'%',gcx,gy+14);

 var totalAvg=scores.reduce(function(a,b){return a+b;},0)/scores.length;
 var tg=gradeFor28(totalAvg);
 ctx.fillStyle=gradeColor28(tg);ctx.font='bold 16px sans-serif';
 ctx.fillText('종합: '+tg+' ('+Math.round(totalAvg)+'점)',gcx,gy+gr+18);
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
 ctx.fillText('클릭: 공연 재시뮬레이션',310,395);
}
drawStage();
cv.addEventListener('click',function(){sfx28('stageCheer');scores=elements.map(function(){return 35+Math.random()*60;});audienceReaction=55+Math.random()*40;drawStage();});
};

/* ── Feature 8: Comprehensive Vocal DNA Canvas 620x400 ── */
window.__sv28VocalDNA=function(){
sfx28('dnaReveal');
var overlay=document.createElement('div');
overlay.id='sv28-dna';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border-radius:16px;padding:20px;max-width:660px;width:95%;border:2px solid #7c3aed;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 style="color:#a855f7;margin:0;font-size:16px">🧬 종합 보컬 DNA 대시보드</h3><button onclick="this.closest(\'[id]\').remove()" style="background:none;border:none;color:#f87171;font-size:20px;cursor:pointer">&times;</button></div><canvas id="sv28-dna-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0818;cursor:pointer"></canvas><p style="color:#a78bfa;font-size:10px;margin-top:8px;text-align:center">8KPI 반원게이지 4x2 + 가중 종합 S~D 등급. 클릭하여 갱신</p>';
overlay.appendChild(panel);
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.remove();});
document.body.appendChild(overlay);

var cv=document.getElementById('sv28-dna-cv'),ctx=cv.getContext('2d');
var kpis=[
 {name:'음색 풍부도',pct:60+Math.random()*35,color:'#ef4444'},
 {name:'키 적응력',pct:60+Math.random()*35,color:'#f97316'},
 {name:'호흡 용량',pct:60+Math.random()*35,color:'#eab308'},
 {name:'비브라토 정밀도',pct:60+Math.random()*35,color:'#22c55e'},
 {name:'장르 다양성',pct:60+Math.random()*35,color:'#06b6d4'},
 {name:'프레이즈 정확도',pct:60+Math.random()*35,color:'#3b82f6'},
 {name:'무대 존재감',pct:60+Math.random()*35,color:'#8b5cf6'},
 {name:'종합 성장률',pct:60+Math.random()*35,color:'#ec4899'}
];

function drawDNA(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
 ctx.fillStyle='#e0e0e0';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('종합 보컬 DNA 대시보드',310,22);

 for(var i=0;i<8;i++){
  var col=i%4,row=Math.floor(i/4);
  var gcx=90+col*150,gcy=100+row*140,gr=42;
  var startA=Math.PI,endA=Math.PI+Math.PI*(kpis[i].pct/100);
  ctx.beginPath();ctx.arc(gcx,gcy,gr,Math.PI,2*Math.PI);
  ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.lineWidth=12;ctx.stroke();
  ctx.beginPath();ctx.arc(gcx,gcy,gr,startA,endA);
  ctx.strokeStyle=kpis[i].color;ctx.lineWidth=12;ctx.stroke();
  ctx.lineWidth=1;
  var g=gradeFor28(kpis[i].pct);
  ctx.fillStyle=gradeColor28(g);ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText(g,gcx,gcy-2);
  ctx.fillStyle='#fff';ctx.font='10px sans-serif';
  ctx.fillText(Math.round(kpis[i].pct)+'%',gcx,gcy+14);
  ctx.fillStyle=kpis[i].color;ctx.font='9px sans-serif';
  ctx.fillText(kpis[i].name,gcx,gcy+gr+16);
 }

 var weights=[0.15,0.1,0.15,0.15,0.1,0.15,0.1,0.1];
 var weighted=0;
 kpis.forEach(function(k,i){weighted+=k.pct*weights[i];});
 var totalGrade=gradeFor28(weighted);
 var dy=300;var tcx=310,tcy=dy+35;
 ctx.beginPath();ctx.arc(tcx,tcy,30,Math.PI,2*Math.PI);
 ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.lineWidth=10;ctx.stroke();
 ctx.beginPath();ctx.arc(tcx,tcy,30,Math.PI,Math.PI+Math.PI*(weighted/100));
 ctx.strokeStyle='#fbbf24';ctx.lineWidth=10;ctx.stroke();ctx.lineWidth=1;

 ctx.fillStyle=gradeColor28(totalGrade);ctx.font='bold 22px sans-serif';ctx.textAlign='center';
 ctx.fillText(totalGrade,tcx,tcy+6);
 ctx.fillStyle='#fff';ctx.font='12px sans-serif';
 ctx.fillText(Math.round(weighted)+'점',tcx,tcy+22);

 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
 ctx.fillText('가중 평균 종합 보컬 DNA (클릭하여 갱신)',310,dy+100);
}
drawDNA();
cv.addEventListener('click',function(){
 sfx28('dnaReveal');
 kpis.forEach(function(k){k.pct=Math.min(100,k.pct+Math.random()*8-2);k.pct=Math.max(20,k.pct);});
 drawDNA();
});
};

/* ── Navigation Injection ── */
document.addEventListener('DOMContentLoaded',function(){
setTimeout(function(){
var existingNav=document.querySelector('.bottomNav')||document.querySelector('.bottom-nav')||document.querySelector('[class*="bottomNav"]')||document.querySelector('[class*="bottom-nav"]');
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
 {label:'🎙팀버',fn:'__sv28TimbreSpectrogram',key:'Q'},
 {label:'🔑키전조',fn:'__sv28KeyModulator',key:'W'},
 {label:'💨호흡',fn:'__sv28BreathCapacity',key:'E'},
 {label:'〰비브라토',fn:'__sv28VibratoPrecision',key:'R'},
 {label:'🌀장르',fn:'__sv28GenreMastery',key:'T'},
 {label:'📝프레이즈',fn:'__sv28PhraseBreakdown',key:'Y'},
 {label:'⭐무대',fn:'__sv28StagePresence',key:'U'},
 {label:'🧬DNA',fn:'__sv28VocalDNA',key:'I'},
 {label:'🔄v28',fn:null,key:'0'}
];

btnDefs.forEach(function(def){
 var btn=document.createElement('button');
 btn.textContent=def.label;
 btn.title='v28: '+def.label+(def.key?' (Shift+'+def.key+')':'');
 btn.style.cssText='padding:6px 10px;margin:2px;background:linear-gradient(135deg,#6d28d9,#9333ea);color:white;border:none;border-radius:8px;cursor:pointer;font-size:11px;font-weight:bold;box-shadow:0 2px 6px rgba(109,40,217,0.4);';
 btn.addEventListener('mouseenter',function(){btn.style.transform='scale(1.08)';});
 btn.addEventListener('mouseleave',function(){btn.style.transform='scale(1)';});
 btn.onclick=function(){
  sfx28('navClick28');
  if(def.fn&&window[def.fn])window[def.fn]();
 };
 if(existingNav)existingNav.appendChild(btn);
});

/* ── Keyboard Shortcuts (Shift+Q/W/E/R/T/Y/U/I/0) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'Q':'__sv28TimbreSpectrogram','W':'__sv28KeyModulator','E':'__sv28BreathCapacity',
  'R':'__sv28VibratoPrecision','T':'__sv28GenreMastery','Y':'__sv28PhraseBreakdown',
  'U':'__sv28StagePresence','I':'__sv28VocalDNA'
 };
 var key=e.key.toUpperCase();
 if(map[key]&&window[map[key]]){e.preventDefault();sfx28('navClick28');window[map[key]]();}
 if(key==='0'||e.code==='Digit0'){e.preventDefault();sfx28('navClick28');}
});

},800);
});
})();
