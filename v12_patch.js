/* StarVoice v12 Patch — Self-contained IIFE module injected via SW
 * 10 songs(85→95), vocal training academy 12 lessons, duet harmony AI,
 * lyrics memorization game, performance review Canvas, music theory 12 lessons,
 * speed control practice, warmup routine builder 6 routines, challenge rankings,
 * tone color analyzer Canvas, progress tracker dashboard Canvas,
 * quiz +15(72→87), achievements +12(66→78), SFX 12, keyboard +8
 */
(function(){
'use strict';
if(window.__v12KaraokeLoaded) return;
window.__v12KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Ab3=207.65,Bb3=233.08,Eb4=311.13,Bb4=466.16,Db4=277.18,Ab4=415.30;
var Gb4=369.99,Db5=554.37,Eb5=622.25;

function ls12(k,d){try{var v=localStorage.getItem('sv12-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls12s(k,v){try{localStorage.setItem('sv12-'+k,JSON.stringify(v));}catch(e){}}

// ===== 10 NEW SONGS (86~95) =====
var NEW_SONGS_V12=[
{id:86,cat:"동요",title:"꼬마 눈사람",icon:"⛄",diff:"쉬움",dc:"diff-easy",bpm:116,
melody:[
{t:0,d:.4,f:E4,s:"눈"},{t:.4,d:.4,f:E4,s:"이"},{t:.8,d:.4,f:G4,s:"옵"},{t:1.2,d:.8,f:G4,s:"니"},
{t:2,d:.4,f:A4,s:"다"},{t:2.4,d:.4,f:A4,s:"눈"},{t:2.8,d:.4,f:G4,s:"이"},
{t:3.2,d:.8,f:E4,s:"와"},
{t:4,d:.4,f:D4,s:"하"},{t:4.4,d:.4,f:D4,s:"늘"},{t:4.8,d:.4,f:E4,s:"에"},
{t:5.2,d:.4,f:G4,s:"서"},{t:5.6,d:.8,f:E4,s:"눈"},
{t:6.4,d:.4,f:D4,s:"이"},{t:6.8,d:1.2,f:C4,s:"와"}
],lyrics:[{t:0,tx:"눈이 옵니다"},{t:2,tx:"눈이 와"},{t:4,tx:"하늘에서"},{t:5.6,tx:"눈이 와"}],dur:8},

{id:87,cat:"세계명곡",title:"오 솔레 미오",icon:"☀️",diff:"어려움",dc:"diff-hard",bpm:92,
melody:[
{t:0,d:.8,f:G4,s:"O"},{t:.8,d:.8,f:A4,s:"so"},
{t:1.6,d:1.2,f:B4,s:"le"},{t:2.8,d:.8,f:A4,s:"mi"},
{t:3.6,d:1.6,f:G4,s:"o"},
{t:5.2,d:.8,f:E4,s:"ma"},{t:6,d:.8,f:G4,s:"na"},
{t:6.8,d:.8,f:A4,s:"tu"},{t:7.6,d:.8,f:B4,s:"so"},
{t:8.4,d:1.6,f:C5,s:"le"},
{t:10,d:.8,f:B4,s:"chiu"},{t:10.8,d:.8,f:A4,s:"bel"},
{t:11.6,d:2,f:G4,s:"lo"}
],lyrics:[{t:0,tx:"O sole mio"},{t:5.2,tx:"ma na tu sole"},{t:10,tx:"chiu bello"}],dur:14},

{id:88,cat:"가요/민요",title:"밀양 아리랑",icon:"🏔️",diff:"보통",dc:"diff-medium",bpm:108,
melody:[
{t:0,d:.5,f:E4,s:"날"},{t:.5,d:.5,f:G4,s:"좀"},
{t:1,d:1,f:A4,s:"보"},{t:2,d:.5,f:A4,s:"소"},
{t:2.5,d:.5,f:B4,s:"날"},{t:3,d:.5,f:A4,s:"좀"},
{t:3.5,d:1,f:G4,s:"보"},{t:4.5,d:.5,f:E4,s:"소"},
{t:5,d:.5,f:G4,s:"동"},{t:5.5,d:.5,f:A4,s:"지"},
{t:6,d:.5,f:G4,s:"섣"},{t:6.5,d:.5,f:E4,s:"달"},
{t:7,d:.5,f:D4,s:"꽃"},{t:7.5,d:.5,f:E4,s:"본"},
{t:8,d:1.5,f:G4,s:"듯"}
],lyrics:[{t:0,tx:"날 좀 보소"},{t:2.5,tx:"날 좀 보소"},{t:5,tx:"동지섣달 꽃본 듯"}],dur:10},

{id:89,cat:"세계명곡",title:"스카보로 페어",icon:"🌿",diff:"보통",dc:"diff-medium",bpm:80,
melody:[
{t:0,d:1,f:E4,s:"Are"},{t:1,d:.8,f:E4,s:"you"},
{t:1.8,d:.8,f:E4,s:"go"},{t:2.6,d:.8,f:B3,s:"ing"},
{t:3.4,d:1.2,f:D4,s:"to"},{t:4.6,d:1.5,f:E4,s:"Scar"},
{t:6.1,d:1,f:G4,s:"bo"},{t:7.1,d:1,f:A4,s:"rough"},
{t:8.1,d:2,f:A4,s:"Fair"},
{t:10.1,d:.8,f:A4,s:"Pars"},{t:10.9,d:.8,f:B4,s:"ley"},
{t:11.7,d:.8,f:A4,s:"sage"},
{t:12.5,d:.8,f:G4,s:"rose"},{t:13.3,d:.8,f:E4,s:"ma"},
{t:14.1,d:1.5,f:D4,s:"ry"},{t:15.6,d:1.5,f:E4,s:"and"},
{t:17.1,d:2,f:E4,s:"thyme"}
],lyrics:[{t:0,tx:"Are you going to"},{t:4.6,tx:"Scarborough Fair"},{t:10.1,tx:"Parsley sage rosemary"},{t:15.6,tx:"and thyme"}],dur:20},

{id:90,cat:"동요",title:"고향의 봄",icon:"🌸",diff:"쉬움",dc:"diff-easy",bpm:100,
melody:[
{t:0,d:.5,f:G4,s:"나"},{t:.5,d:.5,f:E4,s:"의"},
{t:1,d:1,f:C4,s:"살"},{t:2,d:.5,f:D4,s:"던"},
{t:2.5,d:.5,f:E4,s:"고"},{t:3,d:1,f:G4,s:"향"},
{t:4,d:.5,f:A4,s:"꽃"},{t:4.5,d:.5,f:G4,s:"피"},
{t:5,d:.5,f:E4,s:"는"},{t:5.5,d:1,f:D4,s:"산"},
{t:6.5,d:.5,f:E4,s:"골"},{t:7,d:.5,f:G4,s:"복"},
{t:7.5,d:.5,f:E4,s:"숭"},{t:8,d:.5,f:D4,s:"아"},
{t:8.5,d:.5,f:C4,s:"꽃"},{t:9,d:1.5,f:C4,s:"이"}
],lyrics:[{t:0,tx:"나의 살던 고향"},{t:4,tx:"꽃피는 산골"},{t:6.5,tx:"복숭아꽃이"}],dur:11},

{id:91,cat:"세계명곡",title:"대니 보이",icon:"🍀",diff:"어려움",dc:"diff-hard",bpm:72,
melody:[
{t:0,d:1,f:C4,s:"Oh"},{t:1,d:1,f:E4,s:"Dan"},
{t:2,d:1,f:F4,s:"ny"},{t:3,d:1.5,f:G4,s:"Boy"},
{t:4.5,d:.5,f:G4,s:"the"},{t:5,d:1,f:A4,s:"pipes"},
{t:6,d:.5,f:G4,s:"the"},{t:6.5,d:1,f:F4,s:"pipes"},
{t:7.5,d:.5,f:E4,s:"are"},{t:8,d:2,f:F4,s:"call"},
{t:10,d:2,f:E4,s:"ing"},
{t:12,d:.5,f:C4,s:"from"},{t:12.5,d:.5,f:E4,s:"glen"},
{t:13,d:.5,f:F4,s:"to"},{t:13.5,d:1.5,f:G4,s:"glen"},
{t:15,d:.5,f:A4,s:"and"},{t:15.5,d:.5,f:G4,s:"down"},
{t:16,d:.5,f:F4,s:"the"},{t:16.5,d:.5,f:E4,s:"moun"},
{t:17,d:.5,f:D4,s:"tain"},{t:17.5,d:2,f:C4,s:"side"}
],lyrics:[{t:0,tx:"Oh Danny Boy"},{t:4.5,tx:"the pipes are calling"},{t:12,tx:"from glen to glen"},{t:15,tx:"and down the mountain side"}],dur:20},

{id:92,cat:"가요/민요",title:"새야 새야",icon:"🐦",diff:"쉬움",dc:"diff-easy",bpm:112,
melody:[
{t:0,d:.4,f:G4,s:"새"},{t:.4,d:.4,f:G4,s:"야"},
{t:.8,d:.4,f:A4,s:"새"},{t:1.2,d:.8,f:A4,s:"야"},
{t:2,d:.4,f:G4,s:"파"},{t:2.4,d:.4,f:E4,s:"랑"},
{t:2.8,d:.8,f:G4,s:"새"},{t:3.6,d:.8,f:A4,s:"야"},
{t:4.4,d:.4,f:G4,s:"녹"},{t:4.8,d:.4,f:E4,s:"두"},
{t:5.2,d:.4,f:D4,s:"밭"},{t:5.6,d:.4,f:E4,s:"에"},
{t:6,d:.4,f:G4,s:"앉"},{t:6.4,d:.4,f:E4,s:"지"},
{t:6.8,d:1.2,f:D4,s:"마"},
{t:8,d:.4,f:E4,s:"녹"},{t:8.4,d:.4,f:G4,s:"두"},
{t:8.8,d:.4,f:A4,s:"꽃"},{t:9.2,d:.4,f:G4,s:"이"},
{t:9.6,d:.4,f:E4,s:"떨"},{t:10,d:.4,f:D4,s:"어"},
{t:10.4,d:1.2,f:C4,s:"지"}
],lyrics:[{t:0,tx:"새야 새야 파랑새야"},{t:4.4,tx:"녹두밭에 앉지 마"},{t:8,tx:"녹두꽃이 떨어지"}],dur:12},

{id:93,cat:"세계명곡",title:"라 밤바",icon:"🎺",diff:"보통",dc:"diff-medium",bpm:140,
melody:[
{t:0,d:.3,f:C4,s:"Pa"},{t:.3,d:.3,f:D4,s:"ra"},
{t:.6,d:.3,f:E4,s:"bai"},{t:.9,d:.3,f:F4,s:"lar"},
{t:1.2,d:.3,f:E4,s:"la"},{t:1.5,d:.6,f:D4,s:"bam"},
{t:2.1,d:.6,f:C4,s:"ba"},
{t:2.7,d:.3,f:C4,s:"Pa"},{t:3,d:.3,f:D4,s:"ra"},
{t:3.3,d:.3,f:E4,s:"bai"},{t:3.6,d:.3,f:F4,s:"lar"},
{t:3.9,d:.3,f:E4,s:"la"},{t:4.2,d:.6,f:D4,s:"bam"},
{t:4.8,d:.6,f:C4,s:"ba"},
{t:5.4,d:.3,f:E4,s:"se"},{t:5.7,d:.3,f:E4,s:"ne"},
{t:6,d:.3,f:F4,s:"ce"},{t:6.3,d:.3,f:G4,s:"si"},
{t:6.6,d:.3,f:A4,s:"ta"},{t:6.9,d:.3,f:G4,s:"u"},
{t:7.2,d:.3,f:F4,s:"na"},{t:7.5,d:.3,f:E4,s:"po"},
{t:7.8,d:.3,f:D4,s:"ca"},{t:8.1,d:.3,f:E4,s:"de"},
{t:8.4,d:.6,f:C4,s:"gra"},{t:9,d:.6,f:C4,s:"cia"}
],lyrics:[{t:0,tx:"Para bailar la bamba"},{t:2.7,tx:"Para bailar la bamba"},{t:5.4,tx:"se necesita una poca de gracia"}],dur:10},

{id:94,cat:"가요/민요",title:"옹헤야",icon:"🌾",diff:"보통",dc:"diff-medium",bpm:104,
melody:[
{t:0,d:.5,f:E4,s:"옹"},{t:.5,d:.5,f:G4,s:"헤"},
{t:1,d:1,f:A4,s:"야"},
{t:2,d:.5,f:A4,s:"옹"},{t:2.5,d:.5,f:B4,s:"헤"},
{t:3,d:1,f:A4,s:"야"},
{t:4,d:.5,f:G4,s:"이"},{t:4.5,d:.5,f:E4,s:"산"},
{t:5,d:.5,f:G4,s:"저"},{t:5.5,d:.5,f:A4,s:"산"},
{t:6,d:.5,f:G4,s:"꽃"},{t:6.5,d:.5,f:E4,s:"이"},
{t:7,d:.5,f:D4,s:"피"},{t:7.5,d:1,f:E4,s:"면"},
{t:8.5,d:.5,f:E4,s:"갈"},{t:9,d:.5,f:G4,s:"보"},{t:9.5,d:.5,f:A4,s:"자"},
{t:10,d:.5,f:G4,s:"뚜"},{t:10.5,d:.5,f:E4,s:"렷"},
{t:11,d:1.5,f:D4,s:"이"}
],lyrics:[{t:0,tx:"옹헤야 옹헤야"},{t:4,tx:"이산저산 꽃이피면"},{t:8.5,tx:"갈보자 뚜렷이"}],dur:13},

{id:95,cat:"세계명곡",title:"그린슬리브스",icon:"🏰",diff:"어려움",dc:"diff-hard",bpm:80,
melody:[
{t:0,d:1,f:A3,s:"A"},
{t:1,d:2,f:C4,s:"las"},{t:3,d:1,f:D4,s:"my"},
{t:4,d:1.5,f:E4,s:"love"},{t:5.5,d:.5,f:F4,s:"you"},
{t:6,d:2,f:E4,s:"do"},{t:8,d:1,f:D4,s:"me"},
{t:9,d:2,f:B3,s:"wrong"},{t:11,d:1,f:G3,s:"to"},
{t:12,d:1.5,f:A3,s:"cast"},{t:13.5,d:.5,f:B3,s:"me"},
{t:14,d:2,f:C4,s:"off"},{t:16,d:1,f:B3,s:"dis"},
{t:17,d:2,f:A3,s:"cour"},{t:19,d:1,f:Ab3,s:"teous"},
{t:20,d:3,f:A3,s:"ly"}
],lyrics:[{t:0,tx:"Alas my love"},{t:4,tx:"you do me wrong"},{t:9,tx:"to cast me off"},{t:16,tx:"discourteous-ly"}],dur:24}
];

if(typeof SONGS!=='undefined'){NEW_SONGS_V12.forEach(function(s){if(!SONGS.find(function(x){return x.id===s.id;}))SONGS.push(s);});}

// ===== WEB AUDIO SFX ENGINE v12 (12 sounds) =====
var sfxV12Types={
academy_open:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(440,ac.currentTime);o.frequency.linearRampToValueAtTime(880,ac.currentTime+.2);g.gain.setValueAtTime(.18,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.25);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.25);},
lesson_done:function(ac){for(var i=0;i<3;i++){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime([523,659,784][i],ac.currentTime+i*.1);g.gain.setValueAtTime(.15,ac.currentTime+i*.1);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.1+.15);o.connect(g);g.connect(ac.destination);o.start(ac.currentTime+i*.1);o.stop(ac.currentTime+i*.1+.15);}},
duet_start:function(ac){var o=ac.createOscillator(),o2=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=523;o2.type='sine';o2.frequency.value=659;g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.4);o.connect(g);o2.connect(g);g.connect(ac.destination);o.start();o2.start();o.stop(ac.currentTime+.4);o2.stop(ac.currentTime+.4);},
lyrics_game:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='square';o.frequency.setValueAtTime(660,ac.currentTime);o.frequency.linearRampToValueAtTime(880,ac.currentTime+.12);g.gain.setValueAtTime(.1,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.15);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.15);},
review_open:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.setValueAtTime(349,ac.currentTime);o.frequency.linearRampToValueAtTime(523,ac.currentTime+.25);g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.3);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.3);},
theory_open:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(262,ac.currentTime);o.frequency.setValueAtTime(330,ac.currentTime+.12);o.frequency.setValueAtTime(392,ac.currentTime+.24);g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.35);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.35);},
speed_change:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.setValueAtTime(440,ac.currentTime);g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.1);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.1);},
warmup_done:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(523,ac.currentTime);o.frequency.setValueAtTime(784,ac.currentTime+.15);g.gain.setValueAtTime(.2,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.25);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.25);},
rank_up:function(ac){for(var i=0;i<4;i++){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime([523,659,784,1047][i],ac.currentTime+i*.08);g.gain.setValueAtTime(.15,ac.currentTime+i*.08);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.08+.15);o.connect(g);g.connect(ac.destination);o.start(ac.currentTime+i*.08);o.stop(ac.currentTime+i*.08+.15);}},
tone_analyze:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(330,ac.currentTime);o.frequency.linearRampToValueAtTime(880,ac.currentTime+.4);g.gain.setValueAtTime(.1,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.45);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.45);},
progress_view:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.setValueAtTime(392,ac.currentTime);o.frequency.setValueAtTime(494,ac.currentTime+.1);o.frequency.setValueAtTime(587,ac.currentTime+.2);g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.3);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.3);},
v12_achieve:function(ac){for(var i=0;i<5;i++){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime([523,587,659,784,1047][i],ac.currentTime+i*.1);g.gain.setValueAtTime(.16,ac.currentTime+i*.1);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.1+.2);o.connect(g);g.connect(ac.destination);o.start(ac.currentTime+i*.1);o.stop(ac.currentTime+i*.1+.2);}}
};

function playSfxV12(type){
try{var ac=new(window.AudioContext||window.webkitAudioContext)();if(sfxV12Types[type])sfxV12Types[type](ac);setTimeout(function(){ac.close();},2000);}catch(e){}
}

// ===== 12 NEW ACHIEVEMENTS (v12: 66→78) =====
var NEW_ACHIEVE_V12=[
{id:'songs_95',title:'🎵 95곡 마스터',desc:'95곡 모두 부르기',check:function(){var sung=ls12('songsSung',{});try{var s11=localStorage.getItem('sv11-songsSung');if(s11){var p=JSON.parse(s11);for(var k in p)sung[k]=true;}}catch(e){}return Object.keys(sung).length>=95;}},
{id:'academy_grad',title:'🎓 아카데미 졸업',desc:'보컬 아카데미 12레슨 완료',check:function(){return ls12('academyDone',[]).length>=12;}},
{id:'academy_start',title:'📚 첫 레슨',desc:'보컬 아카데미 첫 레슨 완료',check:function(){return ls12('academyDone',[]).length>=1;}},
{id:'duet_singer',title:'🎶 듀엣 가수',desc:'듀엣 모드 3곡 부르기',check:function(){return(ls12('duetCount',0))>=3;}},
{id:'lyrics_master',title:'📝 가사왕',desc:'가사 외우기 5곡 만점',check:function(){return(ls12('lyricsPerfect',0))>=5;}},
{id:'reviewer',title:'📊 리뷰어',desc:'공연 리뷰 10회 확인',check:function(){return(ls12('reviewCount',0))>=10;}},
{id:'theorist',title:'🎼 이론가',desc:'음악이론 12강 수료',check:function(){return ls12('theoryDone',[]).length>=12;}},
{id:'speed_trainer',title:'⚡ 속도조절 달인',desc:'속도 변경 연습 10회',check:function(){return(ls12('speedPractice',0))>=10;}},
{id:'warmup_routine',title:'🔥 루틴 마스터',desc:'워밍업 루틴 6종 완료',check:function(){return ls12('warmupRoutines',[]).length>=6;}},
{id:'rank_challenger',title:'🏆 랭킹 도전자',desc:'주간 챌린지 3회 참가',check:function(){return(ls12('challengeCount',0))>=3;}},
{id:'tone_expert',title:'🎨 음색 전문가',desc:'음색 분석 5회 수행',check:function(){return(ls12('toneAnalyzeCount',0))>=5;}},
{id:'v12_explorer',title:'🚀 v12 탐험가',desc:'v12 신기능 6개 이상 사용',check:function(){var c=0;if(ls12('academyDone',[]).length>0)c++;if(ls12('duetCount',0)>0)c++;if(ls12('lyricsPerfect',0)>0||ls12('lyricsPlayed',0)>0)c++;if(ls12('reviewCount',0)>0)c++;if(ls12('theoryDone',[]).length>0)c++;if(ls12('speedPractice',0)>0)c++;if(ls12('warmupRoutines',[]).length>0)c++;if(ls12('challengeCount',0)>0)c++;if(ls12('toneAnalyzeCount',0)>0)c++;if(ls12('progressViewed',false))c++;return c>=6;}}
];

if(typeof ACHIEVEMENTS!=='undefined'){NEW_ACHIEVE_V12.forEach(function(a){if(!ACHIEVEMENTS.find(function(x){return x.id===a.id;}))ACHIEVEMENTS.push(a);});}

// ===== 1. VOCAL TRAINING ACADEMY (12 lessons) =====
var ACADEMY_LESSONS=[
{id:1,title:'복식호흡 기초',cat:'호흡',desc:'횡격막을 이용한 깊은 호흡법. 배를 풍선처럼 부풀렸다 줄이는 연습.',tip:'코로 4초 들이쉬고, 배가 나오는지 확인하세요.',exercise:'4초 들이기 → 4초 유지 → 6초 내쉬기 × 5회'},
{id:2,title:'두성(헤드보이스) 발성',cat:'발성',desc:'머리 울림을 이용한 높은 음역 발성법. 가성과 다른 힘 있는 고음.',tip:'&quot;우&quot; 발음으로 이마 진동을 느끼며 시작하세요.',exercise:'&quot;우~&quot; 사이렌 C4→C5 5회 반복'},
{id:3,title:'흉성(체스트보이스) 강화',cat:'발성',desc:'가슴 공명으로 풍성하고 깊은 저음을 만드는 발성법.',tip:'가슴에 손을 대고 진동이 느껴지는지 확인하세요.',exercise:'&quot;마~&quot; 발성 G3→C4 구간 5회'},
{id:4,title:'믹스보이스 연결',cat:'발성',desc:'흉성과 두성을 매끄럽게 연결하는 환성점 통과 기법.',tip:'볼륨을 줄이면서 자연스럽게 전환하세요.',exercise:'&quot;나~&quot; 글라이드 C4→G4→C5 왕복 3회'},
{id:5,title:'비브라토 훈련',cat:'테크닉',desc:'음 끝에서 자연스러운 떨림을 주는 기법. 성대 이완이 핵심.',tip:'턱과 후두를 이완하고 복부 근육으로 제어하세요.',exercise:'장음 유지 후 1초당 5~6회 떨림 연습'},
{id:6,title:'다이내믹 표현',cat:'표현',desc:'소리의 세기를 조절해서 감정을 전달하는 방법.',tip:'pp(매우 약하게)에서 ff(매우 강하게)까지 단계별로 연습하세요.',exercise:'같은 음을 pp→mp→mf→f→ff 5단계로 부르기'},
{id:7,title:'딕션과 발음',cat:'표현',desc:'명확한 발음으로 가사를 전달하는 기술. 모음과 자음의 균형.',tip:'거울을 보며 입 모양을 크게 하세요.',exercise:'&quot;라리루레로&quot; 각 모음 5초씩 또렷하게'},
{id:8,title:'음정 정확도',cat:'테크닉',desc:'목표 음에 정확히 도달하는 훈련. 피치 감각 향상.',tip:'피아노 음을 듣고 같은 음을 내는 연습부터 시작하세요.',exercise:'C4-E4-G4-C5 순차 음정 맞추기 10회'},
{id:9,title:'리듬감 훈련',cat:'테크닉',desc:'박자에 맞춰 정확하게 가사를 배치하는 능력.',tip:'메트로놈에 맞춰 손뼉 치며 노래하세요.',exercise:'4/4박 메트로놈 BPM100에서 가사 배치'},
{id:10,title:'감정 표현법',cat:'표현',desc:'곡의 감정에 맞게 톤, 강세, 템포를 조절하는 기법.',tip:'가사의 의미를 먼저 이해하고 감정이입하세요.',exercise:'같은 구절을 기쁨/슬픔/분노 3가지로 부르기'},
{id:11,title:'마이크 테크닉',cat:'실전',desc:'마이크 거리, 각도, 팝핑 방지 등 실전 노하우.',tip:'입에서 주먹 하나 거리가 기본, 고음에서 살짝 떼세요.',exercise:'파열음(ㅂ,ㅍ) 구간에서 각도 틀어 연습'},
{id:12,title:'무대 퍼포먼스',cat:'실전',desc:'시선처리, 제스처, 호흡 조절 등 종합 퍼포먼스 기술.',tip:'눈은 관객을 보고, 손은 가사에 맞춰 자연스럽게.',exercise:'거울 앞에서 1곡 완창하며 동작 연습'}
];

function showVocalAcademy(){
playSfxV12('academy_open');
var done=ls12('academyDone',[]);
var m=document.createElement('div');m.id='v12-academy-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">🎓 보컬 아카데미</h2><button onclick="this.closest(\'#v12-academy-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:12px;margin-bottom:16px;text-align:center;">';
html+='<div style="color:#c084fc;font-size:13px;">수료 진도</div>';
html+='<div style="color:#e0e0e0;font-size:28px;font-weight:bold;">'+done.length+' / 12</div>';
html+='<div style="background:rgba(255,255,255,.1);height:8px;border-radius:4px;margin-top:8px;overflow:hidden;"><div style="width:'+(done.length/12*100)+'%;height:100%;background:linear-gradient(90deg,#a855f7,#7c3aed);border-radius:4px;"></div></div></div>';
ACADEMY_LESSONS.forEach(function(les){
var isDone=done.indexOf(les.id)!==-1;
var catColors={'호흡':'#22c55e','발성':'#3b82f6','테크닉':'#eab308','표현':'#f97316','실전':'#ef4444'};
var cc=catColors[les.cat]||'#a855f7';
html+='<div style="background:rgba(255,255,255,.05);border:1px solid '+(isDone?'rgba(34,197,94,.5)':'rgba(255,255,255,.1)')+';border-radius:12px;padding:14px;margin-bottom:10px;cursor:pointer;" onclick="toggleAcademyLesson('+les.id+')">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="background:'+cc+';color:#fff;font-size:10px;padding:2px 8px;border-radius:8px;">'+les.cat+'</span> <span style="color:#e0e0e0;font-weight:bold;margin-left:4px;">'+les.title+'</span></div>';
html+='<span style="font-size:20px;">'+(isDone?'✅':'⬜')+'</span></div>';
html+='<div id="v12-lesson-'+les.id+'" style="display:none;margin-top:10px;">';
html+='<p style="color:#aaa;font-size:13px;line-height:1.6;">'+les.desc+'</p>';
html+='<div style="background:rgba(168,85,247,.1);border-radius:8px;padding:10px;margin-top:8px;"><div style="color:#c084fc;font-size:11px;font-weight:bold;">💡 팁</div><div style="color:#ddd;font-size:12px;">'+les.tip+'</div></div>';
html+='<div style="background:rgba(34,197,94,.1);border-radius:8px;padding:10px;margin-top:6px;"><div style="color:#22c55e;font-size:11px;font-weight:bold;">🏋️ 연습</div><div style="color:#ddd;font-size:12px;">'+les.exercise+'</div></div>';
if(!isDone){html+='<button onclick="event.stopPropagation();completeLesson('+les.id+')" style="background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:8px;padding:10px;width:100%;margin-top:8px;cursor:pointer;font-weight:bold;">✅ 레슨 완료</button>';}
html+='</div></div>';
});
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.toggleAcademyLesson=function(id){
var el=document.getElementById('v12-lesson-'+id);
if(el)el.style.display=el.style.display==='none'?'block':'none';
};

window.completeLesson=function(id){
var done=ls12('academyDone',[]);
if(done.indexOf(id)===-1){done.push(id);ls12s('academyDone',done);}
playSfxV12('lesson_done');
var modal=document.getElementById('v12-academy-modal');
if(modal)modal.remove();
showVocalAcademy();
};

// ===== 2. DUET HARMONY MODE =====
function showDuetHarmony(){
playSfxV12('duet_start');
var m=document.createElement('div');m.id='v12-duet-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var songs=typeof SONGS!=='undefined'?SONGS:[];
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">🎶 듀엣 하모니</h2><button onclick="this.closest(\'#v12-duet-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<p style="color:#aaa;font-size:13px;margin-bottom:12px;">AI가 화음 파트를 불러줍니다. 당신은 메인 멜로디를 부르세요!</p>';
var harmonyModes=[
{name:'3도 화음',desc:'밝고 따뜻한 3도 위 화음',interval:4},
{name:'5도 화음',desc:'웅장하고 풍성한 5도 화음',interval:7},
{name:'옥타브',desc:'같은 음의 한 옥타브 위 화음',interval:12},
{name:'6도 화음',desc:'부드럽고 감성적인 6도 아래 화음',interval:-3}
];
html+='<div style="margin-bottom:16px;">';
html+='<div style="color:#c084fc;font-size:13px;font-weight:bold;margin-bottom:8px;">화음 모드 선택</div>';
html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">';
harmonyModes.forEach(function(hm,i){
html+='<button onclick="selectHarmonyMode('+i+')" id="v12-harmony-'+i+'" style="background:rgba(255,106,176,.1);border:1px solid '+(i===0?'#ff6ab0':'rgba(255,106,176,.3)')+';border-radius:10px;padding:10px;cursor:pointer;text-align:left;">';
html+='<div style="color:#ff6ab0;font-weight:bold;font-size:13px;">'+hm.name+'</div>';
html+='<div style="color:#888;font-size:11px;">'+hm.desc+'</div></button>';
});
html+='</div></div>';
html+='<div style="color:#c084fc;font-size:13px;font-weight:bold;margin-bottom:8px;">곡 선택</div>';
html+='<div style="max-height:300px;overflow-y:auto;">';
songs.slice(0,30).forEach(function(s){
html+='<div onclick="startDuet('+s.id+')" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:10px;margin-bottom:6px;cursor:pointer;display:flex;align-items:center;gap:10px;transition:all .2s;" onmouseover="this.style.borderColor=\'#ff6ab0\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,.1)\'">';
html+='<span style="font-size:24px;">'+s.icon+'</span>';
html+='<div><div style="color:#e0e0e0;font-weight:bold;font-size:14px;">'+s.title+'</div>';
html+='<div style="color:#888;font-size:11px;">'+s.cat+' · '+s.diff+'</div></div></div>';
});
html+='</div></div>';
m.innerHTML=html;
document.body.appendChild(m);
ls12s('selectedHarmony',0);
}

window.selectHarmonyMode=function(idx){
for(var i=0;i<4;i++){
var el=document.getElementById('v12-harmony-'+i);
if(el)el.style.borderColor=i===idx?'#ff6ab0':'rgba(255,106,176,.3)';
}
ls12s('selectedHarmony',idx);
};

window.startDuet=function(songId){
var cnt=ls12('duetCount',0);
ls12s('duetCount',cnt+1);
var modal=document.getElementById('v12-duet-modal');
if(modal)modal.remove();
if(typeof window.selectSong==='function'){
window.selectSong(songId);
}
};

// ===== 3. LYRICS MEMORIZATION GAME =====
function showLyricsGame(){
playSfxV12('lyrics_game');
var songs=typeof SONGS!=='undefined'?SONGS:[];
var playable=songs.filter(function(s){return s.lyrics&&s.lyrics.length>=3;});
var sel=playable[Math.floor(Math.random()*playable.length)];
if(!sel)return;
var m=document.createElement('div');m.id='v12-lyrics-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var allLyrics=sel.lyrics.map(function(l){return l.tx;});
var blankIdx=Math.floor(Math.random()*(allLyrics.length));
var answer=allLyrics[blankIdx];
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#eab308;margin:0;">📝 가사 외우기</h2><button onclick="this.closest(\'#v12-lyrics-modal\').remove()" style="background:#eab308;color:#000;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<div style="background:rgba(234,179,8,.1);border:1px solid rgba(234,179,8,.3);border-radius:12px;padding:16px;text-align:center;margin-bottom:16px;">';
html+='<div style="font-size:32px;">'+sel.icon+'</div>';
html+='<div style="color:#eab308;font-size:20px;font-weight:bold;margin-top:4px;">'+sel.title+'</div></div>';
html+='<div style="margin-bottom:16px;">';
allLyrics.forEach(function(l,i){
if(i===blankIdx){
html+='<div style="background:rgba(239,68,68,.1);border:2px dashed rgba(239,68,68,.5);border-radius:10px;padding:14px;margin:8px 0;text-align:center;">';
html+='<div style="color:#ef4444;font-size:14px;">❓ 빈칸을 채우세요!</div></div>';
} else {
html+='<div style="background:rgba(255,255,255,.05);border-radius:10px;padding:12px;margin:6px 0;text-align:center;color:#e0e0e0;font-size:16px;">'+l+'</div>';
}
});
html+='</div>';
html+='<input id="v12-lyrics-input" type="text" placeholder="빈칸의 가사를 입력하세요..." style="width:100%;padding:14px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);border-radius:10px;color:#e0e0e0;font-size:16px;outline:none;box-sizing:border-box;margin-bottom:10px;" autocomplete="off">';
html+='<button onclick="checkLyricsAnswer()" style="background:linear-gradient(135deg,#eab308,#ca8a04);color:#000;border:none;border-radius:10px;padding:14px;width:100%;font-weight:bold;font-size:16px;cursor:pointer;">정답 확인</button>';
html+='<div id="v12-lyrics-result" style="margin-top:12px;text-align:center;"></div>';
html+='<button onclick="this.closest(\'#v12-lyrics-modal\').remove();showLyricsGame();" style="background:rgba(168,85,247,.2);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:10px;width:100%;margin-top:8px;cursor:pointer;">🔄 다른 곡 도전</button>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
window.__v12LyricsAnswer=answer;
var inp=document.getElementById('v12-lyrics-input');
if(inp){inp.addEventListener('keydown',function(e){if(e.key==='Enter')checkLyricsAnswer();});}
ls12s('lyricsPlayed',(ls12('lyricsPlayed',0))+1);
}

window.checkLyricsAnswer=function(){
var inp=document.getElementById('v12-lyrics-input');
var res=document.getElementById('v12-lyrics-result');
if(!inp||!res)return;
var userAns=inp.value.trim().replace(/\s+/g,'');
var correct=(window.__v12LyricsAnswer||'').trim().replace(/\s+/g,'');
if(userAns===correct){
res.innerHTML='<div style="color:#22c55e;font-size:20px;font-weight:bold;">🎉 정답입니다!</div>';
var pc=ls12('lyricsPerfect',0);ls12s('lyricsPerfect',pc+1);
playSfxV12('rank_up');
} else {
res.innerHTML='<div style="color:#ef4444;font-size:16px;">❌ 오답! 정답: <span style="color:#eab308;">'+window.__v12LyricsAnswer+'</span></div>';
}
};

// ===== 4. PERFORMANCE REVIEW (Canvas) =====
function showPerformanceReview(){
playSfxV12('review_open');
ls12s('reviewCount',(ls12('reviewCount',0))+1);
var hist=[];
try{var h11=localStorage.getItem('sv11-history');if(h11)hist=JSON.parse(h11);}catch(e){}
var m=document.createElement('div');m.id='v12-review-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#3b82f6;margin:0;">📊 공연 리뷰</h2><button onclick="this.closest(\'#v12-review-modal\').remove()" style="background:#3b82f6;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v12-review-canvas" width="480" height="280" style="width:100%;background:#1a1028;border-radius:10px;"></canvas>';
var recent=hist.slice(-10);
var avgScore=0;
if(recent.length>0){
var sum=0;recent.forEach(function(r){sum+=r.score||0;});
avgScore=Math.round(sum/recent.length);
}
var grade=avgScore>=95?'S':avgScore>=85?'A':avgScore>=70?'B':avgScore>=50?'C':'D';
var gradeColors={'S':'#ffd700','A':'#22c55e','B':'#3b82f6','C':'#f97316','D':'#ef4444'};
html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px;">';
html+='<div style="background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.3);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">총 부른 곡</div><div style="color:#3b82f6;font-size:24px;font-weight:bold;">'+hist.length+'</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">평균 점수</div><div style="color:#a855f7;font-size:24px;font-weight:bold;">'+avgScore+'</div></div>';
html+='<div style="background:rgba(255,215,0,.1);border:1px solid rgba(255,215,0,.3);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">종합 등급</div><div style="color:'+gradeColors[grade]+';font-size:24px;font-weight:bold;">'+grade+'</div></div></div>';
if(recent.length>0){
html+='<div style="margin-top:16px;"><h3 style="color:#c084fc;margin-bottom:8px;">최근 10곡</h3>';
recent.slice().reverse().forEach(function(r){
var sc=r.score||0;
var barColor=sc>=90?'#22c55e':sc>=70?'#eab308':'#ef4444';
html+='<div style="display:flex;align-items:center;gap:8px;margin:6px 0;">';
html+='<span style="font-size:16px;width:24px;">'+r.icon+'</span>';
html+='<span style="color:#ddd;font-size:13px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+r.title+'</span>';
html+='<div style="width:100px;height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden;"><div style="width:'+sc+'%;height:100%;background:'+barColor+';border-radius:4px;"></div></div>';
html+='<span style="color:'+barColor+';font-size:13px;font-weight:bold;width:32px;text-align:right;">'+sc+'</span>';
html+='</div>';
});
html+='</div>';
}
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
drawReviewCanvas(recent);
}

function drawReviewCanvas(data){
var c=document.getElementById('v12-review-canvas');if(!c)return;
var ctx=c.getContext('2d');
var W=c.width,H=c.height;
ctx.clearRect(0,0,W,H);
ctx.fillStyle='#1a1028';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='rgba(168,85,247,.15)';ctx.lineWidth=1;
for(var i=0;i<=10;i++){
var y=30+i*(H-60)/10;
ctx.beginPath();ctx.moveTo(50,y);ctx.lineTo(W-20,y);ctx.stroke();
if(i%2===0){ctx.fillStyle='#666';ctx.font='10px sans-serif';ctx.textAlign='right';ctx.fillText((100-i*10)+'',45,y+4);}
}
if(data.length<2)return;
ctx.beginPath();
ctx.strokeStyle='#a855f7';ctx.lineWidth=2;
var grd=ctx.createLinearGradient(0,30,0,H-30);
grd.addColorStop(0,'rgba(168,85,247,.3)');grd.addColorStop(1,'rgba(168,85,247,.02)');
data.forEach(function(d,i){
var x=50+i*(W-70)/(data.length-1);
var y=30+(100-(d.score||0))*(H-60)/100;
if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
});
ctx.stroke();
ctx.lineTo(50+(data.length-1)*(W-70)/(data.length-1),H-30);
ctx.lineTo(50,H-30);ctx.closePath();
ctx.fillStyle=grd;ctx.fill();
data.forEach(function(d,i){
var x=50+i*(W-70)/(data.length-1);
var y=30+(100-(d.score||0))*(H-60)/100;
ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);
var sc=d.score||0;
ctx.fillStyle=sc>=90?'#22c55e':sc>=70?'#eab308':'#ef4444';
ctx.fill();
ctx.fillStyle='#aaa';ctx.font='9px sans-serif';ctx.textAlign='center';
ctx.fillText(d.title||'',x,H-14);
});
ctx.fillStyle='#c084fc';ctx.font='12px sans-serif';ctx.textAlign='center';
ctx.fillText('최근 공연 점수 추이',W/2,18);
}

// ===== 5. MUSIC THEORY CLASSROOM (12 lessons) =====
var THEORY_LESSONS=[
{id:1,title:'음이름과 계이름',desc:'도레미파솔라시, CDEFGAB. 고정도법과 이동도법의 차이.',example:'C=도, D=레, E=미, F=파, G=솔, A=라, B=시'},
{id:2,title:'음표와 쉼표',desc:'온음표(4박), 2분(2박), 4분(1박), 8분(0.5박), 16분(0.25박).',example:'♩=1박, ♪=0.5박, 𝅝=4박'},
{id:3,title:'박자표',desc:'4/4(보통), 3/4(왈츠), 6/8(복합), 2/4(행진)의 의미.',example:'4/4 = 4분음표 기준 한 마디에 4박'},
{id:4,title:'장조와 단조',desc:'장조는 밝고, 단조는 어둡고 슬프다. 음계 구성음의 차이.',example:'C장조: CDEFGAB, A단조: ABCDEFG'},
{id:5,title:'음정(Interval)',desc:'두 음 사이 거리. 장3도, 완전5도, 옥타브 등.',example:'C→E = 장3도(4반음), C→G = 완전5도(7반음)'},
{id:6,title:'화음(Chord)',desc:'3개 이상 음의 동시 울림. 메이저, 마이너, 세븐스.',example:'C코드: C+E+G (도미솔), Cm: C+Eb+G'},
{id:7,title:'조표',desc:'#(샵)과 b(플랫)으로 조성을 나타낸다. 5도권.',example:'G장조: F# 1개, F장조: Bb 1개'},
{id:8,title:'다이내믹스',desc:'pp, p, mp, mf, f, ff — 음량 표기법.',example:'pp(아주 여리게) → ff(아주 세게)'},
{id:9,title:'템포 용어',desc:'Largo(느리게)~Presto(매우 빠르게). BPM으로 표현.',example:'Andante=76~108, Allegro=120~168'},
{id:10,title:'아티큘레이션',desc:'레가토(부드럽게), 스타카토(짧게), 액센트(강하게).',example:'̄ = 레가토, · = 스타카토, > = 액센트'},
{id:11,title:'반복 기호',desc:'도돌이표, D.C., D.S., Coda, Fine의 의미.',example:'D.C. al Fine = 처음부터 Fine까지 반복'},
{id:12,title:'가요 구조',desc:'인트로-절(A)-후렴(B)-간주-2절-브릿지(C)-아웃트로.',example:'일반적 K-POP: Intro-V1-Pre-Chorus-V2-Bridge-Chorus-Outro'}
];

function showMusicTheory(){
playSfxV12('theory_open');
var done=ls12('theoryDone',[]);
var m=document.createElement('div');m.id='v12-theory-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#22c55e;margin:0;">🎼 음악이론 교실</h2><button onclick="this.closest(\'#v12-theory-modal\').remove()" style="background:#22c55e;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<div style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);border-radius:10px;padding:12px;margin-bottom:16px;text-align:center;">';
html+='<div style="color:#4ade80;font-size:13px;">수강 진도</div>';
html+='<div style="color:#e0e0e0;font-size:28px;font-weight:bold;">'+done.length+' / 12</div>';
html+='<div style="background:rgba(255,255,255,.1);height:8px;border-radius:4px;margin-top:8px;overflow:hidden;"><div style="width:'+(done.length/12*100)+'%;height:100%;background:linear-gradient(90deg,#22c55e,#16a34a);border-radius:4px;"></div></div></div>';
THEORY_LESSONS.forEach(function(les){
var isDone=done.indexOf(les.id)!==-1;
html+='<div style="background:rgba(255,255,255,.05);border:1px solid '+(isDone?'rgba(34,197,94,.5)':'rgba(255,255,255,.1)')+';border-radius:12px;padding:14px;margin-bottom:10px;cursor:pointer;" onclick="toggleTheoryLesson('+les.id+')">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<span style="color:#e0e0e0;font-weight:bold;">'+les.id+'. '+les.title+'</span>';
html+='<span style="font-size:20px;">'+(isDone?'✅':'⬜')+'</span></div>';
html+='<div id="v12-theory-'+les.id+'" style="display:none;margin-top:10px;">';
html+='<p style="color:#aaa;font-size:13px;line-height:1.6;">'+les.desc+'</p>';
html+='<div style="background:rgba(34,197,94,.1);border-radius:8px;padding:10px;margin-top:8px;"><div style="color:#22c55e;font-size:11px;font-weight:bold;">📖 예시</div><div style="color:#ddd;font-size:12px;">'+les.example+'</div></div>';
if(!isDone){html+='<button onclick="event.stopPropagation();completeTheory('+les.id+')" style="background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:8px;padding:10px;width:100%;margin-top:8px;cursor:pointer;font-weight:bold;">✅ 수강 완료</button>';}
html+='</div></div>';
});
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.toggleTheoryLesson=function(id){
var el=document.getElementById('v12-theory-'+id);
if(el)el.style.display=el.style.display==='none'?'block':'none';
};

window.completeTheory=function(id){
var done=ls12('theoryDone',[]);
if(done.indexOf(id)===-1){done.push(id);ls12s('theoryDone',done);}
playSfxV12('lesson_done');
var modal=document.getElementById('v12-theory-modal');
if(modal)modal.remove();
showMusicTheory();
};

// ===== 6. SPEED CONTROL PRACTICE =====
function showSpeedControl(){
playSfxV12('speed_change');
var m=document.createElement('div');m.id='v12-speed-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var curSpeed=ls12('practiceSpeed',100);
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#f97316;margin:0;">⚡ 속도 조절 연습</h2><button onclick="this.closest(\'#v12-speed-modal\').remove()" style="background:#f97316;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<p style="color:#aaa;font-size:13px;margin-bottom:16px;">느린 속도로 시작해서 점차 원곡 속도로 올려보세요. 정확한 음정과 리듬을 잡는 데 효과적입니다.</p>';
html+='<div style="background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.3);border-radius:14px;padding:20px;text-align:center;margin-bottom:16px;">';
html+='<div style="color:#fb923c;font-size:14px;margin-bottom:8px;">연습 속도</div>';
html+='<div id="v12-speed-val" style="color:#f97316;font-size:48px;font-weight:bold;">'+curSpeed+'%</div>';
html+='<input type="range" id="v12-speed-slider" min="50" max="150" value="'+curSpeed+'" style="width:100%;accent-color:#f97316;margin-top:12px;" oninput="updateSpeedDisplay(this.value)">';
html+='<div style="display:flex;justify-content:space-between;color:#888;font-size:11px;margin-top:4px;"><span>50% (느리게)</span><span>100% (원곡)</span><span>150% (빠르게)</span></div></div>';
var presets=[
{name:'초보자',speed:60,desc:'느린 템포로 음정 잡기'},
{name:'연습',speed:75,desc:'중간 속도로 리듬 연습'},
{name:'원곡',speed:100,desc:'원래 속도'},
{name:'도전',speed:120,desc:'빠른 속도 도전'},
{name:'마스터',speed:140,desc:'극한의 속도'}
];
html+='<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:16px;">';
presets.forEach(function(p){
html+='<button onclick="setSpeedPreset('+p.speed+')" style="background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.3);border-radius:10px;padding:8px 4px;cursor:pointer;text-align:center;">';
html+='<div style="color:#f97316;font-weight:bold;font-size:13px;">'+p.speed+'%</div>';
html+='<div style="color:#888;font-size:9px;">'+p.name+'</div></button>';
});
html+='</div>';
html+='<button onclick="applySpeedPractice()" style="background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;border:none;border-radius:10px;padding:14px;width:100%;font-weight:bold;font-size:16px;cursor:pointer;">🎵 이 속도로 노래 부르기</button>';
html+='<div style="color:#888;font-size:12px;text-align:center;margin-top:8px;">연습 횟수: '+ls12('speedPractice',0)+'회</div>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.updateSpeedDisplay=function(val){
var el=document.getElementById('v12-speed-val');
if(el)el.textContent=val+'%';
};

window.setSpeedPreset=function(speed){
var slider=document.getElementById('v12-speed-slider');
if(slider){slider.value=speed;updateSpeedDisplay(speed);}
};

window.applySpeedPractice=function(){
var slider=document.getElementById('v12-speed-slider');
var speed=slider?parseInt(slider.value):100;
ls12s('practiceSpeed',speed);
ls12s('speedPractice',(ls12('speedPractice',0))+1);
playSfxV12('speed_change');
var modal=document.getElementById('v12-speed-modal');
if(modal)modal.remove();
};

// ===== 7. WARMUP ROUTINE BUILDER (6 routines) =====
var WARMUP_ROUTINES=[
{id:1,name:'🌅 모닝 보컬',desc:'아침에 하는 가벼운 발성 워밍업',steps:['립트릴 30초','허밍 스케일 C4→G4 5회','모음 발성 아에이오우 3회','가벼운 동요 1곡'],time:'5분'},
{id:2,name:'💪 파워 보이스',desc:'고음을 위한 집중 워밍업',steps:['복식호흡 1분','사이렌 글라이드 5회','두성 전환 연습 5회','믹스보이스 스케일 5회'],time:'8분'},
{id:3,name:'🎭 감성 표현',desc:'감정 표현력을 키우는 워밍업',steps:['이완 스트레칭 1분','속삭이듯 발성 1분','다이내믹 변화 연습','감정 대사 읽기 3종'],time:'7분'},
{id:4,name:'⚡ 스피드 랩',desc:'빠른 곡을 위한 딕션 워밍업',steps:['혀 굴리기 30초','자음 연습 ㄱ~ㅎ','빠른 가사 읽기 3종','더블타임 리듬 연습'],time:'6분'},
{id:5,name:'🎤 라이브 준비',desc:'라이브 공연 전 풀 워밍업',steps:['전신 스트레칭 2분','호흡 운동 3종','음역 전체 스케일','리허설 1곡 완창'],time:'12분'},
{id:6,name:'😌 보컬 케어',desc:'목 관리와 회복을 위한 워밍업',steps:['온수 가글 1분','허밍만으로 3분','작은 소리 발성','립트릴 스케일 느리게'],time:'5분'}
];

function showWarmupRoutines(){
playSfxV12('warmup_done');
var done=ls12('warmupRoutines',[]);
var m=document.createElement('div');m.id='v12-warmup-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ef4444;margin:0;">🔥 워밍업 루틴</h2><button onclick="this.closest(\'#v12-warmup-modal\').remove()" style="background:#ef4444;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<p style="color:#aaa;font-size:13px;margin-bottom:12px;">노래 전 워밍업은 필수! 목적에 맞는 루틴을 골라 시작하세요.</p>';
WARMUP_ROUTINES.forEach(function(r){
var isDone=done.indexOf(r.id)!==-1;
html+='<div style="background:rgba(255,255,255,.05);border:1px solid '+(isDone?'rgba(34,197,94,.5)':'rgba(255,255,255,.1)')+';border-radius:12px;padding:14px;margin-bottom:10px;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="font-size:20px;">'+r.name.split(' ')[0]+'</span> <span style="color:#e0e0e0;font-weight:bold;">'+r.name.substring(r.name.indexOf(' ')+1)+'</span></div>';
html+='<span style="color:#888;font-size:12px;">⏱ '+r.time+'</span></div>';
html+='<p style="color:#aaa;font-size:12px;margin:6px 0;">'+r.desc+'</p>';
html+='<div style="margin:8px 0;">';
r.steps.forEach(function(s,i){
html+='<div style="color:#ddd;font-size:12px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.05);">'+(i+1)+'. '+s+'</div>';
});
html+='</div>';
if(!isDone){html+='<button onclick="completeWarmupRoutine('+r.id+')" style="background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;border:none;border-radius:8px;padding:10px;width:100%;cursor:pointer;font-weight:bold;">✅ 루틴 완료</button>';}
else{html+='<div style="text-align:center;color:#22c55e;font-size:13px;">✅ 완료됨</div>';}
html+='</div>';
});
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.completeWarmupRoutine=function(id){
var done=ls12('warmupRoutines',[]);
if(done.indexOf(id)===-1){done.push(id);ls12s('warmupRoutines',done);}
playSfxV12('warmup_done');
var modal=document.getElementById('v12-warmup-modal');
if(modal)modal.remove();
showWarmupRoutines();
};

// ===== 8. CHALLENGE RANKINGS =====
function showChallengeRankings(){
playSfxV12('rank_up');
ls12s('challengeCount',(ls12('challengeCount',0))+1);
var weekSeed=Math.floor(Date.now()/(7*24*60*60*1000));
var challenges=[
{title:'90점 이상 5곡 부르기',goal:5,key:'ch_90score'},
{title:'동요 3곡 연속 부르기',goal:3,key:'ch_dongyo'},
{title:'어려운 곡 도전',goal:1,key:'ch_hard'},
{title:'누적 10곡 부르기',goal:10,key:'ch_total'}
];
var weekChallenge=[];
for(var i=0;i<4;i++){weekChallenge.push(challenges[(weekSeed+i)%challenges.length]);}
var aiPlayers=[
{name:'보컬퀸_제니',score:9850,grade:'S'},
{name:'음치탈출_민수',score:8720,grade:'A'},
{name:'노래천재_하늘',score:9200,grade:'S'},
{name:'가요왕_지훈',score:8500,grade:'A'},
{name:'고음전사_소라',score:9100,grade:'A'},
{name:'발라드킹_준영',score:8900,grade:'A'},
{name:'힐링보컬_예린',score:8300,grade:'B'},
{name:'트롯신_복순',score:8100,grade:'B'},
{name:'팝마스터_케이',score:7800,grade:'B'},
{name:'록보컬_건우',score:7500,grade:'B'}
];
var myScore=0;
try{var h=localStorage.getItem('sv11-history');if(h){var hist=JSON.parse(h);hist.forEach(function(r){myScore+=(r.score||0);});}}catch(e){}
var m=document.createElement('div');m.id='v12-rank-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ffd700;margin:0;">🏆 챌린지 랭킹</h2><button onclick="this.closest(\'#v12-rank-modal\').remove()" style="background:#ffd700;color:#000;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<div style="background:linear-gradient(135deg,rgba(255,215,0,.1),rgba(249,115,22,.1));border:1px solid rgba(255,215,0,.3);border-radius:14px;padding:16px;margin-bottom:16px;">';
html+='<div style="color:#ffd700;font-size:16px;font-weight:bold;text-align:center;margin-bottom:12px;">📅 이번 주 챌린지</div>';
weekChallenge.forEach(function(ch,i){
var prog=ls12(ch.key,0);
var pct=Math.min(prog/ch.goal*100,100);
html+='<div style="margin:8px 0;">';
html+='<div style="display:flex;justify-content:space-between;color:#ddd;font-size:13px;"><span>'+(i+1)+'. '+ch.title+'</span><span style="color:#ffd700;">'+prog+'/'+ch.goal+'</span></div>';
html+='<div style="background:rgba(255,255,255,.1);height:6px;border-radius:3px;margin-top:4px;overflow:hidden;"><div style="width:'+pct+'%;height:100%;background:linear-gradient(90deg,#ffd700,#f97316);border-radius:3px;"></div></div>';
html+='</div>';
});
html+='</div>';
html+='<div style="margin-bottom:16px;"><div style="color:#c084fc;font-size:14px;font-weight:bold;margin-bottom:10px;">🏅 주간 리더보드</div>';
var allPlayers=aiPlayers.slice();
allPlayers.push({name:'⭐ 나',score:myScore,grade:myScore>=9000?'S':myScore>=7000?'A':myScore>=5000?'B':myScore>=3000?'C':'D'});
allPlayers.sort(function(a,b){return b.score-a.score;});
allPlayers.forEach(function(p,i){
var isMe=p.name==='⭐ 나';
var medalColors=['#ffd700','#c0c0c0','#cd7f32'];
var medal=i<3?'<span style="color:'+medalColors[i]+';margin-right:4px;">'+(i===0?'🥇':i===1?'🥈':'🥉')+'</span>':'';
html+='<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;margin:4px 0;background:'+(isMe?'rgba(168,85,247,.15)':'rgba(255,255,255,.03)')+';border:1px solid '+(isMe?'rgba(168,85,247,.4)':'transparent')+';border-radius:10px;">';
html+='<span style="color:#888;font-size:12px;width:20px;text-align:center;">'+(i+1)+'</span>';
html+=medal;
html+='<span style="color:'+(isMe?'#c084fc':'#ddd')+';flex:1;font-size:13px;font-weight:'+(isMe?'bold':'normal')+';">'+p.name+'</span>';
html+='<span style="color:#ffd700;font-weight:bold;font-size:14px;">'+p.score.toLocaleString()+'</span>';
html+='</div>';
});
html+='</div></div>';
m.innerHTML=html;
document.body.appendChild(m);
}

// ===== 9. TONE COLOR ANALYZER (Canvas) =====
function showToneAnalyzer(){
playSfxV12('tone_analyze');
ls12s('toneAnalyzeCount',(ls12('toneAnalyzeCount',0))+1);
var m=document.createElement('div');m.id='v12-tone-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#e879f9;margin:0;">🎨 음색 분석기</h2><button onclick="this.closest(\'#v12-tone-modal\').remove()" style="background:#e879f9;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v12-tone-canvas" width="360" height="360" style="width:100%;max-width:360px;display:block;margin:0 auto;background:#1a1028;border-radius:10px;"></canvas>';
var labels=['밝기','따뜻함','힘','안정감','선명도'];
var scores=[];
for(var i=0;i<5;i++){scores.push(40+Math.floor(Math.random()*50));}
try{var h=localStorage.getItem('sv11-history');if(h){var hist=JSON.parse(h);if(hist.length>=3){var recent=hist.slice(-5);var avgS=0;recent.forEach(function(r){avgS+=(r.score||0);});avgS=avgS/recent.length;scores[0]=Math.min(100,Math.round(avgS*0.8+Math.random()*20));scores[1]=Math.min(100,Math.round(avgS*0.7+Math.random()*25));scores[2]=Math.min(100,Math.round(avgS*0.6+Math.random()*30));scores[3]=Math.min(100,Math.round(avgS*0.75+Math.random()*20));scores[4]=Math.min(100,Math.round(avgS*0.65+Math.random()*25));}}}catch(e){}
ls12s('toneScores',scores);
var toneTypes=[
{name:'크리스탈 보이스',desc:'맑고 투명한 음색. 발라드에 적합.',color:'#60a5fa',match:function(s){return s[0]>70&&s[4]>65;}},
{name:'벨벳 보이스',desc:'부드럽고 따뜻한 음색. R&B에 적합.',color:'#e879f9',match:function(s){return s[1]>70&&s[3]>65;}},
{name:'파워 보이스',desc:'강하고 힘 있는 음색. 록/댄스에 적합.',color:'#ef4444',match:function(s){return s[2]>70;}},
{name:'실크 보이스',desc:'부드럽고 안정적. 재즈/보사노바에 적합.',color:'#22c55e',match:function(s){return s[3]>70&&s[1]>60;}},
{name:'다이아몬드 보이스',desc:'밝고 선명한 음색. 팝/뮤지컬에 적합.',color:'#ffd700',match:function(s){return s[0]>65&&s[4]>70;}}
];
var myType=toneTypes[0];
for(var t=0;t<toneTypes.length;t++){if(toneTypes[t].match(scores)){myType=toneTypes[t];break;}}
html+='<div style="background:rgba(232,121,249,.1);border:1px solid rgba(232,121,249,.3);border-radius:14px;padding:16px;margin-top:16px;text-align:center;">';
html+='<div style="color:#888;font-size:12px;">당신의 음색 타입</div>';
html+='<div style="color:'+myType.color+';font-size:22px;font-weight:bold;margin:6px 0;">'+myType.name+'</div>';
html+='<div style="color:#aaa;font-size:13px;">'+myType.desc+'</div></div>';
html+='<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:12px;">';
labels.forEach(function(l,i){
html+='<div style="text-align:center;"><div style="color:#888;font-size:11px;">'+l+'</div><div style="color:#e0e0e0;font-size:18px;font-weight:bold;">'+scores[i]+'</div></div>';
});
html+='</div></div>';
m.innerHTML=html;
document.body.appendChild(m);
drawToneRadar(scores,labels);
}

function drawToneRadar(scores,labels){
var c=document.getElementById('v12-tone-canvas');if(!c)return;
var ctx=c.getContext('2d');
var W=c.width,H=c.height;
var cx=W/2,cy=H/2,R=130;
ctx.clearRect(0,0,W,H);
ctx.fillStyle='#1a1028';ctx.fillRect(0,0,W,H);
for(var ring=1;ring<=5;ring++){
ctx.beginPath();ctx.strokeStyle='rgba(168,85,247,'+(ring===5?.3:.1)+')';
for(var i=0;i<=5;i++){
var angle=Math.PI*2*i/5-Math.PI/2;
var r=R*ring/5;
var x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r;
if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
}
ctx.closePath();ctx.stroke();
}
for(var i=0;i<5;i++){
var angle=Math.PI*2*i/5-Math.PI/2;
ctx.beginPath();ctx.moveTo(cx,cy);
ctx.lineTo(cx+Math.cos(angle)*R,cy+Math.sin(angle)*R);
ctx.strokeStyle='rgba(168,85,247,.15)';ctx.stroke();
ctx.fillStyle='#c084fc';ctx.font='12px sans-serif';ctx.textAlign='center';
var lx=cx+Math.cos(angle)*(R+18),ly=cy+Math.sin(angle)*(R+18);
ctx.fillText(labels[i],lx,ly+4);
}
ctx.beginPath();
var grd=ctx.createRadialGradient(cx,cy,0,cx,cy,R);
grd.addColorStop(0,'rgba(232,121,249,.4)');grd.addColorStop(1,'rgba(168,85,247,.1)');
for(var i=0;i<=5;i++){
var idx=i%5;
var angle=Math.PI*2*idx/5-Math.PI/2;
var r=R*scores[idx]/100;
var x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r;
if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
}
ctx.closePath();
ctx.fillStyle=grd;ctx.fill();
ctx.strokeStyle='#e879f9';ctx.lineWidth=2;ctx.stroke();
for(var i=0;i<5;i++){
var angle=Math.PI*2*i/5-Math.PI/2;
var r=R*scores[i]/100;
var x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r;
ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);
ctx.fillStyle='#e879f9';ctx.fill();
ctx.strokeStyle='#fff';ctx.lineWidth=1;ctx.stroke();
}
ctx.fillStyle='#e879f9';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
ctx.fillText('음색 분석 레이더',cx,22);
}

// ===== 10. PROGRESS TRACKER DASHBOARD (Canvas) =====
function showProgressTracker(){
playSfxV12('progress_view');
ls12s('progressViewed',true);
var m=document.createElement('div');m.id='v12-progress-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var songCount=typeof SONGS!=='undefined'?SONGS.length:95;
var achieveCount=typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:78;
var sungCount=0;
try{var s11=localStorage.getItem('sv11-songsSung');if(s11)sungCount=Object.keys(JSON.parse(s11)).length;}catch(e){}
var s12=ls12('songsSung',{});sungCount=Math.max(sungCount,Object.keys(s12).length);
var achieveUnlocked=0;
try{var au=localStorage.getItem('sv11-unlockedAchievements');if(au)achieveUnlocked=JSON.parse(au).length;}catch(e){}
var au12=ls12('unlockedAchievements',[]);achieveUnlocked=Math.max(achieveUnlocked,au12.length);
var academyProg=ls12('academyDone',[]).length;
var theoryProg=ls12('theoryDone',[]).length;
var histLen=0;
try{var h=localStorage.getItem('sv11-history');if(h)histLen=JSON.parse(h).length;}catch(e){}

var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#06b6d4;margin:0;">📈 진도 트래커</h2><button onclick="this.closest(\'#v12-progress-modal\').remove()" style="background:#06b6d4;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v12-progress-canvas" width="480" height="300" style="width:100%;background:#1a1028;border-radius:10px;"></canvas>';
var metrics=[
{label:'곡 마스터',val:sungCount,max:songCount,color:'#a855f7'},
{label:'업적 달성',val:achieveUnlocked,max:achieveCount,color:'#ffd700'},
{label:'아카데미',val:academyProg,max:12,color:'#22c55e'},
{label:'음악이론',val:theoryProg,max:12,color:'#3b82f6'},
{label:'총 부른곡',val:histLen,max:Math.max(histLen,100),color:'#ef4444'}
];
html+='<div style="margin-top:16px;">';
metrics.forEach(function(mt){
var pct=mt.max>0?Math.round(mt.val/mt.max*100):0;
html+='<div style="margin:10px 0;"><div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#ddd;">'+mt.label+'</span><span style="color:'+mt.color+';font-weight:bold;">'+mt.val+' / '+mt.max+' ('+pct+'%)</span></div>';
html+='<div style="background:rgba(255,255,255,.1);height:10px;border-radius:5px;margin-top:4px;overflow:hidden;"><div style="width:'+pct+'%;height:100%;background:'+mt.color+';border-radius:5px;transition:width .5s;"></div></div></div>';
});
html+='</div>';
var totalPct=Math.round((sungCount/songCount*25)+(achieveUnlocked/achieveCount*25)+(academyProg/12*25)+(theoryProg/12*25));
html+='<div style="background:rgba(6,182,212,.1);border:1px solid rgba(6,182,212,.3);border-radius:14px;padding:16px;margin-top:16px;text-align:center;">';
html+='<div style="color:#888;font-size:12px;">종합 완성도</div>';
html+='<div style="color:#06b6d4;font-size:42px;font-weight:bold;">'+totalPct+'%</div>';
var rank=totalPct>=90?'🌟 마스터':totalPct>=70?'💎 전문가':totalPct>=50?'🎯 중급자':totalPct>=30?'📚 학습자':'🌱 입문자';
html+='<div style="color:#e0e0e0;font-size:16px;margin-top:4px;">'+rank+'</div></div>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
drawProgressCanvas(metrics);
}

function drawProgressCanvas(metrics){
var c=document.getElementById('v12-progress-canvas');if(!c)return;
var ctx=c.getContext('2d');
var W=c.width,H=c.height;
ctx.clearRect(0,0,W,H);
ctx.fillStyle='#1a1028';ctx.fillRect(0,0,W,H);
var barW=50,gap=30,startX=(W-(metrics.length*(barW+gap)-gap))/2;
metrics.forEach(function(mt,i){
var x=startX+i*(barW+gap);
var maxH=H-80;
var pct=mt.max>0?mt.val/mt.max:0;
var barH=Math.max(4,maxH*pct);
ctx.fillStyle='rgba(255,255,255,.05)';
ctx.fillRect(x,40,barW,maxH);
var grd=ctx.createLinearGradient(0,40+maxH-barH,0,40+maxH);
grd.addColorStop(0,mt.color);grd.addColorStop(1,mt.color+'66');
ctx.fillStyle=grd;
ctx.fillRect(x,40+maxH-barH,barW,barH);
ctx.strokeStyle=mt.color;ctx.lineWidth=1;
ctx.strokeRect(x,40+maxH-barH,barW,barH);
ctx.fillStyle='#ddd';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
ctx.fillText(Math.round(pct*100)+'%',x+barW/2,35+maxH-barH);
ctx.fillStyle='#888';ctx.font='11px sans-serif';
ctx.fillText(mt.label,x+barW/2,H-15);
});
ctx.fillStyle='#06b6d4';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
ctx.fillText('StarVoice 진도 현황',W/2,22);
}

// ===== 15 NEW QUIZ QUESTIONS (v12: 72→87) =====
var QUIZ_V12=[
{q:'노래에서 두성(Head Voice)은 어느 부분을 이용한 발성인가?',a:['머리 공명','가슴 공명','코 공명','목 공명'],c:0,e:'두성은 머리 윗부분의 공명을 이용한 고음 발성법입니다.'},
{q:'비브라토의 적절한 떨림 속도는?',a:['초당 5~6회','초당 1~2회','초당 10회 이상','초당 3회'],c:0,e:'자연스러운 비브라토는 초당 5~6회 정도의 떨림입니다.'},
{q:'4/4 박자의 의미는?',a:['4분음표 기준 한 마디 4박','4분 동안 4번','4절 4행','4개 음표'],c:0,e:'4분음표를 1박으로 하여 한 마디에 4박이 들어갑니다.'},
{q:'Allegro의 대략적인 BPM 범위는?',a:['120~168','40~60','60~80','200~240'],c:0,e:'Allegro(빠르게)는 대략 BPM 120~168입니다.'},
{q:'C 메이저 코드의 구성음은?',a:['도미솔(C-E-G)','도레미(C-D-E)','도파솔(C-F-G)','레미솔(D-E-G)'],c:0,e:'C 메이저 코드는 C(도), E(미), G(솔)로 구성됩니다.'},
{q:'노래 시 복식호흡에서 들이쉴 때 나오는 부분은?',a:['배','가슴','어깨','목'],c:0,e:'복식호흡은 횡격막을 내려 배가 나오게 합니다.'},
{q:'pp(피아니시모)의 의미는?',a:['매우 여리게','매우 세게','점점 세게','보통 세기'],c:0,e:'pp는 pianissimo, 매우 여리게 연주/노래하라는 뜻입니다.'},
{q:'환성점(파사지오)이란?',a:['흉성→두성 전환 지점','노래 시작점','최고음','최저음'],c:0,e:'환성점은 흉성에서 두성으로 전환되는 음역대입니다.'},
{q:'레가토(Legato)의 의미는?',a:['부드럽게 이어서','짧게 끊어서','강하게','점점 빠르게'],c:0,e:'레가토는 음과 음을 부드럽게 이어서 연주하는 기법입니다.'},
{q:'K-POP 곡에서 Bridge의 역할은?',a:['후렴 전 긴장감 고조','곡의 시작','엔딩','간주'],c:0,e:'브릿지는 보통 마지막 후렴 전에 변화를 주는 구간입니다.'},
{q:'A4(라)의 국제 표준 주파수는?',a:['440Hz','261Hz','523Hz','880Hz'],c:0,e:'A4=440Hz는 국제 표준 음높이(Concert Pitch)입니다.'},
{q:'노래 전 워밍업으로 적절하지 않은 것은?',a:['큰 소리로 고음 지르기','립트릴','허밍 스케일','복식호흡'],c:0,e:'준비 없이 큰 소리로 고음을 내면 성대를 손상시킬 수 있습니다.'},
{q:'듀엣에서 3도 화음이란?',a:['주선율보다 3도 위의 음','같은 음','5도 아래 음','옥타브 위'],c:0,e:'3도 화음은 멜로디 음에서 3도(4반음) 위의 음을 부르는 것입니다.'},
{q:'D.C. al Fine의 의미는?',a:['처음부터 Fine까지 반복','다음 곡으로','속도 올리기','한 옥타브 위'],c:0,e:'Da Capo al Fine: 곡의 처음부터 Fine 표시까지 반복합니다.'},
{q:'StarVoice v12에 추가된 총 곡 수는?',a:['95곡','85곡','100곡','75곡'],c:0,e:'v12에서 10곡이 추가되어 총 95곡이 되었습니다.'}
];

if(typeof QUIZ_QUESTIONS!=='undefined'){QUIZ_V12.forEach(function(q){QUIZ_QUESTIONS.push(q);});}
else if(typeof quizQuestions!=='undefined'){QUIZ_V12.forEach(function(q){quizQuestions.push(q);});}

// ===== KEYBOARD SHORTCUTS v12 =====
function setupKeyboardV12(){
document.addEventListener('keydown',function(e){
if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
if(!e.shiftKey)return;
switch(e.key.toUpperCase()){
case 'A':e.preventDefault();showVocalAcademy();break;
case 'D':e.preventDefault();showDuetHarmony();break;
case 'L':e.preventDefault();showLyricsGame();break;
case 'R':e.preventDefault();showPerformanceReview();break;
case 'T':e.preventDefault();showMusicTheory();break;
case 'X':e.preventDefault();showSpeedControl();break;
case 'W':e.preventDefault();showWarmupRoutines();break;
case 'K':e.preventDefault();showChallengeRankings();break;
}
});
}

// ===== INJECT CSS v12 =====
function injectV12CSS(){
var style=document.createElement('style');
style.textContent='.v12-quick-btn{background:linear-gradient(135deg,rgba(6,182,212,.2),rgba(59,130,246,.2));color:#67e8f9;border:1px solid rgba(6,182,212,.3);border-radius:10px;padding:8px 12px;cursor:pointer;font-size:12px;transition:all .2s;white-space:nowrap;}.v12-quick-btn:hover{background:linear-gradient(135deg,rgba(6,182,212,.4),rgba(59,130,246,.4));transform:scale(1.05);}.v12-quick-bar{display:flex;flex-wrap:wrap;gap:6px;padding:8px;justify-content:center;}';
document.head.appendChild(style);
}

// ===== INJECT UI v12 =====
function injectV12UI(){
var actions=[
{label:'🎓 아카데미',fn:'showVocalAcademy'},
{label:'🎶 듀엣',fn:'showDuetHarmony'},
{label:'📝 가사외우기',fn:'showLyricsGame'},
{label:'📊 공연리뷰',fn:'showPerformanceReview'},
{label:'🎼 음악이론',fn:'showMusicTheory'},
{label:'⚡ 속도조절',fn:'showSpeedControl'},
{label:'🔥 워밍업',fn:'showWarmupRoutines'},
{label:'🏆 챌린지',fn:'showChallengeRankings'},
{label:'🎨 음색분석',fn:'showToneAnalyzer'},
{label:'📈 진도',fn:'showProgressTracker'}
];
var bar=document.createElement('div');
bar.className='v12-quick-bar';
bar.id='v12-quick-bar';
actions.forEach(function(a){
var btn=document.createElement('button');
btn.className='v12-quick-btn';
btn.textContent=a.label;
btn.onclick=function(){if(typeof window[a.fn]==='function')window[a.fn]();};
bar.appendChild(btn);
});
var v11bar=document.getElementById('v11-quick-bar');
if(v11bar){v11bar.parentNode.insertBefore(bar,v11bar.nextSibling);}
else{
var target=document.querySelector('.song-list')||document.querySelector('#song-list')||document.querySelector('.controls')||document.querySelector('main');
if(target){target.parentNode.insertBefore(bar,target);}
else{document.body.appendChild(bar);}
}
}

// ===== SEO UPDATE v12 =====
function updateSEOv12(){
document.title='StarVoice v12 - AI 노래방';
var desc=document.querySelector('meta[name="description"]');
if(desc)desc.setAttribute('content','StarVoice v12: 95곡 AI 음정 분석 K-노래방 PWA. 보컬아카데미12강/듀엣하모니/가사외우기/공연리뷰/음악이론12강/속도조절/워밍업루틴6종/챌린지랭킹/음색분석/진도트래커/78업적');
var ogDesc=document.querySelector('meta[property="og:description"]');
if(ogDesc)ogDesc.setAttribute('content','95곡 AI 음정 분석 노래방. 보컬아카데미, 듀엣, 가사외우기, 공연리뷰, 음악이론, 속도조절, 워밍업, 챌린지, 음색분석, 78업적');
var ogTitle=document.querySelector('meta[property="og:title"]');
if(ogTitle)ogTitle.setAttribute('content','StarVoice v12 - AI 노래방');
var twTitle=document.querySelector('meta[name="twitter:title"]');
if(twTitle)twTitle.setAttribute('content','StarVoice v12 - AI 노래방');
var twDesc=document.querySelector('meta[name="twitter:description"]');
if(twDesc)twDesc.setAttribute('content','95곡 AI 음정 분석 K-노래방 PWA. 아카데미+듀엣+가사+리뷰+이론+속도+워밍업+챌린지+음색+진도+78업적');
}

// ===== ACHIEVEMENT CHECKER v12 =====
function checkV12Achievements(){
if(typeof ACHIEVEMENTS==='undefined')return;
NEW_ACHIEVE_V12.forEach(function(a){
if(a.check&&a.check()){
var unlocked=ls12('unlockedAchievements',[]);
if(unlocked.indexOf(a.id)===-1){
unlocked.push(a.id);
ls12s('unlockedAchievements',unlocked);
playSfxV12('v12_achieve');
}
}
});
}

// ===== INIT v12 =====
function initV12(){
injectV12CSS();
injectV12UI();
updateSEOv12();
setupKeyboardV12();

setInterval(checkV12Achievements,15000);

if(typeof renderList==='function')renderList();

console.log('[v12] patch loaded — Songs:',
typeof SONGS!=='undefined'?SONGS.length:'?',
'Achievements:',typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:'?');
}

window.showVocalAcademy=showVocalAcademy;
window.showDuetHarmony=showDuetHarmony;
window.showLyricsGame=showLyricsGame;
window.showPerformanceReview=showPerformanceReview;
window.showMusicTheory=showMusicTheory;
window.showSpeedControl=showSpeedControl;
window.showWarmupRoutines=showWarmupRoutines;
window.showChallengeRankings=showChallengeRankings;
window.showToneAnalyzer=showToneAnalyzer;
window.showProgressTracker=showProgressTracker;

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initV12);}
else{setTimeout(initV12,500);}

})();
