/* StarVoice v24 Patch — Self-contained IIFE module injected via SW
 * +10 songs(206->215), VocalPowerMeter Canvas, SingingRoadmap Canvas,
 * DuetCompatMatrix Canvas, VocalEqualityAnalyzer Canvas,
 * LiveFeedbackDashboard Canvas, SongGoalTracker Canvas,
 * VocalWarmCoolGuide Canvas, SingerProfileComparator Canvas,
 * quiz +15(252->267), achievements +12(210->222), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v24KaraokeLoaded) return;
window.__v24KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls24(k,d){try{var v=localStorage.getItem('sv24-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls24s(k,v){try{localStorage.setItem('sv24-'+k,JSON.stringify(v));}catch(e){}}
function gradeFor24(pct){return pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';}
function gradeColor24(g){return g==='S'?'#fbbf24':g==='A'?'#34d399':g==='B'?'#60a5fa':g==='C'?'#c084fc':'#f87171';}
function cxy24(cv,e){var r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)*(cv.width/r.width),y:(e.clientY-r.top)*(cv.height/r.height)};}

/* ── 10 New Songs (206-215) ── */
var v24Songs=[
{id:206,title:'사건의 지평선',artist:'윤하',bpm:98,key:'Em',difficulty:4,genre:'rock',
 notes:[E3,G3,B3,E4,D4,B3,G3,E3,Fs3,A3,C4,E4,D4,C4,B3,A3],
 lyrics:['사','건','의','지','평','선','저','너','머','로','걸','어','가','는','너','를'],
 duration:[459,459,459,918,459,459,459,459,459,459,459,918,459,459,459,459]},
{id:207,title:'Magnetic',artist:'ILLIT',bpm:110,key:'F',difficulty:2,genre:'dance',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['You','and','I','Mag','net','ic','우','린','서','로','끌','리','는','자','석','같이'],
 duration:[409,409,409,818,409,409,409,409,409,409,409,818,409,409,409,409]},
{id:208,title:'Love Lee',artist:'AKMU',bpm:88,key:'G',difficulty:3,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['사','랑','아','내','가','말','했','잖','아','Love','Lee','내','곁','에','있','어'],
 duration:[511,511,511,1022,511,511,511,511,511,511,511,1022,511,511,511,511]},
{id:209,title:'고민중독',artist:'QWER',bpm:150,key:'C',difficulty:3,genre:'rock',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['고','민','중','독','에','빠','진','나','오','늘','도','또','생','각','만','해'],
 duration:[300,300,300,600,300,300,300,300,300,300,300,600,300,300,300,300]},
{id:210,title:'Sticky',artist:'KISS OF LIFE',bpm:108,key:'Ab',difficulty:3,genre:'dance',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db4,F4,Ab4,G4,F4,Eb4,Db4],
 lyrics:['Sticky','sticky','너','에','게','자','꾸','만','붙','어','버','린','내','마','음','아'],
 duration:[417,417,417,834,417,417,417,417,417,417,417,834,417,417,417,417]},
{id:211,title:'비의 랩소디',artist:'임재현',bpm:70,key:'Db',difficulty:4,genre:'ballad',
 notes:[Db4,F4,Ab4,Db5,C5,Ab4,F4,Db4,Eb4,Gb4,Bb4,Db5,C5,Bb4,Ab4,Gb4],
 lyrics:['비','가','내','리','는','날','이','면','네','생','각','에','또','눈','물','나'],
 duration:[643,643,643,1286,643,643,643,643,643,643,643,1286,643,643,643,643]},
{id:212,title:'HEYA',artist:'IVE',bpm:130,key:'Cm',difficulty:3,genre:'dance',
 notes:[C4,Eb4,G4,C5,Bb4,G4,Eb4,C4,D4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['HEYA','HEYA','너','를','향','한','내','춤','사','위','멈','추','지','않','아','HEYA'],
 duration:[346,346,346,692,346,346,346,346,346,346,346,692,346,346,346,346]},
{id:213,title:'Crazy',artist:'LE SSERAFIM',bpm:120,key:'Am',difficulty:3,genre:'dance',
 notes:[A3,C4,E4,A4,G4,E4,C4,A3,B3,D4,F4,A4,G4,F4,E4,D4],
 lyrics:['Crazy','Crazy','넌','날','미','치','게','만','들','어','버','려','오','늘','도','또'],
 duration:[375,375,375,750,375,375,375,375,375,375,375,750,375,375,375,375]},
{id:214,title:'나는 아픈 건 딱 질색이니까',artist:'BTS',bpm:100,key:'E',difficulty:3,genre:'pop',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['나','는','아','픈','건','딱','질','색','이','니','까','너','만','은','아','파'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:215,title:'봄날',artist:'BTS',bpm:106,key:'Ab',difficulty:4,genre:'ballad',
 notes:[C4,Eb4,Ab4,C5,Bb4,Ab4,Eb4,C4,Db4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['봄','날','이','오','면','네','가','더','보','고','싶','어','질','거','야','텐데'],
 duration:[425,425,425,850,425,425,425,425,425,425,425,850,425,425,425,425]}
];
(function injectSongs24(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v24Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v24 (16 sounds) ── */
var actx24=null;
function getAC24(){if(!actx24)try{actx24=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx24;}
function sfx24(type){
 var ac=getAC24();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  powerTrain:{f:523,d:.35,wave:'triangle',gS:.22,gE:0},
  roadmapAdvance:{f:440,d:.3,wave:'sine',gS:.18,gE:0},
  roadmapMilestone:{f:880,d:.6,wave:'triangle',gS:.3,gE:0},
  matrixSelect:{f:349,d:.3,wave:'sine',gS:.16,gE:0},
  equalityAnalyze:{f:659,d:.4,wave:'triangle',gS:.2,gE:0},
  feedbackPulse:{f:294,d:.15,wave:'sine',gS:.1,gE:0},
  feedbackScore:{f:784,d:.45,wave:'triangle',gS:.25,gE:0},
  goalSet:{f:466,d:.3,wave:'sine',gS:.18,gE:0},
  goalComplete:{f:988,d:.55,wave:'triangle',gS:.3,gE:0},
  routineStart:{f:330,d:.3,wave:'sine',gS:.16,gE:0},
  routineDone:{f:523,d:.5,wave:'triangle',gS:.25,gE:0},
  profileCompare:{f:392,d:.35,wave:'sine',gS:.18,gE:0},
  quizCorrect24:{f:1175,d:.3,wave:'triangle',gS:.22,gE:0},
  quizWrong24:{f:185,d:.4,wave:'sawtooth',gS:.1,gE:0},
  achieve24:{f:1319,d:.6,wave:'triangle',gS:.32,gE:0},
  navClick24:{f:740,d:.2,wave:'sine',gS:.15,gE:0}
 };
 var c=cfg[type]||cfg.navClick24;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='powerTrain'){o.frequency.setValueAtTime(c.f*0.75,t);o.frequency.exponentialRampToValueAtTime(c.f*1.3,t+c.d);}
 if(type==='roadmapMilestone'){o.frequency.setValueAtTime(c.f*0.7,t);o.frequency.exponentialRampToValueAtTime(c.f*1.4,t+c.d);}
 if(type==='goalComplete'){o.frequency.setValueAtTime(c.f*0.8,t);o.frequency.exponentialRampToValueAtTime(c.f*1.35,t+c.d*0.6);o.frequency.exponentialRampToValueAtTime(c.f,t+c.d);}
 if(type==='routineDone'){o.frequency.setValueAtTime(c.f*0.85,t);o.frequency.exponentialRampToValueAtTime(c.f*1.2,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Quiz v24 (+15 questions, 252->267) ── */
var v24Quiz=[
{q:'&quot;보컬 파워 미터&quot;가 측정하는 것은?',a:['성량과 발성 투사력을 시각화하여 파워를 측정','노래 가사 암기력','춤 동작 정확도','악보 읽는 속도'],c:0},
{q:'&quot;가창력 발전 로드맵&quot;의 목적은?',a:['입문부터 신 단계까지 구조화된 성장 경로 제공','노래방 예약 시스템','악기 연주법 안내','작곡 프로그램 실행'],c:0},
{q:'&quot;듀엣 호환성 매트릭스&quot;는 무엇을 기준으로 매칭하나?',a:['음역대·음색·스타일의 궁합도','키(신장)','나이','거주 지역'],c:0},
{q:'&quot;보컬 이퀄리티 분석기&quot;가 측정하는 핵심은?',a:['여러 세션에 걸친 음정·음색·리듬의 일관성','한 곡의 최고음','노래 길이','가사 정확도'],c:0},
{q:'&quot;라이브 피드백 대시보드&quot;의 특징은?',a:['실시간 다중 지표로 노래를 즉시 코칭','녹음 파일만 분석','한 달에 한 번 결과 제공','오프라인 전용 기능'],c:0},
{q:'노래 목표 추적기에서 설정 가능한 목표가 아닌 것은?',a:['타인의 목소리 변조','주간 스코어 목표','일일 곡 수 목표','연습 시간 목표'],c:0},
{q:'보컬 웜업의 올바른 순서는?',a:['가벼운 허밍부터 시작해 점차 강도를 높임','처음부터 고음 벨팅 시도','웜업 없이 바로 고음 시도','찬물부터 마시기'],c:0},
{q:'노래 후 쿨다운이 중요한 이유는?',a:['성대 피로를 완화하고 회복을 도움','음역을 더 넓혀줌','다음 곡의 키를 자동 조정','점수를 더 잘 받기 위해'],c:0},
{q:'&quot;싱어 프로필 비교기&quot;의 활용법은?',a:['AI 싱어와 6축 지표를 비교해 격차를 분석','SNS 팔로워 수 비교','노래방 이용 시간 비교','음식 취향 비교'],c:0},
{q:'&quot;벨팅(Belting)&quot; 창법이란?',a:['가슴소리를 고음역까지 강하게 확장하는 창법','속삭이듯 부르는 창법','비음을 강조하는 창법','무음으로 립싱크하는 것'],c:0},
{q:'&quot;믹스보이스(Mixed Voice)&quot;란?',a:['흉성과 두성을 혼합해 균형 잡힌 음색을 내는 발성','팔세토만 사용하는 발성','랩만을 위한 발성','반주 없이 부르는 것'],c:0},
{q:'보컬 휴식이 필요한 신호는?',a:['목이 쉬거나 고음이 평소보다 힘들 때','노래를 너무 잘 부를 때','신곡이 발매됐을 때','예약이 많을 때'],c:0},
{q:'&quot;호흡 지지(Breath Support)&quot;의 역할은?',a:['안정적인 음정과 음량 유지를 위한 횡격막 조절','목소리를 크게만 만드는 것','반주 속도를 맞추는 것','가사를 외우는 것'],c:0},
{q:'&quot;프레이징(Phrasing)&quot;이 좋은 노래란?',a:['가사와 멜로디의 흐름을 자연스럽게 끊어 표현','모든 음을 동일한 세기로 부르는 것','박자를 무시하고 부르는 것','가사를 빨리 읽는 것'],c:0},
{q:'무대 매너(Stage Presence)에 포함되지 않는 것은?',a:['목소리 크기를 항상 최대로 유지하기','관객과의 아이컨택','자연스러운 제스처','자신감 있는 태도'],c:0}
];
(function injectQuiz24(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v24Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v24 (+12, 210->222) ── */
var v24Achievements=[
 {id:'power_master',name:'파워 마스터',desc:'보컬 파워 미터에서 12개 발성 전부 70 이상 달성'},
 {id:'roadmap_milestone',name:'로드맵 마일스톤',desc:'가창력 발전 로드맵에서 5단계 이상 도달'},
 {id:'duet_expert',name:'듀엣 매칭 전문가',desc:'듀엣 호환성 매트릭스에서 10회 이상 셀 분석'},
 {id:'equality_analyzer',name:'이퀄리티 분석가',desc:'보컬 이퀄리티 분석기 10회 이상 실행'},
 {id:'feedback_dashboard',name:'라이브 피드백 마스터',desc:'라이브 피드백 대시보드 5회 이상 실행'},
 {id:'goal_achiever',name:'목표 달성자',desc:'노래 목표 추적기에서 목표 4개 이상 달성'},
 {id:'warmcool_routine',name:'웜쿨 루틴 완주',desc:'웜업/쿨다운 루틴 각각 1회 이상 완료'},
 {id:'profile_comparer',name:'프로필 비교왕',desc:'싱어 프로필 비교기에서 8명 전원과 비교'},
 {id:'quiz_v24_master',name:'퀴즈 v24 마스터',desc:'v24 퀴즈 15문항 전부 정답'},
 {id:'song_215',name:'215곡 달성',desc:'총 215곡 라이브러리 보유'},
 {id:'v24_explorer',name:'v24 탐험가',desc:'v24 8개 기능 전부 사용'},
 {id:'v24_complete',name:'v24 컴플리트',desc:'v24 전 업적 달성'}
];
(function injectAchievements24(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v24Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Shared helpers ── */
function mkSec24(id,title,emoji){
 var sec=document.createElement('div');sec.id=id;
 sec.style.cssText='background:rgba(15,10,30,.85);border:1px solid rgba(168,85,247,.25);border-radius:12px;padding:14px;margin:14px 0';
 var h=document.createElement('div');
 h.style.cssText='display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none';
 h.innerHTML='<span style="font-size:1.05em;font-weight:bold;color:#c084fc">'+emoji+' '+title+'</span><span class="sv24-toggle" style="color:#a855f7;font-size:.85em">▼ 열기</span>';
 var body=document.createElement('div');body.style.cssText='display:none;margin-top:10px';
 h.onclick=function(){
  var open=body.style.display!=='none';
  body.style.display=open?'none':'block';
  h.querySelector('.sv24-toggle').textContent=open?'▼ 열기':'▲ 닫기';
  if(!open)sfx24('navClick24');
 };
 sec.appendChild(h);sec.appendChild(body);
 return{sec:sec,body:body};
}

function mkCanvas24(parent,w,h,id){
 var wrap=document.createElement('div');wrap.style.cssText='text-align:center;margin:8px 0;overflow-x:auto';
 var c=document.createElement('canvas');c.id=id;c.width=w;c.height=h;
 c.style.cssText='max-width:100%;border-radius:8px;background:#0d0820;border:1px solid rgba(168,85,247,.2)';
 wrap.appendChild(c);parent.appendChild(wrap);
 return c;
}

function mkBtn24(id,label,grad){
 return '<button id="'+id+'" style="padding:6px 14px;background:'+grad+';color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">'+label+'</button>';
}

/* ═══════════════════════════════════════════════════════════════
   1. 보컬 파워 미터 Canvas 620x400
   - 12종 발성(벨팅/팔세토/믹스보이스 등) 파워 레벨 막대그래프
   - <40 빨강, 40-70 노랑, 70+ 초록, 클릭 훈련 시뮬레이션, S~D 등급
   ═══════════════════════════════════════════════════════════════ */
function createVocalPower(){
 var s=mkSec24('sv24-vocal-power','보컬 파워 미터','💪');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">12종 발성(벨팅/팔세토/믹스보이스/호흡지속/폴사토/비브라토 등)의 파워 레벨 시각화. 막대를 클릭해 훈련 시뮬레이션, S~D 종합등급</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +mkBtn24('sv24-power-all','🔥 전체 훈련','linear-gradient(135deg,#7c3aed,#a855f7)')
  +'<button id="sv24-power-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>';
 var cv=mkCanvas24(s.body,620,400,'sv24-power-cv');
 var ctx=cv.getContext('2d');
 var exList=['벨팅','팔세토','믹스보이스','호흡지속','폴사토','비브라토','트릴','스타카토','레가토','음정도약','성대닫기','발성투사'];
 var power=ls24('power-data',null);
 if(!power){power=[];for(var pi=0;pi<12;pi++)power.push(15+Math.floor(Math.random()*30));ls24s('power-data',power);}
 var trainCount=ls24('power-train',0);

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 파워 미터 — 12종 발성 훈련',310,22);
  var bx=112,by=40,bw=378,barH=22,gap=6;
  for(var i=0;i<exList.length;i++){
   var y=by+i*(barH+gap);
   var val=power[i];
   var col=val<40?'#f87171':val<70?'#fbbf24':'#34d399';
   ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='right';
   ctx.fillText(exList[i],bx-8,y+barH/2+4);
   ctx.fillStyle='rgba(168,85,247,.08)';ctx.fillRect(bx,y,bw,barH);
   ctx.fillStyle=col;ctx.fillRect(bx,y,bw*val/100,barH);
   ctx.strokeStyle='rgba(168,85,247,.15)';ctx.strokeRect(bx,y,bw,barH);
   ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='left';
   ctx.fillText(val+'/100',bx+bw+6,y+barH/2+4);
  }
  var avg=Math.round(power.reduce(function(a,b){return a+b;},0)/power.length);
  var grade=gradeFor24(avg);
  ctx.fillStyle=gradeColor24(grade);ctx.font='bold 34px sans-serif';ctx.textAlign='center';
  ctx.fillText(grade,555,190);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';
  ctx.fillText('종합등급',555,210);
  ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';
  ctx.fillText('평균 파워: '+avg,555,240);
  ctx.fillStyle='rgba(239,68,68,.6)';ctx.fillRect(505,335,10,10);
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='left';ctx.fillText('<40',519,344);
  ctx.fillStyle='rgba(251,191,36,.6)';ctx.fillRect(505,350,10,10);ctx.fillText('40~70',519,359);
  ctx.fillStyle='rgba(52,211,153,.6)';ctx.fillRect(505,365,10,10);ctx.fillText('70+',519,374);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='center';
  ctx.fillText('훈련 횟수: '+trainCount+'회 (막대를 클릭해 훈련)',310,392);
 }

 setTimeout(function(){
  draw();
  cv.onclick=function(e){
   var p=cxy24(cv,e);
   var idx=Math.floor((p.y-40)/28);
   if(idx>=0&&idx<exList.length&&p.x>=112&&p.x<=490){
    power[idx]=Math.min(100,power[idx]+8+Math.floor(Math.random()*10));
    trainCount++;ls24s('power-data',power);ls24s('power-train',trainCount);
    sfx24('powerTrain');draw();
   }
  };
  document.getElementById('sv24-power-all').onclick=function(){
   for(var i=0;i<power.length;i++)power[i]=Math.min(100,power[i]+3+Math.floor(Math.random()*6));
   trainCount++;ls24s('power-data',power);ls24s('power-train',trainCount);
   sfx24('powerTrain');draw();
  };
  document.getElementById('sv24-power-reset').onclick=function(){
   power=[];for(var i=0;i<12;i++)power.push(15+Math.floor(Math.random()*30));
   trainCount=0;ls24s('power-data',power);ls24s('power-train',0);draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   2. 가창력 발전 로드맵 Canvas 600x380
   - 10단계(입문→...→신) 수직 진행, 현재 레벨 하이라이트
   - 단계별 완료율, 하단 전체 XP 바
   ═══════════════════════════════════════════════════════════════ */
function createRoadmap(){
 var s=mkSec24('sv24-roadmap','가창력 발전 로드맵','🗺️');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">입문→기초→중급→고급→세미프로→프로→마스터→그랜드마스터→레전드→신, 10단계 성장 경로. 현재 레벨 하이라이트, 단계별 완료율, 하단 XP 바</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +mkBtn24('sv24-road-xp','⭐ XP 획득','linear-gradient(135deg,#7c3aed,#a855f7)')
  +'<button id="sv24-road-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>';
 var cv=mkCanvas24(s.body,600,380,'sv24-road-cv');
 var ctx=cv.getContext('2d');
 var milestones=['입문','기초','중급','고급','세미프로','프로','마스터','그랜드마스터','레전드','신'];
 var totalXP=ls24('road-xp',0);
 var maxXP=milestones.length*100;
 function curLevel(){return Math.min(Math.floor(totalXP/100),milestones.length-1);}

 function draw(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('가창력 발전 로드맵 — 10단계',300,22);
  var x=60,y0=44,dy=27,lvl=curLevel();
  ctx.strokeStyle='rgba(168,85,247,.25)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(x,y0);ctx.lineTo(x,y0+(milestones.length-1)*dy);ctx.stroke();
  for(var i=0;i<milestones.length;i++){
   var y=y0+i*dy;
   var completed=totalXP>=(i+1)*100;
   var isCur=i===lvl;
   var pct=completed?100:(isCur?(totalXP-i*100):0);
   var col=completed?'#34d399':isCur?'#fbbf24':'rgba(168,85,247,.35)';
   ctx.beginPath();ctx.arc(x,y,9,0,Math.PI*2);ctx.fillStyle=col;ctx.fill();
   ctx.strokeStyle=isCur?'#fff':'rgba(255,255,255,.2)';ctx.lineWidth=isCur?2:1;ctx.stroke();
   ctx.fillStyle=isCur?'#fbbf24':completed?'#34d399':'#d8b4fe';ctx.font=(isCur?'bold ':'')+'12px sans-serif';ctx.textAlign='left';
   ctx.fillText((i+1)+'. '+milestones[i],x+20,y+4);
   ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(x+160,y-6,120,12);
   ctx.fillStyle=col;ctx.fillRect(x+160,y-6,120*pct/100,12);
   ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';ctx.fillText(pct+'%',x+286,y+3);
  }
  ctx.fillStyle='#c084fc';ctx.font='bold 15px sans-serif';ctx.textAlign='left';
  ctx.fillText('현재: '+milestones[lvl],420,60);
  ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';
  ctx.fillText('총 XP: '+totalXP+' / '+maxXP,420,84);
  ctx.fillText(lvl<milestones.length-1?('다음 단계까지: '+((lvl+1)*100-totalXP)+'XP'):'최고 단계 달성!',420,106);
  var overallPct=Math.round(totalXP/maxXP*100);
  ctx.fillStyle='#ec4899';ctx.font='bold 26px sans-serif';ctx.fillText(overallPct+'%',420,150);
  ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(40,352,520,14);
  var barGrad=ctx.createLinearGradient(40,0,560,0);
  barGrad.addColorStop(0,'#7c3aed');barGrad.addColorStop(1,'#ec4899');
  ctx.fillStyle=barGrad;ctx.fillRect(40,352,520*totalXP/maxXP,14);
  ctx.strokeStyle='rgba(168,85,247,.3)';ctx.strokeRect(40,352,520,14);
  ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText('전체 XP 진행률',300,346);
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv24-road-xp').onclick=function(){
   var before=curLevel();
   totalXP=Math.min(maxXP,totalXP+10+Math.floor(Math.random()*15));
   ls24s('road-xp',totalXP);
   var after=curLevel();
   if(after>before)sfx24('roadmapMilestone');else sfx24('roadmapAdvance');
   draw();
  };
  document.getElementById('sv24-road-reset').onclick=function(){
   totalXP=0;ls24s('road-xp',0);draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   3. 듀엣 호환성 매트릭스 Canvas 620x400
   - 8x8 보이스 타입 히트맵, 색상 강도=호환성 점수
   - 클릭시 상세, 마우스 오버시 행/열 하이라이트
   ═══════════════════════════════════════════════════════════════ */
function createDuetMatrix(){
 var s=mkSec24('sv24-duet-matrix','듀엣 호환성 매트릭스','💞');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">소프라노/메조/알토/테너/바리톤/베이스/카운터테너/보이소프라노 8x8 호환성 히트맵. 셀 클릭시 상세, 마우스 오버시 행/열 하이라이트</p>';
 var cv=mkCanvas24(s.body,620,400,'sv24-matrix-cv');
 var ctx=cv.getContext('2d');
 var voiceTypes=['소프라노','메조','알토','테너','바리톤','베이스','카운터테너','보이소프라노'];
 var shortLabels=['소프','메조','알토','테너','바리','베이스','카운터','보이소'];
 function compatScore(i,j){
  if(i===j)return 100;
  var d=Math.abs(i-j),base=Math.max(35,100-d*9),bonus=((i+j)%3===0)?4:0;
  return Math.min(100,base+bonus);
 }
 var selCell=ls24('matrix-sel',null);
 var clickCount=ls24('matrix-clicks',0);
 var hoverCell=null;
 var gx=112,gy=56,cell=44;

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('듀엣 호환성 매트릭스 — 8x8 히트맵',310,22);
  for(var j=0;j<8;j++){
   var x=gx+j*cell+cell/2;
   ctx.save();ctx.translate(x,gy-10);ctx.rotate(-Math.PI/6);
   ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';ctx.textAlign='left';
   ctx.fillText(shortLabels[j],0,0);ctx.restore();
  }
  for(var i=0;i<8;i++){
   var y=gy+i*cell+cell/2+3;
   ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';ctx.textAlign='right';
   ctx.fillText(shortLabels[i],gx-6,y);
  }
  for(var r=0;r<8;r++){
   for(var c=0;c<8;c++){
    var cx=gx+c*cell,cy=gy+r*cell;
    var score=compatScore(r,c);
    var alpha=0.08+score/100*0.75;
    var isRowCol=hoverCell&&(hoverCell.i===r||hoverCell.j===c);
    ctx.fillStyle='rgba(168,85,247,'+alpha+')';
    ctx.fillRect(cx+1,cy+1,cell-2,cell-2);
    if(isRowCol){ctx.strokeStyle='rgba(236,72,153,.6)';ctx.lineWidth=1.5;ctx.strokeRect(cx+1,cy+1,cell-2,cell-2);}
    if(selCell&&selCell.i===r&&selCell.j===c){ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.strokeRect(cx+2,cy+2,cell-4,cell-4);}
    ctx.fillStyle='#fff';ctx.font='9px sans-serif';ctx.textAlign='center';
    ctx.fillText(score,cx+cell/2,cy+cell/2+3);
   }
  }
  var lx=gx+8*cell+30;
  var legGrad=ctx.createLinearGradient(0,gy,0,gy+220);
  legGrad.addColorStop(0,'rgba(168,85,247,.83)');legGrad.addColorStop(1,'rgba(168,85,247,.08)');
  ctx.fillStyle=legGrad;ctx.fillRect(lx,gy,16,220);
  ctx.strokeStyle='rgba(168,85,247,.3)';ctx.strokeRect(lx,gy,16,220);
  ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';ctx.textAlign='left';
  ctx.fillText('100',lx+20,gy+8);ctx.fillText('50',lx+20,gy+114);ctx.fillText('0',lx+20,gy+218);
  ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.fillText('호환성',lx,gy-14);
  ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';ctx.textAlign='center';
  if(selCell){
   var sc=compatScore(selCell.i,selCell.j);
   ctx.fillStyle='#fbbf24';ctx.font='bold 13px sans-serif';
   ctx.fillText(voiceTypes[selCell.i]+' × '+voiceTypes[selCell.j],310,370);
   ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';
   ctx.fillText(sc+'% ('+gradeFor24(sc)+'등급)',310,392);
  }else{
   ctx.fillText('셀을 클릭하면 상세 호환성이 표시됩니다',310,378);
  }
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='left';
  ctx.fillText('분석 횟수: '+clickCount+'회',20,398);
 }

 setTimeout(function(){
  draw();
  cv.onmousemove=function(e){
   var p=cxy24(cv,e);
   var i=Math.floor((p.y-gy)/cell),j=Math.floor((p.x-gx)/cell);
   if(i>=0&&i<8&&j>=0&&j<8){hoverCell={i:i,j:j};}else{hoverCell=null;}
   draw();
  };
  cv.onclick=function(e){
   var p=cxy24(cv,e);
   var i=Math.floor((p.y-gy)/cell),j=Math.floor((p.x-gx)/cell);
   if(i>=0&&i<8&&j>=0&&j<8){
    selCell={i:i,j:j};clickCount++;
    ls24s('matrix-sel',selCell);ls24s('matrix-clicks',clickCount);
    sfx24('matrixSelect');draw();
   }
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   4. 보컬 이퀄리티 분석기 Canvas 600x380
   - 6개 일관성 지표 Radar (현재 vs 이상), S~D 등급
   - 일관성 점수%, 10세션 히스토리 라인
   ═══════════════════════════════════════════════════════════════ */
function createEquality(){
 var s=mkSec24('sv24-equality','보컬 이퀄리티 분석기','⚖️');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">음정안정/리듬일관/음색유지/음량균일/감정표현/호흡안정 6개 지표, 현재 vs 이상 Radar 오버레이, 10세션 히스토리</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +mkBtn24('sv24-eq-run','🔬 분석 실행','linear-gradient(135deg,#7c3aed,#a855f7)')
  +'<button id="sv24-eq-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>';
 var cv=mkCanvas24(s.body,600,380,'sv24-eq-cv');
 var ctx=cv.getContext('2d');
 var metrics=['음정안정','리듬일관','음색유지','음량균일','감정표현','호흡안정'];
 var curVals=ls24('eq-cur',null);
 if(!curVals){curVals=[58,60,55,62,57,59];ls24s('eq-cur',curVals);}
 var idealVals=[95,95,95,95,95,95];
 var history=ls24('eq-hist',[]);
 var runCount=ls24('eq-runs',0);

 function draw(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 이퀄리티 분석기 — 6축 일관성 Radar',300,22);
  var rcx=175,rcy=175,rr=105;
  for(var ring=1;ring<=5;ring++){
   ctx.beginPath();
   for(var ai=0;ai<=6;ai++){
    var angle=(-Math.PI/2)+(ai%6)*Math.PI*2/6;
    var rx=rcx+Math.cos(angle)*(rr*ring/5),ry=rcy+Math.sin(angle)*(rr*ring/5);
    if(ai===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
   }
   ctx.closePath();ctx.strokeStyle='rgba(168,85,247,'+(ring===5?.2:.08)+')';ctx.lineWidth=1;ctx.stroke();
  }
  for(var ai2=0;ai2<6;ai2++){
   var angle2=(-Math.PI/2)+ai2*Math.PI*2/6;
   ctx.beginPath();ctx.moveTo(rcx,rcy);ctx.lineTo(rcx+Math.cos(angle2)*rr,rcy+Math.sin(angle2)*rr);
   ctx.strokeStyle='rgba(168,85,247,.1)';ctx.stroke();
   ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';ctx.textAlign='center';
   ctx.fillText(metrics[ai2],rcx+Math.cos(angle2)*(rr+18),rcy+Math.sin(angle2)*(rr+18)+3);
  }
  ctx.beginPath();
  for(var v1=0;v1<6;v1++){
   var ang1=(-Math.PI/2)+v1*Math.PI*2/6;
   var vx1=rcx+Math.cos(ang1)*(rr*idealVals[v1]/100),vy1=rcy+Math.sin(ang1)*(rr*idealVals[v1]/100);
   if(v1===0)ctx.moveTo(vx1,vy1);else ctx.lineTo(vx1,vy1);
  }
  ctx.closePath();ctx.strokeStyle='rgba(251,191,36,.6)';ctx.lineWidth=1.5;ctx.setLineDash([4,3]);ctx.stroke();ctx.setLineDash([]);
  ctx.beginPath();
  for(var v2=0;v2<6;v2++){
   var ang2=(-Math.PI/2)+v2*Math.PI*2/6;
   var vx2=rcx+Math.cos(ang2)*(rr*curVals[v2]/100),vy2=rcy+Math.sin(ang2)*(rr*curVals[v2]/100);
   if(v2===0)ctx.moveTo(vx2,vy2);else ctx.lineTo(vx2,vy2);
  }
  ctx.closePath();ctx.fillStyle='rgba(168,85,247,.25)';ctx.fill();
  ctx.strokeStyle='rgba(168,85,247,.8)';ctx.lineWidth=2;ctx.stroke();
  var avg=Math.round(curVals.reduce(function(a,b){return a+b;},0)/curVals.length);
  var grade=gradeFor24(avg);
  ctx.fillStyle=gradeColor24(grade);ctx.font='bold 26px sans-serif';ctx.textAlign='left';
  ctx.fillText(grade,420,60);
  ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';
  ctx.fillText('일관성 점수: '+avg+'%',420,86);
  ctx.fillText('분석 횟수: '+runCount+'회',420,106);
  for(var mi=0;mi<6;mi++){ctx.fillStyle='#c084fc';ctx.font='10px sans-serif';ctx.fillText(metrics[mi]+': '+curVals[mi]+' / '+idealVals[mi],420,130+mi*16);}
  var hy=340,hx=40,hw=520,hh=25;
  ctx.strokeStyle='rgba(168,85,247,.15)';ctx.beginPath();ctx.moveTo(hx,hy);ctx.lineTo(hx+hw,hy);ctx.stroke();
  if(history.length>1){
   var stepX=hw/(history.length-1);
   ctx.beginPath();
   for(var hi=0;hi<history.length;hi++){
    var px=hx+hi*stepX,py=hy-((history[hi]/100)*hh);
    if(hi===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.strokeStyle='#ec4899';ctx.lineWidth=2;ctx.stroke();
  }
  ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';ctx.textAlign='center';
  ctx.fillText('최근 10세션 일관성 추이',300,362);
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv24-eq-run').onclick=function(){
   for(var i=0;i<curVals.length;i++)curVals[i]=Math.max(0,Math.min(100,curVals[i]+Math.floor(Math.random()*20)-5));
   var avg=Math.round(curVals.reduce(function(a,b){return a+b;},0)/curVals.length);
   history.push(avg);if(history.length>10)history.shift();
   runCount++;
   ls24s('eq-cur',curVals);ls24s('eq-hist',history);ls24s('eq-runs',runCount);
   sfx24('equalityAnalyze');draw();
  };
  document.getElementById('sv24-eq-reset').onclick=function(){
   curVals=[58,60,55,62,57,59];history=[];runCount=0;
   ls24s('eq-cur',curVals);ls24s('eq-hist',history);ls24s('eq-runs',0);draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   5. 라이브 피드백 대시보드 Canvas 620x380
   - 8개 실시간 지표 세로 게이지, 애니메이션 펄스 효과
   - 중앙 원에 종합 점수, S~D 등급
   ═══════════════════════════════════════════════════════════════ */
function createLiveFeedback(){
 var s=mkSec24('sv24-live-feedback','라이브 피드백 대시보드','📡');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">음정정확/리듬타이밍/호흡효율/음량다이나믹/감정전달/발음명확/비브라토품질/전체완성도 8개 실시간 지표, 펄스 애니메이션, 중앙 종합 점수</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +mkBtn24('sv24-feed-toggle','▶ 라이브 시작','linear-gradient(135deg,#7c3aed,#a855f7)')+'</div>';
 var cv=mkCanvas24(s.body,620,380,'sv24-feed-cv');
 var ctx=cv.getContext('2d');
 var metrics=['음정정확','리듬타이밍','호흡효율','음량다이나믹','감정전달','발음명확','비브라토품질','전체완성도'];
 var vals=ls24('feedback-vals',null);
 if(!vals){vals=[];for(var vi=0;vi<8;vi++)vals.push(50+Math.floor(Math.random()*20));ls24s('feedback-vals',vals);}
 var runCount=ls24('feedback-runs',0);
 var liveOn=false,liveInterval=null,pulsePhase=0;

 function draw(){
  ctx.clearRect(0,0,620,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('라이브 피드백 대시보드'+(liveOn?' — LIVE':''),310,22);
  var bx=44,gap=68,barW=36,baseY=300,maxH=220;
  for(var i=0;i<metrics.length;i++){
   var x=bx+i*gap;
   var h=maxH*vals[i]/100;
   var col=vals[i]<40?'#f87171':vals[i]<70?'#fbbf24':'#34d399';
   ctx.fillStyle='rgba(168,85,247,.08)';ctx.fillRect(x,baseY-maxH,barW,maxH);
   var grad=ctx.createLinearGradient(0,baseY,0,baseY-h);
   grad.addColorStop(0,'#7c3aed');grad.addColorStop(1,col);
   ctx.fillStyle=grad;ctx.fillRect(x,baseY-h,barW,h);
   ctx.strokeStyle='rgba(168,85,247,.2)';ctx.strokeRect(x,baseY-maxH,barW,maxH);
   if(liveOn){
    var pr=6+Math.sin(pulsePhase+i)*3;
    ctx.beginPath();ctx.arc(x+barW/2,baseY-h,Math.max(2,pr),0,Math.PI*2);
    ctx.fillStyle='rgba(236,72,153,.5)';ctx.fill();
   }
   ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(vals[i],x+barW/2,baseY-h-10<15?15:baseY-h-8);
   ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';
   ctx.fillText(metrics[i],x+barW/2,baseY+16);
  }
  var overall=Math.round(vals.reduce(function(a,b){return a+b;},0)/vals.length);
  var grade=gradeFor24(overall);
  var pulseR=liveOn?(34+Math.sin(pulsePhase*1.5)*3):34;
  ctx.beginPath();ctx.arc(310,90,pulseR,0,Math.PI*2);
  ctx.fillStyle='rgba(168,85,247,.15)';ctx.fill();
  ctx.strokeStyle=gradeColor24(grade);ctx.lineWidth=2.5;ctx.stroke();
  ctx.fillStyle=gradeColor24(grade);ctx.font='bold 22px sans-serif';ctx.textAlign='center';
  ctx.fillText(grade,310,84);
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';
  ctx.fillText(overall+'점',310,102);
  ctx.fillStyle='#c084fc';ctx.font='11px sans-serif';
  ctx.fillText('라이브 실행 횟수: '+runCount+'회',310,138);
 }

 function tick(){
  for(var i=0;i<vals.length;i++)vals[i]=Math.max(0,Math.min(100,vals[i]+Math.floor(Math.random()*9)-4));
  pulsePhase+=0.35;
  if(Math.random()<0.12)sfx24('feedbackPulse');
  draw();
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv24-feed-toggle').onclick=function(){
   liveOn=!liveOn;
   var btn=document.getElementById('sv24-feed-toggle');
   if(liveOn){
    btn.textContent='⏸ 라이브 정지';runCount++;ls24s('feedback-runs',runCount);
    sfx24('feedbackScore');liveInterval=setInterval(tick,150);
   }else{
    btn.textContent='▶ 라이브 시작';
    if(liveInterval)clearInterval(liveInterval);liveInterval=null;
    ls24s('feedback-vals',vals);draw();
   }
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   6. 노래 목표 추적기 Canvas 600x380
   - 8개 목표 도넛차트 2x4 그리드, 달성률/목표 vs 현재
   ═══════════════════════════════════════════════════════════════ */
function createGoalTracker(){
 var s=mkSec24('sv24-goal-tracker','노래 목표 추적기','🎯');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">일일3곡/주간스코어/음역확장/고음달성/완주곡수/S등급곡수/연습시간/스트릭연속 8개 목표 도넛차트. 도넛을 클릭해 진행 시뮬레이션</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv24-goal-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>';
 var cv=mkCanvas24(s.body,600,380,'sv24-goal-cv');
 var ctx=cv.getContext('2d');
 var defaultGoals=[
  {name:'일일3곡',target:3,current:0,unit:'곡',inc:1},
  {name:'주간스코어',target:700,current:0,unit:'점',inc:60},
  {name:'음역확장',target:24,current:0,unit:'반음',inc:2},
  {name:'고음달성',target:5,current:0,unit:'회',inc:1},
  {name:'완주곡수',target:50,current:0,unit:'곡',inc:4},
  {name:'S등급곡수',target:10,current:0,unit:'곡',inc:1},
  {name:'연습시간',target:60,current:0,unit:'분',inc:5},
  {name:'스트릭연속',target:7,current:0,unit:'일',inc:1}
 ];
 var goals=ls24('goal-data',null);
 if(!goals)goals=defaultGoals;

 function draw(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('노래 목표 추적기 — 8개 목표',300,22);
  var cols=4,rows=2,cw=150,rh=170,r=38;
  for(var i=0;i<goals.length;i++){
   var col=i%cols,row=Math.floor(i/cols);
   var cx=cw*col+cw/2,cy=44+rh*row+70;
   var g=goals[i];
   var pct=Math.min(100,Math.round(g.current/g.target*100));
   var col2=pct>=100?'#fbbf24':pct>=70?'#34d399':pct>=40?'#60a5fa':'#f87171';
   ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
   ctx.strokeStyle='rgba(168,85,247,.12)';ctx.lineWidth=9;ctx.stroke();
   ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+Math.PI*2*pct/100);
   ctx.strokeStyle=col2;ctx.lineWidth=9;ctx.stroke();
   ctx.fillStyle='#fff';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
   ctx.fillText(pct+'%',cx,cy+5);
   ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';
   ctx.fillText(g.name,cx,cy+r+18);
   ctx.fillStyle='#c084fc';ctx.font='9px sans-serif';
   ctx.fillText(g.current+'/'+g.target+g.unit,cx,cy+r+32);
  }
  var doneCount=goals.filter(function(g){return g.current>=g.target;}).length;
  var totalRate=Math.round(goals.reduce(function(a,g){return a+Math.min(100,g.current/g.target*100);},0)/goals.length);
  ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
  ctx.fillText('전체 달성률: '+totalRate+'% ('+doneCount+'/8 목표 완료) — 도넛을 클릭해 진행',300,372);
 }

 setTimeout(function(){
  draw();
  cv.onclick=function(e){
   var p=cxy24(cv,e);
   var cols=4,cw=150,rh=170;
   var col=Math.floor(p.x/cw),row=Math.floor((p.y-44)/rh);
   if(col<0||col>3||row<0||row>1)return;
   var idx=row*cols+col;
   if(idx<0||idx>=goals.length)return;
   var g=goals[idx];
   var wasComplete=g.current>=g.target;
   g.current=Math.min(g.target,g.current+g.inc);
   ls24s('goal-data',goals);
   if(!wasComplete&&g.current>=g.target)sfx24('goalComplete');else sfx24('goalSet');
   draw();
  };
  document.getElementById('sv24-goal-reset').onclick=function(){
   goals=JSON.parse(JSON.stringify(defaultGoals));ls24s('goal-data',goals);draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   7. 보컬 웜쿨다운 가이드 Canvas 620x400
   - 웜업(6종)/쿨다운(6종) 탭, 운동별 타이머, 전체 루틴 진행바
   ═══════════════════════════════════════════════════════════════ */
function createWarmCool(){
 var s=mkSec24('sv24-warmcool','보컬 웜쿨다운 가이드','🔥');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">웜업 6종(립트릴/허밍/스케일/아에이오우발성/음정도약/텅트릴), 쿨다운 6종(허밍다운/부드러운음계/호흡안정/성대이완/구강스트레칭/조용한발성). 타이머와 루틴 진행바</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv24-wc-warm" style="padding:6px 14px;background:linear-gradient(135deg,#f97316,#fbbf24);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">🔥 웜업</button>'
  +'<button id="sv24-wc-cool" style="padding:6px 14px;background:linear-gradient(135deg,#0ea5e9,#38bdf8);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">❄️ 쿨다운</button>'
  +mkBtn24('sv24-wc-start','▶ 시작','linear-gradient(135deg,#7c3aed,#a855f7)')
  +'<button id="sv24-wc-next" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">⏭ 다음 동작</button>'
  +'<button id="sv24-wc-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>';
 var cv=mkCanvas24(s.body,620,400,'sv24-wc-cv');
 var ctx=cv.getContext('2d');
 var warmup=[{name:'립트릴',sec:30},{name:'허밍',sec:30},{name:'스케일',sec:45},{name:'아에이오우발성',sec:40},{name:'음정도약',sec:35},{name:'텅트릴',sec:30}];
 var cooldown=[{name:'허밍다운',sec:30},{name:'부드러운음계',sec:40},{name:'호흡안정',sec:45},{name:'성대이완',sec:35},{name:'구강스트레칭',sec:30},{name:'조용한발성',sec:40}];
 var tab='warm',idx=0,timeLeft=warmup[0].sec,running=false,timer=null;
 var doneOnce=ls24('wc-done',{warm:false,cool:false});

 function list(){return tab==='warm'?warmup:cooldown;}

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 '+(tab==='warm'?'웜업':'쿨다운')+' 가이드',310,22);
  var L=list();
  var lx=30,ly=44,rowH=30;
  for(var i=0;i<L.length;i++){
   var y=ly+i*rowH;
   var isCur=i===idx;
   var isDone=i<idx;
   ctx.fillStyle=isCur?'rgba(168,85,247,.2)':isDone?'rgba(34,197,94,.12)':'rgba(168,85,247,.05)';
   ctx.fillRect(lx,y,300,rowH-4);
   ctx.fillStyle=isDone?'#34d399':isCur?'#fbbf24':'#d8b4fe';ctx.font=(isCur?'bold ':'')+'12px sans-serif';ctx.textAlign='left';
   ctx.fillText((isDone?'✓ ':'')+(i+1)+'. '+L[i].name,lx+8,y+18);
   ctx.fillStyle='rgba(200,180,254,.5)';ctx.font='10px sans-serif';ctx.textAlign='right';
   ctx.fillText(L[i].sec+'초',lx+292,y+18);
  }
  var cx=470,cy=150,r=75;
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=10;ctx.stroke();
  var curSec=L[idx]?L[idx].sec:1;
  var pct=L[idx]?(1-timeLeft/curSec):1;
  ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+Math.PI*2*pct);
  ctx.strokeStyle=tab==='warm'?'#fbbf24':'#38bdf8';ctx.lineWidth=10;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='bold 26px sans-serif';ctx.textAlign='center';
  ctx.fillText(timeLeft+'초',cx,cy+8);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';
  ctx.fillText(L[idx]?L[idx].name:'완료!',cx,cy+r+24);
  var routinePct=Math.round(Math.min(idx,L.length)/L.length*100);
  ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(30,360,560,14);
  var rg=ctx.createLinearGradient(30,0,590,0);rg.addColorStop(0,'#7c3aed');rg.addColorStop(1,'#ec4899');
  ctx.fillStyle=rg;ctx.fillRect(30,360,560*routinePct/100,14);
  ctx.strokeStyle='rgba(168,85,247,.3)';ctx.strokeRect(30,360,560,14);
  ctx.fillStyle='#fff';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText('전체 루틴 진행률 '+routinePct+'%',310,355);
  ctx.fillStyle='#c084fc';ctx.font='10px sans-serif';
  ctx.fillText('웜업 완료: '+(doneOnce.warm?'✓':'-')+'   쿨다운 완료: '+(doneOnce.cool?'✓':'-'),310,394);
 }

 function stopTimer(){if(timer){clearInterval(timer);timer=null;}running=false;
  var btn=document.getElementById('sv24-wc-start');if(btn)btn.textContent='▶ 시작';}

 function startTimer(){
  if(running)return;running=true;
  document.getElementById('sv24-wc-start').textContent='⏸ 일시정지';
  sfx24('routineStart');
  timer=setInterval(function(){
   timeLeft--;
   if(timeLeft<=0){
    idx++;
    if(idx>=list().length){
     stopTimer();
     var d=doneOnce;d[tab]=true;ls24s('wc-done',d);doneOnce=d;
     sfx24('routineDone');draw();return;
    }
    timeLeft=list()[idx].sec;
   }
   draw();
  },1000);
 }

 function switchTab(t){
  tab=t;idx=0;timeLeft=list()[0].sec;stopTimer();draw();
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv24-wc-warm').onclick=function(){switchTab('warm');};
  document.getElementById('sv24-wc-cool').onclick=function(){switchTab('cool');};
  document.getElementById('sv24-wc-start').onclick=function(){
   if(running)stopTimer();else startTimer();
  };
  document.getElementById('sv24-wc-next').onclick=function(){
   idx=Math.min(idx+1,list().length-1);timeLeft=list()[idx].sec;draw();
  };
  document.getElementById('sv24-wc-reset').onclick=function(){
   stopTimer();idx=0;timeLeft=list()[0].sec;draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   8. 싱어 프로필 비교기 Canvas 620x400
   - 8명 AI 싱어 vs 내 프로필 6축 듀얼 Radar, 갭 분석 바차트
   ═══════════════════════════════════════════════════════════════ */
function createProfileCompare(){
 var s=mkSec24('sv24-profile-compare','싱어 프로필 비교기','👤');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">IU/태양/백예린/박효신/아이유클론/정국/소향/나얼 8명 AI 싱어와 음역대/음색/테크닉/감정/안정성/카리스마 6축 비교, 갭 분석</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +mkBtn24('sv24-prof-next','🔄 싱어 변경','linear-gradient(135deg,#ec4899,#f472b6)')
  +mkBtn24('sv24-prof-analyze','🔬 내 프로필 재분석','linear-gradient(135deg,#7c3aed,#a855f7)')+'</div>';
 var cv=mkCanvas24(s.body,620,400,'sv24-prof-cv');
 var ctx=cv.getContext('2d');
 var axes=['음역대','음색','테크닉','감정','안정성','카리스마'];
 var singers=[
  {name:'IU',stats:[88,92,85,95,90,88]},
  {name:'태양',stats:[85,90,92,88,85,90]},
  {name:'백예린',stats:[75,95,80,90,88,78]},
  {name:'박효신',stats:[90,88,95,92,85,95]},
  {name:'아이유클론',stats:[86,90,84,93,89,86]},
  {name:'정국',stats:[92,85,88,86,90,85]},
  {name:'소향',stats:[95,90,98,95,92,96]},
  {name:'나얼',stats:[87,93,90,88,86,90]}
 ];
 var myStats=ls24('profile-my',null);
 if(!myStats){myStats=[60,60,60,60,60,60];ls24s('profile-my',myStats);}
 var selSinger=ls24('profile-sel',0);
 var compareCount=ls24('profile-compares',0);
 var comparedSet=ls24('profile-set',[]);

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('싱어 프로필 비교기 — 6축 듀얼 Radar',310,22);
  var rcx=200,rcy=195,rr=115;
  for(var ring=1;ring<=5;ring++){
   ctx.beginPath();
   for(var ai=0;ai<=6;ai++){
    var angle=(-Math.PI/2)+(ai%6)*Math.PI*2/6;
    var rx=rcx+Math.cos(angle)*(rr*ring/5),ry=rcy+Math.sin(angle)*(rr*ring/5);
    if(ai===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
   }
   ctx.closePath();ctx.strokeStyle='rgba(168,85,247,'+(ring===5?.2:.08)+')';ctx.lineWidth=1;ctx.stroke();
  }
  for(var ai2=0;ai2<6;ai2++){
   var angle2=(-Math.PI/2)+ai2*Math.PI*2/6;
   ctx.beginPath();ctx.moveTo(rcx,rcy);ctx.lineTo(rcx+Math.cos(angle2)*rr,rcy+Math.sin(angle2)*rr);
   ctx.strokeStyle='rgba(168,85,247,.1)';ctx.stroke();
   ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(axes[ai2],rcx+Math.cos(angle2)*(rr+18),rcy+Math.sin(angle2)*(rr+18)+4);
  }
  var singer=singers[selSinger];
  ctx.beginPath();
  for(var s1=0;s1<6;s1++){
   var ang1=(-Math.PI/2)+s1*Math.PI*2/6;
   var vx1=rcx+Math.cos(ang1)*(rr*singer.stats[s1]/100),vy1=rcy+Math.sin(ang1)*(rr*singer.stats[s1]/100);
   if(s1===0)ctx.moveTo(vx1,vy1);else ctx.lineTo(vx1,vy1);
  }
  ctx.closePath();ctx.strokeStyle='rgba(236,72,153,.8)';ctx.lineWidth=2;ctx.stroke();
  ctx.beginPath();
  for(var s2=0;s2<6;s2++){
   var ang2=(-Math.PI/2)+s2*Math.PI*2/6;
   var vx2=rcx+Math.cos(ang2)*(rr*myStats[s2]/100),vy2=rcy+Math.sin(ang2)*(rr*myStats[s2]/100);
   if(s2===0)ctx.moveTo(vx2,vy2);else ctx.lineTo(vx2,vy2);
  }
  ctx.closePath();ctx.fillStyle='rgba(96,165,250,.2)';ctx.fill();
  ctx.strokeStyle='rgba(96,165,250,.8)';ctx.lineWidth=2;ctx.stroke();
  ctx.fillStyle='#ec4899';ctx.fillRect(420,50,10,10);ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(singer.name,436,59);
  ctx.fillStyle='#60a5fa';ctx.fillRect(420,66,10,10);ctx.fillStyle='#d8b4fe';ctx.fillText('내 프로필',436,75);
  var gapAvg=0;
  for(var gi=0;gi<6;gi++){
   var gap=singer.stats[gi]-myStats[gi];
   gapAvg+=gap;
   var gy=95+gi*22;
   ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='left';
   ctx.fillText(axes[gi],420,gy+10);
   var barW=80,zero=460;
   ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(zero-barW/2,gy,barW,10);
   var gw=Math.min(barW/2,Math.abs(gap)/100*barW);
   ctx.fillStyle=gap>0?'rgba(239,68,68,.6)':'rgba(52,211,153,.6)';
   if(gap>0)ctx.fillRect(zero,gy,gw,10);else ctx.fillRect(zero-gw,gy,gw,10);
   ctx.fillStyle='#fff';ctx.font='9px sans-serif';ctx.textAlign='left';
   ctx.fillText((gap>0?'-':'+')+Math.abs(gap),zero+barW/2+6,gy+9);
  }
  gapAvg=Math.round(gapAvg/6);
  ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
  ctx.fillText('평균 격차: '+(gapAvg>=0?gapAvg:0)+'점 ('+singer.name+' 기준)',420,255);
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';
  ctx.fillText('비교 횟수: '+compareCount+'회 / 전체 '+comparedSet.length+'명 비교',420,275);
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText('내 프로필 평균: '+Math.round(myStats.reduce(function(a,b){return a+b;},0)/6)+'점',300,388);
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv24-prof-next').onclick=function(){
   selSinger=(selSinger+1)%singers.length;
   if(comparedSet.indexOf(selSinger)===-1)comparedSet.push(selSinger);
   compareCount++;
   ls24s('profile-sel',selSinger);ls24s('profile-compares',compareCount);ls24s('profile-set',comparedSet);
   sfx24('profileCompare');draw();
  };
  document.getElementById('sv24-prof-analyze').onclick=function(){
   for(var i=0;i<myStats.length;i++)myStats[i]=Math.max(0,Math.min(100,myStats[i]+Math.floor(Math.random()*15)-5));
   ls24s('profile-my',myStats);
   sfx24('profileCompare');draw();
  };
 },200);
 return s.sec;
}

/* ── Mount v24 sections ── */
function mountV24(){
 var target=document.getElementById('songSelect')||document.querySelector('.song-list')||document.querySelector('main')||document.body;
 var container=document.createElement('div');
 container.id='sv24-container';
 container.style.cssText='grid-column:1/-1;padding:0 4px';
 var header=document.createElement('div');
 header.style.cssText='text-align:center;padding:16px 0 8px;border-bottom:1px solid rgba(168,85,247,.2);margin-bottom:12px';
 header.innerHTML='<span style="background:linear-gradient(135deg,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:bold;font-size:1.1em">🎤 StarVoice v24 — 파워미터+로드맵+듀엣매트릭스+이퀄리티+라이브피드백+목표추적+웜쿨다운+프로필비교</span>';
 container.appendChild(header);
 container.appendChild(createVocalPower());
 container.appendChild(createRoadmap());
 container.appendChild(createDuetMatrix());
 container.appendChild(createEquality());
 container.appendChild(createLiveFeedback());
 container.appendChild(createGoalTracker());
 container.appendChild(createWarmCool());
 container.appendChild(createProfileCompare());
 if(target.children.length>2)target.insertBefore(container,target.children[2]);
 else target.appendChild(container);
}

/* ── Nav buttons v24 ── */
function addV24Nav(){
 var nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
 if(!nav){var wt=0;(function waitNav(){if(wt++<30)setTimeout(function(){
  nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
  if(nav)appendNavBtns24(nav);else waitNav();},500);})();return;}
 appendNavBtns24(nav);
}
function appendNavBtns24(nav){
 var items=[
  {label:'💪파워미터',target:'sv24-vocal-power'},
  {label:'🗺️로드맵',target:'sv24-roadmap'},
  {label:'💞듀엣매트릭스',target:'sv24-duet-matrix'},
  {label:'⚖️이퀄리티',target:'sv24-equality'},
  {label:'📡라이브피드백',target:'sv24-live-feedback'},
  {label:'🎯목표추적',target:'sv24-goal-tracker'},
  {label:'🔥웜쿨다운',target:'sv24-warmcool'},
  {label:'👤프로필비교',target:'sv24-profile-compare'},
  {label:'📝v24퀴즈',target:'sv24-container'}
 ];
 items.forEach(function(it){
  var b=document.createElement('button');
  b.textContent=it.label;
  b.style.cssText='flex:0 0 auto;padding:6px 10px;font-size:11px;color:#c084fc;background:transparent;border:none;cursor:pointer;white-space:nowrap';
  b.onclick=function(){var el=document.getElementById(it.target);if(el)el.scrollIntoView({behavior:'smooth'});sfx24('navClick24');};
  nav.appendChild(b);
 });
}

/* ── Keyboard shortcuts v24 (Shift+1~8 + Shift+0) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var targets={Digit1:'sv24-vocal-power',Digit2:'sv24-roadmap',Digit3:'sv24-duet-matrix',
  Digit4:'sv24-equality',Digit5:'sv24-live-feedback',Digit6:'sv24-goal-tracker',
  Digit7:'sv24-warmcool',Digit8:'sv24-profile-compare',Digit0:'sv24-container'};
 var t=targets[e.code];
 if(t){e.preventDefault();var el=document.getElementById(t);if(el)el.scrollIntoView({behavior:'smooth'});sfx24('navClick24');}
});

/* ── Init ── */
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',function(){setTimeout(mountV24,1050);setTimeout(addV24Nav,1450);});
}else{setTimeout(mountV24,1050);setTimeout(addV24Nav,1450);}

})();
