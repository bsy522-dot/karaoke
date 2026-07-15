/* StarVoice v20 Patch — Self-contained IIFE module injected via SW
 * +10 songs(165->175), VocalToneMatcher Canvas, LiveEffectChain Canvas,
 * ArtistTechniqueAnalyzer Canvas, WeeklyVocalChallenge Canvas,
 * VocalFatigueMonitor Canvas, RangeHistoryMap Canvas,
 * SongCompletenessScorecard Canvas PNG, VocalPracticePlanner Canvas,
 * quiz +15(192->207), achievements +12(162->174), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v20KaraokeLoaded) return;
window.__v20KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Fs4=369.99,Bb3=233.08,Eb4=311.13,Ab4=415.30,Db5=554.37;
var Cs4=277.18,Gs4=415.30,Bb4=466.16,Fs3=185.00;
var Eb3=155.56,Ab3=207.65,Cs5=554.37,Fs5=739.99;
var Gs3=207.65,Ds4=311.13,As3=233.08;

function ls20(k,d){try{var v=localStorage.getItem('sv20-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls20s(k,v){try{localStorage.setItem('sv20-'+k,JSON.stringify(v));}catch(e){}}

/* ── 10 New Songs (166-175) ── */
var v20Songs=[
{id:166,title:'APT.',artist:'ROSE & Bruno Mars',bpm:148,key:'G',difficulty:3,genre:'pop',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['A','P','T','아','파','트','게','임','시','작','해','볼','까','우','리','둘'],
 duration:[304,304,304,608,304,304,304,304,304,304,304,608,304,304,304,304]},
{id:167,title:'Supernova',artist:'aespa',bpm:138,key:'F',difficulty:5,genre:'dance',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['Su','per','no','va','빛','나','는','별','이','되','어','세','상','을','밝','혀'],
 duration:[326,326,326,652,326,326,326,326,326,326,326,652,326,326,326,326]},
{id:168,title:'해야 (HEYA)',artist:'IVE',bpm:128,key:'D',difficulty:4,genre:'dance',
 notes:[D3,Fs3,A3,D4,Cs4,A3,Fs3,D3,E3,G3,B3,D4,Cs4,B3,A3,G3],
 lyrics:['해','야','해','야','해','야','떠','올','라','빛','나','는','해','야','해','야'],
 duration:[352,352,352,703,352,352,352,352,352,352,352,703,352,352,352,352]},
{id:169,title:'소나기',artist:'이클립스',bpm:76,key:'Eb',difficulty:3,genre:'ballad',
 notes:[Eb3,G3,Bb3,Eb4,D4,Bb3,G3,Eb3,F3,Ab3,C4,Eb4,D4,C4,Bb3,Ab3],
 lyrics:['소','나','기','처','럼','너','에','게','쏟','아','지','고','싶','었','어','나'],
 duration:[592,592,592,1184,592,592,592,592,592,592,592,1184,592,592,592,592]},
{id:170,title:'SPOT!',artist:'ZICO ft. JENNIE',bpm:120,key:'A',difficulty:4,genre:'hiphop',
 notes:[A3,Cs4,E4,A4,Gs4,E4,Cs4,A3,B3,D4,Fs4,A4,Gs4,Fs4,E4,D4],
 lyrics:['Spot','on','오','늘','밤','불','을','켜','Spot','light','비','추','는','우','리','만'],
 duration:[375,375,375,750,375,375,375,375,375,375,375,750,375,375,375,375]},
{id:171,title:'Welcome to the Show',artist:'DAY6',bpm:168,key:'C',difficulty:4,genre:'rock',
 notes:[C4,E4,G4,C5,B4,G4,E4,C4,D4,F4,A4,C5,B4,A4,G4,F4],
 lyrics:['Wel','come','to','the','show','함','께','할','시','간','이','야','자','이','제','부터'],
 duration:[268,268,268,536,268,268,268,268,268,268,268,536,268,268,268,268]},
{id:172,title:'첫 만남은 계획대로 되지 않아',artist:'TWS',bpm:116,key:'Bb',difficulty:3,genre:'pop',
 notes:[Bb3,D4,F4,Bb4,A4,F4,D4,Bb3,C4,Eb4,G4,Bb4,A4,G4,F4,Eb4],
 lyrics:['첫','만','남','은','계','획','대','로','되','지','않','아','그','래','서','좋아'],
 duration:[388,388,388,776,388,388,388,388,388,388,388,776,388,388,388,388]},
{id:173,title:'Magnetic',artist:'ILLIT',bpm:130,key:'E',difficulty:3,genre:'pop',
 notes:[E3,Gs3,B3,E4,Ds4,B3,Gs3,E3,Fs3,A3,Cs4,E4,Ds4,Cs4,B3,A3],
 lyrics:['Mag','ne','tic','끌','리','는','대','로','너','에','게','자','꾸','빠','져','들어'],
 duration:[346,346,346,692,346,346,346,346,346,346,346,692,346,346,346,346]},
{id:174,title:'고민중독',artist:'QWER',bpm:140,key:'G',difficulty:4,genre:'rock',
 notes:[G3,B3,D4,G4,Fs4,D4,B3,G3,A3,C4,E4,G4,Fs4,E4,D4,C4],
 lyrics:['고','민','중','독','너','때','문','에','매','일','밤','잠','을','못','이','뤄'],
 duration:[321,321,321,643,321,321,321,321,321,321,321,643,321,321,321,321]},
{id:175,title:'Love Lee',artist:'AKMU',bpm:104,key:'F',difficulty:3,genre:'pop',
 notes:[F3,A3,C4,F4,E4,C4,A3,F3,G3,Bb3,D4,F4,E4,D4,C4,Bb3],
 lyrics:['Love','Lee','사','랑','스','럽','다','너','는','나','의','Love','Lee','영','원','히'],
 duration:[433,433,433,865,433,433,433,433,433,433,433,865,433,433,433,433]}
];
(function injectSongs20(){
 var tries=0;
 function attempt(){
  if(window.songs&&Array.isArray(window.songs)){
   v20Songs.forEach(function(s){if(!window.songs.find(function(x){return x.id===s.id;}))window.songs.push(s);});
   if(typeof window.populateSongList==='function')window.populateSongList();
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── SFX Engine v20 (12 sounds) ── */
var actx20=null;
function getAC20(){if(!actx20)try{actx20=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx20;}
function sfx20(type){
 var ac=getAC20();if(!ac)return;
 var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime;
 o.connect(g);g.connect(ac.destination);
 var cfg={
  toneScan:{f:440,d:.5,wave:'sine',gS:.18,gE:0},
  effectChain:{f:587,d:.4,wave:'triangle',gS:.2,gE:0},
  techCompare:{f:523,d:.35,wave:'sine',gS:.22,gE:0},
  challengeStart:{f:784,d:.45,wave:'triangle',gS:.25,gE:0},
  fatigueWarn:{f:220,d:.6,wave:'sawtooth',gS:.1,gE:0},
  rangeExpand:{f:660,d:.4,wave:'sine',gS:.2,gE:0},
  scorecardGen:{f:880,d:.5,wave:'triangle',gS:.28,gE:0},
  plannerSave:{f:349,d:.4,wave:'sine',gS:.18,gE:0},
  quizCorrect20:{f:1047,d:.3,wave:'triangle',gS:.22,gE:0},
  quizWrong20:{f:196,d:.4,wave:'sawtooth',gS:.1,gE:0},
  achieve20:{f:1175,d:.6,wave:'triangle',gS:.32,gE:0},
  navClick20:{f:698,d:.2,wave:'sine',gS:.15,gE:0}
 };
 var c=cfg[type]||cfg.toneScan;
 o.type=c.wave;o.frequency.setValueAtTime(c.f,t);
 if(type==='effectChain'){o.frequency.setValueAtTime(c.f,t);o.frequency.exponentialRampToValueAtTime(c.f*1.3,t+c.d*0.3);o.frequency.exponentialRampToValueAtTime(c.f*0.7,t+c.d*0.7);}
 if(type==='fatigueWarn'){o.frequency.setValueAtTime(c.f,t);o.frequency.linearRampToValueAtTime(c.f*0.8,t+c.d);}
 if(type==='rangeExpand'){o.frequency.setValueAtTime(c.f*0.7,t);o.frequency.exponentialRampToValueAtTime(c.f*1.5,t+c.d);}
 g.gain.setValueAtTime(c.gS,t);g.gain.exponentialRampToValueAtTime(0.001,t+c.d);
 o.start(t);o.stop(t+c.d);
}

/* ── Quiz v20 (+15 questions, 192->207) ── */
var v20Quiz=[
{q:'&quot;컴프레서(Compressor)&quot;가 보컬에 하는 역할은?',a:['다이나믹 레인지 축소','음정 교정','리버브 추가','템포 변경'],c:0},
{q:'노래할 때 &quot;어택(Attack)&quot;이란?',a:['음의 시작 부분의 강도','곡의 마지막 부분','쉬는 구간','전주 부분'],c:0},
{q:'보컬 녹음 시 &quot;팝 필터&quot;의 주요 용도는?',a:['파열음(ㅂ,ㅍ) 방지','음정 보정','에코 추가','볼륨 조절'],c:0},
{q:'&quot;보컬 프라이(Vocal Fry)&quot;는 어떤 발성인가?',a:['성대를 느슨히 진동시키는 저음 발성','고음 가성','비음 발성','흉성 발성'],c:0},
{q:'노래방에서 &quot;MR&quot;은 무엇의 약자인가?',a:['Music Recorded(반주)','Master Recording','Mix Remix','Mic Response'],c:0},
{q:'보컬 트레이닝에서 &quot;립 트릴(Lip Trill)&quot;의 효과는?',a:['성대 긴장 이완과 호흡 조절','고음 확장','비브라토 연습','발음 교정'],c:0},
{q:'&quot;크레센도(Crescendo)&quot;의 의미는?',a:['점점 세게','점점 여리게','일정하게','갑자기 세게'],c:0},
{q:'K-POP에서 &quot;킬링파트&quot;란?',a:['곡에서 가장 인상적인 핵심 파트','마지막 파트','랩 파트만 지칭','인트로 부분'],c:0},
{q:'노래할 때 &quot;패시지오(Passaggio)&quot;란?',a:['성구 전환 지점','곡의 브릿지','간주 구간','엔딩 부분'],c:0},
{q:'보컬 이펙트 &quot;코러스(Chorus)&quot;의 효과는?',a:['여러 사람이 부르는 듯한 효과','음정 교정','저음 부스트','잡음 제거'],c:0},
{q:'&quot;아카펠라(A Cappella)&quot;의 뜻은?',a:['반주 없이 목소리만으로 부르기','큰 소리로 부르기','빠르게 부르기','합창단 공연'],c:0},
{q:'보컬에서 &quot;마스크(Mask) 공명&quot;이란?',a:['얼굴 앞쪽 공명을 활용한 발성','마스크를 쓰고 부르기','비음 제거','저음 공명'],c:0},
{q:'노래방 점수에서 &quot;박자 정확도&quot;란?',a:['노트 타이밍과 반주 일치도','음정의 높낮이','성량의 크기','비브라토 횟수'],c:0},
{q:'&quot;레가토(Legato)&quot; 창법의 특징은?',a:['음과 음을 끊김 없이 연결','짧게 끊어 부르기','강하게 어택','속삭이듯 부르기'],c:0},
{q:'보컬 연습 시 &quot;스케일 연습&quot;의 목적은?',a:['음역대 확장과 음정 정확도','박자감 향상','가사 암기','호흡량 측정'],c:0}
];
(function injectQuiz20(){
 var tries=0;
 function attempt(){
  if(window.quizQuestions&&Array.isArray(window.quizQuestions)){
   v20Quiz.forEach(function(q){if(!window.quizQuestions.find(function(x){return x.q===q.q;}))window.quizQuestions.push(q);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── Achievements v20 (+12, 162->174) ── */
var v20Achievements=[
{id:'tone_matcher',title:'톤 매칭 마스터',desc:'보컬 톤 매칭 S등급 달성',icon:'🎙️'},
{id:'effect_chain_pro',title:'이펙트 프로',desc:'라이브 이펙트 체인 전체 경험',icon:'🔊'},
{id:'technique_analyst',title:'테크닉 분석가',desc:'가수별 테크닉 10인 분석 완료',icon:'📐'},
{id:'weekly_champion',title:'주간 챔피언',desc:'주간 챌린지 7일 연속 완료',icon:'🏅'},
{id:'fatigue_manager',title:'컨디션 매니저',desc:'보컬 피로도 모니터 전체 관리',icon:'💪'},
{id:'range_explorer',title:'음역 탐험가',desc:'음역대 히스토리 30일 기록',icon:'📈'},
{id:'completeness_ace',title:'완벽주의자',desc:'곡 완성도 스코어카드 S등급',icon:'💯'},
{id:'practice_planner',title:'연습 설계자',desc:'보컬 연습 플래너 4주 완성',icon:'📋'},
{id:'quiz_v20_master',title:'퀴즈 v20 마스터',desc:'v20 퀴즈 전문 S등급',icon:'🧠'},
{id:'song_175',title:'175곡 마스터',desc:'175번째 곡 노래하기',icon:'🎵'},
{id:'v20_explorer',title:'v20 탐험가',desc:'v20 기능 모두 체험',icon:'🔭'},
{id:'v20_complete',title:'v20 컴플리트',desc:'v20 모든 업적 달성',icon:'👑'}
];
(function injectAch20(){
 var tries=0;
 function attempt(){
  if(window.achievements&&Array.isArray(window.achievements)){
   v20Achievements.forEach(function(a){if(!window.achievements.find(function(x){return x.id===a.id;}))window.achievements.push(a);});
  }else if(tries++<50)setTimeout(attempt,250);
 }
 attempt();
})();

/* ── 1. Vocal Tone Matcher Canvas 580x360 ── */
function createToneMatcher(){
 var artists=['아이유','태양','백예린','박효신','볼빨간사춘기','성시경','헤이즈','김범수'];
 var axes=['음색','음역','호흡','비브라토','감정','안정성'];
 var presets=[
  [90,85,88,80,95,92],[95,92,78,90,85,88],[82,75,90,70,92,85],
  [88,95,92,95,90,93],[78,72,85,65,88,80],[85,80,95,88,93,90],
  [80,78,82,75,90,85],[92,98,85,92,88,95]
 ];
 var saved=ls20('toneData',{myScores:[50,50,50,50,50,50],selectedArtist:0,matchHistory:[]});
 var sec=document.createElement('div');
 sec.id='sv20-tone-matcher';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(80,20,60,.85),rgba(100,30,80,.7));border-radius:16px;border:1.5px solid rgba(255,100,180,.2)';
 sec.innerHTML='<h3 style="color:#ff64b4;margin-bottom:12px;font-size:15px">🎙️ 보컬 톤 매칭 시스템</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv20-tone-artists"></div>'+
  '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap" id="sv20-tone-sliders"></div>'+
  '<canvas id="sv20-tone-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0a0818"></canvas>'+
  '<div id="sv20-tone-result" style="margin-top:8px;font-size:12px;color:#aaa"></div>';

 function drawTone(){
  var cv=document.getElementById('sv20-tone-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,580,360);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,580,360);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#ff64b4';
  ctx.fillText('보컬 톤 비교: 나 vs '+artists[saved.selectedArtist],20,25);
  var cx=220,cy=200,r=120,n=6;
  for(var ring=1;ring<=5;ring++){
   ctx.strokeStyle='rgba(255,100,180,'+(0.05+ring*0.03)+')';ctx.lineWidth=0.5;
   ctx.beginPath();
   for(var i=0;i<=n;i++){
    var angle=(i%n)/n*Math.PI*2-Math.PI/2;
    var px=cx+Math.cos(angle)*(r*ring/5);
    var py=cy+Math.sin(angle)*(r*ring/5);
    if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.stroke();
  }
  for(var i=0;i<n;i++){
   var angle=i/n*Math.PI*2-Math.PI/2;
   ctx.strokeStyle='rgba(255,100,180,.15)';ctx.beginPath();ctx.moveTo(cx,cy);
   ctx.lineTo(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);ctx.stroke();
   ctx.fillStyle='#ccc';ctx.font='10px sans-serif';
   var lx=cx+Math.cos(angle)*(r+18)-15;
   var ly=cy+Math.sin(angle)*(r+18)+4;
   ctx.fillText(axes[i],lx,ly);
  }
  var artistData=presets[saved.selectedArtist];
  ctx.strokeStyle='#ff64b4';ctx.lineWidth=2;ctx.fillStyle='rgba(255,100,180,.15)';
  ctx.beginPath();
  for(var i=0;i<n;i++){
   var angle=i/n*Math.PI*2-Math.PI/2;
   var val=artistData[i]/100;
   var px=cx+Math.cos(angle)*r*val;
   var py=cy+Math.sin(angle)*r*val;
   if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
  }
  ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='#4ade80';ctx.lineWidth=2;ctx.fillStyle='rgba(74,222,128,.12)';
  ctx.beginPath();
  for(var i=0;i<n;i++){
   var angle=i/n*Math.PI*2-Math.PI/2;
   var val=saved.myScores[i]/100;
   var px=cx+Math.cos(angle)*r*val;
   var py=cy+Math.sin(angle)*r*val;
   if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
  }
  ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='#ff64b4';ctx.font='11px sans-serif';ctx.fillText('● '+artists[saved.selectedArtist],420,60);
  ctx.fillStyle='#4ade80';ctx.fillText('● 나의 톤',420,80);
  var similarity=0;
  for(var i=0;i<n;i++){similarity+=100-Math.abs(artistData[i]-saved.myScores[i]);}
  similarity=Math.round(similarity/n);
  var grade=similarity>=90?'S':similarity>=75?'A':similarity>=60?'B':similarity>=40?'C':'D';
  ctx.font='bold 18px sans-serif';ctx.fillStyle=grade==='S'?'#ffd700':'#ff64b4';
  ctx.fillText('유사도: '+similarity+'% ('+grade+')',400,120);
  ctx.font='12px sans-serif';ctx.fillStyle='#888';
  var bestMatch=0,bestIdx=0;
  for(var a=0;a<presets.length;a++){
   var sim=0;
   for(var i=0;i<n;i++){sim+=100-Math.abs(presets[a][i]-saved.myScores[i]);}
   sim=Math.round(sim/n);
   if(sim>bestMatch){bestMatch=sim;bestIdx=a;}
  }
  ctx.fillText('최적 매칭: '+artists[bestIdx]+' ('+bestMatch+'%)',400,150);
  document.getElementById('sv20-tone-result').textContent='내 톤과 '+artists[saved.selectedArtist]+' 유사도: '+similarity+'% | 최적 매칭: '+artists[bestIdx]+' ('+bestMatch+'%)';
 }
 setTimeout(function(){
  var ab=document.getElementById('sv20-tone-artists');if(!ab)return;
  artists.forEach(function(a,i){
   var b=document.createElement('button');b.textContent=a;
   b.style.cssText='padding:4px 10px;border-radius:10px;border:1px solid rgba(255,100,180,.3);background:'+(saved.selectedArtist===i?'rgba(255,100,180,.3)':'rgba(255,100,180,.08)')+';color:#ff64b4;font-size:10px;cursor:pointer';
   b.onclick=function(){saved.selectedArtist=i;ls20s('toneData',saved);sfx20('toneScan');
    var btns=ab.querySelectorAll('button');btns.forEach(function(btn,j){btn.style.background=j===i?'rgba(255,100,180,.3)':'rgba(255,100,180,.08)';});
    drawTone();};
   ab.appendChild(b);
  });
  var sl=document.getElementById('sv20-tone-sliders');if(!sl)return;
  axes.forEach(function(ax,i){
   var w=document.createElement('div');w.style.cssText='display:flex;flex-direction:column;gap:2px';
   w.innerHTML='<label style="font-size:10px;color:#4ade80">'+ax+': <span id="sv20-tone-v'+i+'">'+saved.myScores[i]+'</span></label>';
   var s=document.createElement('input');s.type='range';s.min=10;s.max=100;s.value=saved.myScores[i];
   s.style.cssText='width:80px;accent-color:#4ade80';
   s.oninput=function(){saved.myScores[i]=parseInt(this.value);document.getElementById('sv20-tone-v'+i).textContent=this.value;ls20s('toneData',saved);drawTone();};
   w.appendChild(s);sl.appendChild(w);
  });
  drawTone();
 },100);
 return sec;
}

/* ── 2. Live Effect Chain Canvas 600x380 ── */
function createEffectChain(){
 var effects=['Reverb','Delay','Chorus','Compressor','EQ','De-esser','Exciter','Harmonizer'];
 var effColors=['#60a5fa','#a855f7','#4ade80','#f59e0b','#ef4444','#ec4899','#06b6d4','#f97316'];
 var saved=ls20('effectData',{chain:[1,0,1,1,0,0,0,0],levels:[70,50,60,80,50,40,30,55],presets:[]});
 var sec=document.createElement('div');
 sec.id='sv20-effect-chain';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(20,40,80,.85),rgba(30,50,100,.7));border-radius:16px;border:1.5px solid rgba(96,165,250,.2)';
 sec.innerHTML='<h3 style="color:#60a5fa;margin-bottom:12px;font-size:15px">🔊 라이브 이펙트 체인</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv20-eff-toggles"></div>'+
  '<canvas id="sv20-eff-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0a0818"></canvas>'+
  '<div style="margin-top:8px;display:flex;gap:8px"><button id="sv20-eff-random" style="padding:5px 12px;border-radius:10px;border:1px solid rgba(96,165,250,.3);background:rgba(96,165,250,.15);color:#60a5fa;font-size:11px;cursor:pointer">🎲 랜덤 프리셋</button><button id="sv20-eff-reset" style="padding:5px 12px;border-radius:10px;border:1px solid rgba(239,68,68,.3);background:rgba(239,68,68,.1);color:#ef4444;font-size:11px;cursor:pointer">↺ 리셋</button></div>';

 function drawEffects(){
  var cv=document.getElementById('sv20-eff-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,600,380);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#60a5fa';ctx.fillText('이펙트 시그널 체인',20,25);
  var activeCount=saved.chain.filter(function(c){return c;}).length;
  ctx.fillStyle='#888';ctx.font='11px sans-serif';ctx.fillText('활성: '+activeCount+'/8',500,25);
  var nodeW=55,nodeH=65,startX=30,startY=70,gapX=68;
  for(var i=0;i<8;i++){
   var x=startX+i*gapX;var y=startY;
   var active=saved.chain[i];
   ctx.fillStyle=active?effColors[i]+'30':'rgba(255,255,255,.03)';
   ctx.strokeStyle=active?effColors[i]:'rgba(255,255,255,.1)';ctx.lineWidth=active?2:1;
   ctx.beginPath();ctx.roundRect(x,y,nodeW,nodeH,8);ctx.fill();ctx.stroke();
   ctx.fillStyle=active?effColors[i]:'#555';ctx.font='bold 9px sans-serif';
   ctx.fillText(effects[i],x+5,y+15);
   if(active){
    var barH=(saved.levels[i]/100)*40;
    ctx.fillStyle=effColors[i]+'60';ctx.fillRect(x+10,y+nodeH-5-barH,nodeW-20,barH);
    ctx.fillStyle='#fff';ctx.font='bold 10px sans-serif';
    ctx.fillText(saved.levels[i]+'%',x+15,y+nodeH-10);
   }else{
    ctx.fillStyle='#444';ctx.font='10px sans-serif';ctx.fillText('OFF',x+18,y+45);
   }
   if(i<7){
    ctx.strokeStyle=saved.chain[i]&&saved.chain[i+1]?'#60a5fa':'rgba(255,255,255,.1)';
    ctx.lineWidth=saved.chain[i]&&saved.chain[i+1]?2:1;
    ctx.beginPath();ctx.moveTo(x+nodeW,y+nodeH/2);ctx.lineTo(x+nodeW+13,y+nodeH/2);ctx.stroke();
    ctx.beginPath();ctx.moveTo(x+nodeW+8,y+nodeH/2-4);ctx.lineTo(x+nodeW+13,y+nodeH/2);ctx.lineTo(x+nodeW+8,y+nodeH/2+4);ctx.fill();
   }
  }
  ctx.strokeStyle='rgba(96,165,250,.15)';ctx.lineWidth=0.5;
  var waveY=220,waveH=120;
  for(var gy=0;gy<=4;gy++){ctx.beginPath();ctx.moveTo(30,waveY+gy*(waveH/4));ctx.lineTo(570,waveY+gy*(waveH/4));ctx.stroke();}
  ctx.strokeStyle='#60a5fa';ctx.lineWidth=2;ctx.beginPath();
  for(var x=30;x<=570;x++){
   var t=(x-30)/540*Math.PI*8;var y=waveY+waveH/2;
   var val=Math.sin(t)*30;
   if(saved.chain[0])val*=(1+saved.levels[0]/200);
   if(saved.chain[1])val+=Math.sin(t*0.5)*10*(saved.levels[1]/100);
   if(saved.chain[2])val+=Math.sin(t*1.01)*5*(saved.levels[2]/100);
   if(saved.chain[3]){var comp=saved.levels[3]/100;val=val>0?Math.min(val,30*comp):Math.max(val,-30*comp);}
   if(saved.chain[7])val+=Math.sin(t*1.5)*8*(saved.levels[7]/100);
   y+=val;
   if(x===30)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.fillStyle='#60a5fa';ctx.font='11px sans-serif';ctx.fillText('🎵 Input',30,waveY-10);ctx.fillText('Output 🔈',520,waveY-10);
  ctx.fillStyle='#888';ctx.font='10px sans-serif';ctx.fillText('시그널 파형 프리뷰',250,370);
 }
 setTimeout(function(){
  var tg=document.getElementById('sv20-eff-toggles');if(!tg)return;
  effects.forEach(function(eff,i){
   var b=document.createElement('button');b.textContent=(saved.chain[i]?'●':'○')+' '+eff;b.id='sv20-eff-btn-'+i;
   b.style.cssText='padding:4px 10px;border-radius:10px;border:1px solid '+effColors[i]+'40;background:'+(saved.chain[i]?effColors[i]+'25':'rgba(255,255,255,.03)')+';color:'+(saved.chain[i]?effColors[i]:'#555')+';font-size:10px;cursor:pointer';
   b.onclick=function(){
    saved.chain[i]=saved.chain[i]?0:1;
    b.textContent=(saved.chain[i]?'●':'○')+' '+eff;
    b.style.background=saved.chain[i]?effColors[i]+'25':'rgba(255,255,255,.03)';
    b.style.color=saved.chain[i]?effColors[i]:'#555';
    ls20s('effectData',saved);sfx20('effectChain');drawEffects();
   };
   tg.appendChild(b);
  });
  var rndBtn=document.getElementById('sv20-eff-random');
  if(rndBtn)rndBtn.onclick=function(){
   for(var i=0;i<8;i++){saved.chain[i]=Math.random()>0.4?1:0;saved.levels[i]=Math.floor(Math.random()*60)+30;}
   ls20s('effectData',saved);sfx20('effectChain');
   var btns=tg.querySelectorAll('button');
   btns.forEach(function(btn,i){
    btn.textContent=(saved.chain[i]?'●':'○')+' '+effects[i];
    btn.style.background=saved.chain[i]?effColors[i]+'25':'rgba(255,255,255,.03)';
    btn.style.color=saved.chain[i]?effColors[i]:'#555';
   });
   drawEffects();
  };
  var rstBtn=document.getElementById('sv20-eff-reset');
  if(rstBtn)rstBtn.onclick=function(){
   saved.chain=[1,0,1,1,0,0,0,0];saved.levels=[70,50,60,80,50,40,30,55];
   ls20s('effectData',saved);
   var btns=tg.querySelectorAll('button');
   btns.forEach(function(btn,i){
    btn.textContent=(saved.chain[i]?'●':'○')+' '+effects[i];
    btn.style.background=saved.chain[i]?effColors[i]+'25':'rgba(255,255,255,.03)';
    btn.style.color=saved.chain[i]?effColors[i]:'#555';
   });
   drawEffects();
  };
  drawEffects();
 },100);
 return sec;
}

/* ── 3. Artist Technique Analyzer Canvas 580x360 ── */
function createTechAnalyzer(){
 var singers=['아이유','BTS정국','태양','백예린','박효신','이하이','김범수','나얼','소향','임재범'];
 var techAxes=['음정정확','성량','비브라토','표현력','음역대','테크닉'];
 var singerData=[
  [95,82,85,97,88,90],[92,88,80,85,90,87],[90,95,92,88,93,95],
  [88,75,70,93,82,80],[93,90,95,96,95,93],[90,85,82,90,88,86],
  [88,98,90,85,96,92],[92,88,95,93,92,90],[95,96,88,90,98,93],
  [85,97,88,92,90,94]
 ];
 var saved=ls20('techData',{selected:[0,1],analyzed:[]});
 var sec=document.createElement('div');
 sec.id='sv20-tech-analyzer';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(30,60,40,.85),rgba(40,80,60,.7));border-radius:16px;border:1.5px solid rgba(74,222,128,.2)';
 sec.innerHTML='<h3 style="color:#4ade80;margin-bottom:12px;font-size:15px">📐 가수별 테크닉 분석기</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv20-tech-btns"></div>'+
  '<canvas id="sv20-tech-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0a0818"></canvas>';

 function drawTech(){
  var cv=document.getElementById('sv20-tech-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,580,360);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,580,360);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#4ade80';
  ctx.fillText('테크닉 비교: '+singers[saved.selected[0]]+' vs '+singers[saved.selected[1]],20,25);
  var cx=220,cy=200,r=120,n=6;
  for(var ring=1;ring<=5;ring++){
   ctx.strokeStyle='rgba(74,222,128,'+(0.05+ring*0.02)+')';ctx.lineWidth=0.5;
   ctx.beginPath();
   for(var i=0;i<=n;i++){
    var angle=(i%n)/n*Math.PI*2-Math.PI/2;
    var px=cx+Math.cos(angle)*(r*ring/5);var py=cy+Math.sin(angle)*(r*ring/5);
    if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.stroke();
  }
  for(var i=0;i<n;i++){
   var angle=i/n*Math.PI*2-Math.PI/2;
   ctx.strokeStyle='rgba(74,222,128,.15)';ctx.beginPath();ctx.moveTo(cx,cy);
   ctx.lineTo(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);ctx.stroke();
   ctx.fillStyle='#ccc';ctx.font='10px sans-serif';
   ctx.fillText(techAxes[i],cx+Math.cos(angle)*(r+18)-15,cy+Math.sin(angle)*(r+18)+4);
  }
  var colors=['#4ade80','#f59e0b'];
  saved.selected.forEach(function(si,idx){
   var data=singerData[si];
   ctx.strokeStyle=colors[idx];ctx.lineWidth=2;ctx.fillStyle=colors[idx]+'18';
   ctx.beginPath();
   for(var i=0;i<n;i++){
    var angle=i/n*Math.PI*2-Math.PI/2;var val=data[i]/100;
    var px=cx+Math.cos(angle)*r*val;var py=cy+Math.sin(angle)*r*val;
    if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.closePath();ctx.fill();ctx.stroke();
   ctx.fillStyle=colors[idx];ctx.font='11px sans-serif';
   ctx.fillText('● '+singers[si],420,60+idx*20);
   var avg=Math.round(data.reduce(function(a,b){return a+b;},0)/n);
   ctx.fillText('평균: '+avg,490,60+idx*20);
  });
  var d0=singerData[saved.selected[0]],d1=singerData[saved.selected[1]];
  ctx.fillStyle='#888';ctx.font='11px sans-serif';
  for(var i=0;i<n;i++){
   var diff=d0[i]-d1[i];
   var winner=diff>0?singers[saved.selected[0]]:diff<0?singers[saved.selected[1]]:'동점';
   ctx.fillText(techAxes[i]+': '+winner+(diff!==0?' (+'+Math.abs(diff)+')':''),400,120+i*18);
  }
 }
 setTimeout(function(){
  var bc=document.getElementById('sv20-tech-btns');if(!bc)return;
  singers.forEach(function(s,i){
   var b=document.createElement('button');b.textContent=s;
   var isSelected=saved.selected.indexOf(i)>=0;
   b.style.cssText='padding:4px 9px;border-radius:10px;border:1px solid rgba(74,222,128,.3);background:'+(isSelected?'rgba(74,222,128,.25)':'rgba(74,222,128,.06)')+';color:#4ade80;font-size:10px;cursor:pointer';
   b.onclick=function(){
    var idx=saved.selected.indexOf(i);
    if(idx>=0){if(saved.selected.length>1)saved.selected.splice(idx,1);}
    else{if(saved.selected.length>=2)saved.selected.shift();saved.selected.push(i);}
    ls20s('techData',saved);sfx20('techCompare');
    var allBtns=bc.querySelectorAll('button');
    allBtns.forEach(function(btn,j){btn.style.background=saved.selected.indexOf(j)>=0?'rgba(74,222,128,.25)':'rgba(74,222,128,.06)';});
    drawTech();
   };
   bc.appendChild(b);
  });
  drawTech();
 },100);
 return sec;
}

/* ── 4. Weekly Vocal Challenge Canvas 560x340 ── */
function createWeeklyChallenge(){
 var days=['월','화','수','목','금','토','일'];
 var missions=['3곡 노래하기','고음 곡 도전','발라드 감정 연습','빠른 곡 리듬','듀엣 곡 시도','자유 선곡 3곡','주간 정리 녹음'];
 var saved=ls20('weeklyData',{completed:[0,0,0,0,0,0,0],streaks:0,totalWeeks:0});
 var sec=document.createElement('div');
 sec.id='sv20-weekly-challenge';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(60,40,10,.85),rgba(80,50,20,.7));border-radius:16px;border:1.5px solid rgba(245,158,11,.2)';
 sec.innerHTML='<h3 style="color:#f59e0b;margin-bottom:12px;font-size:15px">🏅 주간 보컬 챌린지</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv20-weekly-btns"></div>'+
  '<canvas id="sv20-weekly-cv" width="560" height="340" style="width:100%;max-width:560px;border-radius:10px;background:#0a0818"></canvas>';

 function drawWeekly(){
  var cv=document.getElementById('sv20-weekly-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,560,340);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,340);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#f59e0b';ctx.fillText('주간 보컬 챌린지 미션',20,25);
  var done=saved.completed.filter(function(c){return c;}).length;
  ctx.fillText(done+'/7 완료',460,25);
  for(var i=0;i<7;i++){
   var x=30+i*74;var y=55;
   var complete=saved.completed[i];
   ctx.fillStyle=complete?'rgba(245,158,11,.15)':'rgba(255,255,255,.03)';
   ctx.strokeStyle=complete?'#f59e0b':'rgba(255,255,255,.1)';ctx.lineWidth=complete?2:1;
   ctx.beginPath();ctx.roundRect(x,y,66,110,10);ctx.fill();ctx.stroke();
   ctx.fillStyle=complete?'#ffd700':'#888';ctx.font='bold 16px sans-serif';
   ctx.fillText(days[i],x+24,y+28);
   ctx.fillStyle=complete?'#4ade80':'#666';ctx.font='bold 20px sans-serif';
   ctx.fillText(complete?'✓':'○',x+22,y+58);
   ctx.fillStyle=complete?'#f59e0b':'#555';ctx.font='9px sans-serif';
   var words=missions[i].split(' ');
   words.forEach(function(w,wi){ctx.fillText(w,x+5,y+78+wi*12);});
  }
  var pct=Math.round(done/7*100);
  ctx.fillStyle='rgba(255,255,255,.05)';ctx.beginPath();ctx.roundRect(30,185,500,30,6);ctx.fill();
  var grad=ctx.createLinearGradient(30,185,30+500*(pct/100),185);
  grad.addColorStop(0,'#f59e0b');grad.addColorStop(1,'#fbbf24');
  ctx.fillStyle=grad;ctx.beginPath();ctx.roundRect(30,185,500*(pct/100),30,6);ctx.fill();
  ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.fillText(pct+'% 달성',250,205);
  ctx.fillStyle='#f59e0b';ctx.font='bold 14px sans-serif';
  ctx.fillText('🔥 연속 달성: '+saved.streaks+'주',30,250);
  ctx.fillText('📅 총 완료: '+saved.totalWeeks+'주',30,275);
  var grade=done>=7?'S':done>=5?'A':done>=3?'B':done>=1?'C':'D';
  ctx.font='bold 20px sans-serif';ctx.fillStyle=grade==='S'?'#ffd700':'#f59e0b';
  ctx.fillText(grade+' 등급',480,260);
  if(done===7){
   ctx.fillStyle='rgba(255,215,0,.1)';ctx.beginPath();ctx.roundRect(30,290,500,35,8);ctx.fill();
   ctx.fillStyle='#ffd700';ctx.font='bold 14px sans-serif';ctx.fillText('🎉 이번 주 챌린지 완료! 축하합니다!',140,313);
  }
 }
 setTimeout(function(){
  var bc=document.getElementById('sv20-weekly-btns');if(!bc)return;
  days.forEach(function(d,i){
   var b=document.createElement('button');b.textContent=d+'요일 '+(saved.completed[i]?'✓':'미션');
   b.style.cssText='padding:5px 10px;border-radius:10px;border:1px solid '+(saved.completed[i]?'rgba(74,222,128,.3)':'rgba(245,158,11,.3)')+';background:'+(saved.completed[i]?'rgba(74,222,128,.15)':'rgba(245,158,11,.1)')+';color:'+(saved.completed[i]?'#4ade80':'#f59e0b')+';font-size:11px;cursor:pointer';
   b.onclick=function(){
    saved.completed[i]=saved.completed[i]?0:1;
    var allDone=saved.completed.every(function(c){return c;});
    if(allDone){saved.streaks++;saved.totalWeeks++;}
    ls20s('weeklyData',saved);sfx20('challengeStart');
    b.textContent=d+'요일 '+(saved.completed[i]?'✓':'미션');
    b.style.borderColor=saved.completed[i]?'rgba(74,222,128,.3)':'rgba(245,158,11,.3)';
    b.style.background=saved.completed[i]?'rgba(74,222,128,.15)':'rgba(245,158,11,.1)';
    b.style.color=saved.completed[i]?'#4ade80':'#f59e0b';
    drawWeekly();
   };
   bc.appendChild(b);
  });
  var resetBtn=document.createElement('button');resetBtn.textContent='↺ 새 주 시작';
  resetBtn.style.cssText='padding:5px 10px;border-radius:10px;border:1px solid rgba(239,68,68,.3);background:rgba(239,68,68,.1);color:#ef4444;font-size:11px;cursor:pointer';
  resetBtn.onclick=function(){
   saved.completed=[0,0,0,0,0,0,0];ls20s('weeklyData',saved);
   var btns=bc.querySelectorAll('button');
   btns.forEach(function(btn,j){if(j<7){btn.textContent=days[j]+'요일 미션';btn.style.borderColor='rgba(245,158,11,.3)';btn.style.background='rgba(245,158,11,.1)';btn.style.color='#f59e0b';}});
   drawWeekly();
  };
  bc.appendChild(resetBtn);
  drawWeekly();
 },100);
 return sec;
}

/* ── 5. Vocal Fatigue Monitor Canvas 560x320 ── */
function createFatigueMonitor(){
 var metrics=['성대 피로','목 건조','호흡 부족','음정 불안','성량 저하'];
 var metColors=['#ef4444','#f97316','#f59e0b','#a855f7','#60a5fa'];
 var saved=ls20('fatigueData',{levels:[20,15,10,25,18],sessions:0,warnings:0});
 var sec=document.createElement('div');
 sec.id='sv20-fatigue-monitor';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(60,20,20,.85),rgba(80,30,30,.7));border-radius:16px;border:1.5px solid rgba(239,68,68,.2)';
 sec.innerHTML='<h3 style="color:#ef4444;margin-bottom:12px;font-size:15px">💪 보컬 피로도 모니터</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv20-fatigue-btns"></div>'+
  '<canvas id="sv20-fatigue-cv" width="560" height="320" style="width:100%;max-width:560px;border-radius:10px;background:#0a0818"></canvas>'+
  '<div id="sv20-fatigue-warn" style="margin-top:8px;font-size:12px;color:#aaa"></div>';

 function drawFatigue(){
  var cv=document.getElementById('sv20-fatigue-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,560,320);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,560,320);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#ef4444';ctx.fillText('보컬 피로도 현황',20,25);
  var totalFatigue=Math.round(saved.levels.reduce(function(a,b){return a+b;},0)/5);
  var status=totalFatigue>=70?'위험':totalFatigue>=50?'주의':totalFatigue>=30?'보통':'양호';
  var statusColor=totalFatigue>=70?'#ef4444':totalFatigue>=50?'#f59e0b':totalFatigue>=30?'#60a5fa':'#4ade80';
  for(var i=0;i<5;i++){
   var y=50+i*48;var w=(saved.levels[i]/100)*380;
   ctx.fillStyle='rgba(255,255,255,.04)';ctx.beginPath();ctx.roundRect(140,y,380,35,6);ctx.fill();
   var dangerZone=saved.levels[i]>=70;
   var grad=ctx.createLinearGradient(140,y,140+w,y);
   grad.addColorStop(0,metColors[i]);grad.addColorStop(1,dangerZone?'#ef4444':metColors[i]+'60');
   ctx.fillStyle=grad;ctx.beginPath();ctx.roundRect(140,y,w,35,6);ctx.fill();
   if(dangerZone){
    ctx.strokeStyle='#ef4444';ctx.lineWidth=2;ctx.setLineDash([4,4]);
    ctx.beginPath();ctx.roundRect(140,y,w,35,6);ctx.stroke();ctx.setLineDash([]);
   }
   ctx.fillStyle=metColors[i];ctx.font='bold 11px sans-serif';ctx.fillText(metrics[i],15,y+22);
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.fillText(saved.levels[i]+'%',140+w+8,y+22);
   if(dangerZone){ctx.fillStyle='#ef4444';ctx.fillText('⚠️',530,y+22);}
  }
  ctx.beginPath();ctx.arc(490,280,35,0,Math.PI*2);
  var grd=ctx.createRadialGradient(490,280,5,490,280,35);
  grd.addColorStop(0,statusColor);grd.addColorStop(1,statusColor+'30');
  ctx.fillStyle=grd;ctx.fill();
  ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';ctx.fillText(status,476,275);
  ctx.font='bold 16px sans-serif';ctx.fillText(totalFatigue+'%',476,298);
  ctx.fillStyle='#888';ctx.font='11px sans-serif';
  ctx.fillText('세션: '+saved.sessions+' | 경고: '+saved.warnings+'회',20,300);
  var warn=totalFatigue>=70?'⚠️ 즉시 휴식이 필요합니다! 성대 손상 위험':totalFatigue>=50?'⚠ 피로 누적 중. 충분한 수분 섭취와 휴식 권장':'✅ 양호한 상태입니다';
  document.getElementById('sv20-fatigue-warn').innerHTML='<span style="color:'+statusColor+'">'+warn+'</span>';
 }
 setTimeout(function(){
  var bc=document.getElementById('sv20-fatigue-btns');if(!bc)return;
  metrics.forEach(function(m,i){
   var bUp=document.createElement('button');bUp.textContent=m+' ▲';
   bUp.style.cssText='padding:4px 8px;border-radius:10px;border:1px solid '+metColors[i]+'40;background:'+metColors[i]+'15;color:'+metColors[i]+';font-size:10px;cursor:pointer';
   bUp.onclick=function(){
    saved.levels[i]=Math.min(saved.levels[i]+10,100);saved.sessions++;
    if(saved.levels[i]>=70)saved.warnings++;
    ls20s('fatigueData',saved);sfx20('fatigueWarn');drawFatigue();
   };
   bc.appendChild(bUp);
  });
  var restBtn=document.createElement('button');restBtn.textContent='😴 휴식 (-전체)';
  restBtn.style.cssText='padding:4px 10px;border-radius:10px;border:1px solid rgba(74,222,128,.3);background:rgba(74,222,128,.1);color:#4ade80;font-size:10px;cursor:pointer';
  restBtn.onclick=function(){
   for(var i=0;i<5;i++)saved.levels[i]=Math.max(saved.levels[i]-15,0);
   ls20s('fatigueData',saved);drawFatigue();
  };
  bc.appendChild(restBtn);
  drawFatigue();
 },100);
 return sec;
}

/* ── 6. Range History Map Canvas 600x380 ── */
function createRangeHistory(){
 var saved=ls20('rangeHistory',{entries:[],lowest:'C3',highest:'C5'});
 if(saved.entries.length===0){
  for(var i=0;i<30;i++){
   saved.entries.push({day:i+1,low:36+Math.floor(Math.random()*6),high:60+Math.floor(Math.random()*12)});
  }
  ls20s('rangeHistory',saved);
 }
 var sec=document.createElement('div');
 sec.id='sv20-range-history';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(20,40,60,.85),rgba(30,60,80,.7));border-radius:16px;border:1.5px solid rgba(6,182,212,.2)';
 sec.innerHTML='<h3 style="color:#06b6d4;margin-bottom:12px;font-size:15px">📈 음역대 히스토리 맵</h3>'+
  '<canvas id="sv20-range-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0a0818"></canvas>'+
  '<div style="margin-top:8px;display:flex;gap:8px"><button id="sv20-range-add" style="padding:5px 12px;border-radius:10px;border:1px solid rgba(6,182,212,.3);background:rgba(6,182,212,.15);color:#06b6d4;font-size:11px;cursor:pointer">+ 오늘 기록 추가</button><button id="sv20-range-reset" style="padding:5px 12px;border-radius:10px;border:1px solid rgba(239,68,68,.3);background:rgba(239,68,68,.1);color:#ef4444;font-size:11px;cursor:pointer">↺ 리셋</button></div>';

 function drawRange(){
  var cv=document.getElementById('sv20-range-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,600,380);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#06b6d4';ctx.fillText('30일 음역대 변화 추이',20,25);
  var noteNames=['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5','C6'];
  var chartX=60,chartY=45,chartW=510,chartH=280;
  ctx.strokeStyle='rgba(6,182,212,.1)';ctx.lineWidth=0.5;
  for(var gy=0;gy<=6;gy++){
   var y=chartY+gy*(chartH/6);
   ctx.beginPath();ctx.moveTo(chartX,y);ctx.lineTo(chartX+chartW,y);ctx.stroke();
   var noteIdx=Math.round(28-gy*4.6);if(noteIdx>=0&&noteIdx<noteNames.length){
    ctx.fillStyle='#555';ctx.font='9px sans-serif';ctx.fillText(noteNames[noteIdx],10,y+4);
   }
  }
  var entries=saved.entries.slice(-30);
  if(entries.length<2)return;
  var stepX=chartW/(entries.length-1);
  ctx.fillStyle='rgba(6,182,212,.08)';ctx.beginPath();
  ctx.moveTo(chartX,chartY+chartH-(entries[0].high/84)*chartH);
  for(var i=1;i<entries.length;i++){ctx.lineTo(chartX+i*stepX,chartY+chartH-(entries[i].high/84)*chartH);}
  for(var i=entries.length-1;i>=0;i--){ctx.lineTo(chartX+i*stepX,chartY+chartH-(entries[i].low/84)*chartH);}
  ctx.closePath();ctx.fill();
  ctx.strokeStyle='#06b6d4';ctx.lineWidth=2;ctx.beginPath();
  for(var i=0;i<entries.length;i++){
   var x=chartX+i*stepX;var y=chartY+chartH-(entries[i].high/84)*chartH;
   if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.strokeStyle='#f59e0b';ctx.lineWidth=2;ctx.beginPath();
  for(var i=0;i<entries.length;i++){
   var x=chartX+i*stepX;var y=chartY+chartH-(entries[i].low/84)*chartH;
   if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.fillStyle='#06b6d4';ctx.font='11px sans-serif';ctx.fillText('● 최고음',420,350);
  ctx.fillStyle='#f59e0b';ctx.fillText('● 최저음',500,350);
  var lastEntry=entries[entries.length-1];
  var rangeSpan=lastEntry.high-lastEntry.low;
  var firstRange=entries[0].high-entries[0].low;
  var growth=rangeSpan-firstRange;
  ctx.fillStyle=growth>0?'#4ade80':'#ef4444';ctx.font='bold 13px sans-serif';
  ctx.fillText('음역 변화: '+(growth>0?'+':'')+growth+'반음',350,25);
  ctx.fillStyle='#888';ctx.font='10px sans-serif';
  ctx.fillText('현재 범위: '+rangeSpan+'반음 ('+Math.round(rangeSpan/12*10)/10+'옥타브)',20,370);
 }
 setTimeout(function(){
  drawRange();
  var addBtn=document.getElementById('sv20-range-add');
  if(addBtn)addBtn.onclick=function(){
   var last=saved.entries[saved.entries.length-1]||{day:0,low:38,high:62};
   saved.entries.push({
    day:last.day+1,
    low:Math.max(24,last.low+Math.floor(Math.random()*3)-1),
    high:Math.min(84,last.high+Math.floor(Math.random()*3)-1)
   });
   if(saved.entries.length>60)saved.entries=saved.entries.slice(-60);
   ls20s('rangeHistory',saved);sfx20('rangeExpand');drawRange();
  };
  var rstBtn=document.getElementById('sv20-range-reset');
  if(rstBtn)rstBtn.onclick=function(){
   saved.entries=[];
   for(var i=0;i<30;i++){saved.entries.push({day:i+1,low:36+Math.floor(Math.random()*6),high:60+Math.floor(Math.random()*12)});}
   ls20s('rangeHistory',saved);drawRange();
  };
 },100);
 return sec;
}

/* ── 7. Song Completeness Scorecard Canvas 580x360 PNG ── */
function createScorecard(){
 var metrics=['음정 정확도','리듬 정확도','표현력','호흡 안정성','비브라토'];
 var saved=ls20('scorecardData',{scores:[75,68,82,70,60],song:'',totalCards:0});
 var sec=document.createElement('div');
 sec.id='sv20-scorecard';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(60,20,80,.85),rgba(80,30,100,.7));border-radius:16px;border:1.5px solid rgba(168,85,247,.2)';
 sec.innerHTML='<h3 style="color:#a855f7;margin-bottom:12px;font-size:15px">💯 곡 완성도 스코어카드</h3>'+
  '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap" id="sv20-sc-inputs"></div>'+
  '<canvas id="sv20-sc-cv" width="580" height="360" style="width:100%;max-width:580px;border-radius:10px;background:#0a0818"></canvas>'+
  '<button id="sv20-sc-dl" style="margin-top:8px;padding:8px 16px;border-radius:12px;border:1px solid rgba(168,85,247,.3);background:rgba(168,85,247,.15);color:#a855f7;font-size:12px;cursor:pointer">📥 PNG 다운로드</button>';

 function drawScorecard(){
  var cv=document.getElementById('sv20-sc-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  var grd=ctx.createLinearGradient(0,0,580,360);
  grd.addColorStop(0,'#1a0a2e');grd.addColorStop(1,'#0f0a1e');
  ctx.fillStyle=grd;ctx.fillRect(0,0,580,360);
  ctx.strokeStyle='rgba(168,85,247,.4)';ctx.lineWidth=3;
  ctx.beginPath();ctx.roundRect(10,10,560,340,14);ctx.stroke();
  ctx.font='bold 18px sans-serif';ctx.fillStyle='#a855f7';
  ctx.fillText('♪ 곡 완성도 스코어카드',150,40);
  if(saved.song){ctx.font='14px sans-serif';ctx.fillStyle='#c084fc';ctx.fillText(saved.song,200,62);}
  var cx=170,cy=200,r=100,n=5;
  for(var ring=1;ring<=5;ring++){
   ctx.strokeStyle='rgba(168,85,247,'+(0.05+ring*0.03)+')';ctx.lineWidth=0.5;
   ctx.beginPath();
   for(var i=0;i<=n;i++){
    var angle=(i%n)/n*Math.PI*2-Math.PI/2;
    var px=cx+Math.cos(angle)*(r*ring/5);var py=cy+Math.sin(angle)*(r*ring/5);
    if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
   }
   ctx.stroke();
  }
  for(var i=0;i<n;i++){
   var angle=i/n*Math.PI*2-Math.PI/2;
   ctx.strokeStyle='rgba(168,85,247,.15)';ctx.beginPath();ctx.moveTo(cx,cy);
   ctx.lineTo(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);ctx.stroke();
   ctx.fillStyle='#ccc';ctx.font='10px sans-serif';
   ctx.fillText(metrics[i],cx+Math.cos(angle)*(r+18)-20,cy+Math.sin(angle)*(r+18)+4);
  }
  ctx.strokeStyle='#a855f7';ctx.lineWidth=2.5;ctx.fillStyle='rgba(168,85,247,.15)';
  ctx.beginPath();
  for(var i=0;i<n;i++){
   var angle=i/n*Math.PI*2-Math.PI/2;var val=saved.scores[i]/100;
   var px=cx+Math.cos(angle)*r*val;var py=cy+Math.sin(angle)*r*val;
   if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);
  }
  ctx.closePath();ctx.fill();ctx.stroke();
  var avg=Math.round(saved.scores.reduce(function(a,b){return a+b;},0)/n);
  var grade=avg>=90?'S':avg>=75?'A':avg>=60?'B':avg>=40?'C':'D';
  ctx.font='bold 14px sans-serif';
  var barColors=['#4ade80','#60a5fa','#a855f7','#f59e0b','#ec4899'];
  for(var i=0;i<n;i++){
   var y=85+i*40;
   ctx.fillStyle='rgba(255,255,255,.04)';ctx.beginPath();ctx.roundRect(360,y,180,28,4);ctx.fill();
   var w=(saved.scores[i]/100)*180;
   ctx.fillStyle=barColors[i]+'60';ctx.beginPath();ctx.roundRect(360,y,w,28,4);ctx.fill();
   ctx.fillStyle=barColors[i];ctx.font='10px sans-serif';ctx.fillText(metrics[i],365,y+12);
   ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.fillText(saved.scores[i],365+w-20,y+24);
  }
  ctx.beginPath();ctx.arc(470,310,25,0,Math.PI*2);
  var bgrd=ctx.createRadialGradient(470,310,5,470,310,25);
  bgrd.addColorStop(0,grade==='S'?'#ffd700':'#a855f7');bgrd.addColorStop(1,'rgba(0,0,0,.3)');
  ctx.fillStyle=bgrd;ctx.fill();
  ctx.fillStyle='#fff';ctx.font='bold 18px sans-serif';ctx.fillText(grade,461,318);
  ctx.fillStyle='#888';ctx.font='10px sans-serif';ctx.fillText('평균: '+avg+'/100',410,350);
  ctx.fillText('카드 #'+(saved.totalCards+1),360,350);
 }
 setTimeout(function(){
  var inp=document.getElementById('sv20-sc-inputs');if(!inp)return;
  var songIn=document.createElement('input');songIn.placeholder='곡명 입력';songIn.value=saved.song;
  songIn.style.cssText='padding:5px 8px;border-radius:8px;border:1px solid rgba(168,85,247,.3);background:rgba(0,0,0,.3);color:#fff;font-size:12px;width:120px';
  songIn.oninput=function(){saved.song=this.value;ls20s('scorecardData',saved);drawScorecard();};
  inp.appendChild(songIn);
  metrics.forEach(function(m,i){
   var w=document.createElement('div');w.style.cssText='display:flex;flex-direction:column;gap:2px';
   w.innerHTML='<label style="font-size:9px;color:#a855f7">'+m+': <span id="sv20-sc-v'+i+'">'+saved.scores[i]+'</span></label>';
   var s=document.createElement('input');s.type='range';s.min=10;s.max=100;s.value=saved.scores[i];
   s.style.cssText='width:80px;accent-color:#a855f7';
   s.oninput=function(){saved.scores[i]=parseInt(this.value);document.getElementById('sv20-sc-v'+i).textContent=this.value;ls20s('scorecardData',saved);drawScorecard();};
   w.appendChild(s);inp.appendChild(w);
  });
  drawScorecard();
  var dlBtn=document.getElementById('sv20-sc-dl');
  if(dlBtn)dlBtn.onclick=function(){
   sfx20('scorecardGen');saved.totalCards++;ls20s('scorecardData',saved);
   var cv=document.getElementById('sv20-sc-cv');if(!cv)return;
   var link=document.createElement('a');link.download='starvoice-scorecard.png';link.href=cv.toDataURL('image/png');link.click();
  };
 },100);
 return sec;
}

/* ── 8. Vocal Practice Planner Canvas 600x380 ── */
function createPracticePlanner(){
 var weeks=['1주차','2주차','3주차','4주차'];
 var categories=['워밍업','발성연습','곡연습','녹음복습','음역확장','표현력'];
 var catColors=['#4ade80','#60a5fa','#a855f7','#f59e0b','#ec4899','#06b6d4'];
 var saved=ls20('plannerData',{plan:[[30,20,45,15,10,10],[25,25,50,20,15,15],[20,30,55,25,20,20],[15,25,60,30,25,20]],currentWeek:0});
 var sec=document.createElement('div');
 sec.id='sv20-practice-planner';
 sec.style.cssText='margin:18px 0;padding:20px;background:linear-gradient(135deg,rgba(20,50,60,.85),rgba(30,60,80,.7));border-radius:16px;border:1.5px solid rgba(6,182,212,.2)';
 sec.innerHTML='<h3 style="color:#06b6d4;margin-bottom:12px;font-size:15px">📋 보컬 연습 플래너</h3>'+
  '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap" id="sv20-plan-btns"></div>'+
  '<canvas id="sv20-plan-cv" width="600" height="380" style="width:100%;max-width:600px;border-radius:10px;background:#0a0818"></canvas>';

 function drawPlanner(){
  var cv=document.getElementById('sv20-plan-cv');if(!cv)return;
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,600,380);ctx.fillStyle='#0a0818';ctx.fillRect(0,0,600,380);
  ctx.font='bold 13px sans-serif';ctx.fillStyle='#06b6d4';ctx.fillText('4주 보컬 연습 플랜',20,25);
  var barW=110,barGap=20,startX=55;
  for(var w=0;w<4;w++){
   var x=startX+w*(barW+barGap);var y=320;var weekData=saved.plan[w];
   var total=weekData.reduce(function(a,b){return a+b;},0);
   ctx.fillStyle=w===saved.currentWeek?'rgba(6,182,212,.15)':'rgba(255,255,255,.03)';
   ctx.strokeStyle=w===saved.currentWeek?'#06b6d4':'rgba(255,255,255,.1)';ctx.lineWidth=w===saved.currentWeek?2:1;
   ctx.beginPath();ctx.roundRect(x-5,45,barW+10,290,8);ctx.fill();ctx.stroke();
   ctx.fillStyle=w===saved.currentWeek?'#06b6d4':'#888';ctx.font='bold 12px sans-serif';
   ctx.fillText(weeks[w],x+30,62);
   var cumH=0;
   for(var c=categories.length-1;c>=0;c--){
    var h=(weekData[c]/total)*240;
    ctx.fillStyle=catColors[c]+'90';
    ctx.beginPath();ctx.roundRect(x,y-cumH-h,barW,h,c===categories.length-1?[4,4,0,0]:c===0?[0,0,4,4]:[0,0,0,0]);ctx.fill();
    if(h>14){
     ctx.fillStyle='#fff';ctx.font='9px sans-serif';
     ctx.fillText(categories[c]+' '+weekData[c]+'분',x+5,y-cumH-h/2+3);
    }
    cumH+=h;
   }
   ctx.fillStyle='#ccc';ctx.font='bold 11px sans-serif';ctx.fillText('총 '+total+'분',x+25,340);
  }
  ctx.fillStyle='#06b6d4';ctx.font='11px sans-serif';
  for(var c=0;c<categories.length;c++){
   ctx.fillStyle=catColors[c];ctx.fillRect(420,55+c*18,10,10);
   ctx.fillStyle='#ccc';ctx.font='10px sans-serif';ctx.fillText(categories[c],435,64+c*18);
  }
  var totalAll=0;
  saved.plan.forEach(function(w){totalAll+=w.reduce(function(a,b){return a+b;},0);});
  ctx.fillStyle='#06b6d4';ctx.font='bold 13px sans-serif';
  ctx.fillText('총 연습: '+totalAll+'분 ('+Math.round(totalAll/60*10)/10+'시간)',350,25);
 }
 setTimeout(function(){
  var bc=document.getElementById('sv20-plan-btns');if(!bc)return;
  weeks.forEach(function(w,i){
   var b=document.createElement('button');b.textContent=(saved.currentWeek===i?'▶ ':'')+w;
   b.style.cssText='padding:5px 12px;border-radius:10px;border:1px solid '+(saved.currentWeek===i?'rgba(6,182,212,.5)':'rgba(6,182,212,.2)')+';background:'+(saved.currentWeek===i?'rgba(6,182,212,.2)':'rgba(6,182,212,.05)')+';color:#06b6d4;font-size:11px;cursor:pointer';
   b.onclick=function(){
    saved.currentWeek=i;ls20s('plannerData',saved);sfx20('plannerSave');
    var allBtns=bc.querySelectorAll('button');
    allBtns.forEach(function(btn,j){
     if(j<4){
      btn.textContent=(j===i?'▶ ':'')+weeks[j];
      btn.style.borderColor=j===i?'rgba(6,182,212,.5)':'rgba(6,182,212,.2)';
      btn.style.background=j===i?'rgba(6,182,212,.2)':'rgba(6,182,212,.05)';
     }
    });
    drawPlanner();
   };
   bc.appendChild(b);
  });
  var addBtn=document.createElement('button');addBtn.textContent='📝 +5분 (현재주 곡연습)';
  addBtn.style.cssText='padding:5px 12px;border-radius:10px;border:1px solid rgba(74,222,128,.3);background:rgba(74,222,128,.1);color:#4ade80;font-size:11px;cursor:pointer';
  addBtn.onclick=function(){
   saved.plan[saved.currentWeek][2]+=5;
   ls20s('plannerData',saved);sfx20('plannerSave');drawPlanner();
  };
  bc.appendChild(addBtn);
  drawPlanner();
 },100);
 return sec;
}

/* ── Mount all v20 sections ── */
function mountV20(){
 var target=document.getElementById('songSelect')||document.querySelector('.song-list')||document.querySelector('main')||document.body;
 var container=document.createElement('div');container.id='sv20-container';
 container.style.cssText='grid-column:1/-1;padding:0 4px';
 var header=document.createElement('div');
 header.style.cssText='background:linear-gradient(135deg,rgba(100,50,150,.3),rgba(50,100,150,.2));border-radius:14px;padding:16px;margin:12px 0;border:1px solid rgba(168,85,247,.2)';
 header.innerHTML='<h2 style="color:#a855f7;font-size:16px;margin-bottom:6px">🎤 StarVoice v20 — 8 신규 기능</h2>'+
  '<p style="color:#aaa;font-size:12px">보컬톤매칭시스템 | 라이브이펙트체인 | 가수별테크닉분석기 | 주간보컬챌린지 | 보컬피로도모니터 | 음역대히스토리맵 | 곡완성도스코어카드 | 보컬연습플래너 | +10곡(175) | +15퀴즈(207) | +12업적(174)</p>';
 container.appendChild(header);
 container.appendChild(createToneMatcher());
 container.appendChild(createEffectChain());
 container.appendChild(createTechAnalyzer());
 container.appendChild(createWeeklyChallenge());
 container.appendChild(createFatigueMonitor());
 container.appendChild(createRangeHistory());
 container.appendChild(createScorecard());
 container.appendChild(createPracticePlanner());
 if(target.children.length>2)target.insertBefore(container,target.children[2]);
 else target.appendChild(container);
}

/* ── Keyboard shortcuts (Shift+T/L/A/W/F/G/C/N) ── */
document.addEventListener('keydown',function(e){
 if(!e.shiftKey)return;
 var map={
  'T':function(){var el=document.getElementById('sv20-tone-matcher');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('toneScan');},
  'L':function(){var el=document.getElementById('sv20-effect-chain');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('effectChain');},
  'A':function(){var el=document.getElementById('sv20-tech-analyzer');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('techCompare');},
  'W':function(){var el=document.getElementById('sv20-weekly-challenge');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('challengeStart');},
  'F':function(){var el=document.getElementById('sv20-fatigue-monitor');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('fatigueWarn');},
  'G':function(){var el=document.getElementById('sv20-range-history');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('rangeExpand');},
  'C':function(){var el=document.getElementById('sv20-scorecard');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('scorecardGen');},
  'N':function(){var el=document.getElementById('sv20-practice-planner');if(el)el.scrollIntoView({behavior:'smooth'});sfx20('plannerSave');}
 };
 if(map[e.key])map[e.key]();
});

/* ── Navigation buttons (append to existing nav, no new fixed bar) ── */
function addV20Nav(){
 var existing=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav')||document.querySelector('nav');
 if(!existing){
  var tries=0;
  function waitNav(){
   existing=document.querySelector('[id*="bottom-bar"]')||document.querySelector('[id*="nav-bar"]')||document.querySelector('.bottom-nav');
   if(existing)appendNavBtns20(existing);
   else if(tries++<30)setTimeout(waitNav,500);
  }
  waitNav();return;
 }
 appendNavBtns20(existing);
}
function appendNavBtns20(nav){
 var items=[
  {label:'🎙️톤매칭',target:'sv20-tone-matcher'},
  {label:'🔊이펙트',target:'sv20-effect-chain'},
  {label:'📐테크닉',target:'sv20-tech-analyzer'},
  {label:'🏅챌린지',target:'sv20-weekly-challenge'},
  {label:'💪피로도',target:'sv20-fatigue-monitor'},
  {label:'📈음역사',target:'sv20-range-history'},
  {label:'💯스코어',target:'sv20-scorecard'},
  {label:'📋플래너',target:'sv20-practice-planner'}
 ];
 items.forEach(function(it){
  var b=document.createElement('button');
  b.textContent=it.label;
  b.style.cssText='padding:4px 8px;border-radius:10px;border:1px solid rgba(168,85,247,.3);background:rgba(168,85,247,.1);color:#c084fc;font-size:10px;cursor:pointer;margin:2px';
  b.onclick=function(){var el=document.getElementById(it.target);if(el)el.scrollIntoView({behavior:'smooth'});sfx20('navClick20');};
  nav.appendChild(b);
 });
}

/* ── Init ── */
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(mountV20,900);setTimeout(addV20Nav,1300);});
else{setTimeout(mountV20,900);setTimeout(addV20Nav,1300);}

})();
