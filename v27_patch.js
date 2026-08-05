/* StarVoice v27 Patch — Self-contained IIFE module injected via SW
 * +10 songs(235->245), VocalIntonationHeatmap Canvas, SongDifficultyMatcher Canvas,
 * HarmonicOvertoneAnalyzer Canvas, PartyScoreboard Canvas,
 * EmotionColorPalette Canvas, VocalEnergyCurve Canvas,
 * DictionClarityAnalyzer Canvas, GrowthDashboard Canvas,
 * quiz +15(297->312), achievements +12(246->258), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v27KaraokeLoaded) return;
window.__v27KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls27(k,d){try{var v=localStorage.getItem('sv27-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls27s(k,v){try{localStorage.setItem('sv27-'+k,JSON.stringify(v));}catch(e){}}
function gradeFor27(pct){return pct>=90?'S':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';}
function gradeColor27(g){return g==='S'?'#fbbf24':g==='A'?'#34d399':g==='B'?'#60a5fa':g==='C'?'#c084fc':'#f87171';}
function cxy27(cv,e){var r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)*(cv.width/r.width),y:(e.clientY-r.top)*(cv.height/r.height)};}

/* ── 10 New Songs (236-245) ── */
var v27Songs=[
{id:236,title:'Ditto',artist:'NewJeans',bpm:100,key:'C',difficulty:2,genre:'pop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['Di','tto','같','은','마','음','이','야','너','도','나','처','럼','느','끼','니'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:237,title:'Seven',artist:'정국(Jung Kook)',bpm:125,key:'D',difficulty:3,genre:'pop',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['Mon','day','Tues','day','Wed','nes','day','목','금','토','일','매','일','너','만','을'],
 duration:[360,360,360,720,360,360,360,360,360,360,360,720,360,360,360,360]},
{id:238,title:'SPOT!',artist:'ZICO feat. JENNIE',bpm:118,key:'Em',difficulty:3,genre:'hiphop',
 notes:[E3,G3,B3,E4,D4,B3,G3,E3,Fs3,A3,C4,E4,D4,C4,B3,A3],
 lyrics:['이','자','리','에','S','P','O','T','오','늘','밤','은','끝','없','이','가'],
 duration:[381,381,381,763,381,381,381,381,381,381,381,763,381,381,381,381]},
{id:239,title:'OMG',artist:'NewJeans',bpm:127,key:'F#m',difficulty:3,genre:'pop',
 notes:[Fs3,A3,Cs4,Fs4,E4,Cs4,A3,Fs3,Gs3,B3,Ds4,Fs4,E4,Ds4,Cs4,B3],
 lyrics:['Oh','my','god','어','쩌','면','좋','아','자','꾸','만','떨','려','요','나','만'],
 duration:[354,354,354,709,354,354,354,354,354,354,354,709,354,354,354,354]},
{id:240,title:'ETA',artist:'NewJeans',bpm:140,key:'Bb',difficulty:3,genre:'dance',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['너','의','E','T','A','가','궁','금','해','빨','리','와','줘','기','다','려'],
 duration:[321,321,321,643,321,321,321,321,321,321,321,643,321,321,321,321]},
{id:241,title:'우리들의 블루스',artist:'임영웅',bpm:68,key:'G',difficulty:2,genre:'ballad',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['바','다','가','들','려','주','는','노','래','에','귀','를','기','울','여','봐'],
 duration:[662,662,662,1324,662,662,662,662,662,662,662,1324,662,662,662,662]},
{id:242,title:'Drama',artist:'aespa',bpm:130,key:'Am',difficulty:4,genre:'dance',
 notes:[A3,C4,E4,A4,G4,E4,C4,A3,B3,D4,F4,A4,G4,F4,E4,D4],
 lyrics:['Dra','ma','시','작','된','이','무','대','위','에','서','빛','나','는','우','리'],
 duration:[346,346,346,692,346,346,346,346,346,346,346,692,346,346,346,346]},
{id:243,title:'이브, 프시케 그리고 푸른 수염의 아내',artist:'LE SSERAFIM',bpm:116,key:'Dm',difficulty:4,genre:'dance',
 notes:[D3,F3,A3,D4,C4,A3,F3,D3,E3,G3,Bb3,D4,C4,Bb3,A3,G3],
 lyrics:['금','지','된','열','매','를','베','어','물','었','네','달','콤','한','맛','에'],
 duration:[388,388,388,776,388,388,388,388,388,388,388,776,388,388,388,388]},
{id:244,title:'사건의 지평선',artist:'윤하(Younha)',bpm:82,key:'Eb',difficulty:3,genre:'ballad',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['한','순','간','에','너','를','삼','킨','이','까','만','어','둠','속','에','서'],
 duration:[549,549,549,1098,549,549,549,549,549,549,549,1098,549,549,549,549]},
{id:245,title:'FEARLESS',artist:'LE SSERAFIM',bpm:132,key:'Cm',difficulty:3,genre:'dance',
 notes:[C4,Eb4,G4,C5,Bb4,G4,Eb4,C4,D4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['Fear','less','두','려','움','없','이','달','려','가','는','거','야','멈','추','지'],
 duration:[341,341,341,682,341,341,341,341,341,341,341,682,341,341,341,341]}
];
(function injectSongs27(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v27Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX 16 sounds ── */
var actx27=null;
function sfx27(type){
 try{
  if(!actx27)actx27=new(window.AudioContext||window.webkitAudioContext)();
  var o=actx27.createOscillator(),g=actx27.createGain(),t=actx27.currentTime;
  o.connect(g);g.connect(actx27.destination);
  var presets={
   intonScan:{f:550,type:'sine',atk:0.01,dec:0.18,vol:0.18},
   intonHit:{f:770,type:'triangle',atk:0.01,dec:0.12,vol:0.2},
   diffMatch:{f:494,type:'sine',atk:0.02,dec:0.22,vol:0.2},
   diffResult:{f:698,type:'triangle',atk:0.01,dec:0.28,vol:0.22},
   overtoneRing:{f:880,type:'sine',atk:0.01,dec:0.3,vol:0.15},
   overtonePeak:{f:1047,type:'triangle',atk:0.01,dec:0.15,vol:0.18},
   partyCheer:{f:587,type:'square',atk:0.01,dec:0.12,vol:0.12},
   partyScore:{f:784,type:'sine',atk:0.01,dec:0.2,vol:0.2},
   emotionPick:{f:440,type:'sine',atk:0.02,dec:0.2,vol:0.18},
   emotionGlow:{f:659,type:'triangle',atk:0.02,dec:0.25,vol:0.15},
   energyPulse:{f:392,type:'sine',atk:0.01,dec:0.15,vol:0.18},
   energyPeak:{f:523,type:'triangle',atk:0.01,dec:0.2,vol:0.2},
   dictionCheck:{f:660,type:'sine',atk:0.01,dec:0.12,vol:0.17},
   dictionPass:{f:880,type:'triangle',atk:0.01,dec:0.2,vol:0.2},
   dashboardOpen:{f:494,type:'sine',atk:0.02,dec:0.2,vol:0.18},
   navClick27:{f:600,type:'sine',atk:0.01,dec:0.08,vol:0.12}
  };
  var p=presets[type]||presets.navClick27;
  o.type=p.type;o.frequency.setValueAtTime(p.f,t);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(p.vol,t+p.atk);
  g.gain.exponentialRampToValueAtTime(0.001,t+p.atk+p.dec);
  o.start(t);o.stop(t+p.atk+p.dec+0.05);
 }catch(e){}
}

/* ── Quiz +15 (297->312) ── */
var v27Quiz=[
{q:'보컬 &quot;인토네이션(Intonation)&quot;이란?',a:['음정의 정확도와 안정성','목소리 크기','리듬감','호흡 기술'],c:0},
{q:'하모닉 오버톤(Harmonic Overtone)에서 기본음 대비 2배 주파수를 무엇이라 하는가?',a:['제2배음(2nd Harmonic)','기본음','단음','잡음'],c:0},
{q:'노래방에서 &quot;키(Key)&quot;를 올리면 어떤 변화가 생기는가?',a:['모든 음이 반음 단위로 높아진다','템포가 빨라진다','볼륨이 커진다','가사가 바뀐다'],c:0},
{q:'보컬 에너지 커브에서 &quot;클라이맥스&quot;란?',a:['곡의 감정적 최고점','시작 부분','조용한 구간','아웃트로'],c:0},
{q:'딕션(Diction)이 보컬에서 중요한 이유는?',a:['가사 전달력과 청취자 이해도 향상','음정이 좋아져서','호흡이 편해져서','고음이 나와서'],c:0},
{q:'Smule 앱의 대표 기능은?',a:['전세계 유저와 실시간 듀엣 녹음','게임 기능','악기 연주','DJ 믹싱'],c:0},
{q:'보컬 성장 지표 중 &quot;음역 확장률&quot;이란?',a:['시간 경과에 따른 가용 음역 범위 변화','음정 정확도','리듬감 점수','호흡 지속시간'],c:0},
{q:'파티 스코어보드에서 개인 랭킹을 올리는 핵심 요소는?',a:['음정 정확도와 리듬 일치','곡 선택','목소리 크기','노래 길이'],c:0},
{q:'보컬 감정 표현에서 &quot;포르테(Forte)&quot;란?',a:['세게 부르는 강약 표현','약하게 부르기','빠르게 부르기','느리게 부르기'],c:0},
{q:'노래의 &quot;브릿지(Bridge)&quot; 구간이란?',a:['버스와 코러스를 연결하는 전환 구간','인트로','아웃트로','코러스'],c:0},
{q:'보컬 딕션 훈련에서 &quot;텅 트위스터(Tongue Twister)&quot;의 효과는?',a:['혀와 입술 근육 민첩성 향상','호흡 훈련','음정 교정','리듬 연습'],c:0},
{q:'NewJeans &quot;Ditto&quot;의 장르적 특징은?',a:['뉴진스 특유의 Y2K 감성 팝','트로트','클래식','재즈'],c:0},
{q:'보컬 하모닉스에서 &quot;포먼트(Formant)&quot;란?',a:['성도에서 공명으로 강조되는 주파수 대역','음정 단위','리듬 패턴','호흡법'],c:0},
{q:'StarMaker가 Smule 대비 강점인 기능은?',a:['AI 기반 실시간 음정 보정 피드백','단순 녹음만','악기 연주','DJ 기능'],c:0},
{q:'보컬의 &quot;레가토(Legato)&quot; 창법이란?',a:['음과 음을 부드럽게 연결하여 부르기','끊어 부르기','빠르게 반복','떨림 넣기'],c:0}
];
(function injectQuiz27(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v27Quiz.forEach(function(q){
    var exists=window.quizQuestions.some(function(x){return x.q===q.q;});
    if(!exists)window.quizQuestions.push(q);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements +12 (246->258) ── */
var v27Achievements=[
{id:'intonation_pro',name:'인토네이션 프로',desc:'음정 히트맵 분석 완료',icon:'🎯'},
{id:'difficulty_match',name:'난이도 매칭 달인',desc:'곡 난이도 적합도 90% 이상',icon:'🎚'},
{id:'overtone_hunter',name:'오버톤 헌터',desc:'하모닉 오버톤 8배음 분석 완료',icon:'🔊'},
{id:'party_king',name:'파티 킹',desc:'파티 스코어보드 1위 달성',icon:'🎉'},
{id:'emotion_artist',name:'감정의 화가',desc:'감정 컬러 팔레트 10감정 모두 탐험',icon:'🎨'},
{id:'energy_master',name:'에너지 마스터',desc:'보컬 에너지 커브 분석 완료',icon:'⚡'},
{id:'diction_clear',name:'딕션 클리어',desc:'딕션 명료도 80% 이상 달성',icon:'💬'},
{id:'growth_tracker',name:'성장 추적자',desc:'종합 성장 대시보드 확인',icon:'📈'},
{id:'quiz_v27_master',name:'퀴즈 마스터 v27',desc:'v27 퀴즈 전문 완료',icon:'🧠'},
{id:'song_245',name:'245곡 수집가',desc:'245곡 보유 달성',icon:'🎵'},
{id:'v27_explorer',name:'v27 탐험가',desc:'v27 기능 5개 이상 사용',icon:'🔍'},
{id:'v27_complete',name:'v27 마스터',desc:'v27 모든 기능 체험 완료',icon:'🏅'}
];
(function injectAchievements27(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v27Achievements.forEach(function(a){
    if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);
   });
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Feature 1: Vocal Intonation Heatmap Canvas 640x400 ── */
window.__sv27IntonationHeatmap=function(){
sfx27('intonScan');
var overlay=document.createElement('div');
overlay.id='sv27-intonation';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🎯 보컬 인토네이션 히트맵</h3><button id="sv27-inton-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-inton-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:crosshair;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">12음x5옥타브 음정 정확도 히트맵. 셀 클릭으로 상세 편차 확인. 녹색=정확, 빨간색=편차 큼.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-inton-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-inton-cv');
var ctx=cv.getContext('2d');
var noteNames=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
var octaves=['2','3','4','5','6'];
var data=[];
for(var oi=0;oi<5;oi++){var row=[];for(var ni=0;ni<12;ni++){row.push({acc:Math.random()*100,cent:(Math.random()-0.5)*40,count:Math.floor(Math.random()*50)});}data.push(row);}
var hoverCell={r:-1,c:-1};
var sessionHist=ls27('intonHist',[]);
if(sessionHist.length===0){for(var sh=0;sh<8;sh++){sessionHist.push(Math.random()*40+50);}ls27s('intonHist',sessionHist);}

function drawInton(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,640,400);
 var pad={l:45,r:15,t:40,b:70};
 var cw=(640-pad.l-pad.r)/12;
 var ch=(400-pad.t-pad.b)/5;

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 인토네이션 히트맵 (12음 × 5옥타브)',320,25);

 for(var oi=0;oi<5;oi++){
  ctx.fillStyle='#8b5cf6';ctx.font='10px sans-serif';ctx.textAlign='right';
  ctx.fillText(octaves[oi],pad.l-6,pad.t+oi*ch+ch/2+4);
  for(var ni=0;ni<12;ni++){
   var d=data[oi][ni];
   var x=pad.l+ni*cw;
   var y=pad.t+oi*ch;
   var h=d.acc>80?120:d.acc>60?60:d.acc>40?30:0;
   var s=d.acc>80?'70%':d.acc>60?'65%':d.acc>40?'60%':'55%';
   var l=d.acc>80?'45%':d.acc>60?'40%':d.acc>40?'35%':'30%';
   ctx.fillStyle='hsl('+h+','+s+','+l+')';
   ctx.fillRect(x+1,y+1,cw-2,ch-2);

   if(hoverCell.r===oi&&hoverCell.c===ni){
    ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;
    ctx.strokeRect(x,y,cw,ch);ctx.lineWidth=1;
   }

   ctx.fillStyle=d.acc>60?'#fff':'#ddd';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
   ctx.fillText(Math.round(d.acc)+'%',x+cw/2,y+ch/2+4);
  }
 }

 for(var ni=0;ni<12;ni++){
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText(noteNames[ni],pad.l+ni*cw+cw/2,pad.t+5*ch+14);
 }

 ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
 ctx.fillText('세션 정확도 추이',pad.l,pad.t+5*ch+35);
 var hw=640-pad.l-pad.r;
 var hh=25;
 var hy=pad.t+5*ch+40;
 ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;
 ctx.strokeRect(pad.l,hy,hw,hh);
 if(sessionHist.length>1){
  ctx.beginPath();ctx.strokeStyle='#34d399';ctx.lineWidth=2;
  for(var si=0;si<sessionHist.length;si++){
   var sx=pad.l+si*(hw/(sessionHist.length-1));
   var sy=hy+hh-(sessionHist[si]/100)*hh;
   if(si===0)ctx.moveTo(sx,sy);else ctx.lineTo(sx,sy);
  }
  ctx.stroke();ctx.lineWidth=1;
 }

 if(hoverCell.r>=0&&hoverCell.c>=0){
  var hd=data[hoverCell.r][hoverCell.c];
  var tx=Math.min(pad.l+hoverCell.c*cw+cw,500);
  var ty=Math.max(pad.t+hoverCell.r*ch-60,5);
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(tx,ty,130,55);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(tx,ty,130,55);
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(noteNames[hoverCell.c]+octaves[hoverCell.r],tx+5,ty+15);
  ctx.fillText('정확도: '+Math.round(hd.acc)+'% ('+gradeFor27(hd.acc)+')',tx+5,ty+30);
  ctx.fillText('편차: '+(hd.cent>0?'+':'')+hd.cent.toFixed(1)+' cent',tx+5,ty+45);
 }
}
drawInton();
cv.addEventListener('mousemove',function(e){
 var p=cxy27(cv,e);
 var pad={l:45,r:15,t:40,b:70};
 var cw=(640-pad.l-pad.r)/12;var ch=(400-pad.t-pad.b)/5;
 var c=Math.floor((p.x-pad.l)/cw);var r=Math.floor((p.y-pad.t)/ch);
 hoverCell=(c>=0&&c<12&&r>=0&&r<5)?{r:r,c:c}:{r:-1,c:-1};
 drawInton();
});
cv.addEventListener('mouseleave',function(){hoverCell={r:-1,c:-1};drawInton();});
cv.addEventListener('click',function(e){
 var p=cxy27(cv,e);
 var pad={l:45,r:15,t:40,b:70};
 var cw=(640-pad.l-pad.r)/12;var ch=(400-pad.t-pad.b)/5;
 var c=Math.floor((p.x-pad.l)/cw);var r=Math.floor((p.y-pad.t)/ch);
 if(c>=0&&c<12&&r>=0&&r<5){
  sfx27('intonHit');
  data[r][c].acc=Math.min(100,data[r][c].acc+Math.random()*10);
  data[r][c].cent*=0.8;
  drawInton();
 }
});
};

/* ── Feature 2: Song Difficulty Matcher Canvas 620x400 ── */
window.__sv27DifficultyMatcher=function(){
sfx27('diffMatch');
var overlay=document.createElement('div');
overlay.id='sv27-diff-match';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:660px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🎚 곡 난이도 적합도 매칭</h3><button id="sv27-diff-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-diff-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">8축 Radar로 실력과 곡 난이도 매칭. 클릭하여 곡 전환.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-diff-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-diff-cv');
var ctx=cv.getContext('2d');
var axes=['음정','리듬','음역','호흡','감정','테크닉','지구력','표현력'];
var songPool=[
 {name:'Ditto',skill:[65,70,55,60,75,50,70,72],diff:[60,65,50,55,70,45,65,68]},
 {name:'Seven',skill:[70,75,65,70,60,65,72,68],diff:[68,72,60,65,58,62,70,65]},
 {name:'APT.',skill:[60,80,50,55,70,55,65,60],diff:[55,75,45,50,65,50,60,55]},
 {name:'Supernova',skill:[80,85,75,70,65,80,60,70],diff:[78,82,72,68,63,78,58,68]},
 {name:'Drama',skill:[85,80,80,75,80,85,65,82],diff:[82,78,78,73,78,83,63,80]}
];
var curSong=0;

function drawMatcher(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);
 var cx=310,cy=210,maxR=140;
 var s=songPool[curSong];

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('곡 난이도 적합도 — '+s.name,310,25);

 for(var ring=1;ring<=5;ring++){
  ctx.beginPath();ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;
  for(var ai=0;ai<=8;ai++){
   var a=-Math.PI/2+ai*(Math.PI*2/8);
   var rx=cx+Math.cos(a)*maxR*(ring/5);
   var ry=cy+Math.sin(a)*maxR*(ring/5);
   if(ai===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
  }
  ctx.stroke();
  if(ring%2===0){ctx.fillStyle='#6b21a8';ctx.font='9px sans-serif';ctx.textAlign='left';ctx.fillText((ring*20)+'',cx+3,cy-maxR*(ring/5)+10);}
 }

 for(var ai=0;ai<8;ai++){
  var a=-Math.PI/2+ai*(Math.PI*2/8);
  ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*maxR,cy+Math.sin(a)*maxR);ctx.strokeStyle='#2d1b4e';ctx.stroke();
  ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='center';
  var lx=cx+Math.cos(a)*(maxR+18);var ly=cy+Math.sin(a)*(maxR+18)+4;
  ctx.fillText(axes[ai],lx,ly);
 }

 function drawRadar(vals,color,fill){
  ctx.beginPath();
  for(var i=0;i<=8;i++){
   var idx=i%8;var a=-Math.PI/2+idx*(Math.PI*2/8);
   var r=maxR*(vals[idx]/100);
   var px=cx+Math.cos(a)*r;var py=cy+Math.sin(a)*r;
   if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
  }
  ctx.closePath();
  if(fill){ctx.fillStyle=color;ctx.fill();}
  ctx.strokeStyle=color.replace('0.15','0.8').replace('0.2','0.9');ctx.lineWidth=2;ctx.stroke();ctx.lineWidth=1;
 }

 drawRadar(s.skill,'rgba(168,85,247,0.2)',true);
 drawRadar(s.diff,'rgba(251,191,36,0.15)',true);

 ctx.strokeStyle='#a855f7';ctx.lineWidth=2;
 ctx.beginPath();
 for(var i=0;i<=8;i++){var idx=i%8;var a=-Math.PI/2+idx*(Math.PI*2/8);var r=maxR*(s.skill[idx]/100);if(i===0)ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);else ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);}
 ctx.closePath();ctx.stroke();

 ctx.strokeStyle='#fbbf24';
 ctx.beginPath();
 for(var i=0;i<=8;i++){var idx=i%8;var a=-Math.PI/2+idx*(Math.PI*2/8);var r=maxR*(s.diff[idx]/100);if(i===0)ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);else ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);}
 ctx.closePath();ctx.stroke();ctx.lineWidth=1;

 var matchScore=0;
 for(var i=0;i<8;i++){matchScore+=100-Math.abs(s.skill[i]-s.diff[i]);}
 matchScore=matchScore/8;
 var grade=gradeFor27(matchScore);

 ctx.fillStyle='#1e1036';ctx.fillRect(15,370,200,25);
 ctx.fillStyle='#a855f7';ctx.fillRect(15,370,10,25);ctx.fillText('●',25,387);
 ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText('나의 실력',32,385);
 ctx.fillStyle='#fbbf24';ctx.fillRect(120,370,10,25);ctx.fillText('●',130,387);
 ctx.fillStyle='#fde68a';ctx.fillText('곡 난이도',137,385);

 ctx.fillStyle='#1e1036';ctx.fillRect(410,370,200,25);
 ctx.fillStyle=gradeColor27(grade);ctx.font='bold 13px sans-serif';ctx.textAlign='center';
 ctx.fillText('적합도: '+Math.round(matchScore)+'% ('+grade+')',510,387);

 ctx.fillStyle='#6b21a8';ctx.font='10px sans-serif';ctx.textAlign='center';
 ctx.fillText('클릭하여 곡 전환 ('+( curSong+1)+'/'+songPool.length+')',310,398);
}
drawMatcher();
cv.addEventListener('click',function(){
 sfx27('diffResult');
 curSong=(curSong+1)%songPool.length;
 drawMatcher();
});
};

/* ── Feature 3: Harmonic Overtone Analyzer Canvas 620x400 ── */
window.__sv27OvertoneAnalyzer=function(){
sfx27('overtoneRing');
var overlay=document.createElement('div');
overlay.id='sv27-overtone';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:660px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🔊 하모닉 오버톤 분석기</h3><button id="sv27-over-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-over-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:crosshair;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">8배음 스펙트럼 바차트. 기본음 대비 각 배음의 상대 강도. 클릭하여 배음별 상세.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-over-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-over-cv');
var ctx=cv.getContext('2d');
var harmonics=[
 {name:'기본음(F0)',freq:220,level:100,desc:'음높이를 결정하는 기본 주파수'},
 {name:'2nd',freq:440,level:72,desc:'옥타브 위. 밝고 풍부한 톤'},
 {name:'3rd',freq:660,level:55,desc:'완전5도+옥타브. 따뜻한 음색'},
 {name:'4th',freq:880,level:38,desc:'2옥타브 위. 선명한 톤'},
 {name:'5th',freq:1100,level:25,desc:'장3도+2옥타브. 비음 특성'},
 {name:'6th',freq:1320,level:18,desc:'완전5도+2옥타브. 공명 깊이'},
 {name:'7th',freq:1540,level:12,desc:'단7도+2옥타브. 날카로운 톤'},
 {name:'8th',freq:1760,level:8,desc:'3옥타브 위. 공기감 형성'}
];
var hoverH=-1;
var vowelModes=['아','에','이','오','우'];
var curVowel=0;

function drawOvertone(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);
 var pad={l:55,r:20,t:50,b:65};
 var w=620-pad.l-pad.r;
 var h=400-pad.t-pad.b;
 var barW=w/8-8;

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('하모닉 오버톤 분석기 — 모음: '+vowelModes[curVowel],310,25);
 ctx.fillStyle='#6b21a8';ctx.font='10px sans-serif';
 ctx.fillText('클릭하여 모음 전환',310,40);

 ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;
 for(var gy=0;gy<=100;gy+=20){
  var yy=pad.t+h-h*(gy/100);
  ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(620-pad.r,yy);ctx.stroke();
  ctx.fillStyle='#8b5cf6';ctx.font='10px sans-serif';ctx.textAlign='right';
  ctx.fillText(gy+'%',pad.l-5,yy+4);
 }

 for(var i=0;i<8;i++){
  var x=pad.l+i*(barW+8)+4;
  var bh=h*(harmonics[i].level/100);
  var hue=280-i*15;
  var alpha=hoverH===i?1:0.8;
  var grd=ctx.createLinearGradient(x,pad.t+h-bh,x,pad.t+h);
  grd.addColorStop(0,'hsla('+hue+',70%,60%,'+alpha+')');
  grd.addColorStop(1,'hsla('+hue+',70%,30%,'+alpha+')');
  ctx.fillStyle=grd;
  ctx.fillRect(x,pad.t+h-bh,barW,bh);

  if(hoverH===i){
   ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;
   ctx.strokeRect(x-1,pad.t+h-bh-1,barW+2,bh+2);ctx.lineWidth=1;
  }

  ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
  ctx.fillText(harmonics[i].level+'%',x+barW/2,pad.t+h-bh-6);

  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText(harmonics[i].name,x+barW/2,pad.t+h+14);
  ctx.fillStyle='#6b21a8';ctx.font='9px sans-serif';
  ctx.fillText(harmonics[i].freq+'Hz',x+barW/2,pad.t+h+26);
 }

 ctx.beginPath();ctx.strokeStyle='#fbbf2480';ctx.lineWidth=1.5;ctx.setLineDash([4,4]);
 for(var i=0;i<8;i++){
  var x=pad.l+i*(barW+8)+4+barW/2;
  var y=pad.t+h-h*(harmonics[i].level/100);
  if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
 }
 ctx.stroke();ctx.setLineDash([]);ctx.lineWidth=1;

 if(hoverH>=0){
  var hh=harmonics[hoverH];
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(350,pad.t,250,52);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(350,pad.t,250,52);
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(hh.name+' ('+hh.freq+'Hz) — '+hh.level+'%',355,pad.t+16);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText(hh.desc,355,pad.t+32);
  var ratio=hh.freq/harmonics[0].freq;
  ctx.fillText('비율: x'+ratio.toFixed(2)+' (기본음 대비)',355,pad.t+46);
 }
}
drawOvertone();
cv.addEventListener('mousemove',function(e){
 var p=cxy27(cv,e);
 var pad={l:55,r:20,t:50,b:65};var barW=(620-pad.l-pad.r)/8-8;
 hoverH=Math.floor((p.x-pad.l-4)/(barW+8));
 if(hoverH<0||hoverH>=8)hoverH=-1;
 drawOvertone();
});
cv.addEventListener('mouseleave',function(){hoverH=-1;drawOvertone();});
cv.addEventListener('click',function(){
 sfx27('overtonePeak');
 curVowel=(curVowel+1)%vowelModes.length;
 var mods=[[100,72,55,38,25,18,12,8],[100,45,70,30,50,15,10,5],[100,60,40,65,20,35,8,12],[100,80,50,35,45,20,15,10],[100,50,30,20,40,15,10,5]];
 for(var i=0;i<8;i++)harmonics[i].level=mods[curVowel][i];
 drawOvertone();
});
};

/* ── Feature 4: Party Scoreboard Canvas 640x400 ── */
window.__sv27PartyScoreboard=function(){
sfx27('partyCheer');
var overlay=document.createElement('div');
overlay.id='sv27-party';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🎉 노래방 파티 스코어보드</h3><button id="sv27-party-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-party-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">10명 파티 랭킹. 클릭하여 참가자 상세 확인. 총점=음정40%+리듬30%+감정30%.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-party-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-party-cv');
var ctx=cv.getContext('2d');
var names=['★ 나','민수','AI시아','AI지수','하늘','AI미래','AI스타','서연','AI보컬','AI루비'];
var participants=[];
for(var i=0;i<10;i++){
 var pitch=Math.random()*40+55;var rhythm=Math.random()*40+55;var emotion=Math.random()*40+50;
 var total=pitch*0.4+rhythm*0.3+emotion*0.3;
 participants.push({name:names[i],pitch:pitch,rhythm:rhythm,emotion:emotion,total:total,songs:Math.floor(Math.random()*5)+1});
}
participants[0].pitch=Math.random()*15+80;participants[0].rhythm=Math.random()*15+78;participants[0].emotion=Math.random()*15+75;
participants[0].total=participants[0].pitch*0.4+participants[0].rhythm*0.3+participants[0].emotion*0.3;
participants.sort(function(a,b){return b.total-a.total;});
var hoverP=-1;

function drawParty(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,640,400);
 var pad={l:15,r:15,t:45,b:15};
 var rowH=34;

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('파티 스코어보드 랭킹',320,25);

 ctx.fillStyle='#1e1036';ctx.fillRect(pad.l,pad.t,610,28);
 ctx.fillStyle='#a78bfa';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
 ctx.fillText('#',pad.l+20,pad.t+18);
 ctx.fillText('참가자',pad.l+90,pad.t+18);
 ctx.fillText('음정(40%)',pad.l+200,pad.t+18);
 ctx.fillText('리듬(30%)',pad.l+310,pad.t+18);
 ctx.fillText('감정(30%)',pad.l+420,pad.t+18);
 ctx.fillText('총점',pad.l+530,pad.t+18);
 ctx.fillText('등급',pad.l+585,pad.t+18);

 for(var i=0;i<10;i++){
  var y=pad.t+30+i*rowH;
  var p=participants[i];
  var isMe=p.name.indexOf('★')>=0;
  var isHover=hoverP===i;
  ctx.fillStyle=isMe?'#2d1b6040':isHover?'#1e103680':'#0f0a1e20';
  ctx.fillRect(pad.l,y,610,rowH-2);
  if(isMe){ctx.strokeStyle='#a855f7';ctx.lineWidth=1;ctx.strokeRect(pad.l,y,610,rowH-2);ctx.lineWidth=1;}

  var medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'';
  ctx.fillStyle=i<3?'#fbbf24':'#a78bfa';ctx.font=i<3?'14px sans-serif':'11px sans-serif';ctx.textAlign='center';
  ctx.fillText(medal,pad.l+20,y+22);

  ctx.fillStyle=isMe?'#c084fc':'#e2d5f3';ctx.font=isMe?'bold 12px sans-serif':'12px sans-serif';ctx.textAlign='center';
  ctx.fillText(p.name,pad.l+90,y+22);

  var metrics=[{v:p.pitch,x:200},{v:p.rhythm,x:310},{v:p.emotion,x:420}];
  metrics.forEach(function(m){
   var bw=80;var bx=pad.l+m.x-bw/2;
   ctx.fillStyle='#1e1036';ctx.fillRect(bx,y+8,bw,14);
   var pct=m.v/100;
   var gc=pct>0.8?'#34d399':pct>0.6?'#60a5fa':pct>0.4?'#fbbf24':'#f87171';
   ctx.fillStyle=gc;ctx.fillRect(bx,y+8,bw*pct,14);
   ctx.fillStyle='#fff';ctx.font='10px sans-serif';
   ctx.fillText(Math.round(m.v),pad.l+m.x,y+20);
  });

  ctx.fillStyle='#fbbf24';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
  ctx.fillText(Math.round(p.total),pad.l+530,y+22);

  var g=gradeFor27(p.total);
  ctx.fillStyle=gradeColor27(g);ctx.font='bold 13px sans-serif';
  ctx.fillText(g,pad.l+585,y+22);
 }
}
drawParty();
cv.addEventListener('mousemove',function(e){
 var p=cxy27(cv,e);var rowH=34;
 hoverP=Math.floor((p.y-75)/rowH);
 if(hoverP<0||hoverP>=10)hoverP=-1;
 drawParty();
});
cv.addEventListener('mouseleave',function(){hoverP=-1;drawParty();});
cv.addEventListener('click',function(){
 sfx27('partyScore');
 for(var i=1;i<10;i++){
  participants[i].pitch+=Math.random()*6-3;
  participants[i].rhythm+=Math.random()*6-3;
  participants[i].emotion+=Math.random()*6-3;
  participants[i].pitch=Math.max(30,Math.min(100,participants[i].pitch));
  participants[i].rhythm=Math.max(30,Math.min(100,participants[i].rhythm));
  participants[i].emotion=Math.max(30,Math.min(100,participants[i].emotion));
  participants[i].total=participants[i].pitch*0.4+participants[i].rhythm*0.3+participants[i].emotion*0.3;
 }
 participants.sort(function(a,b){return b.total-a.total;});
 drawParty();
});
};

/* ── Feature 5: Emotion Color Palette Canvas 620x400 ── */
window.__sv27EmotionPalette=function(){
sfx27('emotionPick');
var overlay=document.createElement('div');
overlay.id='sv27-emotion-color';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:660px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">🎨 보컬 감정 컬러 팔레트</h3><button id="sv27-emot-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-emot-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">10가지 감정과 색상 매칭. 클릭하여 감정별 보컬 표현 가이드 확인.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-emot-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-emot-cv');
var ctx=cv.getContext('2d');
var emotions=[
 {name:'기쁨',color:'#fbbf24',desc:'밝고 활기찬 톤, 리듬감 있게',tech:'스타카토+밝은 톤',pct:78},
 {name:'슬픔',color:'#60a5fa',desc:'느리고 여린 호흡, 무거운 톤',tech:'레가토+비브라토',pct:65},
 {name:'분노',color:'#ef4444',desc:'강렬하고 폭발적인 발성',tech:'벨팅+강한 어택',pct:52},
 {name:'평온',color:'#34d399',desc:'부드럽고 안정적인 호흡',tech:'팔세토+뷰레 톤',pct:85},
 {name:'설렘',color:'#f472b6',desc:'가변고 말랑말랑한 톤과 리듬',tech:'스타카토+경쾌한 비브라토',pct:72},
 {name:'그리움',color:'#a78bfa',desc:'깊고 먼 곳을 보는 듯한 톤',tech:'느린 비브라토+깊은 호흡',pct:60},
 {name:'희망',color:'#4ade80',desc:'점점 밝아지는 크레셈도',tech:'크레셈도+빌드업',pct:70},
 {name:'공포',color:'#94a3b8',desc:'허스키하고 떨리는 발성',tech:'허스키톤+불규칙 리듬',pct:42},
 {name:'사랑',color:'#fb7185',desc:'따뜻하고 부드러운 서정',tech:'레가토+부드러운 비브라토',pct:82},
 {name:'결의',color:'#f59e0b',desc:'힘차고 단호한 발성',tech:'벨팅+명확한 딕션',pct:68}
];
var hoverE=-1;
var selectedE=-1;

function drawEmotionPalette(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 감정 컬러 팔레트',310,25);

 var cols=5;var rows=2;
 var cw=110;var ch=75;
 var startX=(620-cols*cw-4*(cols-1))/2;
 var startY=45;

 for(var i=0;i<10;i++){
  var col=i%cols;var row=Math.floor(i/cols);
  var x=startX+col*(cw+4);var y=startY+row*(ch+4);
  var em=emotions[i];
  var isH=hoverE===i;var isS=selectedE===i;

  ctx.fillStyle=isS?em.color+'40':isH?em.color+'25':'#1e103640';
  ctx.fillRect(x,y,cw,ch);
  if(isS||isH){ctx.strokeStyle=em.color;ctx.lineWidth=2;ctx.strokeRect(x,y,cw,ch);ctx.lineWidth=1;}

  ctx.fillStyle=em.color;ctx.font='22px sans-serif';ctx.textAlign='center';
  ctx.fillRect(x+10,y+8,cw-20,6);

  ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';
  ctx.fillText(em.name,x+cw/2,y+32);

  ctx.fillStyle='#8b5cf6';ctx.fillRect(x+8,y+42,cw-16,10);
  ctx.fillStyle=em.color;ctx.fillRect(x+8,y+42,(cw-16)*(em.pct/100),10);
  ctx.fillStyle='#fff';ctx.font='9px sans-serif';
  ctx.fillText(em.pct+'%',x+cw/2,y+50);

  ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';
  ctx.fillText(em.tech,x+cw/2,y+67);
 }

 if(selectedE>=0){
  var se=emotions[selectedE];
  var dy=210;
  ctx.fillStyle='#1a0e2e';ctx.fillRect(15,dy,590,180);
  ctx.strokeStyle=se.color;ctx.lineWidth=2;ctx.strokeRect(15,dy,590,180);ctx.lineWidth=1;

  ctx.fillStyle=se.color;ctx.font='bold 16px sans-serif';ctx.textAlign='left';
  ctx.fillText(se.name+' 감정 보컬 가이드',30,dy+25);

  ctx.fillStyle='#e2d5f3';ctx.font='13px sans-serif';
  ctx.fillText('특징: '+se.desc,30,dy+50);
  ctx.fillText('테크닉: '+se.tech,30,dy+70);
  ctx.fillText('마스터리: '+se.pct+'% ('+gradeFor27(se.pct)+')',30,dy+90);

  ctx.fillStyle='#6b21a8';ctx.font='11px sans-serif';
  var tips=['• '+se.name+' 감정은 '+se.desc,'• 추천 테크닉: '+se.tech,'• 연습 팔: '+se.name+' 감정을 담은 곡을 선택하여 3회 반복 연습'];
  for(var t=0;t<tips.length;t++){
   ctx.fillText(tips[t],30,dy+115+t*18);
  }

  ctx.fillStyle=se.color;
  ctx.fillRect(30,dy+165,560*(se.pct/100),10);
  ctx.strokeStyle='#2d1b4e';ctx.strokeRect(30,dy+165,560,10);
 }
}
drawEmotionPalette();
cv.addEventListener('mousemove',function(e){
 var p=cxy27(cv,e);
 var cols=5;var cw=110;var ch=75;
 var startX=(620-cols*cw-4*(cols-1))/2;var startY=45;
 hoverE=-1;
 for(var i=0;i<10;i++){
  var col=i%cols;var row=Math.floor(i/cols);
  var x=startX+col*(cw+4);var y=startY+row*(ch+4);
  if(p.x>=x&&p.x<=x+cw&&p.y>=y&&p.y<=y+ch){hoverE=i;break;}
 }
 drawEmotionPalette();
});
cv.addEventListener('mouseleave',function(){hoverE=-1;drawEmotionPalette();});
cv.addEventListener('click',function(e){
 var p=cxy27(cv,e);
 var cols=5;var cw=110;var ch=75;
 var startX=(620-cols*cw-4*(cols-1))/2;var startY=45;
 for(var i=0;i<10;i++){
  var col=i%cols;var row=Math.floor(i/cols);
  var x=startX+col*(cw+4);var y=startY+row*(ch+4);
  if(p.x>=x&&p.x<=x+cw&&p.y>=y&&p.y<=y+ch){sfx27('emotionGlow');selectedE=i;drawEmotionPalette();return;}
 }
});
};

/* ── Feature 6: Vocal Energy Curve Canvas 640x400 ── */
window.__sv27EnergyCurve=function(){
sfx27('energyPulse');
var overlay=document.createElement('div');
overlay.id='sv27-energy';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:680px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">⚡ 보컬 에너지 커브</h3><button id="sv27-energy-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-energy-cv" width="640" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:crosshair;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">16구간 보컬 에너지(볼륨+감정+호흡) 라인차트. 클릭하여 세션 전환.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-energy-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-energy-cv');
var ctx=cv.getContext('2d');
var segments=16;
var labels=['Intro','V1-1','V1-2','V1-3','Pre1','Ch1-1','Ch1-2','Ch1-3','V2-1','V2-2','Pre2','Ch2-1','Ch2-2','Bridge','Ch3','Outro'];
var sessions=[
 {name:'현재',vol:[],emo:[],breath:[]},
 {name:'이전',vol:[],emo:[],breath:[]}
];
for(var si=0;si<2;si++){
 for(var i=0;i<segments;i++){
  var base=i<4?40:i<8?70:i<11?50:i<14?75:i===13?90:60;
  sessions[si].vol.push(base+Math.random()*20-10+(si*5));
  sessions[si].emo.push(base*0.9+Math.random()*15-7+(si*3));
  sessions[si].breath.push(80-base*0.3+Math.random()*10);
 }
}
var curSession=0;
var hoverSeg=-1;

function drawEnergy(){
 ctx.clearRect(0,0,640,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,640,400);
 var pad={l:50,r:20,t:45,b:55};
 var w=640-pad.l-pad.r;var h=400-pad.t-pad.b;
 var s=sessions[curSession];

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 에너지 커브 — '+s.name+' 세션',320,25);

 ctx.strokeStyle='#2d1b4e';ctx.lineWidth=0.5;
 for(var gy=0;gy<=100;gy+=25){
  var yy=pad.t+h-h*(gy/100);
  ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(640-pad.r,yy);ctx.stroke();
  ctx.fillStyle='#6b21a8';ctx.font='10px sans-serif';ctx.textAlign='right';
  ctx.fillText(gy,pad.l-5,yy+4);
 }

 function drawLine(data,color,dashed){
  ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=2;
  if(dashed)ctx.setLineDash([4,4]);
  for(var i=0;i<segments;i++){
   var x=pad.l+i*(w/(segments-1));
   var y=pad.t+h-h*(data[i]/100);
   if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.stroke();ctx.setLineDash([]);ctx.lineWidth=1;
 }

 ctx.globalAlpha=0.15;
 ctx.beginPath();
 for(var i=0;i<segments;i++){
  var x=pad.l+i*(w/(segments-1));
  var y=pad.t+h-h*(s.vol[i]/100);
  if(i===0)ctx.moveTo(x,pad.t+h);
  ctx.lineTo(x,y);
 }
 ctx.lineTo(pad.l+(segments-1)*(w/(segments-1)),pad.t+h);
 ctx.closePath();ctx.fillStyle='#a855f7';ctx.fill();
 ctx.globalAlpha=1;

 drawLine(s.vol,'#a855f7',false);
 drawLine(s.emo,'#fbbf24',false);
 drawLine(s.breath,'#34d399',true);

 for(var i=0;i<segments;i++){
  var x=pad.l+i*(w/(segments-1));
  if(i%2===0||i===segments-1){
   ctx.save();ctx.translate(x,pad.t+h+8);ctx.rotate(-Math.PI/4);
   ctx.fillStyle='#a78bfa';ctx.font='9px sans-serif';ctx.textAlign='right';
   ctx.fillText(labels[i],0,0);ctx.restore();
  }
  if(hoverSeg===i){
   ctx.beginPath();ctx.strokeStyle='#fbbf2480';ctx.setLineDash([2,2]);
   ctx.moveTo(x,pad.t);ctx.lineTo(x,pad.t+h);ctx.stroke();ctx.setLineDash([]);
  }
 }

 ctx.fillStyle='#a855f7';ctx.fillRect(pad.l,pad.t+h+42,8,8);
 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';ctx.textAlign='left';ctx.fillText('볼륨',pad.l+12,pad.t+h+50);
 ctx.fillStyle='#fbbf24';ctx.fillRect(pad.l+60,pad.t+h+42,8,8);
 ctx.fillStyle='#fde68a';ctx.fillText('감정',pad.l+72,pad.t+h+50);
 ctx.fillStyle='#34d399';ctx.fillRect(pad.l+120,pad.t+h+42,8,8);
 ctx.fillStyle='#6ee7b7';ctx.fillText('호흡여유',pad.l+132,pad.t+h+50);

 if(hoverSeg>=0&&hoverSeg<segments){
  var tx=Math.min(pad.l+hoverSeg*(w/(segments-1)),490);
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(tx,pad.t,145,62);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(tx,pad.t,145,62);
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(labels[hoverSeg]+' 구간',tx+5,pad.t+15);
  ctx.fillText('볼륨: '+Math.round(s.vol[hoverSeg])+'%',tx+5,pad.t+30);
  ctx.fillText('감정: '+Math.round(s.emo[hoverSeg])+'%',tx+5,pad.t+45);
  ctx.fillText('호흡: '+Math.round(s.breath[hoverSeg])+'%',tx+5,pad.t+58);
 }
}
drawEnergy();
cv.addEventListener('mousemove',function(e){
 var p=cxy27(cv,e);
 var pad={l:50,r:20};var w=640-pad.l-pad.r;
 hoverSeg=Math.round((p.x-pad.l)/(w/(segments-1)));
 if(hoverSeg<0||hoverSeg>=segments)hoverSeg=-1;
 drawEnergy();
});
cv.addEventListener('mouseleave',function(){hoverSeg=-1;drawEnergy();});
cv.addEventListener('click',function(){
 sfx27('energyPeak');
 curSession=(curSession+1)%sessions.length;
 drawEnergy();
});
};

/* ── Feature 7: Diction Clarity Analyzer Canvas 620x400 ── */
window.__sv27DictionClarity=function(){
sfx27('dictionCheck');
var overlay=document.createElement('div');
overlay.id='sv27-diction';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:660px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">💬 보컬 딕션 명료도 분석기</h3><button id="sv27-dict-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-dict-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">8자음 그룹 명료도 바차트 + 5모음 정확도. 클릭하여 훈련 모드.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-dict-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-dict-cv');
var ctx=cv.getContext('2d');
var consonants=[
 {name:'ㄱㄴㄷㄹ',label:'연구개음',clarity:72,tip:'혀끝 이완'},
 {name:'ㅂㅃㅄ',label:'양순음',clarity:68,tip:'입술 긴장'},
 {name:'ㅅㅆ',label:'치찰음',clarity:60,tip:'혀 위치 정확'},
 {name:'ㅈㅉㅊ',label:'파찰음',clarity:65,tip:'강한 기식'},
 {name:'ㅋㅌㅍ',label:'격음',clarity:75,tip:'명확한 파열'},
 {name:'ㅐㅕ',label:'복합모음',clarity:58,tip:'입 모양 전환'},
 {name:'ㅑㅖ',label:'반모음적',clarity:70,tip:'자연스러운 전환'},
 {name:'ㅇㅎ',label:'후음/마찰',clarity:62,tip:'목 열기 연습'}
];
var vowels=[{name:'아',pct:82},{name:'에',pct:70},{name:'이',pct:78},{name:'오',pct:75},{name:'우',pct:65}];
var hoverC=-1;

function drawDiction(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);
 var pad={l:100,r:20,t:45,b:95};
 var w=620-pad.l-pad.r;var h=400-pad.t-pad.b;
 var barH=h/8-4;

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('보컬 딕션 명료도 분석',310,25);

 for(var i=0;i<8;i++){
  var y=pad.t+i*(barH+4);
  var c=consonants[i];
  var bw=w*(c.clarity/100);
  var isH=hoverC===i;

  ctx.fillStyle='#a78bfa';ctx.font='11px sans-serif';ctx.textAlign='right';
  ctx.fillText(c.label,pad.l-8,y+barH/2+4);

  ctx.fillStyle='#1e1036';ctx.fillRect(pad.l,y,w,barH);

  var hue=c.clarity>75?150:c.clarity>60?200:c.clarity>45?40:0;
  var alpha=isH?1:0.8;
  var grd=ctx.createLinearGradient(pad.l,y,pad.l+bw,y);
  grd.addColorStop(0,'hsla('+hue+',65%,45%,'+alpha+')');
  grd.addColorStop(1,'hsla('+hue+',65%,60%,'+alpha+')');
  ctx.fillStyle=grd;
  ctx.fillRect(pad.l,y,bw,barH);

  if(isH){ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.strokeRect(pad.l-1,y-1,w+2,barH+2);ctx.lineWidth=1;}

  var g=gradeFor27(c.clarity);
  ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
  ctx.fillText(c.clarity+'% ('+g+')',pad.l+bw+8,y+barH/2+4);

  ctx.fillStyle='#6b21a8';ctx.font='9px sans-serif';ctx.textAlign='right';
  ctx.fillText(c.name,pad.l+w,y+barH/2+4);
 }

 var avgClarity=0;consonants.forEach(function(c){avgClarity+=c.clarity;});avgClarity/=8;
 var avgX=pad.l+w*(avgClarity/100);
 ctx.beginPath();ctx.strokeStyle='#fbbf24';ctx.lineWidth=1.5;ctx.setLineDash([4,4]);
 ctx.moveTo(avgX,pad.t-5);ctx.lineTo(avgX,pad.t+h+5);ctx.stroke();ctx.setLineDash([]);ctx.lineWidth=1;
 ctx.fillStyle='#fbbf24';ctx.font='10px sans-serif';ctx.textAlign='center';
 ctx.fillText('평균 '+Math.round(avgClarity)+'%',avgX,pad.t-8);

 var vy=pad.t+h+20;
 ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';ctx.textAlign='left';
 ctx.fillText('모음 정확도',pad.l,vy);
 var vw=(w-10)/5;
 for(var i=0;i<5;i++){
  var vx=pad.l+i*(vw+2);
  ctx.fillStyle='#1e1036';ctx.fillRect(vx,vy+8,vw,22);
  var vbw=vw*(vowels[i].pct/100);
  var vh=vowels[i].pct>75?150:vowels[i].pct>60?200:40;
  ctx.fillStyle='hsl('+vh+',60%,50%)';ctx.fillRect(vx,vy+8,vbw,22);
  ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';ctx.textAlign='center';
  ctx.fillText(vowels[i].name+' '+vowels[i].pct+'%',vx+vw/2,vy+23);
 }

 if(hoverC>=0){
  var hc=consonants[hoverC];
  ctx.fillStyle='#1a0e2eee';ctx.fillRect(350,pad.t,250,45);
  ctx.strokeStyle='#7c3aed';ctx.strokeRect(350,pad.t,250,45);
  ctx.fillStyle='#e2d5f3';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText(hc.label+' ('+hc.name+')',355,pad.t+16);
  ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
  ctx.fillText('팁: '+hc.tip,355,pad.t+35);
 }
}
drawDiction();
cv.addEventListener('mousemove',function(e){
 var p=cxy27(cv,e);
 var pad={l:100,t:45,b:95};var h=400-pad.t-pad.b;var barH=h/8-4;
 hoverC=Math.floor((p.y-pad.t)/(barH+4));
 if(hoverC<0||hoverC>=8)hoverC=-1;
 drawDiction();
});
cv.addEventListener('mouseleave',function(){hoverC=-1;drawDiction();});
cv.addEventListener('click',function(){
 sfx27('dictionPass');
 consonants.forEach(function(c){c.clarity=Math.min(100,c.clarity+Math.random()*8);});
 vowels.forEach(function(v){v.pct=Math.min(100,v.pct+Math.random()*6);});
 drawDiction();
});
};

/* ── Feature 8: Growth Dashboard Canvas 620x400 ── */
window.__sv27GrowthDashboard=function(){
sfx27('dashboardOpen');
var overlay=document.createElement('div');
overlay.id='sv27-growth';
overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;overflow:auto;';
var panel=document.createElement('div');
panel.style.cssText='background:linear-gradient(135deg,#0f0a1e,#1a0e2e);padding:20px;border-radius:16px;max-width:660px;width:95%;border:2px solid #7c3aed;max-height:90vh;overflow-y:auto;';
panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><h3 style="color:#c084fc;margin:0;font-size:18px;">📈 종합 보컬 성장 지표</h3><button id="sv27-growth-close" style="background:#7c3aed;color:white;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕</button></div><canvas id="sv27-growth-cv" width="620" height="400" style="width:100%;border-radius:8px;background:#0a0515;cursor:pointer;"></canvas><p style="color:#a78bfa;font-size:12px;margin-top:8px;">8KPI 반원게이지 종합 대시보드. 클릭하여 가중 종합 갱신.</p>';
overlay.appendChild(panel);
document.body.appendChild(overlay);
document.getElementById('sv27-growth-close').onclick=function(){sfx27('navClick27');document.body.removeChild(overlay);};
overlay.addEventListener('click',function(e){if(e.target===overlay){sfx27('navClick27');document.body.removeChild(overlay);}});

var cv=document.getElementById('sv27-growth-cv');
var ctx=cv.getContext('2d');
var kpis=[
 {name:'음정',pct:75,weight:0.20,color:'#a855f7'},
 {name:'리듬',pct:82,weight:0.15,color:'#6366f1'},
 {name:'음역',pct:60,weight:0.10,color:'#3b82f6'},
 {name:'호흡',pct:70,weight:0.10,color:'#06b6d4'},
 {name:'감정',pct:68,weight:0.15,color:'#f59e0b'},
 {name:'테크닉',pct:55,weight:0.10,color:'#ef4444'},
 {name:'딕션',pct:72,weight:0.10,color:'#10b981'},
 {name:'지구력',pct:65,weight:0.10,color:'#f472b6'}
];

function drawGrowth(){
 ctx.clearRect(0,0,620,400);
 ctx.fillStyle='#0a0515';ctx.fillRect(0,0,620,400);

 ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
 ctx.fillText('종합 보컬 성장 지표 대시보드',310,25);

 var cols=4;var rows=2;
 var gw=140;var gh=100;
 var startX=(620-cols*gw-(cols-1)*8)/2;
 var startY=45;

 for(var i=0;i<8;i++){
  var col=i%cols;var row=Math.floor(i/cols);
  var x=startX+col*(gw+8);var y=startY+row*(gh+15);
  var k=kpis[i];
  var cx=x+gw/2;var cy=y+55;var r=38;

  ctx.fillStyle='#1e103640';ctx.fillRect(x,y,gw,gh);

  ctx.beginPath();ctx.arc(cx,cy,r,Math.PI,2*Math.PI);
  ctx.strokeStyle='#2d1b4e';ctx.lineWidth=8;ctx.stroke();

  var angle=Math.PI+(k.pct/100)*Math.PI;
  ctx.beginPath();ctx.arc(cx,cy,r,Math.PI,angle);
  ctx.strokeStyle=k.color;ctx.lineWidth=8;ctx.stroke();ctx.lineWidth=1;

  var g=gradeFor27(k.pct);
  ctx.fillStyle=gradeColor27(g);ctx.font='bold 16px sans-serif';ctx.textAlign='center';
  ctx.fillText(g,cx,cy+5);

  ctx.fillStyle='#fff';ctx.font='10px sans-serif';
  ctx.fillText(k.pct+'%',cx,cy+18);

  ctx.fillStyle=k.color;ctx.font='bold 11px sans-serif';
  ctx.fillText(k.name,cx,y+14);

  ctx.fillStyle='#6b21a8';ctx.font='9px sans-serif';
  ctx.fillText('가중: '+(k.weight*100)+'%',cx,y+gh-4);
 }

 var weighted=0;
 kpis.forEach(function(k){weighted+=k.pct*k.weight;});
 var totalGrade=gradeFor27(weighted);

 var dy=285;
 ctx.fillStyle='#1e1036';ctx.fillRect(startX,dy,gw*4+24,105);
 ctx.strokeStyle='#7c3aed';ctx.lineWidth=1;ctx.strokeRect(startX,dy,gw*4+24,105);

 ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
 ctx.fillText('종합 성장 점수',310,dy+18);

 var tcx=310;var tcy=dy+60;var tr=32;
 ctx.beginPath();ctx.arc(tcx,tcy,tr,Math.PI,2*Math.PI);
 ctx.strokeStyle='#2d1b4e';ctx.lineWidth=10;ctx.stroke();
 var ta=Math.PI+(weighted/100)*Math.PI;
 ctx.beginPath();ctx.arc(tcx,tcy,tr,Math.PI,ta);
 ctx.strokeStyle=gradeColor27(totalGrade);ctx.lineWidth=10;ctx.stroke();ctx.lineWidth=1;

 ctx.fillStyle=gradeColor27(totalGrade);ctx.font='bold 22px sans-serif';ctx.textAlign='center';
 ctx.fillText(totalGrade,tcx,tcy+6);
 ctx.fillStyle='#fff';ctx.font='12px sans-serif';
 ctx.fillText(Math.round(weighted)+'점',tcx,tcy+22);

 ctx.fillStyle='#a78bfa';ctx.font='10px sans-serif';
 ctx.fillText('가중 평균 종합 점수 (클릭하여 갱신)',310,dy+100);
}
drawGrowth();
cv.addEventListener('click',function(){
 sfx27('dashboardOpen');
 kpis.forEach(function(k){k.pct=Math.min(100,k.pct+Math.random()*8-2);k.pct=Math.max(20,k.pct);});
 drawGrowth();
});
};

/* ── Navigation Injection ── */
document.addEventListener('DOMContentLoaded',function(){
setTimeout(function(){
var existingNav=document.querySelector('.bottomNav')||document.querySelector('.bottom-nav')||document.querySelector('[class*="bottomNav"]')||document.querySelector('[class*="bottom-nav"]');
if(!existingNav){
 var allDivs=document.querySelectorAll('div');
 for(var i=allDivs.length-1;i>=0;i--){
  var s=window.getComputedStyle(allDivs[i]);
  if(s.position==='fixed'&&parseInt(s.bottom)<=5){existingNav=allDivs[i];break;}
 }
}
if(!existingNav){
 existingNav=document.querySelector('[style*="overflow-x"]')||document.querySelector('[style*="flex-wrap"]');
}

var btnDefs=[
 {label:'🎯인톤네이션',fn:'__sv27IntonationHeatmap',key:'Q'},
 {label:'🎨난이도매칭',fn:'__sv27DifficultyMatcher',key:'W'},
 {label:'🔊오버톤',fn:'__sv27OvertoneAnalyzer',key:'E'},
 {label:'🎉파티보드',fn:'__sv27PartyScoreboard',key:'R'},
 {label:'🎨감정색',fn:'__sv27EmotionPalette',key:'T'},
 {label:'⚡에너지',fn:'__sv27EnergyCurve',key:'Y'},
 {label:'💬딕션',fn:'__sv27DictionClarity',key:'U'},
 {label:'📈성장',fn:'__sv27GrowthDashboard',key:'I'},
 {label:'🔄v27',fn:null,key:'0'}
];

btnDefs.forEach(function(def){
 var btn=document.createElement('button');
 btn.textContent=def.label;
 btn.title='v27: '+def.label+(def.key?' (Shift+'+def.key+')':'');
 btn.style.cssText='padding:6px 10px;margin:2px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:white;border:none;border-radius:8px;cursor:pointer;font-size:11px;font-weight:bold;box-shadow:0 2px 6px rgba(124,58,237,0.4);';
 btn.addEventListener('mouseenter',function(){btn.style.transform='scale(1.08)';});
 btn.addEventListener('mouseleave',function(){btn.style.transform='scale(1)';});
 btn.onclick=function(){
  sfx27('navClick27');
  if(def.fn&&window[def.fn])window[def.fn]();
 };
 if(existingNav)existingNav.appendChild(btn);
});

/* ── Keyboard Shortcuts (Shift+Q/W/E/R/T/Y/U/I/0) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'Q':'__sv27IntonationHeatmap','W':'__sv27DifficultyMatcher','E':'__sv27OvertoneAnalyzer',
  'R':'__sv27PartyScoreboard','T':'__sv27EmotionPalette','Y':'__sv27EnergyCurve',
  'U':'__sv27DictionClarity','I':'__sv27GrowthDashboard'
 };
 var key=e.key.toUpperCase();
 if(map[key]&&window[map[key]]){e.preventDefault();sfx27('navClick27');window[map[key]]();}
 if(key==='0'||e.code==='Digit0'){e.preventDefault();sfx27('navClick27');}
});

},800);
});
})();
