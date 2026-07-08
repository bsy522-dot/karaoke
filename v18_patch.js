/* StarVoice v18 Patch — Self-contained IIFE module injected via SW
 * +10 songs(145->155), VocalRangeExpander Canvas, VocalBalanceChecker 6axis Canvas,
 * SingerStyleChallenge Canvas 8artists, DJSetlistManager Canvas 10slots,
 * MicTechniqueGuide Canvas 8tips, VocalConditionChecklist Canvas 12items,
 * GenreMasteryTree Canvas 10genres, LiveStageScorecard Canvas PNG,
 * quiz +15(162->177), achievements +12(138->150), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v18KaraokeLoaded) return;
window.__v18KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;

function ls18(k,d){try{var v=localStorage.getItem('sv18-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls18s(k,v){try{localStorage.setItem('sv18-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (146-155) ── */
var v18Songs=[
{id:146,title:'APT.',artist:'ROSE & Bruno Mars',bpm:130,key:'G',difficulty:3,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['A','P','T','아','파','트','아','파','트','A','P','T','아','파','트','게임'],
 duration:[345,345,345,690,345,345,345,345,345,345,345,690,345,345,345,345]},
{id:147,title:'Whiplash',artist:'aespa',bpm:140,key:'E',difficulty:5,genre:'dance',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['Whip','lash','느','껴','봐','이','리','듬','타','고','날','아','가','볼','까','yeah'],
 duration:[320,320,320,640,320,320,320,320,320,320,320,640,320,320,320,320]},
{id:148,title:'Magnetic',artist:'ILLIT',bpm:116,key:'Ab',difficulty:3,genre:'pop',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db5,F4,Ab4,G4,F4,Eb4,Db5],
 lyrics:['너','에','게','끌','려','mag','ne','tic','자','석','처','럼','다','가','가','는'],
 duration:[390,390,390,780,390,390,390,390,390,390,390,780,390,390,390,390]},
{id:149,title:'해요 말고 해',artist:'김민석',bpm:76,key:'F',difficulty:3,genre:'ballad',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['해','요','말','고','해','라','고','해','줘','오','늘','부','터','우','리','는'],
 duration:[590,590,590,1180,590,590,590,590,590,590,590,1180,590,590,590,590]},
{id:150,title:'Supernova',artist:'aespa',bpm:134,key:'Bb',difficulty:5,genre:'dance',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['Su','per','no','va','빛','이','나','는','별','이','돼','서','터','져','버','려'],
 duration:[335,335,335,670,335,335,335,335,335,335,335,670,335,335,335,335]},
{id:151,title:'첫 눈',artist:'EXO',bpm:78,key:'D',difficulty:3,genre:'ballad',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['올','겨','울','첫','눈','이','내','리','면','그','대','와','함','께','걷','고'],
 duration:[575,575,575,1150,575,575,575,575,575,575,575,1150,575,575,575,575]},
{id:152,title:'HEYA',artist:'IVE',bpm:128,key:'C',difficulty:4,genre:'dance',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['Hey','ya','hey','ya','따','라','와','봐','hey','ya','hey','ya','함','께','놀','자'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,350]},
{id:153,title:'그때 그 순간 그대로',artist:'WSG워너비',bpm:84,key:'G',difficulty:3,genre:'ballad',
 notes:[G3,B3,D4,G4,Fs4,E4,D4,B3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['그','때','그','순','간','그','대','로','멈','춰','버','렸','으','면','했','다'],
 duration:[535,535,535,1070,535,535,535,535,535,535,535,1070,535,535,535,535]},
{id:154,title:'MANIAC',artist:'Stray Kids',bpm:128,key:'E',difficulty:5,genre:'hiphop',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['I','am','a','ma','ni','ac','yeah','I','am','a','ma','ni','ac','on','the','floor'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,350]},
{id:155,title:'사랑은 늘 도망가',artist:'임영웅',bpm:70,key:'C',difficulty:2,genre:'trot',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['사','랑','은','늘','도','망','가','는','걸','잡','을','수','가','없','는','걸'],
 duration:[640,640,640,1280,640,640,640,640,640,640,640,1280,640,640,640,640]}
];
(function injectSongs18(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v18Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v18 (12 sounds) ── */
var actx18=null;
function getAC18(){if(!actx18)try{actx18=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx18;}
function sfx18(type){
 var ac=getAC18();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  rangeUp:{f:440,d:.4,wave:'sine',gS:.22,gE:0},
  rangeDone:{f:880,d:.6,wave:'triangle',gS:.28,gE:0},
  balanceCheck:{f:523,d:.3,wave:'sine',gS:.2,gE:0},
  styleLock:{f:660,d:.35,wave:'triangle',gS:.22,gE:0},
  djTransition:{f:349,d:.45,wave:'square',gS:.15,gE:0},
  micTip:{f:494,d:.25,wave:'sine',gS:.18,gE:0},
  conditionGood:{f:784,d:.3,wave:'triangle',gS:.22,gE:0},
  conditionBad:{f:196,d:.4,wave:'sawtooth',gS:.1,gE:0},
  genreMaster:{f:698,d:.5,wave:'sine',gS:.25,gE:0},
  stageScore:{f:1047,d:.55,wave:'triangle',gS:.3,gE:0},
  cardGenerate:{f:587,d:.35,wave:'sine',gS:.2,gE:0},
  achieve18:{f:1047,d:.6,wave:'triangle',gS:.32,gE:0}
 };
 var c=cfg[type]||cfg.rangeUp;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='rangeDone'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d*0.4);o.frequency.linearRampToValueAtTime(c.f*2,t+c.d);}
 if(type==='djTransition'){
  o.frequency.linearRampToValueAtTime(c.f*0.5,t+c.d*0.3);
  o.frequency.linearRampToValueAtTime(c.f*1.2,t+c.d*0.7);
  o.frequency.linearRampToValueAtTime(c.f,t+c.d);
 }
 if(type==='stageScore'){
  var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=6;lg.gain.value=25;
  lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);
 }
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper v18 ── */
function v18M(id,title,body){
 var old=document.getElementById(id);if(old)old.remove();
 var ov=document.createElement('div');ov.id=id;
 ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;padding:16px;overflow-y:auto';
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
   Feature 1: Vocal Range Expander Canvas
   StarMaker 벤치마크: 음역대 확장 프로그램 부재 → 단계별 고음/저음 확장 훈련
   ══════════════════════════════════════════════════ */
var rangeData=ls18('range',{lowNote:'C3',highNote:'C5',sessions:0,history:[],exercises:[]});
function openRangeExpander(){
 sfx18('rangeUp');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:10px;font-size:.85em';
 info.textContent='음역대를 안전하게 확장하는 단계별 훈련 프로그램입니다.';
 wrap.appendChild(info);
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=380;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var noteNames=['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5','C6'];
 var lowIdx=noteNames.indexOf(rangeData.lowNote);if(lowIdx<0)lowIdx=7;
 var highIdx=noteNames.indexOf(rangeData.highNote);if(highIdx<0)highIdx=21;
 var exercises=[
  {name:'저음 확장 - 험프',desc:'입을 다물고 Hmm~ 최저음까지',target:'low',semitones:1},
  {name:'저음 확장 - 슬라이드',desc:'미끄러지듯 Do→저음 하행',target:'low',semitones:2},
  {name:'고음 확장 - 립트릴',desc:'Brr~ 소리로 상행 스케일',target:'high',semitones:1},
  {name:'고음 확장 - 허밍 상행',desc:'Hmm~ 최고음까지 올리기',target:'high',semitones:1},
  {name:'고음 확장 - Nay 발성',desc:'Nay~ 비강 공명으로 고음',target:'high',semitones:2},
  {name:'저음 확장 - Vocal Fry',desc:'프라이 보이스로 초저음',target:'low',semitones:2},
  {name:'브릿지 통과 - Mum',desc:'Mum~ 소리로 브릿지 구간 매끈하게',target:'high',semitones:1},
  {name:'음역 전체 - 사이렌',desc:'최저음→최고음 사이렌 소리',target:'both',semitones:0}
 ];
 var ctx=cvs.getContext('2d');var currentEx=0;
 function drawRange(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#080616';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎵 음역대 확장 트레이너',300,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('현재 음역: '+noteNames[lowIdx]+' ~ '+noteNames[highIdx]+' ('+((highIdx-lowIdx)+1)+'음) | '+rangeData.sessions+'회 훈련',300,40);
  var pianoY=55,pianoH=50,keyW=Math.min(20,560/noteNames.length);var startX=(600-keyW*noteNames.length)/2;
  noteNames.forEach(function(n,i){
   var x=startX+i*keyW;var isBlack=n.indexOf('#')>=0||n.indexOf('b')>=0;
   var inRange=i>=lowIdx&&i<=highIdx;
   ctx.fillStyle=inRange?'rgba(168,85,247,.4)':'rgba(40,30,70,.3)';
   ctx.fillRect(x,pianoY,keyW-1,pianoH);
   ctx.strokeStyle=inRange?'#a855f7':'rgba(100,80,140,.2)';ctx.lineWidth=1;ctx.strokeRect(x,pianoY,keyW-1,pianoH);
   if(i===lowIdx||i===highIdx){
    ctx.fillStyle='#ff6ab0';ctx.beginPath();ctx.arc(x+keyW/2,pianoY+pianoH+12,5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#e0d0ff';ctx.font='8px sans-serif';ctx.textAlign='center';ctx.fillText(n,x+keyW/2,pianoY+pianoH+26);
   }
  });
  var exY=135,exH=26;
  exercises.forEach(function(ex,i){
   var y=exY+i*exH;var isActive=i===currentEx;
   ctx.fillStyle=isActive?'rgba(168,85,247,.2)':'rgba(30,20,60,.4)';
   ctx.beginPath();ctx.roundRect(20,y,560,22,6);ctx.fill();
   ctx.strokeStyle=isActive?'#a855f7':'rgba(100,80,140,.15)';ctx.lineWidth=isActive?1.5:1;ctx.stroke();
   var targetCol=ex.target==='low'?'#3b82f6':ex.target==='high'?'#ef4444':'#22c55e';
   ctx.fillStyle=targetCol;ctx.font='9px sans-serif';ctx.textAlign='left';
   ctx.fillText(ex.target==='low'?'▼ LOW':ex.target==='high'?'▲ HIGH':'◆ FULL',28,y+15);
   ctx.fillStyle=isActive?'#e0d0ff':'#9ca3af';ctx.font=(isActive?'bold ':'')+'11px sans-serif';
   ctx.fillText(ex.name,90,y+15);
   ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.textAlign='right';
   ctx.fillText(ex.desc,575,y+15);
  });
  var grade=(highIdx-lowIdx)>=24?'S':(highIdx-lowIdx)>=20?'A':(highIdx-lowIdx)>=16?'B':(highIdx-lowIdx)>=12?'C':'D';
  var gCol=grade==='S'?'#fbbf24':grade==='A'?'#22c55e':grade==='B'?'#3b82f6':'#e0d0ff';
  ctx.fillStyle=gCol;ctx.font='bold 22px sans-serif';ctx.textAlign='center';ctx.fillText(grade,300,360);
  ctx.fillStyle='#9ca3af';ctx.font='10px sans-serif';ctx.fillText('음역 등급',300,375);
 }
 drawRange();
 var btnWrap=document.createElement('div');btnWrap.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:12px;flex-wrap:wrap';
 var trainBtn=document.createElement('button');trainBtn.textContent='▶ 훈련 수행';
 trainBtn.style.cssText='background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;padding:10px 20px;border-radius:10px;font-size:.88em;cursor:pointer;font-weight:bold';
 trainBtn.onclick=function(){
  var ex=exercises[currentEx];
  if(ex.target==='low'&&lowIdx>0){lowIdx=Math.max(0,lowIdx-ex.semitones);rangeData.lowNote=noteNames[lowIdx];}
  if(ex.target==='high'&&highIdx<noteNames.length-1){highIdx=Math.min(noteNames.length-1,highIdx+ex.semitones);rangeData.highNote=noteNames[highIdx];}
  rangeData.sessions++;ls18s('range',rangeData);sfx18('rangeDone');
  currentEx=(currentEx+1)%exercises.length;drawRange();
  var ac=getAC18();if(ac){var osc=ac.createOscillator(),gn=ac.createGain();osc.connect(gn);gn.connect(ac.destination);osc.type='sine';var baseF=130.81*Math.pow(2,(ex.target==='low'?lowIdx:highIdx)/12);osc.frequency.setValueAtTime(baseF,ac.currentTime);gn.gain.setValueAtTime(.18,ac.currentTime);gn.gain.linearRampToValueAtTime(0,ac.currentTime+.6);osc.start(ac.currentTime);osc.stop(ac.currentTime+.6);}
 };
 var lowBtn=document.createElement('button');lowBtn.textContent='▼ 저음 -1';
 lowBtn.style.cssText='background:rgba(59,130,246,.2);color:#60a5fa;border:1px solid rgba(59,130,246,.3);padding:8px 14px;border-radius:8px;font-size:.82em;cursor:pointer';
 lowBtn.onclick=function(){if(lowIdx>0){lowIdx--;rangeData.lowNote=noteNames[lowIdx];ls18s('range',rangeData);drawRange();}};
 var highBtn=document.createElement('button');highBtn.textContent='▲ 고음 +1';
 highBtn.style.cssText='background:rgba(239,68,68,.2);color:#f87171;border:1px solid rgba(239,68,68,.3);padding:8px 14px;border-radius:8px;font-size:.82em;cursor:pointer';
 highBtn.onclick=function(){if(highIdx<noteNames.length-1){highIdx++;rangeData.highNote=noteNames[highIdx];ls18s('range',rangeData);drawRange();}};
 btnWrap.appendChild(lowBtn);btnWrap.appendChild(trainBtn);btnWrap.appendChild(highBtn);
 wrap.appendChild(btnWrap);
 v18M('v18-range','🎵 음역대 확장 트레이너',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 2: Vocal Balance Checker 6-axis Canvas
   StarMaker 벤치마크: 호흡/발성/공명 균형 분석 부재
   ══════════════════════════════════════════════════ */
var balanceData=ls18('balance',{breath:55,onset:60,resonance:50,support:65,release:48,posture:58,checks:0});
function openBalanceChecker(){
 sfx18('balanceCheck');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=540;cvs.height=460;
 cvs.style.cssText='width:100%;max-width:540px;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var axes=[{key:'breath',label:'호흡',tip:'복식호흡 깊이'},{key:'onset',label:'발성 시작',tip:'깨끗한 어택'},{key:'resonance',label:'공명',tip:'비강/흉강 울림'},{key:'support',label:'지지력',tip:'횡격막 지지'},{key:'release',label:'마무리',tip:'음 끝처리'},{key:'posture',label:'자세',tip:'목/어깨/턱 정렬'}];
 var ctx=cvs.getContext('2d');
 function drawBalance(){
  ctx.clearRect(0,0,540,460);ctx.fillStyle='#080616';ctx.fillRect(0,0,540,460);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎯 보컬 밸런스 체커',270,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('체크 '+balanceData.checks+'회 | 균형 상태 분석',270,40);
  var cx=270,cy=230,r=130;
  for(var lv=1;lv<=5;lv++){ctx.beginPath();ctx.strokeStyle='rgba(168,85,247,'+(lv===5?.3:.08)+')';ctx.lineWidth=1;var lr=r*lv/5;for(var a=0;a<6;a++){var ang=Math.PI*2*a/6-Math.PI/2;var px=cx+lr*Math.cos(ang),py=cy+lr*Math.sin(ang);if(a===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}ctx.closePath();ctx.stroke();}
  for(var a=0;a<6;a++){var ang=Math.PI*2*a/6-Math.PI/2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));ctx.strokeStyle='rgba(168,85,247,.12)';ctx.stroke();}
  ctx.beginPath();ctx.fillStyle='rgba(34,197,94,.15)';ctx.strokeStyle='#22c55e';ctx.lineWidth=2.5;
  axes.forEach(function(ax,i){var ang=Math.PI*2*i/6-Math.PI/2;var val=balanceData[ax.key]/100;var px=cx+r*val*Math.cos(ang),py=cy+r*val*Math.sin(ang);if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);});
  ctx.closePath();ctx.fill();ctx.stroke();
  axes.forEach(function(ax,i){var ang=Math.PI*2*i/6-Math.PI/2;var lx=cx+(r+30)*Math.cos(ang),ly=cy+(r+30)*Math.sin(ang);ctx.fillStyle='#e0d0ff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(ax.label,lx,ly);ctx.fillStyle='#22c55e';ctx.font='10px sans-serif';ctx.fillText(balanceData[ax.key],lx,ly+14);ctx.fillStyle='#6b7280';ctx.font='8px sans-serif';ctx.fillText(ax.tip,lx,ly+26);});
  var avg=Math.round(axes.reduce(function(s,a){return s+balanceData[a.key];},0)/6);
  var vals=axes.map(function(a){return balanceData[a.key];});
  var maxV=Math.max.apply(null,vals),minV=Math.min.apply(null,vals);
  var uniformity=100-Math.round((maxV-minV)*1.5);if(uniformity<0)uniformity=0;
  ctx.fillStyle=uniformity>=80?'#22c55e':uniformity>=60?'#eab308':'#ef4444';
  ctx.font='bold 18px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(avg,cx,cy-8);
  ctx.fillStyle='#9ca3af';ctx.font='10px sans-serif';ctx.fillText('균형도 '+uniformity+'%',cx,cy+10);
  var weakest=axes.reduce(function(w,a){return balanceData[a.key]<balanceData[w.key]?a:w;},axes[0]);
  ctx.fillStyle='#ef4444';ctx.font='11px sans-serif';ctx.textAlign='center';
  ctx.fillText('⚠ 약점: '+weakest.label+' ('+balanceData[weakest.key]+')',270,440);
 }
 drawBalance();
 var sliderWrap=document.createElement('div');sliderWrap.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px';
 axes.forEach(function(ax){
  var row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:5px';
  var lbl=document.createElement('span');lbl.textContent=ax.label;lbl.style.cssText='color:#22c55e;font-size:.78em;min-width:55px';
  var sl=document.createElement('input');sl.type='range';sl.min=0;sl.max=100;sl.value=balanceData[ax.key];sl.style.cssText='flex:1;accent-color:#22c55e';
  sl.oninput=function(){balanceData[ax.key]=parseInt(sl.value);balanceData.checks++;ls18s('balance',balanceData);drawBalance();};
  row.appendChild(lbl);row.appendChild(sl);sliderWrap.appendChild(row);
 });
 wrap.appendChild(sliderWrap);
 v18M('v18-balance','🎯 보컬 밸런스 체커',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 3: Singer Style Challenge Canvas
   StarMaker 벤치마크: 원곡 가수 스타일 따라부르기 기능 없음
   ══════════════════════════════════════════════════ */
var styleData=ls18('style',{challenges:0,bestScores:{},unlocked:[]});
function openStyleChallenge(){
 sfx18('styleLock');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=400;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var artists=[
  {id:'iu',name:'IU',style:'무기력+감성',traits:{pitch:92,emotion:95,vibrato:70,power:65,breath:85,rhythm:88},color:'#ec4899'},
  {id:'naul',name:'나얼',style:'애드리브+두성',traits:{pitch:95,emotion:90,vibrato:88,power:72,breath:90,rhythm:85},color:'#f59e0b'},
  {id:'bigbang',name:'G-DRAGON',style:'랏핑+퍼포먼스',traits:{pitch:70,emotion:80,vibrato:55,power:88,breath:75,rhythm:95},color:'#ef4444'},
  {id:'ailee',name:'Ailee',style:'파워+벨팅',traits:{pitch:90,emotion:85,vibrato:82,power:98,breath:88,rhythm:85},color:'#3b82f6'},
  {id:'bts',name:'BTS 정국',style:'감성+페이크',traits:{pitch:88,emotion:92,vibrato:75,power:70,breath:80,rhythm:90},color:'#8b5cf6'},
  {id:'taeyeon',name:'태연',style:'청아+안정',traits:{pitch:94,emotion:88,vibrato:85,power:78,breath:92,rhythm:86},color:'#06b6d4'},
  {id:'leehi',name:'이하이',style:'디바+음색',traits:{pitch:88,emotion:90,vibrato:72,power:75,breath:85,rhythm:92},color:'#10b981'},
  {id:'lim',name:'임영웅',style:'트로트+호소력',traits:{pitch:85,emotion:95,vibrato:80,power:90,breath:88,rhythm:82},color:'#f97316'}
 ];
 var ctx=cvs.getContext('2d');var selectedArtist=null;
 function drawStyle(){
  ctx.clearRect(0,0,600,400);ctx.fillStyle='#080616';ctx.fillRect(0,0,600,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎤 가수 스타일 따라부르기 챌린지',300,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('총 '+styleData.challenges+'회 도전',300,40);
  if(!selectedArtist){
   var cols=4,bw=130,bh=70,startX=20,startY=55;
   artists.forEach(function(a,i){
    var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+10),y=startY+row*(bh+12);
    var best=styleData.bestScores[a.id]||0;
    ctx.fillStyle='rgba(40,30,70,.5)';ctx.beginPath();ctx.roundRect(x,y,bw,bh,10);ctx.fill();
    ctx.strokeStyle=a.color+'88';ctx.lineWidth=1.5;ctx.stroke();
    ctx.fillStyle=a.color;ctx.font='bold 13px sans-serif';ctx.textAlign='center';ctx.fillText(a.name,x+bw/2,y+25);
    ctx.fillStyle='#9ca3af';ctx.font='9px sans-serif';ctx.fillText(a.style,x+bw/2,y+42);
    if(best>0){ctx.fillStyle='#22c55e';ctx.font='bold 10px sans-serif';ctx.fillText('베스트 '+best+'점',x+bw/2,y+58);}
   });
   ctx.fillStyle='#6b7280';ctx.font='11px sans-serif';ctx.textAlign='center';
   ctx.fillText('가수를 클릭하여 챌린지를 시작하세요',300,230);
  }else{
   ctx.fillStyle=selectedArtist.color;ctx.font='bold 16px sans-serif';ctx.textAlign='center';
   ctx.fillText(selectedArtist.name+' 스타일 분석',300,60);
   ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';ctx.fillText('스타일: '+selectedArtist.style,300,78);
   var traitKeys=Object.keys(selectedArtist.traits);var barY=95,barH=36;
   var labels={pitch:'음정',emotion:'감성',vibrato:'비브라토',power:'성량',breath:'호흡',rhythm:'리듬'};
   traitKeys.forEach(function(k,i){
    var y=barY+i*barH;var val=selectedArtist.traits[k];
    ctx.fillStyle='#e0d0ff';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText(labels[k]||k,30,y+15);
    ctx.fillStyle='rgba(100,80,140,.25)';ctx.beginPath();ctx.roundRect(100,y+4,400,16,8);ctx.fill();
    ctx.fillStyle=selectedArtist.color;ctx.beginPath();ctx.roundRect(100,y+4,400*(val/100),16,8);ctx.fill();
    ctx.fillStyle='#e0d0ff';ctx.font='bold 11px sans-serif';ctx.textAlign='right';ctx.fillText(val,520,y+16);
   });
   var myScore=Math.floor(Math.random()*25)+70;
   ctx.fillStyle='rgba(168,85,247,.1)';ctx.beginPath();ctx.roundRect(100,barY+traitKeys.length*barH+10,400,40,10);ctx.fill();
   ctx.fillStyle=selectedArtist.color;ctx.font='bold 18px sans-serif';ctx.textAlign='center';
   ctx.fillText('유사도: '+myScore+'%',300,barY+traitKeys.length*barH+36);
   var grade=myScore>=90?'S':myScore>=80?'A':myScore>=70?'B':'C';
   ctx.fillStyle=grade==='S'?'#fbbf24':grade==='A'?'#22c55e':'#3b82f6';
   ctx.font='bold 32px sans-serif';ctx.fillText(grade,300,380);
  }
 }
 drawStyle();
 cvs.addEventListener('click',function(ev){
  var rect=cvs.getBoundingClientRect();var sx=600/rect.width,sy=400/rect.height;
  var mx=(ev.clientX-rect.left)*sx,my=(ev.clientY-rect.top)*sy;
  if(!selectedArtist){
   var cols=4,bw=130,bh=70,startX=20,startY=55;
   artists.forEach(function(a,i){
    var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+10),y=startY+row*(bh+12);
    if(mx>=x&&mx<=x+bw&&my>=y&&my<=y+bh){
     selectedArtist=a;styleData.challenges++;
     var sc=Math.floor(Math.random()*25)+70;
     if(!styleData.bestScores[a.id]||sc>styleData.bestScores[a.id])styleData.bestScores[a.id]=sc;
     ls18s('style',styleData);sfx18('styleLock');drawStyle();
    }
   });
  }
 });
 var backBtn=document.createElement('button');backBtn.textContent='◀ 목록으로';
 backBtn.style.cssText='display:block;margin:10px auto 0;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);padding:8px 18px;border-radius:8px;font-size:.85em;cursor:pointer';
 backBtn.onclick=function(){selectedArtist=null;drawStyle();};
 wrap.appendChild(backBtn);
 v18M('v18-style','🎤 가수 스타일 챌린지',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 4: DJ Setlist Manager Canvas
   StarMaker 벤치마크: 자동 셋리스트/크로스페이드 기능 없음
   ══════════════════════════════════════════════════ */
var djData=ls18('dj',{setlists:[],totalSets:0});
function openDJSetlist(){
 sfx18('djTransition');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=380;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var currentSet=ls18('djCurrent',[]);
 var allSongs=window.songs||v18Songs;
 var ctx=cvs.getContext('2d');
 function drawDJ(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#080616';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎵 DJ 셋리스트 매니저',300,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('총 '+djData.totalSets+'회 셋리스트 생성 | 현재 '+currentSet.length+'/10곡',300,40);
  if(currentSet.length===0){
   ctx.fillStyle='#6b7280';ctx.font='12px sans-serif';ctx.textAlign='center';
   ctx.fillText('“랜덤 생성” 버튼으로 셋리스트를 만드세요',300,120);
   ctx.fillStyle='rgba(168,85,247,.08)';ctx.beginPath();ctx.roundRect(150,140,300,180,12);ctx.fill();
   ctx.fillStyle='#6b7280';ctx.font='11px sans-serif';
   var tips=['팅 1: BPM 비슷한 곡을 연결','팅 2: 장르 교차 배치','팅 3: 감성곡→신나는곡 흐름','팅 4: 키 친화적 전환','팅 5: 마지막은 밸라드로'];
   tips.forEach(function(tip,i){ctx.fillText(tip,300,165+i*28);});
  }else{
   var slotH=30,startY=55;
   currentSet.forEach(function(song,i){
    var y=startY+i*slotH;
    ctx.fillStyle=i%2?'rgba(40,30,70,.3)':'rgba(50,35,80,.3)';
    ctx.beginPath();ctx.roundRect(20,y,560,26,6);ctx.fill();
    ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
    ctx.fillText((i+1)+'.',30,y+17);
    ctx.fillStyle='#e0d0ff';ctx.font='12px sans-serif';
    ctx.fillText(song.title+' - '+song.artist,55,y+17);
    ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.textAlign='right';
    var genreLabel=song.genre||'pop';
    ctx.fillText(song.bpm+'BPM | '+song.key+' | '+genreLabel,570,y+17);
    if(i>0){
     var bpmDiff=Math.abs(song.bpm-currentSet[i-1].bpm);
     var transColor=bpmDiff<=10?'#22c55e':bpmDiff<=20?'#eab308':'#ef4444';
     ctx.fillStyle=transColor;ctx.font='8px sans-serif';ctx.textAlign='left';
     ctx.fillText('▸Δ'+bpmDiff+'BPM',30,y-2);
    }
   });
   var totalDur=currentSet.reduce(function(s,c){return s+(c.duration?c.duration.reduce(function(a,b){return a+b;},0)/1000:60);},0);
   ctx.fillStyle='#9ca3af';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText('총 예상 시간: '+Math.round(totalDur/60)+'분',300,startY+currentSet.length*slotH+20);
  }
 }
 drawDJ();
 var btnWrap=document.createElement('div');btnWrap.style.cssText='display:flex;gap:8px;justify-content:center;margin-top:10px;flex-wrap:wrap';
 var randBtn=document.createElement('button');randBtn.textContent='🎲 랜덤 생성';
 randBtn.style.cssText='background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;padding:9px 18px;border-radius:10px;font-size:.85em;cursor:pointer;font-weight:bold';
 randBtn.onclick=function(){
  var pool=allSongs.slice();currentSet=[];
  for(var i=0;i<10&&pool.length>0;i++){var idx=Math.floor(Math.random()*pool.length);currentSet.push(pool.splice(idx,1)[0]);}
  currentSet.sort(function(a,b){return a.bpm-b.bpm;});
  djData.totalSets++;ls18s('dj',djData);ls18s('djCurrent',currentSet);sfx18('djTransition');drawDJ();
 };
 var shuffleBtn=document.createElement('button');shuffleBtn.textContent='🔀 셔플';
 shuffleBtn.style.cssText='background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);padding:9px 16px;border-radius:10px;font-size:.85em;cursor:pointer';
 shuffleBtn.onclick=function(){
  for(var i=currentSet.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=currentSet[i];currentSet[i]=currentSet[j];currentSet[j]=tmp;}
  ls18s('djCurrent',currentSet);drawDJ();
 };
 var clearBtn=document.createElement('button');clearBtn.textContent='🗑 초기화';
 clearBtn.style.cssText='background:rgba(239,68,68,.1);color:#f87171;border:1px solid rgba(239,68,68,.2);padding:9px 16px;border-radius:10px;font-size:.85em;cursor:pointer';
 clearBtn.onclick=function(){currentSet=[];ls18s('djCurrent',currentSet);drawDJ();};
 btnWrap.appendChild(randBtn);btnWrap.appendChild(shuffleBtn);btnWrap.appendChild(clearBtn);
 wrap.appendChild(btnWrap);
 v18M('v18-dj','🎵 DJ 셋리스트 매니저',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 5: Mic Technique Guide Canvas
   StarMaker 벤치마크: 마이크 사용법 가이드 없음
   ══════════════════════════════════════════════════ */
var micData=ls18('mic',{tipsRead:0,mastered:{}});
function openMicGuide(){
 sfx18('micTip');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=580;cvs.height=380;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var tips=[
  {id:'distance',name:'거리 유지',desc:'입과 마이크 간 5-10cm 유지',detail:'프록시미티 이펙트 방지. 저음에서 저음 부풀림 방지',icon:'📏'},
  {id:'angle',name:'각도',desc:'마이크를 45도 각도로 잡기',detail:'파열음(p/b/t) 방지. 직접 불어넣지 않기',icon:'📐'},
  {id:'grip',name:'그립',desc:'마이크 중간부 가볍게 잡기',detail:'마이크 헤드나 그리트 부분 잡지 않기',icon:'✋'},
  {id:'plosive',name:'파열음 처리',desc:'ㅂ/ㅃ/ㅇ 발음 시 약간 비껴 부르기',detail:'파파금기 요령: p/b 음절에서 살짝 측면으로',icon:'💨'},
  {id:'dynamics',name:'다이나믹스',desc:'큰 소리에서 마이크 멀리 이동',detail:'벨팅/고음 시 마이크 거리 15cm+로',icon:'📈'},
  {id:'feedback',name:'피드백 방지',desc:'스피커 정면으로 마이크 향하지 않기',detail:'하울링 방지. 모니터 스피커 위치 확인',icon:'🔊'},
  {id:'warmup',name:'마이크 워밍업',desc:'노래 전 마이크 테스트 반드시',detail:'게인/볼륨 확인, 배터리 체크, 음질 테스트',icon:'🎤'},
  {id:'breath',name:'호흡 소음',desc:'숨소리가 마이크에 들어가지 않게',detail:'호흡 시 마이크를 아래로 살짝 내리기',icon:'💨'}
 ];
 var ctx=cvs.getContext('2d');var selectedTip=null;
 function drawMic(){
  ctx.clearRect(0,0,580,380);ctx.fillStyle='#080616';ctx.fillRect(0,0,580,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎤 마이크 테크닉 가이드',290,22);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText('읽은 팁: '+micData.tipsRead+'개 | 마스터: '+Object.keys(micData.mastered).length+'/'+tips.length,290,40);
  if(!selectedTip){
   var cols=2,bw=260,bh=35,startX=20,startY=55;
   tips.forEach(function(tip,i){
    var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+20),y=startY+row*(bh+8);
    var mastered=micData.mastered[tip.id];
    ctx.fillStyle=mastered?'rgba(34,197,94,.1)':'rgba(40,30,70,.4)';ctx.beginPath();ctx.roundRect(x,y,bw,bh,8);ctx.fill();
    ctx.strokeStyle=mastered?'#22c55e':'rgba(168,85,247,.2)';ctx.lineWidth=1;ctx.stroke();
    ctx.fillStyle='#e0d0ff';ctx.font='12px sans-serif';ctx.textAlign='left';
    ctx.fillText(tip.icon+' '+tip.name,x+10,y+15);
    ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.fillText(tip.desc,x+10,y+28);
    if(mastered){ctx.fillStyle='#22c55e';ctx.font='bold 10px sans-serif';ctx.textAlign='right';ctx.fillText('✓',x+bw-10,y+20);}
   });
  }else{
   ctx.fillStyle='rgba(168,85,247,.1)';ctx.beginPath();ctx.roundRect(30,55,520,260,12);ctx.fill();
   ctx.fillStyle='#e0d0ff';ctx.font='bold 24px sans-serif';ctx.textAlign='center';ctx.fillText(selectedTip.icon,290,90);
   ctx.fillStyle='#c084fc';ctx.font='bold 16px sans-serif';ctx.fillText(selectedTip.name,290,120);
   ctx.fillStyle='#e0d0ff';ctx.font='13px sans-serif';ctx.fillText(selectedTip.desc,290,148);
   ctx.fillStyle='#9ca3af';ctx.font='12px sans-serif';
   var words=selectedTip.detail.split('');var line='',ly=180;
   for(var w=0;w<words.length;w++){
    if(line.length>35&&words[w]==='.'){ctx.fillText(line+words[w],290,ly);line='';ly+=20;}
    else line+=words[w];
   }
   if(line)ctx.fillText(line,290,ly);
   ctx.fillStyle='#22c55e';ctx.font='bold 12px sans-serif';
   ctx.fillText(micData.mastered[selectedTip.id]?'✅ 마스터됨':'클릭하여 마스터 표시',290,300);
  }
 }
 drawMic();
 cvs.addEventListener('click',function(ev){
  var rect=cvs.getBoundingClientRect();var sx=580/rect.width,sy=380/rect.height;
  var mx=(ev.clientX-rect.left)*sx,my=(ev.clientY-rect.top)*sy;
  if(!selectedTip){
   var cols=2,bw=260,bh=35,startX=20,startY=55;
   tips.forEach(function(tip,i){
    var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+20),y=startY+row*(bh+8);
    if(mx>=x&&mx<=x+bw&&my>=y&&my<=y+bh){selectedTip=tip;micData.tipsRead++;ls18s('mic',micData);sfx18('micTip');drawMic();}
   });
  }else{
   if(my>=270&&my<=320){micData.mastered[selectedTip.id]=true;ls18s('mic',micData);sfx18('conditionGood');drawMic();}
  }
 });
 var backBtn=document.createElement('button');backBtn.textContent='◀ 목록';
 backBtn.style.cssText='display:block;margin:10px auto 0;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);padding:8px 18px;border-radius:8px;font-size:.85em;cursor:pointer';
 backBtn.onclick=function(){selectedTip=null;drawMic();};
 wrap.appendChild(backBtn);
 v18M('v18-mic','🎤 마이크 테크닉 가이드',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 6: Vocal Condition Checklist Canvas
   StarMaker 벤치마크: 보컬 컨디션 사전 점검 기능 없음
   ══════════════════════════════════════════════════ */
var condData=ls18('condition',{checks:0,history:[]});
function openConditionCheck(){
 sfx18('conditionGood');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=580;cvs.height=420;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var items=[
  {id:'sleep',name:'수면',desc:'7시간+ 수면',checked:false,category:'신체'},
  {id:'water',name:'수분 섭취',desc:'미지근한 물 500ml+',checked:false,category:'신체'},
  {id:'throat',name:'목 상태',desc:'통증/건조함 없음',checked:false,category:'신체'},
  {id:'warmup',name:'워밍업',desc:'보컬 워밍업 완료',checked:false,category:'준비'},
  {id:'stretch',name:'스트레칭',desc:'목/어깨/턱 스트레칭',checked:false,category:'준비'},
  {id:'breathing',name:'호흡 점검',desc:'복식호흡 3회 연습',checked:false,category:'준비'},
  {id:'caffeine',name:'카페인 회피',desc:'커피/탄산 2시간 전 중단',checked:false,category:'주의'},
  {id:'dairy',name:'유제품 회피',desc:'우유/치즈 1시간 전 중단',checked:false,category:'주의'},
  {id:'posture',name:'자세 점검',desc:'바른 자세로 노래할 준비',checked:false,category:'준비'},
  {id:'mic',name:'마이크 테스트',desc:'마이크 음량/위치 확인',checked:false,category:'장비'},
  {id:'mood',name:'멘탈 준비',desc:'긴장 완화, 자신감',checked:false,category:'멘탈'},
  {id:'song',name:'곡 선택',desc:'오늘 컨디션에 맞는 곡',checked:false,category:'선곡'}
 ];
 var ctx=cvs.getContext('2d');
 function drawCondition(){
  ctx.clearRect(0,0,580,420);ctx.fillStyle='#080616';ctx.fillRect(0,0,580,420);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('✅ 보컬 컨디션 체크리스트',290,22);
  var checked=items.filter(function(it){return it.checked;}).length;
  var pct=Math.round(checked/items.length*100);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';
  ctx.fillText(checked+'/'+items.length+' 완료 ('+pct+'%) | 총 '+condData.checks+'회 체크',290,40);
  ctx.fillStyle='rgba(100,80,140,.2)';ctx.beginPath();ctx.roundRect(20,48,540,10,5);ctx.fill();
  ctx.fillStyle=pct>=80?'#22c55e':pct>=50?'#eab308':'#ef4444';ctx.beginPath();ctx.roundRect(20,48,540*(pct/100),10,5);ctx.fill();
  var catColors={'신체':'#3b82f6','준비':'#22c55e','주의':'#f59e0b','장비':'#8b5cf6','멘탈':'#ec4899','선곡':'#06b6d4'};
  var itemH=27,startY=68;
  items.forEach(function(it,i){
   var y=startY+i*itemH;
   ctx.fillStyle=it.checked?'rgba(34,197,94,.08)':'rgba(40,30,70,.3)';
   ctx.beginPath();ctx.roundRect(20,y,540,23,6);ctx.fill();
   ctx.strokeStyle=it.checked?'rgba(34,197,94,.3)':'rgba(100,80,140,.15)';ctx.lineWidth=1;ctx.stroke();
   ctx.fillStyle=it.checked?'#22c55e':'#6b7280';ctx.font='12px sans-serif';ctx.textAlign='left';
   ctx.fillText(it.checked?'☑':'☐',30,y+16);
   ctx.fillStyle=it.checked?'#e0d0ff':'#9ca3af';ctx.font=(it.checked?'':'')+'12px sans-serif';
   ctx.fillText(it.name,52,y+16);
   ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.fillText(it.desc,160,y+16);
   ctx.fillStyle=catColors[it.category]||'#6b7280';ctx.font='9px sans-serif';ctx.textAlign='right';ctx.fillText(it.category,555,y+16);
  });
  var grade=pct>=90?'S':pct>=75?'A':pct>=60?'B':pct>=40?'C':'D';
  var msg=pct>=90?'완벽한 컨디션!':pct>=75?'좋은 컨디션':pct>=50?'보통 컨디션':'준비 부족';
  var gCol=grade==='S'?'#fbbf24':grade==='A'?'#22c55e':grade==='B'?'#3b82f6':'#ef4444';
  ctx.fillStyle=gCol;ctx.font='bold 16px sans-serif';ctx.textAlign='center';ctx.fillText(grade+' - '+msg,290,405);
 }
 drawCondition();
 cvs.addEventListener('click',function(ev){
  var rect=cvs.getBoundingClientRect();var sx=580/rect.width,sy=420/rect.height;
  var mx=(ev.clientX-rect.left)*sx,my=(ev.clientY-rect.top)*sy;
  var itemH=27,startY=68;
  items.forEach(function(it,i){
   var y=startY+i*itemH;
   if(mx>=20&&mx<=560&&my>=y&&my<=y+23){
    it.checked=!it.checked;
    if(it.checked){condData.checks++;ls18s('condition',condData);sfx18('conditionGood');}
    drawCondition();
   }
  });
 });
 v18M('v18-condition','✅ 보컬 컨디션 체크리스트',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 7: Genre Mastery Tree Canvas
   StarMaker 벤치마크: 장르별 숙련도 추적 시스템 없음
   ══════════════════════════════════════════════════ */
var genreData=ls18('genreTree',{xp:{},mastery:{}});
function openGenreTree(){
 sfx18('genreMaster');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=420;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var genres=[
  {id:'ballad',name:'발라드',icon:'🌙',skills:['감성 전달','호흡 지속력','비브라토']},
  {id:'pop',name:'K-POP',icon:'🌟',skills:['리듬 정확도','안무 싱크','무대 매너']},
  {id:'dance',name:'댄스',icon:'💃',skills:['템포 유지','체력','퍼포먼스']},
  {id:'hiphop',name:'힌힩/랩',icon:'🎤',skills:['플로우','라임','딱션']},
  {id:'rock',name:'록',icon:'🤘',skills:['성량','벨팅','그로울링']},
  {id:'rnb',name:'R&B/소울',icon:'🎵',skills:['맰리즘','페이크','애드리브']},
  {id:'trot',name:'트로트',icon:'🎶',skills:['음색','꺼껼름','호소력']},
  {id:'indie',name:'인디/포크',icon:'🌿',skills:['분위기','자연스러움','서정']},
  {id:'musical',name:'뮤지컬',icon:'🎭',skills:['발성','연기','표현력']},
  {id:'jazz',name:'재즈',icon:'🎷',skills:['스켓','스윙','즉흥']}
 ];
 var ctx=cvs.getContext('2d');
 function drawGenre(){
  ctx.clearRect(0,0,600,420);ctx.fillStyle='#080616';ctx.fillRect(0,0,600,420);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('🌳 장르 마스터리 트리',300,22);
  var totalXP=Object.keys(genreData.xp).reduce(function(s,k){return s+genreData.xp[k];},0);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';ctx.fillText('총 XP: '+totalXP+' | 마스터: '+Object.keys(genreData.mastery).filter(function(k){return genreData.mastery[k];}).length+'/'+genres.length,300,40);
  var cols=2,bw=275,bh=65,startX=15,startY=52;
  genres.forEach(function(gen,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+15),y=startY+row*(bh+6);
   var xp=genreData.xp[gen.id]||0;var level=Math.floor(xp/100)+1;if(level>10)level=10;
   var mastered=genreData.mastery[gen.id];
   ctx.fillStyle=mastered?'rgba(34,197,94,.1)':'rgba(40,30,70,.35)';ctx.beginPath();ctx.roundRect(x,y,bw,bh,10);ctx.fill();
   ctx.strokeStyle=mastered?'#22c55e':'rgba(168,85,247,.2)';ctx.lineWidth=mastered?2:1;ctx.stroke();
   ctx.fillStyle='#e0d0ff';ctx.font='16px sans-serif';ctx.textAlign='left';ctx.fillText(gen.icon,x+10,y+25);
   ctx.fillStyle=mastered?'#22c55e':'#e0d0ff';ctx.font='bold 12px sans-serif';ctx.fillText(gen.name,x+32,y+22);
   ctx.fillStyle='#c084fc';ctx.font='10px sans-serif';ctx.fillText('Lv.'+level+' ('+xp+'XP)',x+32,y+38);
   ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.fillText(gen.skills.join(' · '),x+10,y+55);
   var barX=x+130,barY=y+13,barW=bw-145;
   ctx.fillStyle='rgba(100,80,140,.25)';ctx.beginPath();ctx.roundRect(barX,barY,barW,8,4);ctx.fill();
   var pct=Math.min((xp%100)/100,1);if(level>=10)pct=1;
   ctx.fillStyle=mastered?'#22c55e':'#a855f7';ctx.beginPath();ctx.roundRect(barX,barY,barW*pct,8,4);ctx.fill();
  });
 }
 drawGenre();
 cvs.addEventListener('click',function(ev){
  var rect=cvs.getBoundingClientRect();var sx=600/rect.width,sy=420/rect.height;
  var mx=(ev.clientX-rect.left)*sx,my=(ev.clientY-rect.top)*sy;
  var cols=2,bw=275,bh=65,startX=15,startY=52;
  genres.forEach(function(gen,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+15),y=startY+row*(bh+6);
   if(mx>=x&&mx<=x+bw&&my>=y&&my<=y+bh){
    genreData.xp[gen.id]=(genreData.xp[gen.id]||0)+25;
    if(genreData.xp[gen.id]>=900)genreData.mastery[gen.id]=true;
    ls18s('genreTree',genreData);sfx18('genreMaster');drawGenre();
   }
  });
 });
 v18M('v18-genre','🌳 장르 마스터리 트리',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 8: Live Stage Scorecard Canvas PNG
   StarMaker 벤치마크: 종합 무대 스코어카드 공유 기능 없음
   ══════════════════════════════════════════════════ */
var stageData=ls18('stageCard',{generated:0});
function openStageScorecard(){
 sfx18('stageScore');
 var wrap=document.createElement('div');
 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=400;
 cvs.style.cssText='width:100%;background:#080616;border-radius:12px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var archive=[];try{var raw=localStorage.getItem('sv15-perfArchive');if(!raw)raw=localStorage.getItem('sv14-perfArchive');if(raw)archive=JSON.parse(raw);}catch(e){}
 var totalSongs=archive.length;var avgScore=totalSongs?Math.round(archive.reduce(function(s,p){return s+(p.score||0);},0)/totalSongs):0;
 var bestScore=archive.reduce(function(m,p){return Math.max(m,p.score||0);},0);
 var sGrades=archive.filter(function(p){return(p.score||0)>=90;}).length;
 var favGenre='pop';var genreCounts={};archive.forEach(function(p){var g=p.genre||'pop';genreCounts[g]=(genreCounts[g]||0)+1;});
 Object.keys(genreCounts).forEach(function(g){if(genreCounts[g]>(genreCounts[favGenre]||0))favGenre=g;});
 var streak=0;var dates={};archive.forEach(function(p){if(p.date)dates[p.date.slice(0,10)]=true;});
 var today=new Date();for(var d=0;d<365;d++){var dt=new Date(today);dt.setDate(dt.getDate()-d);if(dates[dt.toISOString().slice(0,10)])streak++;else break;}
 var ctx=cvs.getContext('2d');
 function drawCard(){
  var grd=ctx.createLinearGradient(0,0,600,400);grd.addColorStop(0,'#1a0a3e');grd.addColorStop(1,'#0f0a1e');ctx.fillStyle=grd;ctx.fillRect(0,0,600,400);
  ctx.strokeStyle='rgba(192,132,252,.4)';ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(8,8,584,384,16);ctx.stroke();
  ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(16,16,568,368,12);ctx.stroke();
  ctx.fillStyle='#c084fc';ctx.font='bold 18px sans-serif';ctx.textAlign='center';ctx.fillText('⭐ StarVoice 무대 스코어카드 ⭐',300,42);
  var overallGrade=avgScore>=90?'S':avgScore>=80?'A':avgScore>=70?'B':avgScore>=60?'C':'D';
  var gCol=overallGrade==='S'?'#fbbf24':overallGrade==='A'?'#22c55e':overallGrade==='B'?'#3b82f6':overallGrade==='C'?'#f59e0b':'#ef4444';
  ctx.fillStyle=gCol;ctx.font='bold 52px sans-serif';ctx.fillText(overallGrade,300,100);
  ctx.fillStyle='#9ca3af';ctx.font='11px sans-serif';ctx.fillText('종합 등급',300,118);
  var stats=[
   {label:'총 노래',value:totalSongs+'곡',icon:'🎤'},
   {label:'평균 점수',value:avgScore+'점',icon:'📊'},
   {label:'최고 점수',value:bestScore+'점',icon:'🏆'},
   {label:'S등급',value:sGrades+'회',icon:'⭐'},
   {label:'연속 활동',value:streak+'일',icon:'🔥'},
   {label:'선호 장르',value:favGenre,icon:'🎵'}
  ];
  var cols=3,bw=170,bh=65,startX=35,startY=135;
  stats.forEach(function(st,i){
   var col=i%cols,row=Math.floor(i/cols);var x=startX+col*(bw+12),y=startY+row*(bh+10);
   ctx.fillStyle='rgba(100,80,160,.12)';ctx.beginPath();ctx.roundRect(x,y,bw,bh,10);ctx.fill();
   ctx.strokeStyle='rgba(168,85,247,.2)';ctx.lineWidth=1;ctx.stroke();
   ctx.fillStyle='#e0d0ff';ctx.font='18px sans-serif';ctx.textAlign='center';ctx.fillText(st.icon,x+bw/2,y+24);
   ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.fillText(st.value,x+bw/2,y+44);
   ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.fillText(st.label,x+bw/2,y+58);
  });
  ctx.fillStyle='rgba(168,85,247,.1)';ctx.beginPath();ctx.roundRect(35,310,530,35,8);ctx.fill();
  var metrics=['음정','리듬','호흡','감성','비브라토'];
  var mW=530/metrics.length;
  metrics.forEach(function(m,i){
   var x=35+i*mW;var val=Math.floor(Math.random()*30)+65;
   ctx.fillStyle='#e0d0ff';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(m,x+mW/2,310+14);
   ctx.fillStyle='rgba(100,80,140,.3)';ctx.beginPath();ctx.roundRect(x+10,310+18,mW-20,8,4);ctx.fill();
   var barCol=val>=80?'#22c55e':val>=60?'#eab308':'#ef4444';
   ctx.fillStyle=barCol;ctx.beginPath();ctx.roundRect(x+10,310+18,(mW-20)*(val/100),8,4);ctx.fill();
   ctx.fillStyle='#9ca3af';ctx.font='8px sans-serif';ctx.fillText(val,x+mW/2,310+35);
  });
  ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.textAlign='center';
  ctx.fillText('StarVoice v18 — AI 노래방 | Generated '+new Date().toISOString().slice(0,10),300,385);
 }
 drawCard();stageData.generated++;ls18s('stageCard',stageData);
 var dlBtn=document.createElement('button');dlBtn.textContent='📥 PNG 다운로드';
 dlBtn.style.cssText='display:block;margin:12px auto 0;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;padding:10px 22px;border-radius:10px;font-size:.88em;cursor:pointer;font-weight:bold';
 dlBtn.onclick=function(){
  sfx18('cardGenerate');
  var link=document.createElement('a');link.download='starvoice-scorecard.png';link.href=cvs.toDataURL('image/png');link.click();
 };
 wrap.appendChild(dlBtn);
 v18M('v18-stage','⭐ 무대 스코어카드',wrap);
}

/* ── Quiz v18 (+15: 162→177) ── */
var v18Quiz=[
 {q:'음역대 확장 시 가장 중요한 원칙은?',a:['점진적으로 반음씩 확장','한 번에 한 옥타브 점프','변성기 수준으로 내리기','피피 발성만 사용'],c:0},
 {q:'프록시미티 이펙트(Proximity Effect)란?',a:['마이크 가까이 하면 저음이 부풀려지는 현상','고음이 부풀려지는 현상','반향이 뾰여지는 현상','피드백 현상'],c:0},
 {q:'벨팅(Belting) 시 가장 중요한 신체 부위는?',a:['횡격막(Diaphragm)','목 근육','어깨','믵적무'],c:0},
 {q:'K-POP에서 “페이크(Fake)” 발성이란?',a:['흥성과 가성 사이의 경계 음색','립싱크','마이크 이펙트','오토튀 기능'],c:0},
 {q:'음성 위생(Vocal Hygiene)을 위해 하루 권장 수분 섭취량은?',a:['1.5~2리터 미지근한 물','500ml','3리터','100ml'],c:0},
 {q:'노래방에서 프리브러킬(Pre-verb)란?',a:['실제 리버브 전에 적용되는 큐 무음','노래 전 워밍업','마이크 테스트','배경음악 벼런스'],c:0},
 {q:'체스트 보이스(Chest Voice)의 특징은?',a:['흥강에서 공명하는 풀 볼륨 저중음','머리에서 관명하는 고음','코에서 나오는 음색','속삭임 발성'],c:0},
 {q:'파사지오(Passaggio) 구간을 부드럽게 통과하는 방법은?',a:['믹스 보이스 훈련','성대를 강하게 압박','숨을 참고 부르기','키를 낮춰서 부르기'],c:0},
 {q:'노래방 리모컨 반주 속도를 바꾸면?',a:['미세한 변속만 가능(원곡과 동일하지 않음)','음정도 변함','볼륨이 변함','리버브가 변함'],c:0},
 {q:'비브라토(Vibrato)의 이상적인 속도는?',a:['초당 5-7회 진동','초당 1-2회','초당 15-20회','자유로운 속도'],c:0},
 {q:'노래할 때 턱(학) 위치는?',a:['자연스럽게 내려놓은 상태','꽉 물고 부르기','턱을 최대한 앞으로','턱을 앞으로 빼기'],c:0},
 {q:'세트리스트 구성 시 BPM 차이 몇 이하가 자연스럽게 연결되나?',a:['±10 BPM','±30 BPM','±50 BPM','상관없음'],c:0},
 {q:'두성(Head Voice)을 훈련하는 가장 효과적인 방법은?',a:['경쿔하게 “Hoo” 발성으로 상행','큰 소리로 소리지르기','속삭임으로 부르기','목에 힘을 주고 부르기'],c:0},
 {q:'보컬 치료에서 “성대 결절”의 원인은?',a:['성대 과사용/건조/역류','너무 많이 수분 섭취','과도한 수면','비타민 C 과다 복용'],c:0},
 {q:'EQ 설정에서 200-400Hz 대역을 컷하면?',a:['음성의 “먹먹함” 제거','고음 부스트','저음 부스트','리버브 증가'],c:0}
];
(function injectQuiz18(){var tries=0;function attempt(){if(window.quizQuestions&&Array.isArray(window.quizQuestions)){v18Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ── Achievements v18 (+12: 138→150) ── */
var v18Achievements=[
 {id:'range_first',name:'첫 음역 확장',desc:'음역대 확장 처음 수행',icon:'🎵'},
 {id:'range_3oct',name:'3옥타브 돌파',desc:'음역 3옥타브 달성',icon:'🚀'},
 {id:'balance_check',name:'밸런스 체커',desc:'보컬 밸런스 처음 측정',icon:'🎯'},
 {id:'balance_80',name:'밸런스 마스터',desc:'밸런스 전항목 80+',icon:'⚖'},
 {id:'style_3',name:'스타일 3종',desc:'가수 3명 스타일 도전',icon:'🎤'},
 {id:'dj_first',name:'첫 셋리스트',desc:'DJ 셋리스트 처음 생성',icon:'🎵'},
 {id:'mic_master',name:'마이크 마스터',desc:'마이크 팁 전부 마스터',icon:'🎤'},
 {id:'condition_perfect',name:'컨디션 퍼펙트',desc:'체크리스트 12/12 완료',icon:'✅'},
 {id:'genre_3',name:'장르 3종 마스터',desc:'3개 장르 마스터리',icon:'🌳'},
 {id:'stage_card',name:'스코어카드 발급',desc:'무대 스코어카드 생성',icon:'⭐'},
 {id:'v18_quiz_perfect',name:'퀴즈 v18 만점',desc:'v18 퀴즈 15문 전부 정답',icon:'💡'},
 {id:'v18_explorer',name:'v18 탐험가',desc:'v18 모든 기능 체험',icon:'🚀'}
];
(function injectAchieve18(){var tries=0;function attempt(){if(window.achievements&&Array.isArray(window.achievements)){v18Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ── Keyboard Shortcuts (Shift+A/S/D/F/G/H/J/K) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 switch(e.key){case 'A':case 'a':e.preventDefault();openRangeExpander();break;case 'S':case 's':e.preventDefault();openBalanceChecker();break;case 'D':case 'd':e.preventDefault();openStyleChallenge();break;case 'F':case 'f':e.preventDefault();openDJSetlist();break;case 'G':case 'g':e.preventDefault();openMicGuide();break;case 'H':case 'h':e.preventDefault();openConditionCheck();break;case 'J':case 'j':e.preventDefault();openGenreTree();break;case 'K':case 'k':e.preventDefault();openStageScorecard();break;}
});

/* ── Bottom Navigation Bar (9 buttons) ── */
(function addNav18(){
 function inject(){
  if(document.getElementById('v18-nav'))return;
  var nav=document.createElement('div');nav.id='v18-nav';
  nav.style.cssText='position:fixed;bottom:0;left:0;right:0;z-index:9991;background:linear-gradient(180deg,transparent,rgba(15,10,30,.97) 20%);padding:8px 4px 12px;display:flex;justify-content:center;gap:3px;flex-wrap:wrap;backdrop-filter:blur(8px)';
  var btns=[
   {label:'🎵음역',fn:openRangeExpander},{label:'🎯밸런스',fn:openBalanceChecker},
   {label:'🎤스타일',fn:openStyleChallenge},{label:'🎵DJ',fn:openDJSetlist},
   {label:'🎤마이크',fn:openMicGuide},{label:'✅컨디션',fn:openConditionCheck},
   {label:'🌳장르',fn:openGenreTree},{label:'⭐스코어',fn:openStageScorecard}
  ];
  btns.forEach(function(b){
   var btn=document.createElement('button');btn.textContent=b.label;
   btn.style.cssText='background:rgba(100,80,160,.2);color:#c084fc;border:1px solid rgba(168,85,247,.25);border-radius:8px;padding:6px 7px;font-size:.68em;cursor:pointer;white-space:nowrap;transition:all .2s';
   btn.onmouseenter=function(){btn.style.background='rgba(168,85,247,.35)';btn.style.transform='translateY(-2px)';};
   btn.onmouseleave=function(){btn.style.background='rgba(100,80,160,.2)';btn.style.transform='none';};
   btn.onclick=b.fn;nav.appendChild(btn);
  });
  document.body.appendChild(nav);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else setTimeout(inject,600);
})();

})();
