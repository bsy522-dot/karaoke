/* StarVoice v23 Patch — Self-contained IIFE module injected via SW
 * +10 songs(195->205), VocalRangeMapperV2 Canvas, SongKeyTransposer Canvas,
 * DuetChemistryAnalyzer Canvas, PerformanceReplayGraph Canvas,
 * VocalRecoveryGuide Canvas, MusicTheoryDrill Canvas,
 * SetlistOptimizer Canvas, VoiceClassifier Canvas,
 * quiz +15(237->252), achievements +12(198->210), SFX 16, keyboard +9
 */
(function(){
'use strict';
if(window.__v23KaraokeLoaded) return;
window.__v23KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;
var Gb4=369.99,Db4=277.18;

function ls23(k,d){try{var v=localStorage.getItem('sv23-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls23s(k,v){try{localStorage.setItem('sv23-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (196-205) ── */
var v23Songs=[
{id:196,title:'예뻤어',artist:'DAY6',bpm:98,key:'C',difficulty:4,genre:'rock',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['넌','예','뻤','어','처','음','널','봤','을','때','부','터','마','지','막','까지'],
 duration:[459,459,459,918,459,459,459,459,459,459,459,918,459,459,459,459]},
{id:197,title:'퀸카(Queencard)',artist:'(여자)아이들',bpm:116,key:'Cm',difficulty:3,genre:'dance',
 notes:[C4,Eb4,G4,C5,Bb4,G4,Eb4,C4,D4,F4,Ab4,C5,Bb4,Ab4,G4,F4],
 lyrics:['I','am','a','Queencard','난','퀸','카','야','모','두','날','봐','내','가','바','로'],
 duration:[388,388,388,776,388,388,388,388,388,388,388,776,388,388,388,388]},
{id:198,title:'우리들의 블루스',artist:'임영웅',bpm:72,key:'Bb',difficulty:4,genre:'ballad',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['우','리','들','의','블','루','스','가','끝','나','지','않','기','를','바','래'],
 duration:[625,625,625,1250,625,625,625,625,625,625,625,1250,625,625,625,625]},
{id:199,title:'사랑은 늘 도망가',artist:'임영웅',bpm:68,key:'G',difficulty:3,genre:'ballad',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['사','랑','은','늘','도','망','가','는','거','라','고','했','나','봐','요','네게서'],
 duration:[662,662,662,1324,662,662,662,662,662,662,662,1324,662,662,662,662]},
{id:200,title:'SPOT!',artist:'ZICO ft. JENNIE',bpm:122,key:'Eb',difficulty:3,genre:'hiphop',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['이','노','래','가','나','오','면','그','때','가','바','로','그','spot','이','야'],
 duration:[369,369,369,738,369,369,369,369,369,369,369,738,369,369,369,369]},
{id:201,title:'에잇(Eight)',artist:'IU ft. SUGA',bpm:120,key:'F',difficulty:3,genre:'pop',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['영','원','히','여','덟','살','인','것','처','럼','발','이','닿','는','대','로'],
 duration:[375,375,375,750,375,375,375,375,375,375,375,750,375,375,375,375]},
{id:202,title:'작은 것들을 위한 시',artist:'BTS',bpm:100,key:'D',difficulty:3,genre:'pop',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['모','든','게','궁','금','해','How','s','your','day','Oh','tell','me','뭐','가','널'],
 duration:[450,450,450,900,450,450,450,450,450,450,450,900,450,450,450,450]},
{id:203,title:'흔들리는 꽃들 속에서',artist:'AKMU',bpm:86,key:'Ab',difficulty:3,genre:'ballad',
 notes:[Ab3,C4,Eb4,Ab4,G4,Eb4,C4,Ab3,Bb3,Db4,F4,Ab4,G4,F4,Eb4,Db4],
 lyrics:['흔','들','리','는','꽃','들','속','에','서','네','샴','페','인','을','부','어'],
 duration:[523,523,523,1047,523,523,523,523,523,523,523,1047,523,523,523,523]},
{id:204,title:'Dynamite',artist:'BTS',bpm:114,key:'C',difficulty:2,genre:'pop',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['Cause','I','I','I','m','in','the','stars','to','night','So','watch','me','bring','the','fire'],
 duration:[395,395,395,789,395,395,395,395,395,395,395,789,395,395,395,395]},
{id:205,title:'Celebrity',artist:'IU',bpm:108,key:'Db',difficulty:3,genre:'pop',
 notes:[Db4,F4,Ab4,Db5,C5,Ab4,F4,Db4,Eb4,Gb4,Bb4,Db5,C5,Bb4,Ab4,Gb4],
 lyrics:['넌','이','미','Ce','le','bri','ty','너','의','존','재','자','체','로','빛','나'],
 duration:[417,417,417,833,417,417,417,417,417,417,417,833,417,417,417,417]}
];
(function injectSongs23(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v23Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v23 (16 sounds) ── */
var actx23=null;
function getAC23(){if(!actx23)try{actx23=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx23;}
function sfx23(type){
 var ac=getAC23();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  rangeMap:{f:392,d:.45,wave:'sine',gS:.18,gE:0},
  rangeExpand:{f:659,d:.5,wave:'triangle',gS:.22,gE:0},
  transpose:{f:523,d:.35,wave:'sine',gS:.2,gE:0},
  transposeShift:{f:698,d:.4,wave:'triangle',gS:.25,gE:0},
  duetMatch:{f:440,d:.45,wave:'sine',gS:.18,gE:0},
  duetSync:{f:880,d:.5,wave:'triangle',gS:.28,gE:0},
  replayStart:{f:330,d:.3,wave:'sine',gS:.16,gE:0},
  replayCompare:{f:587,d:.4,wave:'triangle',gS:.22,gE:0},
  recoveryTip:{f:294,d:.5,wave:'sine',gS:.15,gE:0},
  recoveryDone:{f:523,d:.55,wave:'triangle',gS:.2,gE:0},
  theoryCorrect:{f:784,d:.35,wave:'triangle',gS:.22,gE:0},
  theoryWrong:{f:196,d:.4,wave:'sawtooth',gS:.1,gE:0},
  setlistAdd:{f:349,d:.3,wave:'sine',gS:.18,gE:0},
  voiceClassify:{f:466,d:.45,wave:'triangle',gS:.2,gE:0},
  quizCorrect23:{f:1175,d:.3,wave:'triangle',gS:.22,gE:0},
  quizWrong23:{f:185,d:.4,wave:'sawtooth',gS:.1,gE:0},
  achieve23:{f:1319,d:.6,wave:'triangle',gS:.32,gE:0},
  navClick23:{f:740,d:.2,wave:'sine',gS:.15,gE:0}
 };
 var c=cfg[type]||cfg.rangeMap;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='rangeExpand'){o.frequency.setValueAtTime(c.f*0.7,t);o.frequency.exponentialRampToValueAtTime(c.f*1.5,t+c.d);}
 if(type==='transposeShift'){o.frequency.setValueAtTime(c.f,t);o.frequency.exponentialRampToValueAtTime(c.f*1.2,t+c.d*0.3);o.frequency.exponentialRampToValueAtTime(c.f*0.9,t+c.d);}
 if(type==='duetSync'){o.frequency.setValueAtTime(c.f*0.8,t);o.frequency.exponentialRampToValueAtTime(c.f*1.3,t+c.d);}
 if(type==='replayCompare'){o.frequency.setValueAtTime(c.f,t);o.frequency.exponentialRampToValueAtTime(c.f*1.4,t+c.d*0.5);o.frequency.exponentialRampToValueAtTime(c.f,t+c.d);}
 if(type==='recoveryDone'){o.frequency.setValueAtTime(c.f*0.85,t);o.frequency.exponentialRampToValueAtTime(c.f*1.15,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Quiz v23 (+15 questions, 237->252) ── */
var v23Quiz=[
{q:'보컬에서 &quot;헤드보이스&quot;와 &quot;팔세토&quot;의 차이는?',a:['헤드보이스는 성대가 닫힌 상태, 팔세토는 열린 상태로 소리냄','같은 것이다','헤드보이스가 더 낮다','팔세토가 더 강하다'],c:0},
{q:'노래 키를 올리면 어떤 변화가 생기나?',a:['전체 음정이 반음 단위로 높아짐','템포가 빨라짐','가사가 바뀜','볼륨이 커짐'],c:0},
{q:'&quot;음역대(Vocal Range)&quot;를 측정할 때 기준은?',a:['편안하게 낼 수 있는 가장 낮은 음~가장 높은 음','큰 소리만 기준','팔세토 포함 최고음만','마이크로 측정한 데시벨'],c:0},
{q:'듀엣 곡에서 &quot;하모니&quot;를 맞추려면?',a:['상대방의 멜로디와 3도 또는 6도 간격으로 노래함','똑같은 음으로 노래함','반대로 노래함','리듬만 맞추면 됨'],c:0},
{q:'노래 후 성대 회복에 가장 좋은 방법은?',a:['충분한 수분 섭취와 성대 휴식','카페인 섭취','큰 소리로 대화','찬 음료 마시기'],c:0},
{q:'음악이론에서 &quot;으뜸음(Tonic)&quot;이란?',a:['조성의 중심이 되는 첫 번째 음','가장 높은 음','가장 빠른 음','마지막 음'],c:0},
{q:'&quot;메조 소프라노&quot;의 음역대 범위는?',a:['대략 A3~A5 (라3~라5)','C2~C4','E5~E7','F1~F3'],c:0},
{q:'노래방에서 &quot;키 조절&quot;의 올바른 사용법은?',a:['자신의 음역에 맞게 반음 단위로 조절','무조건 원키로 부르기','최대한 높이 올리기','키를 낮추면 실력이 없는 것'],c:0},
{q:'&quot;레가토(Legato)&quot; 창법의 특징은?',a:['음과 음을 끊김 없이 부드럽게 연결','강하게 끊어 부르기','빠르게 반복하기','속삭이듯 부르기'],c:0},
{q:'보컬 피로가 쌓이면 나타나는 증상은?',a:['음정이 불안정해지고 고음이 힘들어짐','목소리가 더 좋아짐','음역대가 넓어짐','비브라토가 자연스러워짐'],c:0},
{q:'&quot;펜타토닉 스케일&quot;이 K-POP에서 많이 쓰이는 이유는?',a:['한국 전통음계와 유사하여 친숙하고 부르기 쉬움','서양 클래식에서만 사용','불협화음이 많아서','리듬이 복잡해서'],c:0},
{q:'노래방 파티에서 &quot;셋리스트&quot;를 잘 짜려면?',a:['분위기에 맞는 장르와 템포를 다양하게 배치','한 장르만 연속으로','가장 어려운 곡만','무작위로 선택'],c:0},
{q:'&quot;바리톤&quot; 음역의 특징은?',a:['테너와 베이스 사이의 중간 남성 음역','여성 최고음역','남성 최저음역','어린이 음역'],c:0},
{q:'&quot;세미톤(Semitone)&quot;과 &quot;톤(Tone)&quot;의 관계는?',a:['세미톤 2개가 모여 1톤(온음)이 됨','같은 것이다','세미톤이 더 크다','톤은 리듬 단위'],c:0},
{q:'AI 음성 분석에서 &quot;포먼트(Formant)&quot;란?',a:['성도(vocal tract)의 공명으로 생기는 주파수 피크','비트 패턴','리버브 세기','볼륨 크기'],c:0}
];
(function injectQuiz23(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v23Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v23 (+12, 198->210) ── */
var v23Achievements=[
 {id:'range_mapper',name:'음역 탐험가',desc:'음역대 매퍼 V2를 3회 이상 분석'},
 {id:'key_transposer',name:'키 마스터',desc:'곡 키 변환기에서 5곡 이상 변환'},
 {id:'duet_chemist',name:'듀엣 케미스트',desc:'듀엣 케미 분석기에서 5쌍 분석'},
 {id:'replay_reviewer',name:'리플레이 분석가',desc:'퍼포먼스 리플레이 5회 비교'},
 {id:'recovery_expert',name:'회복의 달인',desc:'보컬 회복 가이드 전 단계 완료'},
 {id:'theory_scholar',name:'이론 학자',desc:'음악이론 드릴 30문제 정답'},
 {id:'setlist_dj',name:'파티 DJ',desc:'셋리스트 최적화기에서 10곡 구성'},
 {id:'voice_typed',name:'보이스 타입 확인',desc:'성악 보이스 분류기에서 분류 완료'},
 {id:'quiz_v23_master',name:'퀴즈 v23 마스터',desc:'v23 퀴즈 15문항 전부 정답'},
 {id:'song_205',name:'205곡 달성',desc:'총 205곡 라이브러리 보유'},
 {id:'v23_explorer',name:'v23 탐험가',desc:'v23 8개 기능 전부 사용'},
 {id:'v23_complete',name:'v23 컴플리트',desc:'v23 전 업적 달성'}
];
(function injectAchievements23(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v23Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Shared helpers ── */
function mkSec23(id,title,emoji){
 var sec=document.createElement('div');sec.id=id;
 sec.style.cssText='background:rgba(15,10,30,.85);border:1px solid rgba(168,85,247,.25);border-radius:12px;padding:14px;margin:14px 0';
 var h=document.createElement('div');
 h.style.cssText='display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none';
 h.innerHTML='<span style="font-size:1.05em;font-weight:bold;color:#c084fc">'+emoji+' '+title+'</span><span class="sv23-toggle" style="color:#a855f7;font-size:.85em">▼ 열기</span>';
 var body=document.createElement('div');body.style.cssText='display:none;margin-top:10px';
 h.onclick=function(){
  var open=body.style.display!=='none';
  body.style.display=open?'none':'block';
  h.querySelector('.sv23-toggle').textContent=open?'▼ 열기':'▲ 닫기';
  if(!open)sfx23('navClick23');
 };
 sec.appendChild(h);sec.appendChild(body);
 return{sec:sec,body:body};
}

function mkCanvas23(parent,w,h,id){
 var wrap=document.createElement('div');wrap.style.cssText='text-align:center;margin:8px 0;overflow-x:auto';
 var c=document.createElement('canvas');c.id=id;c.width=w;c.height=h;
 c.style.cssText='max-width:100%;border-radius:8px;background:#0d0820;border:1px solid rgba(168,85,247,.2)';
 wrap.appendChild(c);parent.appendChild(wrap);
 return c;
}

/* ═══════════════════════════════════════════════════════════════
   1. 보컬 음역대 매퍼 V2 Canvas 620x400
   - 12반음×4옥타브 그리드, 편안한/가능한/한계 3존 시각화
   - 최저~최고 Range 바, 성악 파트 자동매칭
   ═══════════════════════════════════════════════════════════════ */
function createVocalRangeMapper(){
 var s=mkSec23('sv23-range-mapper','보컬 음역대 매퍼 V2','🗺️');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">12반음×4옥타브 음역 그리드. 편안한/가능한/한계 3존 분석, 성악 파트 자동 매칭, S~D 종합등급</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv23-range-scan" style="padding:6px 14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">🔍 음역 스캔</button>'
  +'<button id="sv23-range-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>';
 var cv=mkCanvas23(s.body,620,400,'sv23-range-cv');
 var ctx=cv.getContext('2d');
 var noteNames=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
 var octaves=[2,3,4,5];
 var rangeData=ls23('range-data',{comfort:[],possible:[],limit:[]});
 var scanCount=ls23('range-scans',0);

 function draw(){
  ctx.clearRect(0,0,620,400);
  ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 음역대 매퍼 V2 — 12반음×4옥타브',310,22);
  var gx=55,gy=42,gw=540,gh=260;
  var cellW=gw/12,cellH=gh/4;
  ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=1;
  for(var oi=0;oi<4;oi++){
   ctx.fillStyle='rgba(200,180,254,.6)';ctx.font='11px sans-serif';ctx.textAlign='right';
   ctx.fillText('Oct '+octaves[oi],gx-6,gy+oi*cellH+cellH/2+4);
   for(var ni=0;ni<12;ni++){
    var x=gx+ni*cellW,y=gy+oi*cellH;
    var noteKey=noteNames[ni]+octaves[oi];
    var isComfort=rangeData.comfort.indexOf(noteKey)!==-1;
    var isPossible=rangeData.possible.indexOf(noteKey)!==-1;
    var isLimit=rangeData.limit.indexOf(noteKey)!==-1;
    if(isComfort)ctx.fillStyle='rgba(34,197,94,.5)';
    else if(isPossible)ctx.fillStyle='rgba(59,130,246,.4)';
    else if(isLimit)ctx.fillStyle='rgba(239,68,68,.35)';
    else ctx.fillStyle='rgba(168,85,247,.06)';
    ctx.fillRect(x+1,y+1,cellW-2,cellH-2);
    ctx.strokeStyle='rgba(168,85,247,.12)';ctx.strokeRect(x,y,cellW,cellH);
    if(oi===0){ctx.fillStyle='rgba(200,180,254,.5)';ctx.font='9px sans-serif';ctx.textAlign='center';ctx.fillText(noteNames[ni],x+cellW/2,gy-4);}
   }
  }
  ctx.fillStyle='rgba(34,197,94,.7)';ctx.fillRect(gx,gy+gh+18,12,12);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText('편안한 음역',gx+18,gy+gh+28);
  ctx.fillStyle='rgba(59,130,246,.6)';ctx.fillRect(gx+110,gy+gh+18,12,12);
  ctx.fillStyle='#d8b4fe';ctx.fillText('가능한 음역',gx+128,gy+gh+28);
  ctx.fillStyle='rgba(239,68,68,.5)';ctx.fillRect(gx+220,gy+gh+18,12,12);
  ctx.fillStyle='#d8b4fe';ctx.fillText('한계 음역',gx+238,gy+gh+28);
  var total=rangeData.comfort.length+rangeData.possible.length+rangeData.limit.length;
  var grade=total>=30?'S':total>=22?'A':total>=15?'B':total>=8?'C':'D';
  var gradeColor=grade==='S'?'#fbbf24':grade==='A'?'#34d399':grade==='B'?'#60a5fa':grade==='C'?'#c084fc':'#f87171';
  ctx.fillStyle=gradeColor;ctx.font='bold 28px sans-serif';ctx.textAlign='right';
  ctx.fillText(grade,600,gy+gh+32);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';
  ctx.fillText('총 '+total+'음 / 스캔 '+scanCount+'회',600,gy+gh+50);
  var parts=['소프라노 (C4~C6)','메조소프라노 (A3~A5)','알토 (F3~F5)','테너 (C3~C5)','바리톤 (A2~A4)','베이스 (E2~E4)'];
  var partMatch='미분류';
  if(rangeData.comfort.length>0){
   var hasHigh=rangeData.comfort.some(function(n){return n.indexOf('5')!==-1;});
   var hasLow=rangeData.comfort.some(function(n){return n.indexOf('2')!==-1||n.indexOf('3')!==-1;});
   if(hasHigh&&!hasLow)partMatch=parts[0];
   else if(hasHigh&&hasLow)partMatch=parts[1];
   else if(hasLow)partMatch=parts[4];
   else partMatch=parts[3];
  }
  ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
  ctx.fillText('성악 파트: '+partMatch,310,gy+gh+55);
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv23-range-scan').onclick=function(){
   sfx23('rangeMap');
   rangeData.comfort=[];rangeData.possible=[];rangeData.limit=[];
   var allNotes=[];
   for(var oi=0;oi<4;oi++)for(var ni=0;ni<12;ni++)allNotes.push(noteNames[ni]+octaves[oi]);
   var comfortCount=8+Math.floor(Math.random()*10);
   var possCount=4+Math.floor(Math.random()*6);
   var limCount=2+Math.floor(Math.random()*4);
   var start=12+Math.floor(Math.random()*16);
   for(var i=0;i<comfortCount&&start+i<allNotes.length;i++)rangeData.comfort.push(allNotes[start+i]);
   for(var j=0;j<possCount;j++){
    var pi=start-1-j;if(pi>=0)rangeData.possible.push(allNotes[pi]);
    pi=start+comfortCount+j;if(pi<allNotes.length)rangeData.possible.push(allNotes[pi]);
   }
   for(var k=0;k<limCount;k++){
    var li=start-1-possCount-k;if(li>=0)rangeData.limit.push(allNotes[li]);
    li=start+comfortCount+possCount+k;if(li<allNotes.length)rangeData.limit.push(allNotes[li]);
   }
   scanCount++;ls23s('range-data',rangeData);ls23s('range-scans',scanCount);
   sfx23('rangeExpand');draw();
  };
  document.getElementById('sv23-range-reset').onclick=function(){
   rangeData={comfort:[],possible:[],limit:[]};scanCount=0;
   ls23s('range-data',rangeData);ls23s('range-scans',scanCount);draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   2. 곡 키 변환기 Canvas 600x380
   - 12키(C~B) 원형 배치, 원키→변환키 화살표
   - 반음 단위 +/- 조절, 음역 적합도 분석
   ═══════════════════════════════════════════════════════════════ */
function createKeyTransposer(){
 var s=mkSec23('sv23-key-transposer','곡 키 변환기','🎹');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">12키 원형 배치, 원키→변환키 화살표, 반음 단위 조절, 음역 적합도 분석</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv23-key-up" style="padding:6px 14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">⬆ 반음 올리기</button>'
  +'<button id="sv23-key-down" style="padding:6px 14px;background:linear-gradient(135deg,#6366f1,#818cf8);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">⬇ 반음 내리기</button>'
  +'<button id="sv23-key-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 원키</button></div>';
 var cv=mkCanvas23(s.body,600,380,'sv23-key-cv');
 var ctx=cv.getContext('2d');
 var keys=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
 var originalKey=0;
 var transposedKey=0;
 var transCount=ls23('trans-count',0);

 function draw(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('곡 키 변환기 — Circle of Keys',300,22);
  var cx=200,cy=200,r=130;
  for(var i=0;i<12;i++){
   var angle=(-Math.PI/2)+(i*Math.PI*2/12);
   var x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r;
   var isOrig=i===originalKey,isTrans=i===transposedKey;
   ctx.beginPath();ctx.arc(x,y,22,0,Math.PI*2);
   if(isOrig&&isTrans)ctx.fillStyle='rgba(250,204,21,.4)';
   else if(isOrig)ctx.fillStyle='rgba(34,197,94,.4)';
   else if(isTrans)ctx.fillStyle='rgba(168,85,247,.5)';
   else ctx.fillStyle='rgba(168,85,247,.1)';
   ctx.fill();ctx.strokeStyle=isOrig||isTrans?'rgba(255,255,255,.4)':'rgba(168,85,247,.2)';ctx.lineWidth=1.5;ctx.stroke();
   ctx.fillStyle=isOrig||isTrans?'#fff':'#c084fc';ctx.font=(isOrig||isTrans?'bold ':'')+'13px sans-serif';
   ctx.fillText(keys[i],x,y+5);
  }
  if(originalKey!==transposedKey){
   var a1=(-Math.PI/2)+(originalKey*Math.PI*2/12);
   var a2=(-Math.PI/2)+(transposedKey*Math.PI*2/12);
   var x1=cx+Math.cos(a1)*(r-28),y1=cy+Math.sin(a1)*(r-28);
   var x2=cx+Math.cos(a2)*(r-28),y2=cy+Math.sin(a2)*(r-28);
   ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);
   ctx.strokeStyle='rgba(236,72,153,.5)';ctx.lineWidth=2;ctx.setLineDash([5,3]);ctx.stroke();ctx.setLineDash([]);
  }
  var diff=transposedKey-originalKey;if(diff>6)diff-=12;if(diff<-6)diff+=12;
  ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';ctx.textAlign='left';
  ctx.fillText('원키: '+keys[originalKey],400,80);
  ctx.fillStyle='#a855f7';ctx.fillText('변환키: '+keys[transposedKey],400,100);
  ctx.fillStyle='#ec4899';ctx.fillText('변환: '+(diff>=0?'+':'')+diff+' 반음',400,120);
  var fitLabels=['최적','편안','보통','약간 높음','높음','매우 높음','극한','극한','매우 낮음','낮음','약간 낮음','보통'];
  var fitIdx=Math.abs(diff);if(fitIdx>6)fitIdx=12-fitIdx;
  var fitColors=['#22c55e','#34d399','#60a5fa','#fbbf24','#f97316','#ef4444','#dc2626','#dc2626','#ef4444','#f97316','#fbbf24','#60a5fa'];
  ctx.fillStyle=fitColors[fitIdx]||'#60a5fa';ctx.font='bold 13px sans-serif';
  ctx.fillText('적합도: '+(fitLabels[fitIdx]||'보통'),400,150);
  var barW=160,barH=14;
  ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(400,160,barW,barH);
  var fitPct=Math.max(0,100-fitIdx*16);
  var barGrad=ctx.createLinearGradient(400,0,400+barW*fitPct/100,0);
  barGrad.addColorStop(0,'#22c55e');barGrad.addColorStop(1,fitColors[fitIdx]||'#60a5fa');
  ctx.fillStyle=barGrad;ctx.fillRect(400,160,barW*fitPct/100,barH);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='left';
  ctx.fillText('변환 횟수: '+transCount+'회',400,200);
  ctx.fillStyle='rgba(34,197,94,.3)';ctx.fillRect(400,215,12,12);
  ctx.fillStyle='#d8b4fe';ctx.fillText('원키',418,225);
  ctx.fillStyle='rgba(168,85,247,.5)';ctx.fillRect(400,235,12,12);
  ctx.fillText('변환키',418,245);
  var songKeys=['원키로 편하게','반음 올리면 화사하게','반음 내리면 안정적으로','2반음 올리면 밝은 느낌','2반음 내리면 부드러운 느낌','3반음은 장르 전환 효과'];
  ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.fillText('💡 팁',400,275);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';
  var tipIdx=Math.min(Math.abs(diff),songKeys.length-1);
  ctx.fillText(songKeys[tipIdx],400,295);
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv23-key-up').onclick=function(){
   transposedKey=(transposedKey+1)%12;transCount++;
   ls23s('trans-count',transCount);sfx23('transpose');sfx23('transposeShift');draw();
  };
  document.getElementById('sv23-key-down').onclick=function(){
   transposedKey=(transposedKey+11)%12;transCount++;
   ls23s('trans-count',transCount);sfx23('transpose');draw();
  };
  document.getElementById('sv23-key-reset').onclick=function(){
   transposedKey=originalKey;draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   3. 듀엣 케미 분석기 Canvas 620x400
   - 10명 AI 싱어 x 음역/스타일/호흡/리듬/감정/음색 6축 Radar
   - 2인 조합 듀얼 Radar, 호환성% 계산
   ═══════════════════════════════════════════════════════════════ */
function createDuetChemistry(){
 var s=mkSec23('sv23-duet-chemistry','듀엣 케미 분석기','💑');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">10명 AI 싱어, 음역/스타일/호흡/리듬/감정/음색 6축 듀얼 Radar, 호환성% 자동 계산</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv23-duet-rand" style="padding:6px 14px;background:linear-gradient(135deg,#ec4899,#f472b6);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">🎲 랜덤 매칭</button>'
  +'<button id="sv23-duet-next" style="padding:6px 14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">➡ 다음 페어</button></div>';
 var cv=mkCanvas23(s.body,620,400,'sv23-duet-cv');
 var ctx=cv.getContext('2d');
 var singers=[
  {name:'아이유',stats:[90,95,88,82,98,96]},
  {name:'정국',stats:[95,88,90,92,85,90]},
  {name:'태양',stats:[92,90,95,88,90,85]},
  {name:'백예린',stats:[80,92,85,78,95,92]},
  {name:'박효신',stats:[88,85,92,80,96,94]},
  {name:'로제',stats:[85,90,82,88,92,88]},
  {name:'임영웅',stats:[82,88,90,75,94,90]},
  {name:'아이브 안유진',stats:[78,85,75,90,80,82]},
  {name:'에스파 카리나',stats:[82,92,80,92,78,85]},
  {name:'DAY6 성진',stats:[88,82,85,90,88,80]}
 ];
 var axes=['음역','스타일','호흡','리듬','감정','음색'];
 var sel=[0,1];
 var matchCount=ls23('duet-matches',0);

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('듀엣 케미 분석기 — 6축 듀얼 Radar',310,22);
  var rcx=240,rcy=210,rr=120;
  for(var ring=1;ring<=5;ring++){
   ctx.beginPath();
   for(var ai=0;ai<=6;ai++){
    var angle=(-Math.PI/2)+(ai%6)*Math.PI*2/6;
    var rx=rcx+Math.cos(angle)*(rr*ring/5),ry=rcy+Math.sin(angle)*(rr*ring/5);
    if(ai===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
   }
   ctx.closePath();ctx.strokeStyle='rgba(168,85,247,'+(ring===5?.2:.08)+')';ctx.lineWidth=1;ctx.stroke();
  }
  for(var ai2=0;ai2<6;ai2++){
   var angle2=(-Math.PI/2)+ai2*Math.PI*2/6;
   ctx.beginPath();ctx.moveTo(rcx,rcy);
   ctx.lineTo(rcx+Math.cos(angle2)*rr,rcy+Math.sin(angle2)*rr);
   ctx.strokeStyle='rgba(168,85,247,.1)';ctx.stroke();
   ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(axes[ai2],rcx+Math.cos(angle2)*(rr+18),rcy+Math.sin(angle2)*(rr+18)+4);
  }
  var colors=['rgba(236,72,153,.5)','rgba(96,165,250,.5)'];
  var fills=['rgba(236,72,153,.15)','rgba(96,165,250,.15)'];
  for(var si=0;si<2;si++){
   var singer=singers[sel[si]];
   ctx.beginPath();
   for(var a=0;a<6;a++){
    var ang=(-Math.PI/2)+a*Math.PI*2/6;
    var val=singer.stats[a]/100;
    var px=rcx+Math.cos(ang)*(rr*val),py=rcy+Math.sin(ang)*(rr*val);
    if(a===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.closePath();ctx.fillStyle=fills[si];ctx.fill();
   ctx.strokeStyle=colors[si];ctx.lineWidth=2;ctx.stroke();
  }
  var compat=0;
  for(var c=0;c<6;c++){
   var d=Math.abs(singers[sel[0]].stats[c]-singers[sel[1]].stats[c]);
   compat+=Math.max(0,100-d*1.5);
  }
  compat=Math.round(compat/6);
  var rx2=430;
  ctx.fillStyle='#ec4899';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
  ctx.fillText('🎤 '+singers[sel[0]].name,rx2,70);
  ctx.fillStyle='#60a5fa';ctx.fillText('🎤 '+singers[sel[1]].name,rx2,90);
  ctx.fillStyle='#fbbf24';ctx.font='bold 24px sans-serif';ctx.fillText(compat+'%',rx2,135);
  ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';ctx.fillText('호환성',rx2+65,135);
  var grade=compat>=90?'S':compat>=80?'A':compat>=70?'B':compat>=60?'C':'D';
  var gc=grade==='S'?'#fbbf24':grade==='A'?'#34d399':grade==='B'?'#60a5fa':grade==='C'?'#c084fc':'#f87171';
  ctx.fillStyle=gc;ctx.font='bold 28px sans-serif';ctx.fillText(grade,rx2+130,135);
  var recSongs=compat>=80?'발라드 듀엣 추천':compat>=65?'업템포 듀엣 추천':'솔로 추천';
  ctx.fillStyle='#c084fc';ctx.font='bold 12px sans-serif';ctx.fillText('💡 '+recSongs,rx2,165);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';
  for(var axi=0;axi<6;axi++){
   ctx.fillText(axes[axi]+': '+singers[sel[0]].stats[axi]+' vs '+singers[sel[1]].stats[axi],rx2,195+axi*18);
  }
  ctx.fillText('총 매칭 분석: '+matchCount+'회',rx2,310);
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv23-duet-rand').onclick=function(){
   sel[0]=Math.floor(Math.random()*singers.length);
   do{sel[1]=Math.floor(Math.random()*singers.length);}while(sel[1]===sel[0]);
   matchCount++;ls23s('duet-matches',matchCount);sfx23('duetMatch');sfx23('duetSync');draw();
  };
  document.getElementById('sv23-duet-next').onclick=function(){
   sel[1]=(sel[1]+1)%singers.length;if(sel[1]===sel[0])sel[1]=(sel[1]+1)%singers.length;
   matchCount++;ls23s('duet-matches',matchCount);sfx23('duetMatch');draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   4. 퍼포먼스 리플레이 그래프 Canvas 620x380
   - 최근 20회 연주 스코어 라인차트, 최고/최저/평균선
   - 지표별(음정/리듬/표현/호흡/비브라토) 5탭 전환
   ═══════════════════════════════════════════════════════════════ */
function createPerformanceReplay(){
 var s=mkSec23('sv23-performance-replay','퍼포먼스 리플레이 그래프','📊');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">최근 20회 연주 스코어 라인차트, 5지표 탭 전환, 최고/최저/평균선, S~D 추이 분석</p>'
  +'<div id="sv23-replay-tabs" style="display:flex;gap:4px;flex-wrap:wrap;margin:6px 0"></div>';
 var cv=mkCanvas23(s.body,620,380,'sv23-replay-cv');
 var ctx=cv.getContext('2d');
 var metrics=['음정','리듬','표현','호흡','비브라토'];
 var metricColors=['#ec4899','#60a5fa','#34d399','#fbbf24','#a855f7'];
 var currentTab=0;
 var replayData=ls23('replay-data',null);
 if(!replayData){
  replayData={};
  for(var m=0;m<5;m++){
   replayData[m]=[];
   for(var r=0;r<20;r++)replayData[m].push(55+Math.floor(Math.random()*40));
  }
  ls23s('replay-data',replayData);
 }

 function draw(){
  ctx.clearRect(0,0,620,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('퍼포먼스 리플레이 — '+metrics[currentTab]+' 추이',310,22);
  var data=replayData[currentTab]||[];
  var gx=60,gy=45,gw=520,gh=260;
  ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=1;
  for(var i=0;i<=4;i++){
   var yy=gy+gh-i*(gh/4);
   ctx.beginPath();ctx.moveTo(gx,yy);ctx.lineTo(gx+gw,yy);ctx.stroke();
   ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='right';
   ctx.fillText((i*25)+'',gx-8,yy+4);
  }
  if(data.length>1){
   var stepX=gw/(data.length-1);
   ctx.beginPath();
   for(var d=0;d<data.length;d++){
    var px=gx+d*stepX,py=gy+gh-(data[d]/100)*gh;
    if(d===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.strokeStyle=metricColors[currentTab];ctx.lineWidth=2.5;ctx.stroke();
   for(var d2=0;d2<data.length;d2++){
    var px2=gx+d2*stepX,py2=gy+gh-(data[d2]/100)*gh;
    ctx.beginPath();ctx.arc(px2,py2,4,0,Math.PI*2);
    ctx.fillStyle=metricColors[currentTab];ctx.fill();
   }
   var best=Math.max.apply(null,data),worst=Math.min.apply(null,data);
   var avg=Math.round(data.reduce(function(a,b){return a+b;},0)/data.length);
   ctx.beginPath();ctx.moveTo(gx,gy+gh-(best/100)*gh);ctx.lineTo(gx+gw,gy+gh-(best/100)*gh);
   ctx.strokeStyle='rgba(34,197,94,.4)';ctx.lineWidth=1;ctx.setLineDash([4,4]);ctx.stroke();ctx.setLineDash([]);
   ctx.beginPath();ctx.moveTo(gx,gy+gh-(worst/100)*gh);ctx.lineTo(gx+gw,gy+gh-(worst/100)*gh);
   ctx.strokeStyle='rgba(239,68,68,.4)';ctx.setLineDash([4,4]);ctx.stroke();ctx.setLineDash([]);
   ctx.beginPath();ctx.moveTo(gx,gy+gh-(avg/100)*gh);ctx.lineTo(gx+gw,gy+gh-(avg/100)*gh);
   ctx.strokeStyle='rgba(250,204,21,.4)';ctx.setLineDash([4,4]);ctx.stroke();ctx.setLineDash([]);
   ctx.fillStyle='#34d399';ctx.font='10px sans-serif';ctx.textAlign='left';ctx.fillText('Best: '+best,gx+gw+5,gy+gh-(best/100)*gh+4);
   ctx.fillStyle='#ef4444';ctx.fillText('Worst: '+worst,gx+gw+5,gy+gh-(worst/100)*gh+4);
   ctx.fillStyle='#fbbf24';ctx.fillText('Avg: '+avg,gx+gw+5,gy+gh-(avg/100)*gh+4);
   var grade=avg>=90?'S':avg>=80?'A':avg>=70?'B':avg>=60?'C':'D';
   var gc=grade==='S'?'#fbbf24':grade==='A'?'#34d399':grade==='B'?'#60a5fa':grade==='C'?'#c084fc':'#f87171';
   ctx.fillStyle=gc;ctx.font='bold 24px sans-serif';ctx.textAlign='center';ctx.fillText(grade,310,gy+gh+45);
   ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.fillText('최근 20회 평균: '+avg+'점',310,gy+gh+65);
  }
 }

 setTimeout(function(){
  var tabContainer=document.getElementById('sv23-replay-tabs');
  metrics.forEach(function(m,i){
   var btn=document.createElement('button');btn.textContent=m;
   btn.style.cssText='padding:5px 12px;font-size:.8em;border:none;border-radius:5px;cursor:pointer;color:#fff;background:'+(i===0?metricColors[i]:'rgba(168,85,247,.2)');
   btn.onclick=function(){
    currentTab=i;
    Array.from(tabContainer.children).forEach(function(b,bi){b.style.background=bi===i?metricColors[bi]:'rgba(168,85,247,.2)';});
    sfx23('replayStart');draw();
   };
   tabContainer.appendChild(btn);
  });
  draw();
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   5. 보컬 회복 가이드 Canvas 600x380
   - 8종 회복 방법: 스팀흡입/꿀물/성대휴식/허밍/스트레칭/수분/수면/약초차
   - 효과/소요시간/난이도 3축 바차트, 프로그레스 추적
   ═══════════════════════════════════════════════════════════════ */
function createVocalRecovery(){
 var s=mkSec23('sv23-vocal-recovery','보컬 회복 가이드','🌿');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">8종 회복법(스팀흡입/꿀물/성대휴식/허밍/스트레칭/수분/수면/약초차), 효과/시간/난이도 분석</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv23-recovery-do" style="padding:6px 14px;background:linear-gradient(135deg,#059669,#34d399);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">✅ 회복 수행</button>'
  +'<button id="sv23-recovery-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>';
 var cv=mkCanvas23(s.body,600,380,'sv23-recovery-cv');
 var ctx=cv.getContext('2d');
 var methods=[
  {name:'스팀 흡입',effect:88,time:15,ease:90,icon:'♨️'},
  {name:'꿀+레몬물',effect:82,time:5,ease:95,icon:'🍯'},
  {name:'성대 완전 휴식',effect:95,time:60,ease:100,icon:'🤫'},
  {name:'가벼운 허밍',effect:75,time:10,ease:80,icon:'🎵'},
  {name:'목 스트레칭',effect:70,time:8,ease:85,icon:'🧘'},
  {name:'따뜻한 수분 섭취',effect:78,time:3,ease:98,icon:'💧'},
  {name:'충분한 수면',effect:98,time:480,ease:100,icon:'😴'},
  {name:'도라지/배 차',effect:85,time:20,ease:88,icon:'🍵'}
 ];
 var done=ls23('recovery-done',[false,false,false,false,false,false,false,false]);
 var selIdx=0;

 function draw(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('보컬 회복 가이드 — 8종 회복법',300,22);
  var bx=40,by=42,bw=520,barH=28,gap=6;
  for(var i=0;i<methods.length;i++){
   var y=by+i*(barH+gap);
   var m=methods[i];
   var isSel=i===selIdx;
   ctx.fillStyle=isSel?'rgba(168,85,247,.15)':'rgba(168,85,247,.05)';
   ctx.fillRect(bx,y,bw,barH);
   if(done[i]){ctx.fillStyle='rgba(34,197,94,.15)';ctx.fillRect(bx,y,bw,barH);}
   ctx.fillStyle=done[i]?'#34d399':'#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='left';
   ctx.fillText(m.icon+' '+m.name+(done[i]?' ✓':''),bx+6,y+barH/2+4);
   var effW=m.effect/100*(bw*0.35);
   ctx.fillStyle='rgba(34,197,94,.4)';ctx.fillRect(bx+180,y+4,effW,8);
   ctx.fillStyle='rgba(59,130,246,.4)';ctx.fillRect(bx+180,y+14,Math.min(m.time/60,1)*(bw*0.35),8);
   if(isSel){ctx.strokeStyle='rgba(168,85,247,.4)';ctx.lineWidth=1;ctx.strokeRect(bx,y,bw,barH);}
  }
  ctx.fillStyle='rgba(34,197,94,.6)';ctx.fillRect(bx,by+methods.length*(barH+gap)+10,12,10);
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='left';ctx.fillText('효과',bx+16,by+methods.length*(barH+gap)+19);
  ctx.fillStyle='rgba(59,130,246,.5)';ctx.fillRect(bx+60,by+methods.length*(barH+gap)+10,12,10);
  ctx.fillText('소요시간',bx+76,by+methods.length*(barH+gap)+19);
  var doneCount=done.filter(function(d){return d;}).length;
  var pct=Math.round(doneCount/methods.length*100);
  ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
  ctx.fillText('회복 진행률: '+pct+'% ('+doneCount+'/'+methods.length+')',300,by+methods.length*(barH+gap)+40);
  var grade=pct>=100?'S':pct>=75?'A':pct>=50?'B':pct>=25?'C':'D';
  var gc=grade==='S'?'#fbbf24':grade==='A'?'#34d399':grade==='B'?'#60a5fa':grade==='C'?'#c084fc':'#f87171';
  ctx.fillStyle=gc;ctx.font='bold 20px sans-serif';ctx.fillText(grade,560,by+methods.length*(barH+gap)+42);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='left';
  var sel23=methods[selIdx];
  ctx.fillText('선택: '+sel23.icon+' '+sel23.name,bx,by+methods.length*(barH+gap)+65);
  ctx.fillText('효과: '+sel23.effect+'% | 시간: '+sel23.time+'분 | 편의: '+sel23.ease+'%',bx,by+methods.length*(barH+gap)+82);
 }

 setTimeout(function(){
  draw();
  var cvEl=document.getElementById('sv23-recovery-cv');
  cvEl.onclick=function(e){
   var rect=cvEl.getBoundingClientRect();
   var ratio=600/rect.width;
   var y=(e.clientY-rect.top)*ratio;
   var idx=Math.floor((y-42)/34);
   if(idx>=0&&idx<methods.length){selIdx=idx;sfx23('recoveryTip');draw();}
  };
  document.getElementById('sv23-recovery-do').onclick=function(){
   if(!done[selIdx]){done[selIdx]=true;ls23s('recovery-done',done);sfx23('recoveryDone');draw();}
  };
  document.getElementById('sv23-recovery-reset').onclick=function(){
   done=[false,false,false,false,false,false,false,false];selIdx=0;
   ls23s('recovery-done',done);draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   6. 음악이론 드릴 Canvas 600x380
   - 인터벌/스케일/코드/리듬/조표 5카테고리
   - 랜덤 문제 출제, 정답률 추적, 30문제 히스토리 바차트
   ═══════════════════════════════════════════════════════════════ */
function createMusicTheoryDrill(){
 var s=mkSec23('sv23-theory-drill','음악이론 드릴','📐');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">인터벌/스케일/코드/리듬/조표 5카테고리, 랜덤 문제, 정답률 추적, 30문제 히스토리</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv23-theory-new" style="padding:6px 14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">📝 새 문제</button>'
  +'<button id="sv23-theory-reset" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">↺ 리셋</button></div>'
  +'<div id="sv23-theory-answers" style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0"></div>';
 var cv=mkCanvas23(s.body,600,380,'sv23-theory-cv');
 var ctx=cv.getContext('2d');
 var problems=[
  {cat:'인터벌',q:'C에서 G까지의 인터벌은?',a:['완전5도','장3도','단7도','완전4도'],c:0},
  {cat:'스케일',q:'C 장조 음계의 구성음은?',a:['C-D-E-F-G-A-B','C-D-Eb-F-G-Ab-Bb','C-Db-Eb-F-Gb-Ab-Bb','C-D-E-F#-G-A-B'],c:0},
  {cat:'코드',q:'C 메이저 코드의 구성음은?',a:['C-E-G','C-Eb-G','C-E-G#','C-D-G'],c:0},
  {cat:'리듬',q:'4/4박자에서 온음표의 길이는?',a:['4박','2박','1박','8박'],c:0},
  {cat:'조표',q:'플랫(b) 1개인 조는?',a:['F장조/D단조','Bb장조/G단조','Eb장조/C단조','Ab장조/F단조'],c:0},
  {cat:'인터벌',q:'반음(Semitone) 2개는?',a:['온음(Whole Tone)','반음','3도','5도'],c:0},
  {cat:'스케일',q:'A 단조 자연음계의 구성음은?',a:['A-B-C-D-E-F-G','A-B-C#-D-E-F#-G#','A-Bb-C-D-Eb-F-G','A-B-C-D-E-F#-G#'],c:0},
  {cat:'코드',q:'Dm7 코드의 구성음은?',a:['D-F-A-C','D-F#-A-C#','D-F-A-C#','D-F#-A-C'],c:0},
  {cat:'리듬',q:'8분음표 하나의 길이(4/4박자)는?',a:['0.5박','1박','0.25박','2박'],c:0},
  {cat:'조표',q:'샾(#) 2개인 조는?',a:['D장조/B단조','G장조/E단조','A장조/F#단조','E장조/C#단조'],c:0},
  {cat:'인터벌',q:'옥타브(Octave)는 몇 반음?',a:['12반음','7반음','8반음','10반음'],c:0},
  {cat:'스케일',q:'펜타토닉 스케일의 음 개수는?',a:['5개','7개','12개','3개'],c:0},
  {cat:'코드',q:'증3화음(Augmented)의 특징은?',a:['장3도+장3도','장3도+단3도','단3도+장3도','단3도+단3도'],c:0},
  {cat:'리듬',q:'점음표의 길이는 원래의?',a:['1.5배','2배','1.25배','3배'],c:0},
  {cat:'조표',q:'조표 없는 조는?',a:['C장조/A단조','G장조/E단조','F장조/D단조','D장조/B단조'],c:0}
 ];
 var curQ=null;var history=ls23('theory-hist',[]);var totalCorrect=ls23('theory-correct',0);var totalAttempt=ls23('theory-attempt',0);
 var answered=false;

 function draw(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('음악이론 드릴 — 5카테고리',300,22);
  if(curQ){
   ctx.fillStyle='rgba(168,85,247,.1)';ctx.fillRect(30,40,540,45);
   ctx.fillStyle='#ec4899';ctx.font='11px sans-serif';ctx.textAlign='left';ctx.fillText('['+curQ.cat+']',40,58);
   ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.fillText(curQ.q,100,63);
  }
  if(history.length>0){
   var gx=50,gy=110,gw=500,gh=160;
   var barW=Math.min(gw/Math.min(history.length,30)-2,16);
   ctx.strokeStyle='rgba(168,85,247,.12)';ctx.lineWidth=1;
   ctx.beginPath();ctx.moveTo(gx,gy+gh);ctx.lineTo(gx+gw,gy+gh);ctx.stroke();
   var shown=history.slice(-30);
   for(var i=0;i<shown.length;i++){
    var x=gx+i*(barW+2);
    var h=shown[i]?gh*0.8:gh*0.2;
    ctx.fillStyle=shown[i]?'rgba(34,197,94,.5)':'rgba(239,68,68,.4)';
    ctx.fillRect(x,gy+gh-h,barW,h);
   }
  }
  var accPct=totalAttempt>0?Math.round(totalCorrect/totalAttempt*100):0;
  ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';ctx.textAlign='center';
  ctx.fillText('총 '+totalAttempt+'문 / 정답 '+totalCorrect+'문 ('+accPct+'%)',300,300);
  var grade=accPct>=90?'S':accPct>=75?'A':accPct>=60?'B':accPct>=40?'C':'D';
  var gc=grade==='S'?'#fbbf24':grade==='A'?'#34d399':grade==='B'?'#60a5fa':grade==='C'?'#c084fc':'#f87171';
  ctx.fillStyle=gc;ctx.font='bold 22px sans-serif';ctx.fillText(grade,300,335);
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.fillText('최근 '+Math.min(history.length,30)+'문 히스토리',300,355);
 }

 function newQuestion(){
  curQ=problems[Math.floor(Math.random()*problems.length)];
  answered=false;
  var ansDiv=document.getElementById('sv23-theory-answers');
  ansDiv.innerHTML='';
  curQ.a.forEach(function(opt,idx){
   var btn=document.createElement('button');
   btn.textContent=opt;
   btn.style.cssText='padding:5px 10px;font-size:.8em;color:#d8b4fe;background:rgba(168,85,247,.12);border:1px solid rgba(168,85,247,.2);border-radius:5px;cursor:pointer';
   btn.onclick=function(){
    if(answered)return;answered=true;
    totalAttempt++;
    if(idx===curQ.c){totalCorrect++;history.push(true);sfx23('theoryCorrect');btn.style.background='rgba(34,197,94,.3)';}
    else{history.push(false);sfx23('theoryWrong');btn.style.background='rgba(239,68,68,.3)';
     Array.from(ansDiv.children)[curQ.c].style.background='rgba(34,197,94,.3)';}
    ls23s('theory-hist',history.slice(-50));ls23s('theory-correct',totalCorrect);ls23s('theory-attempt',totalAttempt);
    draw();
   };
   ansDiv.appendChild(btn);
  });
  draw();
 }

 setTimeout(function(){
  newQuestion();
  document.getElementById('sv23-theory-new').onclick=function(){newQuestion();};
  document.getElementById('sv23-theory-reset').onclick=function(){
   history=[];totalCorrect=0;totalAttempt=0;
   ls23s('theory-hist',history);ls23s('theory-correct',0);ls23s('theory-attempt',0);
   newQuestion();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   7. 셋리스트 최적화기 Canvas 600x380
   - 곡 추가/제거, 장르/BPM/분위기 밸런스 시각화
   - 자동 순서 최적화, 파티 흐름 분석 Radar
   ═══════════════════════════════════════════════════════════════ */
function createSetlistOptimizer(){
 var s=mkSec23('sv23-setlist-optimizer','셋리스트 최적화기','🎧');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">곡 추가/제거, 장르/BPM/분위기 밸런스, 자동 순서 최적화, 파티 흐름 분석 6축 Radar</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv23-set-add" style="padding:6px 14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">➕ 곡 추가</button>'
  +'<button id="sv23-set-opt" style="padding:6px 14px;background:linear-gradient(135deg,#ec4899,#f472b6);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">🔄 자동 최적화</button>'
  +'<button id="sv23-set-clear" style="padding:6px 14px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:6px;cursor:pointer;font-size:.82em">🗑 초기화</button></div>';
 var cv=mkCanvas23(s.body,600,380,'sv23-setlist-cv');
 var ctx=cv.getContext('2d');
 var pool=[
  {title:'Super Shy',genre:'pop',bpm:130,energy:90,mood:'신남'},
  {title:'밤양갱',genre:'ballad',bpm:78,energy:30,mood:'감성'},
  {title:'APT.',genre:'pop',bpm:125,energy:95,mood:'신남'},
  {title:'사건의 지평선',genre:'rock',bpm:88,energy:60,mood:'감성'},
  {title:'Whiplash',genre:'dance',bpm:132,energy:92,mood:'신남'},
  {title:'Celebrity',genre:'pop',bpm:108,energy:75,mood:'밝음'},
  {title:'Dynamite',genre:'pop',bpm:114,energy:85,mood:'밝음'},
  {title:'우리들의 블루스',genre:'ballad',bpm:72,energy:25,mood:'슬픔'},
  {title:'예뻤어',genre:'rock',bpm:98,energy:65,mood:'감성'},
  {title:'퀸카',genre:'dance',bpm:116,energy:88,mood:'신남'},
  {title:'에잇',genre:'pop',bpm:120,energy:70,mood:'밝음'},
  {title:'작은 것들을 위한 시',genre:'pop',bpm:100,energy:55,mood:'감성'}
 ];
 var setlist=ls23('setlist',[]);

 function draw(){
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('셋리스트 최적화기 — '+setlist.length+'곡',300,22);
  var lx=20,ly=42,lw=250;
  if(setlist.length===0){
   ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';ctx.textAlign='left';ctx.fillText('곡을 추가해주세요',lx+10,ly+30);
  }
  for(var i=0;i<setlist.length&&i<10;i++){
   var y=ly+i*28;
   var genreColor=setlist[i].genre==='ballad'?'rgba(96,165,250,.25)':setlist[i].genre==='dance'?'rgba(236,72,153,.25)':setlist[i].genre==='rock'?'rgba(239,68,68,.25)':'rgba(168,85,247,.2)';
   ctx.fillStyle=genreColor;ctx.fillRect(lx,y,lw,24);
   ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';ctx.textAlign='left';
   ctx.fillText((i+1)+'. '+setlist[i].title,lx+6,y+16);
   ctx.fillStyle='rgba(200,180,254,.5)';ctx.font='9px sans-serif';ctx.textAlign='right';
   ctx.fillText(setlist[i].bpm+'BPM',lx+lw-6,y+16);
  }
  if(setlist.length>0){
   var rcx=430,rcy=190,rr=110;
   var axes=['장르다양성','BPM변화','에너지흐름','분위기전환','난이도배분','시간배분'];
   var genres=new Set(setlist.map(function(s){return s.genre;}));
   var bpmRange=setlist.length>1?Math.abs(setlist[setlist.length-1].bpm-setlist[0].bpm):0;
   var avgEnergy=setlist.reduce(function(a,s){return a+s.energy;},0)/setlist.length;
   var moods=new Set(setlist.map(function(s){return s.mood;}));
   var vals=[
    Math.min(genres.size/4*100,100),
    Math.min(bpmRange/60*100,100),
    avgEnergy,
    Math.min(moods.size/4*100,100),
    Math.min(setlist.length/8*100,100),
    Math.min(setlist.length*10,100)
   ];
   for(var ring=1;ring<=5;ring++){
    ctx.beginPath();
    for(var ai=0;ai<=6;ai++){
     var angle=(-Math.PI/2)+(ai%6)*Math.PI*2/6;
     var rx=rcx+Math.cos(angle)*(rr*ring/5),ry=rcy+Math.sin(angle)*(rr*ring/5);
     if(ai===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
    }
    ctx.closePath();ctx.strokeStyle='rgba(168,85,247,'+(ring===5?.2:.08)+')';ctx.lineWidth=1;ctx.stroke();
   }
   for(var ai2=0;ai2<6;ai2++){
    var angle2=(-Math.PI/2)+ai2*Math.PI*2/6;
    ctx.beginPath();ctx.moveTo(rcx,rcy);ctx.lineTo(rcx+Math.cos(angle2)*rr,rcy+Math.sin(angle2)*rr);
    ctx.strokeStyle='rgba(168,85,247,.1)';ctx.stroke();
    ctx.fillStyle='#d8b4fe';ctx.font='9px sans-serif';ctx.textAlign='center';
    ctx.fillText(axes[ai2],rcx+Math.cos(angle2)*(rr+16),rcy+Math.sin(angle2)*(rr+16)+3);
   }
   ctx.beginPath();
   for(var v=0;v<6;v++){
    var ang=(-Math.PI/2)+v*Math.PI*2/6;
    var vx=rcx+Math.cos(ang)*(rr*vals[v]/100),vy=rcy+Math.sin(ang)*(rr*vals[v]/100);
    if(v===0)ctx.moveTo(vx,vy);else ctx.lineTo(vx,vy);
   }
   ctx.closePath();ctx.fillStyle='rgba(168,85,247,.2)';ctx.fill();
   ctx.strokeStyle='rgba(168,85,247,.6)';ctx.lineWidth=2;ctx.stroke();
   var totalScore=Math.round(vals.reduce(function(a,v){return a+v;},0)/6);
   ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.fillText('밸런스: '+totalScore+'%',rcx,rcy+rr+30);
  }
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv23-set-add').onclick=function(){
   if(setlist.length>=10)return;
   var remaining=pool.filter(function(p){return !setlist.find(function(s){return s.title===p.title;});});
   if(remaining.length===0)return;
   var song=remaining[Math.floor(Math.random()*remaining.length)];
   setlist.push(song);ls23s('setlist',setlist);sfx23('setlistAdd');draw();
  };
  document.getElementById('sv23-set-opt').onclick=function(){
   setlist.sort(function(a,b){return a.energy-b.energy;});
   ls23s('setlist',setlist);sfx23('replayCompare');draw();
  };
  document.getElementById('sv23-set-clear').onclick=function(){
   setlist=[];ls23s('setlist',setlist);draw();
  };
 },200);
 return s.sec;
}

/* ═══════════════════════════════════════════════════════════════
   8. 성악 보이스 분류기 Canvas 620x400
   - 8종 보이스 타입: 소프라노/메조소프라노/콘트랄토/카운터테너/테너/바리톤/베이스바리톤/베이스
   - 6축 Radar(음역/음색/파워/유연성/지구력/공명), 자동 분류
   ═══════════════════════════════════════════════════════════════ */
function createVoiceClassifier(){
 var s=mkSec23('sv23-voice-classifier','성악 보이스 분류기','🎭');
 s.body.innerHTML='<p style="color:#d8b4fe;font-size:.85em;margin:0 0 8px">8종 보이스 타입, 음역/음색/파워/유연성/지구력/공명 6축 Radar, 자동 분류 매칭</p>'
  +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0">'
  +'<button id="sv23-voice-analyze" style="padding:6px 14px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">🔬 보이스 분석</button>'
  +'<button id="sv23-voice-next" style="padding:6px 14px;background:linear-gradient(135deg,#ec4899,#f472b6);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.82em">➡ 다음 타입</button></div>';
 var cv=mkCanvas23(s.body,620,400,'sv23-voice-cv');
 var ctx=cv.getContext('2d');
 var types=[
  {name:'소프라노',range:'C4~C6',stats:[95,80,70,90,75,85],color:'#ec4899',desc:'가장 높은 여성 음역. 화려하고 밝은 음색'},
  {name:'메조소프라노',range:'A3~A5',stats:[80,88,78,85,82,80],color:'#f472b6',desc:'중간 여성 음역. 따뜻하고 풍부한 음색'},
  {name:'콘트랄토',range:'F3~F5',stats:[65,92,82,75,88,90],color:'#c084fc',desc:'가장 낮은 여성 음역. 깊고 풍성한 울림'},
  {name:'카운터테너',range:'E3~E5',stats:[88,85,60,95,70,78],color:'#818cf8',desc:'팔세토 기반 높은 남성 음역. 독특한 음색'},
  {name:'테너',range:'C3~C5',stats:[82,78,85,80,80,82],color:'#60a5fa',desc:'높은 남성 음역. 영웅적이고 밝은 톤'},
  {name:'바리톤',range:'A2~A4',stats:[70,85,90,72,85,88],color:'#34d399',desc:'중간 남성 음역. 따뜻하고 안정적'},
  {name:'베이스바리톤',range:'G2~G4',stats:[60,88,92,65,88,92],color:'#fbbf24',desc:'깊고 풍부한 남성 음역'},
  {name:'베이스',range:'E2~E4',stats:[50,90,95,55,92,95],color:'#f97316',desc:'가장 낮은 남성 음역. 깊고 웅장한 울림'}
 ];
 var selType=0;
 var myStats=ls23('voice-stats',[75,78,72,80,76,74]);
 var classified=ls23('voice-classified',false);

 function draw(){
  ctx.clearRect(0,0,620,400);ctx.fillStyle='#0d0820';ctx.fillRect(0,0,620,400);
  ctx.fillStyle='#c084fc';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
  ctx.fillText('성악 보이스 분류기 — 8종 보이스 타입',310,22);
  var rcx=230,rcy=210,rr=130;
  var axes=['음역','음색','파워','유연성','지구력','공명'];
  for(var ring=1;ring<=5;ring++){
   ctx.beginPath();
   for(var ai=0;ai<=6;ai++){
    var angle=(-Math.PI/2)+(ai%6)*Math.PI*2/6;
    var rx=rcx+Math.cos(angle)*(rr*ring/5),ry=rcy+Math.sin(angle)*(rr*ring/5);
    if(ai===0)ctx.moveTo(rx,ry);else ctx.lineTo(rx,ry);
   }
   ctx.closePath();ctx.strokeStyle='rgba(168,85,247,'+(ring===5?.2:.08)+')';ctx.lineWidth=1;ctx.stroke();
  }
  for(var ai2=0;ai2<6;ai2++){
   var angle2=(-Math.PI/2)+ai2*Math.PI*2/6;
   ctx.beginPath();ctx.moveTo(rcx,rcy);ctx.lineTo(rcx+Math.cos(angle2)*rr,rcy+Math.sin(angle2)*rr);
   ctx.strokeStyle='rgba(168,85,247,.1)';ctx.stroke();
   ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.textAlign='center';
   ctx.fillText(axes[ai2],rcx+Math.cos(angle2)*(rr+18),rcy+Math.sin(angle2)*(rr+18)+4);
  }
  var t=types[selType];
  ctx.beginPath();
  for(var s1=0;s1<6;s1++){
   var ang=(-Math.PI/2)+s1*Math.PI*2/6;
   var vx=rcx+Math.cos(ang)*(rr*t.stats[s1]/100),vy=rcy+Math.sin(ang)*(rr*t.stats[s1]/100);
   if(s1===0)ctx.moveTo(vx,vy);else ctx.lineTo(vx,vy);
  }
  ctx.closePath();ctx.fillStyle=t.color.replace(')',',0.2)').replace('rgb','rgba').replace('#','');
  ctx.fillStyle=t.color+'33';ctx.fill();
  ctx.strokeStyle=t.color;ctx.lineWidth=2;ctx.stroke();
  if(classified){
   ctx.beginPath();
   for(var s2=0;s2<6;s2++){
    var ang2=(-Math.PI/2)+s2*Math.PI*2/6;
    var mx=rcx+Math.cos(ang2)*(rr*myStats[s2]/100),my2=rcy+Math.sin(ang2)*(rr*myStats[s2]/100);
    if(s2===0)ctx.moveTo(mx,my2);else ctx.lineTo(mx,my2);
   }
   ctx.closePath();ctx.fillStyle='rgba(250,204,21,.15)';ctx.fill();
   ctx.strokeStyle='#fbbf24';ctx.lineWidth=1.5;ctx.setLineDash([4,3]);ctx.stroke();ctx.setLineDash([]);
  }
  var rx2=420;
  ctx.fillStyle=t.color;ctx.font='bold 16px sans-serif';ctx.textAlign='left';
  ctx.fillText(t.name,rx2,60);
  ctx.fillStyle='#d8b4fe';ctx.font='12px sans-serif';
  ctx.fillText('음역: '+t.range,rx2,82);
  ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';
  var descLines=t.desc.match(/.{1,18}/g)||[t.desc];
  for(var dl=0;dl<descLines.length;dl++)ctx.fillText(descLines[dl],rx2,102+dl*16);
  ctx.fillStyle='#c084fc';ctx.font='bold 11px sans-serif';
  for(var ai3=0;ai3<6;ai3++){
   ctx.fillText(axes[ai3]+': '+t.stats[ai3],rx2,150+ai3*18);
  }
  if(classified){
   var bestMatch=0,bestScore=-1;
   for(var ti=0;ti<types.length;ti++){
    var sc=0;for(var si2=0;si2<6;si2++)sc+=100-Math.abs(types[ti].stats[si2]-myStats[si2]);
    if(sc>bestScore){bestScore=sc;bestMatch=ti;}
   }
   ctx.fillStyle='#fbbf24';ctx.font='bold 13px sans-serif';
   ctx.fillText('내 보이스: '+types[bestMatch].name,rx2,280);
   ctx.fillStyle='#d8b4fe';ctx.font='11px sans-serif';
   ctx.fillText('매칭도: '+Math.round(bestScore/6)+'%',rx2,300);
  }
  ctx.fillStyle=t.color;ctx.fillRect(rx2,320,12,12);
  ctx.fillStyle='#d8b4fe';ctx.font='10px sans-serif';ctx.fillText(t.name+' 기준',rx2+18,330);
  if(classified){ctx.fillStyle='#fbbf24';ctx.fillRect(rx2,338,12,12);ctx.fillText('내 보이스',rx2+18,348);}
 }

 setTimeout(function(){
  draw();
  document.getElementById('sv23-voice-analyze').onclick=function(){
   myStats=[];for(var i=0;i<6;i++)myStats.push(40+Math.floor(Math.random()*55));
   classified=true;ls23s('voice-stats',myStats);ls23s('voice-classified',true);
   sfx23('voiceClassify');draw();
  };
  document.getElementById('sv23-voice-next').onclick=function(){
   selType=(selType+1)%types.length;sfx23('navClick23');draw();
  };
 },200);
 return s.sec;
}

/* ── Mount v23 sections ── */
function mountV23(){
 var target=document.getElementById('songSelect')||document.querySelector('.song-list')||document.querySelector('main')||document.body;
 var container=document.createElement('div');
 container.id='sv23-container';
 container.style.cssText='grid-column:1/-1;padding:0 4px';
 var header=document.createElement('div');
 header.style.cssText='text-align:center;padding:16px 0 8px;border-bottom:1px solid rgba(168,85,247,.2);margin-bottom:12px';
 header.innerHTML='<span style="background:linear-gradient(135deg,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:bold;font-size:1.1em">🎤 StarVoice v23 — 음역매퍼+키변환+듀엣케미+리플레이+회복가이드+이론드릴+셋리스트+보이스분류</span>';
 container.appendChild(header);
 container.appendChild(createVocalRangeMapper());
 container.appendChild(createKeyTransposer());
 container.appendChild(createDuetChemistry());
 container.appendChild(createPerformanceReplay());
 container.appendChild(createVocalRecovery());
 container.appendChild(createMusicTheoryDrill());
 container.appendChild(createSetlistOptimizer());
 container.appendChild(createVoiceClassifier());
 if(target.children.length>2)target.insertBefore(container,target.children[2]);
 else target.appendChild(container);
}

/* ── Nav buttons v23 ── */
function addV23Nav(){
 var nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
 if(!nav){var wt=0;(function waitNav(){if(wt++<30)setTimeout(function(){
  nav=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav')||document.getElementById('bottomNav');
  if(nav)appendNavBtns23(nav);else waitNav();},500);})();return;}
 appendNavBtns23(nav);
}
function appendNavBtns23(nav){
 var items=[
  {label:'🗺️음역맵',target:'sv23-range-mapper'},
  {label:'🎹키변환',target:'sv23-key-transposer'},
  {label:'💑듀엣케미',target:'sv23-duet-chemistry'},
  {label:'📊리플레이',target:'sv23-performance-replay'},
  {label:'🌿회복가이드',target:'sv23-vocal-recovery'},
  {label:'📐이론드릴',target:'sv23-theory-drill'},
  {label:'🎧셋리스트',target:'sv23-setlist-optimizer'},
  {label:'🎭보이스분류',target:'sv23-voice-classifier'},
  {label:'📝v23퀴즈',target:'sv23-container'}
 ];
 items.forEach(function(it){
  var b=document.createElement('button');
  b.textContent=it.label;
  b.style.cssText='flex:0 0 auto;padding:6px 10px;font-size:11px;color:#c084fc;background:transparent;border:none;cursor:pointer;white-space:nowrap';
  b.onclick=function(){var el=document.getElementById(it.target);if(el)el.scrollIntoView({behavior:'smooth'});sfx23('navClick23');};
  nav.appendChild(b);
 });
}

/* ── Keyboard shortcuts v23 (Shift+A~H + Shift+9) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var targets={KeyA:'sv23-range-mapper',KeyB:'sv23-key-transposer',KeyC:'sv23-duet-chemistry',
  KeyD:'sv23-performance-replay',KeyF:'sv23-vocal-recovery',KeyG:'sv23-theory-drill',
  KeyH:'sv23-setlist-optimizer',KeyJ:'sv23-voice-classifier',Digit9:'sv23-container'};
 var t=targets[e.code];
 if(t){e.preventDefault();var el=document.getElementById(t);if(el)el.scrollIntoView({behavior:'smooth'});sfx23('navClick23');}
});

/* ── Init ── */
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',function(){setTimeout(mountV23,1050);setTimeout(addV23Nav,1450);});
}else{setTimeout(mountV23,1050);setTimeout(addV23Nav,1450);}

})();
