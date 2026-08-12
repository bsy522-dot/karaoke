/* StarVoice v29 Patch — Self-contained IIFE module injected via SW
 * +10 songs(255->265), VocalRegisterTransition Canvas, EmotionCurveDesigner Canvas,
 * PitchStabilityMatrix Canvas, DuetCompatibility Canvas,
 * DifficultyDecomposer Canvas, ToneColorSpectrum Canvas,
 * SingerGrowthRoadmap Canvas, ComprehensiveVocalMastery Canvas,
 * quiz +15(327->342), achievements +12(270->282), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v29KaraokeLoaded) return;
window.__v29KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls29(k,d){try{var v=localStorage.getItem('sv29-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls29s(k,v){try{localStorage.setItem('sv29-'+k,JSON.stringify(v));}catch(e){}}
function gradeFor29(pct){return pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';}
function gradeColor29(g){return g==='S'?'#fbbf24':g==='A'?'#34d399':g==='B'?'#60a5fa':g==='C'?'#c084fc':'#f87171';}
function cxy29(cv,e){var r=cv.getBoundingClientRect();var cx=e.clientX||((e.touches&&e.touches[0])?e.touches[0].clientX:0);var cy=e.clientY||((e.touches&&e.touches[0])?e.touches[0].clientY:0);return{x:(cx-r.left)*(cv.width/r.width),y:(cy-r.top)*(cv.height/r.height)};}

/* ── 10 New Songs (256-265) ── */
var v29Songs=[
{id:256,title:'Ditto',artist:'NewJeans',bpm:105,key:'Db',difficulty:3,genre:'pop',
 notes:[Db4,F4,Ab4,Db5,C5,Ab4,F4,Db4,Eb4,Gb4,Bb4,Db5,C5,Bb4,Ab4,Gb4],
 lyrics:['Di','tto','너','도','나','와','같','은','맘','이','라','면','좋','겠','는','데'],
 duration:[429,429,429,857,429,429,429,429,429,429,429,857,429,429,429,429]},
{id:257,title:'UNFORGIVEN',artist:'LE SSERAFIM',bpm:140,key:'Am',difficulty:4,genre:'dance',
 notes:[A3,C4,E4,A4,G4,E4,C4,A3,B3,D4,F4,A4,G4,F4,E4,D4],
 lyrics:['Un','for','gi','ven','용','서','할','수','없','는','나','의','힘','을','보','여'],
 duration:[321,321,321,643,321,321,321,321,321,321,321,643,321,321,321,321]},
{id:258,title:'손오공',artist:'SEVENTEEN',bpm:132,key:'Cm',difficulty:4,genre:'dance',
 notes:[C4,Eb4,G4,C5,Bb4,G4,Eb4,C4,D4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['손','오','공','처','럼','날','아','가','자','유','롭','게','하','늘','을','날','아'],
 duration:[341,341,341,682,341,341,341,341,341,341,341,682,341,341,341,341]},
{id:259,title:'Take Two',artist:'BTS',bpm:98,key:'G',difficulty:3,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['Take','two','다','시','시','작','해','보','자','우','리','의','이','야','기','를'],
 duration:[459,459,459,918,459,459,459,459,459,459,459,918,459,459,459,459]},
{id:260,title:'VIBE (Feat. Jimin)',artist:'TAEYANG',bpm:108,key:'Eb',difficulty:3,genre:'pop',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['Vibe','가','느','껴','지','는','이','밤','너','와','함','께','춤','을','춰','요'],
 duration:[417,417,417,833,417,417,417,417,417,417,417,833,417,417,417,417]},
{id:261,title:'Love wins all',artist:'IU',bpm:72,key:'Bb',difficulty:3,genre:'ballad',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['Love','wins','all','사','랑','이','모','든','걸','이','기','는','거','라','믿','어'],
 duration:[625,625,625,1250,625,625,625,625,625,625,625,1250,625,625,625,625]},
{id:262,title:'Love Me Like This',artist:'NMIXX',bpm:125,key:'Fm',difficulty:4,genre:'dance',
 notes:[F3,Ab3,C4,F4,Eb4,C4,Ab3,F3,G3,Bb3,D4,F4,Eb4,D4,C4,Bb3],
 lyrics:['Love','me','like','this','이','렇','게','나','를','사','랑','해','줘','더','강','하게'],
 duration:[360,360,360,720,360,360,360,360,360,360,360,720,360,360,360,360]},
{id:263,title:'특 (S-Class)',artist:'Stray Kids',bpm:145,key:'Dm',difficulty:5,genre:'dance',
 notes:[D3,F3,A3,D4,C4,A3,F3,D3,E3,G3,Bb3,D4,C4,Bb3,A3,G3],
 lyrics:['특','별','한','우','리','만','의','방','식','으','로','세','상','을','뒤','흔들어'],
 duration:[310,310,310,621,310,310,310,310,310,310,310,621,310,310,310,310]},
{id:264,title:'사랑은 늘 도망가',artist:'임영웅',bpm:68,key:'F',difficulty:2,genre:'ballad',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['사','랑','은','늘','도','망','가','잡','으','려','할','수','록','멀','어','져'],
 duration:[662,662,662,1324,662,662,662,662,662,662,662,1324,662,662,662,662]},
{id:265,title:'Get A Guitar',artist:'RIIZE',bpm:118,key:'A',difficulty:3,genre:'pop',
 notes:[A3,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['Get','a','gui','tar','기','타','를','잡','고','노','래','를','불','러','보','자'],
 duration:[381,381,381,763,381,381,381,381,381,381,381,763,381,381,381,381]}
];
(function injectSongs29(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v29Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX 16 sounds ── */
var actx29=null;
function sfx29(type){
 try{
  if(!actx29)actx29=new(window.AudioContext||window.webkitAudioContext)();
  var o=actx29.createOscillator(),g=actx29.createGain(),t=actx29.currentTime;
  o.connect(g);g.connect(actx29.destination);
  var presets={
   registerShift:{f:440,type:'sine',atk:0.01,dec:0.25,vol:0.18},
   registerPeak:{f:660,type:'triangle',atk:0.01,dec:0.15,vol:0.2},
   emotionWave:{f:392,type:'sine',atk:0.03,dec:0.3,vol:0.16},
   emotionPeak:{f:587,type:'triangle',atk:0.01,dec:0.18,vol:0.2},
   pitchLock:{f:523,type:'sine',atk:0.01,dec:0.2,vol:0.18},
   pitchDrift:{f:349,type:'sawtooth',atk:0.01,dec:0.15,vol:0.1},
   duetMatch:{f:698,type:'sine',atk:0.01,dec:0.22,vol:0.2},
   duetSync:{f:880,type:'triangle',atk:0.01,dec:0.12,vol:0.18},
   diffBreak:{f:466,type:'sine',atk:0.02,dec:0.2,vol:0.18},
   diffRank:{f:622,type:'triangle',atk:0.01,dec:0.16,vol:0.2},
   toneShimmer:{f:554,type:'sine',atk:0.01,dec:0.28,vol:0.16},
   toneGlow:{f:740,type:'triangle',atk:0.01,dec:0.14,vol:0.2},
   growthUp:{f:784,type:'square',atk:0.01,dec:0.15,vol:0.1},
   growthMilestone:{f:988,type:'sine',atk:0.01,dec:0.2,vol:0.18},
   masteryComplete:{f:1047,type:'sine',atk:0.01,dec:0.25,vol:0.15},
   navClick29:{f:500,type:'sine',atk:0.01,dec:0.08,vol:0.12}
  };
  var p=presets[type]||presets.navClick29;
  o.type=p.type;o.frequency.setValueAtTime(p.f,t);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(p.vol,t+p.atk);
  g.gain.exponentialRampToValueAtTime(0.001,t+p.atk+p.dec);
  o.start(t);o.stop(t+p.atk+p.dec+0.05);
 }catch(e){}
}

/* ── Quiz +15 (327→342) ── */
var v29Quizzes=[
{q:'보컬 레지스터에서 &quot;흉성(chest voice)&quot;의 특징은?',a:['풍부하고 강한 저음역대 발성','가볍고 높은 두성 발성','숨소리가 많은 발성','비성이 강한 발성'],c:0},
{q:'팔세토(falsetto)와 두성(head voice)의 주요 차이점은?',a:['팔세토는 성대가 더 느슨하게 진동한다','두성이 더 가볍다','팔세토가 더 낮다','차이가 없다'],c:0},
{q:'믹스보이스(mixed voice)란?',a:['흉성과 두성을 혼합한 발성법','두 명이 함께 부르는 것','마이크와 스피커를 믹싱하는 것','음정을 섞는 기법'],c:0},
{q:'곡의 감정곡선에서 클라이맥스(climax)의 역할은?',a:['감정의 최고조를 표현하는 구간','곡의 시작 부분','조용한 인트로','페이드아웃 구간'],c:0},
{q:'피치 안정성(pitch stability)을 높이는 훈련법은?',a:['롱톤 연습으로 성대 컨트롤 강화','빠르게 부르기','큰 소리로만 연습','비브라토만 연습'],c:0},
{q:'듀엣에서 하모니를 만들 때 가장 기본적인 음정 간격은?',a:['3도 또는 6도 간격','반음 간격','옥타브 유니슨만','5도만 사용'],c:0},
{q:'곡의 난이도를 결정하는 가장 중요한 요소는?',a:['음역대, 리듬 복잡도, 호흡 길이의 종합','가사 길이만','BPM만','장르만'],c:0},
{q:'보컬 톤 컬러에서 &quot;warm tone&quot;의 특징은?',a:['풍부한 저음역 배음이 많은 따뜻한 소리','날카롭고 밝은 소리','공기가 많이 섞인 소리','비브라토가 강한 소리'],c:0},
{q:'싱어 성장 단계에서 &quot;초급&quot;에서 탈출하려면?',a:['정확한 음정과 안정적 호흡 확보','고음만 연습','비브라토만 연습','빠른 곡만 부르기'],c:0},
{q:'벨팅(belting) 발성법이란?',a:['흉성의 힘을 유지하며 고음역을 부르는 기법','속삭이듯 부르는 기법','팔세토로 부르는 기법','저음역 전용 기법'],c:0},
{q:'비브라토 속도(rate)의 이상적인 범위는?',a:['초당 5-7회 진동','초당 1-2회','초당 15-20회','비브라토는 항상 같은 속도'],c:0},
{q:'보컬 피로를 예방하는 가장 효과적인 방법은?',a:['적절한 워밍업과 쿨다운, 충분한 수분 섭취','쉬지 않고 계속 연습','큰 소리로만 연습','찬물을 마시며 연습'],c:0},
{q:'노래에서 다이나믹스(dynamics)란?',a:['음량의 강약 변화를 통한 표현력','음정의 높낮이','BPM 변화','가사의 의미'],c:0},
{q:'어두운 톤(dark tone)을 만드는 방법은?',a:['후두를 약간 낮추고 입안 공간을 넓히기','코를 막고 부르기','입을 작게 벌리기','고개를 숙이고 부르기'],c:0},
{q:'음정 이탈(pitch drift)의 주요 원인은?',a:['호흡 지지력 부족과 성대 피로','마이크 문제','반주 문제','가사를 몰라서'],c:0}
];
(function injectQuiz29(){
 var tries=0;
 function attempt(){
  if(window.quizData&&Array.isArray(window.quizData)){
   v29Quizzes.forEach(function(q){
    if(!window.quizData.find(function(x){return x.q===q.q;}))window.quizData.push(q);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements +12 (270→282) ── */
var v29Achievements=[
{id:'register_explorer',name:'레지스터 탐험가',desc:'보컬 레지스터 전환 분석 1회',icon:'🔄',check:function(){return ls29('register_opened',false);}},
{id:'emotion_artist',name:'감정 아티스트',desc:'감정곡선 디자인 1회',icon:'🎭',check:function(){return ls29('emotion_opened',false);}},
{id:'pitch_sniper',name:'피치 스나이퍼',desc:'피치 안정성 매트릭스 확인',icon:'🎯',check:function(){return ls29('pitch_opened',false);}},
{id:'duet_matchmaker',name:'듀엣 매치메이커',desc:'듀엣 호환성 분석 1회',icon:'💑',check:function(){return ls29('duet_opened',false);}},
{id:'diff_analyst',name:'난이도 분석가',desc:'곡 난이도 분해 1회',icon:'📐',check:function(){return ls29('diff_opened',false);}},
{id:'tone_painter',name:'톤 페인터',desc:'톤컬러 스펙트럼 확인',icon:'🎨',check:function(){return ls29('tone_opened',false);}},
{id:'growth_seeker',name:'성장 추구자',desc:'싱어 성장 로드맵 확인',icon:'🌱',check:function(){return ls29('growth_opened',false);}},
{id:'mastery_checker',name:'마스터리 체커',desc:'종합 보컬 마스터리 대시보드 확인',icon:'👑',check:function(){return ls29('mastery_opened',false);}},
{id:'v29_all_features',name:'v29 완전정복',desc:'v29 8개 분석기 모두 열기',icon:'🏅',check:function(){return ls29('register_opened',false)&&ls29('emotion_opened',false)&&ls29('pitch_opened',false)&&ls29('duet_opened',false)&&ls29('diff_opened',false)&&ls29('tone_opened',false)&&ls29('growth_opened',false)&&ls29('mastery_opened',false);}},
{id:'v29_quiz_master',name:'v29 퀴즈 달인',desc:'v29 퀴즈 5문제 정답',icon:'🧠',check:function(){return ls29('quiz_correct',0)>=5;}},
{id:'v29_song_singer',name:'v29 곡 가수',desc:'v29 신곡 3곡 부르기',icon:'🎤',check:function(){return ls29('songs_sung',0)>=3;}},
{id:'v29_complete',name:'v29 컴플리트',desc:'v29 전체 콘텐츠 체험',icon:'✨',check:function(){return ls29('register_opened',false)&&ls29('mastery_opened',false)&&ls29('quiz_correct',0)>=3;}}
];
(function injectAchievements29(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v29Achievements.forEach(function(a){
    if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Helper: Modal Canvas ── */
function createModal29(title,w,h,drawFn){
 var overlay=document.createElement('div');
 overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.88);z-index:9999;display:flex;align-items:center;justify-content:center;padding:12px;';
 var box=document.createElement('div');
 box.style.cssText='background:linear-gradient(135deg,#1a1040,#2a1060);border:2px solid #a855f7;border-radius:16px;padding:16px;max-width:95vw;max-height:95vh;overflow:auto;position:relative;';
 var hdr=document.createElement('div');
 hdr.style.cssText='display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;';
 var ttl=document.createElement('h3');
 ttl.textContent=title;
 ttl.style.cssText='color:#c084fc;font-size:16px;margin:0;';
 var closeBtn=document.createElement('button');
 closeBtn.textContent='✕';
 closeBtn.style.cssText='background:#6d28d9;color:white;border:none;border-radius:50%;width:30px;height:30px;font-size:16px;cursor:pointer;';
 closeBtn.onclick=function(){document.body.removeChild(overlay);};
 hdr.appendChild(ttl);hdr.appendChild(closeBtn);
 box.appendChild(hdr);
 var cv=document.createElement('canvas');
 cv.width=w;cv.height=h;
 cv.style.cssText='width:100%;max-width:'+w+'px;height:auto;border-radius:8px;display:block;margin:0 auto;background:#0a0818;';
 box.appendChild(cv);
 overlay.appendChild(box);
 document.body.appendChild(overlay);
 overlay.addEventListener('click',function(e){if(e.target===overlay)document.body.removeChild(overlay);});
 var ctx=cv.getContext('2d');
 drawFn(cv,ctx);
 return{overlay:overlay,cv:cv,ctx:ctx};
}

/* ══════════════════════════════════════════════════════
   1. 보컬 레지스터 전환 분석기 Canvas 620x400
   - 4레지스터(흉성/믹스/두성/팔세토) x 6축 히트맵
   ══════════════════════════════════════════════════════ */
window.__sv29VocalRegisterTransition=function(){
 sfx29('registerShift');
 ls29s('register_opened',true);
 var registers=['흉성\n(Chest)','믹스보이스\n(Mixed)','두성\n(Head)','팔세토\n(Falsetto)'];
 var axes=['음역 범위','파워','유연성','전환 난이도','지속력','음색 풍부도'];
 var data=[
  [95,92,55,30,90,88],
  [80,78,90,70,75,85],
  [60,50,85,65,70,72],
  [45,30,70,80,50,40]
 ];
 var selReg=0;
 createModal29('보컬 레지스터 전환 분석기',620,400,function(cv,ctx){
  function draw(){
   ctx.clearRect(0,0,620,400);
   ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('보컬 레지스터 전환 분석 (클릭: 레지스터 전환)',310,22);
   var cx=310,cy=220,rad=140;
   for(var r=5;r>=1;r--){
    ctx.beginPath();
    for(var i=0;i<6;i++){
     var angle=Math.PI*2*i/6-Math.PI/2;
     var x=cx+Math.cos(angle)*rad*(r/5);
     var y=cy+Math.sin(angle)*rad*(r/5);
     if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.strokeStyle='rgba(168,85,247,0.2)';ctx.stroke();
    ctx.fillStyle='rgba(168,85,247,0.03)';ctx.fill();
   }
   for(var i=0;i<6;i++){
    var angle=Math.PI*2*i/6-Math.PI/2;
    ctx.beginPath();ctx.moveTo(cx,cy);
    ctx.lineTo(cx+Math.cos(angle)*rad,cy+Math.sin(angle)*rad);
    ctx.strokeStyle='rgba(168,85,247,0.3)';ctx.stroke();
    var lx=cx+Math.cos(angle)*(rad+22);
    var ly=cy+Math.sin(angle)*(rad+22);
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
    var lines=axes[i].split('\n');
    lines.forEach(function(line,li){ctx.fillText(line,lx,ly+li*13);});
   }
   var colors=['#f87171','#fbbf24','#34d399','#60a5fa'];
   var regData=data[selReg];
   ctx.beginPath();
   for(var i=0;i<6;i++){
    var angle=Math.PI*2*i/6-Math.PI/2;
    var val=regData[i]/100;
    var x=cx+Math.cos(angle)*rad*val;
    var y=cy+Math.sin(angle)*rad*val;
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
   }
   ctx.closePath();
   ctx.fillStyle=colors[selReg]+'33';ctx.fill();
   ctx.strokeStyle=colors[selReg];ctx.lineWidth=2.5;ctx.stroke();
   for(var i=0;i<6;i++){
    var angle=Math.PI*2*i/6-Math.PI/2;
    var val=regData[i]/100;
    var x=cx+Math.cos(angle)*rad*val;
    var y=cy+Math.sin(angle)*rad*val;
    ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle=colors[selReg];ctx.fill();
    ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
    ctx.fillText(regData[i],x,y-10);
   }
   var avg=Math.round(regData.reduce(function(a,b){return a+b;},0)/6);
   var grade=gradeFor29(avg);
   ctx.fillStyle=gradeColor29(grade);ctx.font='bold 28px sans-serif';ctx.textAlign='right';
   ctx.fillText(grade,600,55);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';
   ctx.fillText('종합: '+avg+'%',600,72);
   for(var r=0;r<4;r++){
    var bx=20+r*150,by=370;
    ctx.fillStyle=r===selReg?colors[r]+'44':'rgba(255,255,255,0.05)';
    ctx.fillRect(bx,by,140,25);
    ctx.strokeStyle=colors[r];ctx.lineWidth=r===selReg?2:1;ctx.strokeRect(bx,by,140,25);
    ctx.fillStyle=r===selReg?'#fff':colors[r];ctx.font='bold 11px sans-serif';ctx.textAlign='center';
    ctx.fillText(registers[r].replace('\n',' '),bx+70,by+16);
   }
   var transData=[
    {from:'흉성',to:'믹스',diff:'중',note:'E4~G4 구간'},
    {from:'믹스',to:'두성',diff:'상',note:'A4~C5 구간'},
    {from:'두성',to:'팔세토',diff:'중',note:'D5~F5 구간'},
    {from:'흉성',to:'두성',diff:'최상',note:'브릿지 영역'}
   ];
   ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='left';
   ctx.fillText('전환 경로:',20,52);
   transData.forEach(function(t,i){
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';
    ctx.fillText(t.from+' → '+t.to+' ['+t.diff+'] '+t.note,20,68+i*15);
   });
  }
  draw();
  cv.addEventListener('click',function(e){
   var p=cxy29(cv,e);
   for(var r=0;r<4;r++){
    var bx=20+r*150,by=370;
    if(p.x>=bx&&p.x<=bx+140&&p.y>=by&&p.y<=by+25){selReg=r;sfx29('registerPeak');draw();return;}
   }
   selReg=(selReg+1)%4;sfx29('registerShift');draw();
  });
  cv.addEventListener('touchend',function(e){
   e.preventDefault();
   var touch=e.changedTouches[0];
   var p=cxy29(cv,{clientX:touch.clientX,clientY:touch.clientY});
   for(var r=0;r<4;r++){
    var bx=20+r*150,by=370;
    if(p.x>=bx&&p.x<=bx+140&&p.y>=by&&p.y<=by+25){selReg=r;sfx29('registerPeak');draw();return;}
   }
   selReg=(selReg+1)%4;sfx29('registerShift');draw();
  });
 });
};

/* ══════════════════════════════════════════════════════
   2. 곡별 감정곡선 디자이너 Canvas 640x400
   - 8감정 x 4구간 라인차트 + 인터랙티브
   ══════════════════════════════════════════════════════ */
window.__sv29EmotionCurveDesigner=function(){
 sfx29('emotionWave');
 ls29s('emotion_opened',true);
 var emotions=['기쁨','슬픔','긴장','평온','열정','그리움','신비','승리'];
 var sections=['인트로','벌스','코러스','아웃트로'];
 var emotionColors=['#fbbf24','#60a5fa','#f87171','#34d399','#f97316','#c084fc','#6366f1','#ec4899'];
 var curveData=[];
 for(var i=0;i<8;i++){
  var row=[];
  for(var j=0;j<4;j++){row.push(20+Math.floor(Math.random()*60));}
  curveData.push(row);
 }
 curveData[0]=[30,55,90,40];
 curveData[1]=[20,40,30,70];
 curveData[3]=[60,40,20,50];
 curveData[4]=[25,60,95,35];
 curveData[7]=[15,45,85,65];
 var selEmotion=0;
 createModal29('곡별 감정곡선 디자이너',640,400,function(cv,ctx){
  function draw(){
   ctx.clearRect(0,0,640,400);
   ctx.fillStyle='#0a0818';ctx.fillRect(0,0,640,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('감정곡선 디자이너 (클릭: 감정 전환)',320,22);
   var lx=80,rx=600,ty=50,by=320;
   var chartW=rx-lx,chartH=by-ty;
   ctx.strokeStyle='rgba(168,85,247,0.15)';ctx.lineWidth=1;
   for(var p=0;p<=100;p+=20){
    var y=by-chartH*(p/100);
    ctx.beginPath();ctx.moveTo(lx,y);ctx.lineTo(rx,y);ctx.stroke();
    ctx.fillStyle='#666';ctx.font='10px sans-serif';ctx.textAlign='right';
    ctx.fillText(p+'%',lx-8,y+4);
   }
   for(var s=0;s<4;s++){
    var x=lx+chartW*s/3;
    ctx.beginPath();ctx.moveTo(x,ty);ctx.lineTo(x,by);ctx.strokeStyle='rgba(168,85,247,0.15)';ctx.stroke();
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='center';
    ctx.fillText(sections[s],x,by+18);
   }
   for(var e=0;e<8;e++){
    ctx.beginPath();
    ctx.strokeStyle=e===selEmotion?emotionColors[e]:emotionColors[e]+'66';
    ctx.lineWidth=e===selEmotion?3:1.5;
    for(var s=0;s<4;s++){
     var x=lx+chartW*s/3;
     var y=by-chartH*(curveData[e][s]/100);
     if(s===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    }
    ctx.stroke();
    if(e===selEmotion){
     for(var s=0;s<4;s++){
      var x=lx+chartW*s/3;
      var y=by-chartH*(curveData[e][s]/100);
      ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);
      ctx.fillStyle=emotionColors[e];ctx.fill();
      ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
      ctx.fillText(curveData[e][s],x,y-12);
     }
    }
   }
   var legendY=345;
   for(var e=0;e<8;e++){
    var col=e%4,row=Math.floor(e/4);
    var bx=80+col*140,bby=legendY+row*22;
    ctx.fillStyle=e===selEmotion?emotionColors[e]+'44':'rgba(255,255,255,0.03)';
    ctx.fillRect(bx,bby,130,18);
    ctx.strokeStyle=emotionColors[e];ctx.lineWidth=e===selEmotion?2:1;
    ctx.strokeRect(bx,bby,130,18);
    ctx.fillStyle=e===selEmotion?'#fff':emotionColors[e];ctx.font='bold 11px sans-serif';ctx.textAlign='center';
    ctx.fillText(emotions[e],bx+65,bby+13);
   }
   var peak=Math.max.apply(null,curveData[selEmotion]);
   var peakSec=sections[curveData[selEmotion].indexOf(peak)];
   ctx.fillStyle='#c084fc';ctx.font='12px sans-serif';ctx.textAlign='left';
   ctx.fillText('★ '+emotions[selEmotion]+' 피크: '+peakSec+' ('+peak+'%)',80,by+38);
  }
  draw();
  cv.addEventListener('click',function(e){
   var p=cxy29(cv,e);
   for(var em=0;em<8;em++){
    var col=em%4,row=Math.floor(em/4);
    var bx=80+col*140,bby=345+row*22;
    if(p.x>=bx&&p.x<=bx+130&&p.y>=bby&&p.y<=bby+18){selEmotion=em;sfx29('emotionPeak');draw();return;}
   }
   selEmotion=(selEmotion+1)%8;sfx29('emotionWave');draw();
  });
  cv.addEventListener('touchend',function(e){e.preventDefault();selEmotion=(selEmotion+1)%8;sfx29('emotionWave');draw();});
 });
};

/* ══════════════════════════════════════════════════════
   3. 피치 안정성 매트릭스 Canvas 620x400
   - 12음계 x 3옥타브 히트맵
   ══════════════════════════════════════════════════════ */
window.__sv29PitchStabilityMatrix=function(){
 sfx29('pitchLock');
 ls29s('pitch_opened',true);
 var noteNames=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
 var octaves=['3옥타브','4옥타브','5옥타브'];
 var stabilityData=[];
 for(var o=0;o<3;o++){
  var row=[];
  for(var n=0;n<12;n++){
   if(o===0)row.push(60+Math.floor(Math.random()*30));
   else if(o===1)row.push(50+Math.floor(Math.random()*40));
   else row.push(30+Math.floor(Math.random()*45));
  }
  stabilityData.push(row);
 }
 stabilityData[1][0]=88;stabilityData[1][4]=85;stabilityData[1][7]=90;
 stabilityData[0][0]=92;stabilityData[0][7]=89;
 stabilityData[2][0]=55;stabilityData[2][4]=50;
 var hoverCell={r:-1,c:-1};
 createModal29('피치 안정성 매트릭스',620,400,function(cv,ctx){
  function draw(){
   ctx.clearRect(0,0,620,400);
   ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('피치 안정성 매트릭스 (12음계 × 3옥타브)',310,22);
   var ox=70,oy=50,cw=42,ch=70;
   for(var o=0;o<3;o++){
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='right';
    ctx.fillText(octaves[o],ox-8,oy+o*ch+ch/2+4);
   }
   for(var n=0;n<12;n++){
    ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
    ctx.fillText(noteNames[n],ox+n*cw+cw/2,oy-6);
   }
   for(var o=0;o<3;o++){
    for(var n=0;n<12;n++){
     var val=stabilityData[o][n];
     var x=ox+n*cw,y=oy+o*ch;
     var r,g,b;
     if(val>=80){r=52;g=211;b=153;}
     else if(val>=60){r=251;g=191;b=36;}
     else{r=248;g=113;b=113;}
     var alpha=0.3+val/100*0.6;
     ctx.fillStyle='rgba('+r+','+g+','+b+','+alpha+')';
     ctx.fillRect(x+1,y+1,cw-2,ch-2);
     if(hoverCell.r===o&&hoverCell.c===n){
      ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.strokeRect(x+1,y+1,cw-2,ch-2);
     }
     ctx.fillStyle='#fff';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
     ctx.fillText(val+'%',x+cw/2,y+ch/2-4);
     var g2=gradeFor29(val);
     ctx.fillStyle=gradeColor29(g2);ctx.font='bold 11px sans-serif';
     ctx.fillText(g2,x+cw/2,y+ch/2+14);
    }
   }
   var legend=[{label:'≥ 80% 안정',color:'#34d399'},{label:'60-79% 주의',color:'#fbbf24'},{label:'< 60% 불안정',color:'#f87171'}];
   legend.forEach(function(l,i){
    var lx=140+i*150,ly=280;
    ctx.fillStyle=l.color;ctx.fillRect(lx,ly,14,14);
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText(l.label,lx+20,ly+12);
   });
   var allVals=[];
   stabilityData.forEach(function(row){row.forEach(function(v){allVals.push(v);});});
   var avgAll=Math.round(allVals.reduce(function(a,b){return a+b;},0)/allVals.length);
   var weakNotes=[];
   for(var n=0;n<12;n++){
    var colAvg=Math.round((stabilityData[0][n]+stabilityData[1][n]+stabilityData[2][n])/3);
    if(colAvg<65)weakNotes.push(noteNames[n]);
   }
   ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
   ctx.fillText('종합 안정성: '+avgAll+'% ('+gradeFor29(avgAll)+')',70,325);
   ctx.fillStyle='#f87171';ctx.font='12px sans-serif';
   ctx.fillText('약점 음계: '+(weakNotes.length>0?weakNotes.join(', '):'없음 (우수!)'),70,345);
   ctx.fillStyle='#34d399';ctx.font='12px sans-serif';
   var strongOct=0,strongAvg=0;
   for(var o=0;o<3;o++){
    var oa=Math.round(stabilityData[o].reduce(function(a,b){return a+b;},0)/12);
    if(oa>strongAvg){strongAvg=oa;strongOct=o;}
   }
   ctx.fillText('최강 음역: '+octaves[strongOct]+' ('+strongAvg+'%)',70,365);
   ctx.fillStyle=gradeColor29(gradeFor29(avgAll));ctx.font='bold 32px sans-serif';ctx.textAlign='right';
   ctx.fillText(gradeFor29(avgAll),600,340);
   ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';
   ctx.fillText(avgAll+'%',600,358);
  }
  draw();
  cv.addEventListener('mousemove',function(e){
   var p=cxy29(cv,e);
   var ox=70,oy=50,cw=42,ch=70;
   var nc=Math.floor((p.x-ox)/cw),nr=Math.floor((p.y-oy)/ch);
   if(nc>=0&&nc<12&&nr>=0&&nr<3){hoverCell={r:nr,c:nc};}else{hoverCell={r:-1,c:-1};}
   draw();
  });
 });
};

/* ══════════════════════════════════════════════════════
   4. 듀엣 호환성 분석기 Canvas 620x400
   - 8보컬타입 매칭 히트맵 + 상세 호환 정보
   ══════════════════════════════════════════════════════ */
window.__sv29DuetCompatibility=function(){
 sfx29('duetMatch');
 ls29s('duet_opened',true);
 var voiceTypes=['소프라노','메조소프라노','알토','카운터테너','테너','바리톤','베이스바리톤','베이스'];
 var compat=[];
 var presetCompat=[
  [85,90,70,80,75,60,50,45],
  [90,85,80,75,85,70,60,55],
  [70,80,85,70,80,85,75,65],
  [80,75,70,85,90,80,70,60],
  [75,85,80,90,85,80,75,65],
  [60,70,85,80,80,85,90,80],
  [50,60,75,70,75,90,85,90],
  [45,55,65,60,65,80,90,85]
 ];
 compat=presetCompat;
 var selPair={r:-1,c:-1};
 createModal29('듀엣 호환성 분석기',620,400,function(cv,ctx){
  function draw(){
   ctx.clearRect(0,0,620,400);
   ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('듀엣 호환성 매트릭스 (클릭: 페어 상세)',310,22);
   var ox=110,oy=55,cw=60,ch=36;
   for(var i=0;i<8;i++){
    ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='right';
    ctx.fillText(voiceTypes[i],ox-6,oy+i*ch+ch/2+4);
    ctx.textAlign='center';
    ctx.save();ctx.translate(ox+i*cw+cw/2,oy-6);
    ctx.fillText(voiceTypes[i].substring(0,3),0,0);
    ctx.restore();
   }
   for(var r=0;r<8;r++){
    for(var c=0;c<8;c++){
     var val=compat[r][c];
     var x=ox+c*cw,y=oy+r*ch;
     var red,green,blue;
     if(val>=80){red=52;green=211;blue=153;}
     else if(val>=65){red=251;green=191;blue=36;}
     else{red=248;green=113;blue=113;}
     var alpha=0.25+val/100*0.55;
     ctx.fillStyle='rgba('+red+','+green+','+blue+','+alpha+')';
     ctx.fillRect(x+1,y+1,cw-2,ch-2);
     if(selPair.r===r&&selPair.c===c){
      ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.strokeRect(x,y,cw,ch);
     }
     ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
     ctx.fillText(val+'%',x+cw/2,y+ch/2+4);
    }
   }
   if(selPair.r>=0&&selPair.c>=0){
    var pv=compat[selPair.r][selPair.c];
    var pg=gradeFor29(pv);
    ctx.fillStyle='#1a1040';ctx.fillRect(110,350,400,45);
    ctx.strokeStyle='#a855f7';ctx.strokeRect(110,350,400,45);
    ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='left';
    ctx.fillText(voiceTypes[selPair.r]+' × '+voiceTypes[selPair.c],120,368);
    ctx.fillStyle=gradeColor29(pg);ctx.font='bold 18px sans-serif';
    ctx.fillText(pg+' ('+pv+'%)',120,390);
    var tip=pv>=80?'★ 환상의 궁합! 하모니가 아름답습니다':pv>=65?'○ 좋은 궁합. 약간의 조율이 필요합니다':'△ 도전적인 조합. 음역 조정이 필요합니다';
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';
    ctx.fillText(tip,320,380);
   }
   var bestPair={v:0,r:0,c:1};
   for(var r=0;r<8;r++){for(var c=r+1;c<8;c++){if(compat[r][c]>bestPair.v){bestPair={v:compat[r][c],r:r,c:c};}}}
   ctx.fillStyle='#34d399';ctx.font='12px sans-serif';ctx.textAlign='left';
   ctx.fillText('베스트 페어: '+voiceTypes[bestPair.r]+' + '+voiceTypes[bestPair.c]+' ('+bestPair.v+'%)',110,340);
  }
  draw();
  cv.addEventListener('click',function(e){
   var p=cxy29(cv,e);
   var ox=110,oy=55,cw=60,ch=36;
   var c=Math.floor((p.x-ox)/cw),r=Math.floor((p.y-oy)/ch);
   if(c>=0&&c<8&&r>=0&&r<8){selPair={r:r,c:c};sfx29('duetSync');draw();}
  });
  cv.addEventListener('touchend',function(e){e.preventDefault();var t=e.changedTouches[0];var p=cxy29(cv,{clientX:t.clientX,clientY:t.clientY});var ox=110,oy=55,cw=60,ch=36;var c=Math.floor((p.x-ox)/cw),r=Math.floor((p.y-oy)/ch);if(c>=0&&c<8&&r>=0&&r<8){selPair={r:r,c:c};sfx29('duetSync');draw();}});
 });
};

/* ══════════════════════════════════════════════════════
   5. 곡 난이도 분해기 Canvas 620x400
   - 8요소 Radar + 종합 난이도 등급
   ══════════════════════════════════════════════════════ */
window.__sv29DifficultyDecomposer=function(){
 sfx29('diffBreak');
 ls29s('diff_opened',true);
 var axes=['음역 범위','리듬 복잡도','BPM 속도','기교 난이도','호흡 길이','감정 표현','발음 밀도','지속 체력'];
 var songProfiles=[
  {name:'발라드 (쉬움)',data:[40,30,25,35,50,60,30,45],color:'#34d399'},
  {name:'댄스곡 (보통)',data:[60,70,75,55,50,45,65,60],color:'#fbbf24'},
  {name:'R&B (어려움)',data:[75,65,50,80,70,85,55,65],color:'#f97316'},
  {name:'록 (매우 어려움)',data:[85,60,80,70,75,75,50,80],color:'#f87171'},
  {name:'랩 (극한)',data:[50,90,95,60,40,45,95,70],color:'#ec4899'}
 ];
 var selProfile=0;
 createModal29('곡 난이도 분해기',620,400,function(cv,ctx){
  function draw(){
   ctx.clearRect(0,0,620,400);
   ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('곡 난이도 8요소 분해 (클릭: 장르 전환)',310,22);
   var cx=310,cy=210,rad=130;
   for(var ring=5;ring>=1;ring--){
    ctx.beginPath();
    for(var i=0;i<8;i++){
     var angle=Math.PI*2*i/8-Math.PI/2;
     var x=cx+Math.cos(angle)*rad*(ring/5);
     var y=cy+Math.sin(angle)*rad*(ring/5);
     if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.strokeStyle='rgba(168,85,247,0.2)';ctx.stroke();
   }
   for(var i=0;i<8;i++){
    var angle=Math.PI*2*i/8-Math.PI/2;
    ctx.beginPath();ctx.moveTo(cx,cy);
    ctx.lineTo(cx+Math.cos(angle)*rad,cy+Math.sin(angle)*rad);
    ctx.strokeStyle='rgba(168,85,247,0.25)';ctx.stroke();
    var lx=cx+Math.cos(angle)*(rad+24);
    var ly=cy+Math.sin(angle)*(rad+24);
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(axes[i],lx,ly);
   }
   var sp=songProfiles[selProfile];
   ctx.beginPath();
   for(var i=0;i<8;i++){
    var angle=Math.PI*2*i/8-Math.PI/2;
    var val=sp.data[i]/100;
    var x=cx+Math.cos(angle)*rad*val;
    var y=cy+Math.sin(angle)*rad*val;
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
   }
   ctx.closePath();ctx.fillStyle=sp.color+'33';ctx.fill();
   ctx.strokeStyle=sp.color;ctx.lineWidth=2.5;ctx.stroke();
   for(var i=0;i<8;i++){
    var angle=Math.PI*2*i/8-Math.PI/2;
    var val=sp.data[i]/100;
    var x=cx+Math.cos(angle)*rad*val;
    var y=cy+Math.sin(angle)*rad*val;
    ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle=sp.color;ctx.fill();
    ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
    ctx.fillText(sp.data[i],x,y-10);
   }
   var avg=Math.round(sp.data.reduce(function(a,b){return a+b;},0)/8);
   var grade=gradeFor29(avg);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText(sp.name,310,365);
   ctx.fillStyle=gradeColor29(grade);ctx.font='bold 24px sans-serif';
   ctx.fillText('난이도 '+grade,310,390);
   for(var p=0;p<5;p++){
    var bx=35+p*118,by=42;
    ctx.fillStyle=p===selProfile?songProfiles[p].color+'44':'rgba(255,255,255,0.04)';
    ctx.fillRect(bx,by,110,20);
    ctx.strokeStyle=songProfiles[p].color;ctx.lineWidth=p===selProfile?2:1;ctx.strokeRect(bx,by,110,20);
    ctx.fillStyle=p===selProfile?'#fff':songProfiles[p].color;ctx.font='bold 10px sans-serif';
    ctx.textAlign='center';ctx.fillText(songProfiles[p].name,bx+55,by+14);
   }
  }
  draw();
  cv.addEventListener('click',function(e){
   var p=cxy29(cv,e);
   for(var i=0;i<5;i++){
    var bx=35+i*118,by=42;
    if(p.x>=bx&&p.x<=bx+110&&p.y>=by&&p.y<=by+20){selProfile=i;sfx29('diffRank');draw();return;}
   }
   selProfile=(selProfile+1)%5;sfx29('diffBreak');draw();
  });
  cv.addEventListener('touchend',function(e){e.preventDefault();selProfile=(selProfile+1)%5;sfx29('diffBreak');draw();});
 });
};

/* ══════════════════════════════════════════════════════
   6. 보컬 톤컬러 스펙트럼 Canvas 620x400
   - 12톤컬러 원형 스펙트럼 + 호버 상세
   ══════════════════════════════════════════════════════ */
window.__sv29ToneColorSpectrum=function(){
 sfx29('toneShimmer');
 ls29s('tone_opened',true);
 var tones=[
  {name:'Warm',label:'따뜻한',val:75,desc:'풍부한 저음 배음, 부드러운 감성',color:'#f97316'},
  {name:'Bright',label:'밝은',val:82,desc:'높은 배음 강조, 선명하고 명확',color:'#fbbf24'},
  {name:'Dark',label:'어두운',val:60,desc:'깊은 저음, 묵직한 울림',color:'#6366f1'},
  {name:'Airy',label:'공기감',val:68,desc:'숨소리 혼합, 가벼운 텍스처',color:'#34d399'},
  {name:'Husky',label:'허스키',val:55,desc:'거친 질감, 독특한 매력',color:'#a78bfa'},
  {name:'Clear',label:'맑은',val:88,desc:'깨끗한 음색, 투명한 발성',color:'#60a5fa'},
  {name:'Nasal',label:'비성',val:45,desc:'코 울림, 독특한 톤',color:'#ec4899'},
  {name:'Breathy',label:'기식음',val:62,desc:'바람 소리 섞인, 섹시한 톤',color:'#f87171'},
  {name:'Metallic',label:'금속성',val:70,desc:'날카롭고 강렬한 배음',color:'#94a3b8'},
  {name:'Silky',label:'실키',val:78,desc:'부드럽고 매끄러운 질감',color:'#c084fc'},
  {name:'Powerful',label:'파워풀',val:85,desc:'강렬한 성량, 압도적 존재감',color:'#ef4444'},
  {name:'Delicate',label:'섬세한',val:72,desc:'정교한 뉘앙스, 세밀한 표현',color:'#14b8a6'}
 ];
 var selTone=-1;
 createModal29('보컬 톤컬러 스펙트럼',620,400,function(cv,ctx){
  function draw(){
   ctx.clearRect(0,0,620,400);
   ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('보컬 톤컬러 스펙트럼 (클릭: 톤 상세)',310,22);
   var cx=310,cy=200,outerR=150,innerR=60;
   var sliceAngle=Math.PI*2/12;
   for(var i=0;i<12;i++){
    var startAngle=sliceAngle*i-Math.PI/2;
    var endAngle=startAngle+sliceAngle;
    var valR=innerR+(outerR-innerR)*(tones[i].val/100);
    ctx.beginPath();
    ctx.arc(cx,cy,valR,startAngle,endAngle);
    ctx.arc(cx,cy,innerR,endAngle,startAngle,true);
    ctx.closePath();
    ctx.fillStyle=i===selTone?tones[i].color:tones[i].color+'88';
    ctx.fill();
    ctx.strokeStyle=i===selTone?'#fff':tones[i].color;
    ctx.lineWidth=i===selTone?2.5:1;
    ctx.stroke();
    var midAngle=startAngle+sliceAngle/2;
    var labelR=outerR+20;
    var lx=cx+Math.cos(midAngle)*labelR;
    var ly=cy+Math.sin(midAngle)*labelR;
    ctx.fillStyle=i===selTone?'#fff':tones[i].color;
    ctx.font=i===selTone?'bold 11px sans-serif':'10px sans-serif';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(tones[i].label,lx,ly);
    var valLabelR=innerR+(valR-innerR)/2;
    var vx=cx+Math.cos(midAngle)*valLabelR;
    var vy=cy+Math.sin(midAngle)*valLabelR;
    ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';
    ctx.fillText(tones[i].val+'%',vx,vy);
   }
   ctx.beginPath();ctx.arc(cx,cy,innerR-2,0,Math.PI*2);
   ctx.fillStyle='#0a0818';ctx.fill();
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('TONE',cx,cy-6);ctx.fillText('COLOR',cx,cy+12);
   if(selTone>=0){
    var t=tones[selTone];
    ctx.fillStyle='#1a1040';ctx.fillRect(110,365,400,30);
    ctx.strokeStyle=t.color;ctx.lineWidth=1.5;ctx.strokeRect(110,365,400,30);
    ctx.fillStyle=t.color;ctx.font='bold 12px sans-serif';ctx.textAlign='left';
    ctx.fillText(t.label+' ('+t.name+') '+t.val+'%',120,380);
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';
    ctx.fillText(t.desc,120,393);
   }
   var sorted=tones.slice().sort(function(a,b){return b.val-a.val;});
   ctx.fillStyle='#34d399';ctx.font='12px sans-serif';ctx.textAlign='left';
   ctx.fillText('★ 최강 톤: '+sorted[0].label+' ('+sorted[0].val+'%)',20,370);
   ctx.fillStyle='#fbbf24';ctx.font='11px sans-serif';
   ctx.fillText('2위: '+sorted[1].label+' ('+sorted[1].val+'%)',20,387);
  }
  draw();
  cv.addEventListener('click',function(e){
   var p=cxy29(cv,e);
   var cx=310,cy=200;
   var dx=p.x-cx,dy=p.y-cy;
   var dist=Math.sqrt(dx*dx+dy*dy);
   if(dist<160&&dist>30){
    var angle=Math.atan2(dy,dx)+Math.PI/2;
    if(angle<0)angle+=Math.PI*2;
    var idx=Math.floor(angle/(Math.PI*2/12))%12;
    selTone=idx;sfx29('toneGlow');draw();
   }
  });
  cv.addEventListener('touchend',function(e){e.preventDefault();selTone=(selTone+1)%12;sfx29('toneShimmer');draw();});
 });
};

/* ══════════════════════════════════════════════════════
   7. 싱어 성장 로드맵 Canvas 620x400
   - 10단계 스킬트리 형태 성장 경로
   ══════════════════════════════════════════════════════ */
window.__sv29SingerGrowthRoadmap=function(){
 sfx29('growthUp');
 ls29s('growth_opened',true);
 var stages=[
  {name:'입문',level:1,skills:['음정 인식','기본 호흡'],progress:100,x:310,y:370},
  {name:'초급',level:2,skills:['음정 유지','복식 호흡'],progress:90,x:200,y:320},
  {name:'초중급',level:3,skills:['리듬 감각','발성 기초'],progress:80,x:420,y:320},
  {name:'중급',level:4,skills:['비브라토 기초','감정 표현'],progress:70,x:150,y:260},
  {name:'중상급',level:5,skills:['믹스보이스','곡 해석'],progress:55,x:470,y:260},
  {name:'상급',level:6,skills:['고급 기교','장르 소화'],progress:40,x:200,y:200},
  {name:'고급',level:7,skills:['음색 컨트롤','무대 매너'],progress:25,x:420,y:200},
  {name:'전문가',level:8,skills:['즉흥 애드립','하모니'],progress:15,x:150,y:140},
  {name:'마스터',level:9,skills:['보컬 프로듀싱','멘토링'],progress:5,x:470,y:140},
  {name:'레전드',level:10,skills:['모든 장르 정복','고유 스타일'],progress:0,x:310,y:80}
 ];
 var connections=[[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,9]];
 var selStage=-1;
 createModal29('싱어 성장 로드맵',620,400,function(cv,ctx){
  function draw(){
   ctx.clearRect(0,0,620,400);
   ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
   ctx.fillText('싱어 성장 로드맵 (클릭: 단계 상세)',310,22);
   connections.forEach(function(c){
    var from=stages[c[0]],to=stages[c[1]];
    ctx.beginPath();ctx.moveTo(from.x,from.y);ctx.lineTo(to.x,to.y);
    var bothDone=from.progress>=50&&to.progress>=50;
    ctx.strokeStyle=bothDone?'#34d399':'rgba(168,85,247,0.3)';
    ctx.lineWidth=bothDone?2.5:1.5;
    ctx.setLineDash(bothDone?[]:[5,5]);
    ctx.stroke();ctx.setLineDash([]);
   });
   stages.forEach(function(s,i){
    var nodeR=22;
    ctx.beginPath();ctx.arc(s.x,s.y,nodeR,0,Math.PI*2);
    if(s.progress>=80)ctx.fillStyle='#34d39944';
    else if(s.progress>=40)ctx.fillStyle='#fbbf2444';
    else ctx.fillStyle='rgba(168,85,247,0.15)';
    ctx.fill();
    ctx.beginPath();ctx.arc(s.x,s.y,nodeR,0,Math.PI*2);
    if(i===selStage)ctx.strokeStyle='#fff';
    else if(s.progress>=80)ctx.strokeStyle='#34d399';
    else if(s.progress>=40)ctx.strokeStyle='#fbbf24';
    else ctx.strokeStyle='#a855f7';
    ctx.lineWidth=i===selStage?3:2;ctx.stroke();
    ctx.beginPath();
    ctx.arc(s.x,s.y,nodeR,-Math.PI/2,-Math.PI/2+Math.PI*2*(s.progress/100));
    ctx.strokeStyle=s.progress>=80?'#34d399':s.progress>=40?'#fbbf24':'#a855f7';
    ctx.lineWidth=3;ctx.stroke();
    ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('Lv'+s.level,s.x,s.y-3);
    ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';
    ctx.fillText(s.progress+'%',s.x,s.y+10);
    ctx.fillStyle=s.progress>=80?'#34d399':'#c084fc';ctx.font='bold 10px sans-serif';
    ctx.fillText(s.name,s.x,s.y-nodeR-8);
   });
   if(selStage>=0){
    var ss=stages[selStage];
    ctx.fillStyle='#1a1040';ctx.fillRect(140,38,340,38);
    ctx.strokeStyle='#a855f7';ctx.lineWidth=1.5;ctx.strokeRect(140,38,340,38);
    ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='left';
    ctx.fillText('Lv'+ss.level+' '+ss.name+' ('+ss.progress+'%)',150,55);
    ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';
    ctx.fillText('★ '+ss.skills.join(' / '),150,70);
   }
   var currentLevel=1;
   stages.forEach(function(s){if(s.progress>=50)currentLevel=Math.max(currentLevel,s.level);});
   ctx.fillStyle='#fbbf24';ctx.font='bold 13px sans-serif';ctx.textAlign='right';
   ctx.fillText('현재 레벨: Lv'+currentLevel,600,390);
  }
  draw();
  cv.addEventListener('click',function(e){
   var p=cxy29(cv,e);
   var found=-1;
   stages.forEach(function(s,i){
    var dx=p.x-s.x,dy=p.y-s.y;
    if(Math.sqrt(dx*dx+dy*dy)<28)found=i;
   });
   if(found>=0){selStage=found;sfx29('growthMilestone');}
   else{selStage=-1;}
   draw();
  });
  cv.addEventListener('touchend',function(e){e.preventDefault();selStage=(selStage+1)%10;sfx29('growthUp');draw();});
 });
};

/* ══════════════════════════════════════════════════════
   8. 종합 보컬 마스터리 대시보드 Canvas 620x400
   - 8KPI 반원게이지 4x2 + 가중 종합 S~D등급
   ══════════════════════════════════════════════════════ */
window.__sv29ComprehensiveVocalMastery=function(){
 sfx29('masteryComplete');
 ls29s('mastery_opened',true);
 var kpis=[
  {name:'레지스터 전환',val:72,weight:15,icon:'🔄'},
  {name:'감정 표현력',val:78,weight:15,icon:'🎭'},
  {name:'피치 안정성',val:82,weight:15,icon:'🎯'},
  {name:'듀엣 호환성',val:68,weight:10,icon:'💑'},
  {name:'난이도 소화력',val:75,weight:10,icon:'📐'},
  {name:'톤컬러 다양성',val:80,weight:10,icon:'🎨'},
  {name:'성장 진척도',val:65,weight:10,icon:'🌱'},
  {name:'종합 기교',val:70,weight:15,icon:'👑'}
 ];
 createModal29('종합 보컬 마스터리 대시보드',620,400,function(cv,ctx){
  function drawGauge(cx,cy,r,val,label,icon){
   ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI,0);
   ctx.strokeStyle='rgba(168,85,247,0.2)';ctx.lineWidth=10;ctx.stroke();
   var endAngle=-Math.PI+Math.PI*(val/100);
   ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI,endAngle);
   var grade=gradeFor29(val);
   ctx.strokeStyle=gradeColor29(grade);ctx.lineWidth=10;ctx.stroke();
   ctx.fillStyle=gradeColor29(grade);ctx.font='bold 20px sans-serif';ctx.textAlign='center';
   ctx.fillText(val+'%',cx,cy-6);
   ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
   ctx.fillText(label,cx,cy+10);
   ctx.font='16px sans-serif';
   ctx.fillText(icon,cx,cy-r-8);
   ctx.fillStyle=gradeColor29(grade);ctx.font='bold 12px sans-serif';
   ctx.fillText(grade,cx+r-2,cy-r+6);
  }
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('종합 보컬 마스터리 대시보드',310,22);
  var cols=4,rows=2;
  var gw=620/cols,gh=170;
  for(var i=0;i<8;i++){
   var col=i%cols,row=Math.floor(i/cols);
   var cx=gw/2+col*gw;
   var cy=95+row*(gh+20);
   drawGauge(cx,cy,48,kpis[i].val,kpis[i].name,kpis[i].icon);
  }
  var totalWeighted=0,totalWeight=0;
  kpis.forEach(function(k){totalWeighted+=k.val*k.weight;totalWeight+=k.weight;});
  var overallPct=Math.round(totalWeighted/totalWeight);
  var overallGrade=gradeFor29(overallPct);
  ctx.fillStyle='#1a1040';ctx.fillRect(180,365,260,30);
  ctx.strokeStyle=gradeColor29(overallGrade);ctx.lineWidth=2;ctx.strokeRect(180,365,260,30);
  ctx.fillStyle=gradeColor29(overallGrade);ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText('★ 종합 마스터리: '+overallGrade+' ('+overallPct+'%)',310,385);
 });
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
 {label:'🔄레지스터',fn:'__sv29VocalRegisterTransition',key:'Q'},
 {label:'🎭감정곡선',fn:'__sv29EmotionCurveDesigner',key:'W'},
 {label:'🎯피치안정',fn:'__sv29PitchStabilityMatrix',key:'E'},
 {label:'💑듀엇호환',fn:'__sv29DuetCompatibility',key:'R'},
 {label:'📐난이도',fn:'__sv29DifficultyDecomposer',key:'T'},
 {label:'🎨톤컬러',fn:'__sv29ToneColorSpectrum',key:'Y'},
 {label:'🌱성장로드맵',fn:'__sv29SingerGrowthRoadmap',key:'U'},
 {label:'👑마스터리',fn:'__sv29ComprehensiveVocalMastery',key:'I'},
 {label:'🔄v29',fn:null,key:'0'}
];

btnDefs.forEach(function(def){
 var btn=document.createElement('button');
 btn.textContent=def.label;
 btn.title='v29: '+def.label+(def.key?' (Shift+'+def.key+')':'');
 btn.style.cssText='padding:6px 10px;margin:2px;background:linear-gradient(135deg,#059669,#10b981);color:white;border:none;border-radius:8px;cursor:pointer;font-size:11px;font-weight:bold;box-shadow:0 2px 6px rgba(5,150,105,0.4);';
 btn.addEventListener('mouseenter',function(){btn.style.transform='scale(1.08)';});
 btn.addEventListener('mouseleave',function(){btn.style.transform='scale(1)';});
 btn.onclick=function(){
  sfx29('navClick29');
  if(def.fn&&window[def.fn])window[def.fn]();
 };
 if(existingNav)existingNav.appendChild(btn);
});

/* ── Keyboard Shortcuts (Shift+Q/W/E/R/T/Y/U/I/0) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'Q':'__sv29VocalRegisterTransition','W':'__sv29EmotionCurveDesigner','E':'__sv29PitchStabilityMatrix',
  'R':'__sv29DuetCompatibility','T':'__sv29DifficultyDecomposer','Y':'__sv29ToneColorSpectrum',
  'U':'__sv29SingerGrowthRoadmap','I':'__sv29ComprehensiveVocalMastery'
 };
 var key=e.key.toUpperCase();
 if(map[key]&&window[map[key]]){e.preventDefault();sfx29('navClick29');window[map[key]]();}
 if(key==='0'||e.code==='Digit0'){e.preventDefault();sfx29('navClick29');}
});

},800);
});
})();
