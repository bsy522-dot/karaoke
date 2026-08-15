/* StarVoice v30 Patch — Self-contained IIFE module injected via SW
 * +10 songs(265->275), VocalDynamicsController Canvas, BreathChainAnalyzer Canvas,
 * PitchMemoryTrainer Canvas, VocalTimbreBlender Canvas,
 * SongEmotionMapper Canvas, VocalEnduranceTracker Canvas,
 * PerformancePeakFinder Canvas, ComprehensiveVocalIQ Canvas,
 * quiz +15(342->357), achievements +12(282->294), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v30KaraokeLoaded) return;
window.__v30KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls30(k,d){try{var v=localStorage.getItem('sv30-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls30s(k,v){try{localStorage.setItem('sv30-'+k,JSON.stringify(v));}catch(e){}}
function gradeFor30(pct){return pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';}
function gradeColor30(g){return g==='S'?'#fbbf24':g==='A'?'#34d399':g==='B'?'#60a5fa':g==='C'?'#c084fc':'#f87171';}
function cxy30(cv,e){var r=cv.getBoundingClientRect();var cx=e.clientX||((e.touches&&e.touches[0])?e.touches[0].clientX:0);var cy=e.clientY||((e.touches&&e.touches[0])?e.touches[0].clientY:0);return{x:(cx-r.left)*(cv.width/r.width),y:(cy-r.top)*(cv.height/r.height)};}

/* ── 10 New Songs (266-275) ── */
var v30Songs=[
{id:266,title:'Supernatural',artist:'NewJeans',bpm:115,key:'F',difficulty:3,genre:'pop',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['Su','per','na','tu','ral','네','가','보','여','꿈','처','럼','다','가','와','줘'],
 duration:[391,391,391,783,391,391,391,391,391,391,391,783,391,391,391,391]},
{id:267,title:'Armageddon',artist:'aespa',bpm:138,key:'Gm',difficulty:4,genre:'dance',
 notes:[G3,Bb3,D4,G4,F4,D4,Bb3,G3,A3,C4,Eb4,G4,F4,Eb4,D4,C4],
 lyrics:['Ar','ma','ged','don','세','상','끝','에','서','너','를','찾','아','헤','매','여'],
 duration:[326,326,326,652,326,326,326,326,326,326,326,652,326,326,326,326]},
{id:268,title:'고민중독',artist:'QWER',bpm:162,key:'D',difficulty:4,genre:'rock',
 notes:[D4,Fs4,A4,D5,Cs5,A4,Fs4,D4,E4,G4,B4,D5,Cs5,B4,A4,G4],
 lyrics:['고','민','중','독','에','빠','져','버','린','나','를','구','해','줘','요','제발'],
 duration:[278,278,278,556,278,278,278,278,278,278,278,556,278,278,278,278]},
{id:269,title:'Whiplash',artist:'aespa',bpm:130,key:'Bbm',difficulty:5,genre:'dance',
 notes:[Bb3,Db4,F4,Bb4,Ab4,F4,Db4,Bb3,C4,Eb4,Gb4,Bb4,Ab4,Gb4,F4,Eb4],
 lyrics:['Whip','lash','거','침','없','이','달','려','와','내','맘','을','흔','들','어','봐'],
 duration:[346,346,346,692,346,346,346,346,346,346,346,692,346,346,346,346]},
{id:270,title:'How Sweet',artist:'NewJeans',bpm:106,key:'Eb',difficulty:3,genre:'pop',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['How','sweet','달','콤','한','너','의','미','소','에','녹','아','들','어','가','요'],
 duration:[425,425,425,849,425,425,425,425,425,425,425,849,425,425,425,425]},
{id:271,title:'Small girl (feat.D.O.)',artist:'이영지',bpm:92,key:'Ab',difficulty:3,genre:'hiphop',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db4,F4,Ab4,G4,F4,Eb4,Db4],
 lyrics:['Small','girl','작','지','만','강','한','나','를','보','여','줄','게','세','상','에'],
 duration:[489,489,489,978,489,489,489,489,489,489,489,978,489,489,489,489]},
{id:272,title:'Bubble Gum',artist:'NewJeans',bpm:100,key:'G',difficulty:2,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['Bub','ble','gum','처','럼','달','콤','하','게','터','지','는','이','순','간','이'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:273,title:'SPOT! (feat. JENNIE)',artist:'ZICO',bpm:120,key:'Am',difficulty:3,genre:'pop',
 notes:[A3,C4,E4,A4,G4,E4,C4,A3,B3,D4,F4,A4,G4,F4,E4,D4],
 lyrics:['Spot','on','이','자','리','가','바','로','우','리','의','무','대','라','는','걸'],
 duration:[375,375,375,750,375,375,375,375,375,375,375,750,375,375,375,375]},
{id:274,title:'I DO',artist:'(G)I-DLE',bpm:128,key:'Cm',difficulty:4,genre:'dance',
 notes:[C4,Eb4,G4,C5,Bb4,G4,Eb4,C4,D4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['I','do','나','는','멈','추','지','않','아','끝','까','지','달','려','갈','래'],
 duration:[352,352,352,703,352,352,352,352,352,352,352,703,352,352,352,352]},
{id:275,title:'선물',artist:'멜로망스',bpm:76,key:'C',difficulty:2,genre:'ballad',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['너','라','는','선','물','이','내','게','왔','어','감','사','한','하','루','야'],
 duration:[592,592,592,1184,592,592,592,592,592,592,592,1184,592,592,592,592]}
];
(function injectSongs30(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v30Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine ── */
function sfx30(type){
 try{
  var ac=window.__sv30AC||(window.__sv30AC=new(window.AudioContext||window.webkitAudioContext)());
  if(ac.state==='suspended')ac.resume();
  var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
  o.connect(g);g.connect(ac.destination);
  var cfg={
   dynamicsCtrl:{f:698,w:'sine',a:0.12,d:0.25},breathChain:{f:523,w:'triangle',a:0.10,d:0.3},
   pitchMemory:{f:880,w:'sine',a:0.15,d:0.2},timbreBlend:{f:440,w:'sawtooth',a:0.08,d:0.35},
   emotionMap:{f:330,w:'sine',a:0.12,d:0.3},endurance:{f:392,w:'triangle',a:0.10,d:0.25},
   peakFind:{f:784,w:'sine',a:0.13,d:0.2},vocalIQ:{f:659,w:'sine',a:0.14,d:0.3},
   quizCorrect30:{f:988,w:'sine',a:0.12,d:0.15},quizWrong30:{f:220,w:'sawtooth',a:0.08,d:0.2},
   achieve30:{f:1047,w:'sine',a:0.15,d:0.4},songAdd30:{f:587,w:'triangle',a:0.10,d:0.2},
   panelOpen30:{f:494,w:'sine',a:0.08,d:0.15},panelClose30:{f:370,w:'sine',a:0.06,d:0.12},
   click30:{f:1175,w:'sine',a:0.06,d:0.08},navClick30:{f:830,w:'sine',a:0.07,d:0.1}
  };
  var c=cfg[type]||cfg.click30;
  o.type=c.w;o.frequency.setValueAtTime(c.f,t);
  g.gain.setValueAtTime(c.a,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
  o.start(t);o.stop(t+c.d);
 }catch(e){}
}

/* ── Quiz v30 (+15 questions, 342->357) ── */
var v30Quiz=[
{q:'보컬 다이나믹스에서 크레센도(crescendo)의 뜻은?',a:['점점 세게','점점 여리게','빠르게','느리게'],c:0},
{q:'호흡 체인에서 순환 호흡(circular breathing)이란?',a:['들숨과 날숨 동시 유지','빠른 호흡','느린 호흡','멈추기'],c:0},
{q:'피치 메모리 훈련에서 절대음감의 정의는?',a:['참조음 없이 음 식별','상대적 음정 비교','큰 소리로 노래','빠르게 음정 변환'],c:0},
{q:'팀버(음색)를 결정하는 주요 요소가 아닌 것은?',a:['가사의 언어','성대 구조','공명강 크기','호흡 방식'],c:0},
{q:'감정 매핑에서 루바토(rubato)의 역할은?',a:['템포를 자유롭게 변화시켜 감정 표현','음정을 변화','음량을 키움','화성을 변경'],c:0},
{q:'보컬 지구력(endurance) 향상에 가장 효과적인 훈련은?',a:['점진적 길이 증가 세션','한번에 장시간 노래','무조건 고음','빠른 곡만 연습'],c:0},
{q:'퍼포먼스 피크(peak performance)에 영향을 주는 시간대 요인은?',a:['성대 워밍업 상태','날씨','옷차림','식사 메뉴'],c:0},
{q:'보컬 IQ 평가에서 초견력(sight-singing)이란?',a:['처음 보는 악보를 바로 노래','외운 노래 부르기','반복 연습 후 노래','즉흥 작곡'],c:0},
{q:'포르테시모(ff)와 피아니시모(pp)의 데시벨 차이는 대략?',a:['약 20~30dB','약 5dB','약 50dB','차이 없음'],c:0},
{q:'횡격막 호흡과 흉식 호흡의 차이점은?',a:['횡격막은 복부 확장, 흉식은 어깨 상승','동일한 방법','흉식이 더 깊은 호흡','횡격막은 얕은 호흡'],c:0},
{q:'비브라토 속도의 표준 범위는?',a:['5~7Hz','1~2Hz','15~20Hz','30Hz 이상'],c:0},
{q:'레가토(legato) 싱잉에서 가장 중요한 것은?',a:['음과 음 사이 끊김 없는 연결','큰 소리','빠른 속도','높은 음역'],c:0},
{q:'보컬 컨디션 관리에서 성대 결절 예방법이 아닌 것은?',a:['고성으로 장시간 노래','충분한 수분 섭취','적절한 워밍업','성대 휴식'],c:0},
{q:'음역대 확장 시 팔세토를 사용하는 주된 이유는?',a:['상위 음역을 안전하게 탐색','저음 확장','리듬 연습','호흡 훈련'],c:0},
{q:'멜리스마(melisma)란 무엇인가?',a:['한 음절에 여러 음을 연결','한 음만 길게 유지','음을 끊어 부르기','화음으로 노래'],c:0}
];
(function injectQuiz30(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v30Quiz.forEach(function(q){
    window.quizQuestions.push({question:q.q,answers:q.a,correct:q.c,category:'v30_vocal_iq'});
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v30 (+12, 282->294) ── */
var v30Achievements=[
 {id:'v30_dynamics_master',name:'다이나믹스 마스터',desc:'다이나믹스 컨트롤러에서 S등급 달성',icon:'🔊',check:function(){return ls30('dynamics_grade')==='S';}},
 {id:'v30_breath_chain',name:'호흡 체인 달인',desc:'호흡 체인 분석기에서 5회 기록',icon:'💨',check:function(){var d=ls30('breath_sessions',[]);return d.length>=5;}},
 {id:'v30_pitch_memory',name:'피치 메모리 챔피언',desc:'피치 메모리 트레이너에서 레벨8 도달',icon:'🧠',check:function(){return ls30('pitch_mem_level',0)>=8;}},
 {id:'v30_timbre_explorer',name:'음색 탐험가',desc:'팀버 블렌더에서 6종 이상 탐색',icon:'🎨',check:function(){return ls30('timbre_explored',0)>=6;}},
 {id:'v30_emotion_mapper',name:'감정 매핑 전문가',desc:'감정 매퍼에서 5곡 이상 매핑',icon:'🎭',check:function(){return ls30('emotion_mapped',0)>=5;}},
 {id:'v30_endurance_hero',name:'지구력의 영웅',desc:'지구력 트래커에서 10세션 기록',icon:'🏋️',check:function(){var d=ls30('endurance_sessions',[]);return d.length>=10;}},
 {id:'v30_peak_finder',name:'피크 파인더',desc:'퍼포먼스 피크에서 최적 시간대 발견',icon:'📈',check:function(){return ls30('peak_found',false);}},
 {id:'v30_vocal_iq_s',name:'보컬 IQ S급',desc:'종합 보컬 IQ에서 S등급 달성',icon:'🏆',check:function(){return ls30('vocal_iq_grade')==='S';}},
 {id:'v30_275_songs',name:'275곡 마스터',desc:'275곡 도달',icon:'🎵',check:function(){return window.songs&&window.songs.length>=275;}},
 {id:'v30_quiz_master',name:'퀴즈 357문항',desc:'v30 퀴즈 전문가',icon:'❓',check:function(){return ls30('quiz_complete',false);}},
 {id:'v30_all_tools',name:'올 툴 사용자',desc:'v30 8개 도구 모두 사용',icon:'🔧',check:function(){return ls30('tools_used',0)>=8;}},
 {id:'v30_complete',name:'v30 컴플리트',desc:'v30 모든 기능 탐색 완료',icon:'✅',check:function(){return ls30('tools_used',0)>=8&&ls30('quiz_complete',false);}}
];
(function injectAch30(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v30Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Canvas Tool Helper ── */
function createPanel30(title,id,w,h){
 var overlay=document.createElement('div');
 overlay.id=id;
 overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:10000;display:flex;align-items:center;justify-content:center;overflow-y:auto;';
 var box=document.createElement('div');
 box.style.cssText='background:linear-gradient(135deg,#1a1025,#0f0a1e);border-radius:16px;padding:20px;max-width:'+(w+40)+'px;width:95%;box-shadow:0 8px 32px rgba(168,85,247,0.3);';
 var header=document.createElement('div');
 header.style.cssText='display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;';
 var t=document.createElement('h3');
 t.textContent=title;t.style.cssText='color:#c084fc;margin:0;font-size:16px;';
 var closeBtn=document.createElement('button');
 closeBtn.textContent='✕';
 closeBtn.style.cssText='background:#7c3aed;color:white;border:none;border-radius:50%;width:28px;height:28px;cursor:pointer;font-size:14px;';
 closeBtn.onclick=function(){sfx30('panelClose30');overlay.remove();};
 header.appendChild(t);header.appendChild(closeBtn);
 var cv=document.createElement('canvas');
 cv.width=w;cv.height=h;
 cv.style.cssText='width:100%;max-width:'+w+'px;background:#0d0816;border-radius:10px;display:block;margin:0 auto;cursor:crosshair;';
 box.appendChild(header);box.appendChild(cv);
 overlay.appendChild(box);document.body.appendChild(overlay);
 overlay.addEventListener('click',function(e){if(e.target===overlay){sfx30('panelClose30');overlay.remove();}});
 sfx30('panelOpen30');
 ls30s('tools_used',(ls30('tools_used',0))+1);
 return cv;
}

/* ════════════════════════════════════════════════════════
   TOOL 1: 보컬 다이나믹스 컨트롤러 (Canvas 620x400)
   — 8 다이나믹 레벨(ppp~fff) x 6 테크닉(벨팅/위스퍼/믹스/팔세토/두성/흉성)
   — 히트맵 매트릭스, 클릭 셀 토글(0~5단계), 종합 등급
   ════════════════════════════════════════════════════════ */
window.__sv30VocalDynamicsController=function(){
 var cv=createPanel30('🔊 보컬 다이나믹스 컨트롤러','sv30-dynamics',620,400);
 var ctx=cv.getContext('2d');
 var levels=['ppp','pp','p','mp','mf','f','ff','fff'];
 var techniques=['벨팅','위스퍼','믹스','팔세토','두성','흉성'];
 var data=ls30('dynamics_data',null);
 if(!data){data=[];for(var i=0;i<levels.length;i++){data[i]=[];for(var j=0;j<techniques.length;j++)data[i][j]=0;}}
 var selR=-1,selC=-1;

 function draw(){
  ctx.clearRect(0,0,620,400);
  ctx.fillStyle='#0d0816';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 다이나믹스 컨트롤러',310,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('셀 클릭으로 숙련도(0~5) 토글 | 종합 등급 산정',310,38);
  var ox=80,oy=55,cw=62,ch=36;
  ctx.font='bold 11px sans-serif';ctx.fillStyle='#e9d5ff';ctx.textAlign='center';
  for(var j=0;j<techniques.length;j++){ctx.fillText(techniques[j],ox+j*cw+cw/2,oy-6);}
  ctx.textAlign='right';
  for(var i=0;i<levels.length;i++){ctx.fillStyle='#e9d5ff';ctx.fillText(levels[i],ox-8,oy+i*ch+ch/2+4);}
  var colors=['#1e1b4b','#312e81','#4c1d95','#6d28d9','#8b5cf6','#a855f7'];
  for(var i=0;i<levels.length;i++){
   for(var j=0;j<techniques.length;j++){
    var x=ox+j*cw,y=oy+i*ch;
    ctx.fillStyle=colors[data[i][j]];ctx.fillRect(x+1,y+1,cw-2,ch-2);
    if(selR===i&&selC===j){ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.strokeRect(x,y,cw,ch);}
    if(data[i][j]>0){ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
     ctx.fillText(data[i][j],x+cw/2,y+ch/2+4);}
   }
  }
  ctx.fillStyle='#7c3aed';ctx.font='10px sans-serif';ctx.textAlign='left';
  for(var v=0;v<=5;v++){var cx=ox+v*50,cy=oy+levels.length*ch+20;
   ctx.fillStyle=colors[v];ctx.fillRect(cx,cy,14,14);
   ctx.fillStyle='#d4d4d8';ctx.fillText(v===0?'미습득':v+'단계',cx+18,cy+11);}
  var total=0,max=levels.length*techniques.length*5;
  for(var i=0;i<levels.length;i++)for(var j=0;j<techniques.length;j++)total+=data[i][j];
  var pct=Math.round(total/max*100);var grade=gradeFor30(pct);
  ls30s('dynamics_grade',grade);
  ctx.fillStyle='#0d0816';ctx.fillRect(400,oy+levels.length*ch+8,210,50);
  ctx.fillStyle=gradeColor30(grade);ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('종합 다이나믹스: '+grade+' ('+pct+'%)',510,oy+levels.length*ch+30);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText('숙련 '+total+'/'+max,510,oy+levels.length*ch+48);
  if(selR>=0&&selC>=0){
   ctx.fillStyle='#1e1b4b';ctx.fillRect(30,350,560,40);
   ctx.fillStyle='#e9d5ff';ctx.font='12px sans-serif';ctx.textAlign='center';
   ctx.fillText(levels[selR]+' × '+techniques[selC]+' — 현재 '+data[selR][selC]+'단계',310,374);
  }
 }
 cv.addEventListener('click',function(e){
  var p=cxy30(cv,e),ox=80,oy=55,cw=62,ch=36;
  var c=Math.floor((p.x-ox)/cw),r=Math.floor((p.y-oy)/ch);
  if(r>=0&&r<levels.length&&c>=0&&c<techniques.length){
   data[r][c]=(data[r][c]+1)%6;selR=r;selC=c;
   ls30s('dynamics_data',data);sfx30('dynamicsCtrl');draw();
  }
 });
 cv.addEventListener('touchstart',function(e){e.preventDefault();
  var p=cxy30(cv,e),ox=80,oy=55,cw=62,ch=36;
  var c=Math.floor((p.x-ox)/cw),r=Math.floor((p.y-oy)/ch);
  if(r>=0&&r<levels.length&&c>=0&&c<techniques.length){
   data[r][c]=(data[r][c]+1)%6;selR=r;selC=c;
   ls30s('dynamics_data',data);sfx30('dynamicsCtrl');draw();
  }
 },{passive:false});
 draw();
};

/* ════════════════════════════════════════════════════════
   TOOL 2: 호흡 체인 분석기 (Canvas 620x400)
   — 8 호흡 기법 (횡격막/복식/늑간/원형/연쇄/프레이즈/서스테인/리커버리)
   — 6축 Radar (용량/안정성/지속성/효율/전환/회복)
   — 클릭 기법 순환, S~D 등급
   ════════════════════════════════════════════════════════ */
window.__sv30BreathChainAnalyzer=function(){
 var cv=createPanel30('💨 호흡 체인 분석기','sv30-breath',620,400);
 var ctx=cv.getContext('2d');
 var techniques=['횡격막','복식','늑간','원형','연쇄','프레이즈','서스테인','리커버리'];
 var axes=['용량','안정성','지속성','효율','전환','회복'];
 var profiles=[[85,80,90,88,70,82],[90,85,75,80,65,88],[70,75,80,72,85,70],[95,90,85,92,80,75],[80,88,82,78,90,85],[75,82,88,85,75,90],[88,78,95,82,60,72],[65,70,72,75,80,95]];
 var sel=0;
 var userData=ls30('breath_tech_data',null);
 if(!userData){userData=[];for(var i=0;i<techniques.length;i++)userData.push(0);}

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0816';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('호흡 체인 분석기',310,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('클릭으로 기법 전환 | 좌측 기법 탭+연습 기록 클릭',310,38);
  for(var i=0;i<techniques.length;i++){
   var y=52+i*40;
   ctx.fillStyle=i===sel?'#6d28d9':'#1e1b4b';
   ctx.fillRect(10,y,95,34);
   ctx.strokeStyle=i===sel?'#a855f7':'#4c1d95';ctx.lineWidth=1;ctx.strokeRect(10,y,95,34);
   ctx.fillStyle=i===sel?'#fbbf24':'#e9d5ff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
   ctx.fillText(techniques[i],57,y+15);
   ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';
   ctx.fillText('연습: '+userData[i]+'회',57,y+28);
  }
  var cx=350,cy=210,rad=120;
  for(var ring=5;ring>=1;ring--){
   ctx.beginPath();
   for(var j=0;j<=axes.length;j++){
    var a=-Math.PI/2+(j%axes.length)*(2*Math.PI/axes.length);
    var r=rad*(ring/5);
    if(j===0)ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
    else ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
   }
   ctx.closePath();ctx.strokeStyle='rgba(124,58,237,0.3)';ctx.lineWidth=1;ctx.stroke();
  }
  for(var j=0;j<axes.length;j++){
   var a=-Math.PI/2+j*(2*Math.PI/axes.length);
   ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+rad*Math.cos(a),cy+rad*Math.sin(a));
   ctx.strokeStyle='rgba(124,58,237,0.2)';ctx.stroke();
   ctx.fillStyle='#d4d4d8';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(axes[j],cx+(rad+18)*Math.cos(a),cy+(rad+18)*Math.sin(a)+3);
  }
  var p=profiles[sel];
  ctx.beginPath();
  for(var j=0;j<=axes.length;j++){
   var a=-Math.PI/2+(j%axes.length)*(2*Math.PI/axes.length);
   var r=rad*(p[j%axes.length]/100);
   if(j===0)ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
   else ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
  }
  ctx.closePath();ctx.fillStyle='rgba(168,85,247,0.25)';ctx.fill();
  ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.stroke();
  for(var j=0;j<axes.length;j++){
   var a=-Math.PI/2+j*(2*Math.PI/axes.length);
   var r=rad*(p[j]/100);
   ctx.beginPath();ctx.arc(cx+r*Math.cos(a),cy+r*Math.sin(a),4,0,Math.PI*2);
   ctx.fillStyle='#c084fc';ctx.fill();
  }
  var avg=Math.round(p.reduce(function(a,b){return a+b;},0)/p.length);
  var grade=gradeFor30(avg);
  ctx.fillStyle=gradeColor30(grade);ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText(techniques[sel]+' 호흡 등급: '+grade+' ('+avg+'%)',350,370);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText('특기: '+axes[p.indexOf(Math.max.apply(null,p))]+' | 약점: '+axes[p.indexOf(Math.min.apply(null,p))],350,388);
  var totalSessions=userData.reduce(function(a,b){return a+b;},0);
  ls30s('breath_sessions',userData.filter(function(v){return v>0;}));
 }
 cv.addEventListener('click',function(e){
  var p=cxy30(cv,e);
  if(p.x<110){
   var idx=Math.floor((p.y-52)/40);
   if(idx>=0&&idx<techniques.length){
    if(idx===sel){userData[idx]++;ls30s('breath_tech_data',userData);sfx30('breathChain');}
    else{sel=idx;sfx30('click30');}
    draw();
   }
  }
 });
 cv.addEventListener('touchstart',function(e){e.preventDefault();
  var p=cxy30(cv,e);
  if(p.x<110){
   var idx=Math.floor((p.y-52)/40);
   if(idx>=0&&idx<techniques.length){
    if(idx===sel){userData[idx]++;ls30s('breath_tech_data',userData);sfx30('breathChain');}
    else{sel=idx;sfx30('click30');}
    draw();
   }
  }
 },{passive:false});
 draw();
};

/* ════════════════════════════════════════════════════════
   TOOL 3: 피치 메모리 트레이너 (Canvas 620x400)
   — 12음계 메모리 게임, 레벨 1~10 (음 수 3~12)
   — 재생 → 기억 → 입력, 정확도 바차트, 레벨 진행
   ════════════════════════════════════════════════════════ */
window.__sv30PitchMemoryTrainer=function(){
 var cv=createPanel30('🧠 피치 메모리 트레이너','sv30-pitch-mem',620,400);
 var ctx=cv.getContext('2d');
 var noteNames=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
 var noteFreqs=[261.63,277.18,293.66,311.13,329.63,349.23,369.99,392.00,415.30,440.00,466.16,493.88];
 var level=ls30('pitch_mem_level',1);
 var score=ls30('pitch_mem_score',0);
 var state='ready';
 var sequence=[];var userSeq=[];var results=[];
 var maxLevel=10;

 function genSeq(n){var s=[];for(var i=0;i<n;i++)s.push(Math.floor(noteFreqs.length*(i*7+level*3)%(noteFreqs.length)));return s;}

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0816';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('피치 메모리 트레이너',310,22);
  ctx.fillStyle='#fbbf24';ctx.font='bold 12px sans-serif';
  ctx.fillText('레벨 '+level+'/'+maxLevel+' | 점수: '+score,310,42);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  var stMsg=state==='ready'?'▶ 시작 버튼 클릭':state==='playing'?'♪ 음계를 기억하세요...':state==='input'?'🎹 아래 건반에서 순서대로 클릭':state==='result'?'✓ 결과 확인':' ';
  ctx.fillText(stMsg,310,58);
  if(state==='ready'){
   ctx.fillStyle='#6d28d9';ctx.fillRect(250,100,120,40);
   ctx.fillStyle='#fff';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('▶ 시작',310,125);
   ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
   ctx.fillText(level+2+'개 음을 기억해야 합니다',310,160);
  }
  if(state==='input'||state==='result'){
   var kw=40,kh=70,kx=40;
   for(var i=0;i<noteFreqs.length;i++){
    var x=kx+i*46,y=200;
    var isBlack=noteNames[i].includes('#');
    ctx.fillStyle=isBlack?'#1e1b4b':'#2d2640';
    ctx.fillRect(x,y,kw,kh);
    ctx.strokeStyle='#6d28d9';ctx.lineWidth=1;ctx.strokeRect(x,y,kw,kh);
    ctx.fillStyle=isBlack?'#a855f7':'#e9d5ff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
    ctx.fillText(noteNames[i],x+kw/2,y+kh-8);
    var idx=userSeq.indexOf(i);
    if(idx>=0){
     ctx.fillStyle='#fbbf24';ctx.font='bold 14px sans-serif';
     ctx.fillText(idx+1,x+kw/2,y+kh/2);
    }
   }
  }
  if(state==='result'){
   var correct=0;
   for(var i=0;i<sequence.length;i++){if(userSeq[i]===sequence[i])correct++;}
   var pct=Math.round(correct/sequence.length*100);
   var grade=gradeFor30(pct);
   ctx.fillStyle=gradeColor30(grade);ctx.font='bold 16px sans-serif';ctx.textAlign='center';
   ctx.fillText('정확도: '+pct+'% ('+grade+') — '+correct+'/'+sequence.length+'개 정답',310,310);
   ctx.fillStyle='#6d28d9';ctx.fillRect(220,330,80,30);ctx.fillRect(320,330,80,30);
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';
   ctx.fillText('재시도',260,350);ctx.fillText('다음 레벨',360,350);
   var bw=50;
   for(var i=0;i<sequence.length;i++){
    var bx=60+i*bw,by=110;
    var ok=userSeq[i]===sequence[i];
    ctx.fillStyle=ok?'#059669':'#dc2626';ctx.fillRect(bx,by+60-pct*0.6,bw-4,pct*0.6);
    ctx.fillStyle='#e9d5ff';ctx.font='9px sans-serif';ctx.textAlign='center';
    ctx.fillText(noteNames[sequence[i]],bx+bw/2-2,by+75);
    if(!ok){ctx.fillStyle='#f87171';ctx.fillText('→'+noteNames[userSeq[i]||0],bx+bw/2-2,by+87);}
   }
  }
  var barW=Math.min(400,level/maxLevel*400);
  ctx.fillStyle='#1e1b4b';ctx.fillRect(110,380,400,12);
  ctx.fillStyle='#7c3aed';ctx.fillRect(110,380,barW,12);
  ctx.fillStyle='#d4d4d8';ctx.font='9px sans-serif';ctx.textAlign='center';
  ctx.fillText('진행: 레벨 '+level+'/'+maxLevel,310,390);
 }
 function playSeq(){
  state='playing';draw();
  sequence=genSeq(level+2);
  var i=0;
  function playNote(){
   if(i>=sequence.length){state='input';userSeq=[];draw();return;}
   try{
    var ac=window.__sv30AC||(window.__sv30AC=new(window.AudioContext||window.webkitAudioContext)());
    if(ac.state==='suspended')ac.resume();
    var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
    o.connect(g);g.connect(ac.destination);o.type='sine';
    o.frequency.setValueAtTime(noteFreqs[sequence[i]],t);
    g.gain.setValueAtTime(0.15,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.4);
    o.start(t);o.stop(t+0.4);
   }catch(e){}
   i++;setTimeout(playNote,500);
  }
  setTimeout(playNote,500);
 }
 cv.addEventListener('click',function(e){
  var p=cxy30(cv,e);
  if(state==='ready'&&p.x>=250&&p.x<=370&&p.y>=100&&p.y<=140){
   sfx30('pitchMemory');playSeq();return;
  }
  if(state==='input'){
   var kx=40;
   for(var i=0;i<noteFreqs.length;i++){
    var x=kx+i*46;
    if(p.x>=x&&p.x<=x+40&&p.y>=200&&p.y<=270){
     userSeq.push(i);sfx30('pitchMemory');
     if(userSeq.length>=sequence.length){
      state='result';
      var correct=0;
      for(var j=0;j<sequence.length;j++){if(userSeq[j]===sequence[j])correct++;}
      score+=correct;ls30s('pitch_mem_score',score);
      if(correct===sequence.length&&level<maxLevel){level++;ls30s('pitch_mem_level',level);}
     }
     draw();return;
    }
   }
  }
  if(state==='result'){
   if(p.x>=220&&p.x<=300&&p.y>=330&&p.y<=360){state='ready';draw();return;}
   if(p.x>=320&&p.x<=400&&p.y>=330&&p.y<=360){state='ready';draw();return;}
  }
 });
 cv.addEventListener('touchstart',function(e){e.preventDefault();cv.click();},{passive:false});
 draw();
};

/* ════════════════════════════════════════════════════════
   TOOL 4: 보컬 팀버 블렌더 (Canvas 640x400)
   — 8 팀버 유형 (따뜻한/밝은/어두운/공기질/허스키/맑은/비음/파워풀)
   — 6축 Radar (온기/밝기/깊이/공기/선명도/파워)
   — 2종 비교 모드
   ════════════════════════════════════════════════════════ */
window.__sv30VocalTimbreBlender=function(){
 var cv=createPanel30('🎨 보컬 팀버 블렌더','sv30-timbre',640,400);
 var ctx=cv.getContext('2d');
 var timbres=['따뜻한','밝은','어두운','공기질','허스키','맑은','비음','파워풀'];
 var axes=['온기','밝기','깊이','공기','선명도','파워'];
 var profiles=[[92,60,80,45,70,65],[55,95,40,60,90,50],[70,30,95,35,50,75],[50,65,45,95,55,40],[75,40,70,80,45,70],[45,90,35,50,95,55],[60,70,60,40,65,60],[80,55,75,30,60,95]];
 var sel=0,sel2=-1;
 var explored=ls30('timbre_explored',0);

 function draw(){
  ctx.clearRect(0,0,640,400);ctx.fillStyle='#0d0816';ctx.fillRect(0,0,640,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 팀버 블렌더',320,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('좌측 팀버 클릭 선택 | 두번째 선택 시 비교 모드',320,38);
  for(var i=0;i<timbres.length;i++){
   var y=50+i*42;
   ctx.fillStyle=i===sel?'#6d28d9':i===sel2?'#4c1d95':'#1e1b4b';
   ctx.fillRect(10,y,88,36);
   ctx.strokeStyle=i===sel?'#a855f7':i===sel2?'#7c3aed':'#312e81';ctx.lineWidth=1;ctx.strokeRect(10,y,88,36);
   ctx.fillStyle=i===sel?'#fbbf24':i===sel2?'#c084fc':'#e9d5ff';
   ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.fillText(timbres[i],54,y+22);
  }
  var cx=350,cy=220,rad=130;
  for(var ring=5;ring>=1;ring--){
   ctx.beginPath();
   for(var j=0;j<=axes.length;j++){
    var a=-Math.PI/2+(j%axes.length)*(2*Math.PI/axes.length);
    var r=rad*(ring/5);
    if(j===0)ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
    else ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
   }
   ctx.closePath();ctx.strokeStyle='rgba(124,58,237,0.25)';ctx.lineWidth=1;ctx.stroke();
  }
  for(var j=0;j<axes.length;j++){
   var a=-Math.PI/2+j*(2*Math.PI/axes.length);
   ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+rad*Math.cos(a),cy+rad*Math.sin(a));
   ctx.strokeStyle='rgba(124,58,237,0.15)';ctx.stroke();
   ctx.fillStyle='#d4d4d8';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(axes[j],cx+(rad+20)*Math.cos(a),cy+(rad+20)*Math.sin(a)+3);
  }
  function drawRadar(p,color,fill){
   ctx.beginPath();
   for(var j=0;j<=axes.length;j++){
    var a=-Math.PI/2+(j%axes.length)*(2*Math.PI/axes.length);
    var r=rad*(p[j%axes.length]/100);
    if(j===0)ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
    else ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
   }
   ctx.closePath();ctx.fillStyle=fill;ctx.fill();ctx.strokeStyle=color;ctx.lineWidth=2;ctx.stroke();
  }
  if(sel2>=0){drawRadar(profiles[sel2],'#f472b6','rgba(244,114,182,0.15)');}
  drawRadar(profiles[sel],'#a855f7','rgba(168,85,247,0.25)');
  var avg=Math.round(profiles[sel].reduce(function(a,b){return a+b;},0)/profiles[sel].length);
  var grade=gradeFor30(avg);
  ctx.fillStyle=gradeColor30(grade);ctx.font='bold 13px sans-serif';ctx.textAlign='center';
  var label=timbres[sel]+(sel2>=0?' vs '+timbres[sel2]:'');
  ctx.fillText(label+' 팀버: '+grade+' ('+avg+'%)',320,385);
  if(sel2>=0){
   ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';
   ctx.fillText('🟣 '+timbres[sel]+' | 🩷 '+timbres[sel2],320,398);
  }
 }
 cv.addEventListener('click',function(e){
  var p=cxy30(cv,e);
  if(p.x<100){
   var idx=Math.floor((p.y-50)/42);
   if(idx>=0&&idx<timbres.length){
    if(idx===sel){sel2=-1;}
    else if(sel2===idx){sel2=-1;}
    else{sel2=sel;sel=idx;}
    explored=Math.max(explored,sel+1,sel2+1);ls30s('timbre_explored',explored);
    sfx30('timbreBlend');draw();
   }
  }
 });
 cv.addEventListener('touchstart',function(e){e.preventDefault();
  var p=cxy30(cv,e);
  if(p.x<100){
   var idx=Math.floor((p.y-50)/42);
   if(idx>=0&&idx<timbres.length){
    if(idx===sel){sel2=-1;}
    else if(sel2===idx){sel2=-1;}
    else{sel2=sel;sel=idx;}
    explored=Math.max(explored,sel+1,sel2+1);ls30s('timbre_explored',explored);
    sfx30('timbreBlend');draw();
   }
  }
 },{passive:false});
 draw();
};

/* ════════════════════════════════════════════════════════
   TOOL 5: 곡 감정 매퍼 (Canvas 620x400)
   — 10 감정 (기쁨/슬픔/분노/평온/열정/그리움/공포/영웅/신비/코믹)
   — 4구간 (인트로/벌스/코러스/아웃트로) 라인차트
   — 클릭으로 구간별 감정 강도 조절 (0~5)
   ════════════════════════════════════════════════════════ */
window.__sv30SongEmotionMapper=function(){
 var cv=createPanel30('🎭 곡 감정 매퍼','sv30-emotion-map',620,400);
 var ctx=cv.getContext('2d');
 var emotions=['기쁨','슬픔','분노','평온','열정','그리움','공포','영웅','신비','코믹'];
 var eColors=['#fbbf24','#60a5fa','#ef4444','#34d399','#f97316','#c084fc','#6b7280','#dc2626','#8b5cf6','#a3e635'];
 var sections=['인트로','벌스','코러스','아웃트로'];
 var data=ls30('emotion_map_data',null);
 if(!data){data=[];for(var i=0;i<emotions.length;i++){data[i]=[1,2,4,2];}}
 var selEmo=0;

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0816';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('곡 감정 매퍼',310,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('좌측 감정 선택 → 차트 영역 클릭으로 강도 조절 (0~5)',310,38);
  for(var i=0;i<emotions.length;i++){
   var y=50+i*33;
   ctx.fillStyle=i===selEmo?'#2d1f4e':'#1e1b4b';
   ctx.fillRect(8,y,75,28);
   ctx.strokeStyle=eColors[i];ctx.lineWidth=i===selEmo?2:1;ctx.strokeRect(8,y,75,28);
   ctx.fillStyle=i===selEmo?eColors[i]:'#d4d4d8';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
   ctx.fillText(emotions[i],45,y+18);
  }
  var ox=120,oy=55,gw=470,gh=280;
  ctx.fillStyle='#12091e';ctx.fillRect(ox,oy,gw,gh);
  ctx.strokeStyle='rgba(124,58,237,0.3)';ctx.lineWidth=1;
  for(var i=0;i<=5;i++){
   var y=oy+gh-i*(gh/5);
   ctx.beginPath();ctx.moveTo(ox,y);ctx.lineTo(ox+gw,y);ctx.stroke();
   ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.textAlign='right';ctx.fillText(i,ox-4,y+3);
  }
  var sw=gw/sections.length;
  for(var j=0;j<sections.length;j++){
   ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(sections[j],ox+j*sw+sw/2,oy+gh+14);
  }
  for(var i=0;i<emotions.length;i++){
   if(i!==selEmo){
    ctx.beginPath();ctx.strokeStyle=eColors[i];ctx.lineWidth=1;ctx.globalAlpha=0.3;
    for(var j=0;j<sections.length;j++){
     var x=ox+j*sw+sw/2,y=oy+gh-data[i][j]*(gh/5);
     if(j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    }
    ctx.stroke();ctx.globalAlpha=1;
   }
  }
  ctx.beginPath();ctx.strokeStyle=eColors[selEmo];ctx.lineWidth=3;
  for(var j=0;j<sections.length;j++){
   var x=ox+j*sw+sw/2,y=oy+gh-data[selEmo][j]*(gh/5);
   if(j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.stroke();
  for(var j=0;j<sections.length;j++){
   var x=ox+j*sw+sw/2,y=oy+gh-data[selEmo][j]*(gh/5);
   ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);ctx.fillStyle=eColors[selEmo];ctx.fill();
   ctx.fillStyle='#fff';ctx.font='bold 9px sans-serif';ctx.textAlign='center';ctx.fillText(data[selEmo][j],x,y+3);
  }
  var mapped=ls30('emotion_mapped',0);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText('매핑 기록: '+mapped+'곡 | '+emotions[selEmo]+' 선택 중',310,oy+gh+30);
  var peakEmo='',peakVal=0;
  for(var i=0;i<emotions.length;i++){
   var sum=data[i].reduce(function(a,b){return a+b;},0);
   if(sum>peakVal){peakVal=sum;peakEmo=emotions[i];}
  }
  ctx.fillStyle='#fbbf24';ctx.font='bold 11px sans-serif';
  ctx.fillText('지배적 감정: '+peakEmo,310,oy+gh+44);
 }
 cv.addEventListener('click',function(e){
  var p=cxy30(cv,e);
  if(p.x<90){
   var idx=Math.floor((p.y-50)/33);
   if(idx>=0&&idx<emotions.length){selEmo=idx;sfx30('emotionMap');draw();}
   return;
  }
  var ox=120,oy=55,gw=470,gh=280,sw=gw/4;
  if(p.x>=ox&&p.x<=ox+gw&&p.y>=oy&&p.y<=oy+gh){
   var sec=Math.floor((p.x-ox)/sw);
   if(sec>=0&&sec<4){
    var val=Math.round((oy+gh-p.y)/(gh/5));
    val=Math.max(0,Math.min(5,val));
    data[selEmo][sec]=val;
    ls30s('emotion_map_data',data);
    var mapped=ls30('emotion_mapped',0)+1;ls30s('emotion_mapped',mapped);
    sfx30('emotionMap');draw();
   }
  }
 });
 cv.addEventListener('touchstart',function(e){e.preventDefault();
  var p=cxy30(cv,e);
  if(p.x<90){
   var idx=Math.floor((p.y-50)/33);
   if(idx>=0&&idx<emotions.length){selEmo=idx;sfx30('emotionMap');draw();}
   return;
  }
  var ox=120,oy=55,gw=470,gh=280,sw=gw/4;
  if(p.x>=ox&&p.x<=ox+gw&&p.y>=oy&&p.y<=oy+gh){
   var sec=Math.floor((p.x-ox)/sw);
   if(sec>=0&&sec<4){
    var val=Math.round((oy+gh-p.y)/(gh/5));
    val=Math.max(0,Math.min(5,val));
    data[selEmo][sec]=val;
    ls30s('emotion_map_data',data);
    sfx30('emotionMap');draw();
   }
  }
 },{passive:false});
 draw();
};

/* ════════════════════════════════════════════════════════
   TOOL 6: 보컬 지구력 트래커 (Canvas 620x400)
   — 7일 x 8시간대 히트맵 (연습 시간 기록)
   — 연속 스트릭 카운터, 총 세션/시간 통계
   — 셀 클릭으로 +15분 기록
   ════════════════════════════════════════════════════════ */
window.__sv30VocalEnduranceTracker=function(){
 var cv=createPanel30('🏋️ 보컬 지구력 트래커','sv30-endurance',620,400);
 var ctx=cv.getContext('2d');
 var days=['월','화','수','목','금','토','일'];
 var hours=['9AM','11AM','1PM','3PM','5PM','7PM','9PM','11PM'];
 var data=ls30('endurance_data',null);
 if(!data){data=[];for(var i=0;i<days.length;i++){data[i]=[];for(var j=0;j<hours.length;j++)data[i][j]=0;}}

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0816';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 지구력 트래커',310,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('셀 클릭으로 +15분 기록 | 연습 패턴 분석',310,38);
  var ox=75,oy=60,cw=60,ch=35;
  ctx.font='bold 10px sans-serif';ctx.fillStyle='#e9d5ff';ctx.textAlign='center';
  for(var j=0;j<hours.length;j++){ctx.fillText(hours[j],ox+j*cw+cw/2,oy-6);}
  ctx.textAlign='right';
  for(var i=0;i<days.length;i++){ctx.fillStyle='#e9d5ff';ctx.fillText(days[i],ox-8,oy+i*ch+ch/2+4);}
  var colorScale=['#1e1b4b','#312e81','#4c1d95','#6d28d9','#8b5cf6','#a855f7','#c084fc','#e9d5ff'];
  for(var i=0;i<days.length;i++){
   for(var j=0;j<hours.length;j++){
    var x=ox+j*cw,y=oy+i*ch;
    var v=data[i][j];
    var ci=Math.min(colorScale.length-1,Math.floor(v/15));
    ctx.fillStyle=colorScale[ci];ctx.fillRect(x+1,y+1,cw-2,ch-2);
    if(v>0){ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
     ctx.fillText(v+'m',x+cw/2,y+ch/2+3);}
   }
  }
  var totalMin=0,sessions=0,maxH=0,maxHIdx=-1;
  for(var i=0;i<days.length;i++){
   for(var j=0;j<hours.length;j++){
    if(data[i][j]>0){totalMin+=data[i][j];sessions++;}
    if(data[i][j]>maxH){maxH=data[i][j];maxHIdx=j;}
   }
  }
  var streak=0;
  for(var i=days.length-1;i>=0;i--){
   var dayHas=false;for(var j=0;j<hours.length;j++){if(data[i][j]>0)dayHas=true;}
   if(dayHas)streak++;else break;
  }
  ls30s('endurance_sessions',data.flat().filter(function(v){return v>0;}));
  var statsY=oy+days.length*ch+20;
  ctx.fillStyle='#1e1b4b';ctx.fillRect(30,statsY,260,55);
  ctx.fillStyle='#e9d5ff';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
  ctx.fillText('총 세션: '+sessions+'회 | 총 시간: '+Math.round(totalMin/60*10)/10+'시간',40,statsY+18);
  ctx.fillText('연속 스트릭: '+streak+'일 | 최다: '+hours[maxHIdx>=0?maxHIdx:0],40,statsY+38);
  ctx.fillStyle='#1e1b4b';ctx.fillRect(310,statsY,280,55);
  for(var j=0;j<hours.length;j++){
   var hTotal=0;for(var i=0;i<days.length;i++)hTotal+=data[i][j];
   var barH=Math.min(45,hTotal/2);
   ctx.fillStyle='#7c3aed';ctx.fillRect(320+j*32,statsY+50-barH,26,barH);
   ctx.fillStyle='#a78bfa';ctx.font='8px sans-serif';ctx.textAlign='center';
   ctx.fillText(hours[j].replace('AM','a').replace('PM','p'),333+j*32,statsY+52);
  }
  var pct=Math.min(100,Math.round(totalMin/420*100));
  var grade=gradeFor30(pct);
  ctx.fillStyle=gradeColor30(grade);ctx.font='bold 13px sans-serif';ctx.textAlign='center';
  ctx.fillText('주간 지구력: '+grade+' ('+pct+'%)',310,statsY+72);
 }
 cv.addEventListener('click',function(e){
  var p=cxy30(cv,e),ox=75,oy=60,cw=60,ch=35;
  var c=Math.floor((p.x-ox)/cw),r=Math.floor((p.y-oy)/ch);
  if(r>=0&&r<days.length&&c>=0&&c<hours.length){
   data[r][c]+=15;ls30s('endurance_data',data);sfx30('endurance');draw();
  }
 });
 cv.addEventListener('touchstart',function(e){e.preventDefault();
  var p=cxy30(cv,e),ox=75,oy=60,cw=60,ch=35;
  var c=Math.floor((p.x-ox)/cw),r=Math.floor((p.y-oy)/ch);
  if(r>=0&&r<days.length&&c>=0&&c<hours.length){
   data[r][c]+=15;ls30s('endurance_data',data);sfx30('endurance');draw();
  }
 },{passive:false});
 draw();
};

/* ════════════════════════════════════════════════════════
   TOOL 7: 퍼포먼스 피크 파인더 (Canvas 620x400)
   — 12시간대 x 5 퍼포먼스 지표 (음정정확도/음역범위/표현력/지구력/총합)
   — 영역차트 + 최적 시간대 마커
   — 클릭으로 시간대별 점수 입력
   ════════════════════════════════════════════════════════ */
window.__sv30PerformancePeakFinder=function(){
 var cv=createPanel30('📈 퍼포먼스 피크 파인더','sv30-peak',620,400);
 var ctx=cv.getContext('2d');
 var timeSlots=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
 var metrics=['음정','음역','표현','지구','총합'];
 var mColors=['#a855f7','#f472b6','#34d399','#fbbf24','#60a5fa'];
 var data=ls30('peak_data',null);
 if(!data){data=[];for(var i=0;i<metrics.length-1;i++){data[i]=[];for(var j=0;j<timeSlots.length;j++)data[i][j]=0;}}
 var selMetric=0;

 function calcTotal(){
  var totals=[];
  for(var j=0;j<timeSlots.length;j++){
   var sum=0;for(var i=0;i<data.length;i++)sum+=data[i][j];
   totals.push(Math.round(sum/data.length));
  }
  return totals;
 }

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0816';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('퍼포먼스 피크 파인더',310,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('차트 클릭으로 시간대별 점수 입력 (0~100) | 지표 탭 선택',310,38);
  for(var i=0;i<metrics.length;i++){
   var x=30+i*112;
   ctx.fillStyle=i===selMetric?'#2d1f4e':'#1e1b4b';
   ctx.fillRect(x,46,105,24);
   ctx.strokeStyle=mColors[i];ctx.lineWidth=i===selMetric?2:1;ctx.strokeRect(x,46,105,24);
   ctx.fillStyle=i===selMetric?mColors[i]:'#d4d4d8';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
   ctx.fillText(metrics[i],x+52,62);
  }
  var ox=55,oy=85,gw=530,gh=240;
  ctx.fillStyle='#12091e';ctx.fillRect(ox,oy,gw,gh);
  for(var g=0;g<=10;g++){
   var y=oy+gh-g*(gh/10);
   ctx.beginPath();ctx.moveTo(ox,y);ctx.lineTo(ox+gw,y);
   ctx.strokeStyle='rgba(124,58,237,0.15)';ctx.lineWidth=1;ctx.stroke();
   if(g%2===0){ctx.fillStyle='#6b7280';ctx.font='8px sans-serif';ctx.textAlign='right';ctx.fillText(g*10,ox-4,y+3);}
  }
  var sw=gw/timeSlots.length;
  for(var j=0;j<timeSlots.length;j++){
   ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='center';
   ctx.fillText(timeSlots[j],ox+j*sw+sw/2,oy+gh+14);
  }
  var totals=calcTotal();
  if(selMetric<4){
   var vals=data[selMetric];
   ctx.beginPath();
   for(var j=0;j<timeSlots.length;j++){
    var x=ox+j*sw+sw/2,y=oy+gh-vals[j]*(gh/100);
    if(j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
   }
   ctx.lineTo(ox+(timeSlots.length-1)*sw+sw/2,oy+gh);
   ctx.lineTo(ox+sw/2,oy+gh);ctx.closePath();
   ctx.fillStyle=mColors[selMetric].replace(')',',0.2)').replace('rgb','rgba');
   ctx.globalAlpha=0.3;ctx.fill();ctx.globalAlpha=1;
   ctx.beginPath();
   for(var j=0;j<timeSlots.length;j++){
    var x=ox+j*sw+sw/2,y=oy+gh-vals[j]*(gh/100);
    if(j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
   }
   ctx.strokeStyle=mColors[selMetric];ctx.lineWidth=2;ctx.stroke();
   for(var j=0;j<timeSlots.length;j++){
    var x=ox+j*sw+sw/2,y=oy+gh-vals[j]*(gh/100);
    ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fillStyle=mColors[selMetric];ctx.fill();
   }
  }else{
   ctx.beginPath();
   for(var j=0;j<timeSlots.length;j++){
    var x=ox+j*sw+sw/2,y=oy+gh-totals[j]*(gh/100);
    if(j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
   }
   ctx.strokeStyle=mColors[4];ctx.lineWidth=3;ctx.stroke();
  }
  var peakIdx=0,peakVal=0;
  for(var j=0;j<totals.length;j++){if(totals[j]>peakVal){peakVal=totals[j];peakIdx=j;}}
  if(peakVal>0){
   var px=ox+peakIdx*sw+sw/2,py=oy+gh-peakVal*(gh/100);
   ctx.beginPath();ctx.arc(px,py-2,8,0,Math.PI*2);ctx.fillStyle='#fbbf24';ctx.fill();
   ctx.fillStyle='#0d0816';ctx.font='bold 8px sans-serif';ctx.textAlign='center';ctx.fillText('★',px,py+1);
   ls30s('peak_found',true);
  }
  var pct=peakVal;var grade=gradeFor30(pct);
  ctx.fillStyle=gradeColor30(grade);ctx.font='bold 13px sans-serif';ctx.textAlign='center';
  ctx.fillText('피크 타임: '+timeSlots[peakIdx]+' ('+peakVal+'점) — '+grade+'등급',310,oy+gh+32);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText('성대가 가장 활성화되는 시간을 찾으세요',310,oy+gh+48);
 }
 cv.addEventListener('click',function(e){
  var p=cxy30(cv,e);
  if(p.y>=46&&p.y<=70){
   var idx=Math.floor((p.x-30)/112);
   if(idx>=0&&idx<metrics.length){selMetric=idx;sfx30('peakFind');draw();}
   return;
  }
  var ox=55,oy=85,gw=530,gh=240,sw=gw/12;
  if(p.x>=ox&&p.x<=ox+gw&&p.y>=oy&&p.y<=oy+gh&&selMetric<4){
   var j=Math.floor((p.x-ox)/sw);
   if(j>=0&&j<timeSlots.length){
    var val=Math.round((oy+gh-p.y)/(gh/100));
    val=Math.max(0,Math.min(100,val));
    data[selMetric][j]=val;
    ls30s('peak_data',data);sfx30('peakFind');draw();
   }
  }
 });
 cv.addEventListener('touchstart',function(e){e.preventDefault();
  var p=cxy30(cv,e);
  if(p.y>=46&&p.y<=70){
   var idx=Math.floor((p.x-30)/112);
   if(idx>=0&&idx<metrics.length){selMetric=idx;sfx30('peakFind');draw();}
   return;
  }
  var ox=55,oy=85,gw=530,gh=240,sw=gw/12;
  if(p.x>=ox&&p.x<=ox+gw&&p.y>=oy&&p.y<=oy+gh&&selMetric<4){
   var j=Math.floor((p.x-ox)/sw);
   if(j>=0&&j<timeSlots.length){
    var val=Math.round((oy+gh-p.y)/(gh/100));
    val=Math.max(0,Math.min(100,val));
    data[selMetric][j]=val;
    ls30s('peak_data',data);sfx30('peakFind');draw();
   }
  }
 },{passive:false});
 draw();
};

/* ════════════════════════════════════════════════════════
   TOOL 8: 종합 보컬 IQ 대시보드 (Canvas 620x400)
   — 8 KPI (다이나믹스/호흡/피치메모리/팀버/감정표현/지구력/피크활용/기교)
   — 반원 게이지 4x2, 가중 종합 S~D 등급
   ════════════════════════════════════════════════════════ */
window.__sv30ComprehensiveVocalIQ=function(){
 var cv=createPanel30('🏆 종합 보컬 IQ 대시보드','sv30-vocal-iq',620,400);
 var ctx=cv.getContext('2d');
 var kpis=[
  {name:'다이나믹스',weight:15,getData:function(){var d=ls30('dynamics_data',null);if(!d)return 0;var t=0,m=0;for(var i=0;i<d.length;i++)for(var j=0;j<d[i].length;j++){t+=d[i][j];m+=5;}return m?Math.round(t/m*100):0;}},
  {name:'호흡 체인',weight:12,getData:function(){var d=ls30('breath_tech_data',[]);if(!d.length)return 0;var t=d.reduce(function(a,b){return a+b;},0);return Math.min(100,t*5);}},
  {name:'피치 메모리',weight:15,getData:function(){return Math.min(100,ls30('pitch_mem_level',0)*10);}},
  {name:'팀버 탐색',weight:10,getData:function(){return Math.min(100,ls30('timbre_explored',0)*12);}},
  {name:'감정 표현',weight:13,getData:function(){return Math.min(100,ls30('emotion_mapped',0)*20);}},
  {name:'지구력',weight:13,getData:function(){var d=ls30('endurance_data',null);if(!d)return 0;var t=0;for(var i=0;i<d.length;i++)for(var j=0;j<d[i].length;j++)t+=d[i][j];return Math.min(100,Math.round(t/420*100));}},
  {name:'피크 활용',weight:10,getData:function(){return ls30('peak_found',false)?85:0;}},
  {name:'기교 종합',weight:12,getData:function(){return Math.min(100,ls30('tools_used',0)*12);}}
 ];

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0816';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('종합 보컬 IQ 대시보드',310,22);
  ctx.font='10px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('8개 KPI 반원 게이지 + 가중 종합 등급',310,38);
  var gw=140,gh=80,cols=4,rows=2,ox=15,oy=50;
  var weightedSum=0,weightTotal=0;
  for(var i=0;i<kpis.length;i++){
   var col=i%cols,row=Math.floor(i/cols);
   var x=ox+col*(gw+5),y=oy+row*(gh+35);
   var val=kpis[i].getData();
   var grade=gradeFor30(val);
   weightedSum+=val*kpis[i].weight;
   weightTotal+=kpis[i].weight;
   ctx.fillStyle='#12091e';ctx.fillRect(x,y,gw,gh+25);
   ctx.strokeStyle='#312e81';ctx.lineWidth=1;ctx.strokeRect(x,y,gw,gh+25);
   var cx=x+gw/2,cy=y+gh-5,r=55;
   ctx.beginPath();ctx.arc(cx,cy,r,Math.PI,0);ctx.strokeStyle='#1e1b4b';ctx.lineWidth=10;ctx.stroke();
   var endAngle=Math.PI+Math.PI*(val/100);
   ctx.beginPath();ctx.arc(cx,cy,r,Math.PI,endAngle);ctx.strokeStyle=gradeColor30(grade);ctx.lineWidth=10;ctx.stroke();
   ctx.fillStyle=gradeColor30(grade);ctx.font='bold 16px sans-serif';ctx.textAlign='center';
   ctx.fillText(grade,cx,cy-8);
   ctx.fillStyle='#d4d4d8';ctx.font='9px sans-serif';
   ctx.fillText(val+'%',cx,cy+6);
   ctx.fillStyle='#e9d5ff';ctx.font='bold 9px sans-serif';
   ctx.fillText(kpis[i].name,cx,y+gh+16);
  }
  var overallPct=weightTotal?Math.round(weightedSum/weightTotal):0;
  var overallGrade=gradeFor30(overallPct);
  ls30s('vocal_iq_grade',overallGrade);
  ctx.fillStyle='#1e1b4b';ctx.fillRect(150,355,320,40);
  ctx.strokeStyle=gradeColor30(overallGrade);ctx.lineWidth=2;ctx.strokeRect(150,355,320,40);
  ctx.fillStyle=gradeColor30(overallGrade);ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('★ 종합 보컬 IQ: '+overallGrade+' ('+overallPct+'%)',310,380);
 }
 draw();
};

/* ── Navigation: Append buttons to existing nav ── */
document.addEventListener('DOMContentLoaded',function(){
 setTimeout(function(){

var existingNav=document.getElementById('bottomNav');
if(!existingNav){
 var allDivs=document.querySelectorAll('div');
 for(var i=0;i<allDivs.length;i++){
  var s=window.getComputedStyle(allDivs[i]);
  if(s.position==='fixed'&&parseInt(s.bottom)<=5){existingNav=allDivs[i];break;}
 }
}
if(!existingNav){
 existingNav=document.querySelector('[style*="overflow-x"]')||document.querySelector('[style*="flex-wrap"]');
}

var btnDefs=[
 {label:'🔊다이나믹스',fn:'__sv30VocalDynamicsController',key:'Q'},
 {label:'💨호흡체인',fn:'__sv30BreathChainAnalyzer',key:'W'},
 {label:'🧠피치메모리',fn:'__sv30PitchMemoryTrainer',key:'E'},
 {label:'🎨팀버블렌더',fn:'__sv30VocalTimbreBlender',key:'R'},
 {label:'🎭감정매퍼',fn:'__sv30SongEmotionMapper',key:'T'},
 {label:'🏋️지구력',fn:'__sv30VocalEnduranceTracker',key:'Y'},
 {label:'📈피크파인더',fn:'__sv30PerformancePeakFinder',key:'U'},
 {label:'🏆보컬IQ',fn:'__sv30ComprehensiveVocalIQ',key:'I'},
 {label:'🔄v30',fn:null,key:'0'}
];

btnDefs.forEach(function(def){
 var btn=document.createElement('button');
 btn.textContent=def.label;
 btn.title='v30: '+def.label+(def.key?' (Shift+'+def.key+')':'');
 btn.style.cssText='padding:6px 10px;margin:2px;background:linear-gradient(135deg,#7c2d12,#ea580c);color:white;border:none;border-radius:8px;cursor:pointer;font-size:11px;font-weight:bold;box-shadow:0 2px 6px rgba(234,88,12,0.4);';
 btn.addEventListener('mouseenter',function(){btn.style.transform='scale(1.08)';});
 btn.addEventListener('mouseleave',function(){btn.style.transform='scale(1)';});
 btn.onclick=function(){
  sfx30('navClick30');
  if(def.fn&&window[def.fn])window[def.fn]();
 };
 if(existingNav)existingNav.appendChild(btn);
});

/* ── Keyboard Shortcuts (Shift+Q/W/E/R/T/Y/U/I/0) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'Q':'__sv30VocalDynamicsController','W':'__sv30BreathChainAnalyzer','E':'__sv30PitchMemoryTrainer',
  'R':'__sv30VocalTimbreBlender','T':'__sv30SongEmotionMapper','Y':'__sv30VocalEnduranceTracker',
  'U':'__sv30PerformancePeakFinder','I':'__sv30ComprehensiveVocalIQ'
 };
 var key=e.key.toUpperCase();
 if(map[key]&&window[map[key]]){e.preventDefault();sfx30('navClick30');window[map[key]]();}
 if(key==='0'||e.code==='Digit0'){e.preventDefault();sfx30('navClick30');}
});

},800);
});
})();
