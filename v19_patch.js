/* StarVoice v19 Patch — Self-contained IIFE module injected via SW
 * +10 songs(155->165), BreathPatternAnalyzer Canvas, VibratoWaveformAnalyzer Canvas,
 * DifficultyProgressionMap Canvas, SingerProfileCard Canvas PNG,
 * DuetHarmonyMatcher Canvas, MoodSoundscape Canvas,
 * VocalDynamicRange Canvas, AllTimeBestReplay Canvas,
 * quiz +15(177->192), achievements +12(150->162), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v19KaraokeLoaded) return;
window.__v19KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;

function ls19(k,d){try{var v=localStorage.getItem('sv19-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls19s(k,v){try{localStorage.setItem('sv19-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (156-165) ── */
var v19Songs=[
{id:156,title:'Power',artist:'G-DRAGON',bpm:130,key:'A',difficulty:4,genre:'hiphop',
 notes:[A3,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['I','got','the','power','나','를','따','라','와','Power','power','내','가','다','해','줄게'],
 duration:[345,345,345,690,345,345,345,345,345,345,345,690,345,345,345,345]},
{id:157,title:'Drowning',artist:'WOODZ',bpm:108,key:'Eb',difficulty:4,genre:'pop',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['빠','져','드','는','이','밤','속','에','Drow','ning','in','your','love','to','night','oh'],
 duration:[415,415,415,830,415,415,415,415,415,415,415,830,415,415,415,415]},
{id:158,title:'Love wins all',artist:'IU',bpm:72,key:'F',difficulty:3,genre:'ballad',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['사','랑','이','이','긴','다','면','좋','겠','다','언','제','나','영','원','히'],
 duration:[625,625,625,1250,625,625,625,625,625,625,625,1250,625,625,625,625]},
{id:159,title:'Sticky',artist:'KISS OF LIFE',bpm:110,key:'G',difficulty:4,genre:'rnb',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['Sti','cky','sti','cky','너','한','테','빠','져','서','못','나','와','매','일','밤'],
 duration:[410,410,410,820,410,410,410,410,410,410,410,820,410,410,410,410]},
{id:160,title:'Small girl',artist:'이영지',bpm:95,key:'C',difficulty:4,genre:'hiphop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['작','은','몸','에','큰','꿈','을','담','아','서','걸','어','가','는','내','길'],
 duration:[470,470,470,940,470,470,470,470,470,470,470,940,470,470,470,470]},
{id:161,title:'Fate',artist:'(G)I-DLE',bpm:132,key:'D',difficulty:5,genre:'dance',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['운','명','이','라','면','받','아','들','일','게','너','와','나','의','fa','te'],
 duration:[340,340,340,680,340,340,340,340,340,340,340,680,340,340,340,340]},
{id:162,title:'미안해 미워해 사랑해',artist:'Crush',bpm:80,key:'Bb',difficulty:3,genre:'ballad',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['미','안','해','미','워','해','사','랑','해','반','복','하','는','우','리','야'],
 duration:[560,560,560,1120,560,560,560,560,560,560,560,1120,560,560,560,560]},
{id:163,title:'Armageddon',artist:'aespa',bpm:142,key:'E',difficulty:5,genre:'dance',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['Ar','ma','ged','don','세','상','이','끝','나','도','우','린','함','께','할','거야'],
 duration:[315,315,315,630,315,315,315,315,315,315,315,630,315,315,315,315]},
{id:164,title:'천상연',artist:'이창섭',bpm:74,key:'Ab',difficulty:3,genre:'ballad',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db5,F4,Ab4,G4,F4,Eb4,Db5],
 lyrics:['하','늘','이','정','해','준','인','연','이','라','면','기','꺼','이','따','르리'],
 duration:[607,607,607,1214,607,607,607,607,607,607,607,1214,607,607,607,607]},
{id:165,title:'How Sweet',artist:'NewJeans',bpm:114,key:'C',difficulty:3,genre:'pop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['How','sweet','달','콤','한','너','와','나','How','sweet','이','순','간','이','좋','아'],
 duration:[395,395,395,790,395,395,395,395,395,395,395,790,395,395,395,395]}
];
(function injectSongs19(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v19Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v19 (12 sounds) ── */
var actx19=null;
function getAC19(){if(!actx19)try{actx19=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx19;}
function sfx19(type){
 var ac=getAC19();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  breathIn:{f:330,d:.5,wave:'sine',gS:.15,gE:0},
  breathOut:{f:220,d:.6,wave:'sine',gS:.12,gE:0},
  vibratoDetect:{f:660,d:.35,wave:'triangle',gS:.2,gE:0},
  difficultyUp:{f:523,d:.4,wave:'sine',gS:.22,gE:0},
  profileGen:{f:880,d:.5,wave:'triangle',gS:.28,gE:0},
  harmonyMatch:{f:440,d:.45,wave:'sine',gS:.2,gE:0},
  moodShift:{f:349,d:.55,wave:'sine',gS:.15,gE:0},
  dynamicPeak:{f:784,d:.3,wave:'triangle',gS:.25,gE:0},
  replayStart:{f:587,d:.35,wave:'sine',gS:.18,gE:0},
  quizCorrect19:{f:1047,d:.3,wave:'triangle',gS:.22,gE:0},
  quizWrong19:{f:196,d:.4,wave:'sawtooth',gS:.1,gE:0},
  achieve19:{f:1175,d:.6,wave:'triangle',gS:.32,gE:0}
 };
 var c=cfg[type]||cfg.breathIn;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='vibratoDetect'){o.frequency.setValueAtTime(c.f,t);o.frequency.linearRampToValueAtTime(c.f*1.05,t+0.05);o.frequency.linearRampToValueAtTime(c.f*0.95,t+0.1);o.frequency.linearRampToValueAtTime(c.f,t+0.15);}
 if(type==='moodShift'){o.frequency.exponentialRampToValueAtTime(c.f*1.5,t+c.d*0.5);}
 g.gain.setValueAtTime(c.gS,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Quiz v19 (+15 questions, 177->192) ── */
var v19Quiz=[
{q:'비브라토(Vibrato)의 일반적인 주파수 진동 범위는?',a:['3~7Hz','0.5~1Hz','10~15Hz','20Hz이상'],c:0},
{q:'다이어프램(횡격막) 호흡법에서 숨을 들이마실 때 배의 움직임은?',a:['배가 나온다','배가 들어간다','변화 없다','가슴만 팽창'],c:0},
{q:'벨팅(Belting) 창법의 특징으로 올바른 것은?',a:['흉성을 고음까지 끌어올림','두성 위주 발성','속삭이는 소리','팔세토 연장'],c:0},
{q:'마이크와 입 사이 최적 거리는?',a:['2~5cm','20cm 이상','10~15cm','입에 밀착'],c:0},
{q:'음정의 &quot;샤프(#)&quot;는 음을 어떻게 변화시키는가?',a:['반음 올림','반음 내림','온음 올림','변화 없음'],c:0},
{q:'노래방 에코(Echo) 이펙트의 역할로 적절한 것은?',a:['잔향으로 풍성한 소리','음정 교정','템포 변경','키 조절'],c:0},
{q:'가성(Falsetto)과 두성(Head Voice)의 차이는?',a:['두성이 더 밀도 있는 소리','둘은 완전히 같다','가성이 더 힘이 있다','두성은 저음에서만 사용'],c:0},
{q:'성대결절 예방을 위한 올바른 습관은?',a:['충분한 수분 섭취','강하게 기침하기','속삭이며 대화','찬 음료 마시기'],c:0},
{q:'리듬에서 &quot;싱코페이션(Syncopation)&quot;이란?',a:['약박에 강세를 주는 것','점점 빨라지는 것','일정한 박자 유지','셋잇단음표만 사용'],c:0},
{q:'보컬 믹싱에서 &quot;디에서(De-esser)&quot;의 용도는?',a:['치찰음(쉿소리) 제거','저음 부스트','리버브 추가','음정 보정'],c:0},
{q:'노래할 때 &quot;서포트(Support)&quot;란?',a:['복부 근육으로 호흡 지지','마이크 잡는 방법','무대 조명 설정','반주 볼륨 조절'],c:0},
{q:'보컬 레지스터(Register) 중 &quot;Mixed Voice&quot;는?',a:['흉성과 두성의 혼합','저음역만 사용','가성과 동일','비음 발성'],c:0},
{q:'노래방 점수에서 &quot;비브라토 점수&quot;가 높으려면?',a:['일정한 폭과 속도 유지','최대한 빠르게 떨기','비브라토 안 쓰기','음정 무시하고 흔들기'],c:0},
{q:'발라드에서 &quot;브릿지(Bridge)&quot; 파트의 역할은?',a:['절정 전 감정 전환','곡의 시작 부분','간주 후 반복','엔딩 페이드아웃'],c:0},
{q:'보컬 컨디션 유지를 위한 수면 시간 권장량은?',a:['7~8시간','3~4시간','12시간 이상','수면과 무관'],c:0}
];
(function injectQuiz19(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v19Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v19 (+12, 150->162) ── */
var v19Achievements=[
{id:'breath_master',title:'호흡의 달인',desc:'호흡 패턴 분석기 전체 완료',icon:'🌬️'},
{id:'vibrato_king',title:'비브라토 킹',desc:'비브라토 분석 S등급 달성',icon:'〰️'},
{id:'difficulty_climber',title:'난이도 정복자',desc:'난이도5 곡 10개 클리어',icon:'⛰️'},
{id:'profile_creator',title:'프로필 아티스트',desc:'싱어 프로필 카드 생성',icon:'🎴'},
{id:'harmony_singer',title:'하모니 싱어',desc:'듀엣 하모니 매칭 완벽 달성',icon:'🎶'},
{id:'mood_setter',title:'분위기 메이커',desc:'모든 분위기 사운드스케이프 체험',icon:'🌈'},
{id:'dynamic_vocalist',title:'다이나믹 보컬리스트',desc:'다이나믹 레인지 S등급',icon:'📊'},
{id:'replay_collector',title:'리플레이 수집가',desc:'올타임 베스트 10곡 기록',icon:'🏆'},
{id:'quiz_v19_master',title:'퀴즈 v19 마스터',desc:'v19 퀴즈 전문 S등급',icon:'🧠'},
{id:'song_165',title:'165곡 마스터',desc:'165번째 곡 노래하기',icon:'🎵'},
{id:'v19_explorer',title:'v19 탐험가',desc:'v19 기능 모두 체험',icon:'🔭'},
{id:'v19_complete',title:'v19 컴플리트',desc:'v19 모든 업적 달성',icon:'👑'}
];
(function injectAch19(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v19Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── 1. Breath Pattern Analyzer Canvas 560x340 ── */
function createBreathAnalyzer(){
 var saved=ls19('breathData',{patterns:[0,0,0,0,0,0,0,0],sessions:0});
 var patterns=['횡격막호흡','복식호흡','흉식호흡','어깨호흡','순환호흡','스타카토호흡','긴호흡유지','빠른흡입'];
 var sec=document.createElement('div');
 sec.id='sv19-breath-analyzer';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(40,20,80,.85),rgba(30,60,100,.7));border-radius:16px;border:1.5px solid rgba(100,200,255,.2)';
 sec.innerHTML='<h3 style="color:#64c8ff;margin-bottom:12px;font-size:15px">🌬️ 호흡 패턴 분석기</h3>'+
  '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap" id="sv19-breath-btns"></div>'+
  '<canvas id="sv19-breath-cv" width="560" height="340" style="width:100%;max-width:560px;border-radius:10px;background:#0a0818"></canvas>'+
  '<div id="sv19-breath-stats" style="margin-top:10px;font-size:12px;color:#aaa"></div>';

 function drawBreath(){
  var cv=document.getElementById('sv19-breath-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,560,340);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,340);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#64c8ff';ctx.fillText('호흡 패턴 분석 결과',20,25);
  var maxVal=Math.max.apply(null,saved.patterns)||1;
  var barW=50,gap=15,startX=40,startY=300;
  for(var i=0;i<8;i++){
   var h=(saved.patterns[i]/maxVal)*220;
   var x=startX+i*(barW+gap);
   var grad=ctx.createLinearGradient(x,startY-h,x,startY);
   grad.addColorStop(0,'#64c8ff');grad.addColorStop(1,'rgba(100,200,255,.3)');
   ctx.fillStyle=grad;
   ctx.beginPath();ctx.roundRect(x,startY-h,barW,h,4);ctx.fill();
   ctx.fillStyle='#ccc';ctx.font='10px sans-serif';
   ctx.save();ctx.translate(x+barW/2,startY+15);ctx.rotate(-0.3);
   ctx.fillText(patterns[i],0,0);ctx.restore();
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';
   ctx.fillText(saved.patterns[i]+'회',x+barW/2-12,startY-h-8);
  }
  ctx.strokeStyle='rgba(100,200,255,.3)';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(startX,startY);ctx.lineTo(startX+8*(barW+gap),startY);ctx.stroke();
  var total=saved.patterns.reduce(function(a,b){return a+b;},0);
  var grade=total>=100?'S':total>=70?'A':total>=40?'B':total>=20?'C':'D';
  ctx.font='bold 20px sans-serif';ctx.fillStyle=grade==='S'?'#ffd700':grade==='A'?'#64c8ff':'#aaa';
  ctx.fillText(grade+' 등급',480,30);
  document.getElementById('sv19-breath-stats').textContent='총 연습: '+total+'회 | 세션: '+saved.sessions+'회 | 등급: '+grade;
 }
 setTimeout(function(){
  var btnC=document.getElementById('sv19-breath-btns');
  if(!btnC)return;
  patterns.forEach(function(p,i){
   var b=document.createElement('button');
   b.textContent=p;
   b.style.cssText='padding:5px 10px;border-radius:12px;border:1px solid rgba(100,200,255,.3);background:rgba(100,200,255,.1);color:#64c8ff;font-size:11px;cursor:pointer';
   b.onclick=function(){saved.patterns[i]++;saved.sessions++;ls19s('breathData',saved);sfx19('breathIn');drawBreath();};
   btnC.appendChild(b);
  });
  drawBreath();
 },100);
 return sec;
}

/* ── 2. Vibrato Waveform Analyzer Canvas 580x360 ── */
function createVibratoAnalyzer(){
 var saved=ls19('vibratoData',{rate:5.5,depth:40,consistency:75,sessions:[]});
 var sec=document.createElement('div');
 sec.id='sv19-vibrato-analyzer';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(60,20,80,.85),rgba(80,30,100,.7));border-radius:16px;border:1.5px solid rgba(200,130,255,.2)';
 sec.innerHTML='<h3 style="color:#c882ff;margin-bottom:12px;font-size:15px">〰️ 비브라토 파형 분석기</h3>'+
  '<div style="display:flex;gap:12px;margin-bottom:10px;flex-wrap:wrap" id="sv19-vib-controls"></div>'+
  '<canvas id="sv19-vibrato-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0a0818"></canvas>'+
  '<div id="sv19-vib-result" style="margin-top:10px;font-size:12px;color:#aaa"></div>';

 function drawVibrato(){
  var cv=document.getElementById('sv19-vibrato-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,580,360);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,580,360);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#c882ff';ctx.fillText('비브라토 파형 분석',20,25);
  var cx=290,cy=180,amp=saved.depth*1.2,freq=saved.rate;
  ctx.strokeStyle='rgba(200,130,255,.2)';ctx.lineWidth=1;
  for(var gy=60;gy<=300;gy+=40){ctx.beginPath();ctx.moveTo(40,gy);ctx.lineTo(540,gy);ctx.stroke();}
  ctx.strokeStyle='#c882ff';ctx.lineWidth=2.5;ctx.beginPath();
  for(var x=40;x<=540;x++){
   var t=(x-40)/500*Math.PI*2*freq;
   var noise=(Math.random()-0.5)*(100-saved.consistency)*0.3;
   var y=cy+Math.sin(t)*amp+noise;
   if(x===40)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.strokeStyle='rgba(255,200,0,.4)';ctx.lineWidth=1;ctx.setLineDash([5,5]);
  ctx.beginPath();ctx.moveTo(40,cy);ctx.lineTo(540,cy);ctx.stroke();ctx.setLineDash([]);
  ctx.fillStyle='#ffd700';ctx.font='10px sans-serif';ctx.fillText('기준선',545,cy+4);
  var score=Math.round((saved.consistency/100)*50+(saved.rate>=4&&saved.rate<=7?30:10)+(saved.depth>=20&&saved.depth<=60?20:5));
  var grade=score>=90?'S':score>=75?'A':score>=55?'B':score>=35?'C':'D';
  ctx.font='bold 16px sans-serif';ctx.fillStyle=grade==='S'?'#ffd700':'#c882ff';
  ctx.fillText('Rate: '+saved.rate.toFixed(1)+'Hz',40,340);
  ctx.fillText('Depth: '+saved.depth+'cents',200,340);
  ctx.fillText('일관성: '+saved.consistency+'%',380,340);
  ctx.font='bold 22px sans-serif';ctx.fillText(grade,540,35);
  document.getElementById('sv19-vib-result').textContent='비브라토 점수: '+score+'/100 ('+grade+'등급) | 최적 범위: Rate 4~7Hz, Depth 20~60cents';
 }
 setTimeout(function(){
  var ctrl=document.getElementById('sv19-vib-controls');if(!ctrl)return;
  var params=[{label:'Rate(Hz)',key:'rate',min:1,max:12,step:0.5},{label:'Depth(cents)',key:'depth',min:5,max:100,step:5},{label:'일관성(%)',key:'consistency',min:10,max:100,step:5}];
  params.forEach(function(p){
   var wrap=document.createElement('div');wrap.style.cssText='display:flex;flex-direction:column;gap:2px';
   wrap.innerHTML='<label style="font-size:10px;color:#c882ff">'+p.label+': <span id="sv19-vib-val-'+p.key+'">'+saved[p.key]+'</span></label>';
   var sl=document.createElement('input');sl.type='range';sl.min=p.min;sl.max=p.max;sl.step=p.step;sl.value=saved[p.key];
   sl.style.cssText='width:120px;accent-color:#c882ff';
   sl.oninput=function(){saved[p.key]=parseFloat(this.value);document.getElementById('sv19-vib-val-'+p.key).textContent=this.value;ls19s('vibratoData',saved);sfx19('vibratoDetect');drawVibrato();};
   wrap.appendChild(sl);ctrl.appendChild(wrap);
  });
  drawVibrato();
 },100);
 return sec;
}

/* ── 3. Difficulty Progression Map Canvas 600x380 ── */
function createDifficultyMap(){
 var saved=ls19('diffProg',{cleared:[0,0,0,0,0]});
 var tiers=['입문(Lv1)','초급(Lv2)','중급(Lv3)','고급(Lv4)','마스터(Lv5)'];
 var colors=['#4ade80','#60a5fa','#f59e0b','#f97316','#ef4444'];
 var sec=document.createElement('div');
 sec.id='sv19-difficulty-map';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(40,40,20,.85),rgba(60,50,20,.7));border-radius:16px;border:1.5px solid rgba(245,158,11,.2)';
 sec.innerHTML='<h3 style="color:#f59e0b;margin-bottom:12px;font-size:15px">⛰️ 곡별 난이도 프로그레션 맵</h3>'+
  '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap" id="sv19-diff-btns"></div>'+
  '<canvas id="sv19-diff-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0a0818"></canvas>';

 function drawDiff(){
  var cv=document.getElementById('sv19-diff-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,600,380);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#f59e0b';ctx.fillText('난이도 프로그레션 맵',20,25);
  var total=saved.cleared.reduce(function(a,b){return a+b;},0);
  for(var i=0;i<5;i++){
   var y=60+i*62;
   var pct=Math.min(saved.cleared[i]/20,1);
   ctx.fillStyle='rgba(255,255,255,.05)';ctx.beginPath();ctx.roundRect(100,y,440,45,6);ctx.fill();
   var grad=ctx.createLinearGradient(100,y,100+440*pct,y);
   grad.addColorStop(0,colors[i]);grad.addColorStop(1,colors[i]+'80');
   ctx.fillStyle=grad;ctx.beginPath();ctx.roundRect(100,y,440*pct,45,6);ctx.fill();
   ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';
   ctx.fillText(tiers[i],10,y+28);
   ctx.fillText(saved.cleared[i]+'/20곡',450,y+28);
   ctx.fillStyle=colors[i];ctx.fillText(Math.round(pct*100)+'%',530,y+28);
  }
  var grade=total>=80?'S':total>=60?'A':total>=40?'B':total>=20?'C':'D';
  ctx.font='bold 18px sans-serif';ctx.fillStyle='#ffd700';ctx.fillText('총 '+total+'/100 ('+grade+')',400,25);
 }
 setTimeout(function(){
  var bc=document.getElementById('sv19-diff-btns');if(!bc)return;
  tiers.forEach(function(t,i){
   var b=document.createElement('button');b.textContent='♪ '+t+' 클리어';
   b.style.cssText='padding:5px 10px;border-radius:12px;border:1px solid '+colors[i]+'40;background:'+colors[i]+'20;color:'+colors[i]+';font-size:11px;cursor:pointer';
   b.onclick=function(){if(saved.cleared[i]<20){saved.cleared[i]++;ls19s('diffProg',saved);sfx19('difficultyUp');drawDiff();}};
   bc.appendChild(b);
  });
  drawDiff();
 },100);
 return sec;
}

/* ── 4. Singer Profile Card Generator Canvas 600x400 PNG ── */
function createProfileCard(){
 var saved=ls19('profileData',{name:'StarVoice Singer',genre:'Pop',level:12,totalSongs:0,bestScore:0,favSong:'',badge:'골드'});
 var sec=document.createElement('div');
 sec.id='sv19-profile-card';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(80,20,60,.85),rgba(60,20,80,.7));border-radius:16px;border:1.5px solid rgba(255,106,176,.2)';
 sec.innerHTML='<h3 style="color:#ff6ab0;margin-bottom:12px;font-size:15px">🎴 싱어 프로필 카드 생성기</h3>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px" id="sv19-profile-inputs"></div>'+
  '<canvas id="sv19-profile-cv" width="600" height="400" style="width:100%;max-width:600px;border-radius:10px;background:#0a0818"></canvas>'+
  '<button id="sv19-profile-dl" style="margin-top:8px;padding:8px 16px;border-radius:12px;border:1px solid rgba(255,106,176,.3);background:rgba(255,106,176,.15);color:#ff6ab0;font-size:12px;cursor:pointer">📥 PNG 다운로드</button>';

 function drawProfile(){
  var cv=document.getElementById('sv19-profile-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var grd=ctx.createLinearGradient(0,0,600,400);
  grd.addColorStop(0,'#1a0a2e');grd.addColorStop(0.5,'#2d1b4e');grd.addColorStop(1,'#0f0a1e');
  ctx.fillStyle=grd;ctx.fillRect(0,0,600,400);
  ctx.strokeStyle='rgba(255,106,176,.4)';ctx.lineWidth=3;
  ctx.beginPath();ctx.roundRect(10,10,580,380,16);ctx.stroke();
  ctx.strokeStyle='rgba(168,85,247,.3)';ctx.lineWidth=1;
  ctx.beginPath();ctx.roundRect(20,20,560,360,12);ctx.stroke();
  ctx.font='bold 24px sans-serif';ctx.fillStyle='#ff6ab0';ctx.fillText('★ STARVOICE SINGER ★',150,55);
  ctx.font='bold 20px sans-serif';ctx.fillStyle='#fff';ctx.fillText(saved.name,40,100);
  ctx.font='14px sans-serif';ctx.fillStyle='#c084fc';
  ctx.fillText('장르: '+saved.genre,40,135);
  ctx.fillText('레벨: Lv.'+saved.level,40,160);
  ctx.fillText('총 노래: '+saved.totalSongs+'곡',40,185);
  ctx.fillText('최고점수: '+saved.bestScore+'점',40,210);
  ctx.fillText('최애곡: '+saved.favSong,40,235);
  ctx.fillText('배지: '+saved.badge,40,260);
  var badgeColor=saved.badge==='다이아'?'#b9f2ff':saved.badge==='플래티넘'?'#e5e4e2':saved.badge==='골드'?'#ffd700':'#c0c0c0';
  ctx.beginPath();ctx.arc(500,180,60,0,Math.PI*2);
  var bgrd=ctx.createRadialGradient(500,180,10,500,180,60);
  bgrd.addColorStop(0,badgeColor);bgrd.addColorStop(1,badgeColor+'40');
  ctx.fillStyle=bgrd;ctx.fill();
  ctx.font='bold 30px sans-serif';ctx.fillStyle='#1a0a2e';ctx.fillText('Lv',478,175);
  ctx.font='bold 36px sans-serif';ctx.fillText(saved.level.toString(),480,210);
  ctx.font='11px sans-serif';ctx.fillStyle='#888';ctx.fillText('StarVoice v19 | Generated '+new Date().toLocaleDateString('ko-KR'),40,380);
 }
 setTimeout(function(){
  var inp=document.getElementById('sv19-profile-inputs');if(!inp)return;
  var fields=[{k:'name',l:'이름',t:'text'},{k:'genre',l:'장르',t:'text'},{k:'level',l:'레벨',t:'number'},{k:'totalSongs',l:'총 노래수',t:'number'},{k:'bestScore',l:'최고점수',t:'number'},{k:'favSong',l:'최애곡',t:'text'}];
  fields.forEach(function(f){
   var d=document.createElement('div');d.style.cssText='display:flex;flex-direction:column;gap:2px';
   d.innerHTML='<label style="font-size:10px;color:#ff6ab0">'+f.l+'</label>';
   var i=document.createElement('input');i.type=f.t;i.value=saved[f.k];
   i.style.cssText='padding:5px 8px;border-radius:8px;border:1px solid rgba(255,106,176,.3);background:rgba(0,0,0,.3);color:#fff;font-size:12px';
   i.oninput=function(){saved[f.k]=f.t==='number'?parseInt(this.value)||0:this.value;ls19s('profileData',saved);drawProfile();};
   d.appendChild(i);inp.appendChild(d);
  });
  drawProfile();
  var dlBtn=document.getElementById('sv19-profile-dl');
  if(dlBtn)dlBtn.onclick=function(){
   sfx19('profileGen');
   var cv=document.getElementById('sv19-profile-cv');if(!cv)return;
   var link=document.createElement('a');link.download='starvoice-profile.png';link.href=cv.toDataURL('image/png');link.click();
  };
 },100);
 return sec;
}

/* ── 5. Duet Harmony Matcher Canvas 560x340 ── */
function createHarmonyMatcher(){
 var intervals=['유니슨','단3도','장3도','완전4도','완전5도','단6도','장6도','옥타브'];
 var saved=ls19('harmonyData',{scores:[0,0,0,0,0,0,0,0],attempts:0});
 var sec=document.createElement('div');
 sec.id='sv19-harmony-matcher';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(20,60,40,.85),rgba(30,80,60,.7));border-radius:16px;border:1.5px solid rgba(74,222,128,.2)';
 sec.innerHTML='<h3 style="color:#4ade80;margin-bottom:12px;font-size:15px">🎶 듀엣 하모니 매칭</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv19-harmony-btns"></div>'+
  '<canvas id="sv19-harmony-cv" width="560" height="340" style="width:100%;max-width:560px;border-radius:10px;background:#0a0818"></canvas>';

 function drawHarmony(){
  var cv=document.getElementById('sv19-harmony-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,560,340);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,340);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#4ade80';ctx.fillText('하모니 인터벌 매칭 점수',20,25);
  var maxS=Math.max.apply(null,saved.scores)||1;
  for(var i=0;i<8;i++){
   var x=45+i*63;var h=(saved.scores[i]/maxS)*200;
   var y=290-h;
   var grad=ctx.createLinearGradient(x,y,x,290);
   grad.addColorStop(0,'#4ade80');grad.addColorStop(1,'rgba(74,222,128,.2)');
   ctx.fillStyle=grad;ctx.beginPath();ctx.roundRect(x,y,48,h,4);ctx.fill();
   ctx.fillStyle='#ccc';ctx.font='9px sans-serif';
   ctx.save();ctx.translate(x+24,305);ctx.rotate(-0.4);ctx.fillText(intervals[i],0,0);ctx.restore();
   ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.fillText(saved.scores[i],x+18,y-6);
  }
  var total=saved.scores.reduce(function(a,b){return a+b;},0);
  var grade=total>=80?'S':total>=50?'A':total>=30?'B':total>=15?'C':'D';
  ctx.font='bold 16px sans-serif';ctx.fillStyle='#ffd700';ctx.fillText(grade+' ('+total+'점)',460,25);
  ctx.font='11px sans-serif';ctx.fillStyle='#888';ctx.fillText('시도: '+saved.attempts+'회',460,45);
 }
 setTimeout(function(){
  var bc=document.getElementById('sv19-harmony-btns');if(!bc)return;
  intervals.forEach(function(intv,i){
   var b=document.createElement('button');b.textContent='♬ '+intv;
   b.style.cssText='padding:4px 9px;border-radius:10px;border:1px solid rgba(74,222,128,.3);background:rgba(74,222,128,.1);color:#4ade80;font-size:10px;cursor:pointer';
   b.onclick=function(){saved.scores[i]+=Math.floor(Math.random()*3)+8;saved.attempts++;ls19s('harmonyData',saved);sfx19('harmonyMatch');drawHarmony();};
   bc.appendChild(b);
  });
  drawHarmony();
 },100);
 return sec;
}

/* ── 6. Mood Soundscape Canvas 580x360 ── */
function createMoodSoundscape(){
 var moods=['신나는','감성적','파워풀','차분한','몽환적','그루비','청량한','애절한'];
 var moodColors=['#ff6ab0','#a855f7','#ef4444','#60a5fa','#c084fc','#f59e0b','#4ade80','#f97316'];
 var saved=ls19('moodData',{current:0,history:[],plays:[0,0,0,0,0,0,0,0]});
 var sec=document.createElement('div');
 sec.id='sv19-mood-soundscape';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(40,20,60,.85),rgba(60,30,80,.7));border-radius:16px;border:1.5px solid rgba(192,132,252,.2)';
 sec.innerHTML='<h3 style="color:#c084fc;margin-bottom:12px;font-size:15px">🌈 분위기 사운드스케이프</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv19-mood-btns"></div>'+
  '<canvas id="sv19-mood-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0a0818"></canvas>';

 function drawMood(){
  var cv=document.getElementById('sv19-mood-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,580,360);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,580,360);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#c084fc';ctx.fillText('분위기 사운드스케이프 히트맵',20,25);
  var total=saved.plays.reduce(function(a,b){return a+b;},0)||1;
  var cx=200,cy=200,r=130;
  for(var i=0;i<8;i++){
   var angle=(i/8)*Math.PI*2-Math.PI/2;
   var pct=saved.plays[i]/total;
   var segR=60+pct*r*2;
   ctx.beginPath();ctx.moveTo(cx,cy);
   ctx.arc(cx,cy,segR,angle,angle+Math.PI/4);
   ctx.closePath();
   ctx.fillStyle=moodColors[i]+'80';ctx.fill();
   ctx.strokeStyle=moodColors[i];ctx.lineWidth=2;ctx.stroke();
   var tx=cx+Math.cos(angle+Math.PI/8)*(segR+20);
   var ty=cy+Math.sin(angle+Math.PI/8)*(segR+20);
   ctx.fillStyle=moodColors[i];ctx.font='bold 11px sans-serif';
   ctx.fillText(moods[i],tx-20,ty);
  }
  ctx.fillStyle=moodColors[saved.current];ctx.font='bold 16px sans-serif';
  ctx.fillText('현재: '+moods[saved.current],400,60);
  ctx.fillStyle='#888';ctx.font='12px sans-serif';ctx.fillText('총 재생: '+total+'회',400,85);
  var fav=saved.plays.indexOf(Math.max.apply(null,saved.plays));
  ctx.fillStyle=moodColors[fav];ctx.fillText('최애 분위기: '+moods[fav],400,105);
 }
 setTimeout(function(){
  var bc=document.getElementById('sv19-mood-btns');if(!bc)return;
  moods.forEach(function(m,i){
   var b=document.createElement('button');b.textContent=m;
   b.style.cssText='padding:5px 10px;border-radius:12px;border:1px solid '+moodColors[i]+'40;background:'+moodColors[i]+'15;color:'+moodColors[i]+';font-size:11px;cursor:pointer';
   b.onclick=function(){saved.current=i;saved.plays[i]++;ls19s('moodData',saved);sfx19('moodShift');drawMood();};
   bc.appendChild(b);
  });
  drawMood();
 },100);
 return sec;
}

/* ── 7. Vocal Dynamic Range Meter Canvas 560x320 ── */
function createDynamicRange(){
 var saved=ls19('dynamicData',{pp:0,p:0,mp:0,mf:0,f:0,ff:0,sessions:0});
 var dynamics=['pp','p','mp','mf','f','ff'];
 var dynLabels=['피아니시모','피아노','메조피아노','메조포르테','포르테','포르티시모'];
 var dynColors=['#60a5fa','#4ade80','#a3e635','#fbbf24','#f97316','#ef4444'];
 var sec=document.createElement('div');
 sec.id='sv19-dynamic-range';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(30,30,60,.85),rgba(40,40,80,.7));border-radius:16px;border:1.5px solid rgba(251,191,36,.2)';
 sec.innerHTML='<h3 style="color:#fbbf24;margin-bottom:12px;font-size:15px">📊 보컬 다이나믹 레인지 미터</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv19-dyn-btns"></div>'+
  '<canvas id="sv19-dyn-cv" width="560" height="320" style="width:100%;max-width:560px;border-radius:10px;background:#0a0818"></canvas>';

 function drawDyn(){
  var cv=document.getElementById('sv19-dyn-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,560,320);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,320);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#fbbf24';ctx.fillText('다이나믹 레인지 분석',20,25);
  var vals=[saved.pp,saved.p,saved.mp,saved.mf,saved.f,saved.ff];
  var maxV=Math.max.apply(null,vals)||1;
  for(var i=0;i<6;i++){
   var y=55+i*42;var w=(vals[i]/maxV)*380;
   ctx.fillStyle='rgba(255,255,255,.04)';ctx.beginPath();ctx.roundRect(120,y,380,32,4);ctx.fill();
   var grad=ctx.createLinearGradient(120,y,120+w,y);
   grad.addColorStop(0,dynColors[i]);grad.addColorStop(1,dynColors[i]+'40');
   ctx.fillStyle=grad;ctx.beginPath();ctx.roundRect(120,y,w,32,4);ctx.fill();
   ctx.fillStyle=dynColors[i];ctx.font='bold 12px sans-serif';ctx.fillText(dynamics[i].toUpperCase(),20,y+21);
   ctx.fillStyle='#ccc';ctx.font='11px sans-serif';ctx.fillText(dynLabels[i],55,y+21);
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.fillText(vals[i]+'회',120+w+8,y+21);
  }
  var total=vals.reduce(function(a,b){return a+b;},0);
  var range=0;vals.forEach(function(v){if(v>0)range++;});
  var grade=range>=6?'S':range>=5?'A':range>=4?'B':range>=3?'C':'D';
  ctx.font='bold 16px sans-serif';ctx.fillStyle='#ffd700';ctx.fillText('레인지: '+range+'/6 ('+grade+')',380,25);
  ctx.font='11px sans-serif';ctx.fillStyle='#888';ctx.fillText('세션: '+saved.sessions+'회 | 총: '+total+'회',380,45);
 }
 setTimeout(function(){
  var bc=document.getElementById('sv19-dyn-btns');if(!bc)return;
  dynamics.forEach(function(d,i){
   var b=document.createElement('button');b.textContent=d.toUpperCase()+' ('+dynLabels[i]+')';
   b.style.cssText='padding:4px 10px;border-radius:10px;border:1px solid '+dynColors[i]+'40;background:'+dynColors[i]+'15;color:'+dynColors[i]+';font-size:10px;cursor:pointer';
   b.onclick=function(){saved[d]++;saved.sessions++;ls19s('dynamicData',saved);sfx19('dynamicPeak');drawDyn();};
   bc.appendChild(b);
  });
  drawDyn();
 },100);
 return sec;
}

/* ── 8. All-Time Best Replay Board Canvas 600x360 ── */
function createBestReplay(){
 var saved=ls19('bestReplay',{records:[]});
 var sec=document.createElement('div');
 sec.id='sv19-best-replay';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(60,40,10,.85),rgba(80,50,20,.7));border-radius:16px;border:1.5px solid rgba(255,215,0,.2)';
 sec.innerHTML='<h3 style="color:#ffd700;margin-bottom:12px;font-size:15px">🏆 올타임 베스트 리플레이 보드</h3>'+
  '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap"><input id="sv19-replay-song" placeholder="곡명" style="padding:5px 8px;border-radius:8px;border:1px solid rgba(255,215,0,.3);background:rgba(0,0,0,.3);color:#fff;font-size:11px;width:120px"><input id="sv19-replay-score" type="number" placeholder="점수" style="padding:5px 8px;border-radius:8px;border:1px solid rgba(255,215,0,.3);background:rgba(0,0,0,.3);color:#fff;font-size:11px;width:80px"><button id="sv19-replay-add" style="padding:5px 12px;border-radius:10px;border:1px solid rgba(255,215,0,.3);background:rgba(255,215,0,.15);color:#ffd700;font-size:11px;cursor:pointer">+ 기록 추가</button></div>'+
  '<canvas id="sv19-replay-cv" width="600" height="360" style="width:100%;max-width:600px;border-radius:10px;background:#0a0818"></canvas>';

 function drawReplay(){
  var cv=document.getElementById('sv19-replay-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,600,360);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,600,360);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#ffd700';ctx.fillText('🏆 올타임 베스트 TOP 10',20,25);
  var sorted=saved.records.slice().sort(function(a,b){return b.score-a.score;}).slice(0,10);
  if(sorted.length===0){ctx.fillStyle='#888';ctx.font='14px sans-serif';ctx.fillText('아직 기록이 없습니다. 곡을 노래하고 기록을 추가하세요!',100,180);return;}
  var medals=['🥇','🥈','🥉'];
  sorted.forEach(function(r,i){
   var y=50+i*30;
   var bgAlpha=i<3?'rgba(255,215,0,.08)':'rgba(255,255,255,.03)';
   ctx.fillStyle=bgAlpha;ctx.beginPath();ctx.roundRect(20,y,560,26,4);ctx.fill();
   ctx.fillStyle=i<3?'#ffd700':i<5?'#c0c0c0':'#cd7f32';
   ctx.font='bold 13px sans-serif';
   ctx.fillText(i<3?medals[i]:(i+1)+'.',30,y+18);
   ctx.fillStyle='#fff';ctx.font='13px sans-serif';ctx.fillText(r.song,70,y+18);
   ctx.fillStyle='#ffd700';ctx.font='bold 13px sans-serif';ctx.fillText(r.score+'점',480,y+18);
   ctx.fillStyle='#888';ctx.font='10px sans-serif';ctx.fillText(r.date||'',540,y+18);
  });
  if(sorted.length>0){
   ctx.fillStyle='#ffd700';ctx.font='bold 14px sans-serif';
   ctx.fillText('최고: '+sorted[0].score+'점 ('+sorted[0].song+')',20,350);
  }
 }
 setTimeout(function(){
  var addBtn=document.getElementById('sv19-replay-add');
  if(addBtn)addBtn.onclick=function(){
   var songEl=document.getElementById('sv19-replay-song');
   var scoreEl=document.getElementById('sv19-replay-score');
   var song=songEl?songEl.value.trim():'';
   var score=scoreEl?parseInt(scoreEl.value)||0:0;
   if(!song||!score)return;
   saved.records.push({song:song,score:score,date:new Date().toLocaleDateString('ko-KR')});
   if(saved.records.length>50)saved.records=saved.records.sort(function(a,b){return b.score-a.score;}).slice(0,50);
   ls19s('bestReplay',saved);sfx19('replayStart');drawReplay();
   if(songEl)songEl.value='';if(scoreEl)scoreEl.value='';
  };
  drawReplay();
 },100);
 return sec;
}

/* ── Mount all v19 sections ── */
function mountV19(){
 var target=document.getElementById('songSelect')||document.querySelector('.song-list')||document.querySelector('main')||document.body;
 var container=document.createElement('div');container.id='sv19-container';
 container.style.cssText='grid-column:1/-1;padding:0 4px';
 var header=document.createElement('div');
 header.style.cssText='background:linear-gradient(135deg,rgba(100,50,150,.3),rgba(50,100,150,.2));border-radius:14px;padding:16px;margin:12px 0;border:1px solid rgba(168,85,247,.2)';
 header.innerHTML='<h2 style="color:#a855f7;font-size:16px;margin-bottom:6px">🎤 StarVoice v19 — 8 신규 기능</h2>'+
  '<p style="color:#aaa;font-size:12px">호흡패턴분석기 | 비브라토파형분석기 | 난이도프로그레션맵 | 싱어프로필카드 | 듀엣하모니매칭 | 분위기사운드스케이프 | 다이나믹레인지미터 | 올타임베스트리플레이 | +10곡(165) | +15퀴즈(192) | +12업적(162)</p>';
 container.appendChild(header);
 container.appendChild(createBreathAnalyzer());
 container.appendChild(createVibratoAnalyzer());
 container.appendChild(createDifficultyMap());
 container.appendChild(createProfileCard());
 container.appendChild(createHarmonyMatcher());
 container.appendChild(createMoodSoundscape());
 container.appendChild(createDynamicRange());
 container.appendChild(createBestReplay());
 if(target.children.length>2)target.insertBefore(container,target.children[2]);
 else target.appendChild(container);
}

/* ── Keyboard shortcuts (Shift+B/V/D/P/H/M/R/Y) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'B':function(){var el=document.getElementById('sv19-breath-analyzer');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('breathIn');},
  'V':function(){var el=document.getElementById('sv19-vibrato-analyzer');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('vibratoDetect');},
  'D':function(){var el=document.getElementById('sv19-difficulty-map');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('difficultyUp');},
  'P':function(){var el=document.getElementById('sv19-profile-card');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('profileGen');},
  'H':function(){var el=document.getElementById('sv19-harmony-matcher');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('harmonyMatch');},
  'M':function(){var el=document.getElementById('sv19-mood-soundscape');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('moodShift');},
  'R':function(){var el=document.getElementById('sv19-dynamic-range');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('dynamicPeak');},
  'Y':function(){var el=document.getElementById('sv19-best-replay');if(el)el.scrollIntoView({behavior:'smooth'});sfx19('replayStart');}
 };
 if(map[e.key])map[e.key]();
});

/* ── Navigation buttons (append to existing nav, no new fixed bar) ── */
function addV19Nav(){
 var existing=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav');
 if(!existing){
  var tries=0;
  function waitNav(){
   existing=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav');
   if(existing)appendNavBtns(existing);
   else if(tries++<30)setTimeout(waitNav,500);
  }
  waitNav();return;
 }
 appendNavBtns(existing);
}
function appendNavBtns(nav){
 var items=[
  {label:'🌬️호흡',target:'sv19-breath-analyzer'},
  {label:'〰️비브',target:'sv19-vibrato-analyzer'},
  {label:'⛰️난이도',target:'sv19-difficulty-map'},
  {label:'🎴프로필',target:'sv19-profile-card'},
  {label:'🎶하모니',target:'sv19-harmony-matcher'},
  {label:'🌈무드',target:'sv19-mood-soundscape'},
  {label:'📊다이나믹',target:'sv19-dynamic-range'},
  {label:'🏆베스트',target:'sv19-best-replay'}
 ];
 items.forEach(function(it){
  var b=document.createElement('button');
  b.textContent=it.label;
  b.style.cssText='padding:4px 8px;border-radius:10px;border:1px solid rgba(168,85,247,.3);background:rgba(168,85,247,.1);color:#c084fc;font-size:10px;cursor:pointer;margin:2px';
  b.onclick=function(){var el=document.getElementById(it.target);if(el)el.scrollIntoView({behavior:'smooth'});};
  nav.appendChild(b);
 });
}

/* ── Init ── */
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(mountV19,800);setTimeout(addV19Nav,1200);});
else{setTimeout(mountV19,800);setTimeout(addV19Nav,1200);}

})();
