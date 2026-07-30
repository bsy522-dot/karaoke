/* StarVoice v25 Patch — Self-contained IIFE module injected via SW
 * +10 songs(215->225), PitchDistributionHistogram Canvas, EmotionArcDesigner Canvas,
 * VocalStaminaLevelSystem Canvas, AIDuetCoachSim Canvas,
 * KaraokeAmbianceController Canvas, VocalTrainingScheduler Canvas,
 * GenreExplorationMatrix Canvas, ComprehensiveVocalReport Canvas,
 * quiz +15(267->282), achievements +12(222->234), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v25KaraokeLoaded) return;
window.__v25KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls25(k,d){try{var v=localStorage.getItem('sv25-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls25s(k,v){try{localStorage.setItem('sv25-'+k,JSON.stringify(v));}catch(e){}}
function gradeFor25(pct){return pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';}
function gradeColor25(g){return g==='S'?'#fbbf24':g==='A'?'#34d399':g==='B'?'#60a5fa':g==='C'?'#c084fc':'#f87171';}
function cxy25(cv,e){var r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)*(cv.width/r.width),y:(e.clientY-r.top)*(cv.height/r.height)};}

/* ── 10 New Songs (216-225) ── */
var v25Songs=[
{id:216,title:'Welcome to the Show',artist:'DAY6',bpm:130,key:'A',difficulty:4,genre:'rock',
 notes:[A3,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['Welcome','to','the','show','이','제','시','작','이','야','준','비','됐','는','지','봐'],
 duration:[346,346,346,692,346,346,346,346,346,346,346,692,346,346,346,346]},
{id:217,title:'Supernatural',artist:'NewJeans',bpm:116,key:'Eb',difficulty:3,genre:'dance',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['Super','nat','ur','al','어','디','서','왔','는','지','모','르','겠','지','만','너'],
 duration:[388,388,388,776,388,388,388,388,388,388,388,776,388,388,388,388]},
{id:218,title:'Whiplash',artist:'aespa',bpm:138,key:'Dm',difficulty:4,genre:'dance',
 notes:[D4,F4,A4,D5,Cs5,A4,F4,D4,E4,G4,Bb4,D5,Cs5,Bb4,A4,G4],
 lyrics:['Whip','lash','Whip','lash','느','끼','게','해','줄','게','내','존','재','의','힘','을'],
 duration:[326,326,326,652,326,326,326,326,326,326,326,652,326,326,326,326]},
{id:219,title:'POWER',artist:'G-DRAGON',bpm:125,key:'Gm',difficulty:4,genre:'hiphop',
 notes:[G3,Bb3,D4,G4,F4,D4,Bb3,G3,A3,C4,Eb4,G4,F4,Eb4,D4,C4],
 lyrics:['POW','ER','POW','ER','나','의','힘','을','보','여','줄','게','이','세','상','에'],
 duration:[360,360,360,720,360,360,360,360,360,360,360,720,360,360,360,360]},
{id:220,title:'Timeless',artist:'The Weeknd & Playboi Carti',bpm:98,key:'Fm',difficulty:3,genre:'pop',
 notes:[F3,Ab3,C4,F4,Eb4,C4,Ab3,F3,G3,Bb3,Db4,F4,Eb4,Db4,C4,Bb3],
 lyrics:['Time','less','this','love','is','time','less','oh','we','are','time','less','for','ev','er','more'],
 duration:[459,459,459,918,459,459,459,459,459,459,459,918,459,459,459,459]},
{id:221,title:'소나기',artist:'이클립스(ECLIPSE)',bpm:78,key:'Bb',difficulty:3,genre:'ballad',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['소','나','기','처','럼','왔','다','가','너','는','그','렇','게','떠','났','어'],
 duration:[577,577,577,1154,577,577,577,577,577,577,577,1154,577,577,577,577]},
{id:222,title:'Chk Chk Boom',artist:'Stray Kids',bpm:140,key:'Bbm',difficulty:4,genre:'hiphop',
 notes:[Bb3,Db4,F4,Bb4,Ab4,F4,Db4,Bb3,C4,Eb4,Gb4,Bb4,Ab4,Gb4,F4,Eb4],
 lyrics:['Chk','Chk','Boom','Boom','터','뜨','려','버','려','다','폭','발','해','버','려','봐'],
 duration:[321,321,321,643,321,321,321,321,321,321,321,643,321,321,321,321]},
{id:223,title:'Hero',artist:'임영웅',bpm:82,key:'Db',difficulty:3,genre:'ballad',
 notes:[Db4,F4,Ab4,Db5,C5,Ab4,F4,Db4,Eb4,Gb4,Bb4,Db5,C5,Bb4,Ab4,Gb4],
 lyrics:['나','는','너','의','영','웅','이','될','게','언','제','나','곁','에','서','서'],
 duration:[549,549,549,1098,549,549,549,549,549,549,549,1098,549,549,549,549]},
{id:224,title:'Armageddon',artist:'aespa',bpm:132,key:'Cm',difficulty:4,genre:'dance',
 notes:[C4,Eb4,G4,C5,Bb4,G4,Eb4,C4,D4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['Ar','ma','ged','don','세','상','이','끝','나','도','난','멈','추','지','않','아'],
 duration:[341,341,341,682,341,341,341,341,341,341,341,682,341,341,341,341]},
{id:225,title:'첫 만남은 계획대로 되지 않아',artist:'TWS',bpm:118,key:'F',difficulty:2,genre:'pop',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['첫','만','남','은','계','획','대','로','되','지','않','아','그','래','도','좋','아'],
 duration:[381,381,381,762,381,381,381,381,381,381,381,762,381,381,381,381]}
];
(function injectSongs25(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v25Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v25 (16 sounds) ── */
var actx25=null;
function getAC25(){if(!actx25)try{actx25=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx25;}
function sfx25(type){
 var ac=getAC25();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  pitchScan25:{f:587,d:.3,wave:'triangle',gS:.2,gE:0},
  pitchPeak25:{f:880,d:.45,wave:'sine',gS:.25,gE:0},
  emotionDraw25:{f:440,d:.35,wave:'sine',gS:.18,gE:0},
  emotionSave25:{f:784,d:.5,wave:'triangle',gS:.28,gE:0},
  staminaXP25:{f:523,d:.3,wave:'triangle',gS:.2,gE:0},
  staminaLevel25:{f:1047,d:.6,wave:'triangle',gS:.32,gE:0},
  duetCoach25:{f:392,d:.35,wave:'sine',gS:.18,gE:0},
  ambianceSet25:{f:330,d:.4,wave:'sine',gS:.15,gE:0},
  scheduleSet25:{f:466,d:.3,wave:'sine',gS:.16,gE:0},
  scheduleDone25:{f:698,d:.5,wave:'triangle',gS:.25,gE:0},
  genreExplore25:{f:554,d:.35,wave:'sine',gS:.18,gE:0},
  reportGen25:{f:659,d:.5,wave:'triangle',gS:.28,gE:0},
  quizCorrect25:{f:1175,d:.3,wave:'triangle',gS:.22,gE:0},
  quizWrong25:{f:185,d:.4,wave:'sawtooth',gS:.1,gE:0},
  achieve25:{f:1319,d:.6,wave:'triangle',gS:.32,gE:0},
  navClick25:{f:740,d:.2,wave:'sine',gS:.15,gE:0}
 };
 var c=cfg[type]||cfg.navClick25;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='staminaLevel25'){o.frequency.setValueAtTime(c.f*0.7,t);o.frequency.exponentialRampToValueAtTime(c.f*1.4,t+c.d);}
 if(type==='emotionSave25'){o.frequency.setValueAtTime(c.f*0.8,t);o.frequency.exponentialRampToValueAtTime(c.f*1.3,t+c.d*0.6);o.frequency.exponentialRampToValueAtTime(c.f,t+c.d);}
 if(type==='reportGen25'){o.frequency.setValueAtTime(c.f*0.85,t);o.frequency.exponentialRampToValueAtTime(c.f*1.25,t+c.d);}
 if(type==='scheduleDone25'){o.frequency.setValueAtTime(c.f*0.9,t);o.frequency.exponentialRampToValueAtTime(c.f*1.2,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Quiz v25 (+15 questions, 267->282) ── */
var v25Quiz=[
{q:'&quot;보컬 피치 분포 히스토그램&quot;이 분석하는 것은?',a:['노래할 때 가장 자주 사용하는 음높이 분포','춤 동작의 세기','가사 암기량','노래방 이용 시간'],c:0},
{q:'&quot;감정 아크 디자이너&quot;로 할 수 있는 것은?',a:['곡의 구간별 감정 흐름을 시각적으로 설계','노래 키를 자동 변경','반주 악기를 교체','가사를 번역'],c:0},
{q:'&quot;보컬 스태미나 레벨 시스템&quot;에서 레벨업 조건은?',a:['연습 시간과 곡 완료 수에 따른 XP 누적','결제 금액','팔로워 수','로그인 횟수'],c:0},
{q:'&quot;AI 듀엣 코칭&quot;에서 가장 중요한 것은?',a:['파트너와의 음역 호환과 하모니 타이밍','춤 동작 일치','의상 코디','노래 제목 맞추기'],c:0},
{q:'&quot;노래방 분위기 컨트롤러&quot;의 조명 프리셋이 아닌 것은?',a:['수학 공부 모드','콘서트 분위기','로맨틱 분위기','파티 분위기'],c:0},
{q:'효과적인 보컬 트레이닝 스케줄은?',a:['매일 다른 영역을 균형있게 훈련','매일 고음만 연습','일주일에 한 번 15시간 연습','훈련 없이 실전만 하기'],c:0},
{q:'&quot;장르 탐험 매트릭스&quot;의 핵심 효과는?',a:['다양한 장르를 체험하며 보컬 표현력을 넓힘','한 장르만 완벽하게 마스터','장르별 인기 순위를 매기기','음악 이론 시험 준비'],c:0},
{q:'&quot;종합 보컬 리포트&quot;에 포함되지 않는 항목은?',a:['좋아하는 음식 목록','음정 정확도','리듬 안정성','표현력 지수'],c:0},
{q:'&quot;레가토(Legato)&quot; 창법의 특징은?',a:['음과 음을 부드럽게 이어서 끊김 없이 노래하는 것','음을 짧게 끊어서 부르는 것','무대에서 뛰면서 부르는 것','가사를 빠르게 랩하는 것'],c:0},
{q:'&quot;포르타멘토(Portamento)&quot;란?',a:['한 음에서 다른 음으로 미끄러지듯 이동하는 기법','드럼 리듬 패턴 이름','마이크 잡는 방법','음향 장비 브랜드'],c:0},
{q:'노래할 때 &quot;공명(Resonance)&quot;을 활용하면?',a:['작은 힘으로도 풍성하고 울림 있는 소리 생성','음정이 자동 교정됨','가사가 자동으로 표시됨','점수가 자동으로 올라감'],c:0},
{q:'&quot;체스트 보이스(Chest Voice)&quot;의 특징은?',a:['가슴에 진동이 느껴지는 낮고 풍부한 발성','머리 꼭대기에서 나는 소리','코를 통해서만 나는 소리','속삭이는 소리'],c:0},
{q:'&quot;헤드 보이스(Head Voice)&quot;는 언제 사용하나?',a:['고음역에서 부드럽고 맑은 소리를 낼 때','저음만 부를 때','랩할 때만','마이크 테스트할 때'],c:0},
{q:'보컬에서 &quot;음색(Timbre)&quot;이란?',a:['같은 음높이·음량에서도 개인마다 다른 소리의 질감','음의 높낮이를 나타내는 단위','노래의 빠르기','가사의 어조'],c:0},
{q:'노래 연습에서 &quot;녹음 모니터링&quot;이 중요한 이유는?',a:['자신의 발성을 객관적으로 분석하여 교정 가능','녹음 파일을 판매하기 위해','기계적 소리가 더 예쁘므로','메아리 효과를 듣기 위해'],c:0}
];
(function injectQuiz25(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v25Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v25 (+12, 222->234) ── */
var v25Achievements=[
 {id:'pitch_analyst25',name:'피치 분석가',desc:'피치 분포 히스토그램에서 12음 모두 분석 완료'},
 {id:'emotion_architect',name:'감정 설계사',desc:'감정 아크 디자이너에서 3가지 이상 감정 커브 제작'},
 {id:'stamina_warrior25',name:'스태미나 전사',desc:'보컬 스태미나에서 레벨 5 이상 달성'},
 {id:'duet_coach_ace',name:'듀엣 코칭 에이스',desc:'AI 듀엣 코칭에서 5명 이상의 AI 가수와 듀엣 완료'},
 {id:'ambiance_master',name:'분위기 마스터',desc:'노래방 분위기 컨트롤러에서 8가지 분위기 모두 체험'},
 {id:'schedule_keeper',name:'스케줄 키퍼',desc:'보컬 트레이닝 스케줄러에서 7일 모두 계획 완료'},
 {id:'genre_explorer25',name:'장르 탐험가 v25',desc:'장르 탐험 매트릭스에서 10장르 모두 경험'},
 {id:'report_generator',name:'리포트 마스터',desc:'종합 보컬 리포트에서 S등급 달성'},
 {id:'quiz_v25_master',name:'퀴즈 마스터 v25',desc:'v25 퀴즈 15문 전부 정답'},
 {id:'song_225',name:'225곡 수집가',desc:'225곡 모두 한 번 이상 시도'},
 {id:'v25_explorer',name:'v25 탐험가',desc:'v25 신규 기능 4개 이상 사용'},
 {id:'v25_complete',name:'v25 마스터',desc:'v25 전체 기능 완전 정복'}
];
(function injectAchievements25(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v25Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── 8 Canvas Features ── */
function waitForApp25(cb){
 var tries=0;
 function attempt(){
  var nav=document.querySelector('.bottomNav')||document.querySelector('[class*="bottom"]')||document.querySelector('nav');
  if(document.body){cb(nav);return;}
  if(tries++<60)setTimeout(attempt,300);
 }
 attempt();
}

waitForApp25(function(nav){

/* ── Feature 1: Vocal Pitch Distribution Histogram ── */
(function pitchHistogram(){
 var NOTES=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
 var COLORS=['#ef4444','#f97316','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4','#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899'];
 var data=ls25('pitchHist',[15,8,22,5,18,12,3,25,7,20,10,14]);
 var hoverIdx=-1;

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('Vocal Pitch Distribution Histogram',W/2,28);
  var mx=Math.max.apply(null,data)||1,barW=(W-80)/12,baseY=H-60,maxH=H-120;
  var total=data.reduce(function(a,b){return a+b;},0)||1;
  for(var i=0;i<12;i++){
   var bh=data[i]/mx*maxH,x=40+i*barW,y=baseY-bh;
   ctx.fillStyle=i===hoverIdx?'#ffffff':COLORS[i];
   ctx.fillRect(x+4,y,barW-8,bh);
   ctx.fillStyle='#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='center';
   ctx.fillText(NOTES[i],x+barW/2,baseY+16);
   ctx.fillText(data[i],x+barW/2,y-6);
   if(i===hoverIdx){
    ctx.fillStyle='rgba(192,132,252,0.9)';ctx.font='bold 12px sans-serif';
    ctx.fillText((data[i]/total*100).toFixed(1)+'%',x+barW/2,y-22);
   }
  }
  var peakIdx=data.indexOf(Math.max.apply(null,data));
  var leastIdx=data.indexOf(Math.min.apply(null,data));
  ctx.fillStyle='#a3e635';ctx.font='12px sans-serif';ctx.textAlign='left';
  ctx.fillText('Most: '+NOTES[peakIdx]+' ('+data[peakIdx]+')',40,H-30);
  ctx.fillStyle='#f87171';
  ctx.fillText('Least: '+NOTES[leastIdx]+' ('+data[leastIdx]+')',220,H-30);
  ctx.fillStyle='#94a3b8';ctx.textAlign='right';
  ctx.fillText('Total: '+total+' notes',W-20,H-30);
 }

 function createPanel(){
  var panel=document.createElement('div');
  panel.id='sv25-pitch-hist';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:660px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=620;cv.height=400;
  cv.style.cssText='width:100%;border-radius:10px;cursor:crosshair;';
  panel.appendChild(cv);
  var btns=document.createElement('div');btns.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap;';
  var scanBtn=document.createElement('button');scanBtn.textContent='🎵 Scan Random';
  scanBtn.style.cssText='padding:6px 14px;background:#7c3aed;color:white;border:none;border-radius:8px;cursor:pointer;font-size:13px;';
  scanBtn.onclick=function(){
   for(var i=0;i<12;i++)data[i]+=Math.floor(Math.random()*10);
   ls25s('pitchHist',data);sfx25('pitchScan25');render(cv);
  };
  var resetBtn=document.createElement('button');resetBtn.textContent='↻ Reset';
  resetBtn.style.cssText='padding:6px 14px;background:#374151;color:white;border:none;border-radius:8px;cursor:pointer;font-size:13px;';
  resetBtn.onclick=function(){data=[0,0,0,0,0,0,0,0,0,0,0,0];ls25s('pitchHist',data);render(cv);};
  btns.appendChild(scanBtn);btns.appendChild(resetBtn);panel.appendChild(btns);
  document.body.appendChild(panel);
  cv.addEventListener('mousemove',function(e){
   var p=cxy25(cv,e),barW=(620-80)/12;hoverIdx=Math.floor((p.x-40)/barW);
   if(hoverIdx<0||hoverIdx>11)hoverIdx=-1;render(cv);
  });
  cv.addEventListener('mouseleave',function(){hoverIdx=-1;render(cv);});
  cv.addEventListener('click',function(e){
   var p=cxy25(cv,e),barW=(620-80)/12,idx=Math.floor((p.x-40)/barW);
   if(idx>=0&&idx<12){data[idx]+=5;ls25s('pitchHist',data);sfx25('pitchPeak25');render(cv);}
  });
  render(cv);
  return panel;
 }
 var p1=createPanel();
 window.__sv25PitchHist=function(){p1.style.display='block';};
})();

/* ── Feature 2: Emotion Arc Designer ── */
(function emotionArc(){
 var EMOTIONS=['Joy','Sorrow','Tension','Release','Climax','Peace','Dramatic','Dream'];
 var ECOLORS=['#fbbf24','#60a5fa','#ef4444','#34d399','#f97316','#a78bfa','#ec4899','#67e8f9'];
 var points=ls25('emotionArc',EMOTIONS.map(function(){return[30,50,70,40,80,60,45,55];}));
 var selEmotion=0,dragIdx=-1;

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('Emotion Arc Designer - '+EMOTIONS[selEmotion],W/2,28);
  var ptsArr=points[selEmotion],segW=(W-80)/7,baseY=H-60,maxH=H-110;
  ctx.strokeStyle='#374151';ctx.lineWidth=1;
  for(var g=0;g<=4;g++){
   var gy=50+g*(maxH/4);
   ctx.beginPath();ctx.moveTo(40,gy);ctx.lineTo(W-20,gy);ctx.stroke();
   ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.textAlign='right';
   ctx.fillText((100-g*25)+'',36,gy+4);
  }
  ctx.strokeStyle=ECOLORS[selEmotion];ctx.lineWidth=3;ctx.beginPath();
  for(var i=0;i<8;i++){
   var x=40+i*segW,y=50+maxH*(1-ptsArr[i]/100);
   if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.fillStyle=ECOLORS[selEmotion]+'40';ctx.beginPath();
  ctx.moveTo(40,50+maxH);
  for(var i=0;i<8;i++){var x=40+i*segW,y=50+maxH*(1-ptsArr[i]/100);ctx.lineTo(x,y);}
  ctx.lineTo(40+7*segW,50+maxH);ctx.closePath();ctx.fill();
  for(var i=0;i<8;i++){
   var x=40+i*segW,y=50+maxH*(1-ptsArr[i]/100);
   ctx.fillStyle=i===dragIdx?'#ffffff':ECOLORS[selEmotion];
   ctx.beginPath();ctx.arc(x,y,7,0,Math.PI*2);ctx.fill();
   ctx.fillStyle='#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='center';
   ctx.fillText(ptsArr[i],x,y-14);
   ctx.fillText('Sec '+(i+1),x,baseY+16);
  }
  var avg=Math.round(ptsArr.reduce(function(a,b){return a+b;},0)/8);
  var grade=gradeFor25(avg);
  ctx.fillStyle=gradeColor25(grade);ctx.font='bold 14px sans-serif';ctx.textAlign='right';
  ctx.fillText('Avg: '+avg+'  Grade: '+grade,W-20,H-30);
 }

 function createPanel(){
  var panel=document.createElement('div');panel.id='sv25-emotion-arc';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:660px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=620;cv.height=400;
  cv.style.cssText='width:100%;border-radius:10px;cursor:pointer;';
  panel.appendChild(cv);
  var tabRow=document.createElement('div');tabRow.style.cssText='display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-top:8px;';
  EMOTIONS.forEach(function(em,idx){
   var btn=document.createElement('button');btn.textContent=em;
   btn.style.cssText='padding:4px 10px;border:1px solid '+ECOLORS[idx]+';background:'+(idx===0?ECOLORS[idx]+'30':'transparent')+';color:'+ECOLORS[idx]+';border-radius:6px;cursor:pointer;font-size:11px;';
   btn.onclick=function(){selEmotion=idx;sfx25('emotionDraw25');
    tabRow.querySelectorAll('button').forEach(function(b,bi){b.style.background=bi===idx?ECOLORS[bi]+'30':'transparent';});
    render(cv);};
   tabRow.appendChild(btn);
  });
  panel.appendChild(tabRow);
  document.body.appendChild(panel);
  cv.addEventListener('mousedown',function(e){
   var p=cxy25(cv,e),maxH=cv.height-110,segW=(cv.width-80)/7;
   for(var i=0;i<8;i++){
    var x=40+i*segW,y=50+maxH*(1-points[selEmotion][i]/100);
    if(Math.abs(p.x-x)<15&&Math.abs(p.y-y)<15){dragIdx=i;break;}
   }
  });
  cv.addEventListener('mousemove',function(e){
   if(dragIdx<0)return;
   var p=cxy25(cv,e),maxH=cv.height-110;
   var val=Math.round(100*(1-(p.y-50)/maxH));
   points[selEmotion][dragIdx]=Math.max(0,Math.min(100,val));
   render(cv);
  });
  cv.addEventListener('mouseup',function(){
   if(dragIdx>=0){ls25s('emotionArc',points);sfx25('emotionSave25');}dragIdx=-1;
  });
  cv.addEventListener('mouseleave',function(){dragIdx=-1;});
  render(cv);
  return panel;
 }
 var p2=createPanel();
 window.__sv25EmotionArc=function(){p2.style.display='block';};
})();

/* ── Feature 3: Vocal Stamina Level System ── */
(function staminaLevel(){
 var LEVELS=[
  {name:'Beginner',xpReq:0,color:'#94a3b8'},
  {name:'Novice',xpReq:100,color:'#84cc16'},
  {name:'Apprentice',xpReq:300,color:'#22c55e'},
  {name:'Intermediate',xpReq:600,color:'#14b8a6'},
  {name:'Advanced',xpReq:1000,color:'#06b6d4'},
  {name:'Expert',xpReq:1500,color:'#3b82f6'},
  {name:'Master',xpReq:2200,color:'#6366f1'},
  {name:'Virtuoso',xpReq:3000,color:'#8b5cf6'},
  {name:'Legend',xpReq:4000,color:'#a855f7'},
  {name:'Star',xpReq:5500,color:'#fbbf24'}
 ];
 var ACTIVITIES=['Song Complete','High Score','Perfect Pitch','Streak Day','Quiz Correct','Warmup Done','Duet Win','Challenge Clear'];
 var ACTIVITY_XP=[10,25,15,20,5,8,30,35];
 var xp=ls25('staminaXP',450);
 var hist=ls25('staminaHist',[50,80,120,200,0,0,0,0]);

 function getLevel(xpVal){
  var lv=0;
  for(var i=LEVELS.length-1;i>=0;i--){if(xpVal>=LEVELS[i].xpReq){lv=i;break;}}
  return lv;
 }

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('Vocal Stamina Level System',W/2,28);
  var lv=getLevel(xp),nextLv=Math.min(lv+1,9);
  var pct=nextLv>lv?(xp-LEVELS[lv].xpReq)/(LEVELS[nextLv].xpReq-LEVELS[lv].xpReq)*100:100;
  var cx=W/2,cy=120,r=55;
  ctx.strokeStyle='#374151';ctx.lineWidth=10;
  ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI,0);ctx.stroke();
  ctx.strokeStyle=LEVELS[lv].color;ctx.lineWidth=10;
  ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI,-Math.PI+Math.PI*(pct/100));ctx.stroke();
  ctx.fillStyle=LEVELS[lv].color;ctx.font='bold 24px sans-serif';ctx.textAlign='center';
  ctx.fillText('Lv.'+lv,cx,cy-10);
  ctx.fillStyle='#e2e8f0';ctx.font='bold 14px sans-serif';
  ctx.fillText(LEVELS[lv].name,cx,cy+15);
  ctx.fillStyle='#94a3b8';ctx.font='12px sans-serif';
  ctx.fillText('XP: '+xp+' / '+(lv<9?LEVELS[nextLv].xpReq:'MAX'),cx,cy+35);
  ctx.fillText(Math.round(pct)+'%',cx,cy+52);
  var barW=(W-80)/8,baseY=H-50,maxH=120;
  var maxXP=Math.max.apply(null,hist)||1;
  for(var i=0;i<8;i++){
   var bh=hist[i]/maxXP*maxH,x=40+i*barW,y=baseY-bh;
   var gradient=ctx.createLinearGradient(x,y,x,baseY);
   gradient.addColorStop(0,LEVELS[Math.min(i,9)].color);gradient.addColorStop(1,LEVELS[Math.min(i,9)].color+'40');
   ctx.fillStyle=gradient;ctx.fillRect(x+3,y,barW-6,bh);
   ctx.fillStyle='#e2e8f0';ctx.font='9px sans-serif';ctx.textAlign='center';
   ctx.fillText(ACTIVITIES[i].split(' ')[0],x+barW/2,baseY+12);
   ctx.fillText('+'+hist[i]+'xp',x+barW/2,y-6);
  }
  for(var i=0;i<10;i++){
   var ly=H-220+i*16;
   ctx.fillStyle=i<=lv?LEVELS[9-i].color:LEVELS[9-i].color+'40';
   ctx.fillRect(W-130,ly,80,12);
   ctx.fillStyle=i<=lv?'#0f0a1e':'#64748b';ctx.font='9px sans-serif';ctx.textAlign='center';
   ctx.fillText(LEVELS[9-i].name,W-90,ly+10);
  }
 }

 function createPanel(){
  var panel=document.createElement('div');panel.id='sv25-stamina-level';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:640px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=600;cv.height=380;
  cv.style.cssText='width:100%;border-radius:10px;';
  panel.appendChild(cv);
  var btns=document.createElement('div');btns.style.cssText='display:flex;gap:6px;justify-content:center;margin-top:8px;flex-wrap:wrap;';
  ACTIVITIES.forEach(function(act,i){
   var btn=document.createElement('button');btn.textContent=act+' +'+ACTIVITY_XP[i];
   btn.style.cssText='padding:4px 8px;background:#374151;color:#e2e8f0;border:none;border-radius:6px;cursor:pointer;font-size:10px;';
   btn.onclick=function(){
    var prevLv=getLevel(xp);xp+=ACTIVITY_XP[i];hist[i]+=ACTIVITY_XP[i];
    ls25s('staminaXP',xp);ls25s('staminaHist',hist);
    var newLv=getLevel(xp);
    if(newLv>prevLv)sfx25('staminaLevel25');else sfx25('staminaXP25');
    render(cv);
   };
   btns.appendChild(btn);
  });
  panel.appendChild(btns);document.body.appendChild(panel);
  render(cv);return panel;
 }
 var p3=createPanel();
 window.__sv25StaminaLevel=function(){p3.style.display='block';};
})();

/* ── Feature 4: AI Duet Coaching Simulator ── */
(function duetCoach(){
 var AI_SINGERS=[
  {name:'Luna',range:'C3-G5',style:'Ballad',stats:[90,75,85,80,88,72]},
  {name:'Kai',range:'A2-D5',style:'R&B',stats:[78,92,70,85,80,88]},
  {name:'Sora',range:'D3-A5',style:'Pop',stats:[85,80,90,75,82,78]},
  {name:'Jin',range:'B2-E5',style:'Rock',stats:[72,88,65,92,70,85]},
  {name:'Hana',range:'E3-B5',style:'Jazz',stats:[88,70,92,68,90,82]},
  {name:'Minho',range:'G2-C5',style:'Hip-Hop',stats:[65,95,60,90,68,92]},
  {name:'Yuna',range:'F3-C6',style:'Musical',stats:[92,72,88,70,95,68]},
  {name:'Taeho',range:'C3-F5',style:'Trot',stats:[80,68,75,88,78,90]},
  {name:'Jisu',range:'D3-G5',style:'Indie',stats:[82,78,88,72,85,80]},
  {name:'Daehyun',range:'A2-E5',style:'Dance',stats:[75,90,72,88,70,85]}
 ];
 var AXES=['Pitch','Power','Emotion','Rhythm','Range','Harmony'];
 var userStats=ls25('duetUser',[75,70,80,72,68,65]);
 var selAI=0;

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('AI Duet Coach: '+AI_SINGERS[selAI].name+' ('+AI_SINGERS[selAI].style+')',W/2,28);
  var cx=W/2-80,cy=H/2+10,r=120,angles=6;
  for(var ring=1;ring<=4;ring++){
   ctx.strokeStyle='#374151';ctx.lineWidth=1;ctx.beginPath();
   for(var a=0;a<angles;a++){
    var angle=-Math.PI/2+a*(Math.PI*2/angles),rx=cx+r*(ring/4)*Math.cos(angle),ry=cy+r*(ring/4)*Math.sin(angle);
    if(a===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
   }
   ctx.closePath();ctx.stroke();
  }
  ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.fillStyle='#a855f740';ctx.beginPath();
  for(var a=0;a<angles;a++){
   var angle=-Math.PI/2+a*(Math.PI*2/angles),val=userStats[a]/100;
   var x=cx+r*val*Math.cos(angle),y=cy+r*val*Math.sin(angle);
   if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();ctx.fill();ctx.stroke();
  var aiS=AI_SINGERS[selAI].stats;
  ctx.strokeStyle='#22c55e';ctx.lineWidth=2;ctx.fillStyle='#22c55e30';ctx.beginPath();
  for(var a=0;a<angles;a++){
   var angle=-Math.PI/2+a*(Math.PI*2/angles),val=aiS[a]/100;
   var x=cx+r*val*Math.cos(angle),y=cy+r*val*Math.sin(angle);
   if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();ctx.fill();ctx.stroke();
  for(var a=0;a<angles;a++){
   var angle=-Math.PI/2+a*(Math.PI*2/angles);
   var lx=cx+(r+18)*Math.cos(angle),ly=cy+(r+18)*Math.sin(angle);
   ctx.fillStyle='#e2e8f0';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
   ctx.fillText(AXES[a],lx,ly);
  }
  var compat=0;for(var i=0;i<6;i++)compat+=100-Math.abs(userStats[i]-aiS[i]);
  compat=Math.round(compat/6);
  var grade=gradeFor25(compat);
  ctx.fillStyle='#a855f7';ctx.font='12px sans-serif';ctx.textAlign='left';
  ctx.fillText('● You',W-150,60);
  ctx.fillStyle='#22c55e';ctx.fillText('● '+AI_SINGERS[selAI].name,W-150,80);
  ctx.fillStyle=gradeColor25(grade);ctx.font='bold 18px sans-serif';
  ctx.fillText('Compat: '+compat+'%',W-160,120);
  ctx.fillText(grade,W-80,120);
  ctx.fillStyle='#94a3b8';ctx.font='11px sans-serif';
  ctx.fillText('Range: '+AI_SINGERS[selAI].range,W-160,145);
  for(var i=0;i<6;i++){
   var gap=aiS[i]-userStats[i],barY=170+i*26,barX=W-160;
   ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.textAlign='left';
   ctx.fillText(AXES[i],barX,barY+10);
   ctx.fillStyle=gap>0?'#ef4444':'#22c55e';
   ctx.fillRect(barX+55,barY,Math.abs(gap)*0.8,14);
   ctx.fillStyle='#e2e8f0';ctx.font='10px sans-serif';ctx.textAlign='left';
   ctx.fillText((gap>0?'+':'')+gap,barX+55+Math.abs(gap)*0.8+4,barY+11);
  }
 }

 function createPanel(){
  var panel=document.createElement('div');panel.id='sv25-duet-coach';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:660px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=620;cv.height=400;
  cv.style.cssText='width:100%;border-radius:10px;';
  panel.appendChild(cv);
  var tabRow=document.createElement('div');tabRow.style.cssText='display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-top:8px;';
  AI_SINGERS.forEach(function(singer,idx){
   var btn=document.createElement('button');btn.textContent=singer.name;
   btn.style.cssText='padding:4px 8px;background:'+(idx===0?'#7c3aed':'#374151')+';color:white;border:none;border-radius:6px;cursor:pointer;font-size:10px;';
   btn.onclick=function(){selAI=idx;sfx25('duetCoach25');
    tabRow.querySelectorAll('button').forEach(function(b,bi){b.style.background=bi===idx?'#7c3aed':'#374151';});
    render(cv);};
   tabRow.appendChild(btn);
  });
  panel.appendChild(tabRow);document.body.appendChild(panel);
  render(cv);return panel;
 }
 var p4=createPanel();
 window.__sv25DuetCoach=function(){p4.style.display='block';};
})();

/* ── Feature 5: Karaoke Ambiance Controller ── */
(function ambianceCtrl(){
 var MOODS=[
  {name:'Concert',colors:['#7c3aed','#a855f7','#c084fc'],icon:'🎤',desc:'Live concert energy'},
  {name:'Romantic',colors:['#f43f5e','#ec4899','#fb7185'],icon:'❤️',desc:'Warm romantic glow'},
  {name:'Party',colors:['#eab308','#f97316','#ef4444'],icon:'🎉',desc:'Neon party vibes'},
  {name:'Chill',colors:['#06b6d4','#22d3ee','#67e8f9'],icon:'🌊',desc:'Relaxed lounge feel'},
  {name:'Retro',colors:['#f97316','#fb923c','#fdba74'],icon:'🕺',desc:'80s retro neon'},
  {name:'Elegant',colors:['#d4af37','#f59e0b','#fbbf24'],icon:'✨',desc:'Golden elegance'},
  {name:'Night',colors:['#1e1b4b','#312e81','#4338ca'],icon:'🌙',desc:'Midnight session'},
  {name:'Nature',colors:['#15803d','#22c55e','#86efac'],icon:'🌿',desc:'Forest acoustic'}
 ];
 var selMood=ls25('ambianceSel',0);

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('Karaoke Ambiance Controller',W/2,28);
  var m=MOODS[selMood];
  var grad=ctx.createRadialGradient(W/2,H/2,20,W/2,H/2,200);
  grad.addColorStop(0,m.colors[0]+'60');grad.addColorStop(0.5,m.colors[1]+'30');grad.addColorStop(1,m.colors[2]+'10');
  ctx.fillStyle=grad;ctx.fillRect(20,50,W-40,200);
  ctx.strokeStyle=m.colors[0];ctx.lineWidth=2;ctx.strokeRect(20,50,W-40,200);
  ctx.fillStyle='#ffffff';ctx.font='48px sans-serif';ctx.textAlign='center';
  ctx.fillText(m.icon,W/2,140);
  ctx.fillStyle=m.colors[0];ctx.font='bold 22px sans-serif';
  ctx.fillText(m.name,W/2,185);
  ctx.fillStyle='#94a3b8';ctx.font='13px sans-serif';
  ctx.fillText(m.desc,W/2,210);
  var palY=270;
  for(var p=0;p<3;p++){
   ctx.fillStyle=m.colors[p];
   ctx.fillRect(W/2-90+p*60,palY,50,30);
   ctx.strokeStyle='#ffffff30';ctx.strokeRect(W/2-90+p*60,palY,50,30);
   ctx.fillStyle='#e2e8f0';ctx.font='9px sans-serif';
   ctx.fillText(m.colors[p],W/2-65+p*60,palY+44);
  }
  var gridX=30,gridY=320;
  for(var i=0;i<8;i++){
   var gx=gridX+(i%4)*((W-60)/4),gy=gridY+Math.floor(i/4)*30;
   ctx.fillStyle=i===selMood?MOODS[i].colors[0]:MOODS[i].colors[0]+'60';
   ctx.fillRect(gx,gy,((W-60)/4)-4,24);
   ctx.fillStyle=i===selMood?'#ffffff':'#94a3b8';ctx.font='11px sans-serif';ctx.textAlign='center';
   ctx.fillText(MOODS[i].icon+' '+MOODS[i].name,gx+((W-60)/4-4)/2,gy+16);
  }
 }

 function createPanel(){
  var panel=document.createElement('div');panel.id='sv25-ambiance';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:640px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=600;cv.height=380;
  cv.style.cssText='width:100%;border-radius:10px;cursor:pointer;';
  panel.appendChild(cv);
  document.body.appendChild(panel);
  cv.addEventListener('click',function(e){
   var p=cxy25(cv,e),gridX=30,gridY=320,cellW=(600-60)/4;
   for(var i=0;i<8;i++){
    var gx=gridX+(i%4)*cellW,gy=gridY+Math.floor(i/4)*30;
    if(p.x>=gx&&p.x<=gx+cellW-4&&p.y>=gy&&p.y<=gy+24){
     selMood=i;ls25s('ambianceSel',i);sfx25('ambianceSet25');render(cv);break;
    }
   }
  });
  render(cv);return panel;
 }
 var p5=createPanel();
 window.__sv25Ambiance=function(){p5.style.display='block';};
})();

/* ── Feature 6: Vocal Training Scheduler ── */
(function trainingScheduler(){
 var DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
 var EXERCISES=['Warmup','Scales','Breathing','Pitch','Power','Emotion','Range','Cooldown'];
 var EX_COLORS=['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6','#ec4899','#06b6d4'];
 var schedule=ls25('trainSchedule',DAYS.map(function(d,i){
  return EXERCISES.map(function(ex,j){return(i+j)%3===0?1:0;});
 }));

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('Vocal Training Scheduler',W/2,28);
  var cellW=(W-100)/7,cellH=(H-120)/8,startX=90,startY=55;
  for(var d=0;d<7;d++){
   ctx.fillStyle='#a855f7';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
   ctx.fillText(DAYS[d],startX+d*cellW+cellW/2,startY-6);
  }
  for(var e=0;e<8;e++){
   ctx.fillStyle=EX_COLORS[e];ctx.font='10px sans-serif';ctx.textAlign='right';
   ctx.fillText(EXERCISES[e],startX-6,startY+e*cellH+cellH/2+4);
  }
  for(var d=0;d<7;d++){
   for(var e=0;e<8;e++){
    var x=startX+d*cellW,y=startY+e*cellH;
    ctx.fillStyle=schedule[d][e]?EX_COLORS[e]+'90':'#1e1b4b';
    ctx.fillRect(x+2,y+2,cellW-4,cellH-4);
    ctx.strokeStyle=schedule[d][e]?EX_COLORS[e]:'#374151';ctx.lineWidth=1;
    ctx.strokeRect(x+2,y+2,cellW-4,cellH-4);
    if(schedule[d][e]){
     ctx.fillStyle='#ffffff';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
     ctx.fillText('✓',x+cellW/2,y+cellH/2+5);
    }
   }
  }
  var totalSlots=0,filled=0;
  for(var d=0;d<7;d++)for(var e=0;e<8;e++){totalSlots++;if(schedule[d][e])filled++;}
  var pct=Math.round(filled/totalSlots*100);
  var grade=gradeFor25(pct);
  ctx.fillStyle=gradeColor25(grade);ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('Schedule Fill: '+pct+'% ('+filled+'/'+totalSlots+')  Grade: '+grade,W/2,H-20);
 }

 function createPanel(){
  var panel=document.createElement('div');panel.id='sv25-scheduler';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:660px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=620;cv.height=380;
  cv.style.cssText='width:100%;border-radius:10px;cursor:pointer;';
  panel.appendChild(cv);
  var btns=document.createElement('div');btns.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:8px;';
  var autoBtn=document.createElement('button');autoBtn.textContent='⚡ Auto-Fill';
  autoBtn.style.cssText='padding:6px 14px;background:#7c3aed;color:white;border:none;border-radius:8px;cursor:pointer;font-size:12px;';
  autoBtn.onclick=function(){
   for(var d=0;d<7;d++)for(var e=0;e<8;e++)schedule[d][e]=Math.random()>0.4?1:0;
   ls25s('trainSchedule',schedule);sfx25('scheduleDone25');render(cv);
  };
  var clearBtn=document.createElement('button');clearBtn.textContent='↻ Clear';
  clearBtn.style.cssText='padding:6px 14px;background:#374151;color:white;border:none;border-radius:8px;cursor:pointer;font-size:12px;';
  clearBtn.onclick=function(){
   for(var d=0;d<7;d++)for(var e=0;e<8;e++)schedule[d][e]=0;
   ls25s('trainSchedule',schedule);render(cv);
  };
  btns.appendChild(autoBtn);btns.appendChild(clearBtn);panel.appendChild(btns);
  document.body.appendChild(panel);
  cv.addEventListener('click',function(e){
   var p=cxy25(cv,e),cellW=(620-100)/7,cellH=(380-120)/8,startX=90,startY=55;
   var d=Math.floor((p.x-startX)/cellW),ex=Math.floor((p.y-startY)/cellH);
   if(d>=0&&d<7&&ex>=0&&ex<8){
    schedule[d][ex]=schedule[d][ex]?0:1;
    ls25s('trainSchedule',schedule);sfx25('scheduleSet25');render(cv);
   }
  });
  render(cv);return panel;
 }
 var p6=createPanel();
 window.__sv25Scheduler=function(){p6.style.display='block';};
})();

/* ── Feature 7: Genre Exploration Matrix ── */
(function genreMatrix(){
 var GENRES=['Ballad','Dance','Rock','R&B','Hip-Hop','Jazz','Trot','EDM','Indie','Musical'];
 var METRICS=['Pitch','Power','Emotion','Rhythm','Range','Technique'];
 var GCOLORS=['#60a5fa','#ec4899','#ef4444','#8b5cf6','#f97316','#fbbf24','#22c55e','#06b6d4','#a78bfa','#f43f5e'];
 var matrix=ls25('genreMatrix',GENRES.map(function(g,gi){
  return METRICS.map(function(m,mi){return 30+Math.floor(((gi*7+mi*13)%60));});
 }));
 var hoverCell={r:-1,c:-1};

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('Genre Exploration Matrix',W/2,28);
  var cellW=(W-110)/6,cellH=(H-100)/10,startX=100,startY=50;
  for(var m=0;m<6;m++){
   ctx.fillStyle='#a855f7';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
   ctx.fillText(METRICS[m],startX+m*cellW+cellW/2,startY-6);
  }
  for(var g=0;g<10;g++){
   ctx.fillStyle=GCOLORS[g];ctx.font='11px sans-serif';ctx.textAlign='right';
   ctx.fillText(GENRES[g],startX-6,startY+g*cellH+cellH/2+4);
   for(var m=0;m<6;m++){
    var val=matrix[g][m],x=startX+m*cellW,y=startY+g*cellH;
    var intensity=val/100;
    var r=Math.round(124+intensity*131),gv=Math.round(58+intensity*197),b=Math.round(237);
    ctx.fillStyle='rgb('+r+','+gv+','+b+')';
    if(hoverCell.r===g&&hoverCell.c===m)ctx.fillStyle='#ffffff';
    ctx.fillRect(x+1,y+1,cellW-2,cellH-2);
    ctx.fillStyle=intensity>0.5?'#0f0a1e':'#e2e8f0';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
    ctx.fillText(val,x+cellW/2,y+cellH/2+4);
   }
  }
  if(hoverCell.r>=0&&hoverCell.c>=0){
   ctx.fillStyle='rgba(26,16,37,0.9)';ctx.fillRect(W-160,H-80,150,70);
   ctx.strokeStyle='#7c3aed';ctx.strokeRect(W-160,H-80,150,70);
   ctx.fillStyle='#e2e8f0';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
   ctx.fillText(GENRES[hoverCell.r]+' x '+METRICS[hoverCell.c],W-152,H-62);
   ctx.fillStyle='#c084fc';ctx.font='12px sans-serif';
   var v=matrix[hoverCell.r][hoverCell.c],gr=gradeFor25(v);
   ctx.fillText('Score: '+v+' / Grade: '+gr,W-152,H-44);
   ctx.fillStyle=gradeColor25(gr);ctx.fillText('█████',W-152,H-26);
  }
 }

 function createPanel(){
  var panel=document.createElement('div');panel.id='sv25-genre-matrix';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:660px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=620;cv.height=400;
  cv.style.cssText='width:100%;border-radius:10px;cursor:crosshair;';
  panel.appendChild(cv);
  var btns=document.createElement('div');btns.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:8px;';
  var practiceBtn=document.createElement('button');practiceBtn.textContent='🎶 Practice Random';
  practiceBtn.style.cssText='padding:6px 14px;background:#7c3aed;color:white;border:none;border-radius:8px;cursor:pointer;font-size:12px;';
  practiceBtn.onclick=function(){
   var g=Math.floor(Math.random()*10),m=Math.floor(Math.random()*6);
   matrix[g][m]=Math.min(100,matrix[g][m]+Math.floor(Math.random()*10)+3);
   ls25s('genreMatrix',matrix);sfx25('genreExplore25');render(cv);
  };
  btns.appendChild(practiceBtn);panel.appendChild(btns);
  document.body.appendChild(panel);
  cv.addEventListener('mousemove',function(e){
   var p=cxy25(cv,e),cellW=(620-110)/6,cellH=(400-100)/10,startX=100,startY=50;
   hoverCell.c=Math.floor((p.x-startX)/cellW);hoverCell.r=Math.floor((p.y-startY)/cellH);
   if(hoverCell.c<0||hoverCell.c>=6)hoverCell.c=-1;
   if(hoverCell.r<0||hoverCell.r>=10)hoverCell.r=-1;
   render(cv);
  });
  cv.addEventListener('mouseleave',function(){hoverCell={r:-1,c:-1};render(cv);});
  cv.addEventListener('click',function(e){
   var p=cxy25(cv,e),cellW=(620-110)/6,cellH=(400-100)/10,startX=100,startY=50;
   var c=Math.floor((p.x-startX)/cellW),r=Math.floor((p.y-startY)/cellH);
   if(r>=0&&r<10&&c>=0&&c<6){
    matrix[r][c]=Math.min(100,matrix[r][c]+5);
    ls25s('genreMatrix',matrix);sfx25('genreExplore25');render(cv);
   }
  });
  render(cv);return panel;
 }
 var p7=createPanel();
 window.__sv25GenreMatrix=function(){p7.style.display='block';};
})();

/* ── Feature 8: Comprehensive Vocal Report ── */
(function vocalReport(){
 var DIMS=['Pitch Accuracy','Rhythm Stability','Emotional Expression','Vocal Power','Breathing Control','Tone Quality','Range Coverage','Stage Presence'];
 var DCOLORS=['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#3b82f6','#8b5cf6','#ec4899'];
 var scores=ls25('vocalReport',[78,72,85,65,70,80,62,75]);

 function render(cv){
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f0a1e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('Comprehensive Vocal Report',W/2,28);
  var cx=W/2-90,cy=H/2+15,r=120,n=8;
  for(var ring=1;ring<=4;ring++){
   ctx.strokeStyle='#374151';ctx.lineWidth=1;ctx.beginPath();
   for(var a=0;a<n;a++){
    var angle=-Math.PI/2+a*(Math.PI*2/n);
    var x=cx+r*(ring/4)*Math.cos(angle),y=cy+r*(ring/4)*Math.sin(angle);
    if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
   }
   ctx.closePath();ctx.stroke();
  }
  for(var a=0;a<n;a++){
   var angle=-Math.PI/2+a*(Math.PI*2/n);
   ctx.strokeStyle='#374151';ctx.beginPath();ctx.moveTo(cx,cy);
   ctx.lineTo(cx+r*Math.cos(angle),cy+r*Math.sin(angle));ctx.stroke();
  }
  ctx.strokeStyle='#a855f7';ctx.lineWidth=2.5;ctx.fillStyle='#a855f730';ctx.beginPath();
  for(var a=0;a<n;a++){
   var angle=-Math.PI/2+a*(Math.PI*2/n),val=scores[a]/100;
   var x=cx+r*val*Math.cos(angle),y=cy+r*val*Math.sin(angle);
   if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();ctx.fill();ctx.stroke();
  for(var a=0;a<n;a++){
   var angle=-Math.PI/2+a*(Math.PI*2/n);
   var lx=cx+(r+22)*Math.cos(angle),ly=cy+(r+22)*Math.sin(angle);
   ctx.fillStyle=DCOLORS[a];ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
   ctx.fillText(DIMS[a].split(' ')[0],lx,ly);
  }
  var avg=Math.round(scores.reduce(function(a,b){return a+b;},0)/8);
  var grade=gradeFor25(avg);
  var gaugeX=W-130,gaugeY=80,gaugeR=50;
  ctx.strokeStyle='#374151';ctx.lineWidth=8;
  ctx.beginPath();ctx.arc(gaugeX,gaugeY,gaugeR,-Math.PI,0);ctx.stroke();
  ctx.strokeStyle=gradeColor25(grade);ctx.lineWidth=8;
  ctx.beginPath();ctx.arc(gaugeX,gaugeY,gaugeR,-Math.PI,-Math.PI+Math.PI*(avg/100));ctx.stroke();
  ctx.fillStyle=gradeColor25(grade);ctx.font='bold 28px sans-serif';ctx.textAlign='center';
  ctx.fillText(grade,gaugeX,gaugeY-5);
  ctx.fillStyle='#e2e8f0';ctx.font='bold 14px sans-serif';
  ctx.fillText(avg+'/100',gaugeX,gaugeY+20);
  ctx.fillStyle='#94a3b8';ctx.font='10px sans-serif';
  ctx.fillText('Overall',gaugeX,gaugeY+35);
  for(var i=0;i<8;i++){
   var by=150+i*28,bx=W-170;
   ctx.fillStyle=DCOLORS[i];ctx.font='9px sans-serif';ctx.textAlign='left';
   ctx.fillText(DIMS[i].split(' ')[0],bx,by+10);
   ctx.fillStyle='#1e1b4b';ctx.fillRect(bx+50,by,90,14);
   ctx.fillStyle=DCOLORS[i];ctx.fillRect(bx+50,by,scores[i]*0.9,14);
   ctx.fillStyle='#ffffff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
   ctx.fillText(scores[i],bx+50+scores[i]*0.45,by+11);
  }
 }

 function createPanel(){
  var panel=document.createElement('div');panel.id='sv25-vocal-report';
  panel.style.cssText='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:660px;max-width:95vw;background:#1a1025;border:2px solid #7c3aed;border-radius:16px;padding:16px;z-index:5200;overflow-y:auto;max-height:90vh;box-shadow:0 0 30px rgba(124,58,237,0.4);';
  var close=document.createElement('button');
  close.textContent='✕';close.style.cssText='position:absolute;top:8px;right:12px;background:none;border:none;color:#c084fc;font-size:22px;cursor:pointer;z-index:5201;';
  close.onclick=function(){panel.style.display='none';};
  panel.appendChild(close);
  var cv=document.createElement('canvas');cv.width=620;cv.height=400;
  cv.style.cssText='width:100%;border-radius:10px;';
  panel.appendChild(cv);
  var btns=document.createElement('div');btns.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap;';
  var evalBtn=document.createElement('button');evalBtn.textContent='📊 Re-evaluate';
  evalBtn.style.cssText='padding:6px 14px;background:#7c3aed;color:white;border:none;border-radius:8px;cursor:pointer;font-size:12px;';
  evalBtn.onclick=function(){
   for(var i=0;i<8;i++)scores[i]=Math.min(100,scores[i]+Math.floor(Math.random()*8)-2);
   ls25s('vocalReport',scores);sfx25('reportGen25');render(cv);
  };
  var resetBtn=document.createElement('button');resetBtn.textContent='↻ Reset';
  resetBtn.style.cssText='padding:6px 14px;background:#374151;color:white;border:none;border-radius:8px;cursor:pointer;font-size:12px;';
  resetBtn.onclick=function(){
   scores=[50,50,50,50,50,50,50,50];ls25s('vocalReport',scores);render(cv);
  };
  btns.appendChild(evalBtn);btns.appendChild(resetBtn);panel.appendChild(btns);
  document.body.appendChild(panel);
  render(cv);return panel;
 }
 var p8=createPanel();
 window.__sv25VocalReport=function(){p8.style.display='block';};
})();

/* ── Navigation Buttons (append to existing nav, no new bottom bar) ── */
var btnDefs=[
 {label:'Pitch Hist',fn:'__sv25PitchHist',key:'Q'},
 {label:'Emotion Arc',fn:'__sv25EmotionArc',key:'W'},
 {label:'Stamina Lv',fn:'__sv25StaminaLevel',key:'E'},
 {label:'Duet Coach',fn:'__sv25DuetCoach',key:'R'},
 {label:'Ambiance',fn:'__sv25Ambiance',key:'T'},
 {label:'Scheduler',fn:'__sv25Scheduler',key:'Y'},
 {label:'Genre Map',fn:'__sv25GenreMatrix',key:'U'},
 {label:'Report',fn:'__sv25VocalReport',key:'I'},
 {label:'Quiz v25',fn:null,key:'0'}
];

var existingNav=document.querySelector('.bottomNav')||document.querySelector('[class*="bottom"]')||nav;
if(!existingNav){
 var allNavs=document.querySelectorAll('nav,div[class*="nav"]');
 for(var ni=0;ni<allNavs.length;ni++){
  if(allNavs[ni].querySelectorAll('button').length>=3){existingNav=allNavs[ni];break;}
 }
}

btnDefs.forEach(function(def){
 var btn=document.createElement('button');
 btn.textContent=def.label;
 btn.title='v25: '+def.label+(def.key?' (Shift+'+def.key+')':'');
 btn.style.cssText='padding:6px 10px;margin:2px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:white;border:none;border-radius:8px;cursor:pointer;font-size:11px;font-weight:bold;box-shadow:0 2px 6px rgba(124,58,237,0.4);';
 btn.addEventListener('mouseenter',function(){btn.style.transform='scale(1.08)';});
 btn.addEventListener('mouseleave',function(){btn.style.transform='scale(1)';});
 btn.onclick=function(){
  sfx25('navClick25');
  if(def.fn&&window[def.fn])window[def.fn]();
 };
 if(existingNav)existingNav.appendChild(btn);
});

/* ── Keyboard Shortcuts (Shift+Q/W/E/R/T/Y/U/I/0) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'Q':'__sv25PitchHist','W':'__sv25EmotionArc','E':'__sv25StaminaLevel',
  'R':'__sv25DuetCoach','T':'__sv25Ambiance','Y':'__sv25Scheduler',
  'U':'__sv25GenreMatrix','I':'__sv25VocalReport'
 };
 var key=e.key.toUpperCase();
 if(map[key]&&window[map[key]]){e.preventDefault();sfx25('navClick25');window[map[key]]();}
 if(key==='0'||e.code==='Digit0'){e.preventDefault();sfx25('navClick25');}
});

});
})();
