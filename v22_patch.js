/* StarVoice v22 Patch — Self-contained IIFE module injected via SW
 * +10 songs(185->195), VocalWarmupRoutineV2 Canvas, BreathControlMaster Canvas,
 * PhraseMaker Canvas, MixingEqualizer Canvas, AudiencePredictor Canvas,
 * VocalStyleDNA Canvas, DifficultyTrainer Canvas, MelodyMemoryGame Canvas,
 * quiz +15(222->237), achievements +12(186->198), SFX 14, keyboard +8
 */
(function(){
'use strict';
if(window.__v22KaraokeLoaded) return;
window.__v22KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;

function ls22(k,d){try{var v=localStorage.getItem('sv22-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls22s(k,v){try{localStorage.setItem('sv22-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (186-195) ── */
var v22Songs=[
{id:186,title:'Teddy Bear',artist:'STAYC',bpm:112,key:'F',difficulty:3,genre:'pop',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['Ted','dy','Bear','안','아','줘','나','를','꼭','잡','아','줘','영','원','히','지금'],
 duration:[402,402,402,804,402,402,402,402,402,402,402,804,402,402,402,402]},
{id:187,title:'꽃',artist:'JISOO',bpm:96,key:'Ab',difficulty:4,genre:'ballad',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db5,F4,Ab4,G4,F4,Eb4,Db5],
 lyrics:['피','어','난','꽃','처','럼','아','름','다','운','너','의','모','습','이','좋아'],
 duration:[469,469,469,938,469,469,469,469,469,469,469,938,469,469,469,469]},
{id:188,title:'OMG',artist:'NewJeans',bpm:127,key:'Eb',difficulty:3,genre:'pop',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['Oh','my','god','널','보','는','내','맘','이','자','꾸','두','근','대','는','걸'],
 duration:[354,354,354,709,354,354,354,354,354,354,354,709,354,354,354,354]},
{id:189,title:'후라이의 꿈',artist:'AKMU',bpm:118,key:'G',difficulty:3,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['하','늘','을','날','고','싶','은','후','라','이','의','꿈','을','꿔','봐','요'],
 duration:[381,381,381,763,381,381,381,381,381,381,381,763,381,381,381,381]},
{id:190,title:'Kitsch',artist:'IVE',bpm:130,key:'Cm',difficulty:4,genre:'dance',
 notes:[C4,Eb4,G4,C5,B4,G4,Eb4,C4,D4,F4,Ab4,C5,B4,Ab4,G4,F4],
 lyrics:['Kitsch','한','게','뭐','가','어','때','나','는','나','답','게','갈','거','야','봐'],
 duration:[346,346,346,692,346,346,346,346,346,346,346,692,346,346,346,346]},
{id:191,title:'I AM',artist:'IVE',bpm:100,key:'Db',difficulty:3,genre:'pop',
 notes:[Db5,F4,Ab4,Db5,C5,Ab4,F4,Db5,Eb4,Gb4,Bb4,Db5,C5,Bb4,Ab4,Gb4],
 lyrics:['I','am','what','I','am','나','는','나','야','있','는','그','대','로','의','나'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:192,title:'내 손을 잡아',artist:'IU',bpm:82,key:'Bb',difficulty:3,genre:'ballad',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['내','손','을','잡','아','이','길','의','끝','에','서','너','를','만','날','게'],
 duration:[549,549,549,1098,549,549,549,549,549,549,549,1098,549,549,549,549]},
{id:193,title:'GODS',artist:'NewJeans',bpm:140,key:'Em',difficulty:4,genre:'dance',
 notes:[E3,G3,B3,E4,Ds4,B3,G3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['We','are','the','gods','of','this','new','world','빛','나','는','우','리','의','시','대'],
 duration:[321,321,321,643,321,321,321,321,321,321,321,643,321,321,321,321]},
{id:194,title:'밤양갱',artist:'비비',bpm:78,key:'C',difficulty:2,genre:'ballad',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['달','콤','한','밤','양','갱','처','럼','너','와','나','의','이','야','기','를'],
 duration:[577,577,577,1154,577,577,577,577,577,577,577,1154,577,577,577,577]},
{id:195,title:'한 페이지가 될 수 있게',artist:'DAY6',bpm:106,key:'D',difficulty:4,genre:'rock',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['한','페','이','지','가','될','수','있','게','너','의','이','야','기','속','에'],
 duration:[425,425,425,849,425,425,425,425,425,425,425,849,425,425,425,425]}
];
(function injectSongs22(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v22Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v22 (14 sounds) ── */
var actx22=null;
function getAC22(){if(!actx22)try{actx22=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx22;}
function sfx22(type){
 var ac=getAC22();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  vocalWarm:{f:440,d:.4,wave:'sine',gS:.18,gE:0},
  vocalCool:{f:330,d:.35,wave:'triangle',gS:.16,gE:0},
  mixAnalyze:{f:523,d:.45,wave:'sine',gS:.2,gE:0},
  mixComplete:{f:880,d:.5,wave:'triangle',gS:.28,gE:0},
  phraseStart:{f:392,d:.3,wave:'sine',gS:.18,gE:0},
  phraseHit:{f:659,d:.35,wave:'triangle',gS:.22,gE:0},
  breathControl:{f:294,d:.5,wave:'sine',gS:.15,gE:0},
  breathPerfect:{f:587,d:.55,wave:'triangle',gS:.25,gE:0},
  styleMatch:{f:349,d:.35,wave:'sine',gS:.18,gE:0},
  audienceReact:{f:784,d:.4,wave:'triangle',gS:.22,gE:0},
  quizCorrect22:{f:1175,d:.3,wave:'triangle',gS:.22,gE:0},
  quizWrong22:{f:185,d:.4,wave:'sawtooth',gS:.1,gE:0},
  achieve22:{f:1319,d:.6,wave:'triangle',gS:.32,gE:0},
  navClick22:{f:740,d:.2,wave:'sine',gS:.15,gE:0}
 };
 var c=cfg[type]||cfg.vocalWarm;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='vocalWarm'){o.frequency.setValueAtTime(c.f*0.85,t);o.frequency.exponentialRampToValueAtTime(c.f*1.15,t+c.d*0.5);o.frequency.exponentialRampToValueAtTime(c.f,t+c.d);}
 if(type==='mixComplete'){o.frequency.setValueAtTime(c.f*0.7,t);o.frequency.exponentialRampToValueAtTime(c.f*1.3,t+c.d);}
 if(type==='audienceReact'){o.frequency.setValueAtTime(c.f,t);o.frequency.exponentialRampToValueAtTime(c.f*1.5,t+c.d*0.3);o.frequency.exponentialRampToValueAtTime(c.f*0.8,t+c.d);}
 if(type==='breathPerfect'){o.frequency.setValueAtTime(c.f*0.8,t);o.frequency.exponentialRampToValueAtTime(c.f*1.2,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Quiz v22 (+15 questions, 222->237) ── */
var v22Quiz=[
{q:'&quot;비브라토&quot;의 종류 중 &quot;다이어프램 비브라토&quot;란?',a:['횡격막을 이용한 규칙적 음 떨림','입술을 떠는 기법','목을 흔드는 기법','손으로 마이크를 흔드는 것'],c:0},
{q:'가사 전달법에서 &quot;딕션(Diction)&quot;이 중요한 이유는?',a:['정확한 발음으로 감정과 의미를 효과적으로 전달','높은 음을 내기 위해','호흡을 절약하기 위해','마이크 성능을 높이기 위해'],c:0},
{q:'노래방 에티켓으로 올바른 것은?',a:['다른 사람이 부를 때 경청하고 호응하기','자기 차례만 기다리며 핸드폰 보기','남의 곡 중간에 취소 버튼 누르기','볼륨을 최대로 올려놓기'],c:0},
{q:'K-POP 음악 용어 &quot;킬링파트(Killing Part)&quot;란?',a:['곡에서 가장 인상적이고 중독성 있는 부분','가장 어려운 고음 파트','마지막 코러스','인트로 멜로디'],c:0},
{q:'보컬 워밍업에서 &quot;립 트릴(Lip Trill)&quot;의 효과는?',a:['성대 긴장 완화와 호흡 안정화','고음 확장','비브라토 연습','리듬감 향상'],c:0},
{q:'마이크 사용 시 &quot;프록시미티 이펙트&quot;란?',a:['마이크에 가까울수록 저음이 부스트되는 현상','반향음이 커지는 현상','고음이 왜곡되는 현상','하울링이 발생하는 현상'],c:0},
{q:'&quot;순환호흡(Circular Breathing)&quot;이란?',a:['코로 흡기하면서 동시에 입으로 소리를 유지하는 기법','빠르게 숨 쉬는 것','배로만 숨 쉬는 것','호흡을 참는 것'],c:0},
{q:'음악 장르 중 &quot;시티팝(City Pop)&quot;의 특징은?',a:['도시적 감성의 펑크/소울 기반 팝 음악','시골 분위기 음악','클래식 기반 음악','하드코어 댄스 음악'],c:0},
{q:'보컬에서 &quot;패시지오(Passaggio)&quot;란?',a:['흉성과 두성이 전환되는 음역 전환점','가장 높은 음','가장 낮은 음','비브라토 속도'],c:0},
{q:'&quot;컴프레서(Compressor)&quot;가 보컬에 미치는 영향은?',a:['음량 차이를 줄여 일정한 보컬 레벨 유지','음정을 자동 보정','리버브를 추가','속도를 변경'],c:0},
{q:'Smule 앱에서 인기 있는 기능은?',a:['실시간 듀엣 녹음과 글로벌 콜라보','오프라인 채점만 지원','악보 편집 기능','작곡 AI 기능'],c:0},
{q:'노래할 때 &quot;서브톤(Subtone)&quot; 발성이란?',a:['의도적으로 바람 섞인 부드러운 소리를 내는 기법','최대한 큰 소리를 내는 것','콧소리로만 부르는 것','속삭이듯 말하는 것'],c:0},
{q:'&quot;코드 진행(Chord Progression)&quot; I-V-vi-IV가 많이 쓰이는 이유는?',a:['대중적으로 편안하고 감성적인 느낌을 주기 때문','연주가 어려워서','마이너 느낌이 강해서','템포가 빨라서'],c:0},
{q:'보컬 트레이닝에서 &quot;스케일 연습&quot;의 목적은?',a:['음정 정확도와 음역대 확장을 위한 기초 훈련','리듬감 향상','가사 암기','무대 매너 연습'],c:0},
{q:'노래방에서 &quot;MR(Music Recorded)&quot;과 &quot;AR(All Recorded)&quot;의 차이는?',a:['MR은 반주만, AR은 가수 목소리 포함','MR이 더 빠르다','AR이 음질이 낮다','둘은 같은 것이다'],c:0}
];
(function injectQuiz22(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v22Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v22 (+12, 186->198) ── */
var v22Achievements=[
{id:'vocal_warmup_master',title:'워밍업 마스터',desc:'보컬 워밍업 12종 모두 완료',icon:'🔥'},
{id:'breath_architect',title:'호흡 건축가',desc:'호흡 컨트롤 6패턴 마스터',icon:'🌬️'},
{id:'phrase_sculptor',title:'프레이즈 조각가',desc:'프레이즈 메이커 S등급 달성',icon:'🎨'},
{id:'mix_engineer',title:'믹싱 엔지니어',desc:'이퀄라이저 6프리셋 모두 체험',icon:'🎛️'},
{id:'audience_whisperer',title:'관객의 속삭임',desc:'8유형 관객 반응 분석 완료',icon:'👥'},
{id:'style_chameleon',title:'스타일 카멜레온',desc:'보컬 DNA 5아티스트 매칭',icon:'🦎'},
{id:'vocal_athlete',title:'보컬 운동선수',desc:'난이도 트레이너 마스터 단계 도달',icon:'🏋️'},
{id:'melody_weaver',title:'멜로디 직조사',desc:'멜로디 메모리 8음 클리어',icon:'🧶'},
{id:'quiz_v22_master',title:'퀴즈 v22 마스터',desc:'v22 퀴즈 전문 S등급',icon:'🧠'},
{id:'song_195',title:'195곡 마스터',desc:'195번째 곡 노래하기',icon:'🎵'},
{id:'v22_explorer',title:'v22 탐험가',desc:'v22 기능 모두 체험',icon:'🔭'},
{id:'v22_complete',title:'v22 컴플리트',desc:'v22 모든 업적 달성',icon:'👑'}
];
(function injectAchievements22(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v22Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
   if(typeof window.renderAchievements==='function')window.renderAchievements();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── 1. 보컬 워밍업 루틴 v2 Canvas 600x380 ── */
function createVocalWarmup(){
 var sec=document.createElement('div');
 sec.id='sv22-vocal-warmup';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#16213e 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🔥 보컬 워밍업 루틴 v2</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">12종 워밍업 운동 — 30초 타이머, 일일 목표 달성 추적</p>'+
  '<canvas id="sv22-warmup-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;justify-content:center">'+
  '<button id="sv22-warmup-start" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎤 워밍업 시작</button>'+
  '<button id="sv22-warmup-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-warmup-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var exercises=['립 트릴','혀 굴리기','험밍','스케일','아르페지오','트릴','스타카토 발성','모음연습','반음계','옥타브점프','호흡운동','공명연습'];
  var completed=ls22('warmup-done',[false,false,false,false,false,false,false,false,false,false,false,false]);
  var totalSessions=ls22('warmup-sessions',0);
  var dailyGoal=ls22('warmup-daily',0);
  function draw(){
   ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,600,380);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('보컬 워밍업 루틴 v2 — 12종 운동',300,25);
   var cols=4,rows=3,cellW=125,cellH=70,startX=40,startY=50;
   for(var i=0;i<12;i++){
    var col=i%cols,row=Math.floor(i/cols);
    var x=startX+col*(cellW+10),y=startY+row*(cellH+12);
    ctx.fillStyle=completed[i]?'rgba(34,197,94,.2)':'rgba(30,27,75,.8)';
    ctx.fillRect(x,y,cellW,cellH);
    ctx.strokeStyle=completed[i]?'#22c55e':'rgba(168,85,247,.3)';ctx.lineWidth=1;ctx.strokeRect(x,y,cellW,cellH);
    ctx.fillStyle=completed[i]?'#22c55e':'#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='center';
    ctx.fillText(exercises[i],x+cellW/2,y+25);
    if(completed[i]){
     ctx.fillStyle='#22c55e';ctx.font='bold 18px sans-serif';ctx.fillText('✓',x+cellW/2,y+52);
    }else{
     ctx.fillStyle='#6366f1';ctx.font='10px sans-serif';ctx.fillText('30초',x+cellW/2,y+50);
    }
   }
   var doneCount=completed.filter(function(c){return c;}).length;
   var pct=doneCount/12;
   ctx.fillStyle='#1e1b4b';ctx.fillRect(40,310,420,20);
   var grd=ctx.createLinearGradient(40,0,40+420*pct,0);grd.addColorStop(0,'#a855f7');grd.addColorStop(1,'#ec4899');
   ctx.fillStyle=grd;ctx.fillRect(40,310,420*pct,20);
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
   ctx.fillText(doneCount+'/12 완료 ('+Math.round(pct*100)+'%)',250,324);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';ctx.textAlign='left';
   ctx.fillText('총 세션: '+totalSessions+'회',480,320);
   ctx.fillText('일일 목표: '+dailyGoal+'/3',480,340);
   if(doneCount>=12){
    ctx.fillStyle='#fbbf24';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('🎉 워밍업 완료! 일일 목표 달성!',300,365);
   }
  }
  draw();
  var startBtn=document.getElementById('sv22-warmup-start');
  var resetBtn=document.getElementById('sv22-warmup-reset');
  if(startBtn)startBtn.onclick=function(){
   sfx22('vocalWarm');
   var incomplete=[];
   for(var i=0;i<12;i++){if(!completed[i])incomplete.push(i);}
   if(incomplete.length===0){dailyGoal++;ls22s('warmup-daily',dailyGoal);draw();return;}
   var idx=incomplete[Math.floor(Math.random()*incomplete.length)];
   completed[idx]=true;
   var doneCount=completed.filter(function(c){return c;}).length;
   if(doneCount>=12){totalSessions++;dailyGoal++;ls22s('warmup-sessions',totalSessions);ls22s('warmup-daily',dailyGoal);}
   ls22s('warmup-done',completed);draw();
   if(doneCount>=12)sfx22('mixComplete');
  };
  if(resetBtn)resetBtn.onclick=function(){
   completed=[false,false,false,false,false,false,false,false,false,false,false,false];
   ls22s('warmup-done',completed);draw();
  };
 },200);
 return sec;
}

/* ── 2. 호흡 컨트롤 마스터 Canvas 580x360 ── */
function createBreathControl(){
 var sec=document.createElement('div');
 sec.id='sv22-breath-control';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#1e293b 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🌬️ 호흡 컨트롤 마스터</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">6종 호흡 패턴 — 호흡 사이클 시각화, 기록 히스토리</p>'+
  '<canvas id="sv22-breath-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;justify-content:center">'+
  '<button id="sv22-breath-practice" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🌬️ 호흡 연습</button>'+
  '<button id="sv22-breath-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-breath-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var patterns=[
   {name:'복식호흡',inhale:4,hold:4,exhale:6,desc:'배를 팽창시키며 깊게'},
   {name:'횡격막호흡',inhale:3,hold:2,exhale:5,desc:'횡격막 아래로 밀어내며'},
   {name:'순환호흡',inhale:2,hold:1,exhale:3,desc:'끊김 없는 연속 호흡'},
   {name:'파워브레스',inhale:2,hold:0,exhale:1,desc:'폭발적 에너지 호흡'},
   {name:'서스테인',inhale:4,hold:2,exhale:10,desc:'긴 프레이즈를 위한 지속'},
   {name:'스타카토호흡',inhale:1,hold:0,exhale:1,desc:'짧고 리드미컬한 호흡'}
  ];
  var breathData=ls22('breath-data',patterns.map(function(){return{score:0,best:0,count:0};}));
  var history=ls22('breath-hist',[]);
  function draw(){
   ctx.clearRect(0,0,580,360);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,580,360);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('호흡 컨트롤 마스터 — 6종 패턴 훈련',290,25);
   for(var i=0;i<6;i++){
    var x=30,y=50+i*42;
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='right';
    ctx.fillText(patterns[i].name,x+75,y+12);
    var total=patterns[i].inhale+patterns[i].hold+patterns[i].exhale;
    var inW=patterns[i].inhale/total*200;
    var holdW=patterns[i].hold/total*200;
    var exW=patterns[i].exhale/total*200;
    ctx.fillStyle='#3b82f6';ctx.fillRect(x+85,y,inW,20);
    ctx.fillStyle='#fbbf24';ctx.fillRect(x+85+inW,y,holdW,20);
    ctx.fillStyle='#22c55e';ctx.fillRect(x+85+inW+holdW,y,exW,20);
    ctx.fillStyle='#1e1b4b';ctx.fillRect(x+295,y,150,20);
    var scorePct=breathData[i].score/100;
    var grd=ctx.createLinearGradient(x+295,0,x+295+150*scorePct,0);grd.addColorStop(0,'#a855f7');grd.addColorStop(1,'#ec4899');
    ctx.fillStyle=grd;ctx.fillRect(x+295,y,150*scorePct,20);
    ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText(breathData[i].score+'점',x+370,y+14);
    ctx.fillStyle='#6366f1';ctx.font='9px sans-serif';ctx.textAlign='left';
    ctx.fillText('최고:'+breathData[i].best,x+455,y+14);
   }
   ctx.fillStyle='#3b82f6';ctx.fillRect(30,310,12,12);ctx.fillStyle='#e2e8f0';ctx.font='10px sans-serif';ctx.textAlign='left';ctx.fillText('흡기',46,320);
   ctx.fillStyle='#fbbf24';ctx.fillRect(80,310,12,12);ctx.fillText('유지',96,320);
   ctx.fillStyle='#22c55e';ctx.fillRect(130,310,12,12);ctx.fillText('호기',146,320);
   if(history.length>1){
    ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.beginPath();
    var hStartX=350,hW=200,hH=60,hY=280;
    ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText('호흡 점수 히스토리',hStartX+hW/2,hY-8);
    for(var j=0;j<Math.min(history.length,20);j++){
     var hx=hStartX+j*(hW/Math.min(history.length-1,19));
     var hy=hY+hH-history[Math.max(0,history.length-20)+j]/100*hH;
     if(j===0)ctx.moveTo(hx,hy);else ctx.lineTo(hx,hy);
    }
    ctx.stroke();
   }
   var totalScore=breathData.reduce(function(a,b){return a+b.score;},0);
   var avg=Math.round(totalScore/6);
   var grade=avg>=90?'S':avg>=70?'A':avg>=50?'B':avg>=30?'C':'D';
   var gc=grade==='S'?'#fbbf24':grade==='A'?'#a855f7':grade==='B'?'#3b82f6':grade==='C'?'#22c55e':'#9ca3af';
   ctx.fillStyle=gc;ctx.font='bold 24px sans-serif';ctx.textAlign='center';ctx.fillText(grade,530,55);
   ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.fillText('평균 '+avg+'점',530,75);
  }
  draw();
  var practiceBtn=document.getElementById('sv22-breath-practice');
  var resetBtn=document.getElementById('sv22-breath-reset');
  if(practiceBtn)practiceBtn.onclick=function(){
   sfx22('breathControl');
   var idx=Math.floor(Math.random()*6);
   var gain=Math.floor(Math.random()*15)+5;
   breathData[idx].score=Math.min(100,breathData[idx].score+gain);
   breathData[idx].count++;
   if(breathData[idx].score>breathData[idx].best)breathData[idx].best=breathData[idx].score;
   var avg=Math.round(breathData.reduce(function(a,b){return a+b.score;},0)/6);
   history.push(avg);if(history.length>30)history.shift();
   ls22s('breath-data',breathData);ls22s('breath-hist',history);draw();
   if(avg>=90)sfx22('breathPerfect');
  };
  if(resetBtn)resetBtn.onclick=function(){
   breathData=patterns.map(function(){return{score:0,best:0,count:0};});history=[];
   ls22s('breath-data',breathData);ls22s('breath-hist',history);draw();
  };
 },200);
 return sec;
}

/* ── 3. 프레이즈 메이커 Canvas 620x400 ── */
function createPhraseMaker(){
 var sec=document.createElement('div');
 sec.id='sv22-phrase-maker';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#0f172a 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🎨 프레이즈 메이커 (가창 구절 분석기)</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">10가지 프레이즈 기법 x 점수 히트맵 — S~D 등급 판정</p>'+
  '<canvas id="sv22-phrase-cv" width="620" height="400" style="width:100%;max-width:620px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;justify-content:center">'+
  '<button id="sv22-phrase-practice" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎵 프레이즈 연습</button>'+
  '<button id="sv22-phrase-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-phrase-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var techniques=['레가토','스타카토','크레센도','디크레센도','어택','릴리즈','벤딩','비브라토','글리산도','포르타멘토'];
  var scores=ls22('phrase-scores',[0,0,0,0,0,0,0,0,0,0]);
  function getColor(val){
   if(val===0)return'#1e1b4b';if(val<=2)return'#312e81';if(val<=4)return'#6366f1';
   if(val<=6)return'#a855f7';if(val<=8)return'#ec4899';return'#fbbf24';
  }
  function draw(){
   ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('프레이즈 메이커 — 10기법 점수 히트맵',310,25);
   var cellW=45,cellH=28,startX=130,startY=55;
   ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
   for(var c=0;c<10;c++){
    ctx.fillText((c+1)+'점',startX+c*cellW+cellW/2,startY-5);
   }
   for(var i=0;i<10;i++){
    var y=startY+i*(cellH+4);
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='right';
    ctx.fillText(techniques[i],startX-10,y+cellH/2+4);
    for(var j=0;j<10;j++){
     var x=startX+j*cellW;
     var isActive=j<scores[i];
     ctx.fillStyle=isActive?getColor(j+1):'#1e1b4b';
     ctx.fillRect(x,y,cellW-3,cellH);
     ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=0.5;ctx.strokeRect(x,y,cellW-3,cellH);
     if(isActive){
      ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
      ctx.fillText(j+1,x+cellW/2-1,y+cellH/2+3);
     }
    }
   }
   var totalScore=scores.reduce(function(a,b){return a+b;},0);
   var maxPossible=100;
   var pct=totalScore/maxPossible;
   var grade=pct>=0.9?'S':pct>=0.7?'A':pct>=0.5?'B':pct>=0.3?'C':'D';
   var gc=grade==='S'?'#fbbf24':grade==='A'?'#a855f7':grade==='B'?'#3b82f6':grade==='C'?'#22c55e':'#9ca3af';
   ctx.fillStyle=gc;ctx.font='bold 28px sans-serif';ctx.textAlign='center';ctx.fillText(grade,575,80);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';ctx.fillText(totalScore+'/100',575,102);
   ctx.fillText('완성도',575,120);
   ctx.fillStyle='#1e1b4b';ctx.fillRect(130,375,450,16);
   var grd=ctx.createLinearGradient(130,0,130+450*pct,0);grd.addColorStop(0,'#a855f7');grd.addColorStop(1,'#ec4899');
   ctx.fillStyle=grd;ctx.fillRect(130,375,450*pct,16);
   ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(Math.round(pct*100)+'%',355,388);
  }
  draw();
  cv.onclick=function(evt){
   var rect=cv.getBoundingClientRect();
   var scaleX=620/rect.width;
   var mx=(evt.clientX-rect.left)*scaleX;
   var my=(evt.clientY-rect.top)*(400/rect.height);
   var startX=130,startY=55,cellW=45,cellH=28;
   var col=Math.floor((mx-startX)/cellW);
   var row=Math.floor((my-startY)/(cellH+4));
   if(col>=0&&col<10&&row>=0&&row<10){
    scores[row]=col+1;
    sfx22('phraseHit');ls22s('phrase-scores',scores);draw();
   }
  };
  var practiceBtn=document.getElementById('sv22-phrase-practice');
  var resetBtn=document.getElementById('sv22-phrase-reset');
  if(practiceBtn)practiceBtn.onclick=function(){
   sfx22('phraseStart');
   var idx=Math.floor(Math.random()*10);
   scores[idx]=Math.min(10,scores[idx]+Math.floor(Math.random()*3)+1);
   ls22s('phrase-scores',scores);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   scores=[0,0,0,0,0,0,0,0,0,0];ls22s('phrase-scores',scores);draw();
  };
 },200);
 return sec;
}

/* ── 4. 믹싱 이퀄라이저 시각화 Canvas 600x380 ── */
function createMixingEQ(){
 var sec=document.createElement('div');
 sec.id='sv22-mixing-eq';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#172554 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🎛️ 믹싱 이퀄라이저 시각화</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">10밴드 EQ 슬라이더 — 6가지 프리셋, 주파수 응답 커브</p>'+
  '<canvas id="sv22-eq-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;justify-content:center" id="sv22-eq-presets"></div>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-eq-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var bands=['31Hz','62Hz','125Hz','250Hz','500Hz','1kHz','2kHz','4kHz','8kHz','16kHz'];
  var presets={
   vocalBoost:{name:'보컬부스트',vals:[-2,0,2,4,6,8,6,4,2,0]},
   bassBoost:{name:'베이스부스트',vals:[8,6,4,2,0,-2,-2,-1,0,0]},
   trebleBoost:{name:'트레블부스트',vals:[0,0,-1,-2,0,2,4,6,8,8]},
   flat:{name:'플랫',vals:[0,0,0,0,0,0,0,0,0,0]},
   live:{name:'라이브',vals:[-2,0,2,3,4,4,3,2,1,-1]},
   podcast:{name:'팟캐스트',vals:[-4,-2,2,5,6,7,5,3,1,-2]}
  };
  var presetKeys=['vocalBoost','bassBoost','trebleBoost','flat','live','podcast'];
  var currentEQ=ls22('eq-data',presets.flat.vals.slice());
  var currentPreset=ls22('eq-preset','flat');
  var presetDiv=document.getElementById('sv22-eq-presets');
  presetKeys.forEach(function(pk){
   var btn=document.createElement('button');
   btn.textContent=presets[pk].name;
   btn.dataset.preset=pk;
   btn.style.cssText='padding:6px 12px;background:'+(pk===currentPreset?'#a855f7':'#312e81')+';color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.78em';
   btn.onclick=function(){
    currentPreset=pk;currentEQ=presets[pk].vals.slice();
    sfx22('mixAnalyze');ls22s('eq-data',currentEQ);ls22s('eq-preset',currentPreset);
    draw();
    presetDiv.querySelectorAll('button').forEach(function(b){b.style.background=b.dataset.preset===pk?'#a855f7':'#312e81';});
   };
   presetDiv.appendChild(btn);
  });
  function draw(){
   ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,600,380);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('믹싱 이퀄라이저 — '+presets[currentPreset].name,300,25);
   var bw=40,gap=12,startX=45,zeroY=200,maxH=130;
   ctx.strokeStyle='rgba(168,85,247,.2)';ctx.lineWidth=1;
   ctx.beginPath();ctx.moveTo(startX-10,zeroY);ctx.lineTo(startX+10*(bw+gap),zeroY);ctx.stroke();
   for(var dB=-12;dB<=12;dB+=6){
    var yPos=zeroY-dB/12*maxH;
    ctx.strokeStyle='rgba(168,85,247,.1)';ctx.beginPath();ctx.moveTo(startX-10,yPos);ctx.lineTo(startX+10*(bw+gap),yPos);ctx.stroke();
    ctx.fillStyle='#6366f1';ctx.font='9px sans-serif';ctx.textAlign='right';ctx.fillText(dB+'dB',startX-14,yPos+3);
   }
   for(var i=0;i<10;i++){
    var x=startX+i*(bw+gap);
    var val=currentEQ[i];
    var barH=val/12*maxH;
    var grd=ctx.createLinearGradient(x,zeroY,x,zeroY-barH);
    if(val>=0){grd.addColorStop(0,'#6366f1');grd.addColorStop(1,'#a855f7');}
    else{grd.addColorStop(0,'#ef4444');grd.addColorStop(1,'#6366f1');}
    ctx.fillStyle=grd;
    if(val>=0)ctx.fillRect(x,zeroY-barH,bw,barH);
    else ctx.fillRect(x,zeroY,bw,-barH);
    ctx.strokeStyle='rgba(255,255,255,.1)';ctx.strokeRect(x,val>=0?zeroY-barH:zeroY,bw,Math.abs(barH));
    ctx.fillStyle='#e2e8f0';ctx.font='9px sans-serif';ctx.textAlign='center';
    ctx.fillText(bands[i],x+bw/2,zeroY+maxH+20);
    ctx.fillStyle='#fbbf24';ctx.font='bold 10px sans-serif';
    var labelY=val>=0?zeroY-barH-8:zeroY-barH+14;
    ctx.fillText((val>=0?'+':'')+val,x+bw/2,labelY);
   }
   ctx.strokeStyle='#ec4899';ctx.lineWidth=2;ctx.beginPath();
   for(var j=0;j<10;j++){
    var cx2=startX+j*(bw+gap)+bw/2;
    var cy2=zeroY-currentEQ[j]/12*maxH;
    if(j===0)ctx.moveTo(cx2,cy2);
    else{
     var prevX=startX+(j-1)*(bw+gap)+bw/2;
     var prevY=zeroY-currentEQ[j-1]/12*maxH;
     var cpx=(prevX+cx2)/2;
     ctx.bezierCurveTo(cpx,prevY,cpx,cy2,cx2,cy2);
    }
   }
   ctx.stroke();
   for(var k=0;k<10;k++){
    var dotX=startX+k*(bw+gap)+bw/2;
    var dotY=zeroY-currentEQ[k]/12*maxH;
    ctx.fillStyle='#ec4899';ctx.beginPath();ctx.arc(dotX,dotY,4,0,Math.PI*2);ctx.fill();
   }
   ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='center';
   ctx.fillText('주파수 응답 커브',300,365);
  }
  draw();
  cv.onclick=function(evt){
   var rect=cv.getBoundingClientRect();
   var scaleX=600/rect.width;
   var mx=(evt.clientX-rect.left)*scaleX;
   var my=(evt.clientY-rect.top)*(380/rect.height);
   var bw2=40,gap2=12,startX2=45,zeroY2=200,maxH2=130;
   var bandIdx=Math.floor((mx-startX2)/(bw2+gap2));
   if(bandIdx>=0&&bandIdx<10){
    var newVal=Math.round((zeroY2-my)/maxH2*12);
    newVal=Math.max(-12,Math.min(12,newVal));
    currentEQ[bandIdx]=newVal;currentPreset='flat';
    ls22s('eq-data',currentEQ);ls22s('eq-preset',currentPreset);draw();
   }
  };
 },200);
 return sec;
}

/* ── 5. 관객 반응 예측기 Canvas 580x360 ── */
function createAudiencePredictor(){
 var sec=document.createElement('div');
 sec.id='sv22-audience';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#1e1b4b 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">👥 관객 반응 예측기</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">8가지 관객 유형 x 6축 Radar — 예상 반응 점수 및 코멘트</p>'+
  '<div id="sv22-audience-tabs" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;justify-content:center"></div>'+
  '<canvas id="sv22-audience-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-audience-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var audiences=[
   {name:'열광팬',data:[9,8,10,7,9,6],comment:'이미 당신의 팬! 뭘해도 환호!',score:92},
   {name:'음악평론가',data:[10,9,7,8,6,10],comment:'테크닉과 음정이 핵심 평가 요소',score:78},
   {name:'일반관객',data:[7,8,9,6,7,5],comment:'감정 전달이 잘 되면 감동!',score:85},
   {name:'프로듀서',data:[10,8,6,7,8,10],comment:'음정과 테크닉을 세밀하게 분석',score:72},
   {name:'친구',data:[6,7,10,8,9,4],comment:'노래보다 함께하는 시간이 중요!',score:95},
   {name:'가족',data:[5,6,10,9,8,3],comment:'응원과 격려가 가득한 관객',score:98},
   {name:'처음본사람',data:[8,9,7,8,7,7],comment:'첫인상이 중요! 무대매너 주목',score:80},
   {name:'라이벌',data:[10,10,5,6,7,10],comment:'완벽한 실력으로 압도해야 인정',score:65}
  ];
  var axes=['음정','리듬','감정','무대매너','개성','테크닉'];
  var sel=0;
  var tabDiv=document.getElementById('sv22-audience-tabs');
  audiences.forEach(function(a,i){
   var btn=document.createElement('button');
   btn.textContent=a.name;
   btn.style.cssText='padding:5px 10px;background:'+(i===0?'#a855f7':'#312e81')+';color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.78em';
   btn.onclick=function(){sel=i;sfx22('audienceReact');draw();
    tabDiv.querySelectorAll('button').forEach(function(b,j){b.style.background=j===i?'#a855f7':'#312e81';});};
   tabDiv.appendChild(btn);
  });
  function draw(){
   ctx.clearRect(0,0,580,360);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,580,360);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('관객 반응 예측 — '+audiences[sel].name,290,25);
   var cx=200,cy=195,r=110;
   for(var ring=1;ring<=5;ring++){
    ctx.strokeStyle='rgba(168,85,247,'+(0.1+ring*0.04)+')';ctx.lineWidth=1;ctx.beginPath();
    for(var a=0;a<6;a++){
     var angle=-Math.PI/2+a*Math.PI/3;
     var px=cx+Math.cos(angle)*r*ring/5;var py=cy+Math.sin(angle)*r*ring/5;
     if(a===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
    }
    ctx.closePath();ctx.stroke();
   }
   for(var a2=0;a2<6;a2++){
    var ang2=-Math.PI/2+a2*Math.PI/3;
    ctx.strokeStyle='rgba(168,85,247,.15)';ctx.beginPath();ctx.moveTo(cx,cy);
    ctx.lineTo(cx+Math.cos(ang2)*r,cy+Math.sin(ang2)*r);ctx.stroke();
    ctx.fillStyle='#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='center';
    ctx.fillText(axes[a2],cx+Math.cos(ang2)*(r+18),cy+Math.sin(ang2)*(r+18)+4);
   }
   ctx.fillStyle='rgba(168,85,247,.25)';ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.beginPath();
   for(var a3=0;a3<6;a3++){
    var ang3=-Math.PI/2+a3*Math.PI/3;
    var val=audiences[sel].data[a3]/10;
    var px3=cx+Math.cos(ang3)*r*val;var py3=cy+Math.sin(ang3)*r*val;
    if(a3===0)ctx.moveTo(px3,py3);else ctx.lineTo(px3,py3);
   }
   ctx.closePath();ctx.fill();ctx.stroke();
   for(var a4=0;a4<6;a4++){
    var ang4=-Math.PI/2+a4*Math.PI/3;var val4=audiences[sel].data[a4]/10;
    ctx.fillStyle='#c084fc';ctx.beginPath();
    ctx.arc(cx+Math.cos(ang4)*r*val4,cy+Math.sin(ang4)*r*val4,4,0,Math.PI*2);ctx.fill();
   }
   var startY=60;
   ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='left';
   for(var a5=0;a5<6;a5++){
    ctx.fillStyle='#a78bfa';ctx.fillText(axes[a5],380,startY+a5*28);
    ctx.fillStyle='#1e1b4b';ctx.fillRect(440,startY+a5*28-10,100,14);
    var pct5=audiences[sel].data[a5]/10;
    var g5=ctx.createLinearGradient(440,0,440+100*pct5,0);g5.addColorStop(0,'#a855f7');g5.addColorStop(1,'#ec4899');
    ctx.fillStyle=g5;ctx.fillRect(440,startY+a5*28-10,100*pct5,14);
    ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(audiences[sel].data[a5]+'/10',440+50,startY+a5*28+1);
    ctx.font='11px sans-serif';
   }
   var sc=audiences[sel].score;
   var sGrade=sc>=90?'S':sc>=75?'A':sc>=60?'B':sc>=40?'C':'D';
   var sgc=sGrade==='S'?'#fbbf24':sGrade==='A'?'#a855f7':sGrade==='B'?'#3b82f6':sGrade==='C'?'#22c55e':'#9ca3af';
   ctx.fillStyle=sgc;ctx.font='bold 22px sans-serif';ctx.textAlign='center';ctx.fillText(sGrade,490,250);
   ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.fillText('예상 '+sc+'점',490,270);
   ctx.fillStyle='#fbbf24';ctx.font='12px sans-serif';ctx.textAlign='center';
   ctx.fillText('💬 '+audiences[sel].comment,290,340);
  }
  draw();
 },200);
 return sec;
}

/* ── 6. 보컬 스타일 DNA 분석기 Canvas 620x400 ── */
function createVocalDNA(){
 var sec=document.createElement('div');
 sec.id='sv22-vocal-dna';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#2d1b69 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🦎 보컬 스타일 DNA 분석기</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">12개 보컬 특성 도넛차트 — DNA 프로필, 유사 아티스트 매칭</p>'+
  '<canvas id="sv22-dna-cv" width="620" height="400" style="width:100%;max-width:620px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;justify-content:center">'+
  '<button id="sv22-dna-analyze" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔬 DNA 분석</button>'+
  '<button id="sv22-dna-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-dna-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var traits=['음정정확도','고음파워','저음깊이','비브라토','감정전달','리듬감','음색독특성','호흡안정','가사전달','무대매력','테크닉','카리스마'];
  var colors=['#ef4444','#f97316','#fbbf24','#22c55e','#14b8a6','#06b6d4','#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899','#f43f5e'];
  var dnaData=ls22('dna-data',null);
  if(!dnaData)dnaData=traits.map(function(){return 0;});
  var artists=[
   {name:'아이유',profile:[9,7,6,8,10,7,9,8,9,9,8,9]},
   {name:'태양',profile:[9,10,8,9,9,9,8,9,7,10,9,10]},
   {name:'백예린',profile:[8,6,7,7,10,7,10,8,9,7,7,8]},
   {name:'나얼',profile:[10,9,9,10,9,8,8,9,8,8,10,8]},
   {name:'로제',profile:[8,9,6,7,9,8,9,7,8,10,7,9]}
  ];
  function draw(){
   ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('보컬 스타일 DNA 분석기',310,25);
   var cx=190,cy=210,outerR=130,innerR=65;
   var total=dnaData.reduce(function(a,b){return a+b;},0);
   if(total===0){
    ctx.fillStyle='#1e1b4b';ctx.beginPath();ctx.arc(cx,cy,outerR,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#0d0520';ctx.beginPath();ctx.arc(cx,cy,innerR,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#a78bfa';ctx.font='13px sans-serif';ctx.textAlign='center';
    ctx.fillText('DNA 분석을',cx,cy-5);ctx.fillText('시작하세요',cx,cy+12);
   }else{
    var startAngle=-Math.PI/2;
    for(var i=0;i<12;i++){
     var sliceAngle=dnaData[i]/total*Math.PI*2;
     if(sliceAngle>0){
      ctx.fillStyle=colors[i];ctx.beginPath();
      ctx.moveTo(cx+Math.cos(startAngle)*innerR,cy+Math.sin(startAngle)*innerR);
      ctx.arc(cx,cy,outerR,startAngle,startAngle+sliceAngle);
      ctx.arc(cx,cy,innerR,startAngle+sliceAngle,startAngle,true);
      ctx.closePath();ctx.fill();
     }
     startAngle+=sliceAngle;
    }
    ctx.fillStyle='#0d0520';ctx.beginPath();ctx.arc(cx,cy,innerR,0,Math.PI*2);ctx.fill();
    var maxTrait=0,maxIdx=0;
    dnaData.forEach(function(v,i){if(v>maxTrait){maxTrait=v;maxIdx=i;}});
    ctx.fillStyle='#e2e8f0';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
    ctx.fillText('핵심 특성',cx,cy-5);
    ctx.fillStyle=colors[maxIdx];ctx.font='bold 11px sans-serif';
    ctx.fillText(traits[maxIdx],cx,cy+12);
   }
   var legendX=370,legendY=50;
   for(var j=0;j<12;j++){
    ctx.fillStyle=colors[j];ctx.fillRect(legendX,legendY+j*25,12,12);
    ctx.fillStyle='#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText(traits[j],legendX+18,legendY+j*25+10);
    ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='right';
    ctx.fillText(dnaData[j],legendX+130,legendY+j*25+10);
   }
   if(total>0){
    ctx.fillStyle='#fbbf24';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
    ctx.fillText('유사 아티스트',370,370);
    var matches=artists.map(function(ar){
     var sim=0;
     for(var k=0;k<12;k++){
      var norm=dnaData[k]/Math.max.apply(null,dnaData)*10;
      sim+=10-Math.abs(norm-ar.profile[k]);
     }
     return{name:ar.name,score:Math.round(sim/12*10)};
    }).sort(function(a,b){return b.score-a.score;});
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';
    for(var m=0;m<Math.min(5,matches.length);m++){
     ctx.fillText(matches[m].name+' '+matches[m].score+'%',440+m*0,388);
    }
    var matchStr=matches.slice(0,5).map(function(x){return x.name+'('+x.score+'%)';}).join(' ');
    ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText(matchStr,310,388);
   }
  }
  draw();
  var analyzeBtn=document.getElementById('sv22-dna-analyze');
  var resetBtn=document.getElementById('sv22-dna-reset');
  if(analyzeBtn)analyzeBtn.onclick=function(){
   sfx22('styleMatch');
   for(var i=0;i<12;i++){dnaData[i]=Math.floor(Math.random()*8)+3;}
   ls22s('dna-data',dnaData);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   dnaData=traits.map(function(){return 0;});ls22s('dna-data',dnaData);draw();
  };
 },200);
 return sec;
}

/* ── 7. 노래 난이도 적응 트레이너 Canvas 580x360 ── */
function createDifficultyTrainer(){
 var sec=document.createElement('div');
 sec.id='sv22-difficulty';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#1e3a5f 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🏋️ 노래 난이도 적응 트레이너</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">5단계 x 8미션 프로그레스 그리드 — 자동 레벨업 시스템</p>'+
  '<canvas id="sv22-diff-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;justify-content:center">'+
  '<button id="sv22-diff-train" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🏋️ 훈련 시작</button>'+
  '<button id="sv22-diff-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-diff-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var levels=['입문','초급','중급','고급','마스터'];
  var missions=['음정유지','고음도전','리듬정확','빠른가사','감정표현','테크닉','듀엣파트','종합평가'];
  var levelColors=['#22c55e','#3b82f6','#a855f7','#ec4899','#fbbf24'];
  var grid=ls22('diff-grid',null);
  if(!grid)grid=levels.map(function(){return missions.map(function(){return 0;});});
  var currentLevel=ls22('diff-level',0);
  function draw(){
   ctx.clearRect(0,0,580,360);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,580,360);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('난이도 적응 트레이너 — 5단계 × 8미션',290,25);
   var cellW=55,cellH=40,startX=95,startY=65;
   for(var m=0;m<8;m++){
    ctx.save();ctx.translate(startX+m*cellW+cellW/2,startY-8);
    ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='center';
    ctx.fillText(missions[m],0,0);ctx.restore();
   }
   for(var l=0;l<5;l++){
    var y=startY+l*(cellH+6);
    ctx.fillStyle=levelColors[l];ctx.font='bold 11px sans-serif';ctx.textAlign='right';
    ctx.fillText(levels[l],startX-10,y+cellH/2+4);
    if(l===currentLevel){
     ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(startX-2,y-2,8*cellW+4,cellH+4);
    }
    for(var m2=0;m2<8;m2++){
     var x=startX+m2*cellW;var val=grid[l][m2];
     var locked=l>currentLevel;
     if(locked){ctx.fillStyle='#0f0a1a';ctx.fillRect(x,y,cellW-3,cellH);
      ctx.fillStyle='#333';ctx.font='14px sans-serif';ctx.textAlign='center';ctx.fillText('🔒',x+cellW/2-1,y+cellH/2+5);
     }else if(val>=100){
      ctx.fillStyle='rgba(34,197,94,.3)';ctx.fillRect(x,y,cellW-3,cellH);
      ctx.fillStyle='#22c55e';ctx.font='bold 14px sans-serif';ctx.textAlign='center';ctx.fillText('✓',x+cellW/2-1,y+cellH/2+5);
     }else{
      ctx.fillStyle='#1e1b4b';ctx.fillRect(x,y,cellW-3,cellH);
      var pct=val/100;
      ctx.fillStyle=levelColors[l];ctx.globalAlpha=0.3;ctx.fillRect(x,y+cellH*(1-pct),cellW-3,cellH*pct);ctx.globalAlpha=1;
      ctx.fillStyle='#e2e8f0';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(val+'%',x+cellW/2-1,y+cellH/2+4);
     }
     ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=0.5;ctx.strokeRect(x,y,cellW-3,cellH);
    }
   }
   var totalDone=0,totalCells=0;
   grid.forEach(function(row,l2){row.forEach(function(v){if(l2<=currentLevel){totalCells++;if(v>=100)totalDone++;}});});
   ctx.fillStyle='#1e1b4b';ctx.fillRect(95,310,440,20);
   var overallPct=totalCells?totalDone/totalCells:0;
   var grd=ctx.createLinearGradient(95,0,95+440*overallPct,0);grd.addColorStop(0,'#a855f7');grd.addColorStop(1,'#ec4899');
   ctx.fillStyle=grd;ctx.fillRect(95,310,440*overallPct,20);
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
   ctx.fillText(totalDone+'/'+totalCells+' 미션 완료',315,324);
   ctx.fillStyle=levelColors[currentLevel];ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('현재 단계: '+levels[currentLevel],290,352);
  }
  draw();
  var trainBtn=document.getElementById('sv22-diff-train');
  var resetBtn=document.getElementById('sv22-diff-reset');
  if(trainBtn)trainBtn.onclick=function(){
   sfx22('phraseStart');
   var incomplete=[];
   for(var m=0;m<8;m++){if(grid[currentLevel][m]<100)incomplete.push(m);}
   if(incomplete.length===0){
    if(currentLevel<4){currentLevel++;ls22s('diff-level',currentLevel);sfx22('mixComplete');}
    draw();return;
   }
   var idx=incomplete[Math.floor(Math.random()*incomplete.length)];
   grid[currentLevel][idx]=Math.min(100,grid[currentLevel][idx]+Math.floor(Math.random()*25)+10);
   var allDone=grid[currentLevel].every(function(v){return v>=100;});
   if(allDone&&currentLevel<4){currentLevel++;ls22s('diff-level',currentLevel);sfx22('mixComplete');}
   ls22s('diff-grid',grid);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   grid=levels.map(function(){return missions.map(function(){return 0;});});currentLevel=0;
   ls22s('diff-grid',grid);ls22s('diff-level',currentLevel);draw();
  };
 },200);
 return sec;
}

/* ── 8. 멜로디 메모리 게임 Canvas 600x380 ── */
function createMelodyMemory(){
 var sec=document.createElement('div');
 sec.id='sv22-melody-memory';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#312e81 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🧶 멜로디 메모리 게임</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">8음 시퀀스 기억 게임 — 라운드별 난이도 상승, 최고 기록 도전</p>'+
  '<canvas id="sv22-memory-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;justify-content:center">'+
  '<button id="sv22-memory-start" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎮 게임 시작</button>'+
  '<button id="sv22-memory-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv22-memory-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var noteNames=['도','레','미','파','솔','라','시','도↑'];
  var noteFreqs=[C4,D4,E4,F4,G4,A4,B4,C5];
  var noteColors=['#ef4444','#f97316','#fbbf24','#22c55e','#06b6d4','#3b82f6','#8b5cf6','#ec4899'];
  var round=ls22('mem-round',1);
  var score=ls22('mem-score',0);
  var bestRound=ls22('mem-best',0);
  var sequence=[];
  var playerInput=[];
  var phase='idle';
  var showIdx=-1;
  var highlightNote=-1;
  function getSeqLen(){return Math.min(round+2,8);}
  function generateSequence(){
   sequence=[];var len=getSeqLen();
   for(var i=0;i<len;i++)sequence.push(Math.floor(Math.random()*8));
  }
  function playNote(noteIdx){
   var ac=getAC22();if(!ac)return;
   var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
   o.connect(g);g.connect(ac.destination);o.type='sine';
   o.frequency.setValueAtTime(noteFreqs[noteIdx],t);
   g.gain.setValueAtTime(0.2,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.4);
   o.start(t);o.stop(t+0.4);
  }
  function draw(){
   ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,600,380);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('멜로디 메모리 게임',300,25);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';
   ctx.fillText('라운드 '+round+' | 시퀀스 길이: '+getSeqLen()+'음',300,48);
   var keyW=60,keyH=120,startX=60,startY=80;
   for(var i=0;i<8;i++){
    var x=startX+i*(keyW+8);
    var isHighlight=i===highlightNote;
    var isShowing=phase==='showing'&&i===sequence[showIdx];
    ctx.fillStyle=isHighlight||isShowing?noteColors[i]:'#1e1b4b';
    ctx.fillRect(x,startY,keyW,keyH);
    ctx.strokeStyle=noteColors[i];ctx.lineWidth=2;ctx.strokeRect(x,startY,keyW,keyH);
    ctx.fillStyle=isHighlight||isShowing?'#fff':noteColors[i];
    ctx.font='bold 16px sans-serif';ctx.textAlign='center';
    ctx.fillText(noteNames[i],x+keyW/2,startY+keyH/2+6);
   }
   if(phase==='showing'){
    ctx.fillStyle='#fbbf24';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
    ctx.fillText('🎵 듣고 기억하세요! ('+(showIdx+1)+'/'+sequence.length+')',300,230);
   }else if(phase==='input'){
    ctx.fillStyle='#22c55e';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
    ctx.fillText('🎹 순서대로 눌러보세요! ('+playerInput.length+'/'+sequence.length+')',300,230);
   }else if(phase==='correct'){
    ctx.fillStyle='#22c55e';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText('🎉 정답! 다음 라운드로!',300,230);
   }else if(phase==='wrong'){
    ctx.fillStyle='#ef4444';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText('❌ 틀렸습니다! 다시 도전!',300,230);
   }else{
    ctx.fillStyle='#a78bfa';ctx.font='14px sans-serif';ctx.textAlign='center';
    ctx.fillText('[게임 시작]을 눌러 시작하세요',300,230);
   }
   ctx.fillStyle='#e2e8f0';ctx.font='12px sans-serif';ctx.textAlign='left';
   ctx.fillText('점수: '+score,40,270);ctx.fillText('최고 라운드: '+bestRound,40,290);
   var roundLabels=['R1(3음)','R2(4음)','R3(5음)','R4(6음)','R5(7음)','R6(8음)'];
   ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText('라운드 진행',300,310);
   for(var r=0;r<6;r++){
    var rx=130+r*60;
    ctx.fillStyle=r<round?'#22c55e':r===round-1?'#a855f7':'#1e1b4b';
    ctx.fillRect(rx,320,50,24);
    ctx.fillStyle=r<round?'#fff':'#666';ctx.font='9px sans-serif';
    ctx.fillText(roundLabels[r],rx+25,336);
   }
   var speedLabel=round<=2?'느림':round<=4?'보통':'빠름';
   ctx.fillStyle='#6366f1';ctx.font='11px sans-serif';ctx.textAlign='right';
   ctx.fillText('속도: '+speedLabel,560,270);
   ctx.fillText('난이도: '+'⭐'.repeat(Math.min(round,5)),560,290);
  }
  draw();
  function showSequence(){
   phase='showing';showIdx=0;draw();
   var speed=round<=2?800:round<=4?600:400;
   var interval=setInterval(function(){
    playNote(sequence[showIdx]);highlightNote=sequence[showIdx];draw();
    setTimeout(function(){highlightNote=-1;draw();},speed*0.6);
    showIdx++;
    if(showIdx>=sequence.length){clearInterval(interval);phase='input';playerInput=[];draw();}
   },speed);
  }
  cv.onclick=function(evt){
   if(phase!=='input')return;
   var rect=cv.getBoundingClientRect();
   var scaleX=600/rect.width;
   var mx=(evt.clientX-rect.left)*scaleX;
   var my=(evt.clientY-rect.top)*(380/rect.height);
   var keyW2=60,startX2=60,startY2=80,keyH2=120;
   if(my<startY2||my>startY2+keyH2)return;
   var noteIdx=Math.floor((mx-startX2)/(keyW2+8));
   if(noteIdx<0||noteIdx>=8)return;
   playNote(noteIdx);highlightNote=noteIdx;draw();
   setTimeout(function(){highlightNote=-1;draw();},200);
   playerInput.push(noteIdx);
   if(playerInput[playerInput.length-1]!==sequence[playerInput.length-1]){
    phase='wrong';sfx22('quizWrong22');
    score=Math.max(0,score-5);
    ls22s('mem-score',score);draw();
    setTimeout(function(){phase='idle';draw();},1500);
    return;
   }
   if(playerInput.length===sequence.length){
    phase='correct';sfx22('quizCorrect22');
    score+=round*10;
    if(round>bestRound)bestRound=round;
    round=Math.min(round+1,6);
    ls22s('mem-round',round);ls22s('mem-score',score);ls22s('mem-best',bestRound);
    draw();
    setTimeout(function(){phase='idle';draw();},1500);
   }
  };
  var startBtn=document.getElementById('sv22-memory-start');
  var resetBtn=document.getElementById('sv22-memory-reset');
  if(startBtn)startBtn.onclick=function(){
   generateSequence();playerInput=[];phase='idle';draw();
   setTimeout(function(){showSequence();},500);
  };
  if(resetBtn)resetBtn.onclick=function(){
   round=1;score=0;sequence=[];playerInput=[];phase='idle';highlightNote=-1;
   ls22s('mem-round',round);ls22s('mem-score',score);draw();
  };
 },200);
 return sec;
}

/* ── Mount v22 sections ── */
function mountV22(){
 var target=document.getElementById('songSelect')||document.querySelector('.song-list')||document.querySelector('main')||document.body;
 var container=document.createElement('div');
 container.id='sv22-container';
 container.style.cssText='grid-column:1/-1;padding:0 4px';
 var header=document.createElement('div');
 header.style.cssText='text-align:center;padding:16px 0 8px;border-bottom:1px solid rgba(168,85,247,.2);margin-bottom:12px';
 header.innerHTML='<span style="background:linear-gradient(135deg,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:bold;font-size:1.1em">🎤 StarVoice v22 — 워밍업+호흡컨트롤+프레이즈+이퀄라이저+관객예측+보컬DNA+난이도트레이너+멜로디메모리</span>';
 container.appendChild(header);
 container.appendChild(createVocalWarmup());
 container.appendChild(createBreathControl());
 container.appendChild(createPhraseMaker());
 container.appendChild(createMixingEQ());
 container.appendChild(createAudiencePredictor());
 container.appendChild(createVocalDNA());
 container.appendChild(createDifficultyTrainer());
 container.appendChild(createMelodyMemory());
 if(target.children.length>2)target.insertBefore(container,target.children[2]);
 else target.appendChild(container);
}

/* ── Nav buttons v22 ── */
function addV22Nav(){
 var nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
 if(!nav){var wt=0;(function waitNav(){if(wt++<30)setTimeout(function(){
  nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
  if(nav)appendNavBtns22(nav);else waitNav();},500);})();return;}
 appendNavBtns22(nav);
}
function appendNavBtns22(nav){
 var items=[
  {label:'🔥워밍업',target:'sv22-vocal-warmup'},
  {label:'🌬️호흡',target:'sv22-breath-control'},
  {label:'🎨프레이즈',target:'sv22-phrase-maker'},
  {label:'🎛️이퀄라이저',target:'sv22-mixing-eq'},
  {label:'👥관객예측',target:'sv22-audience'},
  {label:'🦎보컬DNA',target:'sv22-vocal-dna'},
  {label:'🏋️난이도',target:'sv22-difficulty'},
  {label:'🧶멜로디',target:'sv22-melody-memory'}
 ];
 items.forEach(function(it){
  var b=document.createElement('button');
  b.textContent=it.label;
  b.style.cssText='flex:0 0 auto;padding:6px 10px;font-size:11px;color:#c084fc;background:transparent;border:none;cursor:pointer;white-space:nowrap';
  b.onclick=function(){var el=document.getElementById(it.target);if(el)el.scrollIntoView({behavior:'smooth'});sfx22('navClick22');};
  nav.appendChild(b);
 });
}

/* ── Keyboard shortcuts v22 (Shift+Q/W/E/R/T/Y/U/I) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var targets={KeyQ:'sv22-vocal-warmup',KeyW:'sv22-breath-control',KeyE:'sv22-phrase-maker',
  KeyR:'sv22-mixing-eq',KeyT:'sv22-audience',KeyY:'sv22-vocal-dna',
  KeyU:'sv22-difficulty',KeyI:'sv22-melody-memory'};
 var t=targets[e.code];
 if(t){e.preventDefault();var el=document.getElementById(t);if(el)el.scrollIntoView({behavior:'smooth'});sfx22('navClick22');}
});

/* ── Init ── */
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',function(){setTimeout(mountV22,950);setTimeout(addV22Nav,1350);});
}else{setTimeout(mountV22,950);setTimeout(addV22Nav,1350);}

})();
