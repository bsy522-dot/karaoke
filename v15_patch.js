/* StarVoice v15 Patch — Self-contained IIFE module injected via SW
 * +10 songs(115->125), VoiceDNA 6-axis Canvas, RhythmArcade Canvas,
 * DuetAIPartner 8types, VocalTechniqueDojo 12tech, LyricsMemoryChallenge,
 * StagePresenceCoach 12tips, VocalHeatmap Canvas, SongRecommendAI,
 * quiz +15(117->132), achievements +12(102->114), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v15KaraokeLoaded) return;
window.__v15KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;

function ls15(k,d){try{var v=localStorage.getItem('sv15-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls15s(k,v){try{localStorage.setItem('sv15-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (116-125) ── */
var v15Songs=[
{id:116,title:'사랑은 늘 도망가',artist:'임영웅',bpm:72,key:'G',difficulty:3,genre:'ballad',
 notes:[G3,B3,D4,G4,Fs4,E4,D4,B3,C4,E4,G4,B4,A4,G4,Fs4,E4],
 lyrics:['사','랑','은','늘','도','망','가','는','것','인','줄','알','면','서','도','나'],
 duration:[650,650,650,1300,650,650,650,650,650,650,650,1300,650,650,650,650]},
{id:117,title:'Super Shy',artist:'NewJeans',bpm:125,key:'F',difficulty:4,genre:'pop',
 notes:[F4,A4,C5,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,Eb4,D4,C4,Bb3],
 lyrics:['Su','per','shy','su','per','shy','but','wait','a','mi','nute','let','me','fix','my','hair'],
 duration:[360,360,360,720,360,360,360,360,360,360,360,720,360,360,360,360]},
{id:118,title:'Ditto',artist:'NewJeans',bpm:100,key:'A',difficulty:3,genre:'pop',
 notes:[A3,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['I','see','your','eyes','I','know','your','face','we','di','tto','di','tto','di','tto','oh'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:119,title:'이태원 클라쓰',artist:'가호',bpm:118,key:'C',difficulty:4,genre:'rock',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['시','작','이','반','이','라','는','말','이','있','잖','아','난','해','볼','거'],
 duration:[380,380,380,760,380,380,380,380,380,380,380,760,380,380,380,380]},
{id:120,title:'첫눈처럼 너에게 가겠다',artist:'에일리',bpm:82,key:'E',difficulty:5,genre:'ballad',
 notes:[E4,Gs4,B4,E5,D5,B4,Gs4,E4,Fs4,A4,Cs5,E5,D5,Cs5,B4,A4],
 lyrics:['첫','눈','처','럼','너','에','게','가','겠','다','그','대','여','내','사','랑'],
 duration:[550,550,550,1100,550,550,550,550,550,550,550,1100,550,550,550,550]},
{id:121,title:'Weekend',artist:'태연',bpm:108,key:'D',difficulty:3,genre:'dance',
 notes:[D4,Fs4,A4,D5,Cs5,A4,Fs4,D4,E4,G4,B4,D5,Cs5,B4,A4,G4],
 lyrics:['Mo','on','day','Tue','sday','마','음','은','벌','써','Week','end','기','다','려','요'],
 duration:[420,420,420,840,420,420,420,420,420,420,420,840,420,420,420,420]},
{id:122,title:'사건의 지평선',artist:'윤하',bpm:90,key:'B',difficulty:4,genre:'pop',
 notes:[B3,D4,Fs4,B4,A4,Fs4,D4,B3,Cs4,E4,Gs4,B4,A4,Gs4,Fs4,E4],
 lyrics:['네','가','없','는','이','세','상','은','아','무','의','미','없','어','서','나'],
 duration:[500,500,500,1000,500,500,500,500,500,500,500,1000,500,500,500,500]},
{id:123,title:'Love Lee',artist:'AKMU',bpm:112,key:'G',difficulty:2,genre:'acoustic',
 notes:[G3,B3,D4,G4,Fs4,E4,D4,B3,C4,E4,G4,B4,A4,G4,Fs4,E4],
 lyrics:['사','랑','에','빠','졌','나','봐','요','그','대','가','좋','아','서','어','쩌'],
 duration:[400,400,400,800,400,400,400,400,400,400,400,800,400,400,400,400]},
{id:124,title:'파이팅 해야지',artist:'보이넥스트도어',bpm:120,key:'C',difficulty:3,genre:'pop',
 notes:[C4,E4,G4,C5,B4,A4,G4,E4,F4,A4,C5,E5,D5,C5,B4,A4],
 lyrics:['파','이','팅','해','야','지','나','는','오','늘','도','파','이','팅','해','야'],
 duration:[380,380,380,760,380,380,380,380,380,380,380,760,380,380,380,380]},
{id:125,title:'꿈결같은 밤',artist:'아이유',bpm:76,key:'D',difficulty:3,genre:'ballad',
 notes:[D4,Fs4,A4,D5,Cs5,A4,Fs4,D4,E4,G4,B4,D5,Cs5,B4,A4,G4],
 lyrics:['꿈','결','같','은','밤','에','나','는','그','대','를','만','나','고','싶','어'],
 duration:[600,600,600,1200,600,600,600,600,600,600,600,1200,600,600,600,600]}
];
(function injectSongs15(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v15Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v15 (12 sounds) ── */
var actx15=null;
function getAC15(){if(!actx15)try{actx15=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx15;}
function sfx15(type){
 var ac=getAC15();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  voiceDNA:{f:520,d:.5,wave:'sine',gS:.2,gE:0},
  rhythmBeat:{f:220,d:.12,wave:'square',gS:.25,gE:0},
  rhythmMiss:{f:150,d:.2,wave:'sawtooth',gS:.15,gE:0},
  duetStart:{f:660,d:.4,wave:'triangle',gS:.25,gE:0},
  duetHarmony:{f:880,d:.6,wave:'sine',gS:.18,gE:0},
  techLearn:{f:440,d:.3,wave:'triangle',gS:.2,gE:0},
  lyricsCorrect:{f:784,d:.15,wave:'sine',gS:.2,gE:0},
  lyricsMiss:{f:196,d:.25,wave:'sawtooth',gS:.12,gE:0},
  stageClap:{f:1200,d:.08,wave:'square',gS:.15,gE:0},
  heatmapGen:{f:600,d:.3,wave:'sine',gS:.15,gE:0},
  recommend:{f:700,d:.25,wave:'triangle',gS:.2,gE:0},
  achieve15:{f:1047,d:.5,wave:'triangle',gS:.3,gE:0}
 };
 var c=cfg[type]||cfg.recommend;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='voiceDNA'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d*0.3);o.frequency.linearRampToValueAtTime(c.f*0.8,t+c.d);}
 if(type==='duetHarmony'){var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=5;lg.gain.value=30;lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);}
 if(type==='stageClap'){
  var noise=ac.createBufferSource();var buf=ac.createBuffer(1,ac.sampleRate*0.05,ac.sampleRate);
  var data=buf.getChannelData(0);for(var i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*0.3;
  noise.buffer=buf;var ng=ac.createGain();ng.gain.setValueAtTime(0.2,t);ng.gain.linearRampToValueAtTime(0,t+0.08);
  noise.connect(ng);ng.connect(ac.destination);noise.start(t);
 }
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper v15 ── */
function v15M(id,title,body){
 var old=document.getElementById(id);if(old)old.remove();
 var ov=document.createElement('div');ov.id=id;
 ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;padding:16px;overflow-y:auto';
 var box=document.createElement('div');
 box.style.cssText='background:linear-gradient(135deg,#1a1030,#0f0a1e);color:#e0d0ff;border-radius:16px;padding:24px;max-width:680px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 8px 32px rgba(168,85,247,.4);border:1px solid rgba(168,85,247,.2)';
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
   Feature 1: Voice DNA Profiler (6-axis Canvas)
   ══════════════════════════════════════════════════ */
var voiceDNAData=ls15('voiceDNA',{warmth:0,clarity:0,power:0,breath:0,resonance:0,range:0,tested:false});
var dnaLabels=['따뜻함','명료도','파워','호흡력','공명','음역'];
var dnaColors=['#ef4444','#f59e0b','#22c55e','#3b82f6','#a855f7','#ec4899'];

function openVoiceDNA(){
 sfx15('voiceDNA');
 var wrap=document.createElement('div');

 var info=document.createElement('div');
 info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='당신의 목소리 특성을 6가지 축으로 분석합니다';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=400;cvs.height=400;
 cvs.style.cssText='width:100%;max-width:400px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 if(!voiceDNAData.tested){
  var hist=[];
  try{var raw=localStorage.getItem('sv12-pitchHist');if(raw)hist=JSON.parse(raw);}catch(e){}
  if(hist.length>=3){
   var recent=hist.slice(-10);
   var avg=recent.reduce(function(a,b){return a+b.score;},0)/recent.length;
   voiceDNAData.warmth=Math.min(100,Math.round(avg*0.9+Math.random()*15));
   voiceDNAData.clarity=Math.min(100,Math.round(avg*1.02+Math.random()*10));
   voiceDNAData.power=Math.min(100,Math.round(avg*0.85+Math.random()*18));
   voiceDNAData.breath=Math.min(100,Math.round(avg*0.88+Math.random()*16));
   voiceDNAData.resonance=Math.min(100,Math.round(avg*0.82+Math.random()*20));
   voiceDNAData.range=Math.min(100,Math.round(avg*0.78+Math.random()*22));
   voiceDNAData.tested=true;
   ls15s('voiceDNA',voiceDNAData);
  }
 }

 var vals=[voiceDNAData.warmth,voiceDNAData.clarity,voiceDNAData.power,voiceDNAData.breath,voiceDNAData.resonance,voiceDNAData.range];
 var totalDNA=voiceDNAData.tested?Math.round(vals.reduce(function(a,b){return a+b;},0)/6):0;

 function drawDNA(){
  var ctx=cvs.getContext('2d'),cx=200,cy=200,r=150;
  ctx.clearRect(0,0,400,400);
  ctx.fillStyle='#0a0818';ctx.fillRect(0,0,400,400);
  for(var lev=1;lev<=6;lev++){
   ctx.beginPath();ctx.strokeStyle='rgba(168,85,247,'+(0.06+lev*0.03)+')';ctx.lineWidth=1;
   for(var j=0;j<6;j++){var angle=-Math.PI/2+j*(Math.PI/3);var px=cx+Math.cos(angle)*(r*lev/6);var py=cy+Math.sin(angle)*(r*lev/6);if(j===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}
   ctx.closePath();ctx.stroke();
  }
  for(var k=0;k<6;k++){var angle=-Math.PI/2+k*(Math.PI/3);ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=1;ctx.stroke();}
  if(voiceDNAData.tested){
   ctx.beginPath();var grad=ctx.createRadialGradient(cx,cy,0,cx,cy,r);grad.addColorStop(0,'rgba(236,72,153,.3)');grad.addColorStop(1,'rgba(168,85,247,.1)');ctx.fillStyle=grad;ctx.strokeStyle='#ec4899';ctx.lineWidth=2.5;
   for(var m=0;m<6;m++){var angle=-Math.PI/2+m*(Math.PI/3);var val=vals[m]/100*r;var px=cx+Math.cos(angle)*val;var py=cy+Math.sin(angle)*val;if(m===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}
   ctx.closePath();ctx.fill();ctx.stroke();
   for(var n=0;n<6;n++){var angle=-Math.PI/2+n*(Math.PI/3);var val=vals[n]/100*r;var px=cx+Math.cos(angle)*val;var py=cy+Math.sin(angle)*val;ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);ctx.fillStyle=dnaColors[n];ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.stroke();}
  }
  ctx.font='bold 12px sans-serif';ctx.textAlign='center';
  for(var p=0;p<6;p++){var angle=-Math.PI/2+p*(Math.PI/3);var lx=cx+Math.cos(angle)*(r+30);var ly=cy+Math.sin(angle)*(r+30);ctx.fillStyle=dnaColors[p];ctx.fillText(dnaLabels[p],lx,ly);if(voiceDNAData.tested){ctx.fillStyle='#fff';ctx.font='bold 13px sans-serif';ctx.fillText(vals[p]+'',lx,ly+15);ctx.font='bold 12px sans-serif';}}
  ctx.font='bold 24px sans-serif';ctx.fillStyle='#ec4899';ctx.textAlign='center';
  ctx.fillText(voiceDNAData.tested?totalDNA+'점':'?',cx,cy+4);
  ctx.font='11px sans-serif';ctx.fillStyle='#a78bfa';
  ctx.fillText(voiceDNAData.tested?'Voice DNA':'데이터 필요',cx,cy+20);
 }
 drawDNA();

 var typeNames={warm:'따뜻한 감성형',clear:'맑은 수정형',power:'파워풀 다이나믹형',balanced:'균형잡힌 올라운더형',breath:'호흡의 달인형',resonant:'풍부한 공명형'};
 var voiceType='balanced';
 if(voiceDNAData.tested){var maxVal=Math.max.apply(null,vals);var maxIdx=vals.indexOf(maxVal);voiceType=['warm','clear','power','breath','resonant','balanced'][maxIdx]||'balanced';}

 var bottomHtml=document.createElement('div');bottomHtml.style.cssText='margin-top:16px';
 if(!voiceDNAData.tested){
  bottomHtml.innerHTML='<div style="text-align:center;padding:20px;background:rgba(245,158,11,.1);border-radius:10px;border:1px solid rgba(245,158,11,.2)"><div style="font-size:1.5em;margin-bottom:6px">⚠️</div><div style="color:#f59e0b;font-size:.9em">3곡 이상 노래를 부른 후 분석 가능합니다</div></div>';
 }else{
  bottomHtml.innerHTML='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px"><div style="background:#312e81;border-radius:10px;padding:14px;text-align:center"><div style="color:#a78bfa;font-size:.8em">보이스 타입</div><div style="color:#ec4899;font-size:1em;font-weight:bold;margin-top:4px">'+typeNames[voiceType]+'</div></div><div style="background:#312e81;border-radius:10px;padding:14px;text-align:center"><div style="color:#a78bfa;font-size:.8em">DNA 등급</div><div style="color:'+(totalDNA>=85?'#fbbf24':totalDNA>=70?'#22c55e':'#3b82f6')+';font-size:1.8em;font-weight:900">'+(totalDNA>=95?'S':totalDNA>=85?'A':totalDNA>=70?'B':totalDNA>=50?'C':'D')+'</div></div></div>';
 }
 wrap.appendChild(bottomHtml);

 var resetBtn=document.createElement('button');resetBtn.textContent='🔄 재분석';
 resetBtn.style.cssText='margin-top:10px;width:100%;padding:10px;background:rgba(168,85,247,.15);border:1px solid rgba(168,85,247,.2);border-radius:8px;color:#a855f7;cursor:pointer;font-size:.85em';
 resetBtn.onclick=function(){voiceDNAData.tested=false;ls15s('voiceDNA',voiceDNAData);openVoiceDNA();};
 wrap.appendChild(resetBtn);
 v15M('v15-dna','🧬 음색 DNA 프로파일러',wrap);
 checkAch15('dna_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 2: Rhythm Training Arcade Canvas
   ══════════════════════════════════════════════════ */
var rhythmPatterns=[
 {name:'기본 4비트',bpm:100,pattern:[1,0,1,0,1,0,1,0],desc:'기초 박자 훈련'},
 {name:'싱코페이션',bpm:110,pattern:[1,0,0,1,0,0,1,0],desc:'여리박 리듬'},
 {name:'셔플',bpm:90,pattern:[1,0,1,0,0,1,0,1],desc:'셔플 패턴 연습'},
 {name:'빠른 8비트',bpm:140,pattern:[1,1,1,1,1,1,1,1],desc:'빠른 박자 대응'},
 {name:'트리플릿',bpm:80,pattern:[1,1,0,1,1,0,1,0],desc:'3연타 패턴'},
 {name:'복합 리듬',bpm:120,pattern:[1,0,1,1,0,1,0,1],desc:'복합 박자 도전'}
];
var rhythmHighScores=ls15('rhythmScores',[0,0,0,0,0,0]);
var rhythmTotalPlays=ls15('rhythmPlays',0);

function openRhythmArcade(){
 sfx15('rhythmBeat');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='박자에 맞춰 탭하세요! 스페이스/클릭으로 비트를 맞춰보세요.';
 wrap.appendChild(info);
 var cvs=document.createElement('canvas');cvs.width=520;cvs.height=280;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:10px;display:block;margin:0 auto';
 wrap.appendChild(cvs);
 var statusDiv=document.createElement('div');statusDiv.style.cssText='margin-top:10px;text-align:center;font-size:1em;color:#c084fc;min-height:28px';
 statusDiv.textContent='패턴을 선택하세요';
 wrap.appendChild(statusDiv);
 var patternsDiv=document.createElement('div');patternsDiv.style.cssText='display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:10px';
 rhythmPatterns.forEach(function(p,i){
  var card=document.createElement('div');
  card.style.cssText='padding:10px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;cursor:pointer;border:1px solid rgba(168,85,247,.2);text-align:center;transition:all .2s';
  card.innerHTML='<div style="color:#c084fc;font-weight:bold;font-size:.85em">'+p.name+'</div><div style="color:#6b7280;font-size:.7em;margin-top:2px">'+p.desc+'</div><div style="color:#fbbf24;font-size:.75em;margin-top:4px">🏆 '+rhythmHighScores[i]+'</div>';
  card.onclick=function(){startRhythmGame(i,cvs,statusDiv);};
  patternsDiv.appendChild(card);
 });
 wrap.appendChild(patternsDiv);
 var statsLine=document.createElement('div');statsLine.style.cssText='margin-top:10px;text-align:center;color:#6b7280;font-size:.8em';
 statsLine.textContent='🎮 총 '+rhythmTotalPlays+'회 플레이';
 wrap.appendChild(statsLine);
 v15M('v15-rhythm','🥁 리듬 트레이닝 아케이드',wrap);
 var ctx=cvs.getContext('2d');ctx.clearRect(0,0,520,280);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,520,280);
 ctx.fillStyle='#a78bfa';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
 ctx.fillText('패턴을 선택하면 리듬 게임이 시작됩니다',260,140);
}

function startRhythmGame(patIdx,cvs,statusDiv){
 var pat=rhythmPatterns[patIdx];var ctx=cvs.getContext('2d');
 var beatInterval=60000/pat.bpm;var beatIdx=0,score=0,combo=0,maxCombo=0;
 var totalBeats=pat.pattern.length*3;var hits=[],gameActive=true;
 var hitHandler=function(){
  if(!gameActive)return;
  var currentBeatInPattern=beatIdx%pat.pattern.length;
  if(pat.pattern[currentBeatInPattern]===1){score+=10+combo*2;combo++;if(combo>maxCombo)maxCombo=combo;hits.push({idx:beatIdx,type:'perfect'});sfx15('rhythmBeat');}
  else{combo=0;hits.push({idx:beatIdx,type:'miss'});sfx15('rhythmMiss');}
 };
 cvs.onclick=hitHandler;
 var spaceHandler=function(e){if(e.code==='Space'&&gameActive){e.preventDefault();hitHandler();}};
 document.addEventListener('keydown',spaceHandler);
 var timer=setInterval(function(){
  if(!gameActive)return;beatIdx++;
  ctx.clearRect(0,0,520,280);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,520,280);
  var progress=beatIdx/totalBeats;ctx.fillStyle='#a855f7';ctx.fillRect(0,0,520*progress,4);
  var laneY=200;ctx.strokeStyle='rgba(168,85,247,.3)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,laneY);ctx.lineTo(520,laneY);ctx.stroke();
  ctx.beginPath();ctx.arc(80,laneY,20,0,Math.PI*2);ctx.strokeStyle='#ec4899';ctx.lineWidth=3;ctx.stroke();
  for(var look=0;look<8;look++){var futureIdx=(beatIdx+look)%pat.pattern.length;if(pat.pattern[futureIdx]===1){var bx=80+look*55;ctx.beginPath();ctx.arc(bx,laneY,14,0,Math.PI*2);ctx.fillStyle=look===0?'#ec4899':'rgba(236,72,153,'+(0.8-look*0.1)+')';ctx.fill();}}
  ctx.fillStyle='#fff';ctx.font='bold 14px sans-serif';ctx.textAlign='left';ctx.fillText('점수: '+score,20,30);
  ctx.fillStyle='#fbbf24';ctx.fillText('콤보: '+combo,20,50);
  ctx.fillStyle='#22c55e';ctx.textAlign='right';ctx.fillText(pat.name,500,30);
  if(combo>=3){ctx.fillStyle='#fbbf24';ctx.font='bold 18px sans-serif';ctx.textAlign='center';ctx.fillText(combo+' COMBO!',260,100);}
  var lastHit=hits[hits.length-1];
  if(lastHit&&beatIdx-lastHit.idx<3){ctx.fillStyle=lastHit.type==='perfect'?'#22c55e':'#ef4444';ctx.font='bold 16px sans-serif';ctx.textAlign='center';ctx.fillText(lastHit.type==='perfect'?'PERFECT!':'MISS',260,140);}
  statusDiv.innerHTML='<span style="color:#ec4899">'+pat.name+'</span> — 점수: <strong>'+score+'</strong> | 콤보: <strong>'+combo+'</strong>';
  if(beatIdx>=totalBeats){
   gameActive=false;clearInterval(timer);cvs.onclick=null;document.removeEventListener('keydown',spaceHandler);
   rhythmTotalPlays++;ls15s('rhythmPlays',rhythmTotalPlays);
   if(score>rhythmHighScores[patIdx]){rhythmHighScores[patIdx]=score;ls15s('rhythmScores',rhythmHighScores);}
   var grade=score>=totalBeats*10?'S':score>=totalBeats*7?'A':score>=totalBeats*5?'B':score>=totalBeats*3?'C':'D';
   ctx.fillStyle='rgba(0,0,0,.7)';ctx.fillRect(0,0,520,280);
   ctx.fillStyle='#fbbf24';ctx.font='bold 28px sans-serif';ctx.textAlign='center';ctx.fillText(grade+' 등급!',260,120);
   ctx.fillStyle='#fff';ctx.font='bold 16px sans-serif';ctx.fillText('점수: '+score+' | 최대콤보: '+maxCombo,260,155);
   statusDiv.innerHTML='<span style="color:#22c55e">✅ 완료! '+grade+' 등급 ('+score+'점)</span>';
   checkAch15('rhythm_play',true);if(score>=totalBeats*8)checkAch15('rhythm_ace',true);
  }
 },beatInterval);
}

/* ══════════════════════════════════════════════════
   Feature 3: AI Duet Partner (8 types)
   ══════════════════════════════════════════════════ */
var duetPartners=[
 {id:'angel',name:'천사 파트너',icon:'😇',voice:'부드러운 고음',pitch:1.3,style:'legato'},
 {id:'deep',name:'바리톤 파트너',icon:'🎩',voice:'묵직한 저음',pitch:0.7,style:'marcato'},
 {id:'jazz',name:'재즈 파트너',icon:'🎷',voice:'스윗한 재즈 톤',pitch:1.0,style:'swing'},
 {id:'rock',name:'록 파트너',icon:'🤘',voice:'강렬한 록 보컬',pitch:0.9,style:'forte'},
 {id:'opera',name:'오페라 파트너',icon:'🎭',voice:'웅장한 성악',pitch:1.1,style:'vibrato'},
 {id:'hiphop',name:'힌합 파트너',icon:'🎤',voice:'리듬컬한 래핑',pitch:1.0,style:'staccato'},
 {id:'acoustic',name:'어쿠스틱 파트너',icon:'🎸',voice:'따뜻한 통기타 톤',pitch:1.0,style:'soft'},
 {id:'child',name:'동요 파트너',icon:'🧒',voice:'귀여운 아이 목소리',pitch:1.5,style:'light'}
];
var duetUsed=ls15('duetUsed',[]);var duetCount=ls15('duetCount',0);

function openDuetPartner(){
 sfx15('duetStart');
 var html='<p style="color:#d4d4d8;font-size:.9em;margin-bottom:14px">AI 파트너와 함께 듀엿을 불러보세요!</p>';
 html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">';
 duetPartners.forEach(function(dp){
  var used=duetUsed.indexOf(dp.id)!==-1;
  html+='<div onclick="window.__v15SetDuet(\''+dp.id+'\')" style="cursor:pointer;padding:14px;border-radius:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border:2px solid '+(used?'#22c55e33':'transparent')+';text-align:center;transition:all .2s">';
  html+='<div style="font-size:2em">'+dp.icon+'</div>';
  html+='<div style="color:#c084fc;font-weight:bold;margin-top:4px;font-size:.95em">'+dp.name+'</div>';
  html+='<div style="color:#6b7280;font-size:.75em;margin-top:2px">'+dp.voice+'</div>';
  html+='<div style="color:#a78bfa;font-size:.7em;margin-top:4px;background:rgba(168,85,247,.1);border-radius:4px;padding:2px 6px;display:inline-block">스타일: '+dp.style+'</div>';
  if(used)html+='<div style="color:#22c55e;font-size:.7em;margin-top:3px">✓ 사용해봄</div>';
  html+='</div>';
 });
 html+='</div>';
 html+='<div style="margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px">';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">듀엿 횟수</div><div style="color:#ec4899;font-size:1.5em;font-weight:bold">'+duetCount+'</div></div>';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">파트너 수집</div><div style="color:#22c55e;font-size:1.5em;font-weight:bold">'+duetUsed.length+'/8</div></div></div>';
 v15M('v15-duet','🎤 듀엿 AI 파트너',html);
 checkAch15('duet_view',true);
}
window.__v15SetDuet=function(id){
 sfx15('duetHarmony');duetCount++;ls15s('duetCount',duetCount);
 if(duetUsed.indexOf(id)===-1){duetUsed.push(id);ls15s('duetUsed',duetUsed);}
 checkAch15('duet_first',true);if(duetUsed.length>=8)checkAch15('duet_all',true);
 var dp=duetPartners.find(function(p){return p.id===id;});
 var ac=getAC15();if(ac&&dp){var t=ac.currentTime;for(var i=0;i<4;i++){var o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.type='sine';var baseF=261.63*dp.pitch;var notes=[baseF,baseF*1.25,baseF*1.5,baseF*2];o.frequency.setValueAtTime(notes[i],t+i*0.3);g.gain.setValueAtTime(0.12,t+i*0.3);g.gain.linearRampToValueAtTime(0,t+i*0.3+0.4);o.start(t+i*0.3);o.stop(t+i*0.3+0.4);}}
 var toast=document.createElement('div');toast.style.cssText='position:fixed;top:80px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;padding:14px 24px;border-radius:14px;font-size:.95em;box-shadow:0 4px 24px rgba(236,72,153,.5);text-align:center;max-width:90%';
 toast.innerHTML=dp.icon+' <strong>'+dp.name+'</strong> 파트너가 함께합니다!';
 document.body.appendChild(toast);setTimeout(function(){toast.style.opacity='0';toast.style.transition='opacity .5s';setTimeout(function(){toast.remove();},500);},3000);
};

/* ══════════════════════════════════════════════════
   Feature 4: Vocal Technique Dojo (12 techniques)
   ══════════════════════════════════════════════════ */
var vocalTechniques=[
 {id:'headVoice',name:'두성',icon:'💠',desc:'머리 위쪽으로 소리를 보내는 기법. 고음 처리에 유리.',cat:'발성',level:2},
 {id:'chestVoice',name:'흥성',icon:'💪',desc:'가슴에서 울리는 풍성한 소리. 저중음 처리.',cat:'발성',level:1},
 {id:'mixVoice',name:'믹스 보이스',icon:'🌀',desc:'두성과 흥성을 자연스럽게 연결하는 기법.',cat:'발성',level:3},
 {id:'falsetto',name:'팔세토',icon:'✨',desc:'성대를 엇게 진동시켜 높은 음을 내는 기법.',cat:'발성',level:2},
 {id:'vibrato',name:'비브라토',icon:'🌊',desc:'음을 일정하게 떨리는 기법. 감성 표현.',cat:'표현',level:2},
 {id:'melisma',name:'멜리스마',icon:'🎶',desc:'한 음절에 여러 음을 연결하는 기법.',cat:'표현',level:4},
 {id:'belting',name:'벨팅',icon:'🔥',desc:'흥성을 높은 음역까지 끌어올려 강렬하게 부르는 기법.',cat:'파워',level:4},
 {id:'whisperSing',name:'속삭임 창법',icon:'🤫',desc:'부드러운 속삭임으로 감성을 전달.',cat:'표현',level:1},
 {id:'breathControl',name:'복식호흡',icon:'🫁',desc:'배에 힘을 주어 안정적으로 소리를 내는 기본.',cat:'기초',level:1},
 {id:'tonguePlace',name:'혀 위치',icon:'👅',desc:'혀의 위치에 따라 모음의 음색이 달라짐.',cat:'기초',level:1},
 {id:'dynamics',name:'강약 조절',icon:'📈',desc:'pp부터 ff까지 자유자재로 소리 크기를 조절.',cat:'파워',level:2},
 {id:'riff',name:'리프 & 런',icon:'🎵',desc:'빠른 음의 연결로 화려하게 꾸미는 기법.',cat:'파워',level:5}
];
var techMastered=ls15('techMastered',[]);

function openVocalDojo(){
 sfx15('techLearn');
 var html='<p style="color:#d4d4d8;font-size:.9em;margin-bottom:14px">발성 테크닉을 하나씩 익혀보세요.</p>';
 var cats=['기초','발성','표현','파워'];
 cats.forEach(function(cat){
  html+='<div style="color:#c084fc;font-weight:bold;font-size:.9em;margin:12px 0 6px;border-left:3px solid #a855f7;padding-left:8px">'+cat+'</div><div style="display:grid;gap:6px">';
  vocalTechniques.filter(function(t){return t.cat===cat;}).forEach(function(tech){
   var mastered=techMastered.indexOf(tech.id)!==-1;
   var stars='';for(var s=0;s<5;s++)stars+=s<tech.level?'⭐':'☆';
   html+='<div style="display:flex;align-items:center;gap:10px;padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;border-left:3px solid '+(mastered?'#22c55e':'#6b7280')+'">';
   html+='<span style="font-size:1.5em">'+tech.icon+'</span>';
   html+='<div style="flex:1"><div style="color:#c084fc;font-weight:bold;font-size:.9em">'+tech.name+' <span style="font-size:.7em;color:#6b7280">'+stars+'</span></div>';
   html+='<div style="color:#a78bfa;font-size:.8em;margin-top:2px">'+tech.desc+'</div></div>';
   html+='<button onclick="window.__v15MasterTech(\''+tech.id+'\')" style="padding:6px 12px;border-radius:8px;border:1px solid '+(mastered?'#22c55e':'rgba(168,85,247,.3)')+';background:'+(mastered?'rgba(34,197,94,.15)':'rgba(168,85,247,.08)')+';color:'+(mastered?'#22c55e':'#a855f7')+';cursor:pointer;font-size:.8em;font-weight:bold">'+(mastered?'✓ 완료':'배우기')+'</button></div>';
  });
  html+='</div>';
 });
 html+='<div style="margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px">';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">마스터된 테크닉</div><div style="color:#22c55e;font-size:1.5em;font-weight:bold">'+techMastered.length+'/12</div></div>';
 html+='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">실력 등급</div><div style="color:#fbbf24;font-size:1.5em;font-weight:bold">'+(techMastered.length>=10?'S':techMastered.length>=7?'A':techMastered.length>=4?'B':techMastered.length>=2?'C':'D')+'</div></div></div>';
 v15M('v15-dojo','🥋 발성 테크닉 도장',html);
 checkAch15('dojo_view',true);
}
window.__v15MasterTech=function(id){if(techMastered.indexOf(id)===-1){techMastered.push(id);ls15s('techMastered',techMastered);sfx15('techLearn');checkAch15('tech_first',true);if(techMastered.length>=6)checkAch15('tech_half',true);if(techMastered.length>=12)checkAch15('tech_all',true);}openVocalDojo();};

/* ══════════════════════════════════════════════════
   Feature 5: Lyrics Memory Challenge
   ══════════════════════════════════════════════════ */
var lyricsMemoryScores=ls15('lyricsMemory',[]);var lyricsPlays=ls15('lyricsPlays',0);

function openLyricsChallenge(){
 sfx15('lyricsCorrect');var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='노래 가사를 기억하고 빈칸을 채워보세요!';wrap.appendChild(info);
 var songsArr=[];if(window.songs&&Array.isArray(window.songs))songsArr=window.songs.filter(function(s){return s.lyrics&&s.lyrics.length>=8;});
 if(songsArr.length===0){wrap.innerHTML+='<div style="text-align:center;padding:30px;color:#6b7280">노래 데이터를 불러오는 중...</div>';v15M('v15-lyrics','📝 가사 암기 챌린지',wrap);return;}
 var randSongs=songsArr.sort(function(){return Math.random()-0.5;}).slice(0,5);var currentQ=0,totalCorrect=0;
 var gameDiv=document.createElement('div');gameDiv.id='v15-lyrics-game';wrap.appendChild(gameDiv);
 var statsDiv=document.createElement('div');statsDiv.style.cssText='margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:8px';
 statsDiv.innerHTML='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">총 플레이</div><div style="color:#c084fc;font-size:1.3em;font-weight:bold">'+lyricsPlays+'</div></div><div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">최고 점수</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+(lyricsMemoryScores.length>0?Math.max.apply(null,lyricsMemoryScores):0)+'</div></div>';
 wrap.appendChild(statsDiv);
 function showQuestion(){
  if(currentQ>=randSongs.length){
   lyricsPlays++;ls15s('lyricsPlays',lyricsPlays);lyricsMemoryScores.push(totalCorrect);if(lyricsMemoryScores.length>50)lyricsMemoryScores=lyricsMemoryScores.slice(-50);ls15s('lyricsMemory',lyricsMemoryScores);
   checkAch15('lyrics_play',true);if(totalCorrect>=5)checkAch15('lyrics_perfect',true);
   gameDiv.innerHTML='<div style="text-align:center;padding:24px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px"><div style="font-size:2em;margin-bottom:8px">🎉</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+totalCorrect+'/'+randSongs.length+' 정답!</div><div style="color:#a78bfa;font-size:.9em;margin-top:6px">등급: '+(totalCorrect>=5?'S':totalCorrect>=4?'A':totalCorrect>=3?'B':totalCorrect>=2?'C':'D')+'</div></div>';return;
  }
  var song=randSongs[currentQ];var lyrics=song.lyrics.slice(0,8);var hideIdx=Math.floor(Math.random()*lyrics.length);var correctAnswer=lyrics[hideIdx];
  var choices=[correctAnswer];var allLyrics=[];
  songsArr.forEach(function(s){if(s.lyrics)s.lyrics.forEach(function(l){if(allLyrics.indexOf(l)===-1&&l!==correctAnswer)allLyrics.push(l);});});
  while(choices.length<4&&allLyrics.length>0){var ri=Math.floor(Math.random()*allLyrics.length);choices.push(allLyrics.splice(ri,1)[0]);}
  for(var i=choices.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=choices[i];choices[i]=choices[j];choices[j]=tmp;}
  var qHtml='<div style="background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:12px;padding:16px;margin-bottom:10px">';
  qHtml+='<div style="color:#a78bfa;font-size:.8em;margin-bottom:8px">문제 '+(currentQ+1)+'/'+randSongs.length+' — '+song.title+' ('+song.artist+')</div>';
  qHtml+='<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:12px">';
  lyrics.forEach(function(l,li){if(li===hideIdx){qHtml+='<span style="display:inline-block;width:40px;height:30px;border-bottom:2px solid #ec4899;text-align:center;color:#ec4899;font-weight:bold;font-size:1.1em">?</span>';}else{qHtml+='<span style="color:#e0d0ff;font-size:1.1em;font-weight:bold">'+l+'</span>';}});
  qHtml+='</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
  choices.forEach(function(ch){qHtml+='<button onclick="window.__v15LyricsAnswer(\''+ch.replace(/'/g,"\\'")+'\',\''+correctAnswer.replace(/'/g,"\\'")+'\','+currentQ+')" style="padding:12px;background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.2);border-radius:10px;color:#e0d0ff;cursor:pointer;font-size:1.1em;font-weight:bold">'+ch+'</button>';});
  qHtml+='</div></div>';gameDiv.innerHTML=qHtml;
 }
 window.__v15LyricsAnswer=function(chosen,correct,qIdx){if(qIdx!==currentQ)return;if(chosen===correct){totalCorrect++;sfx15('lyricsCorrect');}else sfx15('lyricsMiss');currentQ++;showQuestion();};
 showQuestion();v15M('v15-lyrics','📝 가사 암기 챌린지',wrap);
}

/* ══════════════════════════════════════════════════
   Feature 6: Stage Presence Coach (12 tips)
   ══════════════════════════════════════════════════ */
var stageTips=[
 {id:'eyeContact',icon:'👁️',title:'시선 처리',desc:'관객과 눈을 맞추세요. Z패턴으로 무대 전체를 커버하세요.',cat:'시각'},
 {id:'posture',icon:'🧑‍🎤',title:'자세',desc:'어깨를 펴고 가슴을 열어 자신감 있는 자세를 유지하세요.',cat:'시각'},
 {id:'handGesture',icon:'🖐️',title:'손 제스처',desc:'가사의 감정에 맞춰 손을 자연스럽게 움직이세요.',cat:'시각'},
 {id:'movement',icon:'🚶',title:'무대 이동',desc:'제자리에 서지 말고 무대를 활용해 움직이세요.',cat:'시각'},
 {id:'emotion',icon:'😢',title:'감정 전달',desc:'가사의 감정을 얼굴 표정으로 표현하세요.',cat:'감정'},
 {id:'breathShow',icon:'💨',title:'호흡 보이기',desc:'숨을 쉬는 것도 퍼포먼스의 일부입니다.',cat:'감정'},
 {id:'climax',icon:'🔥',title:'클라이맥스',desc:'곡의 절정에서 몸 전체로 표현하세요.',cat:'감정'},
 {id:'micTech',icon:'🎙️',title:'마이크 테크닉',desc:'마이크 거리를 조절해 강약을 표현하세요.',cat:'기술'},
 {id:'intro',icon:'👋',title:'인트로 처리',desc:'전주 전 관객과 소통하며 분위기를 만드세요.',cat:'기술'},
 {id:'outro',icon:'🏁',title:'아우트로 처리',desc:'노래 끝난 후 여운을 주고 인사하세요.',cat:'기술'},
 {id:'confidence',icon:'💪',title:'자신감',desc:'실수해도 당황하지 않고 자연스럽게 넘기세요.',cat:'멘탈'},
 {id:'audience',icon:'👥',title:'관객 반응',desc:'관객의 반응을 읽고 그에 맞춰 퍼포먼스를 조절하세요.',cat:'멘탈'}
];
var stageRead=ls15('stageRead',[]);

function openStageCoach(){
 sfx15('stageClap');
 var html='<p style="color:#d4d4d8;font-size:.9em;margin-bottom:14px">무대 위에서 더 멋지게! 스테이지 프레즐스 팁을 읽어보세요.</p>';
 var cats=['시각','감정','기술','멘탈'];
 cats.forEach(function(cat){
  html+='<div style="color:#ec4899;font-weight:bold;font-size:.9em;margin:12px 0 6px;border-left:3px solid #ec4899;padding-left:8px">'+cat+'</div><div style="display:grid;gap:6px">';
  stageTips.filter(function(t){return t.cat===cat;}).forEach(function(tip){
   var read=stageRead.indexOf(tip.id)!==-1;
   html+='<div onclick="window.__v15ReadStage(\''+tip.id+'\')" style="cursor:pointer;display:flex;align-items:center;gap:10px;padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;border-left:3px solid '+(read?'#22c55e':'#6b7280')+'">';
   html+='<span style="font-size:1.4em">'+tip.icon+'</span><div style="flex:1"><div style="color:#c084fc;font-weight:bold;font-size:.9em">'+tip.title+'</div><div style="color:#a78bfa;font-size:.8em;margin-top:2px">'+tip.desc+'</div></div>';
   html+='<span style="color:'+(read?'#22c55e':'#6b7280')+';font-size:.8em">'+(read?'✓':'\xB7')+'</span></div>';
  });
  html+='</div>';
 });
 html+='<div style="margin-top:14px;background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">읽은 팁</div><div style="color:#ec4899;font-size:1.5em;font-weight:bold">'+stageRead.length+'/12</div><div style="width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;margin-top:6px;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,#ec4899,#a855f7);border-radius:3px;width:'+(stageRead.length/12*100)+'%"></div></div></div>';
 v15M('v15-stage','🎭 스테이지 프레즐스 코치',html);
 checkAch15('stage_view',true);
}
window.__v15ReadStage=function(id){if(stageRead.indexOf(id)===-1){stageRead.push(id);ls15s('stageRead',stageRead);sfx15('stageClap');if(stageRead.length>=6)checkAch15('stage_half',true);if(stageRead.length>=12)checkAch15('stage_all',true);}openStageCoach();};

/* ══════════════════════════════════════════════════
   Feature 7: Vocal Performance Heatmap Canvas
   ══════════════════════════════════════════════════ */
function openVocalHeatmap(){
 sfx15('heatmapGen');var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='최근 30일간 노래 활동 히트맵';wrap.appendChild(info);
 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=220;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:10px;display:block';wrap.appendChild(cvs);
 var archive=[];try{var raw=localStorage.getItem('sv15-perfArchive');if(!raw)raw=localStorage.getItem('sv14-perfArchive');if(raw)archive=JSON.parse(raw);}catch(e){}
 var ctx=cvs.getContext('2d');ctx.clearRect(0,0,560,220);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,220);
 ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='center';ctx.fillText('🔥 보컬 퍼포먼스 히트맵',280,18);
 var today=new Date();var dayData={};archive.forEach(function(p){if(!p.date)return;dayData[p.date]=(dayData[p.date]||0)+1;});
 var cellW=16,cellH=16,gap=3,startX=50,startY=38;
 for(var w=0;w<5;w++){for(var d=0;d<7;d++){
  var dayOffset=30-(w*7+6-d);if(dayOffset<0||dayOffset>30)continue;
  var date=new Date(today);date.setDate(date.getDate()-dayOffset);var dateStr=date.toISOString().split('T')[0];var count=dayData[dateStr]||0;
  var x=startX+w*(cellW+gap);var y=startY+d*(cellH+gap);
  ctx.fillStyle=count===0?'rgba(168,85,247,.05)':count<=1?'rgba(34,197,94,.3)':count<=3?'rgba(34,197,94,.55)':'rgba(34,197,94,.85)';
  ctx.fillRect(x,y,cellW,cellH);ctx.strokeStyle='rgba(168,85,247,.1)';ctx.lineWidth=0.5;ctx.strokeRect(x,y,cellW,cellH);
 }}
 var totalSongs=archive.length;var avgScore=totalSongs>0?Math.round(archive.reduce(function(a,b){return a+b.score;},0)/totalSongs):0;
 var legendX=200,legendY=50;
 var stats=[{label:'총 곡수',value:totalSongs+'',color:'#c084fc'},{label:'평균 점수',value:avgScore+'',color:'#fbbf24'},{label:'활동일',value:Object.keys(dayData).length+'일',color:'#22c55e'}];
 stats.forEach(function(s,i){var sx=legendX+i*120;ctx.fillStyle='rgba(49,46,129,.5)';ctx.fillRect(sx,legendY,110,35);ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='left';ctx.fillText(s.label,sx+8,legendY+14);ctx.fillStyle=s.color;ctx.font='bold 15px sans-serif';ctx.fillText(s.value,sx+8,legendY+30);});
 v15M('v15-heatmap','🗺️ 보컬 퍼포먼스 히트맵',wrap);checkAch15('heatmap_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 8: Song Recommendation AI
   ══════════════════════════════════════════════════ */
function openSongRecommend(){
 sfx15('recommend');
 var html='<p style="color:#d4d4d8;font-size:.9em;margin-bottom:14px">부른 기록과 선호도를 분석해 맞춤형 추천을 해드립니다.</p>';
 var archive=[];try{var raw=localStorage.getItem('sv15-perfArchive');if(!raw)raw=localStorage.getItem('sv14-perfArchive');if(raw)archive=JSON.parse(raw);}catch(e){}
 var songsArr=[];if(window.songs&&Array.isArray(window.songs))songsArr=window.songs;
 var genreCount={},playedIds={};
 archive.forEach(function(p){genreCount[p.genre]=(genreCount[p.genre]||0)+1;if(p.title){var found=songsArr.find(function(s){return s.title===p.title;});if(found)playedIds[found.id]=true;}});
 var topGenres=Object.keys(genreCount).sort(function(a,b){return genreCount[b]-genreCount[a];});var favGenre=topGenres[0]||'ballad';
 var recommendations=[];
 songsArr.filter(function(s){return s.genre===favGenre&&!playedIds[s.id];}).slice(0,3).forEach(function(s){recommendations.push({song:s,reason:'선호 장르 ('+favGenre+')',icon:'💜'});});
 songsArr.filter(function(s){return s.difficulty<=2&&!playedIds[s.id];}).slice(0,2).forEach(function(s){recommendations.push({song:s,reason:'쉽게 도전',icon:'🌟'});});
 songsArr.filter(function(s){return s.difficulty>=4&&!playedIds[s.id];}).slice(0,2).forEach(function(s){recommendations.push({song:s,reason:'실력 업그레이드',icon:'🔥'});});
 songsArr.filter(function(s){return !playedIds[s.id];}).slice(-3).forEach(function(s){if(!recommendations.find(function(r){return r.song.id===s.id;}))recommendations.push({song:s,reason:'신곡 도전',icon:'✨'});});
 recommendations=recommendations.slice(0,8);
 html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px"><div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">선호 장르</div><div style="color:#ec4899;font-size:1em;font-weight:bold">'+favGenre+'</div></div><div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">부른 곡수</div><div style="color:#c084fc;font-size:1.3em;font-weight:bold">'+Object.keys(playedIds).length+'</div></div></div>';
 if(recommendations.length===0){html+='<div style="text-align:center;padding:24px;color:#6b7280">🌟 노래를 부르면 맞춤 추천이 시작됩니다!</div>';}
 else{html+='<div style="display:grid;gap:6px">';recommendations.forEach(function(rec){var s=rec.song;var diffStars='';for(var d=0;d<5;d++)diffStars+=d<s.difficulty?'★':'☆';html+='<div style="display:flex;align-items:center;gap:10px;padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;border:1px solid rgba(168,85,247,.15)"><div style="font-size:1.3em">'+rec.icon+'</div><div style="flex:1"><div style="color:#c084fc;font-weight:bold;font-size:.9em">🎵 '+s.title+'</div><div style="color:#6b7280;font-size:.75em">'+s.artist+' | '+s.genre+' | '+diffStars+'</div><div style="color:#a78bfa;font-size:.7em;margin-top:2px">'+rec.reason+'</div></div></div>';});html+='</div>';}
 html+='<div style="margin-top:10px;padding:10px;background:rgba(168,85,247,.05);border-radius:8px;text-align:center;color:#6b7280;font-size:.8em">🤖 AI가 분석한 추천입니다. 더 많이 부를수록 추천이 정확해져요!</div>';
 v15M('v15-recommend','🤖 노래 추천 AI',html);checkAch15('recommend_view',true);
}

/* ══════════════════════════════════════════════════
   Quiz v15: +15 questions (117 -> 132)
   ══════════════════════════════════════════════════ */
var v15Quizzes=[
 {q:'음색 DNA 프로파일러는 몇 가지 축으로 분석하나요?',a:['4가지','5가지','6가지','8가지'],c:2},
 {q:'리듬 트레이닝에서 &quot;싱코페이션&quot;은 어떤 리듬인가요?',a:['정박자','2박 강조','여리박','4박 강조'],c:2},
 {q:'듀엿에서 &quot;하모니&quot;란 무엇인가요?',a:['같은 멜로디','화음 조화','반주','BPM'],c:1},
 {q:'벨팅(Belting) 기법은 어떤 발성을 사용하나요?',a:['두성','흥성을 높은 음으로','팔세토','속삭임'],c:1},
 {q:'믹스 보이스(Mix Voice)란 무엇인가요?',a:['두성+흥성 연결','가성+진성','팔세토+벨팅','비브라토+트릴'],c:0},
 {q:'무대에서 Z패턴 시선 처리란 무엇인가요?',a:['한 곳만 보기','무대 전체를 커버','바닥 보기','눈 감기'],c:1},
 {q:'멜리스마(Melisma)란 어떤 기법인가요?',a:['한 음절에 여러 음 연결','고음에서 비브라토','숨을 길게 참기','빠른 박자 대응'],c:0},
 {q:'Super Shy를 부른 그룹은?',a:['aespa','ITZY','NewJeans','IVE'],c:2},
 {q:'팔세토(Falsetto)와 두성(Head Voice)의 차이는?',a:['똑같다','팔세토가 더 엇은 성대 사용','두성이 더 빠르다','팔세토가 더 낮다'],c:1},
 {q:'리듬 트레이닝에서 BPM이 높을수록?',a:['느려진다','빨라진다','높아진다','낮아진다'],c:1},
 {q:'사건의 지평선을 부른 가수는?',a:['아이유','태연','윤하','BTS'],c:2},
 {q:'보컬 퍼포먼스 히트맵에서 진녹색은 무엇을 의미하나요?',a:['활동 없음','낮은 활동','높은 활동','오류'],c:2},
 {q:'스테이지 프레즐스에서 &quot;클라이맥스&quot;란?',a:['곡의 절정','곡의 시작','곡의 끝','전주 부분'],c:0},
 {q:'노래 추천 AI가 분석하는 주요 요소는?',a:['부른 기록과 선호도','날씨','시간대','기기 종류'],c:0},
 {q:'StarVoice v15에서 총 몇 곡이 수록되어 있나요?',a:['105곡','115곡','125곡','130곡'],c:2}
];
(function injectQuiz15(){var tries=0;function attempt(){if(window.quizData&&Array.isArray(window.quizData)){v15Quizzes.forEach(function(q){if(!window.quizData.find(function(x){return x.q===q.q;}))window.quizData.push(q);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ══════════════════════════════════════════════════
   Achievements v15: +12 (102 -> 114)
   ══════════════════════════════════════════════════ */
var v15Achievements=[
 {id:'dna_view',name:'🧬 DNA 분석가',desc:'음색 DNA 프로파일러 확인',icon:'🧬'},
 {id:'rhythm_play',name:'🥁 리듬 플레이어',desc:'리듬 트레이닝 첫 플레이',icon:'🥁'},
 {id:'rhythm_ace',name:'🏆 리듬 에이스',desc:'리듬 게임에서 80% 이상 획득',icon:'🏆'},
 {id:'duet_first',name:'🎤 첫 듀엿',desc:'AI 파트너와 첫 듀엿',icon:'🎤'},
 {id:'duet_all',name:'🎠 전 파트너 수집',desc:'8종 파트너 모두 사용',icon:'🎠'},
 {id:'tech_first',name:'🥋 첫 테크닉',desc:'발성 테크닉 첫 마스터',icon:'🥋'},
 {id:'tech_all',name:'🥇 테크닉 마스터',desc:'12종 테크닉 모두 마스터',icon:'🥇'},
 {id:'lyrics_play',name:'📝 가사 도전자',desc:'가사 암기 챌린지 첫 클리어',icon:'📝'},
 {id:'stage_view',name:'🎭 무대 학생',desc:'스테이지 프레즐스 코치 확인',icon:'🎭'},
 {id:'heatmap_view',name:'🗺️ 활동 분석가',desc:'보컬 퍼포먼스 히트맵 확인',icon:'🗺️'},
 {id:'recommend_view',name:'🤖 AI 추천',desc:'노래 추천 AI 확인',icon:'🤖'},
 {id:'v15_explorer',name:'🚀 v15 탐험가',desc:'v15 기능 4개 이상 사용',icon:'🚀'}
];
var ach15Unlocked=ls15('achievements',[]);

function checkAch15(id,cond){
 if(!cond||ach15Unlocked.indexOf(id)!==-1)return;
 ach15Unlocked.push(id);ls15s('achievements',ach15Unlocked);
 var ach=v15Achievements.find(function(a){return a.id===id;});if(!ach)return;
 sfx15('achieve15');
 var toast=document.createElement('div');toast.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;padding:12px 24px;border-radius:12px;font-size:.9em;box-shadow:0 4px 20px rgba(236,72,153,.5);text-align:center;max-width:90%';
 toast.innerHTML='🏆 <strong>'+ach.name+'</strong> — '+ach.desc;
 document.body.appendChild(toast);setTimeout(function(){toast.style.opacity='0';toast.style.transition='opacity .5s';setTimeout(function(){toast.remove();},500);},3000);
 var used=0;['dna_view','rhythm_play','duet_first','dojo_view','lyrics_play','stage_view','heatmap_view','recommend_view'].forEach(function(a){if(ach15Unlocked.indexOf(a)!==-1)used++;});
 if(used>=4)checkAch15('v15_explorer',true);
}
(function injectAchievements15(){var tries=0;function attempt(){if(window.ACHIEVEMENTS&&Array.isArray(window.ACHIEVEMENTS)){v15Achievements.forEach(function(a){if(!window.ACHIEVEMENTS.find(function(x){return x.id===a.id;}))window.ACHIEVEMENTS.push(a);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ══════════════════════════════════════════════════
   Keyboard Shortcuts v15 (+8)
   ══════════════════════════════════════════════════ */
document.addEventListener('keydown',function(e){
 if(document.activeElement&&(document.activeElement.tagName==='INPUT'||document.activeElement.tagName==='TEXTAREA'))return;
 if(!e.shiftKey)return;
 switch(e.key){case 'G':e.preventDefault();openVoiceDNA();break;case 'R':e.preventDefault();openRhythmArcade();break;case 'U':e.preventDefault();openDuetPartner();break;case 'J':e.preventDefault();openVocalDojo();break;case 'L':e.preventDefault();openLyricsChallenge();break;case 'P':e.preventDefault();openStageCoach();break;case 'M':e.preventDefault();openVocalHeatmap();break;case 'I':e.preventDefault();openSongRecommend();break;}
});

/* ══════════════════════════════════════════════════
   Scroll Navigation Bar v15
   ══════════════════════════════════════════════════ */
(function injectUI15(){
 var tries=0;
 function attempt(){
  var app=document.getElementById('app')||document.body;
  if(!app||!document.getElementById('songSelect')){if(tries++<50){setTimeout(attempt,250);return;}}
  var style=document.createElement('style');
  style.textContent='.v15-nav{position:fixed;bottom:44px;left:0;right:0;z-index:9997;background:linear-gradient(180deg,transparent,rgba(10,8,24,.92) 30%);padding:6px 8px;display:flex;gap:4px;justify-content:center;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.v15-nav::-webkit-scrollbar{height:0}.v15-nav button{flex-shrink:0;padding:5px 9px;border-radius:14px;border:1px solid rgba(236,72,153,.2);background:rgba(236,72,153,.06);color:#ec4899;font-size:10px;cursor:pointer;white-space:nowrap;transition:all .2s}.v15-nav button:hover,.v15-nav button:active{background:rgba(236,72,153,.2);border-color:#ec4899}';
  document.head.appendChild(style);
  var nav=document.createElement('div');nav.className='v15-nav';
  var btns=[{text:'🧬 DNA',fn:openVoiceDNA},{text:'🥁 리듬',fn:openRhythmArcade},{text:'🎤 듀엿',fn:openDuetPartner},{text:'🥋 테크닉',fn:openVocalDojo},{text:'📝 가사',fn:openLyricsChallenge},{text:'🎭 스테이지',fn:openStageCoach},{text:'🗺️ 히트맵',fn:openVocalHeatmap},{text:'🤖 추천',fn:openSongRecommend}];
  btns.forEach(function(b){var btn=document.createElement('button');btn.textContent=b.text;btn.onclick=b.fn;nav.appendChild(btn);});
  document.body.appendChild(nav);
  var existingNav=document.querySelector('.v14-nav');if(existingNav)existingNav.style.bottom='0';
 }
 attempt();
})();

console.log('[v15] StarVoice v15 loaded: +10songs(125), VoiceDNA6axis, RhythmArcade6, DuetAI8, VocalDojo12, LyricsMemory, StagePresence12, VocalHeatmap, SongRecommendAI, +15quiz(132), +12ach(114), SFX12, KB+8');
})();
