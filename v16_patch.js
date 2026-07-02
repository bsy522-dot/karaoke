/* StarVoice v16 Patch — Self-contained IIFE module injected via SW
 * +10 songs(125->135), PitchMasteryTracker Canvas, VocalBattleTournament Canvas,
 * VoiceEQVisualizer 8band Canvas, DailyWeeklyChallenge 7types,
 * SingerGrowthJournal Canvas, MusicTheoryTutor 12lessons,
 * ShareScorecard Canvas PNG, VocalStyleComparator 6axis Canvas,
 * quiz +15(132->147), achievements +12(114->126), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v16KaraokeLoaded) return;
window.__v16KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65;

function ls16(k,d){try{var v=localStorage.getItem('sv16-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls16s(k,v){try{localStorage.setItem('sv16-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (126-135) ── */
var v16Songs=[
{id:126,title:'사랑인가 봐',artist:'멜로망스',bpm:78,key:'C',difficulty:3,genre:'ballad',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['사','랑','인','가','봐','마','음','이','자','꾸','널','부','르','는','걸','봐'],
 duration:[580,580,580,1160,580,580,580,580,580,580,580,1160,580,580,580,580]},
{id:127,title:'OMG',artist:'NewJeans',bpm:128,key:'Ab',difficulty:4,genre:'pop',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,D4,F4,Ab4,G4,F4,Eb4,D4],
 lyrics:['Oh','my','god','you','see','the','way','I','look','at','you','when','no','bo','dy','is'],
 duration:[350,350,350,700,350,350,350,350,350,350,350,700,350,350,350,350]},
{id:128,title:'퀘카',artist:'(G)I-DLE',bpm:132,key:'D',difficulty:5,genre:'dance',
 notes:[D4,Fs4,A4,D5,Cs5,A4,Fs4,D4,E4,G4,B4,D5,Cs5,B4,A4,G4],
 lyrics:['퀘','카','퀘','카','나','는','퀘','카','내','가','바','로','퀘','카','너','도'],
 duration:[340,340,340,680,340,340,340,340,340,340,340,680,340,340,340,340]},
{id:129,title:'비가 오는 날엔',artist:'비스트',bpm:74,key:'E',difficulty:3,genre:'ballad',
 notes:[E3,Gs3,B3,E4,D4,B3,Gs3,E3,Fs3,A3,Cs4,E4,D4,Cs4,B3,A3],
 lyrics:['비','가','오','는','날','엔','난','널','생','각','해','내','마','음','이','울'],
 duration:[620,620,620,1240,620,620,620,620,620,620,620,1240,620,620,620,620]},
{id:130,title:'나의 작은 영웅',artist:'이선희',bpm:80,key:'F',difficulty:4,genre:'ballad',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['나','의','작','은','영','웅','은','너','이','세','상','의','빛','이','되','어'],
 duration:[560,560,560,1120,560,560,560,560,560,560,560,1120,560,560,560,560]},
{id:131,title:'Drama',artist:'aespa',bpm:136,key:'C',difficulty:5,genre:'dance',
 notes:[C4,E4,G4,C5,B4,A4,G4,E4,F4,A4,C5,E5,D5,C5,B4,A4],
 lyrics:['Come','on','come','on','come','on','come','on','dra','ma','dra','ma','dra','ma','dra','ma'],
 duration:[330,330,330,660,330,330,330,330,330,330,330,660,330,330,330,330]},
{id:132,title:'Hype Boy',artist:'NewJeans',bpm:105,key:'Bb',difficulty:3,genre:'pop',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['1','번','부','터','10','번','까','지','내','게','어','떤','의','미','인','지'],
 duration:[430,430,430,860,430,430,430,430,430,430,430,860,430,430,430,430]},
{id:133,title:'밤양갱',artist:'비비',bpm:96,key:'G',difficulty:2,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,E4,D4,B3,C4,E4,G4,B4,A4,G4,Fs4,E4],
 lyrics:['나','는','밤','양','갱','이','란','다','아','무','리','봐','도','달','콤','해'],
 duration:[470,470,470,940,470,470,470,470,470,470,470,940,470,470,470,470]},
{id:134,title:'고민중독',artist:'QWER',bpm:142,key:'A',difficulty:4,genre:'rock',
 notes:[A3,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['고','민','중','독','고','민','중','독','너','란','고','민','중','독','이','야'],
 duration:[320,320,320,640,320,320,320,320,320,320,320,640,320,320,320,320]},
{id:135,title:'정이라고 하자',artist:'이무진',bpm:84,key:'D',difficulty:3,genre:'ballad',
 notes:[D4,Fs4,A4,D5,Cs5,A4,Fs4,D4,E4,G4,B4,D5,Cs5,B4,A4,G4],
 lyrics:['정','이','라','고','하','자','우','리','그','때','나','눌','던','정','이','라'],
 duration:[540,540,540,1080,540,540,540,540,540,540,540,1080,540,540,540,540]}
];
(function injectSongs16(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v16Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v16 (12 sounds) ── */
var actx16=null;
function getAC16(){if(!actx16)try{actx16=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx16;}
function sfx16(type){
 var ac=getAC16();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  pitchMastery:{f:523,d:.45,wave:'sine',gS:.2,gE:0},
  battleStart:{f:330,d:.35,wave:'square',gS:.22,gE:0},
  battleWin:{f:880,d:.6,wave:'triangle',gS:.28,gE:0},
  battleLose:{f:165,d:.4,wave:'sawtooth',gS:.12,gE:0},
  eqAdjust:{f:440,d:.15,wave:'sine',gS:.15,gE:0},
  challengeNew:{f:660,d:.3,wave:'triangle',gS:.22,gE:0},
  challengeDone:{f:1047,d:.5,wave:'sine',gS:.3,gE:0},
  growthLvl:{f:784,d:.55,wave:'triangle',gS:.25,gE:0},
  theoryLearn:{f:550,d:.25,wave:'sine',gS:.18,gE:0},
  scorecard:{f:700,d:.4,wave:'triangle',gS:.2,gE:0},
  styleCompare:{f:600,d:.3,wave:'sine',gS:.18,gE:0},
  achieve16:{f:1047,d:.5,wave:'triangle',gS:.3,gE:0}
 };
 var c=cfg[type]||cfg.challengeNew;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='battleWin'){o.frequency.linearRampToValueAtTime(c.f*1.5,t+c.d*0.4);o.frequency.linearRampToValueAtTime(c.f*2,t+c.d);}
 if(type==='growthLvl'){var lfo=ac.createOscillator();var lg=ac.createGain();lfo.frequency.value=6;lg.gain.value=25;lfo.connect(lg);lg.connect(o.frequency);lfo.start(t);lfo.stop(t+c.d);}
 if(type==='challengeDone'){
  var noise=ac.createBufferSource();var buf=ac.createBuffer(1,ac.sampleRate*0.06,ac.sampleRate);
  var data=buf.getChannelData(0);for(var i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*0.25;
  noise.buffer=buf;var ng=ac.createGain();ng.gain.setValueAtTime(0.18,t);ng.gain.linearRampToValueAtTime(0,t+0.1);
  noise.connect(ng);ng.connect(ac.destination);noise.start(t);
 }
 g.gain.setValueAtTime(c.gS,t);g.gain.linearRampToValueAtTime(c.gE,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Modal Helper v16 ── */
function v16M(id,title,body){
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
   Feature 1: Pitch Mastery Tracker Canvas
   ══════════════════════════════════════════════════ */
var pitchMasteryData=ls16('pitchMastery',{sessions:[],genres:{}});

function openPitchMastery(){
 sfx16('pitchMastery');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='음정 정확도 장기 추적 그래프. 부른 곡의 음정 충실도를 분석합니다.';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=560;cvs.height=320;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:10px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 var archive=[];
 try{var raw=localStorage.getItem('sv15-perfArchive');if(!raw)raw=localStorage.getItem('sv14-perfArchive');if(raw)archive=JSON.parse(raw);}catch(e){}
 var recent=archive.slice(-20);
 var genreScores={};
 archive.forEach(function(p){
  if(!p.genre)return;
  if(!genreScores[p.genre])genreScores[p.genre]={total:0,count:0};
  genreScores[p.genre].total+=p.score||0;
  genreScores[p.genre].count++;
 });

 var ctx=cvs.getContext('2d');
 ctx.clearRect(0,0,560,320);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,320);
 ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
 ctx.fillText('🎯 음정 마스터리 트래커',280,20);

 if(recent.length>=2){
  var chartX=60,chartY=45,chartW=460,chartH=180;
  ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=1;
  for(var g=0;g<=4;g++){
   var gy=chartY+chartH-g*(chartH/4);
   ctx.beginPath();ctx.moveTo(chartX,gy);ctx.lineTo(chartX+chartW,gy);ctx.stroke();
   ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.textAlign='right';
   ctx.fillText((g*25)+'',chartX-8,gy+4);
  }
  ctx.beginPath();ctx.strokeStyle='#ec4899';ctx.lineWidth=2.5;
  var step=chartW/(recent.length-1);
  recent.forEach(function(p,i){
   var x=chartX+i*step;
   var y=chartY+chartH-(p.score||0)/100*chartH;
   if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  });
  ctx.stroke();
  recent.forEach(function(p,i){
   var x=chartX+i*step;
   var y=chartY+chartH-(p.score||0)/100*chartH;
   ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);
   ctx.fillStyle=(p.score||0)>=80?'#22c55e':(p.score||0)>=60?'#fbbf24':'#ef4444';
   ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=1.5;ctx.stroke();
  });
  var avgScore=Math.round(recent.reduce(function(a,b){return a+(b.score||0);},0)/recent.length);
  var trend=recent.length>=3?(recent[recent.length-1].score||0)-(recent[0].score||0):0;
  ctx.fillStyle=trend>0?'#22c55e':'#ef4444';ctx.font='bold 11px sans-serif';ctx.textAlign='right';
  ctx.fillText((trend>0?'↑':'↓')+Math.abs(trend)+'점 '+(trend>0?'상승':'하락'),chartX+chartW,chartY-2);
 }else{
  ctx.fillStyle='#6b7280';ctx.font='14px sans-serif';ctx.textAlign='center';
  ctx.fillText('노래를 2곡 이상 부르면 추적이 시작됩니다',280,150);
 }

 var genres=Object.keys(genreScores);
 if(genres.length>0){
  var barY=255,barH=16,barMaxW=200,gStartX=60;
  ctx.fillStyle='#a78bfa';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
  ctx.fillText('장르별 평균 음정',gStartX,barY-8);
  var gColors=['#ec4899','#a855f7','#3b82f6','#22c55e','#fbbf24','#ef4444'];
  genres.sort(function(a,b){return genreScores[b].total/genreScores[b].count-genreScores[a].total/genreScores[a].count;}).slice(0,5).forEach(function(gn,gi){
   var avg=Math.round(genreScores[gn].total/genreScores[gn].count);
   var y=barY+gi*(barH+6);
   ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='right';
   ctx.fillText(gn,gStartX+50,y+12);
   ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(gStartX+55,y,barMaxW,barH);
   ctx.fillStyle=gColors[gi%gColors.length];ctx.fillRect(gStartX+55,y,barMaxW*avg/100,barH);
   ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='left';
   ctx.fillText(avg+'',gStartX+55+barMaxW*avg/100+6,y+12);
  });
 }

 var statsDiv=document.createElement('div');statsDiv.style.cssText='margin-top:14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px';
 var totalPlayed=archive.length;
 var overallAvg=totalPlayed>0?Math.round(archive.reduce(function(a,b){return a+(b.score||0);},0)/totalPlayed):0;
 var grade=overallAvg>=90?'S':overallAvg>=80?'A':overallAvg>=65?'B':overallAvg>=45?'C':'D';
 statsDiv.innerHTML='<div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">총 곡수</div><div style="color:#c084fc;font-size:1.3em;font-weight:bold">'+totalPlayed+'</div></div><div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">평균 음정</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+overallAvg+'</div></div><div style="background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">등급</div><div style="color:'+(grade==='S'?'#fbbf24':grade==='A'?'#22c55e':'#3b82f6')+';font-size:1.8em;font-weight:900">'+grade+'</div></div>';
 wrap.appendChild(statsDiv);
 v16M('v16-pitch','🎯 음정 마스터리 트래커',wrap);
 checkAch16('pitch_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 2: Vocal Battle Tournament Canvas
   ══════════════════════════════════════════════════ */
var battleRivals=[
 {name:'미리안',style:'발라드',base:72,icon:'👩‍🎤'},
 {name:'하운',style:'래퍼',base:68,icon:'🧑‍🎤'},
 {name:'솔라',style:'댓슱',base:78,icon:'💃'},
 {name:'아리아',style:'팔세토',base:82,icon:'👧'},
 {name:'마이클',style:'록',base:65,icon:'🧔'},
 {name:'루나',style:'R&B',base:75,icon:'👩'},
 {name:'제니',style:'트로트',base:70,icon:'👱‍♀️'},
 {name:'태양',style:'민요',base:60,icon:'🧓'}
];
var battleRecord=ls16('battleRecord',{wins:0,losses:0,draws:0,history:[]});

function openVocalBattle(){
 sfx16('battleStart');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='AI 라이벌과 보컬 배틀! 상대를 선택하고 도전하세요.';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=520;cvs.height=300;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:10px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 var ctx=cvs.getContext('2d');
 function drawTournament(selectedIdx){
  ctx.clearRect(0,0,520,300);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,520,300);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('⚔️ 보컬 배틀 토너먼트',260,22);
  for(var i=0;i<8;i++){
   var col=i%4,row=Math.floor(i/4);
   var x=30+col*120,y=45+row*130;
   var isSelected=i===selectedIdx;
   ctx.fillStyle=isSelected?'rgba(236,72,153,.2)':'rgba(49,46,129,.4)';
   ctx.strokeStyle=isSelected?'#ec4899':'rgba(168,85,247,.2)';ctx.lineWidth=isSelected?2:1;
   ctx.beginPath();ctx.roundRect(x,y,110,110,10);ctx.fill();ctx.stroke();
   ctx.font='28px sans-serif';ctx.textAlign='center';ctx.fillText(battleRivals[i].icon,x+55,y+35);
   ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.fillText(battleRivals[i].name,x+55,y+58);
   ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.fillText(battleRivals[i].style,x+55,y+74);
   var diffStars='';var diff=Math.ceil(battleRivals[i].base/20);for(var d=0;d<5;d++)diffStars+=d<diff?'★':'☆';
   ctx.fillStyle='#fbbf24';ctx.font='11px sans-serif';ctx.fillText(diffStars,x+55,y+92);
  }
 }
 drawTournament(-1);

 cvs.onclick=function(ev){
  var rect=cvs.getBoundingClientRect();
  var scaleX=520/rect.width;
  var mx=(ev.clientX-rect.left)*scaleX;
  var my=(ev.clientY-rect.top)*(300/rect.height);
  for(var i=0;i<8;i++){
   var col=i%4,row=Math.floor(i/4);
   var x=30+col*120,y=45+row*130;
   if(mx>=x&&mx<=x+110&&my>=y&&my<=y+110){
    startBattle(i,cvs,ctx,statusDiv);break;
   }
  }
 };

 var statusDiv=document.createElement('div');statusDiv.style.cssText='margin-top:10px;text-align:center;font-size:.9em;color:#c084fc;min-height:28px';
 statusDiv.textContent='라이벌을 클릭하여 배틀을 시작하세요';
 wrap.appendChild(statusDiv);

 var recordDiv=document.createElement('div');recordDiv.style.cssText='margin-top:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px';
 recordDiv.innerHTML='<div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#22c55e;font-size:.8em">승리</div><div style="color:#22c55e;font-size:1.5em;font-weight:bold">'+battleRecord.wins+'</div></div><div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#ef4444;font-size:.8em">패배</div><div style="color:#ef4444;font-size:1.5em;font-weight:bold">'+battleRecord.losses+'</div></div><div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#fbbf24;font-size:.8em">무승부</div><div style="color:#fbbf24;font-size:1.5em;font-weight:bold">'+battleRecord.draws+'</div></div>';
 wrap.appendChild(recordDiv);
 v16M('v16-battle','⚔️ 보컬 배틀 토너먼트',wrap);
 checkAch16('battle_view',true);
}

function startBattle(rivalIdx,cvs,ctx,statusDiv){
 var rival=battleRivals[rivalIdx];
 var rounds=3,currentRound=0,playerScore=0,rivalScore=0;
 var categories=['음정 정확도','리듬감','감정 표현','발성 테크닉','비브라토'];

 function playRound(){
  if(currentRound>=rounds){
   var result=playerScore>rivalScore?'WIN':playerScore<rivalScore?'LOSE':'DRAW';
   if(result==='WIN'){battleRecord.wins++;sfx16('battleWin');}
   else if(result==='LOSE'){battleRecord.losses++;sfx16('battleLose');}
   else{battleRecord.draws++;}
   battleRecord.history.push({rival:rival.name,result:result,pScore:playerScore,rScore:rivalScore});
   if(battleRecord.history.length>50)battleRecord.history=battleRecord.history.slice(-50);
   ls16s('battleRecord',battleRecord);

   ctx.clearRect(0,0,520,300);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,520,300);
   ctx.fillStyle=result==='WIN'?'#22c55e':result==='LOSE'?'#ef4444':'#fbbf24';
   ctx.font='bold 32px sans-serif';ctx.textAlign='center';
   ctx.fillText(result==='WIN'?'🏆 승리!':result==='LOSE'?'😢 패배':'🤝 무승부',260,100);
   ctx.fillStyle='#fff';ctx.font='bold 18px sans-serif';
   ctx.fillText('나 '+playerScore+' vs '+rivalScore+' '+rival.name,260,145);
   ctx.fillStyle='#a78bfa';ctx.font='13px sans-serif';
   ctx.fillText('전적: '+battleRecord.wins+'승 '+battleRecord.losses+'패 '+battleRecord.draws+'무',260,175);
   statusDiv.innerHTML='<span style="color:'+(result==='WIN'?'#22c55e':'#ef4444')+'">'+rival.icon+' '+rival.name+' vs 배틀 '+'— '+(result==='WIN'?'승리!':result==='LOSE'?'패배':'무승부')+'</span>';
   if(result==='WIN')checkAch16('battle_win',true);
   if(battleRecord.wins>=5)checkAch16('battle_5wins',true);
   return;
  }
  var cat=categories[currentRound%categories.length];
  var pRoll=50+Math.floor(Math.random()*50);
  var rRoll=rival.base+Math.floor(Math.random()*(100-rival.base));
  if(pRoll>rRoll)playerScore++;else if(rRoll>pRoll)rivalScore++;

  ctx.clearRect(0,0,520,300);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,520,300);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('Round '+(currentRound+1)+'/'+rounds+' — '+cat,260,30);
  ctx.fillStyle='#3b82f6';ctx.font='bold 20px sans-serif';ctx.fillText('나: '+pRoll,150,100);
  ctx.fillStyle='#ef4444';ctx.fillText(rival.name+': '+rRoll,380,100);
  var pBarW=200*pRoll/100,rBarW=200*rRoll/100;
  ctx.fillStyle='rgba(59,130,246,.3)';ctx.fillRect(50,120,200,20);
  ctx.fillStyle='#3b82f6';ctx.fillRect(50,120,pBarW,20);
  ctx.fillStyle='rgba(239,68,68,.3)';ctx.fillRect(270,120,200,20);
  ctx.fillStyle='#ef4444';ctx.fillRect(270,120,rBarW,20);
  ctx.fillStyle=pRoll>rRoll?'#22c55e':'#ef4444';ctx.font='bold 16px sans-serif';
  ctx.fillText(pRoll>rRoll?'✔ 승리!':pRoll<rRoll?'✘ 패배':'═ 무승부',260,170);
  ctx.fillStyle='#fff';ctx.font='bold 14px sans-serif';
  ctx.fillText('누적: 나 '+playerScore+' vs '+rivalScore+' '+rival.name,260,210);
  statusDiv.innerHTML='Round '+(currentRound+1)+': '+cat+' — <strong>'+(pRoll>rRoll?'승리':'패배')+'</strong>';
  sfx16(pRoll>rRoll?'battleWin':'battleLose');
  currentRound++;
  setTimeout(playRound,1800);
 }
 playRound();
}

/* ══════════════════════════════════════════════════
   Feature 3: Voice EQ Visualizer Canvas (8 bands)
   ══════════════════════════════════════════════════ */
var eqPresets=[
 {name:'플랫',vals:[50,50,50,50,50,50,50,50]},
 {name:'발라드',vals:[70,65,55,50,55,65,70,60]},
 {name:'록',vals:[60,45,50,55,65,70,65,55]},
 {name:'R&B',vals:[65,60,50,45,50,60,70,65]},
 {name:'댓슱',vals:[55,50,60,70,65,55,50,55]},
 {name:'아카펠라',vals:[65,70,60,50,50,55,65,70]}
];
var eqBands=['63Hz','125Hz','250Hz','500Hz','1kHz','2kHz','4kHz','8kHz'];
var currentEQ=ls16('eqPreset',0);
var customEQ=ls16('customEQ',[50,50,50,50,50,50,50,50]);

function openVoiceEQ(){
 sfx16('eqAdjust');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='8밴드 보이스 이퀘라이저. 프리셋을 선택하거나 직접 조절하세요.';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=520;cvs.height=260;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:10px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 var presetDiv=document.createElement('div');presetDiv.style.cssText='display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-top:10px';
 eqPresets.forEach(function(p,i){
  var btn=document.createElement('button');btn.textContent=p.name;
  btn.style.cssText='padding:6px 14px;border-radius:16px;border:1px solid '+(i===currentEQ?'#ec4899':'rgba(168,85,247,.2)')+';background:'+(i===currentEQ?'rgba(236,72,153,.2)':'rgba(168,85,247,.06)')+';color:'+(i===currentEQ?'#ec4899':'#a855f7')+';font-size:.8em;cursor:pointer';
  btn.onclick=function(){currentEQ=i;customEQ=p.vals.slice();ls16s('eqPreset',currentEQ);ls16s('customEQ',customEQ);sfx16('eqAdjust');openVoiceEQ();};
  presetDiv.appendChild(btn);
 });
 wrap.appendChild(presetDiv);

 var vals=customEQ;
 var ctx=cvs.getContext('2d');
 function drawEQ(){
  ctx.clearRect(0,0,520,260);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,520,260);
  ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎧 보이스 이퀘라이저',260,20);
  var barW=40,gap=20,startX=40,baseY=230,maxH=170;
  var grad=ctx.createLinearGradient(0,baseY-maxH,0,baseY);
  grad.addColorStop(0,'#ec4899');grad.addColorStop(0.5,'#a855f7');grad.addColorStop(1,'#3b82f6');
  for(var i=0;i<8;i++){
   var x=startX+i*(barW+gap);
   var h=vals[i]/100*maxH;
   ctx.fillStyle='rgba(168,85,247,.08)';ctx.fillRect(x,baseY-maxH,barW,maxH);
   ctx.fillStyle=grad;ctx.fillRect(x,baseY-h,barW,h);
   ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=1;ctx.strokeRect(x,baseY-maxH,barW,maxH);
   ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='center';
   ctx.fillText(eqBands[i],x+barW/2,baseY+14);
   ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';
   ctx.fillText(vals[i]+'%',x+barW/2,baseY-h-6);
   for(var line=0;line<=4;line++){
    var ly=baseY-line*(maxH/4);
    ctx.strokeStyle='rgba(168,85,247,.06)';ctx.beginPath();ctx.moveTo(x,ly);ctx.lineTo(x+barW,ly);ctx.stroke();
   }
  }
  ctx.beginPath();ctx.strokeStyle='#ec4899';ctx.lineWidth=2;
  for(var j=0;j<8;j++){
   var bx=startX+j*(barW+gap)+barW/2;
   var by=baseY-vals[j]/100*maxH;
   if(j===0)ctx.moveTo(bx,by);else ctx.lineTo(bx,by);
  }
  ctx.stroke();
 }
 drawEQ();

 var slidersDiv=document.createElement('div');slidersDiv.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:10px';
 eqBands.forEach(function(band,i){
  var sd=document.createElement('div');sd.style.cssText='text-align:center';
  sd.innerHTML='<div style="color:#a78bfa;font-size:.7em;margin-bottom:2px">'+band+'</div>';
  var slider=document.createElement('input');slider.type='range';slider.min=0;slider.max=100;slider.value=vals[i];
  slider.style.cssText='width:100%;accent-color:#ec4899';
  slider.oninput=function(){vals[i]=parseInt(this.value);customEQ[i]=vals[i];ls16s('customEQ',customEQ);drawEQ();};
  sd.appendChild(slider);slidersDiv.appendChild(sd);
 });
 wrap.appendChild(slidersDiv);
 v16M('v16-eq','🎧 보이스 이퀘라이저',wrap);
 checkAch16('eq_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 4: Daily/Weekly Challenge System
   ══════════════════════════════════════════════════ */
var challengeTypes=[
 {id:'sing3',title:'오늘 3곡 부르기',desc:'오늘 3곡을 부르세요',icon:'🎤',target:3,type:'daily'},
 {id:'score80',title:'80점 이상 달성',desc:'음정 80점 이상 받기',icon:'🎯',target:1,type:'daily'},
 {id:'newGenre',title:'새로운 장르 도전',desc:'안 부른 장르의 곡 부르기',icon:'🌟',target:1,type:'daily'},
 {id:'warmup',title:'워밍업 완료',desc:'보컬 워밍업 수행',icon:'🔥',target:1,type:'daily'},
 {id:'sing15w',title:'주간 15곡 부르기',desc:'이번 주에 15곡 부르기',icon:'📊',target:15,type:'weekly'},
 {id:'quiz10w',title:'퀴즈 10문제 풀기',desc:'이번 주 퀴즈 10문제 풀기',icon:'🧠',target:10,type:'weekly'},
 {id:'battle3w',title:'배틀 3판 승리',desc:'이번 주 배틀 3판 승리',icon:'⚔️',target:3,type:'weekly'}
];
var challengeProgress=ls16('challenges',{});
var challengeCompleted=ls16('challengesDone',0);

function getTodayKey(){var d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function getWeekKey(){var d=new Date();var start=new Date(d);start.setDate(start.getDate()-start.getDay());return start.getFullYear()+'-'+(start.getMonth()+1)+'-'+start.getDate();}

function openChallenges(){
 sfx16('challengeNew');
 var todayK=getTodayKey(),weekK=getWeekKey();
 if(!challengeProgress[todayK])challengeProgress[todayK]={};
 if(!challengeProgress[weekK])challengeProgress[weekK]={};

 var html='<p style="color:#d4d4d8;font-size:.9em;margin-bottom:14px">일일/주간 챌린지를 완료하고 보상을 받으세요!</p>';
 html+='<div style="color:#ec4899;font-weight:bold;font-size:.95em;margin-bottom:8px;border-left:3px solid #ec4899;padding-left:8px">📅 오늘의 챌린지</div><div style="display:grid;gap:6px;margin-bottom:14px">';
 challengeTypes.filter(function(c){return c.type==='daily';}).forEach(function(ch){
  var prog=challengeProgress[todayK][ch.id]||0;
  var done=prog>=ch.target;
  html+='<div style="display:flex;align-items:center;gap:10px;padding:12px;background:linear-gradient(135deg,'+(done?'#064e3b':'#312e81')+','+(done?'#022c22':'#1e1b4b')+');border-radius:10px;border-left:3px solid '+(done?'#22c55e':'#6b7280')+'">';
  html+='<span style="font-size:1.5em">'+ch.icon+'</span><div style="flex:1"><div style="color:'+(done?'#22c55e':'#c084fc')+';font-weight:bold;font-size:.9em">'+ch.title+'</div><div style="color:#a78bfa;font-size:.75em;margin-top:2px">'+ch.desc+'</div>';
  html+='<div style="width:100%;height:5px;background:rgba(255,255,255,.1);border-radius:3px;margin-top:4px;overflow:hidden"><div style="height:100%;background:'+(done?'#22c55e':'linear-gradient(90deg,#ec4899,#a855f7)')+';width:'+Math.min(100,prog/ch.target*100)+'%;border-radius:3px"></div></div>';
  html+='<div style="color:#6b7280;font-size:.7em;margin-top:2px">'+Math.min(prog,ch.target)+'/'+ch.target+'</div>';
  html+='</div><span style="font-size:1.2em">'+(done?'✅':'⭕')+'</span></div>';
 });
 html+='</div>';
 html+='<div style="color:#a855f7;font-weight:bold;font-size:.95em;margin-bottom:8px;border-left:3px solid #a855f7;padding-left:8px">📈 주간 챌린지</div><div style="display:grid;gap:6px;margin-bottom:14px">';
 challengeTypes.filter(function(c){return c.type==='weekly';}).forEach(function(ch){
  var prog=challengeProgress[weekK][ch.id]||0;
  var done=prog>=ch.target;
  html+='<div style="display:flex;align-items:center;gap:10px;padding:12px;background:linear-gradient(135deg,'+(done?'#064e3b':'#312e81')+','+(done?'#022c22':'#1e1b4b')+');border-radius:10px;border-left:3px solid '+(done?'#22c55e':'#6b7280')+'">';
  html+='<span style="font-size:1.5em">'+ch.icon+'</span><div style="flex:1"><div style="color:'+(done?'#22c55e':'#c084fc')+';font-weight:bold;font-size:.9em">'+ch.title+'</div><div style="color:#a78bfa;font-size:.75em;margin-top:2px">'+ch.desc+'</div>';
  html+='<div style="width:100%;height:5px;background:rgba(255,255,255,.1);border-radius:3px;margin-top:4px;overflow:hidden"><div style="height:100%;background:'+(done?'#22c55e':'linear-gradient(90deg,#a855f7,#3b82f6)')+';width:'+Math.min(100,prog/ch.target*100)+'%;border-radius:3px"></div></div>';
  html+='<div style="color:#6b7280;font-size:.7em;margin-top:2px">'+Math.min(prog,ch.target)+'/'+ch.target+'</div>';
  html+='</div><span style="font-size:1.2em">'+(done?'✅':'⭕')+'</span></div>';
 });
 html+='</div>';
 var dailyDone=challengeTypes.filter(function(c){return c.type==='daily'&&(challengeProgress[todayK][c.id]||0)>=c.target;}).length;
 var weeklyDone=challengeTypes.filter(function(c){return c.type==='weekly'&&(challengeProgress[weekK][c.id]||0)>=c.target;}).length;
 html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px"><div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.8em">오늘</div><div style="color:#ec4899;font-size:1.3em;font-weight:bold">'+dailyDone+'/4</div></div><div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.8em">주간</div><div style="color:#a855f7;font-size:1.3em;font-weight:bold">'+weeklyDone+'/3</div></div><div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.8em">총 완료</div><div style="color:#fbbf24;font-size:1.3em;font-weight:bold">'+challengeCompleted+'</div></div></div>';
 v16M('v16-challenge','🏆 일일/주간 챌린지',html);
 checkAch16('challenge_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 5: Singer Growth Journal Canvas
   ══════════════════════════════════════════════════ */
var growthData=ls16('growth',{xp:0,level:1,milestones:[]});
var levelThresholds=[0,100,250,500,850,1300,1900,2600,3500,4600,6000];
var levelTitles=['입문자','초보 싱어','견습생','실력파','보컬리스트','무대의 별','마이크 마스터','스타 싱어','보컬 챔피언','레전드','보컬 갓'];

function calcLevel(){
 for(var i=levelThresholds.length-1;i>=0;i--){if(growthData.xp>=levelThresholds[i])return i+1;}
 return 1;
}

function openGrowthJournal(){
 sfx16('growthLvl');
 growthData.level=calcLevel();ls16s('growth',growthData);
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='노래를 부르고 활동할수록 XP가 쌓이고 레벨이 올라갑니다!';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=500;cvs.height=280;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:10px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 var ctx=cvs.getContext('2d');ctx.clearRect(0,0,500,280);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,500,280);
 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('🌟 싱어 성장 일지',250,22);

 var lvl=growthData.level;var title=levelTitles[Math.min(lvl-1,levelTitles.length-1)];
 var currentThreshold=levelThresholds[Math.min(lvl-1,levelThresholds.length-1)];
 var nextThreshold=lvl<levelThresholds.length?levelThresholds[lvl]:levelThresholds[levelThresholds.length-1]+1000;
 var progress=(growthData.xp-currentThreshold)/(nextThreshold-currentThreshold);

 ctx.fillStyle='#fbbf24';ctx.font='bold 36px sans-serif';ctx.fillText('Lv.'+lvl,250,75);
 ctx.fillStyle='#ec4899';ctx.font='bold 14px sans-serif';ctx.fillText(title,250,100);
 ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.fillText('XP: '+growthData.xp+' / '+nextThreshold,250,120);

 var barX=80,barY=135,barW=340,barH=18;
 ctx.fillStyle='rgba(168,85,247,.1)';ctx.beginPath();ctx.roundRect(barX,barY,barW,barH,9);ctx.fill();
 var grad=ctx.createLinearGradient(barX,0,barX+barW,0);grad.addColorStop(0,'#ec4899');grad.addColorStop(1,'#a855f7');
 ctx.fillStyle=grad;ctx.beginPath();ctx.roundRect(barX,barY,barW*Math.min(1,progress),barH,9);ctx.fill();
 ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
 ctx.fillText(Math.round(progress*100)+'%',barX+barW/2,barY+13);

 var nodeY=185,nodeR=18,nodeGap=42,startNX=30;
 for(var i=0;i<Math.min(11,levelTitles.length);i++){
  var nx=startNX+i*nodeGap;
  var reached=lvl>i;
  if(i>0){ctx.beginPath();ctx.moveTo(nx-nodeGap+nodeR,nodeY);ctx.lineTo(nx-nodeR,nodeY);ctx.strokeStyle=reached?'#a855f7':'rgba(168,85,247,.2)';ctx.lineWidth=2;ctx.stroke();}
  ctx.beginPath();ctx.arc(nx,nodeY,nodeR,0,Math.PI*2);
  ctx.fillStyle=reached?'rgba(168,85,247,.3)':'rgba(168,85,247,.05)';ctx.fill();
  ctx.strokeStyle=reached?'#a855f7':'rgba(168,85,247,.15)';ctx.lineWidth=reached?2:1;ctx.stroke();
  ctx.fillStyle=reached?'#fff':'#6b7280';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
  ctx.fillText(''+(i+1),nx,nodeY+4);
 }

 ctx.fillStyle='#6b7280';ctx.font='9px sans-serif';ctx.textAlign='center';
 for(var j=0;j<Math.min(11,levelTitles.length);j++){
  var tx=startNX+j*nodeGap;
  ctx.save();ctx.translate(tx,nodeY+nodeR+10);ctx.rotate(-Math.PI/6);
  ctx.fillStyle=lvl>j?'#a78bfa':'#4b5563';ctx.fillText(levelTitles[j],0,0);
  ctx.restore();
 }

 var archive=[];try{var raw=localStorage.getItem('sv15-perfArchive');if(!raw)raw=localStorage.getItem('sv14-perfArchive');if(raw)archive=JSON.parse(raw);}catch(e){}
 var autoXP=archive.length*15;
 if(autoXP>growthData.xp){growthData.xp=autoXP;growthData.level=calcLevel();ls16s('growth',growthData);}

 var statsDiv=document.createElement('div');statsDiv.style.cssText='margin-top:14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px';
 statsDiv.innerHTML='<div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.8em">레벨</div><div style="color:#fbbf24;font-size:1.5em;font-weight:bold">'+lvl+'</div></div><div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.8em">칭호</div><div style="color:#ec4899;font-size:.9em;font-weight:bold">'+title+'</div></div><div style="background:#312e81;border-radius:8px;padding:10px;text-align:center"><div style="color:#a78bfa;font-size:.8em">총 XP</div><div style="color:#c084fc;font-size:1.3em;font-weight:bold">'+growthData.xp+'</div></div>';
 wrap.appendChild(statsDiv);
 v16M('v16-growth','🌟 싱어 성장 일지',wrap);
 checkAch16('growth_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 6: Music Theory Mini Tutor (12 lessons)
   ══════════════════════════════════════════════════ */
var theoryLessons=[
 {id:'scale',icon:'🎵',title:'음계의 기초',cat:'음계',desc:'장음계(Major Scale)는 전전반전전전반 간격으로 구성됩니다. 도레미파솔라시도!',detail:'단음계(Minor)는 전반전전반전전. 같은 음으로 시작해도 분위기가 달라집니다.'},
 {id:'interval',icon:'📏',title:'음정 간격',cat:'음계',desc:'도와 레 사이는 장 2도, 도와 미 사이는 장 3도, 도와 솔 사이는 완전 5도입니다.',detail:'음정 간격을 익히면 화음을 이해하는 기초가 됩니다.'},
 {id:'chord',icon:'🎶',title:'코드의 원리',cat:'화성',desc:'메이저 코드는 1-3-5도, 마이너 코드는 1-♭3-5도로 구성됩니다.',detail:'메이저=밝은 느낌, 마이너=슬픈 느낌. 곡의 분위기를 결정합니다.'},
 {id:'progression',icon:'🔀',title:'코드 진행',cat:'화성',desc:'I-V-vi-IV는 가장 많이 쓰이는 코드 진행입니다. 많은 K-POP곡에 사용됩니다.',detail:'예: C-G-Am-F (C키). 이 진행으로 수백 곡이 만들어졌습니다.'},
 {id:'rhythm_t',icon:'🥁',title:'박자의 이해',cat:'리듬',desc:'4/4박자는 한 마디에 4비트. 3/4는 왜츠, 6/8은 컴파운드 박자입니다.',detail:'대부분의 K-POP은 4/4 박자입니다. 박자를 느끼며 부르세요.'},
 {id:'tempo',icon:'⏱️',title:'템포와 BPM',cat:'리듬',desc:'BPM(Beats Per Minute)은 빠르기입니다. 발라드는 60~80, 댓슱은 120~140BPM.',detail:'같은 곡도 BPM을 바꾸면 완전히 다른 분위기가 됩니다.'},
 {id:'key',icon:'🔑',title:'조(Key)의 이해',cat:'음계',desc:'C메이저는 #/♭ 없음. G메이저는 F#, F메이저는 B♭. 본인 음역에 맞는 조를 찾으세요.',detail:'조를 바꾸면(전조) 같은 멜로디가 높거나 낮아집니다.'},
 {id:'dynamics',icon:'📢',title:'다이나믹스',cat:'표현',desc:'pp(여리게)~ff(강하게). 강약 조절이 감정 전달의 핵심입니다.',detail:'발라드의 클라이맥스는 ff, 조용한 부분은 p. 대비가 감동을 만듭니다.'},
 {id:'vibrato_t',icon:'〰️',title:'비브라토',cat:'표현',desc:'음정을 자연스럽게 흔드는 기법. 음 끝에 적용하면 풍성한 음색이 됩니다.',detail:'빠른 비브라토=긴장감, 느린 비브라토=여유. 곡 분위기에 맞게 조절하세요.'},
 {id:'harmony',icon:'🎼',title:'하모니',cat:'화성',desc:'하모니는 두 이상의 음이 동시에 울리는 것. 3도/5도 하모니가 가장 자연스럽습니다.',detail:'듀엿에서 하모니 파트를 부르면 풍성한 소리가 됩니다.'},
 {id:'breathing',icon:'💨',title:'호흡 테크닉',cat:'표현',desc:'복식호흡으로 폐활량을 늘리세요. 숨을 배에 채우는 느낌으로!',detail:'들이쉬고 4초, 참고 4초, 내쉬고 8초. 매일 연습하면 폐활량이 늘어납니다.'},
 {id:'phrasing',icon:'💬',title:'프레이징',cat:'리듬',desc:'문장처럼 멜로디를 나누어 부르세요. 숨 쉬는 위치가 감정 전달의 핵심입니다.',detail:'가사의 의미 단위로 끊어 부르면 자연스럽습니다. 쉼표가 어디인지 미리 파악하세요.'}
];
var theoryRead=ls16('theoryRead',[]);

function openMusicTheory(){
 sfx16('theoryLearn');
 var html='<p style="color:#d4d4d8;font-size:.9em;margin-bottom:14px">노래를 더 잘 부르기 위한 음악 이론 미니 튜터!</p>';
 var cats=['음계','화성','리듬','표현'];
 cats.forEach(function(cat){
  html+='<div style="color:#3b82f6;font-weight:bold;font-size:.9em;margin:12px 0 6px;border-left:3px solid #3b82f6;padding-left:8px">'+cat+'</div><div style="display:grid;gap:6px">';
  theoryLessons.filter(function(l){return l.cat===cat;}).forEach(function(lesson){
   var read=theoryRead.indexOf(lesson.id)!==-1;
   html+='<div onclick="window.__v16ReadTheory(\''+lesson.id+'\')" style="cursor:pointer;padding:12px;background:linear-gradient(135deg,#312e81,#1e1b4b);border-radius:10px;border-left:3px solid '+(read?'#22c55e':'#6b7280')+'">';
   html+='<div style="display:flex;align-items:center;gap:8px"><span style="font-size:1.3em">'+lesson.icon+'</span><div style="flex:1"><div style="color:#c084fc;font-weight:bold;font-size:.9em">'+lesson.title+'</div><div style="color:#a78bfa;font-size:.8em;margin-top:3px">'+lesson.desc+'</div>';
   if(read)html+='<div style="color:#6b7280;font-size:.75em;margin-top:4px;padding:6px;background:rgba(168,85,247,.06);border-radius:6px">💡 '+lesson.detail+'</div>';
   html+='</div><span style="color:'+(read?'#22c55e':'#6b7280')+';">'+(read?'✓':'\xB7')+'</span></div></div>';
  });
  html+='</div>';
 });
 html+='<div style="margin-top:14px;background:#312e81;border-radius:8px;padding:12px;text-align:center"><div style="color:#a78bfa;font-size:.8em">학습 진도</div><div style="color:#3b82f6;font-size:1.5em;font-weight:bold">'+theoryRead.length+'/12</div><div style="width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;margin-top:6px;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,#3b82f6,#a855f7);border-radius:3px;width:'+(theoryRead.length/12*100)+'%"></div></div></div>';
 v16M('v16-theory','📚 음악 이론 미니 튜터',html);
 checkAch16('theory_view',true);
}
window.__v16ReadTheory=function(id){if(theoryRead.indexOf(id)===-1){theoryRead.push(id);ls16s('theoryRead',theoryRead);sfx16('theoryLearn');if(theoryRead.length>=6)checkAch16('theory_half',true);if(theoryRead.length>=12)checkAch16('theory_all',true);}openMusicTheory();};

/* ══════════════════════════════════════════════════
   Feature 7: Share Scorecard Generator Canvas PNG
   ══════════════════════════════════════════════════ */
function openScorecard(){
 sfx16('scorecard');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='나의 보컬 스코어카드를 생성하고 PNG로 다운로드하세요!';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=600;cvs.height=380;
 cvs.style.cssText='width:100%;background:#0a0818;border-radius:10px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 var archive=[];try{var raw=localStorage.getItem('sv15-perfArchive');if(!raw)raw=localStorage.getItem('sv14-perfArchive');if(raw)archive=JSON.parse(raw);}catch(e){}
 var totalSongs=archive.length;
 var avgScore=totalSongs>0?Math.round(archive.reduce(function(a,b){return a+(b.score||0);},0)/totalSongs):0;
 var bestScore=0;archive.forEach(function(p){if((p.score||0)>bestScore)bestScore=p.score;});
 var lvl=calcLevel();var title=levelTitles[Math.min(lvl-1,levelTitles.length-1)];
 var grade=avgScore>=90?'S':avgScore>=80?'A':avgScore>=65?'B':avgScore>=45?'C':'D';
 var streakData=ls16('streak',0);

 var ctx=cvs.getContext('2d');
 var bgGrad=ctx.createLinearGradient(0,0,600,380);bgGrad.addColorStop(0,'#1a0a2e');bgGrad.addColorStop(1,'#0f0a1e');
 ctx.fillStyle=bgGrad;ctx.fillRect(0,0,600,380);

 ctx.strokeStyle='#fbbf24';ctx.lineWidth=3;
 ctx.strokeRect(8,8,584,364);
 ctx.strokeStyle='rgba(251,191,36,.3)';ctx.lineWidth=1;
 ctx.strokeRect(14,14,572,352);

 ctx.fillStyle='#fbbf24';ctx.font='bold 20px sans-serif';ctx.textAlign='center';
 ctx.fillText('⭐ StarVoice 보컬 스코어카드 ⭐',300,45);
 ctx.fillStyle='#a78bfa';ctx.font='12px sans-serif';
 ctx.fillText('Generated by StarVoice v16',300,65);

 var gradeColor=grade==='S'?'#fbbf24':grade==='A'?'#22c55e':grade==='B'?'#3b82f6':grade==='C'?'#f59e0b':'#ef4444';
 ctx.fillStyle=gradeColor;ctx.font='bold 64px sans-serif';ctx.fillText(grade,300,140);
 ctx.fillStyle='#ec4899';ctx.font='bold 14px sans-serif';ctx.fillText(title,300,165);

 var stats=[
  {label:'총 곡수',value:totalSongs+'',color:'#c084fc'},
  {label:'평균 점수',value:avgScore+'',color:'#fbbf24'},
  {label:'최고 점수',value:bestScore+'',color:'#22c55e'},
  {label:'레벨',value:'Lv.'+lvl,color:'#ec4899'},
  {label:'스트릭',value:streakData+'일',color:'#f59e0b'},
  {label:'배틀 승리',value:battleRecord.wins+'',color:'#3b82f6'}
 ];
 var cardW=85,cardH=55,cardGap=8,startCX=35;
 stats.forEach(function(s,i){
  var cx=startCX+i*(cardW+cardGap),cy=190;
  ctx.fillStyle='rgba(49,46,129,.5)';ctx.beginPath();ctx.roundRect(cx,cy,cardW,cardH,8);ctx.fill();
  ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.fillText(s.label,cx+cardW/2,cy+18);
  ctx.fillStyle=s.color;ctx.font='bold 18px sans-serif';ctx.fillText(s.value,cx+cardW/2,cy+42);
 });

 var genreCount={};archive.forEach(function(p){if(p.genre)genreCount[p.genre]=(genreCount[p.genre]||0)+1;});
 var topGenres=Object.keys(genreCount).sort(function(a,b){return genreCount[b]-genreCount[a];}).slice(0,4);
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
 ctx.fillText('선호 장르: '+topGenres.join(' / '),300,280);

 var today=new Date();var dateStr=today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();
 ctx.fillStyle='#6b7280';ctx.font='10px sans-serif';ctx.fillText(dateStr+' | starvoice.app',300,360);

 var dlBtn=document.createElement('button');dlBtn.textContent='💾 PNG 다운로드';
 dlBtn.style.cssText='margin-top:10px;width:100%;padding:12px;background:linear-gradient(135deg,#7c3aed,#ec4899);border:none;border-radius:10px;color:#fff;font-size:.95em;font-weight:bold;cursor:pointer';
 dlBtn.onclick=function(){
  var link=document.createElement('a');link.download='starvoice-scorecard.png';link.href=cvs.toDataURL('image/png');link.click();
  sfx16('scorecard');checkAch16('scorecard_dl',true);
 };
 wrap.appendChild(dlBtn);

 var clipBtn=document.createElement('button');clipBtn.textContent='📋 클립보드 복사';
 clipBtn.style.cssText='margin-top:6px;width:100%;padding:10px;background:rgba(168,85,247,.15);border:1px solid rgba(168,85,247,.2);border-radius:10px;color:#a855f7;font-size:.85em;cursor:pointer';
 clipBtn.onclick=function(){
  cvs.toBlob(function(blob){if(blob&&navigator.clipboard&&navigator.clipboard.write){navigator.clipboard.write([new ClipboardItem({'image/png':blob})]).then(function(){clipBtn.textContent='✅ 복사 완료!';setTimeout(function(){clipBtn.textContent='📋 클립보드 복사';},2000);});}else{clipBtn.textContent='❌ 브라우저 미지원';}});
 };
 wrap.appendChild(clipBtn);
 v16M('v16-scorecard','🏅 보컬 스코어카드',wrap);
 checkAch16('scorecard_view',true);
}

/* ══════════════════════════════════════════════════
   Feature 8: Vocal Style Comparator Canvas (6 axes)
   ══════════════════════════════════════════════════ */
var vocalStyles=[
 {name:'발라드',icon:'🌙',axes:[90,70,80,85,75,60]},
 {name:'댓슱',icon:'💃',axes:[50,90,60,55,80,85]},
 {name:'록',icon:'🤘',axes:[60,65,95,45,70,75]},
 {name:'R&B',icon:'🌟',axes:[80,75,70,90,85,65]},
 {name:'트로트',icon:'🎵',axes:[70,60,55,75,90,80]},
 {name:'래퍼',icon:'🎤',axes:[40,95,70,50,65,90]},
 {name:'인디',icon:'🌿',axes:[75,55,65,80,70,60]},
 {name:'민요',icon:'🎶',axes:[85,50,60,90,80,55]}
];
var styleAxes=['감성','리듬','파워','호흡','비브라토','무대력'];
var styleColors=['#ec4899','#a855f7','#3b82f6','#22c55e','#fbbf24','#ef4444'];
var selectedStyles=ls16('selectedStyles',[0,1]);

function openStyleComparator(){
 sfx16('styleCompare');
 var wrap=document.createElement('div');
 var info=document.createElement('div');info.style.cssText='text-align:center;color:#d4d4d8;margin-bottom:14px;font-size:.9em';
 info.textContent='보컬 스타일을 6축 레이더로 비교 분석합니다. 2개까지 선택 가능.';
 wrap.appendChild(info);

 var cvs=document.createElement('canvas');cvs.width=460;cvs.height=400;
 cvs.style.cssText='width:100%;max-width:460px;background:#0a0818;border-radius:10px;display:block;margin:0 auto';
 wrap.appendChild(cvs);

 function drawRadar(){
  var ctx=cvs.getContext('2d'),cx=230,cy=200,r=140;
  ctx.clearRect(0,0,460,400);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,460,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
  ctx.fillText('🎧 보컬 스타일 비교 분석기',230,20);

  for(var lev=1;lev<=5;lev++){
   ctx.beginPath();ctx.strokeStyle='rgba(168,85,247,'+(0.05+lev*0.03)+')';ctx.lineWidth=1;
   for(var j=0;j<6;j++){var angle=-Math.PI/2+j*(Math.PI/3);var px=cx+Math.cos(angle)*(r*lev/5);var py=cy+Math.sin(angle)*(r*lev/5);if(j===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}
   ctx.closePath();ctx.stroke();
  }
  for(var k=0;k<6;k++){var angle=-Math.PI/2+k*(Math.PI/3);ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);ctx.strokeStyle='rgba(168,85,247,.12)';ctx.lineWidth=1;ctx.stroke();}

  var drawColors=['#ec4899','#3b82f6'];
  selectedStyles.forEach(function(si,idx){
   var style=vocalStyles[si];if(!style)return;
   ctx.beginPath();var grad=ctx.createRadialGradient(cx,cy,0,cx,cy,r);
   grad.addColorStop(0,drawColors[idx]==='#ec4899'?'rgba(236,72,153,.15)':'rgba(59,130,246,.15)');
   grad.addColorStop(1,drawColors[idx]==='#ec4899'?'rgba(236,72,153,.03)':'rgba(59,130,246,.03)');
   ctx.fillStyle=grad;ctx.strokeStyle=drawColors[idx];ctx.lineWidth=2.5;
   for(var m=0;m<6;m++){var angle=-Math.PI/2+m*(Math.PI/3);var val=style.axes[m]/100*r;var px=cx+Math.cos(angle)*val;var py=cy+Math.sin(angle)*val;if(m===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}
   ctx.closePath();ctx.fill();ctx.stroke();
   for(var n=0;n<6;n++){var angle=-Math.PI/2+n*(Math.PI/3);var val=style.axes[n]/100*r;var px=cx+Math.cos(angle)*val;var py=cy+Math.sin(angle)*val;ctx.beginPath();ctx.arc(px,py,5,0,Math.PI*2);ctx.fillStyle=drawColors[idx];ctx.fill();}
  });

  ctx.font='bold 11px sans-serif';ctx.textAlign='center';
  for(var p=0;p<6;p++){var angle=-Math.PI/2+p*(Math.PI/3);var lx=cx+Math.cos(angle)*(r+22);var ly=cy+Math.sin(angle)*(r+22);ctx.fillStyle=styleColors[p];ctx.fillText(styleAxes[p],lx,ly);}

  ctx.font='11px sans-serif';ctx.textAlign='left';
  selectedStyles.forEach(function(si,idx){
   var style=vocalStyles[si];if(!style)return;
   ctx.fillStyle=drawColors[idx];ctx.fillText(style.icon+' '+style.name,20+idx*220,385);
  });
 }
 drawRadar();

 var selectDiv=document.createElement('div');selectDiv.style.cssText='display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-top:10px';
 vocalStyles.forEach(function(style,i){
  var isSelected=selectedStyles.indexOf(i)!==-1;
  var btn=document.createElement('button');btn.textContent=style.icon+' '+style.name;
  btn.style.cssText='padding:5px 12px;border-radius:14px;border:1px solid '+(isSelected?'#ec4899':'rgba(168,85,247,.2)')+';background:'+(isSelected?'rgba(236,72,153,.2)':'rgba(168,85,247,.06)')+';color:'+(isSelected?'#ec4899':'#a855f7')+';font-size:.8em;cursor:pointer';
  btn.onclick=function(){
   var idx=selectedStyles.indexOf(i);
   if(idx!==-1)selectedStyles.splice(idx,1);
   else{if(selectedStyles.length>=2)selectedStyles.shift();selectedStyles.push(i);}
   ls16s('selectedStyles',selectedStyles);sfx16('styleCompare');openStyleComparator();
  };
  selectDiv.appendChild(btn);
 });
 wrap.appendChild(selectDiv);
 v16M('v16-style','🎧 보컬 스타일 비교 분석기',wrap);
 checkAch16('style_view',true);
}

/* ══════════════════════════════════════════════════
   Quiz v16: +15 questions (132 -> 147)
   ══════════════════════════════════════════════════ */
var v16Quizzes=[
 {q:'장음계(Major Scale)의 간격 패턴은?',a:['전전반전전전반','반전반전반전반','전전전반전전반','반반전전반반전'],c:0},
 {q:'I-V-vi-IV 코드 진행을 C키로 연주하면?',a:['C-G-Am-F','C-F-G-Am','Am-F-C-G','C-D-Em-G'],c:0},
 {q:'BPM이 120인 곡의 한 박자는 몇 밀리초?',a:['250ms','500ms','1000ms','750ms'],c:1},
 {q:'OMG를 부른 그룹은?',a:['aespa','ITZY','NewJeans','IVE'],c:2},
 {q:'미이너 코드의 3음은 어떻게 다른가요?',a:['반음 높음','반음 낮음','온음 높음','같음'],c:1},
 {q:'pp(pianissimo)는 어떤 의미인가요?',a:['매우 강하게','매우 여리게','점점 빠르게','점점 느리게'],c:1},
 {q:'4/4 박자에서 강박은 몇 번째 박자인가요?',a:['1번','​2번','3번','4번'],c:0},
 {q:'복식호흡의 핵심 원리는?',a:['가슴으로 숨쉬기','배로 숨쉬기','코로만 숨쉬기','입으로만 숨쉬기'],c:1},
 {q:'밤양갱을 부른 가수는?',a:['아이유','비비','태연','익순'],c:1},
 {q:'보컬 배틀에서 승리하려면 가장 중요한 것은?',a:['음량','음정 정확도','빠른 템포','큰 소리'],c:1},
 {q:'3도 하모니란 어떤 음정 간격인가요?',a:['도-미','도-파','도-솔','도-시'],c:0},
 {q:'프레이징(Phrasing)이란?',a:['매우 빠르게 부르기','문장처럼 멜로디 나누기','높은 음만 부르기','같은 음 반복하기'],c:1},
 {q:'고민중독을 부른 그룹은?',a:['QWER','NewJeans','aespa','IVE'],c:0},
 {q:'이퀘라이저에서 4kHz 대역은 주로 어떤 소리인가요?',a:['저음 부분','음성의 맑음/명료도','초저주파','바람 소리'],c:1},
 {q:'StarVoice v16에서 총 몇 곡이 수록되어 있나요?',a:['125곡','130곡','135곡','140곡'],c:2}
];
(function injectQuiz16(){var tries=0;function attempt(){if(window.quizData&&Array.isArray(window.quizData)){v16Quizzes.forEach(function(q){if(!window.quizData.find(function(x){return x.q===q.q;}))window.quizData.push(q);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ══════════════════════════════════════════════════
   Achievements v16: +12 (114 -> 126)
   ══════════════════════════════════════════════════ */
var v16Achievements=[
 {id:'pitch_view',name:'🎯 음정 분석가',desc:'음정 마스터리 트래커 확인',icon:'🎯'},
 {id:'battle_view',name:'⚔️ 배틀 도전자',desc:'보컬 배틀 토너먼트 입장',icon:'⚔️'},
 {id:'battle_win',name:'🏆 첫 승리',desc:'보컬 배틀에서 첫 승리',icon:'🏆'},
 {id:'battle_5wins',name:'🌟 5승 달성',desc:'보컬 배틀 5승 달성',icon:'🌟'},
 {id:'eq_view',name:'🎧 음향 엔지니어',desc:'보이스 이퀘라이저 확인',icon:'🎧'},
 {id:'challenge_view',name:'🏆 챌린저',desc:'일일/주간 챌린지 확인',icon:'🏆'},
 {id:'growth_view',name:'🌟 성장 스토리',desc:'싱어 성장 일지 확인',icon:'🌟'},
 {id:'theory_view',name:'📚 이론 학생',desc:'음악 이론 미니 튜터 확인',icon:'📚'},
 {id:'theory_half',name:'📖 중급 이론가',desc:'음악 이론 6개 이상 학습',icon:'📖'},
 {id:'scorecard_view',name:'🏅 카드 제작자',desc:'보컬 스코어카드 생성',icon:'🏅'},
 {id:'style_view',name:'🎧 스타일 분석가',desc:'보컬 스타일 비교 분석기 확인',icon:'🎧'},
 {id:'v16_explorer',name:'🚀 v16 탐험가',desc:'v16 기능 4개 이상 사용',icon:'🚀'}
];
var ach16Unlocked=ls16('achievements',[]);

function checkAch16(id,cond){
 if(!cond||ach16Unlocked.indexOf(id)!==-1)return;
 ach16Unlocked.push(id);ls16s('achievements',ach16Unlocked);
 var ach=v16Achievements.find(function(a){return a.id===id;});if(!ach)return;
 sfx16('achieve16');
 var toast=document.createElement('div');toast.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);z-index:999999;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;padding:12px 24px;border-radius:12px;font-size:.9em;box-shadow:0 4px 20px rgba(236,72,153,.5);text-align:center;max-width:90%';
 toast.innerHTML='🏆 <strong>'+ach.name+'</strong> — '+ach.desc;
 document.body.appendChild(toast);setTimeout(function(){toast.style.opacity='0';toast.style.transition='opacity .5s';setTimeout(function(){toast.remove();},500);},3000);
 var used=0;['pitch_view','battle_view','eq_view','challenge_view','growth_view','theory_view','scorecard_view','style_view'].forEach(function(a){if(ach16Unlocked.indexOf(a)!==-1)used++;});
 if(used>=4)checkAch16('v16_explorer',true);
}
(function injectAchievements16(){var tries=0;function attempt(){if(window.ACHIEVEMENTS&&Array.isArray(window.ACHIEVEMENTS)){v16Achievements.forEach(function(a){if(!window.ACHIEVEMENTS.find(function(x){return x.id===a.id;}))window.ACHIEVEMENTS.push(a);});}else if(tries++<50)setTimeout(attempt,250);}attempt();})();

/* ══════════════════════════════════════════════════
   Keyboard Shortcuts v16 (+8)
   ══════════════════════════════════════════════════ */
document.addEventListener('keydown',function(e){
 if(document.activeElement&&(document.activeElement.tagName==='INPUT'||document.activeElement.tagName==='TEXTAREA'))return;
 if(!e.shiftKey)return;
 switch(e.key){case 'Q':e.preventDefault();openPitchMastery();break;case 'W':e.preventDefault();openVocalBattle();break;case 'E':e.preventDefault();openVoiceEQ();break;case 'C':e.preventDefault();openChallenges();break;case 'X':e.preventDefault();openGrowthJournal();break;case 'T':e.preventDefault();openMusicTheory();break;case 'S':e.preventDefault();openScorecard();break;case 'A':e.preventDefault();openStyleComparator();break;}
});

/* ══════════════════════════════════════════════════
   Scroll Navigation Bar v16
   ══════════════════════════════════════════════════ */
(function injectUI16(){
 var tries=0;
 function attempt(){
  var app=document.getElementById('app')||document.body;
  if(!app||!document.getElementById('songSelect')){if(tries++<50){setTimeout(attempt,250);return;}}
  var style=document.createElement('style');
  style.textContent='.v16-nav{position:fixed;bottom:88px;left:0;right:0;z-index:9998;background:linear-gradient(180deg,transparent,rgba(10,8,24,.92) 30%);padding:6px 8px;display:flex;gap:4px;justify-content:center;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.v16-nav::-webkit-scrollbar{height:0}.v16-nav button{flex-shrink:0;padding:5px 9px;border-radius:14px;border:1px solid rgba(59,130,246,.2);background:rgba(59,130,246,.06);color:#3b82f6;font-size:10px;cursor:pointer;white-space:nowrap;transition:all .2s}.v16-nav button:hover,.v16-nav button:active{background:rgba(59,130,246,.2);border-color:#3b82f6}';
  document.head.appendChild(style);
  var nav=document.createElement('div');nav.className='v16-nav';
  var btns=[{text:'🎯 음정',fn:openPitchMastery},{text:'⚔️ 배틀',fn:openVocalBattle},{text:'🎧 EQ',fn:openVoiceEQ},{text:'🏆 챌린지',fn:openChallenges},{text:'🌟 성장',fn:openGrowthJournal},{text:'📚 이론',fn:openMusicTheory},{text:'🏅 카드',fn:openScorecard},{text:'🎧 스타일',fn:openStyleComparator}];
  btns.forEach(function(b){var btn=document.createElement('button');btn.textContent=b.text;btn.onclick=b.fn;nav.appendChild(btn);});
  document.body.appendChild(nav);
  var existingNav=document.querySelector('.v15-nav');if(existingNav)existingNav.style.bottom='44px';
 }
 attempt();
})();

console.log('[v16] StarVoice v16 loaded: +10songs(135), PitchMastery, VocalBattle8, VoiceEQ8band, Challenges7, SingerGrowth11lv, MusicTheory12, Scorecard PNG, StyleComparator6ax, +15quiz(147), +12ach(126), SFX12, KB+8');
})();
