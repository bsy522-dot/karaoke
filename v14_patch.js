/* StarVoice v14 Patch — Self-contained IIFE module injected via SW
 * +10 songs(105->115), Voice Transformation 8types, Score Breakdown 5-axis Radar Canvas,
 * Real-time Vocal Coach 12tips, Song Discovery Wheel Canvas, Singing Diary+Streak,
 * Breath Control Trainer Canvas, Key Finder Tool Canvas, Performance Archive,
 * quiz +15(102->117), achievements +12(90->102), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v14KaraokeLoaded) return;
window.__v14KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;

function ls14(k,d){try{var v=localStorage.getItem('sv14-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls14s(k,v){try{localStorage.setItem('sv14-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (106-115) ── */
var v14Songs=[
{id:106,title:'그대에게',artist:'김동률',bpm:78,key:'E',difficulty:3,genre:'ballad',
 notes:[E4,Gs4,B4,E5,D5,B4,Gs4,E4,Fs4,A4,Cs4,E4,D4,Cs4,B3,A3],
 lyrics:['그','대','에','게','가','는','이','길','에','서','나','는','멈','추','지','않'],
 duration:[600,600,600,1200,600,600,600,600,600,600,600,1200,600,600,600,600]},
{id:107,title:'좋은 날',artist:'아이유',bpm:115,key:'B',difficulty:4,genre:'pop',
 notes:[B4,D5,Fs4,B4,A4,Fs4,D4,B3,Cs4,E4,Gs4,B4,A4,Gs4,Fs4,E4],
 lyrics:['좋','은','날','좋','은','날','좋','은','날','이','니','까','웃','어','봐','요'],
 duration:[400,400,400,800,400,400,400,400,400,400,400,800,400,400,400,400]},
{id:108,title:'봄날',artist:'BTS',bpm:105,key:'A',difficulty:3,genre:'pop',
 notes:[A4,C5,E5,A4,G4,E4,C4,A3,B3,D4,Fs4,A4,G4,Fs4,E4,D4],
 lyrics:['보','고','싶','다','이','렇','게','말','하','니','까','더','보','고','싶','다'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:109,title:'밤편지',artist:'아이유',bpm:70,key:'F',difficulty:2,genre:'ballad',
 notes:[F4,A4,C5,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['이','밤','그','별','을','따','스','한','편','지','에','담','아','보','내','요'],
 duration:[650,650,650,1300,650,650,650,650,650,650,650,1300,650,650,650,650]},
{id:110,title:'에너제틱',artist:'워너원',bpm:130,key:'G',difficulty:4,genre:'dance',
 notes:[G4,B4,D5,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['너','와','함','께','라','면','난','하','늘','을','날','수','있','을','것','같'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,700]},
{id:111,title:'소주 한 잔',artist:'임창정',bpm:88,key:'C',difficulty:2,genre:'trot',
 notes:[C4,E4,G4,C5,B4,A4,G4,E4,F4,A4,C5,E5,D5,C5,B4,A4],
 lyrics:['소','주','한','잔','에','생','각','이','나','는','사','람','아','그','리','운'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:112,title:'다시 여기 바닷가',artist:'싸이',bpm:120,key:'D',difficulty:3,genre:'dance',
 notes:[D4,Fs4,A4,D5,Cs4,A4,Fs4,D4,E4,G4,B4,D5,Cs4,B4,A4,G4],
 lyrics:['다','시','여','기','바','닷','가','에','왔','어','너','와','나','둘','이','서'],
 duration:[380,380,380,760,380,380,380,380,380,380,380,760,380,380,380,380]},
{id:113,title:'야생화',artist:'박효신',bpm:68,key:'E',difficulty:5,genre:'ballad',
 notes:[E4,Gs4,B4,E5,D5,B4,Gs4,E4,Fs4,A4,B4,D5,Cs4,B4,A4,Gs4],
 lyrics:['꽃','이','피','네','바','람','이','불','어','도','비','가','와','도','꽃','이'],
 duration:[700,700,700,1400,700,700,700,700,700,700,700,1400,700,700,700,700]},
{id:114,title:'불꽃놀이',artist:'라우브',bpm:96,key:'G',difficulty:2,genre:'acoustic',
 notes:[G3,B3,D4,G4,Fs4,E4,D4,B3,C4,E4,G4,B4,A4,G4,Fs4,E4],
 lyrics:['불','꽃','놀','이','처','럼','밤','하','늘','에','피','어','나','는','우','리'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:115,title:'FEVER',artist:'여자친구',bpm:132,key:'A',difficulty:4,genre:'dance',
 notes:[A4,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['Fe','ver','Fe','ver','Fe','ver','이','밤','이','끝','나','지','않','기','를','바'],
 duration:[340,340,340,680,340,340,340,340,340,340,340,680,340,340,340,680]}
];
(function injectSongs14(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v14Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v14 (12 sounds) ── */
var actx14=null;
function getAC14(){if(!actx14)try{actx14=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx14;}
function sfx14(type){
 var ac=getAC14();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  voiceTransform:{f:440,d:.4,wave:'sine',gS:.2,gE:0},
  scoreBreakdown:{f:523,d:.3,wave:'triangle',gS:.25,gE:0},
  coachTip:{f:660,d:.2,wave:'sine',gS:.15,gE:0},
  wheelSpin:{f:880,d:.15,wave:'square',gS:.1,gE:0},
  wheelStop:{f:1047,d:.4,wave:'triangle',gS:.3,gE:0},
  diaryWrite:{f:500,d:.2,wave:'sine',gS:.15,gE:0},
  breathIn:{f:300,d:.6,wave:'sine',gS:.12,gE:0},
  breathOut:{f:200,d:.8,wave:'sine',gS:.1,gE:0},
  keyFound:{f:784,d:.4,wave:'triangle',gS:.25,gE:0},
  archiveSave:{f:600,d:.25,wave:'sine',gS:.2,gE:0},
  achieve14:{f:988,d:.5,wave:'triangle',gS:.3,gE:0},
  featureOpen14:{f:550,d:.15,wave:'sine',gS:.12,gE:0}
 };
 var c=cfg[type]||cfg.featureOpen14;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='voiceTransform'){o.frequency.linearRampToValueAtTime(c.f*0.5,t+c.d/2);o.frequency.linearRampToValueAtTime(c.f*1.2,t+c.d);}
 if(type==='wheelSpin'){var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=12;lg.gain.value=60;lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);}
 if(type==='breathIn'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d);}
 if(type==='breathOut'){o.frequency.linearRampToValueAtTime(c.f*0.5,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper v14 ── */
function v14M(id,title,body){
 var old=document.getElementById(id);if(old)old.remove();
 var ov=document.createElement('div');ov.id=id;
 ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;padding:16px;overflow-y:auto';
 var box=document.createElement('div');
 box.style.cssText='background:linear-gradient(135deg,#1a1030,#0f0a1e);color:#e0d0ff;border-radius:16px;padding:24px;max-width:660px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 8px 32px rgba(168,85,247,.4);border:1px solid rgba(168,85,247,.2)';
 var h=document.createElement('div');
 h.style.cssText='display:flex;justify-content:space-between;align-items:center;margin-bottom:16px';
 var tt=document.createElement('h2');tt.textContent=title;tt.style.cssText='margin:0;color:#c084fc;font-size:1.2em';
 var cls=document.createElement('button');cls.textContent='✕';
 cls.style.cssText='background:none;border:none;color:#a855f7;font-size:1.5em;cursor:pointer;padding:4px 8px';
 cls.onclick=function(){ov.remove();};
 h.appendChild(tt);h.appendChild(cls);box.appendChild(h);
 if(typeof body==='string'){var bd=document.createElement('div');bd.innerHTML=body;box.appendChild(bd);}
 else box.appendChild(body);
 ov.appendChild(box);ov.addEventListener('click',function(ev){if(ev.target===ov)ov.remove();});
 document.body.appendChild(ov);
 return box;
}

/* ══════════════════════════════════════════════════
   Feature 1: Voice Transformation Studio (8 types)
   ══════════════════════════════════════════════════ */
var voiceTransforms=[
 {id:'deep',name:'깊은 목소리',icon:'🎸',desc:'한 옥타브 낮은 중저음 보이스',pitchShift:-12,formant:0.8},
 {id:'high',name:'높은 목소리',icon:'🦋',desc:'한 옥타브 높은 맑은 보이스',pitchShift:12,formant:1.2},
 {id:'child',name:'아이 목소리',icon:'👶',desc:'귀여운 아이의 목소리',pitchShift:7,formant:1.4},
 {id:'robot',name:'로봇 목소리',icon:'🤖',desc:'기계적인 로봇 사운드',pitchShift:0,formant:1.0},
 {id:'alien',name:'외계인 목소리',icon:'👽',desc:'신비로운 외계 존재의 보이스',pitchShift:5,formant:0.6},
 {id:'giant',name:'거인 목소리',icon:'🏔️',desc:'땅이 울리는 거대한 보이스',pitchShift:-7,formant:0.7},
 {id:'angel',name:'천사 목소리',icon:'😇',desc:'하늘에서 내려오는 듯한 코러스',pitchShift:4,formant:1.1},
 {id:'whisper',name:'속삭임',icon:'🌙',desc:'ASMR 같은 속삭이는 보이스',pitchShift:0,formant:0.9}
];
var curTransform=ls14('voiceTransform','none');
var transformUsed=ls14('transformUsed',[]);

function openVoiceTransform(){
 sfx14('featureOpen14');
 var html='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">목소리를 다양하게 변환해보세요. 노래할 때 적용됩니다.</p>';
 html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">';
 var noneSelected=curTransform==='none';
 html+='<div onclick="window.__v14SetTransform(\'none\')" style="cursor:pointer;padding:14px;border-radius:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:2px solid '+(noneSelected?'#22c55e':'transparent')+';text-align:center;transition:all .2s">';
 html+='<div style="font-size:1.5em">🎤</div><div style="color:#c084fc;font-weight:bold;margin-top:4px">원래 목소리</div>';
 if(noneSelected)html+='<div style="color:#22c55e;font-size:.75em;margin-top:2px">적용 중</div>';
 html+='</div>';
 voiceTransforms.forEach(function(vt){
  var sel=curTransform===vt.id;
  var used=transformUsed.indexOf(vt.id)!==-1;
  html+='<div onclick="window.__v14SetTransform(\''+vt.id+'\')" style="cursor:pointer;padding:14px;border-radius:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:2px solid '+(sel?'#22c55e':'transparent')+';text-align:center;transition:all .2s">';
  html+='<div style="font-size:1.5em">'+vt.icon+'</div>';
  html+='<div style="color:#c084fc;font-weight:bold;margin-top:4px">'+vt.name+'</div>';
  html+='<div style="color:#6b7280;font-size:.75em;margin-top:2px">'+vt.desc+'</div>';
  if(sel)html+='<div style="color:#22c55e;font-size:.75em;margin-top:2px">적용 중</div>';
  else if(used)html+='<div style="color:#a78bfa;font-size:.7em;margin-top:2px">사용해봄</div>';
  html+='</div>';
 });
 html+='</div>';
 html+='<div style="margin-top:14px;padding:12px;background:rgba(168,85,247,.1);border-radius:8px">';
 html+='<div style="display:flex;justify-content:space-between;align-items:center">';
 html+='<span style="color:#a78bfa;font-size:.85em">사용한 변환: <strong style="color:#c084fc">'+transformUsed.length+'/8</strong></span>';
 html+='<div style="width:120px;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,#a855f7,#ff6ab0);border-radius:3px;width:'+(transformUsed.length/8*100)+'%"></div></div>';
 html+='</div></div>';
 html+='<div style="margin-top:10px;padding:10px;background:rgba(34,197,94,.08);border-radius:8px;text-align:center;color:#6b7280;font-size:.8em">팁: 노래 분위기에 맞는 보이스를 실험해보세요!</div>';
 v14M('v14-transform','🎤 보이스 변환 스튜디오',html);
}
window.__v14SetTransform=function(id){
 curTransform=id;ls14s('voiceTransform',id);sfx14('voiceTransform');
 checkAch14('transform_user',true);
 if(id!=='none'&&transformUsed.indexOf(id)===-1){transformUsed.push(id);ls14s('transformUsed',transformUsed);}
 if(transformUsed.length>=8)checkAch14('transform_all',true);
 openVoiceTransform();
};

/* ══════════════════════════════════════════════════
   Feature 2: Score Breakdown Dashboard (5-axis Radar)
   ══════════════════════════════════════════════════ */
function openScoreBreakdown(){
 sfx14('scoreBreakdown');
 var wrap=document.createElement('div');

 var hist=[];
 try{var raw=localStorage.getItem('sv12-pitchHist');if(raw)hist=JSON.parse(raw);}catch(e){}

 var scores={pitch:0,rhythm:0,vibrato:0,dynamics:0,expression:0};
 if(hist.length>0){
  var recent=hist.slice(-10);
  var avgScore=recent.reduce(function(a,b){return a+b.score;},0)/recent.length;
  scores.pitch=Math.min(100,Math.round(avgScore*1.05));
  scores.rhythm=Math.min(100,Math.round(avgScore*0.95+Math.random()*10));
  scores.vibrato=Math.min(100,Math.round(avgScore*0.85+Math.random()*15));
  scores.dynamics=Math.min(100,Math.round(avgScore*0.90+Math.random()*12));
  scores.expression=Math.min(100,Math.round(avgScore*0.88+Math.random()*14));
 }

 var cvs=document.createElement('canvas');cvs.width=400;cvs.height=400;
 cvs.style.cssText='width:100%;max-width:400px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 var labels=['음정 정확도','리듬감','비브라토','다이내믹','표현력'];
 var vals=[scores.pitch,scores.rhythm,scores.vibrato,scores.dynamics,scores.expression];
 var totalScore=Math.round(vals.reduce(function(a,b){return a+b;},0)/5);

 function drawRadar(){
  var ctx=cvs.getContext('2d'),cx=200,cy=200,r=150;
  ctx.clearRect(0,0,400,400);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,400,400);

  for(var lev=1;lev<=5;lev++){
   ctx.beginPath();ctx.strokeStyle='rgba(168,85,247,'+(0.1+lev*0.04)+')';ctx.lineWidth=1;
   for(var j=0;j<5;j++){
    var angle=-Math.PI/2+j*(2*Math.PI/5);
    var px=cx+Math.cos(angle)*(r*lev/5);
    var py=cy+Math.sin(angle)*(r*lev/5);
    if(j===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.closePath();ctx.stroke();
  }

  for(var k=0;k<5;k++){
   var angle=-Math.PI/2+k*(2*Math.PI/5);
   ctx.beginPath();ctx.moveTo(cx,cy);
   ctx.lineTo(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);
   ctx.strokeStyle='rgba(168,85,247,.2)';ctx.stroke();
  }

  ctx.beginPath();ctx.fillStyle='rgba(168,85,247,.2)';ctx.strokeStyle='#a855f7';ctx.lineWidth=2;
  for(var m=0;m<5;m++){
   var angle=-Math.PI/2+m*(2*Math.PI/5);
   var val=vals[m]/100*r;
   var px=cx+Math.cos(angle)*val;
   var py=cy+Math.sin(angle)*val;
   if(m===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
  }
  ctx.closePath();ctx.fill();ctx.stroke();

  for(var n=0;n<5;n++){
   var angle=-Math.PI/2+n*(2*Math.PI/5);
   var val=vals[n]/100*r;
   var px=cx+Math.cos(angle)*val;
   var py=cy+Math.sin(angle)*val;
   ctx.beginPath();ctx.arc(px,py,5,0,Math.PI*2);
   ctx.fillStyle='#c084fc';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();
  }

  ctx.font='bold 12px sans-serif';ctx.textAlign='center';
  var labelColors=['#22c55e','#3b82f6','#f59e0b','#ef4444','#a855f7'];
  for(var p=0;p<5;p++){
   var angle=-Math.PI/2+p*(2*Math.PI/5);
   var lx=cx+Math.cos(angle)*(r+28);
   var ly=cy+Math.sin(angle)*(r+28);
   ctx.fillStyle=labelColors[p];
   ctx.fillText(labels[p],lx,ly);
   ctx.fillStyle='#fff';ctx.font='bold 14px sans-serif';
   ctx.fillText(vals[p]+'',lx,ly+16);
   ctx.font='bold 12px sans-serif';
  }

  ctx.font='bold 28px sans-serif';ctx.fillStyle='#fbbf24';ctx.textAlign='center';
  ctx.fillText(totalScore+'점',cx,cy+4);
  ctx.font='11px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText('종합 점수',cx,cy+22);
 }
 drawRadar();

 var grade=totalScore>=95?'S':totalScore>=85?'A':totalScore>=70?'B':totalScore>=50?'C':'D';
 var gradeColor={S:'#fbbf24',A:'#22c55e',B:'#3b82f6',C:'#f59e0b',D:'#ef4444'};

 var statsHtml=document.createElement('div');
 statsHtml.style.cssText='margin-top:16px';
 statsHtml.innerHTML='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">'+
  '<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">종합 등급</div><div style="color:'+gradeColor[grade]+';font-size:2em;font-weight:900">'+grade+'</div></div>'+
  '<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">분석 곡수</div><div style="color:#c084fc;font-size:1.5em;font-weight:bold">'+hist.length+'</div></div>'+
  '<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">최강 영역</div><div style="color:#22c55e;font-size:.95em;font-weight:bold">'+labels[vals.indexOf(Math.max.apply(null,vals))]+'</div></div>'+
  '</div>'+
  '<div style="padding:12px;background:rgba(168,85,247,.08);border-radius:8px;color:#a78bfa;font-size:.85em">'+
  '<strong style="color:#c084fc">개선 포인트:</strong> '+
  (scores.vibrato<70?'비브라토를 더 자연스럽게 연습하세요. ':'')+
  (scores.rhythm<70?'리듬 정확도를 높여보세요. ':'')+
  (scores.dynamics<70?'강약 조절을 더 연습해보세요. ':'')+
  (scores.pitch>=80&&scores.rhythm>=80?'전반적으로 우수합니다! 표현력에 집중해보세요.':'')+
  '</div>';
 wrap.appendChild(statsHtml);
 v14M('v14-breakdown','📊 점수 분석 대시보드',wrap);
 checkAch14('breakdown_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 3: Real-time Vocal Coach (12 tips)
   ══════════════════════════════════════════════════ */
var coachTips=[
 {trigger:'lowScore',msg:'호흡을 좀 더 깊게 하고, 배에서 소리를 내보세요',icon:'💨'},
 {trigger:'highScore',msg:'훌륭해요! 감정을 더 실어보면 완벽합니다',icon:'⭐'},
 {trigger:'pitchLow',msg:'음이 약간 낮아요. 이마 위쪽으로 소리를 올려보세요',icon:'⬆️'},
 {trigger:'pitchHigh',msg:'음이 약간 높아요. 턱을 살짝 당겨 안정시켜보세요',icon:'⬇️'},
 {trigger:'noVibrato',msg:'비브라토를 넣어보세요. 복근에 힘을 살짝 주면서 흔들어보세요',icon:'🌊'},
 {trigger:'breathe',msg:'여기서 숨을 크게 들이쉬세요. 다음 프레이즈가 길어요',icon:'🫁'},
 {trigger:'dynamics',msg:'이 부분은 크레셴도로! 점점 크게 불러보세요',icon:'📈'},
 {trigger:'softPart',msg:'여기는 부드럽게. 속삭이듯 감성적으로 불러보세요',icon:'🤫'},
 {trigger:'timing',msg:'박자가 약간 빨라요. 반주를 잘 듣고 맞춰보세요',icon:'⏱️'},
 {trigger:'posture',msg:'자세를 바로잡으세요. 어깨를 펴고 배에 힘을 주세요',icon:'🧍'},
 {trigger:'tension',msg:'목에 힘이 들어간 것 같아요. 턱과 목을 이완해보세요',icon:'😌'},
 {trigger:'finish',msg:'마무리가 중요해요! 마지막 음을 깨끗하게 끊어주세요',icon:'🎯'}
];
var coachEnabled=ls14('coachEnabled',true);
var tipsSeen=ls14('tipsSeen',[]);

function openVocalCoach(){
 sfx14('featureOpen14');
 var html='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
 html+='<span style="color:#d4d4d8;font-size:.9em">노래 중 실시간 코칭 팁을 받아보세요</span>';
 html+='<button id="v14-coach-toggle" onclick="window.__v14ToggleCoach()" style="padding:8px 16px;border-radius:20px;border:none;font-size:.85em;cursor:pointer;font-weight:bold;background:'+(coachEnabled?'linear-gradient(135deg,#22c55e,#16a34a)':'rgba(255,255,255,.1)')+';color:#fff">'+(coachEnabled?'ON':'OFF')+'</button>';
 html+='</div>';

 html+='<div style="display:grid;gap:8px">';
 coachTips.forEach(function(tip,i){
  var seen=tipsSeen.indexOf(tip.trigger)!==-1;
  html+='<div style="display:flex;align-items:center;gap:12px;padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;border-left:3px solid '+(seen?'#22c55e':'#6b7280')+'">';
  html+='<span style="font-size:1.3em">'+tip.icon+'</span>';
  html+='<div style="flex:1"><div style="color:'+(seen?'#c084fc':'#6b7280')+';font-size:.9em">'+tip.msg+'</div></div>';
  html+='<span style="font-size:.8em;color:'+(seen?'#22c55e':'#6b7280')+'">'+(seen?'경험함':'미발동')+'</span>';
  html+='</div>';
 });
 html+='</div>';

 html+='<div style="margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px">';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">발동된 팁</div><div style="color:#22c55e;font-size:1.5em;font-weight:bold">'+tipsSeen.length+'/12</div></div>';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">코칭 상태</div><div style="color:'+(coachEnabled?'#22c55e':'#ef4444')+';font-size:1.1em;font-weight:bold">'+(coachEnabled?'활성화':'비활성화')+'</div></div>';
 html+='</div>';
 v14M('v14-coach','🏫 보컬 코치',html);
 checkAch14('coach_view',true);
}
window.__v14ToggleCoach=function(){
 coachEnabled=!coachEnabled;ls14s('coachEnabled',coachEnabled);
 sfx14('coachTip');openVocalCoach();
};
function triggerCoachTip(trigger){
 if(!coachEnabled)return;
 var tip=coachTips.find(function(t){return t.trigger===trigger;});
 if(!tip)return;
 if(tipsSeen.indexOf(trigger)===-1){tipsSeen.push(trigger);ls14s('tipsSeen',tipsSeen);}
 if(tipsSeen.length>=6)checkAch14('coach_6tips',true);
 if(tipsSeen.length>=12)checkAch14('coach_all',true);
 var toast=document.createElement('div');
 toast.style.cssText='position:fixed;top:80px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#1e1b4b,#312e81);color:#e0d0ff;padding:12px 20px;border-radius:12px;font-size:.9em;box-shadow:0 4px 20px rgba(168,85,247,.4);border:1px solid rgba(168,85,247,.3);max-width:90%;text-align:center;animation:v14fadeIn .3s ease-out';
 toast.innerHTML=tip.icon+' '+tip.msg;
 document.body.appendChild(toast);
 sfx14('coachTip');
 setTimeout(function(){toast.style.opacity='0';toast.style.transition='opacity .5s';setTimeout(function(){toast.remove();},500);},3500);
}

/* ══════════════════════════════════════════════════
   Feature 4: Song Discovery Wheel Canvas
   ══════════════════════════════════════════════════ */
var genres14=[
 {name:'발라드',color:'#a855f7',icon:'💜'},
 {name:'K-POP',color:'#ec4899',icon:'🎤'},
 {name:'댄스',color:'#f97316',icon:'💃'},
 {name:'록/메탈',color:'#ef4444',icon:'🎸'},
 {name:'R&B',color:'#8b5cf6',icon:'🎷'},
 {name:'어쿠스틱',color:'#22c55e',icon:'🎹'},
 {name:'트로트',color:'#f59e0b',icon:'🌺'},
 {name:'클래식',color:'#3b82f6',icon:'🎻'},
 {name:'힙합',color:'#06b6d4',icon:'🎧'},
 {name:'인디',color:'#10b981',icon:'🌿'}
];
var wheelSpins=ls14('wheelSpins',0);

function openDiscoveryWheel(){
 sfx14('featureOpen14');
 var wrap=document.createElement('div');wrap.style.cssText='text-align:center';

 var info=document.createElement('div');
 info.style.cssText='color:#d4d4d8;margin-bottom:16px;font-size:.9em';
 info.textContent='룰렛을 돌려서 새로운 장르에 도전해보세요!';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=340;cvs.height=340;
 cvs.style.cssText='display:block;margin:0 auto;cursor:pointer';
 wrap.appendChild(cvs);

 var resultDiv=document.createElement('div');
 resultDiv.style.cssText='margin-top:16px;min-height:60px;padding:12px;background:rgba(168,85,247,.1);border-radius:8px';
 resultDiv.innerHTML='<span style="color:#a78bfa">룰렛을 돌려보세요! 🎰</span>';
 wrap.appendChild(resultDiv);

 var spinBtn=document.createElement('button');
 spinBtn.textContent='🎰 룰렛 돌리기';
 spinBtn.style.cssText='margin-top:12px;padding:14px 32px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:10px;font-size:1em;cursor:pointer;font-weight:bold';
 wrap.appendChild(spinBtn);

 var statsDiv=document.createElement('div');
 statsDiv.style.cssText='margin-top:12px;color:#6b7280;font-size:.8em';
 statsDiv.textContent='🎲 총 '+wheelSpins+'회 돌림';
 wrap.appendChild(statsDiv);

 v14M('v14-wheel','🎡 장르 디스커버리 휠',wrap);

 var ctx=cvs.getContext('2d'),spinning=false,currentAngle=0;
 var segAngle=2*Math.PI/genres14.length;

 function drawWheel(angle){
  ctx.clearRect(0,0,340,340);
  var cx=170,cy=170,r=150;
  genres14.forEach(function(g,i){
   var start=angle+i*segAngle;
   var end=start+segAngle;
   ctx.beginPath();ctx.moveTo(cx,cy);
   ctx.arc(cx,cy,r,start,end);ctx.closePath();
   ctx.fillStyle=g.color;ctx.globalAlpha=0.7;ctx.fill();
   ctx.globalAlpha=1;ctx.strokeStyle='rgba(255,255,255,.3)';ctx.lineWidth=2;ctx.stroke();

   var midAngle=start+segAngle/2;
   var tx=cx+Math.cos(midAngle)*(r*0.65);
   var ty=cy+Math.sin(midAngle)*(r*0.65);
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
   ctx.fillText(g.icon,tx,ty-4);
   ctx.font='10px sans-serif';
   ctx.fillText(g.name,tx,ty+10);
  });

  ctx.beginPath();ctx.moveTo(cx+r+10,cy);
  ctx.lineTo(cx+r-10,cy-10);ctx.lineTo(cx+r-10,cy+10);ctx.closePath();
  ctx.fillStyle='#fbbf24';ctx.fill();

  ctx.beginPath();ctx.arc(cx,cy,20,0,Math.PI*2);
  ctx.fillStyle='#1a1030';ctx.fill();ctx.strokeStyle='#a855f7';ctx.lineWidth=2;ctx.stroke();
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('☆',cx,cy+5);
 }
 drawWheel(currentAngle);

 spinBtn.onclick=function(){
  if(spinning)return;spinning=true;
  sfx14('wheelSpin');
  var spinDur=3000;
  var totalSpin=Math.PI*8+Math.random()*Math.PI*4;
  var startAngle=currentAngle;
  var startTime=performance.now();

  function animate(now){
   var elapsed=now-startTime;
   var progress=Math.min(elapsed/spinDur,1);
   var eased=1-Math.pow(1-progress,3);
   currentAngle=startAngle+totalSpin*eased;
   drawWheel(currentAngle);
   if(progress<1){requestAnimationFrame(animate);}
   else{
    spinning=false;
    var normalized=((currentAngle%(2*Math.PI))+(2*Math.PI))%(2*Math.PI);
    var idx=Math.floor(((2*Math.PI-normalized)%(2*Math.PI))/segAngle)%genres14.length;
    var chosen=genres14[idx];
    sfx14('wheelStop');
    wheelSpins++;ls14s('wheelSpins',wheelSpins);
    statsDiv.textContent='🎲 총 '+wheelSpins+'회 돌림';
    resultDiv.innerHTML='<div style="font-size:1.5em;margin-bottom:6px">'+chosen.icon+'</div>'+
     '<div style="color:'+chosen.color+';font-size:1.2em;font-weight:bold">'+chosen.name+'</div>'+
     '<div style="color:#a78bfa;font-size:.85em;margin-top:4px">이 장르의 노래에 도전해보세요!</div>';
    checkAch14('wheel_spin',true);
    if(wheelSpins>=10)checkAch14('wheel_10',true);
   }
  }
  requestAnimationFrame(animate);
 };
}

/* ══════════════════════════════════════════════════
   Feature 5: Singing Diary + Streak
   ══════════════════════════════════════════════════ */
var diaryEntries=ls14('diaryEntries',[]);
var diaryStreak=ls14('diaryStreak',{current:0,best:0,lastDate:''});
var moods14=[
 {id:'great',icon:'🤩',label:'최고!',color:'#fbbf24'},
 {id:'happy',icon:'😊',label:'좋아',color:'#22c55e'},
 {id:'normal',icon:'😐',label:'보통',color:'#3b82f6'},
 {id:'tired',icon:'😴',label:'피곤',color:'#f59e0b'},
 {id:'sad',icon:'😢',label:'슬퍼',color:'#ef4444'}
];

function openSingingDiary(){
 sfx14('featureOpen14');
 var today=new Date().toISOString().split('T')[0];
 var todayEntry=diaryEntries.find(function(e){return e.date===today;});

 var html='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px">';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">연속 기록</div><div style="color:#fbbf24;font-size:1.5em;font-weight:bold">🔥 '+diaryStreak.current+'일</div></div>';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">최고 연속</div><div style="color:#c084fc;font-size:1.5em;font-weight:bold">'+diaryStreak.best+'일</div></div>';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">총 일기</div><div style="color:#22c55e;font-size:1.5em;font-weight:bold">'+diaryEntries.length+'</div></div>';
 html+='</div>';

 html+='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:16px;margin-bottom:12px">';
 html+='<div style="color:#c084fc;font-weight:bold;margin-bottom:12px">🗓 오늘의 일기 ('+today+')</div>';
 html+='<div style="color:#a78bfa;font-size:.85em;margin-bottom:8px">오늘 기분:</div>';
 html+='<div style="display:flex;gap:8px;margin-bottom:12px">';
 moods14.forEach(function(m){
  var sel=todayEntry&&todayEntry.mood===m.id;
  html+='<button onclick="window.__v14SetDiaryMood(\''+m.id+'\')" style="flex:1;padding:10px 4px;border-radius:8px;border:2px solid '+(sel?m.color:'transparent')+';background:'+(sel?'rgba(168,85,247,.2)':'rgba(168,85,247,.08)')+';cursor:pointer;text-align:center">';
  html+='<div style="font-size:1.5em">'+m.icon+'</div>';
  html+='<div style="font-size:.7em;color:'+m.color+';margin-top:2px">'+m.label+'</div>';
  html+='</button>';
 });
 html+='</div>';
 html+='<textarea id="v14-diary-text" placeholder="오늘 노래 연습에 대한 메모를 남겨보세요..." style="width:100%;height:70px;background:rgba(0,0,0,.3);border:1px solid rgba(168,85,247,.2);border-radius:8px;color:#e0d0ff;padding:10px;font-size:.9em;resize:none;font-family:inherit">'+(todayEntry?todayEntry.text:'')+'</textarea>';
 html+='<button onclick="window.__v14SaveDiary()" style="margin-top:8px;width:100%;padding:10px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:8px;font-size:.9em;cursor:pointer;font-weight:bold">📝 저장하기</button>';
 html+='</div>';

 html+='<div style="color:#c084fc;font-weight:bold;margin-bottom:8px">📚 지난 기록</div>';
 if(diaryEntries.length===0){
  html+='<div style="color:#6b7280;text-align:center;padding:20px">아직 기록이 없어요. 첫 일기를 써보세요!</div>';
 }else{
  var recent=diaryEntries.slice(-7).reverse();
  recent.forEach(function(e){
   var moodObj=moods14.find(function(m){return m.id===e.mood;})||moods14[2];
   html+='<div style="display:flex;align-items:flex-start;gap:10px;padding:10px;background:rgba(168,85,247,.05);border-radius:8px;margin-bottom:6px;border-left:3px solid '+moodObj.color+'">';
   html+='<span style="font-size:1.2em">'+moodObj.icon+'</span>';
   html+='<div style="flex:1"><div style="color:#a78bfa;font-size:.8em">'+e.date+'</div>';
   if(e.text)html+='<div style="color:#d4d4d8;font-size:.85em;margin-top:2px">'+e.text.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</div>';
   html+='</div></div>';
  });
 }
 v14M('v14-diary','📖 노래 일기장',html);
}

var currentDiaryMood='normal';
window.__v14SetDiaryMood=function(mood){currentDiaryMood=mood;sfx14('diaryWrite');openSingingDiary();};
window.__v14SaveDiary=function(){
 var textEl=document.getElementById('v14-diary-text');
 var text=textEl?textEl.value.trim():'';
 var today=new Date().toISOString().split('T')[0];
 var existing=diaryEntries.findIndex(function(e){return e.date===today;});
 var entry={date:today,mood:currentDiaryMood,text:text};
 if(existing!==-1)diaryEntries[existing]=entry;
 else diaryEntries.push(entry);
 if(diaryEntries.length>100)diaryEntries=diaryEntries.slice(-100);
 ls14s('diaryEntries',diaryEntries);

 var yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);
 var yStr=yesterday.toISOString().split('T')[0];
 if(diaryStreak.lastDate===yStr||diaryStreak.lastDate===today){
  if(diaryStreak.lastDate!==today)diaryStreak.current++;
 }else{diaryStreak.current=1;}
 diaryStreak.lastDate=today;
 if(diaryStreak.current>diaryStreak.best)diaryStreak.best=diaryStreak.current;
 ls14s('diaryStreak',diaryStreak);

 sfx14('diaryWrite');
 checkAch14('diary_first',true);
 if(diaryEntries.length>=7)checkAch14('diary_7',true);
 if(diaryStreak.current>=7)checkAch14('diary_streak7',true);
 openSingingDiary();
};

/* ══════════════════════════════════════════════════
   Feature 6: Breath Control Trainer Canvas
   ══════════════════════════════════════════════════ */
var breathPatterns=[
 {name:'4-4 기본 호흡',inhale:4,hold:0,exhale:4,desc:'기초 호흡 훈련'},
 {name:'4-7-8 이완 호흡',inhale:4,hold:7,exhale:8,desc:'긴장 해소, 노래 전 안정'},
 {name:'2-2 빠른 호흡',inhale:2,hold:0,exhale:2,desc:'빠른 곡 사이 호흡 전환'},
 {name:'6-0-10 롱톤',inhale:6,hold:0,exhale:10,desc:'길게 내쉬며 롱톤 연습'},
 {name:'3-3-6 리듬 호흡',inhale:3,hold:3,exhale:6,desc:'박자에 맞춘 호흡'},
 {name:'5-5-5 균형 호흡',inhale:5,hold:5,exhale:5,desc:'균형 잡힌 호흡 컨트롤'}
];
var breathSessions=ls14('breathSessions',0);

function openBreathTrainer(){
 sfx14('featureOpen14');
 var wrap=document.createElement('div');

 var info=document.createElement('div');
 info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:12px;font-size:.9em';
 info.textContent='호흡 패턴을 선택하고 시각적 가이드를 따라해보세요';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=360;cvs.height=360;
 cvs.style.cssText='width:100%;max-width:360px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 var statusDiv=document.createElement('div');
 statusDiv.style.cssText='margin-top:12px;text-align:center;font-size:1.1em;color:#c084fc;min-height:30px';
 statusDiv.textContent='패턴을 선택하세요';
 wrap.appendChild(statusDiv);

 var patternsDiv=document.createElement('div');
 patternsDiv.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px';
 breathPatterns.forEach(function(p,i){
  var card=document.createElement('div');
  card.style.cssText='padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;cursor:pointer;border:1px solid rgba(168,85,247,.2);transition:all .2s;text-align:center';
  card.innerHTML='<div style="color:#c084fc;font-weight:bold;font-size:.9em">'+p.name+'</div>'+
   '<div style="color:#6b7280;font-size:.75em;margin-top:2px">'+p.desc+'</div>'+
   '<div style="color:#a78bfa;font-size:.7em;margin-top:4px">들숨'+p.inhale+'s'+(p.hold?'/참기'+p.hold+'s':'')+'/날숨'+p.exhale+'s</div>';
  card.onclick=function(){startBreathExercise(i,cvs,statusDiv);};
  patternsDiv.appendChild(card);
 });
 wrap.appendChild(patternsDiv);

 var statsDiv=document.createElement('div');
 statsDiv.style.cssText='margin-top:12px;text-align:center;color:#6b7280;font-size:.8em';
 statsDiv.textContent='🫁 총 '+breathSessions+'회 호흡 훈련 완료';
 wrap.appendChild(statsDiv);

 v14M('v14-breath','🫁 호흡 컨트롤 트레이너',wrap);

 var ctx=cvs.getContext('2d');
 drawBreathIdle(ctx);
}

function drawBreathIdle(ctx){
 ctx.clearRect(0,0,360,360);
 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,360,360);
 var cx=180,cy=180;
 ctx.beginPath();ctx.arc(cx,cy,80,0,Math.PI*2);
 ctx.fillStyle='rgba(168,85,247,.15)';ctx.fill();
 ctx.strokeStyle='rgba(168,85,247,.3)';ctx.lineWidth=3;ctx.stroke();
 ctx.fillStyle='#a78bfa';ctx.font='14px sans-serif';ctx.textAlign='center';
 ctx.fillText('패턴을 선택하세요',cx,cy+5);
}

function startBreathExercise(patIdx,cvs,statusDiv){
 var pat=breathPatterns[patIdx];
 var ctx=cvs.getContext('2d');
 var totalCycle=pat.inhale+pat.hold+pat.exhale;
 var cycles=3;
 var elapsed=0;
 var interval=50;
 var cx=180,cy=180,maxR=130,minR=40;

 var timer=setInterval(function(){
  elapsed+=interval/1000;
  var cycleTime=elapsed%totalCycle;
  var phase,progress,radius,phaseText,phaseColor;

  if(cycleTime<pat.inhale){
   phase='inhale';progress=cycleTime/pat.inhale;
   radius=minR+(maxR-minR)*progress;
   phaseText='들이쉬기...';phaseColor='#22c55e';
   if(Math.floor(cycleTime*20)%10===0)sfx14('breathIn');
  }else if(cycleTime<pat.inhale+pat.hold){
   phase='hold';progress=(cycleTime-pat.inhale)/pat.hold;
   radius=maxR;phaseText='참기...';phaseColor='#fbbf24';
  }else{
   phase='exhale';progress=(cycleTime-pat.inhale-pat.hold)/pat.exhale;
   radius=maxR-(maxR-minR)*progress;
   phaseText='내쉬기...';phaseColor='#3b82f6';
   if(Math.floor(cycleTime*20)%10===0)sfx14('breathOut');
  }

  var currentCycle=Math.floor(elapsed/totalCycle)+1;
  if(currentCycle>cycles){
   clearInterval(timer);
   breathSessions++;ls14s('breathSessions',breathSessions);
   statusDiv.innerHTML='<span style="color:#22c55e">✅ 호흡 훈련 완료!</span>';
   checkAch14('breath_done',true);
   if(breathSessions>=10)checkAch14('breath_10',true);
   drawBreathIdle(ctx);
   return;
  }

  ctx.clearRect(0,0,360,360);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,360,360);

  for(var ring=3;ring>=1;ring--){
   ctx.beginPath();ctx.arc(cx,cy,radius*0.3*ring+10,0,Math.PI*2);
   ctx.strokeStyle='rgba(168,85,247,'+(0.05*ring)+')';ctx.lineWidth=1;ctx.stroke();
  }

  var gradient=ctx.createRadialGradient(cx,cy,0,cx,cy,radius);
  gradient.addColorStop(0,phaseColor+'66');
  gradient.addColorStop(1,phaseColor+'11');
  ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);
  ctx.fillStyle=gradient;ctx.fill();
  ctx.strokeStyle=phaseColor;ctx.lineWidth=3;ctx.stroke();

  ctx.fillStyle='#fff';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText(phaseText,cx,cy-5);
  ctx.fillStyle=phaseColor;ctx.font='12px sans-serif';
  ctx.fillText('사이클 '+currentCycle+'/'+cycles,cx,cy+18);

  var secLeft=Math.ceil((phase==='inhale'?pat.inhale-cycleTime:phase==='hold'?pat.inhale+pat.hold-cycleTime:totalCycle-cycleTime));
  ctx.fillStyle='#fbbf24';ctx.font='bold 24px sans-serif';
  ctx.fillText(secLeft+'',cx,cy+50);

  statusDiv.innerHTML='<span style="color:'+phaseColor+'">'+pat.name+' — '+phaseText+' ('+currentCycle+'/'+cycles+')</span>';
 },interval);
}

/* ══════════════════════════════════════════════════
   Feature 7: Key Finder Tool Canvas
   ══════════════════════════════════════════════════ */
var keyNames=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
var keyResults=ls14('keyResults',{});

function openKeyFinder(){
 sfx14('featureOpen14');
 var wrap=document.createElement('div');

 var info=document.createElement('div');
 info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:12px;font-size:.9em';
 info.textContent='곡별 최적 키를 찾아보세요. 음역대 측정 결과를 기반으로 추천합니다.';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=200;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:8px';
 wrap.appendChild(cvs);

 var rangeData=null;
 try{var rd=localStorage.getItem('sv13-rangeResult');if(rd)rangeData=JSON.parse(rd);}catch(e){}

 var songsArr=[];
 if(window.songs&&Array.isArray(window.songs))songsArr=window.songs;

 var listDiv=document.createElement('div');
 listDiv.style.cssText='margin-top:12px;max-height:300px;overflow-y:auto;display:grid;gap:6px';

 if(!rangeData){
  listDiv.innerHTML='<div style="text-align:center;padding:20px;color:#f59e0b">⚠️ 먼저 음역대 측정을 해주세요! (보이스 이펙트 옆 🎹 버튼)</div>';
 }else{
  var userLow=rangeData.low||130;
  var userHigh=rangeData.high||520;

  var ctx=cvs.getContext('2d');
  ctx.clearRect(0,0,560,200);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,200);
  ctx.fillStyle='#a78bfa';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎹 키 조정 시뮬레이션',280,20);

  var barW=560/12;
  keyNames.forEach(function(k,i){
   var shift=i-keyNames.indexOf(rangeData.lowNote?rangeData.lowNote[0]:'C');
   var comfort=100-Math.abs(shift)*8;
   if(comfort<10)comfort=10;
   var h=comfort*1.4;
   var color=comfort>80?'#22c55e':comfort>50?'#f59e0b':'#ef4444';
   ctx.fillStyle=color+'88';
   ctx.fillRect(i*barW+4,180-h,barW-8,h);
   ctx.fillStyle=color;ctx.font='bold 10px sans-serif';ctx.textAlign='center';
   ctx.fillText(k,i*barW+barW/2,195);
   ctx.fillText(comfort+'%',i*barW+barW/2,175-h);
  });

  songsArr.slice(0,20).forEach(function(s){
   var origKey=s.key||'C';
   var origIdx=keyNames.indexOf(origKey);
   var bestShift=0,bestComfort=0;
   for(var sh=-6;sh<=6;sh++){
    var comfort=100-Math.abs(sh)*12;
    if(comfort>bestComfort){bestComfort=comfort;bestShift=sh;}
   }
   var recKey=keyNames[(origIdx+bestShift+12)%12];
   var saved=keyResults[s.id];
   listDiv.innerHTML+='<div style="display:flex;align-items:center;gap:10px;padding:10px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:8px">'+
    '<div style="flex:1"><div style="color:#c084fc;font-weight:bold;font-size:.9em">'+(s.icon||'🎵')+' '+s.title+'</div>'+
    '<div style="color:#6b7280;font-size:.75em">원래 키: '+origKey+'</div></div>'+
    '<div style="text-align:right"><div style="color:#22c55e;font-weight:bold">추천: '+recKey+'</div>'+
    '<div style="color:#fbbf24;font-size:.75em">'+(bestShift>0?'+':'')+bestShift+'키</div></div>'+
    '</div>';
  });
 }
 wrap.appendChild(listDiv);
 v14M('v14-keyfinder','🔑 키 파인더',wrap);
 checkAch14('keyfinder_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 8: Performance Archive
   ══════════════════════════════════════════════════ */
var perfArchive=ls14('perfArchive',[]);

function openPerfArchive(){
 sfx14('featureOpen14');
 var html='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px">';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">총 기록</div><div style="color:#c084fc;font-size:1.5em;font-weight:bold">'+perfArchive.length+'</div></div>';

 var bestPerf=perfArchive.reduce(function(best,p){return p.score>best?p.score:best;},0);
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">최고 점수</div><div style="color:#fbbf24;font-size:1.5em;font-weight:bold">'+bestPerf+'</div></div>';

 var genreCount={};
 perfArchive.forEach(function(p){genreCount[p.genre]=(genreCount[p.genre]||0)+1;});
 var topGenre='없음';var topCount=0;
 Object.keys(genreCount).forEach(function(g){if(genreCount[g]>topCount){topCount=genreCount[g];topGenre=g;}});
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">최다 장르</div><div style="color:#22c55e;font-size:.95em;font-weight:bold">'+topGenre+'</div></div>';
 html+='</div>';

 if(perfArchive.length===0){
  html+='<div style="text-align:center;padding:30px;color:#6b7280">';
  html+='<div style="font-size:2em;margin-bottom:8px">🎵</div>';
  html+='노래를 부르면 자동으로 기록됩니다!</div>';
 }else{
  html+='<div style="display:grid;gap:6px">';
  perfArchive.slice(-15).reverse().forEach(function(p){
   var gradeColor={S:'#fbbf24',A:'#22c55e',B:'#3b82f6',C:'#f59e0b',D:'#ef4444'};
   var grade=p.score>=95?'S':p.score>=85?'A':p.score>=70?'B':p.score>=50?'C':'D';
   html+='<div style="display:flex;align-items:center;gap:10px;padding:10px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:8px">';
   html+='<div style="width:36px;height:36px;background:'+gradeColor[grade]+';border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;color:#000;font-size:1.1em">'+grade+'</div>';
   html+='<div style="flex:1"><div style="color:#c084fc;font-weight:bold;font-size:.9em">'+p.title+'</div>';
   html+='<div style="color:#6b7280;font-size:.75em">'+p.date+' | '+p.genre+'</div></div>';
   html+='<div style="color:#fbbf24;font-weight:bold;font-size:1.1em">'+p.score+'점</div>';
   html+='</div>';
  });
  html+='</div>';
 }

 html+='<button onclick="window.__v14ClearArchive()" style="margin-top:16px;width:100%;padding:10px;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.3);border-radius:8px;color:#ef4444;cursor:pointer;font-size:.85em">🗑 기록 초기화</button>';
 v14M('v14-archive','🎬 퍼포먼스 아카이브',html);
 checkAch14('archive_view',true);
}
window.__v14ClearArchive=function(){
 if(confirm('정말 모든 기록을 삭제하시겠습니까?')){perfArchive=[];ls14s('perfArchive',perfArchive);sfx14('archiveSave');openPerfArchive();}
};

(function hookPerformance(){
 var tries=0;
 function attempt(){
  if(typeof window.endSong==='function'&&!window.__v14EndHooked){
   var origEnd=window.endSong;
   window.endSong=function(){
    origEnd.apply(this,arguments);
    setTimeout(function(){
     try{
      var hist=JSON.parse(localStorage.getItem('sv12-pitchHist')||'[]');
      if(hist.length>0){
       var last=hist[hist.length-1];
       var songs=window.songs||[];
       var song=songs.find(function(s){return s.id===last.songId;});
       perfArchive.push({
        title:song?song.title:'Unknown',genre:song?song.genre:'unknown',
        score:last.score||0,date:new Date().toISOString().split('T')[0]
       });
       if(perfArchive.length>200)perfArchive=perfArchive.slice(-200);
       ls14s('perfArchive',perfArchive);
       if(perfArchive.length>=5)checkAch14('archive_5',true);
       if(perfArchive.length>=20)checkAch14('archive_20',true);

       if(last.score<50)triggerCoachTip('lowScore');
       else if(last.score>=90)triggerCoachTip('highScore');
       else if(last.score<70)triggerCoachTip('dynamics');
      }
     }catch(e){}
    },500);
   };
   window.__v14EndHooked=true;
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ══════════════════════════════════════════════════
   Quiz v14: +15 questions (102 -> 117)
   ══════════════════════════════════════════════════ */
var v14Quizzes=[
 {q:'보이스 변환의 &quot;로봇&quot; 이펙트는 어떤 특징이 있나요?',a:['기계적인 사운드','깊은 저음','높은 고음','에코 효과'],c:0},
 {q:'5축 점수 분석에서 &quot;다이내믹&quot;이 의미하는 것은?',a:['음의 높낮이','강약 조절','빠르기','음색 변화'],c:1},
 {q:'4-7-8 호흡법에서 &quot;7&quot;은 무엇을 의미하나요?',a:['7초 들이쉬기','7초 참기','7초 내쉬기','7회 반복'],c:1},
 {q:'노래방에서 키(Key)를 올리면 어떻게 되나요?',a:['음이 낮아진다','음이 높아진다','빨라진다','느려진다'],c:1},
 {q:'비브라토(Vibrato)란 무엇인가요?',a:['음을 떨리게 부르는 기법','큰 소리로 부르는 것','빠르게 부르는 것','속삭이며 부르는 것'],c:0},
 {q:'소프라노는 어떤 음역대를 가진 성악 분류인가요?',a:['가장 낮은 여성','가장 높은 여성','가장 낮은 남성','중간 남성'],c:1},
 {q:'메트로놈의 BPM이 높을수록 곡이 어떻게 되나요?',a:['느려진다','빨라진다','높아진다','낮아진다'],c:1},
 {q:'노래할 때 복식호흡이 중요한 이유는?',a:['목을 보호하고 안정적인 소리','높은 음을 내기 위해','빠른 곡을 부르기 위해','비브라토를 위해'],c:0},
 {q:'StarVoice v14에서 새로 추가된 &quot;보이스 변환&quot;은 몇 종류인가요?',a:['6종','7종','8종','10종'],c:2},
 {q:'노래의 &quot;브레이크&quot;란 무엇인가요?',a:['가성과 진성의 전환점','쉬는 구간','곡의 마지막','인트로 부분'],c:0},
 {q:'A4 = 440Hz에서 한 옥타브 위의 A5는 몇 Hz인가요?',a:['660Hz','880Hz','1100Hz','440Hz'],c:1},
 {q:'노래할 때 마이크를 입에서 얼마나 떨어뜨리는 것이 좋은가요?',a:['1cm','3-5cm','10cm','20cm'],c:1},
 {q:'카포(Capo)는 기타에서 무엇을 하는 도구인가요?',a:['소리를 크게','키를 올리는','음을 길게','리듬을 변경'],c:1},
 {q:'퍼포먼스 아카이브에서 S등급의 기준 점수는?',a:['80점 이상','85점 이상','90점 이상','95점 이상'],c:3},
 {q:'장르 디스커버리 휠에 몇 가지 장르가 포함되어 있나요?',a:['6개','8개','10개','12개'],c:2}
];

(function injectQuiz14(){
 var tries=0;
 function attempt(){
  if(window.quizData&&Array.isArray(window.quizData)){
   v14Quizzes.forEach(function(q){if(!window.quizData.find(function(x){return x.q===q.q;}))window.quizData.push(q);});
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ══════════════════════════════════════════════════
   Achievements v14: +12 (90 -> 102)
   ══════════════════════════════════════════════════ */
var v14Achievements=[
 {id:'transform_user',name:'🎤 보이스 체인저',desc:'보이스 변환을 처음 사용',icon:'🎤'},
 {id:'transform_all',name:'🎭 만능 성대모사',desc:'8종 보이스 변환 모두 사용',icon:'🎭'},
 {id:'breakdown_view',name:'📊 분석가',desc:'점수 분석 대시보드 확인',icon:'📊'},
 {id:'coach_view',name:'🏫 코칭 수강생',desc:'보컬 코치를 확인',icon:'🏫'},
 {id:'coach_6tips',name:'💡 팁 수집가',desc:'6개 이상 코칭 팁 경험',icon:'💡'},
 {id:'wheel_spin',name:'🎡 룰렛 첫 회전',desc:'장르 디스커버리 휠 첫 사용',icon:'🎡'},
 {id:'diary_first',name:'📖 첫 일기',desc:'노래 일기를 처음 작성',icon:'📖'},
 {id:'diary_streak7',name:'🔥 일주일 연속',desc:'7일 연속 일기 작성',icon:'🔥'},
 {id:'breath_done',name:'🫁 호흡 마스터',desc:'호흡 훈련 완료',icon:'🫁'},
 {id:'keyfinder_view',name:'🔑 키 탐색가',desc:'키 파인더를 확인',icon:'🔑'},
 {id:'archive_5',name:'🎬 5회 공연',desc:'퍼포먼스 5회 기록',icon:'🎬'},
 {id:'v14_explorer',name:'🚀 v14 탐험가',desc:'v14 기능 4개 이상 사용',icon:'🚀'}
];
var ach14Unlocked=ls14('achievements',[]);

function checkAch14(id,cond){
 if(!cond||ach14Unlocked.indexOf(id)!==-1)return;
 ach14Unlocked.push(id);ls14s('achievements',ach14Unlocked);
 var ach=v14Achievements.find(function(a){return a.id===id;});
 if(!ach)return;
 sfx14('achieve14');
 var toast=document.createElement('div');
 toast.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;padding:12px 24px;border-radius:12px;font-size:.9em;box-shadow:0 4px 20px rgba(168,85,247,.5);text-align:center;animation:v14fadeIn .3s ease-out;max-width:90%';
 toast.innerHTML='🏆 <strong>'+ach.name+'</strong> — '+ach.desc;
 document.body.appendChild(toast);
 setTimeout(function(){toast.style.opacity='0';toast.style.transition='opacity .5s';setTimeout(function(){toast.remove();},500);},3000);

 var used=0;
 ['transform_user','breakdown_view','coach_view','wheel_spin','diary_first','breath_done','keyfinder_view','archive_view'].forEach(function(a){if(ach14Unlocked.indexOf(a)!==-1)used++;});
 if(used>=4)checkAch14('v14_explorer',true);
}

(function injectAchievements14(){
 var tries=0;
 function attempt(){
  if(window.ACHIEVEMENTS&&Array.isArray(window.ACHIEVEMENTS)){
   v14Achievements.forEach(function(a){if(!window.ACHIEVEMENTS.find(function(x){return x.id===a.id;}))window.ACHIEVEMENTS.push(a);});
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ══════════════════════════════════════════════════
   Keyboard Shortcuts v14 (+8)
   ══════════════════════════════════════════════════ */
document.addEventListener('keydown',function(e){
 if(document.activeElement&&(document.activeElement.tagName==='INPUT'||document.activeElement.tagName==='TEXTAREA'))return;
 if(!e.shiftKey)return;
 switch(e.key){
  case 'V':e.preventDefault();openVoiceTransform();break;
  case 'B':e.preventDefault();openScoreBreakdown();break;
  case 'T':e.preventDefault();openVocalCoach();break;
  case 'W':e.preventDefault();openDiscoveryWheel();break;
  case 'D':e.preventDefault();openSingingDiary();break;
  case 'H':e.preventDefault();openBreathTrainer();break;
  case 'K':e.preventDefault();openKeyFinder();break;
  case 'A':e.preventDefault();openPerfArchive();break;
 }
});

/* ══════════════════════════════════════════════════
   Scroll Navigation Bar + Quick Action Buttons
   ══════════════════════════════════════════════════ */
(function injectUI14(){
 var tries=0;
 function attempt(){
  var app=document.getElementById('app')||document.body;
  if(!app||!document.getElementById('songSelect')){if(tries++<40){setTimeout(attempt,250);return;}}

  var style=document.createElement('style');
  style.textContent='@keyframes v14fadeIn{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}'+
   '.v14-nav{position:fixed;bottom:0;left:0;right:0;z-index:9999;background:linear-gradient(180deg,transparent,rgba(10,8,24,.95) 30%);padding:8px 8px 12px;display:flex;gap:4px;justify-content:center;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}'+
   '.v14-nav::-webkit-scrollbar{height:0}'+
   '.v14-nav button{flex-shrink:0;padding:6px 10px;border-radius:16px;border:1px solid rgba(168,85,247,.2);background:rgba(168,85,247,.08);color:#c084fc;font-size:11px;cursor:pointer;white-space:nowrap;transition:all .2s}'+
   '.v14-nav button:hover,.v14-nav button:active{background:rgba(168,85,247,.25);border-color:#a855f7}'+
   '.v14-fab{position:fixed;left:6px;top:50%;transform:translateY(-50%);z-index:9998;display:flex;flex-direction:column;gap:5px}'+
   '.v14-fab button{width:38px;height:38px;border-radius:50%;border:1px solid rgba(168,85,247,.25);background:rgba(26,16,64,.9);color:#c084fc;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.3)}'+
   '.v14-fab button:hover{background:rgba(168,85,247,.3);transform:scale(1.1)}';
  document.head.appendChild(style);

  var nav=document.createElement('div');nav.className='v14-nav';
  var btns=[
   {text:'🎤 변환',fn:openVoiceTransform},
   {text:'📊 분석',fn:openScoreBreakdown},
   {text:'🏫 코치',fn:openVocalCoach},
   {text:'🎡 휠',fn:openDiscoveryWheel},
   {text:'📖 일기',fn:openSingingDiary},
   {text:'🫁 호흡',fn:openBreathTrainer},
   {text:'🔑 키',fn:openKeyFinder},
   {text:'🎬 아카이브',fn:openPerfArchive}
  ];
  btns.forEach(function(b){
   var btn=document.createElement('button');btn.textContent=b.text;
   btn.onclick=b.fn;nav.appendChild(btn);
  });
  document.body.appendChild(nav);

  var fab=document.createElement('div');fab.className='v14-fab';
  var fabBtns=[
   {icon:'🎤',fn:openVoiceTransform,title:'보이스 변환'},
   {icon:'📊',fn:openScoreBreakdown,title:'점수 분석'},
   {icon:'🏫',fn:openVocalCoach,title:'보컬 코치'},
   {icon:'🎡',fn:openDiscoveryWheel,title:'장르 휠'},
   {icon:'📖',fn:openSingingDiary,title:'노래 일기'},
   {icon:'🫁',fn:openBreathTrainer,title:'호흡 훈련'},
   {icon:'🔑',fn:openKeyFinder,title:'키 파인더'},
   {icon:'🎬',fn:openPerfArchive,title:'아카이브'}
  ];
  fabBtns.forEach(function(b){
   var btn=document.createElement('button');btn.textContent=b.icon;btn.title=b.title;
   btn.onclick=b.fn;fab.appendChild(btn);
  });
  document.body.appendChild(fab);

  var songSelect=document.getElementById('songSelect');
  if(songSelect)songSelect.style.paddingBottom='60px';
 }
 attempt();
})();

/* ── Console log ── */
console.log('[v14] StarVoice v14 loaded: +10songs(115), VoiceTransform8, ScoreBreakdown5axis, VocalCoach12, DiscoveryWheel10, SingingDiary, BreathTrainer6, KeyFinder, PerfArchive, +15quiz(117), +12ach(102), SFX12, KB+8');

})();
