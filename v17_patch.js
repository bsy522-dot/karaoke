/* StarVoice v17 Patch — Self-contained IIFE module injected via SW
 * +10 songs(135->145), VocalWarmupRoutineGen Canvas, LiveAuditionSim Canvas 5judges,
 * PitchIntervalTraining Canvas 12intervals, VocalTechRadar 6axis Canvas,
 * KaraokePartyPlanner 8modes, EmotionSongMatcher Canvas 8moods,
 * VocalProgressTimeline Canvas 30days, AIVocalCoachAdv Canvas 10exercises,
 * quiz +15(147->162), achievements +12(126->138), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v17KaraokeLoaded) return;
window.__v17KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;

function ls17(k,d){try{var v=localStorage.getItem('sv17-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls17s(k,v){try{localStorage.setItem('sv17-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (136-145) ── */
var v17Songs=[
{id:136,title:'Super Shy',artist:'NewJeans',bpm:126,key:'Eb',difficulty:4,genre:'pop',
 notes:[Eb4,G4,Bb4,Eb3+Eb4,D5,Bb4,G4,Eb4,F4,Ab4,C5,Eb3+Eb4,D5,C5,Bb4,Ab4],
 lyrics:['I','am','su','per','shy','su','per','shy','but','wait','a','mi','nute','while','I','make'],
 duration:[360,360,360,720,360,360,360,360,360,360,360,720,360,360,360,360]},
{id:137,title:'사건의 지평선',artist:'윤하',bpm:82,key:'G',difficulty:4,genre:'ballad',
 notes:[G3,B3,D4,G4,Fs4,E4,D4,B3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['그','대','라','는','사','건','의','지','평','선','너','머','로','나','는','가'],
 duration:[550,550,550,1100,550,550,550,550,550,550,550,1100,550,550,550,550]},
{id:138,title:'Ditto',artist:'NewJeans',bpm:100,key:'F',difficulty:3,genre:'pop',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['i','just','want','you','tell','me','tell','me','i','know','you','did','it','did','it','too'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:139,title:'Shopper',artist:'IU',bpm:108,key:'A',difficulty:3,genre:'pop',
 notes:[A3,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['쇼','퍼','쇼','퍼','다','가','와','서','내','마','음','에','드','는','걸','로'],
 duration:[420,420,420,840,420,420,420,420,420,420,420,840,420,420,420,420]},
{id:140,title:'이브 프시케 그리고',artist:'LE SSERAFIM',bpm:130,key:'C',difficulty:5,genre:'dance',
 notes:[C4,E4,G4,C5,B4,A4,G4,E4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['내','가','날','선','택','했','으','니','까','결','국','엔','다','가','져','야'],
 duration:[345,345,345,690,345,345,345,345,345,345,345,690,345,345,345,345]},
{id:141,title:'SPOT!',artist:'지코 feat. 제니',bpm:120,key:'Bb',difficulty:3,genre:'pop',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['여','기','가','바','로','그','스','팟','다','같','이','놀','자','여','기','서'],
 duration:[375,375,375,750,375,375,375,375,375,375,375,750,375,375,375,375]},
{id:142,title:'모래알갱이',artist:'임영웅',bpm:72,key:'D',difficulty:3,genre:'trot',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['모','래','알','갱','이','처','럼','작','은','나','의','사','랑','이','지','만'],
 duration:[625,625,625,1250,625,625,625,625,625,625,625,1250,625,625,625,625]},
{id:143,title:'Power',artist:'G-DRAGON',bpm:138,key:'E',difficulty:5,genre:'hiphop',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['pow','er','pow','er','pow','er','pow','er','I','got','the','pow','er','in','my','soul'],
 duration:[325,325,325,650,325,325,325,325,325,325,325,650,325,325,325,325]},
{id:144,title:'Love Lee',artist:'AKMU',bpm:110,key:'G',difficulty:2,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['Love','Lee','Love','Lee','사','랑','스','러','운','그','대','의','이','름','을','불'],
 duration:[410,410,410,820,410,410,410,410,410,410,410,820,410,410,410,410]},
{id:145,title:'소나기',artist:'이클립스',bpm:86,key:'C',difficulty:4,genre:'ballad',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['너','라','는','소','나','기','를','만','나','온','세','상','이','달','라','졌'],
 duration:[520,520,520,1040,520,520,520,520,520,520,520,1040,520,520,520,520]}
];
(function injectSongs17(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v17Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v17 (12 sounds) ── */
var actx17=null;
function getAC17(){if(!actx17)try{actx17=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx17;}
function sfx17(type){
 var ac=getAC17();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  warmupStart:{f:440,d:.35,wave:'sine',gS:.2,gE:0},
  warmupDone:{f:880,d:.55,wave:'triangle',gS:.28,gE:0},
  auditionJudge:{f:523,d:.4,wave:'square',gS:.18,gE:0},
  auditionPass:{f:1047,d:.65,wave:'sine',gS:.32,gE:0},
  auditionFail:{f:175,d:.5,wave:'sawtooth',gS:.12,gE:0},
  intervalCorrect:{f:660,d:.25,wave:'triangle',gS:.22,gE:0},
  intervalWrong:{f:220,d:.3,wave:'sawtooth',gS:.1,gE:0},
  techRadar:{f:550,d:.3,wave:'sine',gS:.18,gE:0},
  partyMode:{f:698,d:.35,wave:'square',gS:.2,gE:0},
  emotionMatch:{f:494,d:.3,wave:'sine',gS:.2,gE:0},
  timeline:{f:600,d:.25,wave:'triangle',gS:.15,gE:0},
  achieve17:{f:1047,d:.6,wave:'triangle',gS:.32,gE:0}
 };
 var c=cfg[type]||cfg.warmupStart;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='auditionPass'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d*0.3);o.frequency.linearRampToValueAtTime(c.f*2,t+c.d);}
 if(type==='warmupDone'){var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=5;lg.gain.value=20;lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);}
 if(type==='partyMode'){
  var noise=ac.createBufferSource();var buf=ac.createBuffer(1,ac.sampleRate*0.08,ac.sampleRate);
  var data=buf.getChannelData(0);for(var i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*0.2;
  noise.buffer=buf;var ng=ac.createGain();ng.gain.setValueAtTime(0.15,t);ng.gain.linearRampToValueAtTime(0,t+0.12);
  noise.connect(ng);ng.connect(ac.destination);noise.start(t);
 }
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper v17 ── */
function v17M(id,title,body){
 var old=document.getElementById(id);if(old)old.remove();
 var ov=document.createElement('div');ov.id=id;
 ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;padding:16px;overflow-y:auto';
 var box=document.createElement('div');
 box.style.cssText='background:linear-gradient(145deg,#1e1040,#0f0a1e);color:#e0d0ff;border-radius:18px;padding:24px;max-width:720px;width:100%;max-height:88vh;overflow-y:auto;box-shadow:0 12px 48px rgba(168,85,247,.5);border:1px solid rgba(192,132,252,.25)';
 var h=document.createElement('div');
 h.style.cssText='display:flex;justify-content:space-between;align-items:center;margin-bottom:16px';
 var tt=document.createElement('h2');tt.textContent=title;tt.style.cssText='margin:0;color:#c084fc;font-size:1.25em';
 var cls=document.createElement('button');cls.textContent='✕';
 cls.style.cssText='background:none;border:none;color:#a855f7;font-size:1.5em;cursor:pointer;padding:4px 8px;border-radius:8px;transition:background .2s';
 cls.onmouseenter=function(){cls.style.background='rgba(168,85,247,.2)';};
 cls.onmouseleave=function(){cls.style.background='none';};
 cls.onclick=function(){ov.remove();};
 h.appendChild(tt);h.appendChild(cls);box.appendChild(h);
 if(typeof body==='string'){var bd=document.createElement('div');bd.innerHTML=body;box.appendChild(bd);}
 else box.appendChild(body);
 ov.appendChild(box);ov.addEventListener('click',function(ev){if(ev.target===ov)ov.remove();});
 document.body.appendChild(ov);
 return box;
}

/* ══════════════════════════════════════════════════
   Feature 1: Vocal Warmup Routine Generator Canvas
   ══════════════════════════════════════════════════ */
var warmupData=ls17('warmup',{completed:0,streak:0,lastDate:null,history:[]});

function openWarmupRoutine(){
 sfx17('warmupStart');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:12px;font-size:.88em';
 info.textContent='AI 맞춤형 보컨 워밍업 루틴을 생성합니다. 매일 수행하면 보컨 컨디션이 향상됩니다.';
 wrap.appendChild(info);
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=380;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var routines=[
  {name:'립트릴',dur:30,icon:'👄',desc:'입술을 떨며 br~ 소리'},
  {name:'허밍',dur:45,icon:'🎵',desc:'입을 닫고 Hmm~ 음정 상행'},
  {name:'모음 발성',dur:40,icon:'🗣️',desc:'A-E-I-O-U 반복'},
  {name:'스케일 연습',dur:50,icon:'🎼',desc:'Do-Re-Mi 상행/하행'},
  {name:'호흡 훈련',dur:35,icon:'💨',desc:'4초 흡입-7초 유지-8초 내쉬기'},
  {name:'톤 스트레칭',dur:25,icon:'🧘',desc:'목/어깨/턱 스트레칭'},
  {name:'아티큐레이션',dur:40,icon:'👅',desc:'혀 돌리기, 발음 명확화'},
  {name:'비브라토',dur:45,icon:'〜️',desc:'상승 음정에서 비브라토 연습'}
 ];
 var ctx=cvs.getContext('2d');
 var currentStep=0,timerRunning=false,timerSec=0,timerInterval=null;
 function drawRoutine(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#080616';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎤 AI 보컨 워밍업 루틴 ('+routines.length+'단계)',300,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('완료: '+warmupData.completed+'회 | 연속: '+warmupData.streak+'일',300,40);
  var startY=55,stepH=38;
  routines.forEach(function(r,i){
   var y=startY+i*stepH;var isActive=i===currentStep;var isDone=i<currentStep;
   ctx.fillStyle=isDone?'rgba(34,197,94,.15)':isActive?'rgba(168,85,247,.2)':'rgba(30,20,60,.6)';
   ctx.beginPath();ctx.roundRect(20,y,560,32,8);ctx.fill();
   ctx.strokeStyle=isDone?'#22c55e':isActive?'#a855f7':'rgba(100,80,140,.3)';
   ctx.lineWidth=isActive?2:1;ctx.stroke();
   ctx.fillStyle=isDone?'#22c55e':isActive?'#e0d0ff':'#6b7280';
   ctx.font=(isActive?'bold ':'')+'12px sans-serif';ctx.textAlign='left';
   ctx.fillText(r.icon+' '+(i+1)+'. '+r.name+' ('+r.dur+'초)',36,y+20);
   ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';ctx.textAlign='right';
   ctx.fillText(r.desc,570,y+20);
   if(isDone){ctx.fillStyle='#22c55e';ctx.font='bold 12px sans-serif';ctx.textAlign='right';ctx.fillText('✓',30,y+20);}
  });
  if(timerRunning&&currentStep<routines.length){
   var pct=timerSec/routines[currentStep].dur;
   ctx.fillStyle='rgba(168,85,247,.15)';ctx.beginPath();ctx.roundRect(20,365,560,12,6);ctx.fill();
   ctx.fillStyle='#a855f7';ctx.beginPath();ctx.roundRect(20,365,560*pct,12,6);ctx.fill();
  }
 }
 drawRoutine();
 var btnWrap=document.createElement('div');btnWrap.style.cssText='display:flex;gap:10px;justify-content:center;margin-top:12px';
 var startBtn=document.createElement('button');startBtn.textContent='▶ 시작';
 startBtn.style.cssText='background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;padding:10px 24px;border-radius:10px;font-size:.9em;cursor:pointer;font-weight:bold';
 startBtn.onclick=function(){
  if(timerRunning)return;timerRunning=true;timerSec=0;
  timerInterval=setInterval(function(){
   timerSec++;
   if(timerSec>=routines[currentStep].dur){
    currentStep++;timerSec=0;sfx17('intervalCorrect');
    if(currentStep>=routines.length){
     clearInterval(timerInterval);timerRunning=false;
     warmupData.completed++;
     var today=new Date().toISOString().slice(0,10);
     if(warmupData.lastDate!==today){
      if(warmupData.lastDate){var d1=new Date(warmupData.lastDate),d2=new Date(today);if((d2-d1)/86400000===1)warmupData.streak++;else warmupData.streak=1;}
      else warmupData.streak=1;
     }
     warmupData.lastDate=today;warmupData.history.push({date:today,steps:routines.length});
     ls17s('warmup',warmupData);sfx17('warmupDone');
    }
   }
   drawRoutine();
  },1000);
 };
 var resetBtn=document.createElement('button');resetBtn.textContent='↺ 리셋';
 resetBtn.style.cssText='background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);padding:10px 20px;border-radius:10px;font-size:.9em;cursor:pointer';
 resetBtn.onclick=function(){clearInterval(timerInterval);timerRunning=false;currentStep=0;timerSec=0;drawRoutine();};
 btnWrap.appendChild(startBtn);btnWrap.appendChild(resetBtn);wrap.appendChild(btnWrap);
 v17M('v17-warmup','🎤 보컨 워밍업 루틴 생성기',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 2: Live Audition Simulator Canvas
   ══════════════════════════════════════════════════ */
var auditionData=ls17('audition',{attempts:0,passes:0,bestScore:0,history:[]});
function openAuditionSim(){
 sfx17('auditionJudge');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=380;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var judges=[
  {name:'박진영',role:'음정 전문가',weight:.25},
  {name:'김수연',role:'보컨 코치',weight:.2},
  {name:'이현우',role:'감성 평가',weight:.2},
  {name:'최승희',role:'리듬 분석',weight:.2},
  {name:'정도현',role:'종합 심사위장',weight:.15}
 ];
 var ctx=cvs.getContext('2d');var scores=null,judging=false;
 function drawAudition(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#080616';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎬 라이브 오디션 시뮬레이터',300,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('총 '+auditionData.attempts+'회 도전 | 합격 '+auditionData.passes+'회 | 최고 '+auditionData.bestScore+'점',300,40);
  var chairY=60,chairH=55;
  judges.forEach(function(j,i){
   var y=chairY+i*chairH;
   ctx.fillStyle=scores?'rgba(168,85,247,.12)':'rgba(30,20,60,.5)';
   ctx.beginPath();ctx.roundRect(20,y,560,48,10);ctx.fill();
   ctx.strokeStyle='rgba(168,85,247,.2)';ctx.lineWidth=1;ctx.stroke();
   ctx.fillStyle='#e0d0ff';ctx.font='13px sans-serif';ctx.textAlign='left';
   ctx.fillText((i+1)+'. '+j.name+' ('+j.role+')',36,y+22);
   ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';
   ctx.fillText('배점 '+Math.round(j.weight*100)+'%',36,y+38);
   if(scores&&scores[i]!==undefined){
    var sc=scores[i];var barW=200,barX=340;
    ctx.fillStyle='rgba(100,80,140,.3)';ctx.beginPath();ctx.roundRect(barX,y+12,barW,10,5);ctx.fill();
    var col=sc>=80?'#22c55e':sc>=60?'#eab308':'#ef4444';
    ctx.fillStyle=col;ctx.beginPath();ctx.roundRect(barX,y+12,barW*(sc/100),10,5);ctx.fill();
    ctx.fillStyle=col;ctx.font='bold 12px sans-serif';ctx.textAlign='right';ctx.fillText(sc+'점',barX+barW+40,y+22);
   }
  });
  if(scores&&scores.length===judges.length){
   var total=0;judges.forEach(function(j,i){total+=scores[i]*j.weight;});total=Math.round(total);
   var grade=total>=90?'S':total>=80?'A':total>=70?'B':total>=60?'C':'D';
   var gCol=grade==='S'?'#fbbf24':grade==='A'?'#22c55e':grade==='B'?'#3b82f6':'#e0d0ff';
   ctx.fillStyle=gCol;ctx.font='bold 28px sans-serif';ctx.textAlign='center';ctx.fillText(grade,300,345);
   ctx.fillStyle='#e0d0ff';ctx.font='bold 14px sans-serif';
   ctx.fillText('총점: '+total+' | '+(total>=70?'✅ 합격!':'❌ 불합격'),300,370);
  }
 }
 drawAudition();
 var audBtn=document.createElement('button');audBtn.textContent='🎤 오디션 시작';
 audBtn.style.cssText='display:block;margin:12px auto 0;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;padding:10px 24px;border-radius:10px;font-size:.9em;cursor:pointer;font-weight:bold';
 audBtn.onclick=function(){
  if(judging)return;judging=true;scores=[];
  var idx=0;
  function nextJudge(){
   if(idx>=judges.length){
    judging=false;var total=0;judges.forEach(function(j,i){total+=scores[i]*j.weight;});total=Math.round(total);
    if(total>auditionData.bestScore)auditionData.bestScore=total;
    auditionData.attempts++;if(total>=70){auditionData.passes++;sfx17('auditionPass');}else sfx17('auditionFail');
    auditionData.history.push({date:new Date().toISOString().slice(0,10),score:total});
    if(auditionData.history.length>50)auditionData.history=auditionData.history.slice(-50);
    ls17s('audition',auditionData);drawAudition();return;
   }
   scores.push(Math.floor(Math.random()*35)+65);drawAudition();idx++;setTimeout(nextJudge,600);
  }
  scores=[];drawAudition();setTimeout(nextJudge,400);
 };
 wrap.appendChild(audBtn);
 v17M('v17-audition','🎬 라이브 오디션 시뮬레이터',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 3: Pitch Interval Training Canvas
   ══════════════════════════════════════════════════ */
var intervalData=ls17('interval',{total:0,correct:0,best:0});
function openIntervalTraining(){
 sfx17('intervalCorrect');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=580;cvs.height=340;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var intervals=[
  {name:'유니슨',semi:0},{name:'단 2도',semi:1},{name:'장 2도',semi:2},
  {name:'단 3도',semi:3},{name:'장 3도',semi:4},{name:'완전 4도',semi:5},
  {name:'증 4도',semi:6},{name:'완전 5도',semi:7},{name:'단 6도',semi:8},
  {name:'장 6도',semi:9},{name:'단 7도',semi:10},{name:'장 7도',semi:11}
 ];
 var ctx=cvs.getContext('2d');
 var round=0,maxRound=10,correct=0,current=null,answered=false;
 function playInterval(semi){
  var ac=getAC17();if(!ac)return;var base=261.63;var second=base*Math.pow(2,semi/12);
  var o1=ac.createOscillator(),g1=ac.createGain();o1.connect(g1);g1.connect(ac.destination);o1.type='sine';
  o1.frequency.value=base;g1.gain.setValueAtTime(.22,ac.currentTime);g1.gain.linearRampToValueAtTime(0,ac.currentTime+.5);
  o1.start(ac.currentTime);o1.stop(ac.currentTime+.5);
  var o2=ac.createOscillator(),g2=ac.createGain();o2.connect(g2);g2.connect(ac.destination);o2.type='sine';
  o2.frequency.value=second;g2.gain.setValueAtTime(.22,ac.currentTime+.6);g2.gain.linearRampToValueAtTime(0,ac.currentTime+1.1);
  o2.start(ac.currentTime+.6);o2.stop(ac.currentTime+1.1);
 }
 function newQuestion(){round++;answered=false;current=intervals[Math.floor(Math.random()*intervals.length)];playInterval(current.semi);drawInterval();}
 function drawInterval(){
  ctx.clearRect(0,0,580,340);ctx.fillStyle='#080616';ctx.fillRect(0,0,580,340);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎹 음정 인터벌 트레이닝 ('+round+'/'+maxRound+')',290,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('정답: '+correct+'/'+maxRound+' | 총 '+intervalData.total+'회 훈련',290,40);
  var cols=4,bw=125,bh=55,startX=35,startY=60;
  intervals.forEach(function(iv,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+10),y=startY+row*(bh+10);
   ctx.fillStyle=answered&&current&&iv.semi===current.semi?'rgba(34,197,94,.3)':'rgba(100,80,160,.15)';
   ctx.beginPath();ctx.roundRect(x,y,bw,bh,8);ctx.fill();
   ctx.strokeStyle=answered&&current&&iv.semi===current.semi?'#22c55e':'rgba(168,85,247,.3)';ctx.lineWidth=1.5;ctx.stroke();
   ctx.fillStyle='#e0d0ff';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.fillText(iv.name,x+bw/2,y+25);
   ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.fillText(iv.semi+'반음',x+bw/2,y+42);
  });
  if(round>maxRound){
   var pct=Math.round(correct/maxRound*100);var grade=pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';
   ctx.fillStyle=grade==='S'?'#fbbf24':'#22c55e';ctx.font='bold 20px sans-serif';ctx.textAlign='center';
   ctx.fillText('결과: '+grade+' 등급 ('+correct+'/'+maxRound+')',290,310);
  }
 }
 cvs.addEventListener('click',function(ev){
  if(answered||round>maxRound||!current)return;
  var rect=cvs.getBoundingClientRect();var sx=580/rect.width,sy=340/rect.height;
  var mx=(ev.clientX-rect.left)*sx,my=(ev.clientY-rect.top)*sy;
  var cols=4,bw=125,bh=55,startX=35,startY=60;
  intervals.forEach(function(iv,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+10),y=startY+row*(bh+10);
   if(mx>=x&&mx<=x+bw&&my>=y&&my<=y+bh){
    answered=true;if(iv.semi===current.semi){correct++;sfx17('intervalCorrect');}else sfx17('intervalWrong');
    drawInterval();
    if(round<maxRound)setTimeout(newQuestion,1200);
    else{round++;intervalData.total++;intervalData.correct+=correct;var pct=Math.round(correct/maxRound*100);if(pct>intervalData.best)intervalData.best=pct;ls17s('interval',intervalData);drawInterval();}
   }
  });
 });
 drawInterval();
 var startBtn=document.createElement('button');startBtn.textContent='🎵 훈련 시작';
 startBtn.style.cssText='display:block;margin:12px auto 0;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;padding:10px 24px;border-radius:10px;font-size:.9em;cursor:pointer;font-weight:bold';
 startBtn.onclick=function(){round=0;correct=0;newQuestion();};
 wrap.appendChild(startBtn);
 v17M('v17-interval','🎹 음정 인터벌 트레이닝',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 4: Vocal Technique Radar 6-axis Canvas
   ══════════════════════════════════════════════════ */
var techData=ls17('techRadar',{pitch:60,rhythm:55,vibrato:50,breath:65,power:45,emotion:58});
function openTechRadar(){
 sfx17('techRadar');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=520;cvs.height=440;
 cvs.style.cssText='width:100%;max-width:520px;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var axes=[{key:'pitch',label:'음정'},{key:'rhythm',label:'리듬'},{key:'vibrato',label:'비브라토'},{key:'breath',label:'호흡'},{key:'power',label:'성량'},{key:'emotion',label:'감성'}];
 var ctx=cvs.getContext('2d');
 function drawRadar(){
  ctx.clearRect(0,0,520,440);ctx.fillStyle='#080616';ctx.fillRect(0,0,520,440);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎤 보컨 테크닉 분석 레이더',260,22);
  var cx=260,cy=220,r=140;
  for(var lv=1;lv<=5;lv++){ctx.beginPath();ctx.strokeStyle='rgba(168,85,247,'+(lv===5?.3:.1)+')';ctx.lineWidth=1;var lr=r*lv/5;for(var a=0;a<6;a++){var ang=Math.PI*2*a/6-Math.PI/2;var px=cx+lr*Math.cos(ang),py=cy+lr*Math.sin(ang);if(a===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}ctx.closePath();ctx.stroke();}
  for(var a=0;a<6;a++){var ang=Math.PI*2*a/6-Math.PI/2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));ctx.strokeStyle='rgba(168,85,247,.15)';ctx.stroke();}
  ctx.beginPath();ctx.fillStyle='rgba(168,85,247,.2)';ctx.strokeStyle='#a855f7';ctx.lineWidth=2.5;
  axes.forEach(function(ax,i){var ang=Math.PI*2*i/6-Math.PI/2;var val=techData[ax.key]/100;var px=cx+r*val*Math.cos(ang),py=cy+r*val*Math.sin(ang);if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);});
  ctx.closePath();ctx.fill();ctx.stroke();
  axes.forEach(function(ax,i){var ang=Math.PI*2*i/6-Math.PI/2;var lx=cx+(r+28)*Math.cos(ang),ly=cy+(r+28)*Math.sin(ang);ctx.fillStyle='#e0d0ff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(ax.label,lx,ly);ctx.fillStyle='#c084fc';ctx.font='11px sans-serif';ctx.fillText(techData[ax.key],lx,ly+16);});
  var avg=Math.round(axes.reduce(function(s,a){return s+techData[a.key];},0)/6);
  var grade=avg>=90?'S':avg>=80?'A':avg>=70?'B':avg>=60?'C':'D';
  ctx.fillStyle=grade==='S'?'#fbbf24':grade==='A'?'#22c55e':'#3b82f6';ctx.font='bold 20px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(grade,cx,cy);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';ctx.fillText('평균 '+avg+'점',cx,cy+18);
 }
 drawRadar();
 var sliderWrap=document.createElement('div');sliderWrap.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px';
 axes.forEach(function(ax){
  var row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:6px';
  var lbl=document.createElement('span');lbl.textContent=ax.label;lbl.style.cssText='color:#c084fc;font-size:.8em;min-width:60px';
  var sl=document.createElement('input');sl.type='range';sl.min=0;sl.max=100;sl.value=techData[ax.key];sl.style.cssText='flex:1;accent-color:#a855f7';
  sl.oninput=function(){techData[ax.key]=parseInt(sl.value);ls17s('techRadar',techData);drawRadar();};
  row.appendChild(lbl);row.appendChild(sl);sliderWrap.appendChild(row);
 });
 wrap.appendChild(sliderWrap);
 v17M('v17-techradar','🎤 보컨 테크닉 분석 레이더',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 5: Karaoke Party Planner
   ══════════════════════════════════════════════════ */
var partyData=ls17('party',{hosted:0,modes:{}});
function openPartyPlanner(){
 sfx17('partyMode');
 var modes=[
  {id:'relay',name:'릴레이 노래방',desc:'차례대로 한 절씩',players:'2-8명'},
  {id:'battle',name:'보컨 배틀',desc:'두 명이 같은 곡 경쟁',players:'2명'},
  {id:'blindTest',name:'블라인드 테스트',desc:'노래 듣고 제목 맞추기',players:'2-10명'},
  {id:'karaokeBingo',name:'노래방 빙고',desc:'5x5 빙고판+미션',players:'2-6명'},
  {id:'genreRoulette',name:'장르 룰렉',desc:'랜덤 장르에 맞는 곡',players:'2-8명'},
  {id:'highNote',name:'고음 도전',desc:'점점 높은 음으로',players:'1-4명'},
  {id:'lyricsQuiz',name:'가사 이어부르기',desc:'가사 빈칸 채우기',players:'2-6명'},
  {id:'mashup',name:'매쉴업 챌린지',desc:'두 곡 섞어서 부르기',players:'1-4명'}
 ];
 var wrap=document.createElement('div');wrap.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:10px';
 modes.forEach(function(m){
  var card=document.createElement('div');
  card.style.cssText='background:rgba(100,80,160,.12);border:1px solid rgba(168,85,247,.2);border-radius:12px;padding:14px;cursor:pointer;transition:all .2s';
  card.onmouseenter=function(){card.style.background='rgba(168,85,247,.2)';card.style.transform='translateY(-2px)';};
  card.onmouseleave=function(){card.style.background='rgba(100,80,160,.12)';card.style.transform='none';};
  card.onclick=(function(mode){return function(){partyData.hosted++;partyData.modes[mode.id]=(partyData.modes[mode.id]||0)+1;ls17s('party',partyData);sfx17('partyMode');};})(m);
  card.innerHTML='<div style="font-size:1.4em;text-align:center">🎉</div><div style="color:#c084fc;font-weight:bold;font-size:.88em;text-align:center;margin:4px 0">'+m.name+'</div><div style="color:#9ca3af;font-size:.72em;text-align:center">'+m.desc+'</div><div style="color:#6b7280;font-size:.68em;text-align:center;margin-top:3px">'+m.players+'</div>';
  wrap.appendChild(card);
 });
 var footer=document.createElement('div');footer.style.cssText='text-align:center;margin-top:12px;color:#6b7280;font-size:.8em;grid-column:1/-1';
 footer.textContent='총 '+partyData.hosted+'회 파티 개최';wrap.appendChild(footer);
 v17M('v17-party','🎉 노래방 파티 플래너',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 6: Emotion Song Matcher Canvas
   ══════════════════════════════════════════════════ */
var emotionData=ls17('emotion',{matches:0,moods:{}});
function openEmotionMatcher(){
 sfx17('emotionMatch');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=340;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var moods=[
  {id:'happy',name:'행복',color:'#fbbf24',songs:['Love Lee','Super Shy','밤양갱','SPOT!']},
  {id:'sad',name:'슬픔',color:'#3b82f6',songs:['사건의 지평선','비가 오는 날엔','소나기','모래알갱이']},
  {id:'excited',name:'신남',color:'#ef4444',songs:['OMG','Power','고민중독','이브 프시케']},
  {id:'calm',name:'평온',color:'#22c55e',songs:['Ditto','Hype Boy','모래알갱이','정이라고 하자']},
  {id:'love',name:'사랑',color:'#ec4899',songs:['사랑인가 봐','나의 작은 영웅','Shopper','Love Lee']},
  {id:'angry',name:'분노',color:'#dc2626',songs:['Drama','Power','고민중독','퀀카']},
  {id:'nostalgia',name:'그리움',color:'#8b5cf6',songs:['소나기','정이라고 하자','사건의 지평선','비가 오는 날엔']},
  {id:'motivation',name:'동기부여',color:'#f97316',songs:['Super Shy','이브 프시케','Power','Drama']}
 ];
 var ctx=cvs.getContext('2d');var selected=null;
 function drawEmotion(){
  ctx.clearRect(0,0,560,340);ctx.fillStyle='#080616';ctx.fillRect(0,0,560,340);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎵 감성 노래 매칭',280,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';ctx.fillText('총 '+emotionData.matches+'회 매칭',280,40);
  var cols=4,bw=120,bh=80,startX=30,startY=55;
  moods.forEach(function(m,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+12),y=startY+row*(bh+12);
   var isSel=selected&&selected.id===m.id;
   ctx.fillStyle=isSel?m.color+'33':'rgba(40,30,70,.6)';ctx.beginPath();ctx.roundRect(x,y,bw,bh,10);ctx.fill();
   ctx.strokeStyle=isSel?m.color:m.color+'44';ctx.lineWidth=isSel?2.5:1;ctx.stroke();
   ctx.fillStyle=isSel?m.color:'#e0d0ff';ctx.font=(isSel?'bold ':'')+'11px sans-serif';ctx.textAlign='center';
   ctx.fillText(m.name,x+bw/2,y+45);
   ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.fillText((emotionData.moods[m.id]||0)+'회',x+bw/2,y+62);
  });
  if(selected){
   ctx.fillStyle='rgba(168,85,247,.1)';ctx.beginPath();ctx.roundRect(20,250,520,80,10);ctx.fill();
   ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='left';
   ctx.fillText(selected.name+' 감정 추천곡:',36,270);
   selected.songs.forEach(function(s,i){ctx.fillStyle='#e0d0ff';ctx.font='11px sans-serif';ctx.fillText((i+1)+'. '+s,36+i*130,295);});
  }
 }
 cvs.addEventListener('click',function(ev){
  var rect=cvs.getBoundingClientRect();var sx=560/rect.width,sy=340/rect.height;
  var mx=(ev.clientX-rect.left)*sx,my=(ev.clientY-rect.top)*sy;
  var cols=4,bw=120,bh=80,startX=30,startY=55;
  moods.forEach(function(m,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+12),y=startY+row*(bh+12);
   if(mx>=x&&mx<=x+bw&&my>=y&&my<=y+bh){selected=m;emotionData.matches++;emotionData.moods[m.id]=(emotionData.moods[m.id]||0)+1;ls17s('emotion',emotionData);sfx17('emotionMatch');drawEmotion();}
  });
 });
 drawEmotion();
 v17M('v17-emotion','🎵 감성 노래 매칭',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 7: Vocal Progress Timeline Canvas
   ══════════════════════════════════════════════════ */
function openProgressTimeline(){
 sfx17('timeline');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=620;cvs.height=300;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var archive=[];try{var raw=localStorage.getItem('sv15-perfArchive');if(!raw)raw=localStorage.getItem('sv14-perfArchive');if(raw)archive=JSON.parse(raw);}catch(e){}
 var today=new Date();var days30=[];
 for(var d=29;d>=0;d--){var dt=new Date(today);dt.setDate(dt.getDate()-d);var ds=dt.toISOString().slice(0,10);var sess=archive.filter(function(p){return p.date&&p.date.slice(0,10)===ds;});days30.push({date:ds,count:sess.length,avg:sess.length?Math.round(sess.reduce(function(s,p){return s+(p.score||0);},0)/sess.length):0});}
 var ctx=cvs.getContext('2d');ctx.clearRect(0,0,620,300);ctx.fillStyle='#080616';ctx.fillRect(0,0,620,300);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';ctx.fillText('📈 보컨 성장 타임라인 (30일)',310,22);
 var hmY=45,cellW=18,startX=20;
 days30.forEach(function(day,i){var x=startX+i*(cellW+2);var inten=day.count===0?0:Math.min(day.count/5,1);ctx.fillStyle=day.count===0?'rgba(40,30,70,.4)':'rgba(168,85,247,'+(.2+inten*.8)+')';ctx.beginPath();ctx.roundRect(x,hmY,cellW,cellW,3);ctx.fill();if(i%7===0){ctx.fillStyle='#6b7280';ctx.font='8px sans-serif';ctx.textAlign='center';ctx.fillText(day.date.slice(5),x+9,hmY+cellW+10);}});
 var chartY=105,chartH=140,chartW=570;ctx.strokeStyle='rgba(168,85,247,.1)';ctx.lineWidth=1;
 for(var g=0;g<=4;g++){var gy=chartY+chartH-g*(chartH/4);ctx.beginPath();ctx.moveTo(startX,gy);ctx.lineTo(startX+chartW,gy);ctx.stroke();ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.textAlign='right';ctx.fillText((g*25)+'',startX-4,gy+3);}
 var scored=days30.filter(function(d){return d.avg>0;});
 if(scored.length>=2){ctx.beginPath();ctx.strokeStyle='#22c55e';ctx.lineWidth=2;var step=chartW/(days30.length-1);var first=true;days30.forEach(function(day,i){if(day.avg>0){var x=startX+i*step;var y=chartY+chartH-day.avg/100*chartH;if(first){ctx.moveTo(x,y);first=false;}else ctx.lineTo(x,y);}});ctx.stroke();}
 var totalS=days30.reduce(function(s,d){return s+d.count;},0);var activeD=days30.filter(function(d){return d.count>0;}).length;
 ctx.fillStyle='#9ca3af';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText('총 '+totalS+'세션 | 활동 '+activeD+'/30일',310,290);
 v17M('v17-timeline','📈 보컨 성장 타임라인',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 8: AI Vocal Coach Advanced Canvas
   ══════════════════════════════════════════════════ */
var coachData=ls17('coachAdv',{exercisesDone:0,progress:{}});
function openAdvCoach(){
 sfx17('warmupStart');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=360;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var exercises=[
  {id:'diaphragm',name:'횡격막 호흡',desc:'복부 호흡으로 성량 강화',level:1},
  {id:'headVoice',name:'두성 전환',desc:'헤드보이스 전환',level:2},
  {id:'mixVoice',name:'믹스 보이스',desc:'흡/두성 통합',level:3},
  {id:'belting',name:'벨팅 테크닉',desc:'강한 고음 지속력',level:3},
  {id:'vibrato',name:'비브라토 컨트롤',desc:'속도/폭 조절',level:2},
  {id:'agility',name:'보컨 애질리티',desc:'빠른 음정 변화',level:4},
  {id:'dynamics',name:'다이나믹 컨트롤',desc:'pp→ff 부드러운 전환',level:2},
  {id:'resonance',name:'공명 최적화',desc:'마스크/비강 활용',level:3},
  {id:'register',name:'음역 확장',desc:'저음/고음 한계 넓히기',level:4},
  {id:'emotion',name:'감성 전달 기법',desc:'감정을 소리에 담기',level:2}
 ];
 var ctx=cvs.getContext('2d');
 function drawCoach(){
  ctx.clearRect(0,0,600,360);ctx.fillStyle='#080616';ctx.fillRect(0,0,600,360);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🧑‍🏫 AI 보컨 코치 어드밴스드',300,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';ctx.fillText('완료: '+coachData.exercisesDone+'회',300,40);
  var cols=2,bw=270,bh=50,startX=20,startY=55;
  exercises.forEach(function(ex,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+20),y=startY+row*(bh+8);
   var done=(coachData.progress[ex.id]||0);
   ctx.fillStyle=done>0?'rgba(34,197,94,.08)':'rgba(40,30,70,.4)';ctx.beginPath();ctx.roundRect(x,y,bw,bh,8);ctx.fill();
   ctx.strokeStyle=done>0?'rgba(34,197,94,.3)':'rgba(168,85,247,.2)';ctx.lineWidth=1;ctx.stroke();
   ctx.fillStyle='#e0d0ff';ctx.font='12px sans-serif';ctx.textAlign='left';ctx.fillText((i+1)+'. '+ex.name,x+10,y+20);
   ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.fillText(ex.desc,x+10,y+36);
   ctx.fillStyle='#c084fc';ctx.font='10px sans-serif';ctx.textAlign='right';ctx.fillText('Lv.'+ex.level+' | '+done+'회',x+bw-10,y+20);
   var barX=x+10,barY=y+43,barW=bw-20;ctx.fillStyle='rgba(100,80,140,.3)';ctx.beginPath();ctx.roundRect(barX,barY,barW,4,2);ctx.fill();
   var pct=Math.min(done/10,1);ctx.fillStyle=pct>=1?'#22c55e':'#a855f7';ctx.beginPath();ctx.roundRect(barX,barY,barW*pct,4,2);ctx.fill();
  });
 }
 drawCoach();
 cvs.addEventListener('click',function(ev){
  var rect=cvs.getBoundingClientRect();var sx=600/rect.width,sy=360/rect.height;
  var mx=(ev.clientX-rect.left)*sx,my=(ev.clientY-rect.top)*sy;
  var cols=2,bw=270,bh=50,startX=20,startY=55;
  exercises.forEach(function(ex,i){var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+20),y=startY+row*(bh+8);
   if(mx>=x&&mx<=x+bw&&my>=y&&my<=y+bh){coachData.progress[ex.id]=(coachData.progress[ex.id]||0)+1;coachData.exercisesDone++;ls17s('coachAdv',coachData);sfx17('intervalCorrect');drawCoach();}
  });
 });
 v17M('v17-coach','🧑‍🏫 AI 보컨 코치 어드밤스드',wrap);
}

/* ── Quiz v17 (+15: 147→162) ── */
var v17Quiz=[
 {q:'프레싱 보이스(pressing voice)란?',a:['성대를 강하게 압박하는 발성','사스림 발성','두성 발성','비성 발성'],c:0},
 {q:'믹스 보이스(mix voice)의 주요 특징은?',a:['흡성과 두성의 자연스러운 통합','가성만 사용','흡성만 사용','휘슬 발성'],c:0},
 {q:'디프통(diphthong)이란?',a:['하나의 음절에 두 모음 소리가 합쳐진 것','자음이 두 번 반복','고음 발성 기법','탈반리 형성 요소'],c:0},
 {q:'벨팅을 안전하게 하려면?',a:['횡격막 지지+열린 목구멍 유지','목에 힘을 최대한 준다','숨을 참고 내력친다','턴을 최대한 올린다'],c:0},
 {q:'음정 인터벌 중 완전 5도는 몇 반음?',a:['7반음','5반음','12반음','3반음'],c:0},
 {q:'파사지오(passaggio)란?',a:['성구간 전환점(브리지)','비브라토 종류','호흡 방법','공명 위치'],c:0},
 {q:'서브톤(subtone) 발성의 특징은?',a:['성대를 약하게 진동시켜 부드러운 음색','최대 성량으로 발성','비성 없이 강하게','휘슬 없이 명확하게'],c:0},
 {q:'노래할 때 혀의 올바른 위치는?',a:['혀끝이 아랫니 뒤에 가볍게','혀을 다물고 있기','혀을 최대한 뒤로 말기','혀을 빳빳하게 세우기'],c:0},
 {q:'A4=440Hz일 때 A5의 주파수는?',a:['880Hz','660Hz','550Hz','1000Hz'],c:0},
 {q:'노래방에서 마이크 거리를 일정하게 유지해야 하는 이유는?',a:['프록시미티 이펙트 방지','피드백 발생 방지','볼륨 일정 유지','위 모두 해당'],c:3},
 {q:'EQ에서 3kHz 대역을 부스트하면?',a:['음성 명료도(presence) 증가','저음 강화','리버브 증가','볼륨 감소'],c:0},
 {q:'음성 위생(vocal hygiene)을 위해 피해야 할 것은?',a:['헛기침+카페인+음주 전 건조한 환경','미지근한 물 마시기','충분한 수면','적절한 보컨 워밍업'],c:0},
 {q:'브레스 컨트롤 4-7-8 호흡법에서 7은?',a:['7초간 숨 참기','흡입 7초','내쉬기 7초','7회 반복'],c:0},
 {q:'가성(falsetto)과 두성(head voice)의 차이점은?',a:['두성은 성대가 완전히 닫힌 상태','둘 다 같은 것','가성이 더 강하다','두성은 저음에서만 가능'],c:0},
 {q:'K-POP에서 애드리브란?',a:['음정을 꾼이는 장식음 기법','키를 낮춰서 부르는 것','합창 기법','비트박스 효과'],c:0}
];
(function injectQuiz17(){var tries=0;function attempt(){if(window.quizQuestions&&Array.isArray(window.quizQuestions)){v17Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ── Achievements v17 (+12: 126→138) ── */
var v17Achievements=[
 {id:'warmup_first',name:'첫 워밍업',desc:'보컨 워밍업 처음 완료',icon:'🎤'},
 {id:'warmup_streak5',name:'워밍업 5일 연속',desc:'5일 연속 워밍업',icon:'🔥'},
 {id:'audition_pass',name:'오디션 합격',desc:'라이브 오디션 처음 합격',icon:'🎬'},
 {id:'audition_s',name:'오디션 S등급',desc:'오디션에서 S등급',icon:'⭐'},
 {id:'interval_10',name:'음감 훈련 10회',desc:'인터벌 트레이닝 10회',icon:'🎹'},
 {id:'interval_perfect',name:'음감 퍼펙트',desc:'인터벌 10/10 달성',icon:'🏆'},
 {id:'tech_allmax',name:'테크닉 마스터',desc:'보컨 테크닉 전항목 80+',icon:'🎯'},
 {id:'party_first',name:'파티 주최자',desc:'노래방 파티 처음 개최',icon:'🎉'},
 {id:'emotion_all',name:'감성 마스터',desc:'모든 감정 매칭 경험',icon:'💜'},
 {id:'coach_50',name:'코치 50회 훈련',desc:'AI 코치 연습 50회',icon:'🧑‍🏫'},
 {id:'v17_quiz_perfect',name:'퀴즈 v17 만점',desc:'v17 퀴즈 15문 전부 정답',icon:'💡'},
 {id:'v17_explorer',name:'v17 탐험가',desc:'v17 모든 기능 체험',icon:'🚀'}
];
(function injectAchieve17(){var tries=0;function attempt(){if(window.achievements&&Array.isArray(window.achievements)){v17Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ── Keyboard Shortcuts (Shift+Q/W/E/R/T/Y/U/I) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 switch(e.key){case 'Q':case 'q':e.preventDefault();openWarmupRoutine();break;case 'W':case 'w':e.preventDefault();openAuditionSim();break;case 'E':case 'e':e.preventDefault();openIntervalTraining();break;case 'R':case 'r':e.preventDefault();openTechRadar();break;case 'T':case 't':e.preventDefault();openPartyPlanner();break;case 'Y':case 'y':e.preventDefault();openEmotionMatcher();break;case 'U':case 'u':e.preventDefault();openProgressTimeline();break;case 'I':case 'i':e.preventDefault();openAdvCoach();break;}
});

/* ── Bottom Navigation Bar (8 buttons) ── */
(function addNav17(){
 function inject(){
  if(document.getElementById('v17-nav'))return;
  var nav=document.createElement('div');nav.id='v17-nav';
  nav.style.cssText='position:fixed;bottom:0;left:0;right:0;z-index:9990;background:linear-gradient(180deg,transparent,rgba(15,10,30,.97) 20%);padding:8px 4px 12px;display:flex;justify-content:center;gap:4px;flex-wrap:wrap;backdrop-filter:blur(8px)';
  var btns=[
   {label:'🎤워밍업',fn:openWarmupRoutine},{label:'🎬오디션',fn:openAuditionSim},
   {label:'🎹음감',fn:openIntervalTraining},{label:'🎯테크닉',fn:openTechRadar},
   {label:'🎉파티',fn:openPartyPlanner},{label:'💜감성',fn:openEmotionMatcher},
   {label:'📈타임라인',fn:openProgressTimeline},{label:'🧑‍🏫코치',fn:openAdvCoach}
  ];
  btns.forEach(function(b){
   var btn=document.createElement('button');btn.textContent=b.label;
   btn.style.cssText='background:rgba(100,80,160,.2);color:#c084fc;border:1px solid rgba(168,85,247,.25);border-radius:8px;padding:6px 8px;font-size:.7em;cursor:pointer;white-space:nowrap;transition:all .2s';
   btn.onmouseenter=function(){btn.style.background='rgba(168,85,247,.35)';btn.style.transform='translateY(-2px)';};
   btn.onmouseleave=function(){btn.style.background='rgba(100,80,160,.2)';btn.style.transform='none';};
   btn.onclick=b.fn;nav.appendChild(btn);
  });
  document.body.appendChild(nav);document.body.style.paddingBottom='60px';
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else setTimeout(inject,500);
})();

})();
