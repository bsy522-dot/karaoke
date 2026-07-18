/* StarVoice v21 Patch — Self-contained IIFE module injected via SW
 * +10 songs(175->185), PitchCorrectionFeedback Canvas, VocalStaminaTrainer Canvas,
 * GenreVocalTechniqueGuide Canvas, AISongRecommendation Canvas,
 * VocalHarmonicsAnalyzer Canvas, WeeklyRankingSimulator Canvas,
 * EmotionExpressionMatrix Canvas, LiveStageSimulator Canvas,
 * quiz +15(207->222), achievements +12(174->186), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v21KaraokeLoaded) return;
window.__v21KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;

function ls21(k,d){try{var v=localStorage.getItem('sv21-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls21s(k,v){try{localStorage.setItem('sv21-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (176-185) ── */
var v21Songs=[
{id:176,title:'Whiplash',artist:'aespa',bpm:132,key:'Bb',difficulty:5,genre:'dance',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['Whip','lash','터','지','는','비','트','에','몸','을','맡','겨','봐','지','금','당장'],
 duration:[341,341,341,682,341,341,341,341,341,341,341,682,341,341,341,341]},
{id:177,title:'Supernatural',artist:'NewJeans',bpm:118,key:'Ab',difficulty:4,genre:'pop',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db5,F4,Ab4,G4,F4,Eb4,Db5],
 lyrics:['Su','per','na','tu','ral','느','낌','이','와','너','를','만','날','때','마','다'],
 duration:[381,381,381,763,381,381,381,381,381,381,381,763,381,381,381,381]},
{id:178,title:'POWER',artist:'G-DRAGON',bpm:142,key:'E',difficulty:5,genre:'hiphop',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['Power','up','나','의','세','상','을','바','꿔','놓','을','테','니','까','다','가와'],
 duration:[317,317,317,634,317,317,317,317,317,317,317,634,317,317,317,317]},
{id:179,title:'Candy',artist:'NCT DREAM',bpm:108,key:'D',difficulty:3,genre:'pop',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['Can','dy','달','콤','한','너','에','게','빠','져','들','어','가','는','중','이야'],
 duration:[417,417,417,833,417,417,417,417,417,417,417,833,417,417,417,417]},
{id:180,title:'Ditto',artist:'NewJeans',bpm:100,key:'G',difficulty:3,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['I','see','dit','to','그','대','만','을','원','해','요','나','는','매','일','밤'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:181,title:'Drama',artist:'aespa',bpm:136,key:'Cm',difficulty:5,genre:'dance',
 notes:[C4,Eb4,G4,C5,B4,G4,Eb4,C4,D4,F4,Ab4,C5,B4,Ab4,G4,F4],
 lyrics:['Dra','ma','속','주','인','공','이','될','래','나','와','함','께','라','면','돼'],
 duration:[331,331,331,662,331,331,331,331,331,331,331,662,331,331,331,331]},
{id:182,title:'사건의 지평선',artist:'윤하',bpm:84,key:'Eb',difficulty:4,genre:'ballad',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['한','번','쯤','은','너','도','나','처','럼','외','로','운','날','이','있','을까'],
 duration:[536,536,536,1071,536,536,536,536,536,536,536,1071,536,536,536,536]},
{id:183,title:'Seven',artist:'정국',bpm:125,key:'Bb',difficulty:3,genre:'pop',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['Mon','day','Tues','day','Wed','nes','day','Thurs','day','Fri','day','Sa','tur','day','Sun','day'],
 duration:[360,360,360,720,360,360,360,360,360,360,360,720,360,360,360,360]},
{id:184,title:'Super Shy',artist:'NewJeans',bpm:133,key:'C',difficulty:3,genre:'pop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['Su','per','shy','su','per','shy','널','보','면','na','na','na','I','get','su','per'],
 duration:[338,338,338,677,338,338,338,338,338,338,338,677,338,338,338,338]},
{id:185,title:'이브, 프시케 그리고 푸른 수염의 아내',artist:'LE SSERAFIM',bpm:146,key:'F#m',difficulty:5,genre:'dance',
 notes:[Fs3,A3,Cs4,Fs4,E4,Cs4,A3,Fs3,Gs3,B3,Ds4,Fs4,E4,Ds4,Cs4,B3],
 lyrics:['난','파','란','수','염','의','아','내','가','될','수','있','을','까','나','는'],
 duration:[308,308,308,616,308,308,308,308,308,308,308,616,308,308,308,308]}
];
(function injectSongs21(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v21Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v21 (12 sounds) ── */
var actx21=null;
function getAC21(){if(!actx21)try{actx21=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx21;}
function sfx21(type){
 var ac=getAC21();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  pitchScan:{f:523,d:.45,wave:'sine',gS:.2,gE:0},
  pitchCorrect:{f:659,d:.35,wave:'triangle',gS:.22,gE:0},
  staminaUp:{f:440,d:.5,wave:'sine',gS:.2,gE:0},
  staminaComplete:{f:880,d:.55,wave:'triangle',gS:.28,gE:0},
  genreSelect:{f:392,d:.3,wave:'sine',gS:.18,gE:0},
  songRecommend:{f:587,d:.4,wave:'triangle',gS:.22,gE:0},
  harmonicScan:{f:698,d:.5,wave:'sine',gS:.2,gE:0},
  rankUpdate:{f:784,d:.4,wave:'triangle',gS:.25,gE:0},
  emotionMatch:{f:349,d:.35,wave:'sine',gS:.18,gE:0},
  stageCheer:{f:1047,d:.5,wave:'triangle',gS:.3,gE:0},
  quizCorrect21:{f:1175,d:.3,wave:'triangle',gS:.22,gE:0},
  quizWrong21:{f:185,d:.4,wave:'sawtooth',gS:.1,gE:0},
  achieve21:{f:1319,d:.6,wave:'triangle',gS:.32,gE:0},
  navClick21:{f:740,d:.2,wave:'sine',gS:.15,gE:0}
 };
 var c=cfg[type]||cfg.pitchScan;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='pitchCorrect'){o.frequency.setValueAtTime(c.f*0.9,t);o.frequency.exponentialRampToValueAtTime(c.f*1.1,t+c.d*0.5);o.frequency.exponentialRampToValueAtTime(c.f,t+c.d);}
 if(type==='staminaComplete'){o.frequency.setValueAtTime(c.f*0.7,t);o.frequency.exponentialRampToValueAtTime(c.f*1.3,t+c.d);}
 if(type==='stageCheer'){o.frequency.setValueAtTime(c.f,t);o.frequency.exponentialRampToValueAtTime(c.f*1.5,t+c.d*0.3);o.frequency.exponentialRampToValueAtTime(c.f*0.8,t+c.d);}
 if(type==='rankUpdate'){o.frequency.setValueAtTime(c.f*0.8,t);o.frequency.exponentialRampToValueAtTime(c.f*1.2,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Quiz v21 (+15 questions, 207->222) ── */
var v21Quiz=[
{q:'&quot;벨칸토(Bel Canto)&quot; 창법의 의미는?',a:['아름다운 노래 (이탈리아 성악 발성법)','빠르게 노래하기','큰 소리로 노래하기','낮은 음으로 노래하기'],c:0},
{q:'노래할 때 &quot;디크레센도(Decrescendo)&quot;란?',a:['점점 여리게','점점 세게','일정하게 유지','갑자기 멈추기'],c:0},
{q:'보컬에서 &quot;팔세토(Falsetto)&quot;와 &quot;헤드보이스&quot;의 차이는?',a:['팔세토는 성대 불완전 접촉, 헤드보이스는 완전 접촉','둘은 완전히 같다','팔세토가 더 낮다','헤드보이스는 비음이다'],c:0},
{q:'노래방에서 &quot;키 변경(Key Change)&quot; +2의 의미는?',a:['원키보다 반음 2개 올림','템포 2배 증가','볼륨 2단계 증가','반복 2회'],c:0},
{q:'K-POP &quot;고음 파트&quot;에서 주로 사용하는 발성은?',a:['믹스보이스 (혼성 발성)','속삭임 발성','비성 발성','흉성만 사용'],c:0},
{q:'보컬 녹음 시 &quot;디에싱(De-essing)&quot;이란?',a:['치찰음(ㅅ,ㅈ) 억제 처리','저음 부스트','리버브 추가','음정 보정'],c:0},
{q:'노래의 &quot;브릿지(Bridge)&quot; 파트란?',a:['절과 후렴구 사이 전환부','인트로 부분','아웃트로 부분','간주 구간'],c:0},
{q:'&quot;멜리스마(Melisma)&quot; 창법이란?',a:['하나의 음절에 여러 음을 연결','한 음만 길게 유지','빠르게 발음 전환','비브라토 없이 부르기'],c:0},
{q:'보컬에서 &quot;서포트(Support)&quot;란?',a:['복근과 횡격막으로 호흡을 지지하는 것','마이크를 잡는 방법','반주를 듣는 것','가사를 외우는 것'],c:0},
{q:'StarMaker 앱의 주요 특징은?',a:['실시간 음정 피드백과 소셜 듀엣','오프라인만 지원','악기 연주 전용','작곡 전용 앱'],c:0},
{q:'&quot;포르타멘토(Portamento)&quot;란?',a:['한 음에서 다른 음으로 미끄러지듯 이동','빠르게 끊어 부르기','같은 음 반복','침묵 구간'],c:0},
{q:'보컬 트레이닝에서 &quot;모음 순화(Vowel Modification)&quot;란?',a:['고음에서 모음 형태를 조절해 발성 안정화','자음만 발음 연습','가사 변경','키 변경'],c:0},
{q:'노래할 때 &quot;릴리즈(Release)&quot;란?',a:['음을 끝내는 방법과 기법','곡을 발매하기','마이크를 놓기','호흡을 멈추기'],c:0},
{q:'&quot;소프라노&quot;와 &quot;알토&quot;의 음역대 차이는?',a:['소프라노가 알토보다 높은 음역대','같은 음역대','알토가 더 높다','남성 음역대 분류이다'],c:0},
{q:'보컬에서 &quot;어피지오(Appoggiatura)&quot;란?',a:['장식음 중 하나로 주음 전 짧은 음 추가','반복 기호','속도 표시','강세 표시'],c:0}
];
(function injectQuiz21(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v21Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v21 (+12, 174->186) ── */
var v21Achievements=[
{id:'pitch_corrector',title:'음정 교정사',desc:'음정교정 피드백 S등급 달성',icon:'🎯'},
{id:'stamina_warrior',title:'스태미나 전사',desc:'보컬 스태미나 10단계 클리어',icon:'🔥'},
{id:'genre_explorer_v21',title:'장르 여행가',desc:'장르별 발성법 10장르 탐구',icon:'🌍'},
{id:'song_recommender',title:'곡추천 달인',desc:'AI 곡추천 20회 활용',icon:'🤖'},
{id:'harmonics_master',title:'배음 마스터',desc:'보컬 하모닉스 분석 완료',icon:'🔬'},
{id:'ranking_champion',title:'랭킹 챔피언',desc:'주간 랭킹 1위 달성',icon:'🏆'},
{id:'emotion_actor',title:'감정 배우',desc:'감정표현 매트릭스 전체 S등급',icon:'🎭'},
{id:'stage_performer',title:'무대의 별',desc:'라이브 무대 시뮬 퍼펙트 달성',icon:'⭐'},
{id:'quiz_v21_master',title:'퀴즈 v21 마스터',desc:'v21 퀴즈 전문 S등급',icon:'🧠'},
{id:'song_185',title:'185곡 마스터',desc:'185번째 곡 노래하기',icon:'🎵'},
{id:'v21_explorer',title:'v21 탐험가',desc:'v21 기능 모두 체험',icon:'🔭'},
{id:'v21_complete',title:'v21 컴플리트',desc:'v21 모든 업적 달성',icon:'👑'}
];
(function injectAchievements21(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v21Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
   if(typeof window.renderAchievements==='function')window.renderAchievements();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── 1. Pitch Correction Feedback System Canvas 580x360 ── */
function createPitchCorrection(){
 var sec=document.createElement('div');
 sec.id='sv21-pitch-correction';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#16213e 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🎯 음정교정 피드백 시스템</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">12반음 음정 편차 분석 — 플랫/샤프 경향, 교정 권고</p>'+
  '<canvas id="sv21-pitch-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;justify-content:center">'+
  '<button id="sv21-pitch-scan" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔍 음정 스캔</button>'+
  '<button id="sv21-pitch-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-pitch-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var notes=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  var data=ls21('pitch-data',null);
  if(!data)data=notes.map(function(){return{flat:0,sharp:0,perfect:0};});
  function draw(){
   ctx.clearRect(0,0,580,360);
   ctx.fillStyle='#0d0520';ctx.fillRect(0,0,580,360);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('음정교정 피드백 — 12반음 편차 분석',290,25);
   var bw=36,gap=6,startX=30,startY=300;
   for(var i=0;i<12;i++){
    var x=startX+i*(bw+gap);
    var total=data[i].flat+data[i].sharp+data[i].perfect;
    var flatH=total?data[i].flat/Math.max(total,1)*200:0;
    var sharpH=total?data[i].sharp/Math.max(total,1)*200:0;
    var perfectH=total?data[i].perfect/Math.max(total,1)*200:0;
    ctx.fillStyle='#ef4444';ctx.fillRect(x,startY-flatH,bw/3,flatH);
    ctx.fillStyle='#22c55e';ctx.fillRect(x+bw/3,startY-perfectH,bw/3,perfectH);
    ctx.fillStyle='#f59e0b';ctx.fillRect(x+2*bw/3,startY-sharpH,bw/3,sharpH);
    ctx.fillStyle='#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='center';
    ctx.fillText(notes[i],x+bw/2,startY+16);
   }
   ctx.fillStyle='#ef4444';ctx.fillRect(420,45,12,12);ctx.fillStyle='#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText('Flat (♭)',436,55);
   ctx.fillStyle='#22c55e';ctx.fillRect(420,63,12,12);ctx.fillText('Perfect',436,73);
   ctx.fillStyle='#f59e0b';ctx.fillRect(420,81,12,12);ctx.fillText('Sharp (♯)',436,91);
   var totalAll=0,flatAll=0,sharpAll=0,perfectAll=0;
   data.forEach(function(d){totalAll+=d.flat+d.sharp+d.perfect;flatAll+=d.flat;sharpAll+=d.sharp;perfectAll+=d.perfect;});
   var accuracy=totalAll?Math.round(perfectAll/totalAll*100):0;
   var grade=accuracy>=90?'S':accuracy>=75?'A':accuracy>=60?'B':accuracy>=40?'C':'D';
   var gradeColor=grade==='S'?'#fbbf24':grade==='A'?'#a855f7':grade==='B'?'#3b82f6':grade==='C'?'#22c55e':'#9ca3af';
   ctx.fillStyle=gradeColor;ctx.font='bold 28px sans-serif';ctx.textAlign='center';ctx.fillText(grade,530,80);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';ctx.fillText('정확도 '+accuracy+'%',530,100);
   var tendency=flatAll>sharpAll?'♭ Flat 경향':'♯ Sharp 경향';
   if(Math.abs(flatAll-sharpAll)<3)tendency='균형 잡힌 음정';
   ctx.fillStyle='#c084fc';ctx.font='12px sans-serif';ctx.fillText(tendency,530,120);
   ctx.fillStyle='#6366f1';ctx.font='11px sans-serif';ctx.fillText('총 '+totalAll+'회 분석',530,145);
  }
  draw();
  var scanBtn=document.getElementById('sv21-pitch-scan');
  var resetBtn=document.getElementById('sv21-pitch-reset');
  if(scanBtn)scanBtn.onclick=function(){
   sfx21('pitchScan');
   for(var i=0;i<12;i++){
    var r=Math.random();
    if(r<0.55)data[i].perfect+=Math.floor(Math.random()*3)+1;
    else if(r<0.78)data[i].flat+=Math.floor(Math.random()*2)+1;
    else data[i].sharp+=Math.floor(Math.random()*2)+1;
   }
   ls21s('pitch-data',data);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   data=notes.map(function(){return{flat:0,sharp:0,perfect:0};});
   ls21s('pitch-data',data);draw();
  };
 },200);
 return sec;
}

/* ── 2. Vocal Stamina Trainer Canvas 560x340 ── */
function createStaminaTrainer(){
 var sec=document.createElement('div');
 sec.id='sv21-stamina-trainer';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#1e293b 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🔥 보컬 스태미나 트레이너</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">10단계 지구력 훈련 — 세션 히스토리, 스태미나 성장 추적</p>'+
  '<canvas id="sv21-stamina-cv" width="560" height="340" style="width:100%;max-width:560px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;justify-content:center">'+
  '<button id="sv21-stamina-train" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">💪 훈련 시작</button>'+
  '<button id="sv21-stamina-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-stamina-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var exercises=['롱톤유지','고음지속','빠른스캣','음정도약','비브라토연속','벨팅파워','레가토연결','스타카토반복','믹스보이스전환','풀세트메들리'];
  var levels=ls21('stamina-levels',[0,0,0,0,0,0,0,0,0,0]);
  var history=ls21('stamina-hist',[]);
  function draw(){
   ctx.clearRect(0,0,560,340);
   ctx.fillStyle='#0d0520';ctx.fillRect(0,0,560,340);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('보컬 스태미나 — 10단계 지구력 훈련',280,25);
   for(var i=0;i<10;i++){
    var x=40,y=45+i*27;
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='right';
    ctx.fillText(exercises[i],x+80,y+8);
    ctx.fillStyle='#1e1b4b';ctx.fillRect(x+90,y,280,16);
    var pct=levels[i]/10;
    var grd=ctx.createLinearGradient(x+90,0,x+90+280*pct,0);
    grd.addColorStop(0,'#a855f7');grd.addColorStop(1,'#ec4899');
    ctx.fillStyle=grd;ctx.fillRect(x+90,y,280*pct,16);
    ctx.fillStyle='#e2e8f0';ctx.font='10px sans-serif';ctx.textAlign='left';
    ctx.fillText('Lv.'+levels[i],x+90+280*pct+5,y+12);
   }
   if(history.length>1){
    ctx.strokeStyle='#22c55e';ctx.lineWidth=2;ctx.beginPath();
    var hStartX=420,hW=120,hH=80,hY=255;
    for(var j=0;j<Math.min(history.length,20);j++){
     var hx=hStartX+j*(hW/Math.min(history.length-1,19));
     var hy=hY+hH-history[Math.max(0,history.length-20)+j]/100*hH;
     if(j===0)ctx.moveTo(hx,hy);else ctx.lineTo(hx,hy);
    }
    ctx.stroke();
    ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText('세션 히스토리',hStartX+hW/2,hY+hH+15);
   }
   var totalLv=levels.reduce(function(a,b){return a+b;},0);
   var grade=totalLv>=90?'S':totalLv>=70?'A':totalLv>=50?'B':totalLv>=30?'C':'D';
   var gc=grade==='S'?'#fbbf24':grade==='A'?'#a855f7':grade==='B'?'#3b82f6':'#9ca3af';
   ctx.fillStyle=gc;ctx.font='bold 24px sans-serif';ctx.textAlign='center';ctx.fillText(grade,480,50);
   ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.fillText('총 Lv.'+totalLv+'/100',480,70);
  }
  draw();
  var trainBtn=document.getElementById('sv21-stamina-train');
  var resetBtn=document.getElementById('sv21-stamina-reset');
  if(trainBtn)trainBtn.onclick=function(){
   sfx21('staminaUp');
   var idx=Math.floor(Math.random()*10);
   if(levels[idx]<10)levels[idx]++;
   var total=levels.reduce(function(a,b){return a+b;},0);
   history.push(total);if(history.length>30)history.shift();
   ls21s('stamina-levels',levels);ls21s('stamina-hist',history);
   draw();if(total>=100)sfx21('staminaComplete');
  };
  if(resetBtn)resetBtn.onclick=function(){
   levels=[0,0,0,0,0,0,0,0,0,0];history=[];
   ls21s('stamina-levels',levels);ls21s('stamina-hist',history);draw();
  };
 },200);
 return sec;
}

/* ── 3. Genre Vocal Technique Guide Canvas 600x380 ── */
function createGenreGuide(){
 var sec=document.createElement('div');
 sec.id='sv21-genre-guide';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#0f172a 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🌍 장르별 발성법 가이드</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">10장르 x 6축 Radar — 발성법/호흡/비브라토/감정/음색/리듬 분석</p>'+
  '<div id="sv21-genre-tabs" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;justify-content:center"></div>'+
  '<canvas id="sv21-genre-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-genre-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var genres=[
   {name:'발라드',data:[9,8,9,10,9,6],tip:'깊은 호흡과 감정 전달이 핵심'},
   {name:'댄스/팝',data:[7,7,5,7,7,9],tip:'리듬감과 에너지 유지가 중요'},
   {name:'R&B/소울',data:[9,9,8,9,10,8],tip:'그루브와 섬세한 음색 변화'},
   {name:'록',data:[8,8,6,8,8,7],tip:'파워풀한 벨팅과 디스토션'},
   {name:'힙합',data:[5,6,3,7,6,10],tip:'플로우와 라임 리듬감'},
   {name:'재즈',data:[10,8,7,8,10,9],tip:'스캣과 즉흥 변주 능력'},
   {name:'트로트',data:[8,7,10,9,8,7],tip:'꺾기와 비브라토 테크닉'},
   {name:'EDM',data:[6,7,4,6,7,10],tip:'정확한 박자와 에너지 관리'},
   {name:'인디/포크',data:[7,7,6,9,9,6],tip:'자연스러운 음색과 감성'},
   {name:'뮤지컬',data:[10,9,8,10,9,8],tip:'프로젝션과 연기 발성'}
  ];
  var axes=['발성법','호흡','비브라토','감정','음색','리듬'];
  var sel=0;
  var tabDiv=document.getElementById('sv21-genre-tabs');
  genres.forEach(function(g,i){
   var btn=document.createElement('button');
   btn.textContent=g.name;
   btn.style.cssText='padding:5px 10px;background:'+(i===0?'#a855f7':'#312e81')+';color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.78em';
   btn.onclick=function(){sel=i;sfx21('genreSelect');draw();
    tabDiv.querySelectorAll('button').forEach(function(b,j){b.style.background=j===i?'#a855f7':'#312e81';});};
   tabDiv.appendChild(btn);
  });
  function draw(){
   ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,600,380);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('장르별 발성법 가이드 — '+genres[sel].name,300,25);
   var cx=220,cy=200,r=120;
   for(var ring=1;ring<=5;ring++){
    ctx.strokeStyle='rgba(168,85,247,'+(0.1+ring*0.04)+')';ctx.lineWidth=1;ctx.beginPath();
    for(var a=0;a<6;a++){
     var angle=-Math.PI/2+a*Math.PI/3;
     var px=cx+Math.cos(angle)*r*ring/5;
     var py=cy+Math.sin(angle)*r*ring/5;
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
    var val=genres[sel].data[a3]/10;
    var px3=cx+Math.cos(ang3)*r*val;var py3=cy+Math.sin(ang3)*r*val;
    if(a3===0)ctx.moveTo(px3,py3);else ctx.lineTo(px3,py3);
   }
   ctx.closePath();ctx.fill();ctx.stroke();
   for(var a4=0;a4<6;a4++){
    var ang4=-Math.PI/2+a4*Math.PI/3;
    var val4=genres[sel].data[a4]/10;
    ctx.fillStyle='#c084fc';ctx.beginPath();
    ctx.arc(cx+Math.cos(ang4)*r*val4,cy+Math.sin(ang4)*r*val4,4,0,Math.PI*2);ctx.fill();
   }
   ctx.fillStyle='#fbbf24';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
   ctx.fillText('💡 '+genres[sel].tip,380,80);
   var startY=110;
   ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';
   for(var a5=0;a5<6;a5++){
    ctx.fillStyle='#a78bfa';ctx.textAlign='left';ctx.fillText(axes[a5],400,startY+a5*28);
    ctx.fillStyle='#1e1b4b';ctx.fillRect(460,startY+a5*28-10,100,14);
    var pct5=genres[sel].data[a5]/10;
    var g5=ctx.createLinearGradient(460,0,460+100*pct5,0);g5.addColorStop(0,'#a855f7');g5.addColorStop(1,'#ec4899');
    ctx.fillStyle=g5;ctx.fillRect(460,startY+a5*28-10,100*pct5,14);
    ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(genres[sel].data[a5]+'/10',460+50,startY+a5*28+1);
    ctx.font='11px sans-serif';
   }
   var avg=Math.round(genres[sel].data.reduce(function(a,b){return a+b;},0)/6*10)/10;
   ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';ctx.fillText('평균 '+avg,500,startY+185);
  }
  draw();
 },200);
 return sec;
}

/* ── 4. AI Song Recommendation Engine Canvas 580x360 ── */
function createSongRecommend(){
 var sec=document.createElement('div');
 sec.id='sv21-song-recommend';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#172554 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🤖 AI 곡추천 매칭엔진</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">음역/장르/기분/난이도 4축 매칭 — 맞춤 추천곡 5개</p>'+
  '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;justify-content:center">'+
  '<select id="sv21-rec-range" style="padding:6px;background:#312e81;color:#c084fc;border:1px solid #6366f1;border-radius:6px;font-size:.82em">'+
  '<option value="low">저음형</option><option value="mid" selected>중음형</option><option value="high">고음형</option></select>'+
  '<select id="sv21-rec-genre" style="padding:6px;background:#312e81;color:#c084fc;border:1px solid #6366f1;border-radius:6px;font-size:.82em">'+
  '<option value="ballad">발라드</option><option value="pop" selected>팝</option><option value="dance">댄스</option><option value="rock">록</option><option value="hiphop">힙합</option></select>'+
  '<select id="sv21-rec-mood" style="padding:6px;background:#312e81;color:#c084fc;border:1px solid #6366f1;border-radius:6px;font-size:.82em">'+
  '<option value="happy">신나는</option><option value="sad">감성적</option><option value="chill" selected>편안한</option><option value="powerful">파워풀</option></select>'+
  '</div>'+
  '<canvas id="sv21-rec-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="text-align:center;margin-top:10px">'+
  '<button id="sv21-rec-btn" style="padding:8px 20px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎲 추천받기</button></div>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-rec-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var catalog=[
   {t:'봄날',a:'BTS',genre:'ballad',range:'mid',mood:'sad',diff:3,match:0},
   {t:'LOVE DIVE',a:'IVE',genre:'dance',range:'high',diff:4,mood:'happy',match:0},
   {t:'Celebrity',a:'IU',genre:'pop',range:'mid',diff:3,mood:'chill',match:0},
   {t:'고민중독',a:'QWER',genre:'rock',range:'mid',diff:4,mood:'powerful',match:0},
   {t:'Super Shy',a:'NewJeans',genre:'pop',range:'mid',diff:3,mood:'happy',match:0},
   {t:'소나기',a:'이클립스',genre:'ballad',range:'low',diff:3,mood:'sad',match:0},
   {t:'Dynamite',a:'BTS',genre:'pop',range:'mid',diff:3,mood:'happy',match:0},
   {t:'SPOT!',a:'ZICO ft.JENNIE',genre:'hiphop',range:'mid',diff:4,mood:'happy',match:0},
   {t:'사건의 지평선',a:'윤하',genre:'ballad',range:'high',diff:4,mood:'sad',match:0},
   {t:'Ditto',a:'NewJeans',genre:'pop',range:'mid',diff:3,mood:'chill',match:0},
   {t:'Drama',a:'aespa',genre:'dance',range:'high',diff:5,mood:'powerful',match:0},
   {t:'Seven',a:'정국',genre:'pop',range:'mid',diff:3,mood:'happy',match:0},
   {t:'APT.',a:'ROSE&Bruno Mars',genre:'pop',range:'mid',diff:4,mood:'happy',match:0},
   {t:'Welcome to the Show',a:'DAY6',genre:'rock',range:'mid',diff:4,mood:'powerful',match:0},
   {t:'Love Lee',a:'AKMU',genre:'pop',range:'low',diff:3,mood:'chill',match:0}
  ];
  var recommended=[];
  var recCount=ls21('rec-count',0);
  function recommend(){
   sfx21('songRecommend');
   var rng=document.getElementById('sv21-rec-range').value;
   var gnr=document.getElementById('sv21-rec-genre').value;
   var mood=document.getElementById('sv21-rec-mood').value;
   catalog.forEach(function(s){
    s.match=0;
    if(s.range===rng)s.match+=35;else s.match+=10;
    if(s.genre===gnr)s.match+=30;else s.match+=5;
    if(s.mood===mood)s.match+=25;else s.match+=5;
    s.match+=Math.floor(Math.random()*10);
   });
   var sorted=catalog.slice().sort(function(a,b){return b.match-a.match;});
   recommended=sorted.slice(0,5);
   recCount++;ls21s('rec-count',recCount);
   draw();
  }
  function draw(){
   ctx.clearRect(0,0,580,360);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,580,360);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('AI 곡추천 매칭엔진 — 맞춤 추천 TOP 5',290,25);
   if(recommended.length===0){
    ctx.fillStyle='#a78bfa';ctx.font='13px sans-serif';ctx.fillText('조건을 설정하고 [추천받기]를 누르세요',290,180);
    return;
   }
   for(var i=0;i<5;i++){
    var s=recommended[i];var y=55+i*58;
    ctx.fillStyle=i===0?'#fbbf24':i===1?'#c0c0c0':i===2?'#cd7f32':'#a78bfa';
    ctx.font='bold 16px sans-serif';ctx.textAlign='left';ctx.fillText('#'+(i+1),30,y+16);
    ctx.fillStyle='#e2e8f0';ctx.font='bold 13px sans-serif';ctx.fillText(s.t,65,y+10);
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.fillText(s.a,65,y+28);
    ctx.fillStyle='#1e1b4b';ctx.fillRect(300,y,220,24);
    var pct=s.match/100;
    var g2=ctx.createLinearGradient(300,0,300+220*pct,0);g2.addColorStop(0,'#a855f7');g2.addColorStop(1,'#ec4899');
    ctx.fillStyle=g2;ctx.fillRect(300,y,220*pct,24);
    ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.fillText(s.match+'% 매칭',300+110,y+16);
    ctx.textAlign='left';
   }
   ctx.fillStyle='#6366f1';ctx.font='11px sans-serif';ctx.textAlign='center';
   ctx.fillText('총 '+recCount+'회 추천',290,345);
  }
  draw();
  var recBtn=document.getElementById('sv21-rec-btn');
  if(recBtn)recBtn.onclick=recommend;
 },200);
 return sec;
}

/* ── 5. Vocal Harmonics Analyzer Canvas 600x380 ── */
function createHarmonicsAnalyzer(){
 var sec=document.createElement('div');
 sec.id='sv21-harmonics';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#1e1b4b 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🔬 보컬 하모닉스 분석기</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">8배음 스펙트럼 분석 — 음색 밝기/따뜻함 진단, 가수 유형 매칭</p>'+
  '<canvas id="sv21-harmonics-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;justify-content:center">'+
  '<button id="sv21-harm-scan" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎤 스펙트럼 분석</button>'+
  '<button id="sv21-harm-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-harmonics-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var harmonicNames=['기본음(1st)','2nd','3rd','4th','5th','6th','7th','8th'];
  var harmonicData=ls21('harmonics',[100,72,55,40,30,22,15,10]);
  var voiceTypes=[
   {name:'밝은 보이스',min:[90,70,60,50,40,30,25,20]},
   {name:'따뜻한 보이스',min:[100,80,50,30,20,15,10,8]},
   {name:'파워 보이스',min:[100,75,65,55,45,35,28,22]},
   {name:'소프트 보이스',min:[85,60,40,25,15,10,8,5]}
  ];
  function draw(){
   ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,600,380);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('보컬 하모닉스 — 8배음 스펙트럼 분석',300,25);
   var bw=50,gap=15,startX=50,startY=300;
   for(var i=0;i<8;i++){
    var x=startX+i*(bw+gap);
    var h=harmonicData[i]/100*240;
    var grd=ctx.createLinearGradient(x,startY-h,x,startY);
    grd.addColorStop(0,'#ec4899');grd.addColorStop(0.5,'#a855f7');grd.addColorStop(1,'#6366f1');
    ctx.fillStyle=grd;ctx.fillRect(x,startY-h,bw,h);
    ctx.strokeStyle='rgba(255,255,255,.15)';ctx.strokeRect(x,startY-h,bw,h);
    ctx.fillStyle='#e2e8f0';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText(harmonicNames[i],x+bw/2,startY+16);
    ctx.fillStyle='#fbbf24';ctx.font='bold 11px sans-serif';
    ctx.fillText(harmonicData[i]+'%',x+bw/2,startY-h-8);
   }
   var brightness=Math.round((harmonicData[4]+harmonicData[5]+harmonicData[6]+harmonicData[7])/4);
   var warmth=Math.round((harmonicData[0]+harmonicData[1])/2-(harmonicData[6]+harmonicData[7])/2);
   if(warmth<0)warmth=0;
   ctx.fillStyle='#c084fc';ctx.font='12px sans-serif';ctx.textAlign='left';
   ctx.fillText('밝기: '+brightness+'%',470,55);
   ctx.fillText('따뜻함: '+warmth+'%',470,75);
   var bestMatch='',bestScore=Infinity;
   voiceTypes.forEach(function(vt){
    var score=0;
    for(var i=0;i<8;i++)score+=Math.abs(harmonicData[i]-vt.min[i]);
    if(score<bestScore){bestScore=score;bestMatch=vt.name;}
   });
   ctx.fillStyle='#fbbf24';ctx.font='bold 13px sans-serif';
   ctx.fillText('🎙️ '+bestMatch,470,105);
   ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';
   ctx.fillText('매칭도: '+Math.max(0,100-Math.round(bestScore/4))+'%',470,125);
  }
  draw();
  var scanBtn=document.getElementById('sv21-harm-scan');
  var resetBtn=document.getElementById('sv21-harm-reset');
  if(scanBtn)scanBtn.onclick=function(){
   sfx21('harmonicScan');
   harmonicData=[
    80+Math.floor(Math.random()*20),
    50+Math.floor(Math.random()*35),
    35+Math.floor(Math.random()*30),
    20+Math.floor(Math.random()*35),
    15+Math.floor(Math.random()*30),
    10+Math.floor(Math.random()*25),
    5+Math.floor(Math.random()*25),
    3+Math.floor(Math.random()*20)
   ];
   ls21s('harmonics',harmonicData);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   harmonicData=[100,72,55,40,30,22,15,10];
   ls21s('harmonics',harmonicData);draw();
  };
 },200);
 return sec;
}

/* ── 6. Weekly Ranking Simulator Canvas 560x340 ── */
function createRankingSimulator(){
 var sec=document.createElement('div');
 sec.id='sv21-ranking';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#1e3a5f 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🏆 주간 랭킹 시뮬레이터</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">10명 AI 싱어 랭킹 경쟁 — 점수 누적, 순위 변동 추적</p>'+
  '<canvas id="sv21-ranking-cv" width="560" height="340" style="width:100%;max-width:560px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;justify-content:center">'+
  '<button id="sv21-rank-sing" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎤 노래하기</button>'+
  '<button id="sv21-rank-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 시즌 리셋</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-ranking-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var defaultSingers=[
   {name:'⭐ 나',score:0,isMe:true},
   {name:'Luna♪',score:Math.floor(Math.random()*500)+200},
   {name:'SkyVoice',score:Math.floor(Math.random()*500)+200},
   {name:'MelodyKing',score:Math.floor(Math.random()*500)+200},
   {name:'VocalStar',score:Math.floor(Math.random()*500)+200},
   {name:'HighNote',score:Math.floor(Math.random()*500)+200},
   {name:'SoulSinger',score:Math.floor(Math.random()*500)+200},
   {name:'RhythmQ',score:Math.floor(Math.random()*500)+200},
   {name:'DreamVox',score:Math.floor(Math.random()*500)+200},
   {name:'StageHero',score:Math.floor(Math.random()*500)+200}
  ];
  var singers=ls21('ranking-data',null);
  if(!singers)singers=defaultSingers;
  function draw(){
   ctx.clearRect(0,0,560,340);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,560,340);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('주간 랭킹 시뮬레이터',280,25);
   var sorted=singers.slice().sort(function(a,b){return b.score-a.score;});
   var maxScore=Math.max(sorted[0].score,1);
   for(var i=0;i<10;i++){
    var s=sorted[i];var y=45+i*28;
    var medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
    ctx.fillStyle=s.isMe?'#fbbf24':'#e2e8f0';ctx.font=s.isMe?'bold 12px sans-serif':'12px sans-serif';ctx.textAlign='left';
    ctx.fillText(medal+(i+1)+'. '+s.name,30,y+10);
    var barW=280*s.score/maxScore;
    ctx.fillStyle='#1e1b4b';ctx.fillRect(190,y,280,16);
    var grd=ctx.createLinearGradient(190,0,190+barW,0);
    if(s.isMe){grd.addColorStop(0,'#fbbf24');grd.addColorStop(1,'#f59e0b');}
    else{grd.addColorStop(0,'#6366f1');grd.addColorStop(1,'#a855f7');}
    ctx.fillStyle=grd;ctx.fillRect(190,y,barW,16);
    ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='right';
    ctx.fillText(s.score+'점',480,y+12);
   }
  }
  draw();
  var singBtn=document.getElementById('sv21-rank-sing');
  var resetBtn=document.getElementById('sv21-rank-reset');
  if(singBtn)singBtn.onclick=function(){
   sfx21('rankUpdate');
   singers[0].score+=Math.floor(Math.random()*80)+40;
   for(var i=1;i<10;i++){singers[i].score+=Math.floor(Math.random()*50)+10;}
   ls21s('ranking-data',singers);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   singers=defaultSingers.map(function(s){return{name:s.name,score:s.isMe?0:Math.floor(Math.random()*500)+200,isMe:s.isMe||false};});
   ls21s('ranking-data',singers);draw();
  };
 },200);
 return sec;
}

/* ── 7. Emotion Expression Matrix Canvas 620x400 ── */
function createEmotionMatrix(){
 var sec=document.createElement('div');
 sec.id='sv21-emotion-matrix';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#2d1b69 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">🎭 감정표현 매트릭스</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">8감정 x 6테크닉 히트맵 — 감정 연기력 분석, S~D등급 판정</p>'+
  '<canvas id="sv21-emotion-cv" width="620" height="400" style="width:100%;max-width:620px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;justify-content:center">'+
  '<button id="sv21-emotion-practice" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎭 감정 연습</button>'+
  '<button id="sv21-emotion-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-emotion-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var emotions=['기쁨','슬픔','분노','사랑','그리움','희망','공포','평화'];
  var techniques=['성량조절','비브라토','호흡연기','톤변화','타이밍','표정연기'];
  var matrix=ls21('emotion-mat',null);
  if(!matrix)matrix=emotions.map(function(){return techniques.map(function(){return 0;});});
  function getColor(val){
   if(val===0)return'#1e1b4b';
   if(val<=3)return'#312e81';if(val<=5)return'#6366f1';
   if(val<=7)return'#a855f7';if(val<=9)return'#ec4899';return'#fbbf24';
  }
  function draw(){
   ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('감정표현 매트릭스 — 8감정 × 6테크닉',310,25);
   var cellW=55,cellH=32,startX=130,startY=65;
   for(var t=0;t<6;t++){
    ctx.save();ctx.translate(startX+t*cellW+cellW/2,startY-8);
    ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText(techniques[t],0,0);ctx.restore();
   }
   for(var e=0;e<8;e++){
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='right';
    ctx.fillText(emotions[e],startX-10,startY+e*cellH+cellH/2+4);
    for(var t2=0;t2<6;t2++){
     var x=startX+t2*cellW;var y=startY+e*cellH;
     ctx.fillStyle=getColor(matrix[e][t2]);
     ctx.fillRect(x,y,cellW-2,cellH-2);
     if(matrix[e][t2]>0){
      ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
      ctx.fillText(matrix[e][t2],x+cellW/2-1,y+cellH/2+3);
     }
    }
   }
   var legend=[{v:0,l:'미평가'},{v:3,l:'1-3'},{v:5,l:'4-5'},{v:7,l:'6-7'},{v:9,l:'8-9'},{v:10,l:'10'}];
   for(var li=0;li<legend.length;li++){
    ctx.fillStyle=getColor(legend[li].v);ctx.fillRect(startX+li*55,startY+8*cellH+15,20,12);
    ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='left';
    ctx.fillText(legend[li].l,startX+li*55+23,startY+8*cellH+25);
   }
   var totalScore=0,totalCells=0;
   matrix.forEach(function(row){row.forEach(function(v){if(v>0){totalScore+=v;totalCells++;}});});
   var avg=totalCells?Math.round(totalScore/totalCells*10)/10:0;
   var grade=avg>=9?'S':avg>=7?'A':avg>=5?'B':avg>=3?'C':'D';
   var gc=grade==='S'?'#fbbf24':grade==='A'?'#a855f7':grade==='B'?'#3b82f6':'#9ca3af';
   ctx.fillStyle=gc;ctx.font='bold 28px sans-serif';ctx.textAlign='center';ctx.fillText(grade,530,100);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';ctx.fillText('평균 '+avg,530,122);
   ctx.fillText(totalCells+'/48 연습',530,140);
  }
  draw();
  cv.onclick=function(evt){
   var rect=cv.getBoundingClientRect();
   var scaleX=620/rect.width;
   var mx=(evt.clientX-rect.left)*scaleX;
   var my=(evt.clientY-rect.top)*(400/rect.height);
   var startX=130,startY=65,cellW=55,cellH=32;
   var col=Math.floor((mx-startX)/cellW);
   var row=Math.floor((my-startY)/cellH);
   if(col>=0&&col<6&&row>=0&&row<8){
    matrix[row][col]=(matrix[row][col]%10)+1;
    sfx21('emotionMatch');ls21s('emotion-mat',matrix);draw();
   }
  };
  var practiceBtn=document.getElementById('sv21-emotion-practice');
  var resetBtn=document.getElementById('sv21-emotion-reset');
  if(practiceBtn)practiceBtn.onclick=function(){
   sfx21('emotionMatch');
   var re=Math.floor(Math.random()*8);var rt=Math.floor(Math.random()*6);
   matrix[re][rt]=Math.min(10,matrix[re][rt]+Math.floor(Math.random()*3)+1);
   ls21s('emotion-mat',matrix);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   matrix=emotions.map(function(){return techniques.map(function(){return 0;});});
   ls21s('emotion-mat',matrix);draw();
  };
 },200);
 return sec;
}

/* ── 8. Live Stage Simulator Canvas 580x360 ── */
function createStageSimulator(){
 var sec=document.createElement('div');
 sec.id='sv21-stage-sim';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,#1a0a2e 0%,#312e81 100%);border-radius:16px;border:1px solid rgba(168,85,247,.25)';
 sec.innerHTML='<h3 style="color:#c084fc;font-size:1.15em;margin:0 0 14px">⭐ 라이브 무대 시뮬레이터</h3>'+
  '<p style="color:#a78bfa;font-size:.82em;margin:0 0 10px">6스테이지 연출 — 관객반응 게이지, 퍼포먼스 점수, 앙코르 달성</p>'+
  '<div id="sv21-stage-tabs" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;justify-content:center"></div>'+
  '<canvas id="sv21-stage-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0d0520;display:block;margin:0 auto"></canvas>'+
  '<div style="display:flex;gap:8px;margin-top:10px;justify-content:center">'+
  '<button id="sv21-stage-perform" style="padding:8px 16px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🎤 공연하기</button>'+
  '<button id="sv21-stage-reset" style="padding:8px 16px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85em">🔄 초기화</button>'+
  '</div>';
 setTimeout(function(){
  var cv=document.getElementById('sv21-stage-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var stages=[
   {name:'버스킹',venue:'거리',capacity:50,difficulty:1},
   {name:'카페 공연',venue:'카페',capacity:80,difficulty:2},
   {name:'라이브 클럽',venue:'클럽',capacity:200,difficulty:3},
   {name:'소극장 콘서트',venue:'소극장',capacity:500,difficulty:4},
   {name:'대극장 콘서트',venue:'대극장',capacity:2000,difficulty:5},
   {name:'스타디움 투어',venue:'스타디움',capacity:50000,difficulty:6}
  ];
  var sel=0;
  var stageData=ls21('stage-data',stages.map(function(){return{crowd:0,score:0,encore:false,plays:0};}));
  var tabDiv=document.getElementById('sv21-stage-tabs');
  stages.forEach(function(s,i){
   var btn=document.createElement('button');
   btn.textContent=s.name;
   btn.style.cssText='padding:5px 10px;background:'+(i===0?'#a855f7':'#312e81')+';color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.78em';
   btn.onclick=function(){sel=i;sfx21('genreSelect');draw();
    tabDiv.querySelectorAll('button').forEach(function(b,j){b.style.background=j===i?'#a855f7':'#312e81';});};
   tabDiv.appendChild(btn);
  });
  function draw(){
   ctx.clearRect(0,0,580,360);ctx.fillStyle='#0d0520';ctx.fillRect(0,0,580,360);
   var st=stages[sel];var sd=stageData[sel];
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('라이브 무대 — '+st.name+' ('+st.venue+')',290,25);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';
   ctx.fillText('수용인원: '+st.capacity.toLocaleString()+'명 | 난이도: '+'⭐'.repeat(st.difficulty),290,48);
   ctx.fillStyle='#1e1b4b';ctx.fillRect(40,80,500,30);
   var crowdPct=Math.min(sd.crowd/100,1);
   var crowdGrd=ctx.createLinearGradient(40,0,40+500*crowdPct,0);
   crowdGrd.addColorStop(0,'#22c55e');crowdGrd.addColorStop(0.5,'#eab308');crowdGrd.addColorStop(1,'#ef4444');
   ctx.fillStyle=crowdGrd;ctx.fillRect(40,80,500*crowdPct,30);
   ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
   ctx.fillText('관객 반응: '+sd.crowd+'%',290,100);
   var metrics=['음정정확도','퍼포먼스','감정전달','무대매너','관객소통'];
   var metricVals=[];
   for(var m=0;m<5;m++){
    metricVals.push(sd.score?Math.min(100,Math.floor(sd.score/sd.plays*(0.8+Math.random()*0.4))):0);
   }
   for(var i=0;i<5;i++){
    var y=135+i*36;
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='right';
    ctx.fillText(metrics[i],120,y+12);
    ctx.fillStyle='#1e1b4b';ctx.fillRect(130,y,320,20);
    var pct=metricVals[i]/100;
    var g3=ctx.createLinearGradient(130,0,130+320*pct,0);g3.addColorStop(0,'#a855f7');g3.addColorStop(1,'#ec4899');
    ctx.fillStyle=g3;ctx.fillRect(130,y,320*pct,20);
    ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText(metricVals[i]+'점',130+160,y+14);
   }
   var totalAvg=sd.plays?Math.round(sd.score/sd.plays):0;
   var grade=totalAvg>=90?'S':totalAvg>=75?'A':totalAvg>=60?'B':totalAvg>=40?'C':'D';
   var gc=grade==='S'?'#fbbf24':grade==='A'?'#a855f7':grade==='B'?'#3b82f6':'#9ca3af';
   ctx.fillStyle=gc;ctx.font='bold 28px sans-serif';ctx.textAlign='center';ctx.fillText(grade,510,170);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';ctx.fillText('평균 '+totalAvg+'점',510,192);
   ctx.fillText(sd.plays+'회 공연',510,210);
   if(sd.encore){ctx.fillStyle='#fbbf24';ctx.font='bold 14px sans-serif';ctx.fillText('🎆 앙코르!',510,235);}
   for(var j=0;j<6;j++){
    var sx=40+j*90;var unlocked=stageData[j].plays>0;
    ctx.fillStyle=unlocked?'#a855f7':'#312e81';
    ctx.fillRect(sx,320,80,25);ctx.strokeStyle=j===sel?'#fbbf24':'transparent';ctx.lineWidth=2;ctx.strokeRect(sx,320,80,25);
    ctx.fillStyle=unlocked?'#fff':'#666';ctx.font='9px sans-serif';ctx.textAlign='center';
    ctx.fillText(stages[j].name,sx+40,337);
   }
  }
  draw();
  var performBtn=document.getElementById('sv21-stage-perform');
  var resetBtn=document.getElementById('sv21-stage-reset');
  if(performBtn)performBtn.onclick=function(){
   sfx21('stageCheer');
   var sd=stageData[sel];
   var score=Math.floor(Math.random()*40)+60-stages[sel].difficulty*5;
   if(score<20)score=20;if(score>100)score=100;
   sd.score+=score;sd.plays++;
   sd.crowd=Math.min(100,sd.crowd+Math.floor(Math.random()*20)+5);
   if(sd.crowd>=90&&score>=80)sd.encore=true;
   ls21s('stage-data',stageData);draw();
  };
  if(resetBtn)resetBtn.onclick=function(){
   stageData=stages.map(function(){return{crowd:0,score:0,encore:false,plays:0};});
   ls21s('stage-data',stageData);draw();
  };
 },200);
 return sec;
}

/* ── Mount v21 sections ── */
function mountV21(){
 var target=document.getElementById('songSelect')||document.querySelector('.song-list')||document.querySelector('main')||document.body;
 var container=document.createElement('div');
 container.id='sv21-container';
 container.style.cssText='grid-column:1/-1;padding:0 4px';
 var header=document.createElement('div');
 header.style.cssText='text-align:center;padding:16px 0 8px;border-bottom:1px solid rgba(168,85,247,.2);margin-bottom:12px';
 header.innerHTML='<span style="background:linear-gradient(135deg,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:bold;font-size:1.1em">🎤 StarVoice v21 — 음정교정+스태미나+장르가이드+AI곡추천+하모닉스+랭킹+감정매트릭스+무대시뮬</span>';
 container.appendChild(header);
 container.appendChild(createPitchCorrection());
 container.appendChild(createStaminaTrainer());
 container.appendChild(createGenreGuide());
 container.appendChild(createSongRecommend());
 container.appendChild(createHarmonicsAnalyzer());
 container.appendChild(createRankingSimulator());
 container.appendChild(createEmotionMatrix());
 container.appendChild(createStageSimulator());
 if(target.children.length>2)target.insertBefore(container,target.children[2]);
 else target.appendChild(container);
}

/* ── Nav buttons v21 ── */
function addV21Nav(){
 var nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
 if(!nav){var wt=0;(function waitNav(){if(wt++<30)setTimeout(function(){
  nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
  if(nav)appendNavBtns21(nav);else waitNav();},500);})();return;}
 appendNavBtns21(nav);
}
function appendNavBtns21(nav){
 var items=[
  {label:'🎯음정교정',target:'sv21-pitch-correction'},
  {label:'🔥스태미나',target:'sv21-stamina-trainer'},
  {label:'🌍장르가이드',target:'sv21-genre-guide'},
  {label:'🤖곡추천',target:'sv21-song-recommend'},
  {label:'🔬하모닉스',target:'sv21-harmonics'},
  {label:'🏆랭킹',target:'sv21-ranking'},
  {label:'🎭감정매트릭스',target:'sv21-emotion-matrix'},
  {label:'⭐무대시뮬',target:'sv21-stage-sim'}
 ];
 items.forEach(function(it){
  var b=document.createElement('button');
  b.textContent=it.label;
  b.style.cssText='flex:0 0 auto;padding:6px 10px;font-size:11px;color:#c084fc;background:transparent;border:none;cursor:pointer;white-space:nowrap';
  b.onclick=function(){var el=document.getElementById(it.target);if(el)el.scrollIntoView({behavior:'smooth'});sfx21('navClick21');};
  nav.appendChild(b);
 });
}

/* ── Keyboard shortcuts v21 (Shift+1~8) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var targets={Digit1:'sv21-pitch-correction',Digit2:'sv21-stamina-trainer',Digit3:'sv21-genre-guide',
  Digit4:'sv21-song-recommend',Digit5:'sv21-harmonics',Digit6:'sv21-ranking',
  Digit7:'sv21-emotion-matrix',Digit8:'sv21-stage-sim'};
 var t=targets[e.code];
 if(t){e.preventDefault();var el=document.getElementById(t);if(el)el.scrollIntoView({behavior:'smooth'});sfx21('navClick21');}
});

/* ── Init ── */
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',function(){setTimeout(mountV21,900);setTimeout(addV21Nav,1300);});
}else{setTimeout(mountV21,900);setTimeout(addV21Nav,1300);}

})();
