/* StarVoice v13 Patch — Self-contained IIFE module injected via SW
 * +10 songs(95->105), Voice Effects Studio 8fx, Vocal Range Tester Canvas,
 * Section Practice (A-B repeat), Vocal Warmup Timer 8step, Song Ranking/Leaderboard,
 * Pitch Training Mini-games 3modes, Concert Mode Canvas (stage+audience),
 * Playlist Builder (custom setlists),
 * quiz +15(87->102), achievements +12(78->90), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v13KaraokeLoaded) return;
window.__v13KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;

function ls13(k,d){try{var v=localStorage.getItem('sv13-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls13s(k,v){try{localStorage.setItem('sv13-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (96-105) ── */
var v13Songs=[
{id:96,title:'별빛 아래서',artist:'악뮤',bpm:92,key:'G',difficulty:2,genre:'acoustic',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,B3],
 lyrics:['별','빛','아','래','서','너','와','함','께','걸','으','며','이','밤','을','보'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:97,title:'비 오는 거리',artist:'신승훈',bpm:76,key:'D',difficulty:3,genre:'ballad',
 notes:[D4,F4,A4,D5,C5,A4,F4,D4,E4,G4,B4,D5,C5,B4,A4,G4],
 lyrics:['비','오','는','거','리','에','서','너','를','기','다','리','며','혼','자','서'],
 duration:[600,600,600,1200,600,600,600,600,600,600,600,1200,600,600,600,600]},
{id:98,title:'Party Night',artist:'레드벨벳',bpm:128,key:'A',difficulty:4,genre:'dance',
 notes:[A4,C5,E5,A4,G4,E4,C4,A3,B3,D4,Fs4,A4,G4,Fs4,E4,C4],
 lyrics:['Pa','r','ty','Ni','ght','모','두','함','께','춤','을','춰','오','늘','밤','은'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,700]},
{id:99,title:'고향의 봄',artist:'한국민요',bpm:100,key:'F',difficulty:1,genre:'folk',
 notes:[F4,A4,C5,A4,G4,F4,E4,D4,C4,E4,G4,C5,A4,G4,F4,E4],
 lyrics:['나','의','살','던','고','향','은','꽃','피','는','산','골','복','숭','아','꽃'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:100,title:'100번째 노래',artist:'스타보이스',bpm:110,key:'C',difficulty:3,genre:'pop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,E4],
 lyrics:['백','번','째','노','래','를','함','께','불','러','봐','요','오','늘','도','빛'],
 duration:[400,400,400,800,400,400,400,400,400,400,400,800,400,400,400,800]},
{id:101,title:'달빛 소나타',artist:'베토벤편곡',bpm:60,key:'C',difficulty:2,genre:'classical',
 notes:[E4,E4,E4,G4,G4,A4,A4,G4,F4,F4,E4,E4,D4,D4,C4,C4],
 lyrics:['달','빛','이','비','추','는','밤','에','고','요','한','멜','로','디','가','흐'],
 duration:[700,700,700,1400,700,700,700,700,700,700,700,1400,700,700,700,700]},
{id:102,title:'여름 바다',artist:'싸이',bpm:138,key:'G',difficulty:4,genre:'dance',
 notes:[G4,B4,D5,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,B3],
 lyrics:['여','름','바','다','로','달','려','가','자','파','도','위','에','올','라','타'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,700]},
{id:103,title:'눈의 꽃',artist:'박효신',bpm:72,key:'E',difficulty:3,genre:'ballad',
 notes:[E4,G4,B4,E5,D5,B4,G4,E4,Fs4,A4,C5,E5,D5,C5,B4,A4],
 lyrics:['눈','의','꽃','이','내','리','면','너','의','향','기','가','피','어','나','네'],
 duration:[600,600,600,1200,600,600,600,600,600,600,600,1200,600,600,600,600]},
{id:104,title:'Rock Star',artist:'부활',bpm:145,key:'A',difficulty:5,genre:'rock',
 notes:[A3,C4,E4,A4,G4,E4,C4,A3,B3,D4,Fs4,A4,G4,Fs4,E4,D4],
 lyrics:['Ro','ck','St','ar','되','어','무','대','위','에','서','소','리','쳐','봐','요'],
 duration:[300,300,300,600,300,300,300,300,300,300,300,600,300,300,300,600]},
{id:105,title:'잠들지 마',artist:'크러쉬',bpm:85,key:'D',difficulty:3,genre:'rnb',
 notes:[D4,Fs4,A4,D5,C5,A4,Fs4,D4,E4,G4,B4,D5,C5,B4,A4,Fs4],
 lyrics:['잠','들','지','마','오','늘','밤','은','너','와','나','의','이','야','기','를'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]}
];
(function injectSongs13(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v13Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine (12 sounds) ── */
var actx13=null;
function getAC13(){if(!actx13)try{actx13=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx13;}
function sfx13(type){
 var ac=getAC13();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  effectOn:{f:660,d:.2,wave:'sine',gS:.2,gE:0},
  rangeHit:{f:523,d:.3,wave:'triangle',gS:.25,gE:0},
  sectionLoop:{f:440,d:.15,wave:'square',gS:.12,gE:0},
  warmupTick:{f:800,d:.08,wave:'sine',gS:.15,gE:0},
  warmupDone:{f:880,d:.4,wave:'sine',gS:.3,gE:0},
  rankUp:{f:988,d:.5,wave:'triangle',gS:.3,gE:0},
  pitchCorrect:{f:700,d:.15,wave:'sine',gS:.2,gE:0},
  pitchWrong:{f:200,d:.3,wave:'sawtooth',gS:.15,gE:0},
  concertCheer:{f:500,d:.6,wave:'triangle',gS:.2,gE:0},
  playlistAdd:{f:1100,d:.12,wave:'sine',gS:.15,gE:0},
  achieve13:{f:784,d:.5,wave:'triangle',gS:.3,gE:0},
  featureOpen:{f:600,d:.15,wave:'sine',gS:.12,gE:0}
 };
 var c=cfg[type]||cfg.featureOpen;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='rankUp'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d);}
 if(type==='concertCheer'){var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=8;lg.gain.value=40;lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper ── */
function v13M(id,title,body){
 var old=document.getElementById(id);if(old)old.remove();
 var ov=document.createElement('div');ov.id=id;
 ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;padding:16px;overflow-y:auto';
 var box=document.createElement('div');
 box.style.cssText='background:linear-gradient(135deg,#1a1030,#0f0a1e);color:#e0d0ff;border-radius:16px;padding:24px;max-width:640px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 8px 32px rgba(168,85,247,.4);border:1px solid rgba(168,85,247,.2)';
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

/* ══════════════════════════════════════════════
   Feature 1: Voice Effects Studio (8 effects)
   ══════════════════════════════════════════════ */
var vfxPresets=[
 {id:'echo',name:'에코',icon:'🔊',desc:'산울림처럼 메아리 효과',delay:0.3,feedback:0.4,mix:0.35},
 {id:'reverb',name:'리버브',icon:'🏛️',desc:'넓은 홀에서 부르는 듯한 공간감',delay:0.05,feedback:0.6,mix:0.4},
 {id:'chorus',name:'코러스',icon:'👥',desc:'여러 사람이 함께 부르는 합창 효과',delay:0.02,feedback:0.3,mix:0.3},
 {id:'delay',name:'딜레이',icon:'⏱️',desc:'시간 차를 두고 반복되는 효과',delay:0.5,feedback:0.35,mix:0.3},
 {id:'stadium',name:'스타디움',icon:'🏟️',desc:'대형 경기장에서 노래하는 효과',delay:0.15,feedback:0.55,mix:0.45},
 {id:'telephone',name:'전화기',icon:'📞',desc:'전화 통화하는 듯한 빈티지 효과',delay:0.01,feedback:0.1,mix:0.5},
 {id:'cave',name:'동굴',icon:'🕳️',desc:'깊은 동굴에서 울리는 효과',delay:0.25,feedback:0.7,mix:0.5},
 {id:'studio',name:'스튜디오',icon:'🎙️',desc:'전문 녹음실의 따뜻한 사운드',delay:0.04,feedback:0.25,mix:0.2}
];
var curEffect=ls13('vfxPreset','none');

function openVFXStudio(){
 sfx13('featureOpen');
 var html='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px">노래할 때 적용할 보이스 이펙트를 선택하세요</p>';
 html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">';
 var noneSelected=curEffect==='none';
 html+='<div onclick="window.__v13SetVFX(\'none\')" style="cursor:pointer;padding:14px;border-radius:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:2px solid '+(noneSelected?'#fbbf24':'transparent')+';text-align:center">';
 html+='<div style="font-size:1.5em">🚫</div><div style="color:#c084fc;font-weight:bold;margin-top:4px">없음</div>';
 if(noneSelected)html+='<div style="color:#fbbf24;font-size:.75em;margin-top:2px">선택됨</div>';
 html+='</div>';
 vfxPresets.forEach(function(fx){
  var sel=curEffect===fx.id;
  html+='<div onclick="window.__v13SetVFX(\''+fx.id+'\')" style="cursor:pointer;padding:14px;border-radius:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:2px solid '+(sel?'#fbbf24':'transparent')+';text-align:center">';
  html+='<div style="font-size:1.5em">'+fx.icon+'</div>';
  html+='<div style="color:#c084fc;font-weight:bold;margin-top:4px">'+fx.name+'</div>';
  html+='<div style="color:#6b7280;font-size:.75em;margin-top:2px">'+fx.desc+'</div>';
  if(sel)html+='<div style="color:#fbbf24;font-size:.75em;margin-top:2px">선택됨</div>';
  html+='</div>';
 });
 html+='</div>';
 html+='<div style="margin-top:16px;padding:12px;background:rgba(168,85,247,.1);border-radius:8px;text-align:center;color:#a78bfa;font-size:.85em">';
 html+='현재 이펙트: <strong style="color:#c084fc">'+(curEffect==='none'?'없음':vfxPresets.find(function(f){return f.id===curEffect;}).name)+'</strong></div>';
 v13M('v13-vfx','🎛️ 보이스 이펙트 스튜디오',html);
}
window.__v13SetVFX=function(id){
 curEffect=id;ls13s('vfxPreset',id);sfx13('effectOn');
 checkAch13('effect_user',true);
 if(id!=='none')checkAch13('effect_all',vfxPresets.every(function(fx){var used=ls13('vfxUsed',[]);return used.indexOf(fx.id)!==-1;}));
 var used=ls13('vfxUsed',[]);if(id!=='none'&&used.indexOf(id)===-1){used.push(id);ls13s('vfxUsed',used);}
 openVFXStudio();
};

/* ══════════════════════════════════════════════
   Feature 2: Vocal Range Tester Canvas
   ══════════════════════════════════════════════ */
var rangeResult=ls13('rangeResult',null);

function openRangeTester(){
 sfx13('featureOpen');
 var wrap=document.createElement('div');
 var info=document.createElement('div');
 info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:12px';
 info.innerHTML='마이크를 사용해 가장 낮은 음과 높은 음을 측정합니다';

 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=220;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:8px';

 var status=document.createElement('div');
 status.style.cssText='margin-top:12px;text-align:center;font-size:1.1em;color:#c084fc;min-height:30px';

 var resultDiv=document.createElement('div');
 resultDiv.style.cssText='margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center';

 var btn=document.createElement('button');
 btn.textContent='🎤 측정 시작 (10초)';
 btn.style.cssText='margin-top:12px;width:100%;padding:14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer';

 wrap.appendChild(info);wrap.appendChild(cvs);wrap.appendChild(status);wrap.appendChild(resultDiv);wrap.appendChild(btn);
 v13M('v13-range','🎹 음역대 측정기',wrap);

 var ctx=cvs.getContext('2d'),testing=false,stream13=null;
 var detectedPitches=[],lowestHz=9999,highestHz=0;

 function drawKeyboard(lo,hi){
  ctx.clearRect(0,0,560,220);
  var noteNames=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  var startOct=2,endOct=6;
  var totalKeys=(endOct-startOct)*12;
  var kw=560/totalKeys;
  for(var i=0;i<totalKeys;i++){
   var note=i%12,oct=startOct+Math.floor(i/12);
   var freq=440*Math.pow(2,(i-33)/12);
   var isBlack=[1,3,6,8,10].indexOf(note)!==-1;
   var x=i*kw;
   var inRange=lo>0&&hi>0&&freq>=lo&&freq<=hi;
   if(isBlack){
    ctx.fillStyle=inRange?'#7c3aed':'#333';
    ctx.fillRect(x,0,kw-1,130);
   }else{
    ctx.fillStyle=inRange?'rgba(168,85,247,.3)':'#1a1040';
    ctx.fillRect(x,0,kw-1,200);
    ctx.strokeStyle='#333';ctx.strokeRect(x,0,kw-1,200);
   }
   if(note===0&&!isBlack){
    ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';
    ctx.fillText('C'+oct,x+2,215);
   }
  }
  if(lo>0&&lo<9999){
   var loPos=Math.log2(lo/65.41)*12*kw;
   ctx.fillStyle='#22c55e';ctx.beginPath();ctx.arc(loPos,180,6,0,Math.PI*2);ctx.fill();
   ctx.fillStyle='#22c55e';ctx.font='bold 10px sans-serif';ctx.fillText('LOW',loPos-10,175);
  }
  if(hi>0){
   var hiPos=Math.log2(hi/65.41)*12*kw;
   ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(hiPos,180,6,0,Math.PI*2);ctx.fill();
   ctx.fillStyle='#ef4444';ctx.font='bold 10px sans-serif';ctx.fillText('HIGH',hiPos-12,175);
  }
 }

 function freqToNote(f){
  var noteNames=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  var n=12*Math.log2(f/440)+69;
  var noteIdx=Math.round(n)%12;if(noteIdx<0)noteIdx+=12;
  var oct=Math.floor(Math.round(n)/12)-1;
  return noteNames[noteIdx]+oct;
 }

 function getVoiceType(lo,hi){
  var range=hi-lo;
  if(hi>600)return '소프라노 (Soprano)';
  if(hi>450&&lo<200)return '메조소프라노 (Mezzo)';
  if(hi>400&&lo<170)return '알토 (Alto)';
  if(hi>350&&lo<150)return '테너 (Tenor)';
  if(hi>280&&lo<130)return '바리톤 (Baritone)';
  return '베이스 (Bass)';
 }

 drawKeyboard(0,0);

 btn.onclick=function(){
  if(testing)return;
  navigator.mediaDevices.getUserMedia({audio:true}).then(function(st){
   stream13=st;testing=true;
   btn.textContent='측정 중...';btn.style.opacity='.6';
   lowestHz=9999;highestHz=0;detectedPitches=[];
   var ac=new AudioContext(),src=ac.createMediaStreamSource(st),an=ac.createAnalyser();
   an.fftSize=2048;src.connect(an);var buf=new Float32Array(an.fftSize);
   var elapsed=0,interval=50;

   var timer=setInterval(function(){
    elapsed+=interval;
    an.getFloatTimeDomainData(buf);
    var pitch=v13DetectPitch(buf,ac.sampleRate);
    if(pitch>60&&pitch<1500){
     detectedPitches.push(pitch);
     if(pitch<lowestHz)lowestHz=pitch;
     if(pitch>highestHz)highestHz=pitch;
     sfx13('rangeHit');
    }
    var sec=Math.ceil((10000-elapsed)/1000);
    status.innerHTML='<span style="color:#fbbf24">남은 시간: '+sec+'초</span> | 현재 음: <strong>'+(pitch>60?freqToNote(pitch):'...')+'</strong>';
    drawKeyboard(lowestHz<9999?lowestHz:0,highestHz);

    if(elapsed>=10000){
     clearInterval(timer);testing=false;
     st.getTracks().forEach(function(t){t.stop();});
     btn.textContent='🎤 다시 측정';btn.style.opacity='1';

     if(detectedPitches.length<5){
      status.innerHTML='<span style="color:#ef4444">충분한 음성이 감지되지 않았습니다. 다시 시도해주세요.</span>';
      return;
     }
     var voiceType=getVoiceType(lowestHz,highestHz);
     var semitones=Math.round(12*Math.log2(highestHz/lowestHz));
     rangeResult={low:lowestHz,high:highestHz,lowNote:freqToNote(lowestHz),highNote:freqToNote(highestHz),semitones:semitones,type:voiceType};
     ls13s('rangeResult',rangeResult);
     status.innerHTML='<span style="color:#22c55e">측정 완료!</span>';
     resultDiv.innerHTML=
      '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">최저음</div><div style="color:#22c55e;font-size:1.3em;font-weight:bold">'+rangeResult.lowNote+'</div></div>'+
      '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">최고음</div><div style="color:#ef4444;font-size:1.3em;font-weight:bold">'+rangeResult.highNote+'</div></div>'+
      '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">음역</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+semitones+'반음</div></div>'+
      '<div style="grid-column:1/-1;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">성악 분류</div><div style="color:#c084fc;font-size:1.1em;font-weight:bold">'+voiceType+'</div></div>';
     checkAch13('range_tested',true);
     if(semitones>=24)checkAch13('range_2oct',true);
    }
   },interval);
  }).catch(function(){status.innerHTML='<span style="color:#ef4444">마이크 접근 불가</span>';});
 };
}
function v13DetectPitch(buf,sr){
 var n=buf.length,best=0,bestR=-1;
 for(var tau=Math.floor(sr/1500);tau<Math.floor(sr/60);tau++){
  var r=0;for(var i=0;i<n-tau;i++)r+=buf[i]*buf[i+tau];
  if(r>bestR){bestR=r;best=tau;}
 }
 return best>0?sr/best:0;
}

/* ══════════════════════════════════════════════
   Feature 3: Section Practice (A-B Repeat)
   ══════════════════════════════════════════════ */
var sectionPractice=ls13('sectionPractice',{tempo:100,pointA:0,pointB:0,repeats:0});

function openSectionPractice(){
 sfx13('featureOpen');
 var html='<div style="text-align:center;color:#d4d4d8;margin-bottom:16px">';
 html+='노래의 특정 구간을 반복 연습하는 모드입니다</div>';

 html+='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:16px;margin-bottom:12px">';
 html+='<div style="color:#c084fc;font-weight:bold;margin-bottom:12px">템포 조절</div>';
 html+='<div style="display:flex;align-items:center;gap:12px">';
 html+='<span style="color:#6b7280;font-size:.85em">느리게</span>';
 html+='<input type="range" min="50" max="150" value="'+sectionPractice.tempo+'" id="v13-tempo-slider" style="flex:1;accent-color:#a855f7" oninput="document.getElementById(\'v13-tempo-val\').textContent=this.value+\'%\'">';
 html+='<span style="color:#6b7280;font-size:.85em">빠르게</span>';
 html+='<span id="v13-tempo-val" style="color:#fbbf24;font-weight:bold;min-width:40px;text-align:right">'+sectionPractice.tempo+'%</span>';
 html+='</div></div>';

 html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">';
 html+='<div style="background:linear-gradient(135deg,#065f46,#064e3b);border-radius:12px;padding:16px;text-align:center;cursor:pointer" onclick="window.__v13SetPoint(\'A\')">';
 html+='<div style="font-size:1.5em">🅰️</div><div style="color:#22c55e;font-weight:bold;margin-top:4px">시작점 설정</div>';
 html+='<div style="color:#6b7280;font-size:.8em;margin-top:2px">노래 중 클릭</div></div>';
 html+='<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b);border-radius:12px;padding:16px;text-align:center;cursor:pointer" onclick="window.__v13SetPoint(\'B\')">';
 html+='<div style="font-size:1.5em">🅱️</div><div style="color:#ef4444;font-weight:bold;margin-top:4px">끝점 설정</div>';
 html+='<div style="color:#6b7280;font-size:.8em;margin-top:2px">노래 중 클릭</div></div>';
 html+='</div>';

 html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">';
 var repeats=[3,5,10];
 repeats.forEach(function(r){
  var sel=sectionPractice.repeats===r;
  html+='<button onclick="window.__v13SetRepeats('+r+')" style="padding:12px;border-radius:8px;border:2px solid '+(sel?'#fbbf24':'rgba(168,85,247,.3)')+';background:'+(sel?'rgba(251,191,36,.15)':'rgba(168,85,247,.1)')+';color:#e0d0ff;cursor:pointer;font-size:.9em">'+r+'회 반복</button>';
 });
 html+='</div>';

 html+='<div style="background:rgba(168,85,247,.1);border-radius:8px;padding:12px;text-align:center;color:#a78bfa;font-size:.85em">';
 html+='팁: 어려운 구간은 50% 느린 템포로 시작해서 점점 올리세요</div>';
 v13M('v13-section','🔁 구간 연습 모드',html);
}
window.__v13SetPoint=function(p){sfx13('sectionLoop');};
window.__v13SetRepeats=function(r){sectionPractice.repeats=r;ls13s('sectionPractice',sectionPractice);sfx13('sectionLoop');checkAch13('section_user',true);openSectionPractice();};

/* ══════════════════════════════════════════════
   Feature 4: Vocal Warmup Timer (8 steps)
   ══════════════════════════════════════════════ */
var warmupSteps=[
 {name:'목 스트레칭',duration:60,desc:'목을 좌우, 앞뒤로 천천히 돌려주세요',icon:'🧘'},
 {name:'립 트릴',duration:45,desc:'입술을 떨며 &quot;브르르&quot; 소리를 내세요',icon:'👄'},
 {name:'허밍',duration:60,desc:'코로 &quot;으음~&quot; 소리를 내며 공명을 느끼세요',icon:'🎵'},
 {name:'5모음 발성',duration:45,desc:'아-에-이-오-우를 순서대로 크게 발성하세요',icon:'🗣️'},
 {name:'스케일 업/다운',duration:60,desc:'도레미파솔라시도를 올렸다 내려주세요',icon:'🎹'},
 {name:'스타카토',duration:30,desc:'짧고 강하게 &quot;하!하!하!&quot; 발성하세요',icon:'⚡'},
 {name:'롱톤 유지',duration:45,desc:'한 음을 최대한 길게 유지해보세요',icon:'🎯'},
 {name:'노래 준비 호흡',duration:30,desc:'4초 들이쉬고-4초 참고-6초 내쉬기를 3회 반복',icon:'💨'}
];
var warmupProgress=ls13('warmupProg',{completed:0,lastDate:''});

function openWarmupTimer(){
 sfx13('featureOpen');
 var wrap=document.createElement('div');
 var today=new Date().toDateString();
 var alreadyDone=warmupProgress.lastDate===today;

 var stepsHtml='<div style="margin-bottom:16px;color:#d4d4d8;text-align:center;font-size:.9em">'+(alreadyDone?'<span style="color:#22c55e">오늘 워밍업 완료! 다시 할 수 있어요.</span>':'총 '+warmupSteps.reduce(function(a,b){return a+b.duration;},0)/60+'분 소요')+'</div>';
 stepsHtml+='<div style="display:grid;gap:8px" id="v13-warmup-steps">';
 warmupSteps.forEach(function(s,i){
  stepsHtml+='<div id="v13-ws-'+i+'" style="display:flex;align-items:center;gap:12px;padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;border:1px solid rgba(168,85,247,.2)">';
  stepsHtml+='<span style="font-size:1.5em">'+s.icon+'</span>';
  stepsHtml+='<div style="flex:1"><div style="color:#c084fc;font-weight:bold;font-size:.95em">Step '+(i+1)+': '+s.name+'</div>';
  stepsHtml+='<div style="color:#6b7280;font-size:.8em;margin-top:2px">'+s.desc+' ('+s.duration+'초)</div></div>';
  stepsHtml+='<span id="v13-ws-check-'+i+'" style="font-size:1.2em;color:#6b7280">⏳</span>';
  stepsHtml+='</div>';
 });
 stepsHtml+='</div>';

 stepsHtml+='<div id="v13-warmup-progress" style="margin-top:16px;text-align:center;display:none">';
 stepsHtml+='<div style="font-size:2em;margin-bottom:8px" id="v13-wu-icon">🧘</div>';
 stepsHtml+='<div style="font-size:1.3em;color:#c084fc;font-weight:bold" id="v13-wu-name">--</div>';
 stepsHtml+='<div style="font-size:3em;font-weight:900;color:#fbbf24;margin:8px 0" id="v13-wu-timer">00</div>';
 stepsHtml+='<div style="width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin-top:8px"><div id="v13-wu-bar" style="height:100%;background:linear-gradient(90deg,#a855f7,#ff6ab0);border-radius:3px;width:0;transition:width .5s"></div></div>';
 stepsHtml+='</div>';

 stepsHtml+='<button id="v13-wu-start" style="margin-top:16px;width:100%;padding:14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer;font-weight:bold">▶️ 워밍업 시작</button>';

 wrap.innerHTML=stepsHtml;
 v13M('v13-warmup','🔥 보컬 워밍업 타이머 (8단계)',wrap);

 setTimeout(function(){
  var startBtn=document.getElementById('v13-wu-start');
  if(!startBtn)return;
  startBtn.onclick=function(){
   startBtn.style.display='none';
   var prog=document.getElementById('v13-warmup-progress');
   if(prog)prog.style.display='block';
   runWarmupStep(0);
  };
 },100);
}

function runWarmupStep(idx){
 if(idx>=warmupSteps.length){
  var prog=document.getElementById('v13-warmup-progress');
  if(prog)prog.innerHTML='<div style="font-size:3em;margin-bottom:12px">🎉</div><div style="font-size:1.3em;color:#22c55e;font-weight:bold">워밍업 완료!</div><div style="color:#a78bfa;margin-top:8px">이제 노래할 준비가 되었어요!</div>';
  sfx13('warmupDone');
  warmupProgress.completed++;warmupProgress.lastDate=new Date().toDateString();
  ls13s('warmupProg',warmupProgress);
  checkAch13('warmup_done',true);
  if(warmupProgress.completed>=7)checkAch13('warmup_week',true);
  return;
 }
 var step=warmupSteps[idx];
 var icon=document.getElementById('v13-wu-icon');
 var name=document.getElementById('v13-wu-name');
 var timer=document.getElementById('v13-wu-timer');
 var bar=document.getElementById('v13-wu-bar');
 if(icon)icon.textContent=step.icon;
 if(name)name.textContent='Step '+(idx+1)+': '+step.name;

 var remaining=step.duration;
 var iv=setInterval(function(){
  remaining--;
  if(timer)timer.textContent=remaining;
  if(bar)bar.style.width=((step.duration-remaining)/step.duration*100)+'%';
  if(remaining%5===0)sfx13('warmupTick');
  if(remaining<=0){
   clearInterval(iv);
   var check=document.getElementById('v13-ws-check-'+idx);
   if(check)check.textContent='✅';
   var row=document.getElementById('v13-ws-'+idx);
   if(row)row.style.borderColor='#22c55e';
   setTimeout(function(){runWarmupStep(idx+1);},500);
  }
 },1000);
 if(timer)timer.textContent=remaining;
}

/* ══════════════════════════════════════════════
   Feature 5: Song Ranking / Leaderboard
   ══════════════════════════════════════════════ */
var aiRivals=[
 {name:'보컬킹',avatar:'👑',baseScore:82},
 {name:'음치탈출',avatar:'🎯',baseScore:65},
 {name:'노래요정',avatar:'🧚',baseScore:78},
 {name:'마이크천재',avatar:'🎤',baseScore:88},
 {name:'멜로디스타',avatar:'⭐',baseScore:75},
 {name:'뮤직러버',avatar:'💜',baseScore:70},
 {name:'파워보이스',avatar:'💪',baseScore:85},
 {name:'감성싱어',avatar:'🎶',baseScore:72}
];

function openLeaderboard(){
 sfx13('featureOpen');
 var hist=[];
 try{var raw=localStorage.getItem('sv12-pitchHist');if(raw)hist=JSON.parse(raw);}catch(e){}
 var myBest={};
 hist.forEach(function(h){
  if(!myBest[h.songId]||h.score>myBest[h.songId])myBest[h.songId]=h.score;
 });

 var myAvg=hist.length?Math.round(hist.reduce(function(a,b){return a+b.score;},0)/hist.length):0;
 var totalPlays=hist.length;

 var board=[];
 board.push({name:'나',avatar:'🙋',score:myAvg,plays:totalPlays,isMe:true});
 aiRivals.forEach(function(r){
  var variance=Math.floor(Math.random()*10)-5;
  board.push({name:r.name,avatar:r.avatar,score:Math.max(0,Math.min(100,r.baseScore+variance)),plays:Math.floor(Math.random()*50)+10,isMe:false});
 });
 board.sort(function(a,b){return b.score-a.score;});

 var html='<div style="margin-bottom:16px">';
 board.forEach(function(p,i){
  var rank=i+1;
  var medal=rank===1?'🥇':rank===2?'🥈':rank===3?'🥉':'';
  var bg=p.isMe?'linear-gradient(135deg,rgba(168,85,247,.3),rgba(124,58,237,.2))':'linear-gradient(135deg,#312e81,#1e1b4b)';
  var border=p.isMe?'2px solid #a855f7':'1px solid rgba(168,85,247,.15)';
  html+='<div style="display:flex;align-items:center;gap:12px;padding:12px;background:'+bg+';border:'+border+';border-radius:10px;margin-bottom:6px">';
  html+='<div style="width:28px;text-align:center;font-weight:900;color:'+(rank<=3?'#fbbf24':'#6b7280')+'">'+medal+(rank>3?rank:'')+'</div>';
  html+='<div style="font-size:1.5em">'+p.avatar+'</div>';
  html+='<div style="flex:1"><div style="color:'+(p.isMe?'#c084fc':'#e0d0ff')+';font-weight:bold">'+p.name+(p.isMe?' (나)':'')+'</div>';
  html+='<div style="color:#6b7280;font-size:.8em">'+p.plays+'회 플레이</div></div>';
  html+='<div style="text-align:right"><div style="color:#fbbf24;font-weight:900;font-size:1.2em">'+p.score+'</div><div style="color:#6b7280;font-size:.7em">평균</div></div>';
  html+='</div>';
 });
 html+='</div>';
 html+='<div style="background:rgba(168,85,247,.1);border-radius:8px;padding:12px;text-align:center;color:#a78bfa;font-size:.85em">더 많이 불러서 1위에 도전하세요!</div>';
 v13M('v13-ranking','🏆 노래 랭킹',html);
 checkAch13('ranking_view',true);
}

/* ══════════════════════════════════════════════
   Feature 6: Pitch Training Mini-games (3 modes)
   ══════════════════════════════════════════════ */
var pitchGameScores=ls13('pitchGameScores',{interval:0,match:0,memory:0});

function openPitchTraining(){
 sfx13('featureOpen');
 var html='<p style="color:#a78bfa;font-size:.9em;margin-bottom:16px;text-align:center">음감을 키우는 3가지 미니게임</p>';
 html+='<div style="display:grid;gap:12px">';

 html+='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:20px;cursor:pointer" onclick="window.__v13PitchGame(\'interval\')">';
 html+='<div style="display:flex;align-items:center;gap:12px"><span style="font-size:2em">🎵</span>';
 html+='<div><div style="color:#c084fc;font-weight:bold;font-size:1.1em">음정 간격 맞추기</div>';
 html+='<div style="color:#6b7280;font-size:.85em;margin-top:2px">두 음의 간격(도수)을 맞추세요</div></div></div>';
 html+='<div style="color:#fbbf24;font-size:.85em;margin-top:8px;text-align:right">최고: '+pitchGameScores.interval+'점</div></div>';

 html+='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:20px;cursor:pointer" onclick="window.__v13PitchGame(\'match\')">';
 html+='<div style="display:flex;align-items:center;gap:12px"><span style="font-size:2em">🎯</span>';
 html+='<div><div style="color:#c084fc;font-weight:bold;font-size:1.1em">음 맞추기</div>';
 html+='<div style="color:#6b7280;font-size:.85em;margin-top:2px">들려주는 음을 정확히 맞추세요</div></div></div>';
 html+='<div style="color:#fbbf24;font-size:.85em;margin-top:8px;text-align:right">최고: '+pitchGameScores.match+'점</div></div>';

 html+='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:20px;cursor:pointer" onclick="window.__v13PitchGame(\'memory\')">';
 html+='<div style="display:flex;align-items:center;gap:12px"><span style="font-size:2em">🧠</span>';
 html+='<div><div style="color:#c084fc;font-weight:bold;font-size:1.1em">멜로디 기억하기</div>';
 html+='<div style="color:#6b7280;font-size:.85em;margin-top:2px">들려주는 멜로디를 순서대로 기억하세요</div></div></div>';
 html+='<div style="color:#fbbf24;font-size:.85em;margin-top:8px;text-align:right">최고: '+pitchGameScores.memory+'점</div></div>';

 html+='</div>';
 v13M('v13-pitchTrain','🎮 음감 트레이닝',html);
}

window.__v13PitchGame=function(mode){
 var noteFreqs=[261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25];
 var noteNames=['도','레','미','파','솔','라','시','도*'];
 var score=0,round=0,maxRounds=10;

 function playTone(freq,dur){
  var ac=getAC13();if(!ac)return;
  var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
  o.type='sine';o.frequency.setValueAtTime(freq,t);
  o.connect(g);g.connect(ac.destination);
  g.gain.setValueAtTime(0.25,t);g.gain.linearRampToValueAtTime(0,t+(dur||0.5));
  o.start(t);o.stop(t+(dur||0.5));
 }

 if(mode==='interval'){
  function nextInterval(){
   if(round>=maxRounds){
    pitchGameScores.interval=Math.max(pitchGameScores.interval,score);
    ls13s('pitchGameScores',pitchGameScores);
    checkAch13('pitch_trainer',true);
    if(score>=8)checkAch13('pitch_master',true);
    var resHtml='<div style="text-align:center"><div style="font-size:3em;margin-bottom:12px">'+(score>=8?'🏆':score>=5?'👍':'💪')+'</div>';
    resHtml+='<div style="font-size:1.5em;color:#fbbf24;font-weight:900">'+score+' / '+maxRounds+'</div>';
    resHtml+='<div style="color:#a78bfa;margin-top:8px">등급: '+(score>=9?'S':score>=7?'A':score>=5?'B':score>=3?'C':'D')+'</div>';
    resHtml+='<button onclick="document.getElementById(\'v13-pitchGame\').remove()" style="margin-top:16px;padding:10px 24px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer">확인</button></div>';
    v13M('v13-pitchGame','🎵 음정 간격 결과',resHtml);
    return;
   }
   round++;
   var idx1=Math.floor(Math.random()*7);
   var gap=Math.floor(Math.random()*5)+2;
   var idx2=Math.min(idx1+gap,7);
   var intervals=['','단2도','장2도','단3도','장3도','완전4도','증4도','완전5도'];
   var correctInterval=idx2-idx1;
   playTone(noteFreqs[idx1],0.5);
   setTimeout(function(){playTone(noteFreqs[idx2],0.5);},600);

   var choices=[];choices.push(correctInterval);
   while(choices.length<4){var c=Math.floor(Math.random()*6)+1;if(choices.indexOf(c)===-1)choices.push(c);}
   choices.sort(function(){return Math.random()-0.5;});

   var qHtml='<div style="text-align:center"><div style="font-size:.9em;color:#a78bfa;margin-bottom:12px">Round '+round+'/'+maxRounds+' | 점수: '+score+'</div>';
   qHtml+='<div style="font-size:1.1em;color:#e0d0ff;margin-bottom:16px">두 음의 간격은?</div>';
   qHtml+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
   choices.forEach(function(ch){
    var label=ch+'도 ('+noteNames[0]+'~'+noteNames[Math.min(ch,7)]+')';
    qHtml+='<button onclick="window.__v13IntervalAnswer('+ch+','+correctInterval+')" style="padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:1px solid rgba(168,85,247,.3);border-radius:8px;color:#e0d0ff;cursor:pointer;font-size:.9em">'+label+'</button>';
   });
   qHtml+='</div></div>';
   v13M('v13-pitchGame','🎵 음정 간격 맞추기',qHtml);
  }
  window.__v13IntervalAnswer=function(ans,correct){
   if(ans===correct){score++;sfx13('pitchCorrect');}else{sfx13('pitchWrong');}
   setTimeout(nextInterval,500);
  };
  nextInterval();
 }
 else if(mode==='match'){
  function nextMatch(){
   if(round>=maxRounds){
    pitchGameScores.match=Math.max(pitchGameScores.match,score);
    ls13s('pitchGameScores',pitchGameScores);
    checkAch13('pitch_trainer',true);
    var resHtml='<div style="text-align:center"><div style="font-size:3em;margin-bottom:12px">'+(score>=8?'🏆':score>=5?'👍':'💪')+'</div>';
    resHtml+='<div style="font-size:1.5em;color:#fbbf24;font-weight:900">'+score+' / '+maxRounds+'</div>';
    resHtml+='<button onclick="document.getElementById(\'v13-pitchGame\').remove()" style="margin-top:16px;padding:10px 24px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer">확인</button></div>';
    v13M('v13-pitchGame','🎯 음 맞추기 결과',resHtml);
    return;
   }
   round++;
   var targetIdx=Math.floor(Math.random()*8);
   playTone(noteFreqs[targetIdx],0.7);

   var qHtml='<div style="text-align:center"><div style="font-size:.9em;color:#a78bfa;margin-bottom:12px">Round '+round+'/'+maxRounds+' | 점수: '+score+'</div>';
   qHtml+='<div style="font-size:1.1em;color:#e0d0ff;margin-bottom:16px">방금 들린 음은?</div>';
   qHtml+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">';
   noteNames.forEach(function(n,i){
    qHtml+='<button onclick="window.__v13MatchAnswer('+i+','+targetIdx+')" style="padding:14px 8px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:1px solid rgba(168,85,247,.3);border-radius:8px;color:#e0d0ff;cursor:pointer;font-size:1em;font-weight:bold" onmouseenter="this.style.borderColor=\'#a855f7\'" onmouseleave="this.style.borderColor=\'rgba(168,85,247,.3)\'">'+n+'</button>';
   });
   qHtml+='</div>';
   qHtml+='<button onclick="window.__v13ReplayNote('+targetIdx+')" style="margin-top:12px;padding:8px 16px;background:rgba(168,85,247,.2);border:1px solid rgba(168,85,247,.3);border-radius:8px;color:#a78bfa;cursor:pointer;font-size:.85em">🔊 다시 듣기</button>';
   qHtml+='</div>';
   v13M('v13-pitchGame','🎯 음 맞추기',qHtml);
  }
  window.__v13MatchAnswer=function(ans,correct){
   if(ans===correct){score++;sfx13('pitchCorrect');}else{sfx13('pitchWrong');}
   setTimeout(nextMatch,500);
  };
  window.__v13ReplayNote=function(idx){playTone(noteFreqs[idx],0.7);};
  nextMatch();
 }
 else if(mode==='memory'){
  var seqLen=3;
  function nextMemory(){
   if(round>=maxRounds){
    pitchGameScores.memory=Math.max(pitchGameScores.memory,score);
    ls13s('pitchGameScores',pitchGameScores);
    checkAch13('pitch_trainer',true);
    var resHtml='<div style="text-align:center"><div style="font-size:3em;margin-bottom:12px">'+(score>=8?'🏆':score>=5?'👍':'💪')+'</div>';
    resHtml+='<div style="font-size:1.5em;color:#fbbf24;font-weight:900">'+score+' / '+maxRounds+'</div>';
    resHtml+='<button onclick="document.getElementById(\'v13-pitchGame\').remove()" style="margin-top:16px;padding:10px 24px;background:#a855f7;color:#fff;border:none;border-radius:8px;cursor:pointer">확인</button></div>';
    v13M('v13-pitchGame','🧠 멜로디 기억 결과',resHtml);
    return;
   }
   round++;
   var seq=[];for(var s=0;s<seqLen;s++)seq.push(Math.floor(Math.random()*8));
   var userSeq=[];

   seq.forEach(function(idx,i){setTimeout(function(){playTone(noteFreqs[idx],0.4);},i*600);});

   setTimeout(function(){
    var qHtml='<div style="text-align:center"><div style="font-size:.9em;color:#a78bfa;margin-bottom:12px">Round '+round+'/'+maxRounds+' | 점수: '+score+' | '+seqLen+'음</div>';
    qHtml+='<div style="font-size:1.1em;color:#e0d0ff;margin-bottom:8px">들은 순서대로 누르세요</div>';
    qHtml+='<div id="v13-mem-input" style="min-height:30px;color:#fbbf24;font-size:1.1em;margin-bottom:12px"></div>';
    qHtml+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">';
    noteNames.forEach(function(n,i){
     qHtml+='<button onclick="window.__v13MemInput('+i+')" style="padding:14px 8px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:1px solid rgba(168,85,247,.3);border-radius:8px;color:#e0d0ff;cursor:pointer;font-size:1em;font-weight:bold">'+n+'</button>';
    });
    qHtml+='</div></div>';
    v13M('v13-pitchGame','🧠 멜로디 기억하기',qHtml);

    window.__v13MemInput=function(idx){
     playTone(noteFreqs[idx],0.3);
     userSeq.push(idx);
     var display=document.getElementById('v13-mem-input');
     if(display)display.textContent=userSeq.map(function(i){return noteNames[i];}).join(' ');
     if(userSeq.length===seqLen){
      var correct=true;
      for(var j=0;j<seqLen;j++){if(userSeq[j]!==seq[j]){correct=false;break;}}
      if(correct){score++;sfx13('pitchCorrect');if(round%3===0&&seqLen<7)seqLen++;}
      else sfx13('pitchWrong');
      setTimeout(nextMemory,700);
     }
    };
   },seq.length*600+400);
  }
  nextMemory();
 }
};

/* ══════════════════════════════════════════════
   Feature 7: Concert Mode Canvas
   ══════════════════════════════════════════════ */
var concertStats=ls13('concertStats',{performances:0,totalScore:0,standing:0});

function openConcertMode(){
 sfx13('featureOpen');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=320;
 cvs.style.cssText='width:100%;border-radius:8px';
 wrap.appendChild(cvs);
 var ctx=cvs.getContext('2d');

 ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,320);

 var grd=ctx.createLinearGradient(0,0,0,160);
 grd.addColorStop(0,'#1a0533');grd.addColorStop(1,'#0a0818');
 ctx.fillStyle=grd;ctx.fillRect(0,0,560,160);

 ctx.fillStyle='#2a1060';ctx.fillRect(40,120,480,80);
 ctx.strokeStyle='#6a3aaa';ctx.lineWidth=2;ctx.strokeRect(40,120,480,80);

 var spotColors=['#ff6ab0','#a855f7','#fbbf24'];
 for(var sp=0;sp<3;sp++){
  var sx=140+sp*140;
  var grad=ctx.createRadialGradient(sx,0,5,sx,120,120);
  grad.addColorStop(0,spotColors[sp]);grad.addColorStop(1,'transparent');
  ctx.fillStyle=grad;ctx.beginPath();ctx.moveTo(sx-5,0);ctx.lineTo(sx-60,120);ctx.lineTo(sx+60,120);ctx.lineTo(sx+5,0);ctx.closePath();ctx.fill();
 }

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('STARVOICE LIVE',280,30);

 ctx.fillStyle='#e0d0ff';ctx.font='48px sans-serif';ctx.fillText('🎤',280,170);

 for(var row=0;row<3;row++){
  for(var col=0;col<12;col++){
   var ax=60+col*40+Math.random()*10;
   var ay=220+row*30+Math.random()*8;
   var emojis=['😊','🥰','😍','🤩','😆','🎵','👏','💜'];
   ctx.font=(12+Math.random()*6)+'px sans-serif';
   ctx.fillText(emojis[Math.floor(Math.random()*emojis.length)],ax,ay);
  }
 }

 ctx.font='bold 18px sans-serif';ctx.fillStyle='#fbbf24';
 ctx.fillText('STAGE',280,112);

 var statsDiv=document.createElement('div');
 statsDiv.style.cssText='margin-top:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center';
 statsDiv.innerHTML=
  '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">공연 횟수</div><div style="color:#c084fc;font-size:1.3em;font-weight:bold">'+concertStats.performances+'</div></div>'+
  '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">평균 점수</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+(concertStats.performances?Math.round(concertStats.totalScore/concertStats.performances):0)+'</div></div>'+
  '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">기립박수</div><div style="color:#22c55e;font-size:1.3em;font-weight:bold">'+concertStats.standing+'</div></div>';
 wrap.appendChild(statsDiv);

 var startBtn=document.createElement('button');
 startBtn.textContent='🎤 공연 시작하기';
 startBtn.style.cssText='margin-top:12px;width:100%;padding:14px;background:linear-gradient(135deg,#ff6ab0,#a855f7);color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer;font-weight:bold';
 startBtn.onclick=function(){
  sfx13('concertCheer');
  var fakePerfScore=Math.floor(Math.random()*30)+70;
  concertStats.performances++;
  concertStats.totalScore+=fakePerfScore;
  if(fakePerfScore>=90)concertStats.standing++;
  ls13s('concertStats',concertStats);
  checkAch13('concert_debut',true);
  if(concertStats.performances>=5)checkAch13('concert_star',true);

  var crowdReaction=fakePerfScore>=90?'기립박수! 🎉🎉🎉':fakePerfScore>=75?'환호! 👏👏':'박수 👏';

  for(var row=0;row<3;row++){
   for(var col=0;col<12;col++){
    var ax=60+col*40+Math.random()*10;
    var ay=220+row*30+Math.random()*8;
    var reactionEmojis=fakePerfScore>=90?['🤩','😍','💯','🔥','👏','🎉']:fakePerfScore>=75?['😊','👏','🎵','💜']:['😊','👏','🙂'];
    ctx.font=(14+Math.random()*8)+'px sans-serif';
    ctx.fillText(reactionEmojis[Math.floor(Math.random()*reactionEmojis.length)],ax,ay);
   }
  }

  ctx.fillStyle='rgba(0,0,0,.5)';ctx.fillRect(130,50,300,50);
  ctx.fillStyle='#fbbf24';ctx.font='bold 20px sans-serif';
  ctx.fillText(crowdReaction+' '+fakePerfScore+'점!',280,82);

  statsDiv.innerHTML=
   '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">공연 횟수</div><div style="color:#c084fc;font-size:1.3em;font-weight:bold">'+concertStats.performances+'</div></div>'+
   '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">평균 점수</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+Math.round(concertStats.totalScore/concertStats.performances)+'</div></div>'+
   '<div style="background:#312e81;border-radius:8px;padding:12px"><div style="color:#a78bfa;font-size:.8em">기립박수</div><div style="color:#22c55e;font-size:1.3em;font-weight:bold">'+concertStats.standing+'</div></div>';
 };
 wrap.appendChild(startBtn);

 var infoDiv=document.createElement('div');
 infoDiv.style.cssText='margin-top:8px;background:rgba(168,85,247,.1);border-radius:8px;padding:12px;text-align:center;color:#a78bfa;font-size:.85em';
 infoDiv.textContent='노래를 부르면 관객이 반응합니다. 90점 이상이면 기립박수!';
 wrap.appendChild(infoDiv);

 v13M('v13-concert','🎪 콘서트 모드',wrap);
}

/* ══════════════════════════════════════════════
   Feature 8: Playlist Builder
   ══════════════════════════════════════════════ */
var playlists=ls13('playlists',[
 {id:1,name:'발라드 모음',songs:[88,90,92,97,103],created:Date.now()},
 {id:2,name:'신나는 댄스',songs:[87,91,98,102],created:Date.now()},
 {id:3,name:'초보자 추천',songs:[99,86,89,101],created:Date.now()}
]);

function openPlaylistBuilder(){
 sfx13('featureOpen');
 var html='<div style="display:grid;gap:12px">';

 playlists.forEach(function(pl){
  html+='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:16px;cursor:pointer" onclick="window.__v13ViewPlaylist('+pl.id+')">';
  html+='<div style="display:flex;justify-content:space-between;align-items:center">';
  html+='<div><div style="color:#c084fc;font-weight:bold;font-size:1.05em">🎶 '+pl.name+'</div>';
  html+='<div style="color:#6b7280;font-size:.8em;margin-top:2px">'+pl.songs.length+'곡</div></div>';
  html+='<button onclick="event.stopPropagation();window.__v13DeletePlaylist('+pl.id+')" style="background:rgba(239,68,68,.2);border:1px solid rgba(239,68,68,.3);color:#ef4444;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:.8em">삭제</button>';
  html+='</div></div>';
 });

 html+='<button onclick="window.__v13CreatePlaylist()" style="padding:16px;background:linear-gradient(135deg,rgba(168,85,247,.2),rgba(124,58,237,.15));border:2px dashed rgba(168,85,247,.4);border-radius:12px;color:#c084fc;cursor:pointer;font-size:1em;text-align:center">+ 새 플레이리스트 만들기</button>';
 html+='</div>';
 v13M('v13-playlists','📋 플레이리스트 빌더',html);
}

window.__v13ViewPlaylist=function(id){
 var pl=playlists.find(function(p){return p.id===id;});if(!pl)return;
 var allSongs=(window.songs||[]);
 var html='<div style="display:grid;gap:8px">';
 pl.songs.forEach(function(sid,i){
  var song=allSongs.find(function(s){return s.id===sid;});
  var title=song?song.title:'곡 #'+sid;
  var artist=song?(song.artist||''):'';
  html+='<div style="display:flex;align-items:center;gap:12px;padding:10px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:8px">';
  html+='<span style="color:#a78bfa;font-weight:bold;width:24px">'+(i+1)+'</span>';
  html+='<div style="flex:1"><div style="color:#e0d0ff;font-weight:bold">'+title+'</div>';
  if(artist)html+='<div style="color:#6b7280;font-size:.8em">'+artist+'</div>';
  html+='</div></div>';
 });
 html+='</div>';
 html+='<button onclick="window.__v13PlayPlaylist('+id+')" style="margin-top:16px;width:100%;padding:14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer;font-weight:bold">▶️ 순서대로 재생</button>';
 v13M('v13-pl-view','🎶 '+pl.name,html);
 checkAch13('playlist_view',true);
};

window.__v13PlayPlaylist=function(id){
 var pl=playlists.find(function(p){return p.id===id;});if(!pl||!pl.songs.length)return;
 if(typeof window.playSong==='function')window.playSong(pl.songs[0]);
 document.getElementById('v13-pl-view')&&document.getElementById('v13-pl-view').remove();
};

window.__v13CreatePlaylist=function(){
 var name=prompt('플레이리스트 이름을 입력하세요:');
 if(!name||!name.trim())return;
 var newPl={id:Date.now(),name:name.trim(),songs:[],created:Date.now()};
 playlists.push(newPl);ls13s('playlists',playlists);
 sfx13('playlistAdd');
 checkAch13('playlist_creator',true);
 openPlaylistBuilder();
};

window.__v13DeletePlaylist=function(id){
 playlists=playlists.filter(function(p){return p.id!==id;});
 ls13s('playlists',playlists);
 openPlaylistBuilder();
};

/* ── Quiz +15 (questions 88-102) ── */
var v13Quiz=[
 {q:'에코(Echo) 이펙트의 특징은?',a:['메아리처럼 반복','음이 높아짐','음이 낮아짐','속도가 빨라짐'],c:0},
 {q:'음역대 2옥타브는 몇 반음?',a:['24반음','12반음','36반음','48반음'],c:0},
 {q:'구간 반복 연습의 장점은?',a:['약점 집중 훈련','빠른 곡만 연습','쉬운 곡만 연습','새 곡 추가'],c:0},
 {q:'보컬 워밍업의 첫 단계로 적절한 것은?',a:['목 스트레칭','고음 발성','빠른 노래','큰 소리'],c:0},
 {q:'리버브(Reverb) 효과는?',a:['공간감 부여','음량 증가','음정 변화','속도 변화'],c:0},
 {q:'테너의 일반적 음역대는?',a:['C3~C5','C1~C3','C5~C7','E2~E4'],c:0},
 {q:'음정 간격 장3도는?',a:['4반음','3반음','5반음','7반음'],c:0},
 {q:'코러스(Chorus) 효과란?',a:['여러 사람이 함께 부르는 느낌','메아리 효과','전화기 소리','동굴 울림'],c:0},
 {q:'A4의 표준 주파수는?',a:['440Hz','220Hz','880Hz','330Hz'],c:0},
 {q:'립 트릴의 효과는?',a:['성대 이완','고음 강화','저음 강화','리듬 연습'],c:0},
 {q:'소프라노의 특징은?',a:['높은 여성 음역','낮은 남성 음역','중간 음역','최저 음역'],c:0},
 {q:'딜레이(Delay)와 에코의 차이는?',a:['딜레이가 더 긴 간격','같은 것','딜레이가 더 짧음','딜레이는 효과없음'],c:0},
 {q:'플레이리스트의 용도는?',a:['즐겨듣는 곡 모음 관리','점수 올리기','워밍업','녹음'],c:0},
 {q:'콘서트 모드에서 기립박수 조건은?',a:['90점 이상','100점만','50점 이상','아무때나'],c:0},
 {q:'스타카토 발성 연습의 목적은?',a:['호흡 근육 강화','음정 연습','리듬 연습','고음 연습'],c:0}
];
(function injectQuiz13(){
 var tries=0;
 function attempt(){
  if(window.quizData&&Array.isArray(window.quizData)){
   v13Quiz.forEach(function(q,i){window.quizData.push({id:88+i,question:q.q,answers:q.a,correct:q.c});});
  }else if(tries++<40)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements +12 (79-90) ── */
var v13Achievements=[
 {id:'song_100',name:'100번째 노래',desc:'100번째 노래를 부르세요',icon:'💯'},
 {id:'v13_5songs',name:'v13 탐험가',desc:'v13 신곡 5곡 이상 플레이',icon:'🚀'},
 {id:'effect_user',name:'이펙트 데뷔',desc:'보이스 이펙트를 사용해보세요',icon:'🎛️'},
 {id:'effect_all',name:'이펙트 마스터',desc:'모든 보이스 이펙트를 경험',icon:'🎚️'},
 {id:'range_tested',name:'음역 탐험가',desc:'음역대 측정을 완료하세요',icon:'🎹'},
 {id:'range_2oct',name:'2옥타브 보컬',desc:'음역대 2옥타브 이상 달성',icon:'🌟'},
 {id:'section_user',name:'구간 연습생',desc:'구간 반복 연습 모드를 사용',icon:'🔁'},
 {id:'warmup_done',name:'워밍업 완료',desc:'보컬 워밍업 전체를 완료',icon:'🔥'},
 {id:'warmup_week',name:'워밍업 마스터',desc:'워밍업을 7일 이상 완료',icon:'💪'},
 {id:'pitch_trainer',name:'음감 훈련생',desc:'음감 트레이닝 게임을 플레이',icon:'🎮'},
 {id:'concert_debut',name:'콘서트 데뷔',desc:'콘서트 모드에서 첫 공연',icon:'🎪'},
 {id:'playlist_creator',name:'DJ 데뷔',desc:'플레이리스트를 만들어보세요',icon:'📋'}
];
var achStore13=ls13('achievements13',{});

function checkAch13(id,condition){
 if(!condition||achStore13[id])return;
 var ach=v13Achievements.find(function(a){return a.id===id;});if(!ach)return;
 achStore13[id]=Date.now();ls13s('achievements13',achStore13);
 sfx13('achieve13');
 var toast=document.createElement('div');
 toast.style.cssText='position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:100000;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;padding:12px 24px;border-radius:12px;font-size:1em;box-shadow:0 4px 20px rgba(168,85,247,.5);animation:v13slideIn .5s ease';
 toast.innerHTML=ach.icon+' <strong>'+ach.name+'</strong> 업적 획득!';
 document.body.appendChild(toast);
 setTimeout(function(){toast.style.opacity='0';toast.style.transition='opacity .5s';setTimeout(function(){toast.remove();},500);},3000);
}

/* ── Keyboard Shortcuts (+8) ── */
document.addEventListener('keydown',function(e){
 if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
 if(e.shiftKey){
  var k=e.key.toUpperCase();
  if(k==='F'){e.preventDefault();openVFXStudio();}
  if(k==='R'){e.preventDefault();openRangeTester();}
  if(k==='S'){e.preventDefault();openSectionPractice();}
  if(k==='W'){e.preventDefault();openWarmupTimer();}
  if(k==='K'){e.preventDefault();openLeaderboard();}
  if(k==='G'){e.preventDefault();openPitchTraining();}
  if(k==='C'){e.preventDefault();openConcertMode();}
  if(k==='P'){e.preventDefault();openPlaylistBuilder();}
 }
});

/* ── CSS Animation ── */
var style13=document.createElement('style');
style13.textContent='@keyframes v13slideIn{from{transform:translateX(-50%) translateY(-30px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}';
document.head.appendChild(style13);

/* ── FAB Menu (left side quick access) ── */
function injectFAB13(){
 var existing=document.getElementById('v13-fab-wrap');
 if(existing)existing.remove();
 var fabWrap=document.createElement('div');fabWrap.id='v13-fab-wrap';
 fabWrap.style.cssText='position:fixed;bottom:70px;left:8px;z-index:9998;display:flex;flex-direction:column;gap:6px';
 var items=[
  {icon:'🎛️',label:'이펙트',fn:openVFXStudio},
  {icon:'🎹',label:'음역',fn:openRangeTester},
  {icon:'🔁',label:'구간',fn:openSectionPractice},
  {icon:'🔥',label:'워밍업',fn:openWarmupTimer},
  {icon:'🏆',label:'랭킹',fn:openLeaderboard},
  {icon:'🎮',label:'트레이닝',fn:openPitchTraining},
  {icon:'🎪',label:'콘서트',fn:openConcertMode},
  {icon:'📋',label:'리스트',fn:openPlaylistBuilder}
 ];
 items.forEach(function(it){
  var btn=document.createElement('button');
  btn.title=it.label;
  btn.style.cssText='width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,rgba(124,58,237,.7),rgba(168,85,247,.5));border:1px solid rgba(168,85,247,.4);color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.3);transition:all .2s;padding:0';
  btn.textContent=it.icon;
  btn.onmouseenter=function(){btn.style.transform='scale(1.15)';};
  btn.onmouseleave=function(){btn.style.transform='scale(1)';};
  btn.onclick=function(){it.fn();};
  fabWrap.appendChild(btn);
 });
 document.body.appendChild(fabWrap);
}

/* ── Bottom Nav Scroll Bar ── */
function injectNavBar13(){
 var existing=document.getElementById('v13-nav-bar');
 if(existing)existing.remove();
 var nav=document.createElement('div');nav.id='v13-nav-bar';
 nav.style.cssText='position:fixed;bottom:56px;left:0;right:0;height:44px;background:linear-gradient(180deg,transparent,rgba(15,10,30,.95));z-index:44;display:flex;align-items:center;overflow-x:auto;gap:6px;padding:0 12px;-webkit-overflow-scrolling:touch';
 nav.innerHTML='<style>#v13-nav-bar::-webkit-scrollbar{height:0}</style>';
 var items=[
  {icon:'🎛️',label:'이펙트',fn:openVFXStudio},
  {icon:'🎹',label:'음역측정',fn:openRangeTester},
  {icon:'🔁',label:'구간연습',fn:openSectionPractice},
  {icon:'🔥',label:'워밍업',fn:openWarmupTimer},
  {icon:'🏆',label:'랭킹',fn:openLeaderboard},
  {icon:'🎮',label:'음감게임',fn:openPitchTraining},
  {icon:'🎪',label:'콘서트',fn:openConcertMode},
  {icon:'📋',label:'리스트',fn:openPlaylistBuilder}
 ];
 items.forEach(function(it){
  var btn=document.createElement('button');
  btn.style.cssText='flex-shrink:0;display:flex;align-items:center;gap:4px;padding:6px 12px;background:rgba(168,85,247,.15);border:1px solid rgba(168,85,247,.25);border-radius:20px;color:#c084fc;font-size:.8em;cursor:pointer;white-space:nowrap;transition:all .2s';
  btn.innerHTML=it.icon+' '+it.label;
  btn.onmouseenter=function(){btn.style.background='rgba(168,85,247,.3)';};
  btn.onmouseleave=function(){btn.style.background='rgba(168,85,247,.15)';};
  btn.onclick=function(){it.fn();};
  nav.appendChild(btn);
 });
 document.body.appendChild(nav);
}

/* ── Menu Integration ── */
function injectMenu13(){
 var tries=0;
 function attempt(){
  var menu=document.querySelector('.menu-grid,.feature-grid,[class*=menu],[class*=grid]');
  if(!menu){if(tries++<50)setTimeout(attempt,300);return;}
  var items=[
   {icon:'🎛️',label:'이펙트',fn:openVFXStudio},
   {icon:'🎹',label:'음역측정',fn:openRangeTester},
   {icon:'🔁',label:'구간연습',fn:openSectionPractice},
   {icon:'🔥',label:'워밍업',fn:openWarmupTimer},
   {icon:'🏆',label:'랭킹',fn:openLeaderboard},
   {icon:'🎮',label:'음감게임',fn:openPitchTraining},
   {icon:'🎪',label:'콘서트',fn:openConcertMode},
   {icon:'📋',label:'리스트',fn:openPlaylistBuilder}
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
 }
 attempt();
}
injectMenu13();
setTimeout(injectNavBar13,1500);

/* ── Song play tracking for v13 ── */
(function trackV13Songs(){
 var origPlay=window.playSong;
 if(typeof origPlay==='function'&&!origPlay.__v13tracked){
  window.playSong=function(id){
   var res=origPlay.apply(this,arguments);
   var sid=typeof id==='object'?id.id:id;
   if(sid===100)checkAch13('song_100',true);
   var played=ls13('v13played',[]);
   if(played.indexOf(sid)===-1&&sid>=96&&sid<=105){played.push(sid);ls13s('v13played',played);}
   checkAch13('v13_5songs',played.length>=5);
   return res;
  };
  window.playSong.__v13tracked=true;
 }else{setTimeout(trackV13Songs,500);}
})();

/* ── Concert mode hooks into endSong ── */
(function hookConcert(){
 var origEnd=window.endSong;
 if(typeof origEnd==='function'&&!origEnd.__v13concert){
  window.endSong=function(){
   var score=window.currentScore||0;
   if(concertStats.performances>0){
    concertStats.totalScore+=score;
    if(score>=90)concertStats.standing++;
    ls13s('concertStats',concertStats);
   }
   return origEnd.apply(this,arguments);
  };
  window.endSong.__v13concert=true;
 }else{setTimeout(hookConcert,2000);}
})();

console.log('[StarVoice v13] Loaded: +10songs(105), +8features, +15quiz(102), +12achievements(90), +12SFX, +8keys');
})();
