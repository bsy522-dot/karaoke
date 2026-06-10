/* StarVoice v12 Patch — Self-contained IIFE module injected via SW
 * 10 songs(85→95), vocal lesson curriculum 12, vibrato detector Canvas,
 * MV themes 8, pitch history chart Canvas, vocal technique encyclopedia 12,
 * difficulty progression map Canvas, duet challenge system,
 * share report card Canvas, daily vocal tips 30,
 * quiz +15(72→87), achievements +12(66→78), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v12KaraokeLoaded) return;
window.__v12KaraokeLoaded=true;

var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,G3=196.00,A3=220.00,B3=246.94,Fs4=369.99;

function ls12(k,d){try{var v=localStorage.getItem('sv12-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls12s(k,v){try{localStorage.setItem('sv12-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (86-95) ── */
var v12Songs=[
{id:86,title:'봄날은 간다',artist:'BTS',bpm:105,key:'D',difficulty:3,genre:'ballad',
 notes:[D4,E4,Fs4,A4,A4,Fs4,D4,E4,Fs4,A4,B4,A4,Fs4,D4,E4,D4],
 lyrics:['봄날','은','간','다','고','말','하','면','너','는','오','지','않','을','까','봄'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:87,title:'시작이 좋아',artist:'남진',bpm:128,key:'G',difficulty:4,genre:'dance',
 notes:[G4,A4,B4,D5,B4,G4,A4,B4,D5,E5,D5,B4,G4,A4,G4,A4],
 lyrics:['시','작','이','좋','아','나','를','보','면','넘','어','져','버','릴','것','같'],
 duration:[400,400,400,800,400,400,400,400,400,800,400,400,400,400,400,800]},
{id:88,title:'그날의 바다',artist:'윤하',bpm:72,key:'C',difficulty:2,genre:'ballad',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,E4],
 lyrics:['그','날','의','바','다','는','너','무','나','푸','르','러','서','나','를','울'],
 duration:[600,600,600,1200,600,600,600,600,600,600,600,1200,600,600,600,600]},
{id:89,title:'밤하늘의 별',artist:'이무진',bpm:96,key:'A',difficulty:3,genre:'acoustic',
 notes:[A3,C4,E4,A4,G4,E4,C4,A3,B3,D4,Fs4,A4,G4,Fs4,E4,D4],
 lyrics:['밤','하','늘','의','별','을','세','며','너','를','그','리','워','하','는','밤'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:90,title:'첫눈처럼',artist:'아이유',bpm:80,key:'F',difficulty:2,genre:'ballad',
 notes:[F4,A4,C5,A4,G4,F4,E4,D4,C4,E4,G4,C5,B4,A4,G4,F4],
 lyrics:['첫','눈','처','럼','내','리','는','너','를','향','한','마','음','은','하','얍'],
 duration:[600,600,600,1200,600,600,600,600,600,600,600,1200,600,600,600,600]},
{id:91,title:'무지개 너머',artist:'키이',bpm:140,key:'E',difficulty:5,genre:'dance',
 notes:[E4,G4,B4,E5,D5,B4,G4,E4,Fs4,A4,B4,E5,D5,B4,A4,G4],
 lyrics:['무','지','개','너','머','로','빛','나','는','우','리','의','무','대','위','로'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,700]},
{id:92,title:'사랑의 시',artist:'태연',bpm:68,key:'D',difficulty:2,genre:'ballad',
 notes:[D4,Fs4,A4,D5,C5,A4,Fs4,D4,E4,G4,B4,D5,C5,B4,A4,Fs4],
 lyrics:['사','랑','의','시','를','써','내','려','가','는','밤','하','늘','아','래','서'],
 duration:[700,700,700,1400,700,700,700,700,700,700,700,1400,700,700,700,700]},
{id:93,title:'열대야 꾸꾸라',artist:'NCT',bpm:135,key:'G',difficulty:4,genre:'hiphop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,B3],
 lyrics:['열','대','야','꾸','꾸','라','우','리','가','만','드','는','세','상','을','봐'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,700]},
{id:94,title:'해바라기 노래',artist:'정승환',bpm:88,key:'C',difficulty:3,genre:'acoustic',
 notes:[C4,E4,G4,A4,G4,E4,C4,D4,E4,G4,A4,C5,B4,A4,G4,E4],
 lyrics:['해','바','라','기','노','래','가','들','려','오','는','여','름','밤','의','바'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:95,title:'도시의 불빛',artist:'수지',bpm:118,key:'A',difficulty:4,genre:'pop',
 notes:[A4,C5,E5,A4,G4,E4,C4,A3,B3,D4,Fs4,A4,G4,Fs4,E4,D4],
 lyrics:['도','시','의','불','빛','속','에','서','너','를','찾','아','헤','매','는','밤'],
 duration:[400,400,400,800,400,400,400,400,400,400,400,800,400,400,400,800]}
];
(function injectSongs(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v12Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  } else if(tries++<40) setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine (12 sounds) ── */
var actx12=null;
function getAC(){if(!actx12)try{actx12=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx12;}
function sfx12(type){
 var ac=getAC();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  levelUp:{f:523,d:.3,wave:'sine',gS:.3,gE:0},
  achieve:{f:659,d:.5,wave:'triangle',gS:.3,gE:0},
  combo:{f:784,d:.2,wave:'square',gS:.15,gE:0},
  error:{f:220,d:.4,wave:'sawtooth',gS:.2,gE:0},
  click:{f:1000,d:.05,wave:'sine',gS:.1,gE:0},
  success:{f:880,d:.3,wave:'sine',gS:.25,gE:0},
  duetMatch:{f:698,d:.4,wave:'triangle',gS:.2,gE:0},
  tipPop:{f:1200,d:.1,wave:'sine',gS:.15,gE:0},
  vibratoHit:{f:440,d:.3,wave:'sine',gS:.2,gE:0},
  themeSwitch:{f:600,d:.2,wave:'triangle',gS:.15,gE:0},
  lessonDone:{f:740,d:.5,wave:'sine',gS:.25,gE:0},
  cardFlip:{f:900,d:.15,wave:'square',gS:.1,gE:0}
 };
 var c=cfg[type]||cfg.click;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='achieve'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d);}
 if(type==='vibratoHit'){var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=6;lg.gain.value=30;lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper ── */
function v12M(id,title,body){
 var old=document.getElementById(id);if(old)old.remove();
 var ov=document.createElement('div');ov.id=id;
 ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;padding:16px;overflow-y:auto';
 var box=document.createElement('div');
 box.style.cssText='background:#1a1030;color:#e0d0ff;border-radius:16px;padding:24px;max-width:600px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 8px 32px rgba(168,85,247,.4)';
 var h=document.createElement('div');
 h.style.cssText='display:flex;justify-content:space-between;align-items:center;margin-bottom:16px';
 var t=document.createElement('h2');t.textContent=title;t.style.cssText='margin:0;color:#c084fc;font-size:1.3em';
 var cls=document.createElement('button');cls.textContent='✕';
 cls.style.cssText='background:none;border:none;color:#a855f7;font-size:1.5em;cursor:pointer;padding:4px 8px';
 cls.onclick=function(){ov.remove();};
 h.appendChild(t);h.appendChild(cls);box.appendChild(h);
 if(typeof body==='string'){var bd=document.createElement('div');bd.innerHTML=body;box.appendChild(bd);}
 else box.appendChild(body);
 ov.appendChild(box);ov.addEventListener('click',function(ev){if(ev.target===ov)ov.remove();});
 document.body.appendChild(ov);
 return box;
}

/* ── Feature 1: Vocal Lesson Curriculum (12 lessons) ── */
var vocalLessons=[
 {id:1,title:'복식호흡',desc:'횡격막 호흡으로 안정적인 발성 기초',steps:['코로 4초 들이마시기','배가 부풀는 것 확인','입으로 6초 내쉬기','반복 10회']},
 {id:2,title:'두성구 연결',desc:'흉성과 두성을 부드럽게 연결하는 기법',steps:['낮은 음에서 시작','점차 올려 전환점 찾기','전환점에서 볼륨 줄이기','자연스럽게 넘기기']},
 {id:3,title:'비브라토 기초',desc:'횡격막 진동으로 자연스러운 떨림',steps:['한 음 길게 유지','배 근육 수축 반복','점점 속도 조절','음정 유지하며 떨기']},
 {id:4,title:'발성 위치',desc:'소리의 위치를 의식하여 톤 관리',steps:['허밍으로 소리 내보기','코 비강에 진동 느끼기','앞으로 소리 보내기','위치 바꾸며 연습']},
 {id:5,title:'모음 조절',desc:'5개 모음의 정확한 발음과 공명',steps:['아-에-이-오-우 순서대로','각 모음 입 모양 확인','높은음에서 모음 변환','노래에 적용 연습']},
 {id:6,title:'믹스드 보이스',desc:'흉성과 두성의 믹스로 강한 소리',steps:['흉성으로 강한 음 내기','점점 두성 요소 추가','밸런스 찾기','노래에 적용']},
 {id:7,title:'다이나믹스',desc:'볼륨과 강약의 자연스러운 조절',steps:['작은 소리에서 시작','크레섄도로 올리기','디크레섄도로 내리기','노래의 감정에 맞춰 적용']},
 {id:8,title:'벌티트',desc:'빠른 음정 변화에 대한 정확성',steps:['느린 텔포로 음 이동','점점 속도 올리기','도약 포함 연습','리듬감 유지하며 연습']},
 {id:9,title:'배음 제어',desc:'발성을 방해하는 배음 처리 기법',steps:['하품 내리기 연습','자음 변환 시 기류 흐름 유지','받침 연결 연습','빠른 가사 처리']},
 {id:10,title:'감정 표현',desc:'노래의 감정을 전달하는 표현력',steps:['가사 의미 분석','감정에 맞는 톤 선택','강약 포인트 설정','전체 흐름 설계']},
 {id:11,title:'벨티트',desc:'발성의 풍성함과 깊이를 더하는 기법',steps:['가슴 공명 느끼기','입안 공간 확보','저음에서 벨브티 연습','노래에 적용']},
 {id:12,title:'스테이지 퍼포먼스',desc:'무대 위에서의 종합적인 퍼포먼스',steps:['호흡+발성+감정 통합','마이크 사용법','청중과의 상호작용','전체 흐름 리허설']}
];
var lessonProgress=ls12('lessonProg',{});

function openVocalLessons(){
 var html='<div style="display:grid;gap:12px">';
 vocalLessons.forEach(function(l){
  var done=lessonProgress[l.id]||false;
  var bg=done?'linear-gradient(135deg,#065f46,#064e3b)':'linear-gradient(135deg,#312e81,#1e1b4b)';
  html+='<div style="background:'+bg+';border-radius:12px;padding:16px;cursor:pointer" onclick="window.__v12OpenLesson('+l.id+')">';
  html+='<div style="display:flex;justify-content:space-between;align-items:center">';
  html+='<strong style="color:#c084fc">Lesson '+l.id+': '+l.title+'</strong>';
  html+='<span style="font-size:.8em">'+(done?'✅ 완료':'⏳ 미완료')+'</span></div>';
  html+='<p style="margin:8px 0 0;font-size:.9em;color:#d4d4d8">'+l.desc+'</p></div>';
 });
 html+='</div>';
 v12M('v12-lessons','🎵 보컬 레슨 커리큐럼 (12단계)',html);
}
window.__v12OpenLesson=function(id){
 var l=vocalLessons.find(function(x){return x.id===id;});if(!l)return;
 var html='<p style="color:#a78bfa;font-size:1.1em">'+l.desc+'</p>';
 html+='<div style="margin:16px 0">';
 l.steps.forEach(function(s,i){html+='<div style="padding:8px;margin:4px 0;background:rgba(168,85,247,.15);border-radius:8px"><span style="color:#c084fc;font-weight:bold">Step '+(i+1)+':</span> '+s+'</div>';});
 html+='</div>';
 html+='<button onclick="window.__v12CompleteLesson('+id+')" style="width:100%;padding:12px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer">완료 표시</button>';
 v12M('v12-lesson-detail','📖 Lesson '+id+': '+l.title,html);
};
window.__v12CompleteLesson=function(id){
 lessonProgress[id]=true;ls12s('lessonProg',lessonProgress);
 sfx12('lessonDone');
 document.getElementById('v12-lesson-detail').remove();
 openVocalLessons();
 checkAch12('lesson_master',Object.keys(lessonProgress).length>=12);
};

/* ── Feature 2: Vibrato Detector Canvas ── */
function openVibratoDetector(){
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=200;
 cvs.style.cssText='width:100%;background:#0f0a1e;border-radius:8px';
 var info=document.createElement('div');info.style.cssText='margin-top:12px;text-align:center;color:#d4d4d8';
 info.textContent='마이크를 허용하고 비브라토를 시도하세요';
 var btn=document.createElement('button');
 btn.textContent='🎤 감지 시작';
 btn.style.cssText='margin-top:12px;width:100%;padding:12px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer';
 wrap.appendChild(cvs);wrap.appendChild(info);wrap.appendChild(btn);
 v12M('v12-vibrato','🌀 비브라토 감지기',wrap);

 var ctx=cvs.getContext('2d'),detecting=false,stream12=null,pitchBuf=[];
 btn.onclick=function(){
  if(detecting){detecting=false;btn.textContent='🎤 감지 시작';if(stream12){stream12.getTracks().forEach(function(t){t.stop();});stream12=null;}return;}
  navigator.mediaDevices.getUserMedia({audio:true}).then(function(st){
   stream12=st;detecting=true;btn.textContent='⏹ 정지';pitchBuf=[];
   var ac=new AudioContext(),src=ac.createMediaStreamSource(st),an=ac.createAnalyser();
   an.fftSize=2048;src.connect(an);var buf=new Float32Array(an.fftSize);
   function draw(){
    if(!detecting)return;requestAnimationFrame(draw);
    an.getFloatTimeDomainData(buf);
    var pitch=detectPitchACF(buf,ac.sampleRate);
    if(pitch>0){pitchBuf.push(pitch);if(pitchBuf.length>120)pitchBuf.shift();}
    ctx.clearRect(0,0,560,200);
    ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.beginPath();
    for(var i=0;i<pitchBuf.length;i++){
     var y=200-((pitchBuf[i]-100)/(800-100))*200;
     if(i===0)ctx.moveTo(0,y);else ctx.lineTo(i*(560/120),y);
    }
    ctx.stroke();
    if(pitchBuf.length>=20){
     var recent=pitchBuf.slice(-20),avg=recent.reduce(function(a,b){return a+b;},0)/recent.length;
     var variance=recent.reduce(function(a,b){return a+(b-avg)*(b-avg);},0)/recent.length;
     var rate=estimateVibratoRate(recent,ac.sampleRate/an.fftSize);
     var hasVib=variance>5&&variance<2000&&rate>4&&rate<8;
     info.innerHTML=hasVib?
      '<span style="color:#22c55e;font-size:1.2em">✨ 비브라토 감지! Rate: '+rate.toFixed(1)+'Hz Depth: '+Math.sqrt(variance).toFixed(1)+'Hz</span>':
      '<span style="color:#f59e0b">비브라토를 시도해보세요... ('+Math.sqrt(variance).toFixed(1)+'Hz)</span>';
     if(hasVib){sfx12('vibratoHit');checkAch12('vibrato_master',true);}
    }
   }
   draw();
  }).catch(function(){info.textContent='마이크 접근 불가';});
 };
}
function detectPitchACF(buf,sr){
 var n=buf.length,best=0,bestR=-1;
 for(var tau=Math.floor(sr/800);tau<Math.floor(sr/80);tau++){
  var r=0;for(var i=0;i<n-tau;i++)r+=buf[i]*buf[i+tau];
  if(r>bestR){bestR=r;best=tau;}
 }
 return best>0?sr/best:0;
}
function estimateVibratoRate(arr,frameRate){
 var crossings=0;var avg=arr.reduce(function(a,b){return a+b;},0)/arr.length;
 for(var i=1;i<arr.length;i++){if((arr[i-1]-avg)*(arr[i]-avg)<0)crossings++;}
 return(crossings/2)*frameRate/arr.length;
}

/* ── Feature 3: MV Themes (8 themes) ── */
var mvThemes=[
 {id:'neon',name:'네온 시티',bg:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',accent:'#a855f7'},
 {id:'sunset',name:'서성비치',bg:'linear-gradient(135deg,#f12711,#f5af19)',accent:'#fff'},
 {id:'ocean',name:'오션 블루',bg:'linear-gradient(135deg,#2193b0,#6dd5ed)',accent:'#0f172a'},
 {id:'cherry',name:'체리블로섬',bg:'linear-gradient(135deg,#ffc3a0,#ffafbd)',accent:'#831843'},
 {id:'galaxy',name:'갤럭시',bg:'linear-gradient(135deg,#0f0a1e,#1a0533,#2d1b69)',accent:'#e879f9'},
 {id:'forest',name:'숨속 스테이지',bg:'linear-gradient(135deg,#134e5e,#71b280)',accent:'#ecfccb'},
 {id:'retro',name:'레트로 평크',bg:'linear-gradient(135deg,#ff6e7f,#bfe9ff)',accent:'#1e1b4b'},
 {id:'midnight',name:'미드나잇 스테이지',bg:'linear-gradient(135deg,#020024,#090979,#00d4ff)',accent:'#fde68a'}
];
var curTheme=ls12('mvTheme','galaxy');

function openMVThemes(){
 var html='<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';
 mvThemes.forEach(function(th){
  var sel=curTheme===th.id;
  html+='<div onclick="window.__v12SetTheme(\''+th.id+'\')" style="cursor:pointer;padding:16px;border-radius:12px;background:'+th.bg+';border:2px solid '+(sel?'#fbbf24':'transparent')+';text-align:center">';
  html+='<div style="color:'+th.accent+';font-weight:bold;font-size:1.1em">'+th.name+'</div>';
  if(sel)html+='<div style="color:#fbbf24;font-size:.8em;margin-top:4px">✅ 선택됨</div>';
  html+='</div>';
 });
 html+='</div>';
 v12M('v12-themes','🎨 MV 테마 (8종)',html);
}
window.__v12SetTheme=function(id){
 curTheme=id;ls12s('mvTheme',id);sfx12('themeSwitch');
 var th=mvThemes.find(function(x){return x.id===id;});
 if(th)document.body.style.background=th.bg;
 checkAch12('theme_collector',true);
 openMVThemes();
};

/* ── Feature 4: Pitch History Chart Canvas ── */
var pitchHistory=ls12('pitchHist',[]);

function hookEnd12(){
 var origEnd=window.endSong;
 if(typeof origEnd==='function'&&!origEnd.__v12wrapped){
  window.endSong=function(){
   var score=window.currentScore||0;var song=window.currentSong||{};
   pitchHistory.push({date:Date.now(),songId:song.id||0,title:song.title||'?',score:score});
   if(pitchHistory.length>200)pitchHistory=pitchHistory.slice(-200);
   ls12s('pitchHist',pitchHistory);
   return origEnd.apply(this,arguments);
  };
  window.endSong.__v12wrapped=true;
 }
}
setTimeout(hookEnd12,2000);setTimeout(hookEnd12,5000);

function openPitchHistory(){
 var wrap=document.createElement('div');
 if(pitchHistory.length===0){
  wrap.innerHTML='<p style="text-align:center;color:#a78bfa">아직 기록이 없습니다. 노래를 불러보세요!</p>';
  v12M('v12-pitchHist','📈 음정 추이 차트',wrap);return;
 }
 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=250;
 cvs.style.cssText='width:100%;background:#0f0a1e;border-radius:8px';
 wrap.appendChild(cvs);
 var ctx=cvs.getContext('2d');
 var last=pitchHistory.slice(-30);
 var maxS=100,minS=0;
 ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.beginPath();
 last.forEach(function(p,i){
  var x=20+i*(520/Math.max(last.length-1,1)),y=230-(p.score-minS)/(maxS-minS)*200;
  if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
 });
 ctx.stroke();
 last.forEach(function(p,i){
  var x=20+i*(520/Math.max(last.length-1,1)),y=230-(p.score-minS)/(maxS-minS)*200;
  ctx.fillStyle=p.score>=80?'#22c55e':p.score>=60?'#fbbf24':'#ef4444';
  ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();
 });
 ctx.fillStyle='#6b7280';ctx.font='11px sans-serif';
 ctx.fillText('100',0,18);ctx.fillText('50',0,125);ctx.fillText('0',0,235);
 var stats=document.createElement('div');stats.style.cssText='margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center';
 var avg=pitchHistory.reduce(function(a,b){return a+b.score;},0)/pitchHistory.length;
 var best=Math.max.apply(null,pitchHistory.map(function(p){return p.score;}));
 stats.innerHTML='<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">평균</div><div style="color:#c084fc;font-size:1.3em;font-weight:bold">'+avg.toFixed(1)+'</div></div>'+
  '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">최고</div><div style="color:#22c55e;font-size:1.3em;font-weight:bold">'+best+'</div></div>'+
  '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">총 횟수</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+pitchHistory.length+'</div></div>';
 wrap.appendChild(stats);
 v12M('v12-pitchHist','📈 음정 추이 차트',wrap);
}

/* ── Feature 5: Vocal Technique Encyclopedia (12 entries) ── */
var techniques=[
 {name:'벨티트',eng:'Belting',desc:'흉성의 힘을 높은음에 적용하여 강렬한 소리를 내는 기법'},
 {name:'헤드보이스',eng:'Head Voice',desc:'두성구 발성으로 부드럽고 맑은 고음을 내는 기법'},
 {name:'해스키',eng:'Husky',desc:'기식을 섞어 따뜻하고 감성적인 음색을 내는 기법'},
 {name:'비브라토',eng:'Vibrato',desc:'음정을 규칙적으로 흔들어 풍성함을 더하는 기법'},
 {name:'팔세토',eng:'Falsetto',desc:'성대를 가볍게 사용하여 높은 음역을 내는 기법'},
 {name:'믹스드 보이스',eng:'Mixed Voice',desc:'흉성과 두성의 장점을 결합한 발성법'},
 {name:'액팅',eng:'Acting',desc:'감정연기를 통해 노래의 메시지를 전달하는 기법'},
 {name:'리듬 콘트롤',eng:'Rhythm Control',desc:'박자와 싱코페이션을 조절하는 기법'},
 {name:'리프',eng:'Riff',desc:'빠른 음정 변화로 장식적 효과를 내는 기법'},
 {name:'런',eng:'Run',desc:'여러 음정을 빠르게 연결하여 부드럽게 흐르는 기법'},
 {name:'브레스 컨트롤',eng:'Breath Control',desc:'호흡을 효율적으로 사용하여 긴 프레이즈를 유지하는 기법'},
 {name:'파워 보컬',eng:'Power Vocal',desc:'복부 지지와 공명을 통해 강렬한 발성을 하는 기법'}
];

function openTechEncyclopedia(){
 var html='<div style="display:grid;gap:10px">';
 techniques.forEach(function(t,i){
  html+='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:14px;cursor:pointer" onclick="this.querySelector(\'.detail\').style.display=this.querySelector(\'.detail\').style.display===\'block\'?\'none\':\'block\'">';
  html+='<div style="display:flex;justify-content:space-between"><strong style="color:#c084fc">'+(i+1)+'. '+t.name+'</strong><span style="color:#6b7280;font-size:.85em">'+t.eng+'</span></div>';
  html+='<div class="detail" style="display:none;margin-top:8px;padding-top:8px;border-top:1px solid rgba(168,85,247,.3);color:#d4d4d8;font-size:.9em">'+t.desc+'</div></div>';
 });
 html+='</div>';
 v12M('v12-techEnc','📚 보컬 테크닉 도감 (12종)',html);
}

/* ── Feature 6: Difficulty Progression Map Canvas ── */
function openProgressionMap(){
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=300;
 cvs.style.cssText='width:100%;background:#0f0a1e;border-radius:8px';
 wrap.appendChild(cvs);
 var ctx=cvs.getContext('2d');
 var allSongs=(window.songs||[]).concat(v12Songs);
 var byDiff={1:[],2:[],3:[],4:[],5:[]};
 allSongs.forEach(function(s){if(s.difficulty>=1&&s.difficulty<=5)(byDiff[s.difficulty]=byDiff[s.difficulty]||[]).push(s);});
 var colors=['#22c55e','#84cc16','#fbbf24','#f97316','#ef4444'];
 var labels=['쉽움','보통','어려움','매우 어려움','초고난도'];

 for(var d=1;d<=5;d++){
  var y=10+(d-1)*58,cnt=(byDiff[d]||[]).length;
  ctx.fillStyle=colors[d-1];
  ctx.fillRect(80,y,cnt*18,40);
  ctx.fillStyle='#e0d0ff';ctx.font='bold 12px sans-serif';
  ctx.fillText('★'+d+' '+labels[d-1],4,y+25);
  ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='11px sans-serif';
  ctx.fillText(cnt+'곡',80+cnt*18+8,y+25);
 }

 var played=ls12('pitchHist',[]).map(function(p){return p.songId;});
 var unique=[...new Set(played)];
 var info=document.createElement('div');
 info.style.cssText='margin-top:12px;text-align:center;color:#d4d4d8';
 info.innerHTML='플레이한 곡: <strong style="color:#c084fc">'+unique.length+'</strong> / '+allSongs.length+'곡';
 wrap.appendChild(info);
 v12M('v12-progMap','🗺️ 난이도 진행 맵',wrap);
}

/* ── Feature 7: Duet Challenge System (6 challenges) ── */
var duetChallenges=[
 {id:1,title:'하모니 듀얳',songIds:[86,88],desc:'발라드 곡 2개를 연속으로 부르고 평균 70점 이상',target:70},
 {id:2,title:'댓스 듀얳',songIds:[87,91],desc:'댓스곡 2개를 부르고 평균 65점 이상',target:65},
 {id:3,title:'감성 듀얳',songIds:[90,92],desc:'발라드 2곡 평균 75점 이상',target:75},
 {id:4,title:'어쿠스틱 듀얳',songIds:[89,94],desc:'어쿠스틱 2곡 평균 70점 이상',target:70},
 {id:5,title:'팝 듀얳',songIds:[95,87],desc:'팝/댓스 2곡 평균 65점 이상',target:65},
 {id:6,title:'마스터 듀얳',songIds:[91,93],desc:'고난도 2곡 평균 60점 이상',target:60}
];
var duetProgress=ls12('duetProg',{});

function openDuetChallenges(){
 var html='<div style="display:grid;gap:12px">';
 duetChallenges.forEach(function(ch){
  var done=duetProgress[ch.id]||false;
  var bg=done?'linear-gradient(135deg,#065f46,#064e3b)':'linear-gradient(135deg,#312e81,#1e1b4b)';
  html+='<div style="background:'+bg+';border-radius:12px;padding:16px">';
  html+='<div style="display:flex;justify-content:space-between;align-items:center">';
  html+='<strong style="color:#c084fc">'+ch.title+'</strong>';
  html+='<span style="font-size:.8em">'+(done?'✅ 클리어':'🎯 목표: '+ch.target+'점')+'</span></div>';
  html+='<p style="margin:8px 0 0;font-size:.9em;color:#d4d4d8">'+ch.desc+'</p></div>';
 });
 html+='</div>';
 v12M('v12-duets','🎭 듀얳 챌린지 (6종)',html);
}

/* ── Feature 8: Share Report Card Canvas ── */
function openReportCard(){
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=400;cvs.height=400;
 cvs.style.cssText='width:100%;background:#0f0a1e;border-radius:8px';
 wrap.appendChild(cvs);
 var ctx=cvs.getContext('2d');
 var hist=pitchHistory;
 var avgScore=hist.length?hist.reduce(function(a,b){return a+b.score;},0)/hist.length:0;
 var songCount=hist.length;
 var lessonCount=Object.keys(lessonProgress).filter(function(k){return lessonProgress[k];}).length;
 var achCount=Object.keys(ls12('achievements12',{})).length;

 var scores=[
  Math.min(avgScore,100),
  Math.min(songCount*5,100),
  Math.min(lessonCount/12*100,100),
  Math.min(achCount/12*100,100),
  Math.min((duetProgress?Object.keys(duetProgress).length:0)/6*100,100)
 ];
 var labels=['음정','곡수','레슨','업적','듀얳'];

 var cx=200,cy=200,r=130;
 ctx.strokeStyle='rgba(168,85,247,.2)';ctx.lineWidth=1;
 for(var ring=1;ring<=5;ring++){
  ctx.beginPath();
  for(var a=0;a<5;a++){
   var angle=Math.PI*2*a/5-Math.PI/2;
   var x=cx+Math.cos(angle)*r*ring/5,y=cy+Math.sin(angle)*r*ring/5;
   if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();ctx.stroke();
 }
 ctx.beginPath();ctx.fillStyle='rgba(168,85,247,.3)';
 scores.forEach(function(s,i){
  var angle=Math.PI*2*i/5-Math.PI/2;
  var x=cx+Math.cos(angle)*r*s/100,y=cy+Math.sin(angle)*r*s/100;
  if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
 });
 ctx.closePath();ctx.fill();ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.stroke();

 ctx.fillStyle='#e0d0ff';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
 labels.forEach(function(lb,i){
  var angle=Math.PI*2*i/5-Math.PI/2;
  var x=cx+Math.cos(angle)*(r+20),y=cy+Math.sin(angle)*(r+20);
  ctx.fillText(lb+' '+Math.round(scores[i]),x,y+4);
 });

 var shareBtn=document.createElement('button');
 shareBtn.textContent='📱 리포트 카드 저장';
 shareBtn.style.cssText='margin-top:12px;width:100%;padding:12px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer';
 shareBtn.onclick=function(){
  try{cvs.toBlob(function(blob){
   if(navigator.share){navigator.share({files:[new File([blob],'starvoice-report.png',{type:'image/png'})]}).catch(function(){});}
   else{var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='starvoice-report.png';a.click();}
  });}catch(e){}
 };
 wrap.appendChild(shareBtn);
 v12M('v12-report','📊 리포트 카드',wrap);
}

/* ── Feature 9: Daily Vocal Tips (30) ── */
var dailyTips=[
 '노래 전 미지근한 물을 마시면 성대 보호에 도움이 됩니다.',
 '허밍으로 워밍업하면 성대에 무리가 적습니다.',
 '복식호흡은 모든 발성의 기초입니다.',
 '노래할 때 턴을 살짝 내리면 후두가 열립니다.',
 '고음에서 비명하지 마세요. 배 지지를 더 사용하세요.',
 '매일 10분씩 발성 연습이 1시간 한번보다 효과적입니다.',
 '감기에 걸리면 무리하지 마세요. 휘식이 최고입니다.',
 '리프와 런은 느린 템포부터 연습하세요.',
 '비브라토는 강제하지 마세요. 자연스럽게 나와야 합니다.',
 '노래 후 스트레칭으로 성대를 풀어주세요.',
 '마이크와 입의 거리를 조절하면 음색이 달라집니다.',
 '글루타이드(Glutide) 발성법을 연습해보세요.',
 '벨티트는 목이 아닌 몸 전체를 사용하는 기술입니다.',
 '본인의 음역을 정확히 파악하는 것이 중요합니다.',
 '벨스 카피보다 본인만의 음색을 찾으세요.',
 '긴 프레이즈는 호흡 컨트롤이 핵심입니다.',
 '박자 감각은 메트로놈으로 연습하세요.',
 '노래 전 목 스트레칭을 해주세요.',
 '감정 표현은 가사 이해에서 시작됩니다.',
 '자신의 노래를 녹음해서 들어보세요.',
 '수분 보충은 보컬리스트의 기본입니다.',
 '행복한 기분으로 부르면 발성이 자연스러워집니다.',
 '하품을 내리면 후두가 열립니다.',
 '슱킱은 가성으로 불러보면 편합니다.',
 '마이크 없이 불러보고 마이크로도 불러보세요.',
 '음정을 이미지화하면 음정 정확도가 올라갑니다.',
 '팔세토로 부드럽게 연결하는 연습을 해보세요.',
 '무대 경험은 실력 향상에 큰 도움이 됩니다.',
 '노래할 때 표정도 중요합니다. 거울을 보며 연습하세요.',
 '꾸준함이 실력입니다. 매일 조금씩 연습하세요.'
];

function openDailyTip(){
 var dayIndex=Math.floor(Date.now()/(1000*60*60*24))%dailyTips.length;
 var tip=dailyTips[dayIndex];
 var html='<div style="text-align:center;padding:20px">';
 html+='<div style="font-size:3em;margin-bottom:16px">💡</div>';
 html+='<div style="font-size:1.2em;color:#e0d0ff;line-height:1.6;margin-bottom:20px">'+tip+'</div>';
 html+='<div style="color:#6b7280;font-size:.85em">Day '+(dayIndex+1)+' / 30</div>';
 html+='</div>';
 sfx12('tipPop');
 v12M('v12-tip','💡 오늘의 보컬 팁',html);
}

/* ── Quiz +15 (questions 73-87) ── */
var v12Quiz=[
 {q:'비브라토의 이상적인 주파수는?',a:['약 5-7Hz','약 1-2Hz','약 15-20Hz','약 50Hz'],c:0},
 {q:'믹스드 보이스란?',a:['흉성+두성 결합','팔세토 기법','벨틴 기법','속삭임 기법'],c:0},
 {q:'벨티트의 핵심은?',a:['복부 지지','목 근육','얼굴 근육','어깨 근육'],c:0},
 {q:'성대 건강에 좋은 습관은?',a:['충분한 수분 섭취','카페인 많이 마시기','차가운 물 마시기','매운 음식 막기'],c:0},
 {q:'두성구의 특징은?',a:['부드럽고 맑은 고음','강렬하고 큰 소리','낮고 굵은 소리','기식이 섞인 소리'],c:0},
 {q:'연습시 복식호흡의 핵심은?',a:['횡격막 활용','가슴만 사용','목에 힘주기','빠르게 호흡'],c:0},
 {q:'리프(Riff)란?',a:['빠른 음정 장식','긴 음 유지','박자 변환','음량 조절'],c:0},
 {q:'벨치를 부드럽게 하려면?',a:['호흡 컨트롤','큰 소리로','빠른 템포로','벨틴으로'],c:0},
 {q:'파워 보컬의 기초는?',a:['복부 지지 + 공명','목에 힘주기','소리 지르기','마이크 가까이'],c:0},
 {q:'워밍업 시 가장 좋은 방법은?',a:['허밍으로 시작','바로 고음부터','빠른 노래부터','말하기부터'],c:0},
 {q:'팔세토란?',a:['성대 가볍게 사용하는 고음','벨팅의 일종','믹스드 보이스','비브라토 종류'],c:0},
 {q:'박자 감각을 키우려면?',a:['메트로놈 사용','큰 소리로 연습','느린 곡만','🎤만 사용'],c:0},
 {q:'감정 표현의 첫 단계는?',a:['가사 이해','큰 목소리','빠른 템포','높은 음'],c:0},
 {q:'리프와 런의 차이점은?',a:['리프는 장식, 런은 연결','리프는 느림, 런은 빠름','같은 것','리프는 리듬, 런은 음정'],c:0},
 {q:'성대 피로 회복에 가장 좋은 것은?',a:['충분한 휴식','더 많이 연습','차가운 물','약 복용'],c:0}
];
(function injectQuiz(){
 var tries=0;
 function attempt(){
  if(window.quizData&&Array.isArray(window.quizData)){
   v12Quiz.forEach(function(q,i){window.quizData.push({id:73+i,question:q.q,answers:q.a,correct:q.c});});
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements +12 (67-78) ── */
var v12Achievements=[
 {id:'song_86',name:'봄날 가수',desc:'봄날은 간다를 부르세요',icon:'🌸'},
 {id:'song_95',name:'도시의 별',desc:'도시의 불빛을 부르세요',icon:'🌃'},
 {id:'v12_5songs',name:'v12 탐험가',desc:'v12 신곡 5곡 이상 플레이',icon:'🚀'},
 {id:'v12_all10',name:'v12 컴플리트',desc:'v12 신곡 10곡 모두 플레이',icon:'🏆'},
 {id:'lesson_master',name:'보컬 마스터',desc:'12개 보컬 레슨 모두 완료',icon:'🎓'},
 {id:'vibrato_master',name:'비브라토 달인',desc:'비브라토 감지기에서 비브라토 성공',icon:'🌀'},
 {id:'theme_collector',name:'테마 컬렉터',desc:'MV 테마 변경해보기',icon:'🎨'},
 {id:'duet_first',name:'듀얳 첫발',desc:'듀얳 챌린지 1개 완료',icon:'🎭'},
 {id:'duet_master',name:'듀얳 마스터',desc:'듀얳 챌린지 모두 완료',icon:'💑'},
 {id:'tip_reader',name:'팁 애독자',desc:'오늘의 보컬 팁 확인',icon:'💡'},
 {id:'report_viewer',name:'분석가',desc:'리포트 카드 확인',icon:'📊'},
 {id:'tech_reader',name:'이론가',desc:'보컬 테크닉 도감 확인',icon:'📚'}
];
var achStore12=ls12('achievements12',{});

function checkAch12(id,condition){
 if(!condition||achStore12[id])return;
 var ach=v12Achievements.find(function(a){return a.id===id;});if(!ach)return;
 achStore12[id]=Date.now();ls12s('achievements12',achStore12);
 sfx12('achieve');
 var toast=document.createElement('div');
 toast.style.cssText='position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:100000;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;padding:12px 24px;border-radius:12px;font-size:1em;box-shadow:0 4px 20px rgba(168,85,247,.5);animation:v12slideIn .5s ease';
 toast.innerHTML=ach.icon+' <strong>'+ach.name+'</strong> 업적 획득!';
 document.body.appendChild(toast);
 setTimeout(function(){toast.style.opacity='0';toast.style.transition='opacity .5s';setTimeout(function(){toast.remove();},500);},3000);
}

/* ── Keyboard Shortcuts (+8) ── */
document.addEventListener('keydown',function(e){
 if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
 var k=e.key.toLowerCase();
 if(e.altKey){
  if(k==='l'){e.preventDefault();openVocalLessons();}
  if(k==='v'){e.preventDefault();openVibratoDetector();}
  if(k==='t'){e.preventDefault();openMVThemes();}
  if(k==='h'){e.preventDefault();openPitchHistory();}
  if(k==='e'){e.preventDefault();openTechEncyclopedia();}
  if(k==='m'){e.preventDefault();openProgressionMap();}
  if(k==='d'){e.preventDefault();openDuetChallenges();}
  if(k==='r'){e.preventDefault();openReportCard();}
 }
});

/* ── CSS Animation ── */
var style12=document.createElement('style');
style12.textContent='@keyframes v12slideIn{from{transform:translateX(-50%) translateY(-30px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}';
document.head.appendChild(style12);

/* ── Menu Integration ── */
function injectMenu12(){
 var tries=0;
 function attempt(){
  var menu=document.querySelector('.menu-grid,.feature-grid,[class*=menu],[class*=grid]');
  if(!menu){if(tries++<50)setTimeout(attempt,300);return;}
  var items=[
   {icon:'🎵',label:'보컬레슨',fn:openVocalLessons},
   {icon:'🌀',label:'비브라토',fn:openVibratoDetector},
   {icon:'🎨',label:'MV테마',fn:openMVThemes},
   {icon:'📈',label:'음정추이',fn:openPitchHistory},
   {icon:'📚',label:'테크닉도감',fn:openTechEncyclopedia},
   {icon:'🗺️',label:'진행맵',fn:openProgressionMap},
   {icon:'🎭',label:'듀얳',fn:openDuetChallenges},
   {icon:'📊',label:'리포트',fn:openReportCard},
   {icon:'💡',label:'오늘의팁',fn:openDailyTip}
  ];
  items.forEach(function(it){
   var btn=document.createElement('button');
   btn.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:12px;background:linear-gradient(135deg,rgba(124,58,237,.2),rgba(168,85,247,.15));border:1px solid rgba(168,85,247,.3);border-radius:12px;color:#e0d0ff;cursor:pointer;font-size:.85em;min-height:70px;transition:all .2s';
   btn.innerHTML='<span style="font-size:1.5em">'+it.icon+'</span><span>'+it.label+'</span>';
   btn.onmouseenter=function(){btn.style.background='linear-gradient(135deg,rgba(124,58,237,.4),rgba(168,85,247,.3))';};
   btn.onmouseleave=function(){btn.style.background='linear-gradient(135deg,rgba(124,58,237,.2),rgba(168,85,247,.15))';};
   btn.onclick=function(){it.fn();};
   menu.appendChild(btn);
  });
  checkAch12('tip_reader',false);
  checkAch12('report_viewer',false);
  checkAch12('tech_reader',false);
 }
 attempt();
}
injectMenu12();

/* ── Song play tracking for achievements ── */
(function trackV12Songs(){
 var origPlay=window.playSong;
 if(typeof origPlay==='function'&&!origPlay.__v12tracked){
  window.playSong=function(id){
   var res=origPlay.apply(this,arguments);
   var sid=typeof id==='object'?id.id:id;
   if(sid===86)checkAch12('song_86',true);
   if(sid===95)checkAch12('song_95',true);
   var played=ls12('v12played',[]);
   if(played.indexOf(sid)===-1&&sid>=86&&sid<=95){played.push(sid);ls12s('v12played',played);}
   checkAch12('v12_5songs',played.length>=5);
   checkAch12('v12_all10',played.length>=10);
   return res;
  };
  window.playSong.__v12tracked=true;
 }else{setTimeout(trackV12Songs,500);}
})();

/* ── Daily tip auto-show on first visit of day ── */
(function autoTip(){
 var today=new Date().toDateString();
 var lastTip=ls12('lastTipDate','');
 if(lastTip!==today){
  ls12s('lastTipDate',today);
  setTimeout(function(){openDailyTip();checkAch12('tip_reader',true);},3000);
 }
})();

console.log('[StarVoice v12] 🎤 Loaded: +10songs(95), +9features, +15quiz(87), +12achievements(78), +12SFX, +8keys');
})();
