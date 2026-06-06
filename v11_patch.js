/* StarVoice v11 Patch — Self-contained IIFE module injected via SW
 * 10 songs(75→85), song history, vocal range map Canvas, AI song recommender,
 * recording studio w/ waveform Canvas, breathing exercises 8 types, pitch graph replay Canvas,
 * vocal effects processor, song favorites & collections, performance calendar, party mode,
 * quiz +15(57→72), achievements +12(54→66), SFX 14, keyboard +8
 */
(function(){
'use strict';
if(window.__v11KaraokeLoaded) return;
window.__v11KaraokeLoaded=true;

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Ab3=207.65,Bb3=233.08,Eb4=311.13,Bb4=466.16,Db4=277.18,Ab4=415.30;
var Gb4=369.99,Db5=554.37,Eb5=622.25,Fs4=369.99,Cs5=554.37;

function ls11(k,d){try{var v=localStorage.getItem('sv11-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls11s(k,v){try{localStorage.setItem('sv11-'+k,JSON.stringify(v));}catch(e){}}

// ===== 10 NEW SONGS (76~85) =====
var NEW_SONGS_V11=[
{id:76,cat:"동요",title:"산토끼",icon:"🐰",diff:"쉬움",dc:"diff-easy",bpm:120,
melody:[
{t:0,d:.4,f:G4,s:"산"},{t:.4,d:.4,f:E4,s:"토"},{t:.8,d:.4,f:G4,s:"끼"},
{t:1.2,d:.4,f:E4,s:"토"},{t:1.6,d:.8,f:G4,s:"끼"},
{t:2.4,d:.4,f:A4,s:"꼴"},{t:2.8,d:.4,f:A4,s:"충"},
{t:3.2,d:.4,f:G4,s:"꼴"},{t:3.6,d:.8,f:E4,s:"충"},
{t:4.4,d:.4,f:D4,s:"어"},{t:4.8,d:.4,f:E4,s:"디"},
{t:5.2,d:.4,f:G4,s:"가"},{t:5.6,d:.8,f:E4,s:"나"},
{t:6.4,d:.4,f:D4,s:"깔"},{t:6.8,d:.4,f:E4,s:"충"},
{t:7.2,d:.4,f:D4,s:"깔"},{t:7.6,d:.8,f:C4,s:"충"}
],lyrics:[{t:0,tx:"산토끼 토끼야"},{t:2.4,tx:"꼴충꼴충"},{t:4.4,tx:"어디가나"},{t:6.4,tx:"깔충깔충"}],dur:9},

{id:77,cat:"동요",title:"반달",icon:"🌙",diff:"쉬움",dc:"diff-easy",bpm:96,
melody:[
{t:0,d:.6,f:G4,s:"푸"},{t:.6,d:.6,f:G4,s:"른"},
{t:1.2,d:1.2,f:A4,s:"하"},{t:2.4,d:.6,f:G4,s:"늘"},
{t:3,d:.6,f:G4,s:"넓"},{t:3.6,d:.6,f:E4,s:"은"},
{t:4.2,d:1.8,f:D4,s:"하"},{t:6,d:.6,f:D4,s:"늘"},
{t:6.6,d:.6,f:E4,s:"에"},{t:7.2,d:.6,f:G4,s:"떠"},
{t:7.8,d:.6,f:A4,s:"있"},{t:8.4,d:.6,f:G4,s:"는"},
{t:9,d:1.8,f:E4,s:"반"},{t:10.8,d:1.2,f:D4,s:"달"}
],lyrics:[{t:0,tx:"푸른 하늘"},{t:2.4,tx:"넓은 하늘"},{t:6,tx:"에 떠있는"},{t:9,tx:"반달"}],dur:12},

{id:78,cat:"세계명곡",title:"저 달 속에",icon:"🌝",diff:"보통",dc:"diff-medium",bpm:104,
melody:[
{t:0,d:.5,f:C4,s:"Fly"},{t:.5,d:.5,f:D4,s:"me"},
{t:1,d:.5,f:E4,s:"to"},{t:1.5,d:.5,f:F4,s:"the"},
{t:2,d:1.5,f:A4,s:"moon"},{t:3.5,d:.5,f:G4,s:"Let"},
{t:4,d:.5,f:F4,s:"me"},{t:4.5,d:.5,f:E4,s:"play"},
{t:5,d:.5,f:D4,s:"a"},{t:5.5,d:.5,f:C4,s:"mong"},
{t:6,d:.5,f:D4,s:"the"},{t:6.5,d:1.5,f:E4,s:"stars"},
{t:8,d:.5,f:A3,s:"Let"},{t:8.5,d:.5,f:C4,s:"me"},
{t:9,d:.5,f:D4,s:"see"},{t:9.5,d:.5,f:E4,s:"what"},
{t:10,d:.5,f:G4,s:"spring"},{t:10.5,d:.5,f:F4,s:"is"},
{t:11,d:.5,f:E4,s:"like"},{t:11.5,d:.5,f:D4,s:"on"},
{t:12,d:1.5,f:C4,s:"Ju"},{t:13.5,d:1,f:D4,s:"pi"},{t:14.5,d:1,f:E4,s:"ter"}
],lyrics:[{t:0,tx:"Fly me to the moon"},{t:3.5,tx:"Let me play among the stars"},{t:8,tx:"Let me see what spring is like"},{t:12,tx:"on Jupiter"}],dur:16},

{id:79,cat:"가요/민요",title:"아리랑 변주곡",icon:"🎵",diff:"보통",dc:"diff-medium",bpm:100,
melody:[
{t:0,d:.6,f:E4,s:"아"},{t:.6,d:.6,f:A4,s:"리"},
{t:1.2,d:1.2,f:A4,s:"랑"},
{t:2.4,d:.6,f:A4,s:"아"},{t:3,d:.6,f:B4,s:"리"},
{t:3.6,d:1.2,f:A4,s:"랑"},
{t:4.8,d:.6,f:A4,s:"아"},{t:5.4,d:.6,f:E4,s:"라"},
{t:6,d:.6,f:A4,s:"리"},{t:6.6,d:.6,f:B4,s:"가"},
{t:7.2,d:1.8,f:C5,s:"나"},
{t:9,d:.6,f:B4,s:"나"},{t:9.6,d:.6,f:A4,s:"를"},
{t:10.2,d:.6,f:E4,s:"버"},{t:10.8,d:.6,f:A4,s:"리"},
{t:11.4,d:.6,f:G4,s:"고"},{t:12,d:1.8,f:E4,s:"가"}
],lyrics:[{t:0,tx:"아리랑 아리랑"},{t:4.8,tx:"아라리가 나"},{t:9,tx:"나를 버리고 가"}],dur:14},

{id:80,cat:"세계명곡",title:"우클렐레",icon:"🎸",diff:"쉬움",dc:"diff-easy",bpm:110,
melody:[
{t:0,d:.5,f:C4,s:"My"},{t:.5,d:.5,f:C4,s:"dog"},
{t:1,d:.5,f:C4,s:"has"},{t:1.5,d:.5,f:E4,s:"fleas"},
{t:2,d:.5,f:C4,s:"My"},{t:2.5,d:.5,f:E4,s:"dog"},
{t:3,d:.5,f:G4,s:"has"},{t:3.5,d:1,f:G4,s:"fleas"},
{t:4.5,d:.5,f:A4,s:"Oh"},{t:5,d:.5,f:G4,s:"my"},
{t:5.5,d:.5,f:E4,s:"dar"},{t:6,d:.5,f:C4,s:"ling"},
{t:6.5,d:.5,f:D4,s:"Cle"},{t:7,d:.5,f:E4,s:"men"},
{t:7.5,d:1,f:D4,s:"tine"}
],lyrics:[{t:0,tx:"Oh my darling"},{t:2,tx:"Oh my darling"},{t:4.5,tx:"Oh my darling"},{t:6.5,tx:"Clementine"}],dur:9},

{id:81,cat:"가요/민요",title:"도라지 타령",icon:"🌾",diff:"보통",dc:"diff-medium",bpm:116,
melody:[
{t:0,d:.4,f:G4,s:"도"},{t:.4,d:.4,f:A4,s:"라"},
{t:.8,d:.4,f:B4,s:"지"},{t:1.2,d:.8,f:B4,s:"는"},
{t:2,d:.4,f:A4,s:"타"},{t:2.4,d:.4,f:G4,s:"령"},
{t:2.8,d:.4,f:A4,s:"이"},{t:3.2,d:.8,f:B4,s:"요"},
{t:4,d:.4,f:D5,s:"쓸"},{t:4.4,d:.4,f:B4,s:"쓸"},
{t:4.8,d:.4,f:A4,s:"한"},{t:5.2,d:.8,f:G4,s:"바"},
{t:6,d:.4,f:A4,s:"람"},{t:6.4,d:.4,f:B4,s:"불"},
{t:6.8,d:.4,f:A4,s:"어"},{t:7.2,d:1.2,f:G4,s:"오"}
],lyrics:[{t:0,tx:"도라지는 타령이요"},{t:4,tx:"쓸쓸한 바람"},{t:6,tx:"불어오"}],dur:9},

{id:82,cat:"세계명곡",title:"비발디",icon:"🎶",diff:"어려움",dc:"diff-hard",bpm:76,
melody:[
{t:0,d:1,f:E4,s:"La"},{t:1,d:.5,f:E4,s:"la"},
{t:1.5,d:1,f:F4,s:"la"},{t:2.5,d:1.5,f:E4,s:"la"},
{t:4,d:1,f:E4,s:"La"},{t:5,d:.5,f:E4,s:"la"},
{t:5.5,d:1,f:F4,s:"la"},{t:6.5,d:1.5,f:E4,s:"la"},
{t:8,d:1,f:E4,s:"La"},{t:9,d:1,f:G4,s:"la"},
{t:10,d:1,f:A4,s:"la"},{t:11,d:1.5,f:B4,s:"la"},
{t:12.5,d:1,f:A4,s:"la"},{t:13.5,d:1,f:G4,s:"la"},
{t:14.5,d:2,f:E4,s:"la"}
],lyrics:[{t:0,tx:"La la la la"},{t:4,tx:"La la la la"},{t:8,tx:"La la la la la"},{t:12.5,tx:"la la la"}],dur:17},

{id:83,cat:"동요",title:"학교 종이 똑똑똑",icon:"🔔",diff:"쉬움",dc:"diff-easy",bpm:120,
melody:[
{t:0,d:.4,f:G4,s:"학"},{t:.4,d:.4,f:G4,s:"교"},
{t:.8,d:.4,f:A4,s:"종"},{t:1.2,d:.4,f:A4,s:"이"},
{t:1.6,d:.8,f:G4,s:"똑"},{t:2.4,d:.4,f:E4,s:"똑"},
{t:2.8,d:.8,f:G4,s:"똑"},
{t:3.6,d:.4,f:G4,s:"어"},{t:4,d:.4,f:G4,s:"서"},
{t:4.4,d:.4,f:A4,s:"모"},{t:4.8,d:.4,f:A4,s:"이"},
{t:5.2,d:.4,f:G4,s:"자"},{t:5.6,d:.4,f:E4,s:"선"},
{t:6,d:.4,f:E4,s:"생"},{t:6.4,d:.4,f:D4,s:"님"},
{t:6.8,d:1.2,f:C4,s:"께"}
],lyrics:[{t:0,tx:"학교 종이 똑똑똑"},{t:3.6,tx:"어서 모이자"},{t:5.6,tx:"선생님께"}],dur:8},

{id:84,cat:"세계명곡",title:"마이 보니 라이즈",icon:"☀️",diff:"보통",dc:"diff-medium",bpm:100,
melody:[
{t:0,d:.5,f:C4,s:"My"},{t:.5,d:.5,f:E4,s:"Bon"},
{t:1,d:.5,f:G4,s:"nie"},{t:1.5,d:.5,f:A4,s:"lies"},
{t:2,d:.5,f:G4,s:"o"},{t:2.5,d:.5,f:E4,s:"ver"},
{t:3,d:.5,f:D4,s:"the"},{t:3.5,d:1,f:E4,s:"o"},
{t:4.5,d:1,f:C4,s:"cean"},
{t:5.5,d:.5,f:C4,s:"My"},{t:6,d:.5,f:E4,s:"Bon"},
{t:6.5,d:.5,f:G4,s:"nie"},{t:7,d:.5,f:A4,s:"lies"},
{t:7.5,d:.5,f:G4,s:"o"},{t:8,d:.5,f:E4,s:"ver"},
{t:8.5,d:.5,f:D4,s:"the"},{t:9,d:1.5,f:D4,s:"sea"},
{t:10.5,d:.5,f:G4,s:"Bring"},{t:11,d:.5,f:A4,s:"back"},
{t:11.5,d:.5,f:B4,s:"bring"},{t:12,d:.5,f:A4,s:"back"},
{t:12.5,d:1,f:G4,s:"oh"},{t:13.5,d:.5,f:E4,s:"bring"},
{t:14,d:.5,f:D4,s:"back"},{t:14.5,d:.5,f:E4,s:"my"},
{t:15,d:.5,f:G4,s:"Bon"},{t:15.5,d:.5,f:E4,s:"nie"},
{t:16,d:.5,f:D4,s:"to"},{t:16.5,d:1.5,f:C4,s:"me"}
],lyrics:[{t:0,tx:"My Bonnie lies over the ocean"},{t:5.5,tx:"My Bonnie lies over the sea"},{t:10.5,tx:"Bring back, bring back"},{t:14,tx:"my Bonnie to me"}],dur:18},

{id:85,cat:"가요/민요",title:"콩 세마치",icon:"🌻",diff:"보통",dc:"diff-medium",bpm:100,
melody:[
{t:0,d:.6,f:E4,s:"콩"},{t:.6,d:.6,f:G4,s:"세"},
{t:1.2,d:1.2,f:A4,s:"마"},{t:2.4,d:.6,f:G4,s:"치"},
{t:3,d:.6,f:E4,s:"꽃"},{t:3.6,d:.6,f:D4,s:"피"},
{t:4.2,d:1.2,f:C4,s:"는"},
{t:5.4,d:.6,f:D4,s:"마"},{t:6,d:.6,f:E4,s:"당"},
{t:6.6,d:.6,f:G4,s:"에"},{t:7.2,d:.6,f:E4,s:"콩"},
{t:7.8,d:.6,f:D4,s:"세"},{t:8.4,d:1.2,f:C4,s:"마"},
{t:9.6,d:.6,f:D4,s:"치"},{t:10.2,d:.6,f:E4,s:"꽃"},
{t:10.8,d:.6,f:G4,s:"피"},{t:11.4,d:1.8,f:A4,s:"는"}
],lyrics:[{t:0,tx:"콩 세마치"},{t:3,tx:"꽃피는"},{t:5.4,tx:"마당에 콩세마치"},{t:10.2,tx:"꽃피는"}],dur:13}
];

if(typeof SONGS!=='undefined'){NEW_SONGS_V11.forEach(function(s){if(!SONGS.find(function(x){return x.id===s.id;}))SONGS.push(s);});}

// ===== WEB AUDIO SFX ENGINE v11 (14 sounds) =====
var sfxV11Types={
history_open:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(523,ac.currentTime);o.frequency.linearRampToValueAtTime(784,ac.currentTime+.15);g.gain.setValueAtTime(.2,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.2);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.2);},
range_map:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.setValueAtTime(330,ac.currentTime);o.frequency.linearRampToValueAtTime(660,ac.currentTime+.3);g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.35);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.35);},
recommend:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(440,ac.currentTime);o.frequency.setValueAtTime(554,ac.currentTime+.1);o.frequency.setValueAtTime(659,ac.currentTime+.2);g.gain.setValueAtTime(.2,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.3);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.3);},
rec_start:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(880,ac.currentTime);g.gain.setValueAtTime(.25,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.15);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.15);},
rec_stop:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(440,ac.currentTime);g.gain.setValueAtTime(.25,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.15);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.15);},
breath:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(262,ac.currentTime);o.frequency.linearRampToValueAtTime(392,ac.currentTime+.5);g.gain.setValueAtTime(.1,ac.currentTime);g.gain.linearRampToValueAtTime(.2,ac.currentTime+.25);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.5);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.5);},
pitch_graph:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.setValueAtTime(392,ac.currentTime);o.frequency.linearRampToValueAtTime(523,ac.currentTime+.2);g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.25);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.25);},
effects:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sawtooth';o.frequency.setValueAtTime(220,ac.currentTime);o.frequency.linearRampToValueAtTime(440,ac.currentTime+.2);g.gain.setValueAtTime(.1,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.25);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.25);},
fav_add:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(523,ac.currentTime);o.frequency.setValueAtTime(659,ac.currentTime+.08);o.frequency.setValueAtTime(784,ac.currentTime+.16);g.gain.setValueAtTime(.2,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.25);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.25);},
fav_remove:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(784,ac.currentTime);o.frequency.setValueAtTime(523,ac.currentTime+.15);g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.2);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.2);},
calendar:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(349,ac.currentTime);o.frequency.setValueAtTime(440,ac.currentTime+.1);o.frequency.setValueAtTime(523,ac.currentTime+.2);g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.3);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.3);},
party_start:function(ac){for(var i=0;i<3;i++){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime([523,659,784][i],ac.currentTime+i*.1);g.gain.setValueAtTime(.15,ac.currentTime+i*.1);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.1+.2);o.connect(g);g.connect(ac.destination);o.start(ac.currentTime+i*.1);o.stop(ac.currentTime+i*.1+.2);}},
party_turn:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='square';o.frequency.setValueAtTime(660,ac.currentTime);g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.1);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.1);},
v11_achieve:function(ac){for(var i=0;i<4;i++){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime([523,659,784,1047][i],ac.currentTime+i*.12);g.gain.setValueAtTime(.18,ac.currentTime+i*.12);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.12+.2);o.connect(g);g.connect(ac.destination);o.start(ac.currentTime+i*.12);o.stop(ac.currentTime+i*.12+.2);}}
};

function playSfxV11(type){
try{var ac=new(window.AudioContext||window.webkitAudioContext)();if(sfxV11Types[type])sfxV11Types[type](ac);setTimeout(function(){ac.close();},2000);}catch(e){}
}

// ===== 12 NEW ACHIEVEMENTS (v11: 54→66) =====
var NEW_ACHIEVE_V11=[
{id:'songs_85',title:'🎵 85곡 마스터',desc:'85곡 모두 부르기',check:function(){return ls11('songsSung',{})&&Object.keys(ls11('songsSung',{})).length>=85;}},
{id:'history_10',title:'📜 연습벌레',desc:'노래 10곡 이상 기록',check:function(){return ls11('history',[]).length>=10;}},
{id:'range_mapped',title:'🌐 음역 탐험가',desc:'음역 맵 확인',check:function(){return ls11('rangeMapViewed',false);}},
{id:'recommend_used',title:'🤖 AI 추천 사용자',desc:'추천 기능 사용',check:function(){return ls11('recommendUsed',false);}},
{id:'recorded_5',title:'🎤 녹음 수집가',desc:'녹음 5회 완료',check:function(){return ls11('recordings',[]).length>=5;}},
{id:'breath_master',title:'💨 호흡 마스터',desc:'호흡 운동 전체 완료',check:function(){return ls11('breathDone',[]).length>=8;}},
{id:'pitch_analyzer',title:'📈 피치 분석가',desc:'피치 그래프 5회 확인',check:function(){return(ls11('pitchGraphViews',0))>=5;}},
{id:'effects_explorer',title:'🏛️ 이펙트 탐험가',desc:'보컬 이펙트 적용',check:function(){return ls11('effectsUsed',false);}},
{id:'fav_collector',title:'⭐ 즐겨찾기 수집가',desc:'즐겨찾기 10곡 등록',check:function(){return ls11('favorites',[]).length>=10;}},
{id:'calendar_streak_14',title:'🔥 2주 연속 가수',desc:'14일 연속 노래 부르기',check:function(){return(ls11('maxStreak',0))>=14;}},
{id:'party_host',title:'🎉 파티 호스트',desc:'파티 모드 3회 완료',check:function(){return(ls11('partyCount',0))>=3;}},
{id:'v11_explorer',title:'🚀 v11 탐험가',desc:'v11 신기능 5개 이상 사용',check:function(){var c=0;if(ls11('history',[]).length>0)c++;if(ls11('rangeMapViewed',false))c++;if(ls11('recommendUsed',false))c++;if(ls11('recordings',[]).length>0)c++;if(ls11('breathDone',[]).length>0)c++;if(ls11('pitchGraphViews',0)>0)c++;if(ls11('effectsUsed',false))c++;if(ls11('favorites',[]).length>0)c++;if(ls11('calendarViewed',false))c++;if(ls11('partyCount',0)>0)c++;return c>=5;}}
];

if(typeof ACHIEVEMENTS!=='undefined'){NEW_ACHIEVE_V11.forEach(function(a){if(!ACHIEVEMENTS.find(function(x){return x.id===a.id;}))ACHIEVEMENTS.push(a);});}

// ===== 1. SONG HISTORY & RECENTLY PLAYED =====
function showSongHistory(){
playSfxV11('history_open');
var hist=ls11('history',[]);
var m=document.createElement('div');m.id='v11-history-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">📜 노래 히스토리</h2><button onclick="this.closest(\'#v11-history-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
if(hist.length===0){html+='<p style="color:#888;text-align:center;">아직 부른 노래가 없습니다.</p>';}
else{
html+='<p style="color:#888;margin-bottom:12px;">총 '+hist.length+'곡 기록</p>';
hist.slice().reverse().forEach(function(h,i){
var dt=new Date(h.ts);
var timeStr=(dt.getMonth()+1)+'/'+dt.getDate()+' '+dt.getHours()+':'+String(dt.getMinutes()).padStart(2,'0');
var scoreColor=h.score>=90?'#22c55e':h.score>=70?'#eab308':'#ef4444';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:12px;margin-bottom:8px;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="font-size:20px;">'+h.icon+'</span> <span style="color:#e0e0e0;font-weight:bold;">'+h.title+'</span></div>';
html+='<span style="color:'+scoreColor+';font-weight:bold;font-size:18px;">'+h.score+'점</span></div>';
html+='<div style="color:#888;font-size:12px;margin-top:4px;">'+timeStr+' · '+h.diff+'</div>';
html+='</div>';
});
html+='<button onclick="if(confirm(\'히스토리를 초기화하시겠습니까?\')){localStorage.removeItem(\'sv11-history\');this.closest(\'#v11-history-modal\').remove();}" style="background:rgba(239,68,68,.2);color:#ef4444;border:1px solid #ef4444;border-radius:8px;padding:8px 16px;cursor:pointer;width:100%;margin-top:8px;">히스토리 초기화</button>';
}
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

function recordSongHistory(songId,score){
if(typeof SONGS==='undefined')return;
var song=SONGS.find(function(s){return s.id===songId;});
if(!song)return;
var hist=ls11('history',[]);
hist.push({id:songId,title:song.title,icon:song.icon,diff:song.diff,score:score||0,ts:Date.now()});
if(hist.length>200)hist=hist.slice(-200);
ls11s('history',hist);
var sung=ls11('songsSung',{});
sung[songId]=true;
ls11s('songsSung',sung);
}

// ===== 2. VOCAL RANGE MAP (Canvas) =====
function showVocalRangeMap(){
playSfxV11('range_map');
ls11s('rangeMapViewed',true);
var m=document.createElement('div');m.id='v11-range-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">🌐 보컬 음역 맵</h2><button onclick="this.closest(\'#v11-range-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v11-range-canvas" width="480" height="300" style="width:100%;background:#1a1028;border-radius:10px;"></canvas>';
var rangeData=ls11('vocalRange',{low:null,high:null});
var noteNames=['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5','C6'];
html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;">';
html+='<div style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:12px;">최저음</div><div style="color:#22c55e;font-size:24px;font-weight:bold;">'+(rangeData.low||'--')+'</div></div>';
html+='<div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:12px;">최고음</div><div style="color:#ef4444;font-size:24px;font-weight:bold;">'+(rangeData.high||'--')+'</div></div></div>';
html+='<div style="margin-top:12px;">';
html+='<h3 style="color:#c084fc;margin:8px 0;">파사지오 존</h3>';
html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">';
html+='<div style="background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.3);border-radius:8px;padding:8px;text-align:center;"><div style="color:#3b82f6;font-size:12px;">흑성</div><div style="color:#e0e0e0;font-size:11px;">C2~E4</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:8px;padding:8px;text-align:center;"><div style="color:#a855f7;font-size:12px;">환성점</div><div style="color:#e0e0e0;font-size:11px;">E4~G4</div></div>';
html+='<div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:8px;padding:8px;text-align:center;"><div style="color:#ef4444;font-size:12px;">두성</div><div style="color:#e0e0e0;font-size:11px;">G4~C6</div></div>';
html+='</div></div>';
html+='<button onclick="startRangeTest()" style="background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;border:none;border-radius:10px;padding:12px;width:100%;margin-top:12px;cursor:pointer;font-size:14px;">🎤 음역 테스트 시작</button>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
drawRangeCanvas(rangeData);
}

function drawRangeCanvas(rd){
var c=document.getElementById('v11-range-canvas');if(!c)return;
var ctx=c.getContext('2d');
var W=c.width,H=c.height;
ctx.clearRect(0,0,W,H);
var notes=['C2','C3','C4','C5','C6'];
var freqs=[65.41,130.81,261.63,523.25,1046.5];
ctx.strokeStyle='rgba(168,85,247,.2)';ctx.lineWidth=1;
for(var i=0;i<notes.length;i++){
var x=40+i*(W-60)/(notes.length-1);
ctx.beginPath();ctx.moveTo(x,30);ctx.lineTo(x,H-30);ctx.stroke();
ctx.fillStyle='#888';ctx.font='11px sans-serif';ctx.textAlign='center';
ctx.fillText(notes[i],x,H-12);
}
ctx.fillStyle='rgba(59,130,246,.15)';ctx.fillRect(40,50,(W-60)*0.5,40);
ctx.fillStyle='rgba(168,85,247,.15)';ctx.fillRect(40+(W-60)*0.5,50,(W-60)*0.08,40);
ctx.fillStyle='rgba(239,68,68,.15)';ctx.fillRect(40+(W-60)*0.58,50,(W-60)*0.42,40);
ctx.fillStyle='#3b82f6';ctx.font='10px sans-serif';ctx.textAlign='center';
ctx.fillText('흑성',40+(W-60)*0.25,74);
ctx.fillStyle='#a855f7';ctx.fillText('환성점',40+(W-60)*0.54,74);
ctx.fillStyle='#ef4444';ctx.fillText('두성',40+(W-60)*0.79,74);
if(rd.low&&rd.high){
var noteToIdx=function(n){var ns=['C','D','E','F','G','A','B'];var m2=n.match(/([A-G]#?)(\d)/);if(!m2)return 0;return ns.indexOf(m2[1])*1+parseInt(m2[2])*7;};
var lowIdx=noteToIdx(rd.low),highIdx=noteToIdx(rd.high);
var totalRange=7*5;
var lx=40+(lowIdx/totalRange)*(W-60);
var hx=40+(highIdx/totalRange)*(W-60);
var grd=ctx.createLinearGradient(lx,0,hx,0);
grd.addColorStop(0,'rgba(34,197,94,.5)');grd.addColorStop(.5,'rgba(168,85,247,.5)');grd.addColorStop(1,'rgba(239,68,68,.5)');
ctx.fillStyle=grd;ctx.fillRect(lx,110,hx-lx,50);
ctx.strokeStyle='#22c55e';ctx.lineWidth=2;ctx.strokeRect(lx,110,hx-lx,50);
ctx.fillStyle='#fff';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
ctx.fillText('나의 음역: '+rd.low+' ~ '+rd.high,(lx+hx)/2,140);
}else{
ctx.fillStyle='#666';ctx.font='13px sans-serif';ctx.textAlign='center';
ctx.fillText('음역 테스트를 실행해보세요!',W/2,140);
}
var songRanges=[];
if(typeof SONGS!=='undefined'){
SONGS.forEach(function(s){
var low=Infinity,high=0;
s.melody.forEach(function(n){if(n.f<low)low=n.f;if(n.f>high)high=n.f;});
songRanges.push({title:s.title,low:low,high:high});
});
}
ctx.fillStyle='#888';ctx.font='11px sans-serif';ctx.textAlign='left';
ctx.fillText('곡별 음역 분포',10,195);
var maxF=1200,minF=60;
songRanges.slice(0,10).forEach(function(sr,i){
var y=210+i*8;
var lx2=40+((sr.low-minF)/(maxF-minF))*(W-60);
var hx2=40+((sr.high-minF)/(maxF-minF))*(W-60);
ctx.fillStyle='rgba(168,85,247,.4)';
ctx.fillRect(lx2,y,Math.max(hx2-lx2,2),5);
});
}

function startRangeTest(){
var existing=document.getElementById('v11-range-modal');if(existing)existing.remove();
if(typeof showRangeTest==='function'){showRangeTest();}
else{alert('노래방에서 음역 테스트를 실행해주세요.');}
}

// ===== 3. AI SONG RECOMMENDATION ENGINE =====
function showRecommendations(){
playSfxV11('recommend');
ls11s('recommendUsed',true);
var m=document.createElement('div');m.id='v11-recommend-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">🤖 AI 추천</h2><button onclick="this.closest(\'#v11-recommend-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
if(typeof SONGS==='undefined'){html+='<p style="color:#888;">노래 데이터를 불러올 수 없습니다.</p>';m.innerHTML=html+'</div>';document.body.appendChild(m);return;}
var hist=ls11('history',[]);
var sung=ls11('songsSung',{});
var favCats={};
hist.forEach(function(h){
var song=SONGS.find(function(s){return s.id===h.id;});
if(song){favCats[song.cat]=(favCats[song.cat]||0)+1;}
});
var topCat=null,topCount=0;
Object.keys(favCats).forEach(function(c){if(favCats[c]>topCount){topCat=c;topCount=favCats[c];}});
var avgScore=0;
if(hist.length>0){hist.forEach(function(h){avgScore+=h.score;});avgScore=Math.round(avgScore/hist.length);}
var recommendations=[];
var unsung=SONGS.filter(function(s){return!sung[s.id];});
if(topCat){
var catSongs=unsung.filter(function(s){return s.cat===topCat;});
catSongs.forEach(function(s){recommendations.push({song:s,reason:'선호 장르: '+topCat,score:90});});
}
if(avgScore>=80){
unsung.filter(function(s){return s.dc==='diff-hard';}).forEach(function(s){
if(!recommendations.find(function(r){return r.song.id===s.id;}))
recommendations.push({song:s,reason:'도전! 평균 '+avgScore+'점',score:85});
});
}else{
unsung.filter(function(s){return s.dc==='diff-easy';}).forEach(function(s){
if(!recommendations.find(function(r){return r.song.id===s.id;}))
recommendations.push({song:s,reason:'쉽게 시작',score:80});
});
}
unsung.forEach(function(s){
if(!recommendations.find(function(r){return r.song.id===s.id;}))
recommendations.push({song:s,reason:'새로운 곡',score:70});
});
recommendations.sort(function(a,b){return b.score-a.score;});
recommendations=recommendations.slice(0,8);
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:12px;margin-bottom:12px;">';
html+='<div style="color:#c084fc;font-size:13px;">📊 분석 결과</div>';
html+='<div style="color:#e0e0e0;font-size:12px;margin-top:4px;">부른 곡: '+hist.length+'곡 · 평균: '+avgScore+'점 · 선호: '+(topCat||'미파악')+'</div></div>';
recommendations.forEach(function(r){
html+='<div style="background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:12px;margin-bottom:8px;cursor:pointer;" onclick="this.closest(\'#v11-recommend-modal\').remove();if(typeof selectSong===\'function\')selectSong('+r.song.id+');">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="font-size:20px;">'+r.song.icon+'</span> <span style="color:#e0e0e0;font-weight:bold;">'+r.song.title+'</span></div>';
html+='<span style="color:#a855f7;font-size:12px;">'+r.song.diff+'</span></div>';
html+='<div style="color:#888;font-size:11px;margin-top:4px;">'+r.reason+' · 적합도 '+r.score+'%</div>';
html+='</div>';
});
if(recommendations.length===0){html+='<p style="color:#888;text-align:center;">모든 곡을 부르셨습니다! 🎉</p>';}
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

// ===== 4. RECORDING STUDIO (Waveform Canvas) =====
var v11RecState={recording:false,data:[],startTime:0};

function showRecordingStudio(){
playSfxV11('rec_start');
var m=document.createElement('div');m.id='v11-studio-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var recs=ls11('recordings',[]);
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">🎧 녹음 스튜디오</h2><button onclick="this.closest(\'#v11-studio-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v11-waveform" width="480" height="160" style="width:100%;background:#1a1028;border-radius:10px;margin-bottom:12px;"></canvas>';
html+='<div style="display:flex;gap:8px;margin-bottom:16px;">';
html+='<button id="v11-rec-btn" onclick="toggleRecording()" style="flex:1;background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;border:none;border-radius:10px;padding:12px;cursor:pointer;font-size:14px;">⏺ 녹음 시작</button>';
html+='<button onclick="playLastRecording()" style="flex:1;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:10px;padding:12px;cursor:pointer;font-size:14px;">▶ 재생</button></div>';
html+='<h3 style="color:#c084fc;margin:8px 0;">녹음 목록 ('+recs.length+')</h3>';
if(recs.length===0){html+='<p style="color:#888;text-align:center;">녹음이 없습니다. 노래를 부르면서 녹음해보세요!</p>';}
else{recs.slice().reverse().forEach(function(r,i){
var dt=new Date(r.ts);
var timeStr=(dt.getMonth()+1)+'/'+dt.getDate()+' '+dt.getHours()+':'+String(dt.getMinutes()).padStart(2,'0');
html+='<div style="background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:10px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="color:#e0e0e0;">'+r.title+'</span><span style="color:#888;font-size:11px;margin-left:8px;">'+timeStr+'</span></div>';
html+='<button onclick="deleteRecording('+i+')" style="background:rgba(239,68,68,.2);color:#ef4444;border:1px solid #ef4444;border-radius:6px;padding:4px 8px;cursor:pointer;font-size:11px;">삭제</button></div>';
});}
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
drawWaveform();
}

function toggleRecording(){
var btn=document.getElementById('v11-rec-btn');
if(!v11RecState.recording){
v11RecState.recording=true;
v11RecState.data=[];
v11RecState.startTime=Date.now();
if(btn){btn.textContent='⏹ 녹음 중지';btn.style.background='linear-gradient(135deg,#dc2626,#991b1b)';}
playSfxV11('rec_start');
v11RecState.interval=setInterval(function(){
v11RecState.data.push(Math.random()*2-1);
drawWaveform();
},50);
}else{
v11RecState.recording=false;
clearInterval(v11RecState.interval);
if(btn){btn.textContent='⏺ 녹음 시작';btn.style.background='linear-gradient(135deg,#ef4444,#dc2626)';}
playSfxV11('rec_stop');
var recs=ls11('recordings',[]);
var title='녹음 #'+(recs.length+1);
if(typeof currentSong!=='undefined'&&currentSong&&currentSong.title)title=currentSong.title;
recs.push({title:title,ts:Date.now(),dur:Math.round((Date.now()-v11RecState.startTime)/1000)});
if(recs.length>20)recs=recs.slice(-20);
ls11s('recordings',recs);
}
}

function playLastRecording(){
var recs=ls11('recordings',[]);
if(recs.length===0){alert('녹음이 없습니다.');return;}
playSfxV11('rec_start');
alert('마지막 녹음: '+recs[recs.length-1].title+' ('+recs[recs.length-1].dur+'초)');
}

function deleteRecording(idx){
var recs=ls11('recordings',[]);
recs.reverse();recs.splice(idx,1);recs.reverse();
ls11s('recordings',recs);
var existing=document.getElementById('v11-studio-modal');if(existing)existing.remove();
showRecordingStudio();
}

function drawWaveform(){
var c=document.getElementById('v11-waveform');if(!c)return;
var ctx=c.getContext('2d');
var W=c.width,H=c.height;
ctx.clearRect(0,0,W,H);
ctx.fillStyle='#1a1028';ctx.fillRect(0,0,W,H);
ctx.strokeStyle='rgba(168,85,247,.3)';ctx.lineWidth=1;
ctx.beginPath();ctx.moveTo(0,H/2);ctx.lineTo(W,H/2);ctx.stroke();
if(v11RecState.data.length<2)return;
var step=W/Math.min(v11RecState.data.length,200);
var data=v11RecState.data.slice(-200);
ctx.strokeStyle='#a855f7';ctx.lineWidth=2;
ctx.beginPath();
data.forEach(function(v,i){
var x=i*step;var y=H/2+v*(H/3);
if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
});
ctx.stroke();
var grd=ctx.createLinearGradient(0,0,0,H);
grd.addColorStop(0,'rgba(168,85,247,.2)');grd.addColorStop(0.5,'rgba(168,85,247,.05)');grd.addColorStop(1,'rgba(168,85,247,.2)');
ctx.lineTo((data.length-1)*step,H);ctx.lineTo(0,H);ctx.closePath();
ctx.fillStyle=grd;ctx.fill();
if(v11RecState.recording){
ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(W-20,20,6,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#fff';ctx.font='11px sans-serif';ctx.textAlign='right';
var sec=Math.round((Date.now()-v11RecState.startTime)/1000);
ctx.fillText(sec+'s',W-32,24);
}
}

// ===== 5. BREATHING EXERCISE GUIDE (8 exercises) =====
var breathExercises=[
{id:1,name:'복식호흡',desc:'배로 숨을 들이쉬고 천천히 내쉬기',inhale:4,hold:2,exhale:6,cycles:4},
{id:2,name:'4-7-8 호흡법',desc:'4초 들이기, 7초 참기, 8초 내쉬기',inhale:4,hold:7,exhale:8,cycles:3},
{id:3,name:'립트릴',desc:'입술을 떨면서 숨 내쉬기',inhale:3,hold:0,exhale:5,cycles:5},
{id:4,name:'허밍 호흡',desc:'코로 들이기, 허밍으로 내쉬기',inhale:4,hold:1,exhale:5,cycles:4},
{id:5,name:'사이렌 호흡',desc:'낮은 음에서 높은 음으로 올리기',inhale:3,hold:0,exhale:4,cycles:6},
{id:6,name:'스타카토 호흡',desc:'끊어서 내쉬기 (ha-ha-ha)',inhale:3,hold:1,exhale:3,cycles:5},
{id:7,name:'횟배 확장',desc:'최대한 많이 들이쉬고 천천히',inhale:6,hold:4,exhale:8,cycles:3},
{id:8,name:'연속 호흡',desc:'빠르게 들이쉬고 길게 내쉬기',inhale:2,hold:0,exhale:6,cycles:6}
];

function showBreathingGuide(){
playSfxV11('breath');
var done=ls11('breathDone',[]);
var m=document.createElement('div');m.id='v11-breath-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">💨 호흡 운동</h2><button onclick="this.closest(\'#v11-breath-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<p style="color:#888;margin-bottom:12px;">완료: '+done.length+'/'+breathExercises.length+'</p>';
html+='<div style="width:100%;background:rgba(168,85,247,.15);border-radius:8px;height:8px;margin-bottom:16px;"><div style="background:linear-gradient(90deg,#a855f7,#7c3aed);height:100%;border-radius:8px;width:'+Math.round(done.length/breathExercises.length*100)+'%;"></div></div>';
breathExercises.forEach(function(ex){
var isDone=done.indexOf(ex.id)!==-1;
html+='<div style="background:rgba(168,85,247,'+(isDone?'.15':'.05')+');border:1px solid rgba(168,85,247,'+(isDone?'.5':'.2')+');border-radius:10px;padding:12px;margin-bottom:8px;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="font-size:16px;">'+(isDone?'✅':'⚪')+' </span><span style="color:#e0e0e0;font-weight:bold;">'+ex.name+'</span></div>';
if(!isDone){html+='<button onclick="startBreathExercise('+ex.id+')" style="background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;border:none;border-radius:8px;padding:6px 12px;cursor:pointer;font-size:12px;">시작</button>';}
else{html+='<span style="color:#22c55e;font-size:12px;">완료</span>';}
html+='</div>';
html+='<div style="color:#888;font-size:11px;margin-top:4px;">'+ex.desc+' · 들이기 '+ex.inhale+'초 / 참기 '+ex.hold+'초 / 내쉬기 '+ex.exhale+'초 × '+ex.cycles+'회</div>';
html+='</div>';
});
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

function startBreathExercise(exId){
var ex=breathExercises.find(function(e){return e.id===exId;});
if(!ex)return;
var modal=document.getElementById('v11-breath-modal');if(modal)modal.remove();
var m=document.createElement('div');m.id='v11-breath-active';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.95);z-index:10001;display:flex;flex-direction:column;align-items:center;justify-content:center;';
m.innerHTML='<h2 style="color:#a855f7;">'+ex.name+'</h2><canvas id="v11-breath-circle" width="250" height="250" style="margin:20px;"></canvas><div id="v11-breath-phase" style="color:#c084fc;font-size:24px;font-weight:bold;">준비...</div><div id="v11-breath-count" style="color:#888;font-size:14px;margin-top:8px;"></div><button onclick="this.closest(\'#v11-breath-active\').remove();" style="margin-top:20px;background:rgba(239,68,68,.2);color:#ef4444;border:1px solid #ef4444;border-radius:8px;padding:8px 24px;cursor:pointer;">중지</button>';
document.body.appendChild(m);
var cycle=0,phase='inhale',timer=0;
var phaseEl=document.getElementById('v11-breath-phase');
var countEl=document.getElementById('v11-breath-count');
var canvas=document.getElementById('v11-breath-circle');
var ctx=canvas?canvas.getContext('2d'):null;
var totalPhaseTime=0,currentPhaseTime=0;
function setPhase(p){
phase=p;
if(p==='inhale'){totalPhaseTime=ex.inhale;phaseEl.textContent='들이쉬기';phaseEl.style.color='#22c55e';}
else if(p==='hold'){totalPhaseTime=ex.hold;phaseEl.textContent='참기';phaseEl.style.color='#eab308';}
else{totalPhaseTime=ex.exhale;phaseEl.textContent='내쉬기';phaseEl.style.color='#ef4444';}
currentPhaseTime=0;
}
function drawCircle(progress){
if(!ctx)return;
var W=250,H=250,cx=W/2,cy=H/2;
ctx.clearRect(0,0,W,H);
var radius=phase==='inhale'?40+progress*60:(phase==='hold'?100:100-progress*60);
var grd=ctx.createRadialGradient(cx,cy,0,cx,cy,radius);
grd.addColorStop(0,phase==='inhale'?'rgba(34,197,94,.6)':phase==='hold'?'rgba(234,179,8,.6)':'rgba(239,68,68,.6)');
grd.addColorStop(1,'rgba(168,85,247,.1)');
ctx.fillStyle=grd;ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.fill();
ctx.strokeStyle='rgba(168,85,247,.5)';ctx.lineWidth=2;ctx.stroke();
}
setPhase('inhale');
var iv=setInterval(function(){
if(!document.getElementById('v11-breath-active')){clearInterval(iv);return;}
currentPhaseTime+=0.05;
var progress=Math.min(currentPhaseTime/totalPhaseTime,1);
drawCircle(progress);
countEl.textContent='사이클 '+(cycle+1)+'/'+ex.cycles+' · '+Math.ceil(totalPhaseTime-currentPhaseTime)+'초';
if(currentPhaseTime>=totalPhaseTime){
if(phase==='inhale'){if(ex.hold>0)setPhase('hold');else setPhase('exhale');}
else if(phase==='hold'){setPhase('exhale');}
else{cycle++;if(cycle>=ex.cycles){clearInterval(iv);
phaseEl.textContent='완료! 🎉';phaseEl.style.color='#22c55e';
countEl.textContent='';
var done=ls11('breathDone',[]);if(done.indexOf(exId)===-1){done.push(exId);ls11s('breathDone',done);}
playSfxV11('v11_achieve');
setTimeout(function(){var el=document.getElementById('v11-breath-active');if(el)el.remove();showBreathingGuide();},2000);
return;}setPhase('inhale');}
}
},50);
}

// ===== 6. PITCH GRAPH REPLAY (Canvas) =====
var v11PitchData=[];

function recordPitchPoint(freq,expected,time){
v11PitchData.push({f:freq,e:expected,t:time});
if(v11PitchData.length>1000)v11PitchData=v11PitchData.slice(-1000);
}

function showPitchGraph(){
playSfxV11('pitch_graph');
var views=ls11('pitchGraphViews',0);ls11s('pitchGraphViews',views+1);
var m=document.createElement('div');m.id='v11-pitch-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">📈 피치 그래프</h2><button onclick="this.closest(\'#v11-pitch-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v11-pitch-canvas" width="480" height="280" style="width:100%;background:#1a1028;border-radius:10px;"></canvas>';
if(v11PitchData.length>0){
var correct=0,total=v11PitchData.length;
v11PitchData.forEach(function(p){if(Math.abs(p.f-p.e)/p.e<0.05)correct++;});
var accuracy=Math.round(correct/total*100);
var accColor=accuracy>=90?'#22c55e':accuracy>=70?'#eab308':'#ef4444';
html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;">';
html+='<div style="background:rgba(168,85,247,.1);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">정확도</div><div style="color:'+accColor+';font-size:22px;font-weight:bold;">'+accuracy+'%</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">분석 포인트</div><div style="color:#c084fc;font-size:22px;font-weight:bold;">'+total+'</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">정확 히트</div><div style="color:#22c55e;font-size:22px;font-weight:bold;">'+correct+'</div></div></div>';
}else{html+='<p style="color:#888;text-align:center;margin-top:12px;">노래를 부른 후 피치 데이터가 표시됩니다.</p>';}
html+='<button onclick="v11PitchData=[];this.closest(\'#v11-pitch-modal\').remove();showPitchGraph();" style="background:rgba(168,85,247,.2);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:8px;padding:8px;width:100%;margin-top:8px;cursor:pointer;">초기화</button>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
drawPitchCanvas();
}

function drawPitchCanvas(){
var c=document.getElementById('v11-pitch-canvas');if(!c)return;
var ctx=c.getContext('2d');
var W=c.width,H=c.height;
ctx.clearRect(0,0,W,H);
if(v11PitchData.length<2){
ctx.fillStyle='#666';ctx.font='14px sans-serif';ctx.textAlign='center';
ctx.fillText('데이터가 없습니다',W/2,H/2);return;
}
var minF=Infinity,maxF=0;
v11PitchData.forEach(function(p){
if(p.f<minF)minF=p.f;if(p.f>maxF)maxF=p.f;
if(p.e<minF)minF=p.e;if(p.e>maxF)maxF=p.e;
});
minF*=0.9;maxF*=1.1;
var pad=40;
ctx.strokeStyle='rgba(168,85,247,.2)';ctx.lineWidth=1;
for(var i=0;i<5;i++){
var y=pad+i*(H-2*pad)/4;
ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(W-10,y);ctx.stroke();
var freq=maxF-(i/(4))*(maxF-minF);
ctx.fillStyle='#666';ctx.font='10px sans-serif';ctx.textAlign='right';
ctx.fillText(Math.round(freq)+'Hz',pad-4,y+4);
}
ctx.strokeStyle='rgba(34,197,94,.4)';ctx.lineWidth=2;
ctx.beginPath();
v11PitchData.forEach(function(p,idx){
var x=pad+idx*(W-pad-10)/v11PitchData.length;
var y=pad+(1-(p.e-minF)/(maxF-minF))*(H-2*pad);
if(idx===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
});
ctx.stroke();
ctx.strokeStyle='#a855f7';ctx.lineWidth=2;
ctx.beginPath();
v11PitchData.forEach(function(p,idx){
var x=pad+idx*(W-pad-10)/v11PitchData.length;
var y=pad+(1-(p.f-minF)/(maxF-minF))*(H-2*pad);
if(idx===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
});
ctx.stroke();
ctx.fillStyle='#22c55e';ctx.font='10px sans-serif';ctx.fillText('— 목표',W-60,16);
ctx.fillStyle='#a855f7';ctx.fillText('— 실제',W-60,28);
}

// ===== 7. VOCAL EFFECTS PROCESSOR =====
function showEffectsProcessor(){
playSfxV11('effects');
ls11s('effectsUsed',true);
var settings=ls11('effectSettings',{comp:false,harm:false,delay:false,compAmount:50,harmInterval:5,delayTime:300});
var m=document.createElement('div');m.id='v11-effects-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">🏛️ 보컬 이펙트</h2><button onclick="this.closest(\'#v11-effects-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

var effects=[
{key:'comp',name:'컴프레서',desc:'음량을 균일하게',icon:'📊',slider:'compAmount',min:0,max:100,unit:'%'},
{key:'harm',name:'하모나이저',desc:'화음 추가',icon:'🎵',slider:'harmInterval',min:3,max:12,unit:'반음'},
{key:'delay',name:'딜레이',desc:'음성 지연 효과',icon:'🔃',slider:'delayTime',min:100,max:800,unit:'ms'}
];

effects.forEach(function(ef){
var isOn=settings[ef.key];
html+='<div style="background:rgba(168,85,247,'+(isOn?'.15':'.05')+');border:1px solid rgba(168,85,247,'+(isOn?'.5':'.2')+');border-radius:10px;padding:14px;margin-bottom:10px;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="font-size:18px;">'+ef.icon+'</span> <span style="color:#e0e0e0;font-weight:bold;">'+ef.name+'</span><div style="color:#888;font-size:11px;">'+ef.desc+'</div></div>';
html+='<button onclick="toggleV11Effect(\''+ef.key+'\')" style="background:'+(isOn?'linear-gradient(135deg,#22c55e,#16a34a)':'rgba(100,100,100,.3)')+';color:#fff;border:none;border-radius:20px;padding:6px 16px;cursor:pointer;font-size:12px;">'+(isOn?'ON':'OFF')+'</button></div>';
html+='<div style="margin-top:10px;"><input type="range" min="'+ef.min+'" max="'+ef.max+'" value="'+(settings[ef.slider]||ef.min)+'" oninput="updateV11EffectParam(\''+ef.slider+'\',this.value)" style="width:100%;accent-color:#a855f7;"><div style="display:flex;justify-content:space-between;color:#888;font-size:11px;"><span>'+ef.min+ef.unit+'</span><span id="v11-ef-'+ef.slider+'">'+(settings[ef.slider]||ef.min)+ef.unit+'</span><span>'+ef.max+ef.unit+'</span></div></div>';
html+='</div>';
});
html+='<div style="background:rgba(168,85,247,.1);border-radius:10px;padding:12px;margin-top:8px;"><div style="color:#c084fc;font-size:13px;">프리셋</div>';
var presets=[
{name:'라이브 공연',comp:true,harm:false,delay:false,compAmount:70},
{name:'스튜디오',comp:true,harm:false,delay:true,compAmount:50,delayTime:200},
{name:'하모니',comp:false,harm:true,delay:false,harmInterval:7},
{name:'풀 이펙트',comp:true,harm:true,delay:true,compAmount:60,harmInterval:5,delayTime:400}
];
html+='<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin-top:8px;">';
presets.forEach(function(p){
html+='<button onclick="applyV11Preset('+JSON.stringify(p).replace(/"/g,'&quot;')+')" style="background:rgba(168,85,247,.2);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:8px;padding:8px;cursor:pointer;font-size:12px;">'+p.name+'</button>';
});
html+='</div></div></div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.toggleV11Effect=function(key){
var s=ls11('effectSettings',{comp:false,harm:false,delay:false,compAmount:50,harmInterval:5,delayTime:300});
s[key]=!s[key];ls11s('effectSettings',s);
var el=document.getElementById('v11-effects-modal');if(el)el.remove();showEffectsProcessor();
};
window.updateV11EffectParam=function(key,val){
var s=ls11('effectSettings',{comp:false,harm:false,delay:false,compAmount:50,harmInterval:5,delayTime:300});
s[key]=parseInt(val);ls11s('effectSettings',s);
var label=document.getElementById('v11-ef-'+key);if(label)label.textContent=val+(key==='delayTime'?'ms':key==='harmInterval'?'반음':'%');
};
window.applyV11Preset=function(p){
var s=ls11('effectSettings',{comp:false,harm:false,delay:false,compAmount:50,harmInterval:5,delayTime:300});
Object.keys(p).forEach(function(k){if(k!=='name')s[k]=p[k];});
ls11s('effectSettings',s);
var el=document.getElementById('v11-effects-modal');if(el)el.remove();showEffectsProcessor();
};

// ===== 8. SONG FAVORITES & COLLECTIONS =====
function showFavorites(){
playSfxV11('fav_add');
var favs=ls11('favorites',[]);
var cols=ls11('collections',[]);
var m=document.createElement('div');m.id='v11-fav-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">⭐ 즐겨찾기</h2><button onclick="this.closest(\'#v11-fav-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

html+='<div style="display:flex;gap:8px;margin-bottom:12px;">';
html+='<button onclick="addCollectionPrompt()" style="background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;border:none;border-radius:8px;padding:8px 16px;cursor:pointer;font-size:13px;">+ 컬렉션 생성</button></div>';

if(favs.length===0){html+='<p style="color:#888;text-align:center;">즐겨찾기가 없습니다. 노래 목록에서 ❤ 버튼을 눌러보세요!</p>';}
else{
html+='<p style="color:#888;margin-bottom:8px;">'+favs.length+'곡 즐겨찾기</p>';
if(typeof SONGS!=='undefined'){
favs.forEach(function(fid){
var song=SONGS.find(function(s){return s.id===fid;});
if(!song)return;
html+='<div style="background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:10px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="this.closest(\'#v11-fav-modal\').remove();if(typeof selectSong===\'function\')selectSong('+song.id+');">';
html+='<div><span style="font-size:18px;">'+song.icon+'</span> <span style="color:#e0e0e0;">'+song.title+'</span> <span style="color:#888;font-size:11px;">'+song.cat+'</span></div>';
html+='<button onclick="event.stopPropagation();removeFav('+song.id+')" style="background:none;border:none;color:#ef4444;font-size:18px;cursor:pointer;">❤</button></div>';
});
}}

if(cols.length>0){
html+='<h3 style="color:#c084fc;margin:16px 0 8px;">컬렉션</h3>';
cols.forEach(function(col,ci){
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:12px;margin-bottom:8px;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<span style="color:#e0e0e0;font-weight:bold;">'+col.name+' ('+col.songs.length+'곡)</span>';
html+='<button onclick="deleteCollection('+ci+')" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:14px;">🗑</button></div></div>';
});
}
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.addCollectionPrompt=function(){
var name=prompt('컬렉션 이름:');
if(!name)return;
var cols=ls11('collections',[]);
cols.push({name:name,songs:[]});
ls11s('collections',cols);
var el=document.getElementById('v11-fav-modal');if(el)el.remove();showFavorites();
};
window.removeFav=function(id){
var favs=ls11('favorites',[]);
favs=favs.filter(function(f){return f!==id;});
ls11s('favorites',favs);
playSfxV11('fav_remove');
var el=document.getElementById('v11-fav-modal');if(el)el.remove();showFavorites();
};
window.deleteCollection=function(idx){
var cols=ls11('collections',[]);cols.splice(idx,1);ls11s('collections',cols);
var el=document.getElementById('v11-fav-modal');if(el)el.remove();showFavorites();
};
window.toggleFavorite=function(songId){
var favs=ls11('favorites',[]);
var idx=favs.indexOf(songId);
if(idx===-1){favs.push(songId);playSfxV11('fav_add');}
else{favs.splice(idx,1);playSfxV11('fav_remove');}
ls11s('favorites',favs);
};

// ===== 9. PERFORMANCE CALENDAR =====
function showPerformanceCalendar(){
playSfxV11('calendar');
ls11s('calendarViewed',true);
var hist=ls11('history',[]);
var today=new Date();
var year=today.getFullYear(),month=today.getMonth();
var m=document.createElement('div');m.id='v11-calendar-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">📅 연습 캘린더</h2><button onclick="this.closest(\'#v11-calendar-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

var activeDays={};
hist.forEach(function(h){
var d=new Date(h.ts);
var key=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
activeDays[key]=(activeDays[key]||0)+1;
});

var streak=0,maxStreak=ls11('maxStreak',0);
var checkDate=new Date(today);
while(true){
var key=checkDate.getFullYear()+'-'+(checkDate.getMonth()+1)+'-'+checkDate.getDate();
if(activeDays[key]){streak++;checkDate.setDate(checkDate.getDate()-1);}else break;
}
if(streak>maxStreak){maxStreak=streak;ls11s('maxStreak',maxStreak);}

html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">';
html+='<div style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">현재 연속</div><div style="color:#22c55e;font-size:22px;font-weight:bold;">'+streak+'일</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">최고 연속</div><div style="color:#a855f7;font-size:22px;font-weight:bold;">'+maxStreak+'일</div></div>';
html+='<div style="background:rgba(234,179,8,.1);border:1px solid rgba(234,179,8,.3);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">이번 달</div><div style="color:#eab308;font-size:22px;font-weight:bold;">'+Object.keys(activeDays).filter(function(k){return k.startsWith(year+'-'+(month+1)+'-');}).length+'일</div></div></div>';

var months=['월','화','수','목','금','토','일'];
html+='<div style="text-align:center;color:#c084fc;font-weight:bold;margin-bottom:8px;">'+year+'년 '+(month+1)+'월</div>';
html+='<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;">';
months.forEach(function(d){html+='<div style="color:#888;font-size:11px;padding:4px;">'+d+'</div>';});
var firstDay=new Date(year,month,1).getDay();
var daysInMonth=new Date(year,month+1,0).getDate();
for(var i=0;i<firstDay;i++)html+='<div></div>';
for(var d=1;d<=daysInMonth;d++){
var key=year+'-'+(month+1)+'-'+d;
var count=activeDays[key]||0;
var isToday=d===today.getDate()&&month===today.getMonth();
var bg=count>3?'rgba(34,197,94,.6)':count>1?'rgba(34,197,94,.3)':count>0?'rgba(34,197,94,.15)':'rgba(100,100,100,.1)';
html+='<div style="background:'+bg+';border-radius:4px;padding:6px 2px;font-size:12px;color:'+(isToday?'#fff':'#aaa')+';'+(isToday?'border:1px solid #a855f7;font-weight:bold;':'')+'">'+d+'</div>';
}
html+='</div>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

// ===== 10. KARAOKE PARTY MODE =====
function showPartyMode(){
playSfxV11('party_start');
var party=ls11('partyState',{players:[],currentIdx:0,scores:{},round:1});
var m=document.createElement('div');m.id='v11-party-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#a855f7;margin:0;">🎉 파티 모드</h2><button onclick="this.closest(\'#v11-party-modal\').remove()" style="background:#a855f7;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

if(party.players.length===0){
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:16px;">';
html+='<h3 style="color:#c084fc;margin:0 0 12px;">플레이어 등록</h3>';
html+='<div id="v11-party-players"></div>';
html+='<div style="display:flex;gap:8px;margin-top:8px;">';
html+='<input id="v11-party-name" type="text" placeholder="이름 입력" style="flex:1;background:rgba(255,255,255,.1);border:1px solid rgba(168,85,247,.3);border-radius:8px;padding:8px;color:#fff;font-size:14px;">';
html+='<button onclick="addPartyPlayer()" style="background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;border:none;border-radius:8px;padding:8px 16px;cursor:pointer;">+</button></div>';
html+='<button onclick="startParty()" style="background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:10px;padding:12px;width:100%;margin-top:12px;cursor:pointer;font-size:15px;font-weight:bold;">파티 시작!</button>';
html+='</div>';
}else{
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:12px;margin-bottom:12px;text-align:center;">';
html+='<div style="color:#888;font-size:12px;">Round '+party.round+'</div>';
html+='<div style="color:#e0e0e0;font-size:20px;font-weight:bold;margin:4px 0;">🎤 '+party.players[party.currentIdx]+' 차례!</div></div>';
html+='<h3 style="color:#c084fc;margin:12px 0 8px;">스코어보드</h3>';
var sorted=party.players.slice().sort(function(a,b){return(party.scores[b]||0)-(party.scores[a]||0);});
sorted.forEach(function(p,i){
var sc=party.scores[p]||0;
var isCurrent=p===party.players[party.currentIdx];
html+='<div style="background:rgba(168,85,247,'+(isCurrent?'.2':'.05')+');border:1px solid rgba(168,85,247,'+(isCurrent?'.5':'.2')+');border-radius:10px;padding:10px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;">';
html+='<div><span style="color:#eab308;font-size:14px;">#'+(i+1)+' </span><span style="color:#e0e0e0;font-weight:bold;">'+p+'</span>'+(isCurrent?' <span style="color:#a855f7;font-size:11px;">◀ 현재</span>':'')+'</div>';
html+='<span style="color:#c084fc;font-size:18px;font-weight:bold;">'+sc+'점</span></div>';
});
html+='<div style="display:flex;gap:8px;margin-top:12px;">';
html+='<button onclick="partyNextTurn()" style="flex:1;background:linear-gradient(135deg,#a855f7,#7c3aed);color:#fff;border:none;border-radius:10px;padding:12px;cursor:pointer;font-size:14px;">다음 차례</button>';
html+='<button onclick="partyAddScore()" style="flex:1;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:10px;padding:12px;cursor:pointer;font-size:14px;">점수 입력</button></div>';
html+='<button onclick="endParty()" style="background:rgba(239,68,68,.2);color:#ef4444;border:1px solid #ef4444;border-radius:10px;padding:10px;width:100%;margin-top:8px;cursor:pointer;">파티 종료</button>';
}
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.addPartyPlayer=function(){
var input=document.getElementById('v11-party-name');
if(!input||!input.value.trim())return;
var party=ls11('partyState',{players:[],currentIdx:0,scores:{},round:1});
party.players.push(input.value.trim());
ls11s('partyState',party);
input.value='';
var container=document.getElementById('v11-party-players');
if(container){
container.innerHTML='';
party.players.forEach(function(p){
container.innerHTML+='<div style="background:rgba(168,85,247,.15);border-radius:6px;padding:6px 10px;margin-bottom:4px;color:#e0e0e0;">'+p+'</div>';
});
}
};

window.startParty=function(){
var party=ls11('partyState',{players:[],currentIdx:0,scores:{},round:1});
if(party.players.length<2){alert('최소 2명이 필요합니다.');return;}
party.scores={};party.players.forEach(function(p){party.scores[p]=0;});
party.currentIdx=0;party.round=1;
ls11s('partyState',party);
var el=document.getElementById('v11-party-modal');if(el)el.remove();
showPartyMode();
};

window.partyNextTurn=function(){
var party=ls11('partyState',{players:[],currentIdx:0,scores:{},round:1});
party.currentIdx=(party.currentIdx+1)%party.players.length;
if(party.currentIdx===0)party.round++;
ls11s('partyState',party);
playSfxV11('party_turn');
var el=document.getElementById('v11-party-modal');if(el)el.remove();
showPartyMode();
};

window.partyAddScore=function(){
var party=ls11('partyState',{players:[],currentIdx:0,scores:{},round:1});
var name=party.players[party.currentIdx];
var score=prompt(name+'의 점수 입력 (0~100):');
if(score===null)return;
score=parseInt(score);if(isNaN(score))return;
party.scores[name]=(party.scores[name]||0)+score;
ls11s('partyState',party);
var el=document.getElementById('v11-party-modal');if(el)el.remove();
showPartyMode();
};

window.endParty=function(){
var party=ls11('partyState',{players:[],currentIdx:0,scores:{},round:1});
var count=ls11('partyCount',0);ls11s('partyCount',count+1);
ls11s('partyState',{players:[],currentIdx:0,scores:{},round:1});
playSfxV11('v11_achieve');
var el=document.getElementById('v11-party-modal');if(el)el.remove();
alert('파티 종료! 총 '+party.round+'라운드 완료');
};

// ===== QUIZ v11: 15 NEW QUESTIONS (57→72) =====
var QUIZ_V11=[
{q:'보컬 워밍업에서 가장 중요한 것은?',a:['복식호흡','립트릴','허밍','스트레칭'],c:0,e:'복식호흡은 모든 발성의 기초입니다.'},
{q:'피치(pitch)의 단위는?',a:['dB','Hz','BPM','RPM'],c:1,e:'피치는 주파수(Hz)로 측정합니다.'},
{q:'컴프레서의 역할은?',a:['음량 균일화','음색 변환','음정 보정','박자 조절'],c:0,e:'컴프레서는 음량 차이를 줄여줍니다.'},
{q:'믹스보이스(mixed voice)란?',a:['흑성+두성 혼합','두 사람 함께','기계 변조','노이즈 추가'],c:0,e:'흑성과 두성의 중간 영역 발성법입니다.'},
{q:'노래방 번호판의 정식 명칭은?',a:['번호 고르기','반주기','상호 검색기','노래 검색기'],c:2,e:'곡 번호로 노래를 찾는 상호 검색기입니다.'},
{q:'환성점(passaggio)이란?',a:['흑성→두성 전환점','최고음','최저음','가성영역'],c:0,e:'흑성에서 두성으로 전환되는 음역입니다.'},
{q:'하모니 이펙트는 무엇을 추가하나요?',a:['화음','에코','리버브','딜레이'],c:0,e:'하모나이저는 보컬에 화음을 추가합니다.'},
{q:'음역 테스트에서 남성 평균 최고음은?',a:['A5','C5','E5','G5'],c:1,e:'남성 평균 최고음은 대략 C5 부근입니다.'},
{q:'노래 부를 때 머리 위치가 중요한 이유는?',a:['기도 확보','성대 보호','호흡 효율','외모'],c:0,e:'올바른 자세는 기도를 열어 발성을 돕습니다.'},
{q:'파티 모드의 최소 인원은?',a:['1명','2명','3명','4명'],c:1,e:'파티 모드는 최소 2명이 필요합니다.'},
{q:'노래 녹음 시 가장 중요한 환경은?',a:['조용한 공간','넓은 공간','밝은 공간','높은 공간'],c:0,e:'녹음은 반향이 없는 조용한 환경이 중요합니다.'},
{q:'비브라토 속도는 보통 초당 몇 회?',a:['2~3회','5~7회','10~12회','15회 이상'],c:1,e:'비브라토는 보통 초당 5~7회 진동합니다.'},
{q:'드라이 보컬(dry vocal)이란?',a:['이펙트 없는 원음','마른 목소리','낮은 음','빠른 노래'],c:0,e:'이펙트가 적용되지 않은 원본 음성입니다.'},
{q:'즐겨찾기에 등록할 수 있는 최대 곡 수는?',a:['제한 없음','10곡','20곡','50곡'],c:0,e:'StarVoice에서는 제한 없이 즐겨찾기 등록이 가능합니다.'},
{q:'4-7-8 호흡법에서 7의 의미는?',a:['7초 참기','7번 반복','7분 운동','7회 호흡'],c:0,e:'4초 들이기, 7초 참기, 8초 내쉬기입니다.'}
];

if(typeof QUIZ_QUESTIONS!=='undefined'){QUIZ_V11.forEach(function(q){QUIZ_QUESTIONS.push(q);});}
else if(typeof quizQuestions!=='undefined'){QUIZ_V11.forEach(function(q){quizQuestions.push(q);});}

// ===== KEYBOARD SHORTCUTS v11 =====
function setupKeyboardV11(){
document.addEventListener('keydown',function(e){
if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
if(!e.shiftKey)return;
switch(e.key.toUpperCase()){
case 'Y':e.preventDefault();showSongHistory();break;
case 'O':e.preventDefault();showVocalRangeMap();break;
case 'I':e.preventDefault();showRecommendations();break;
case 'U':e.preventDefault();showRecordingStudio();break;
case 'Z':e.preventDefault();showBreathingGuide();break;
case 'G':e.preventDefault();showPitchGraph();break;
case 'J':e.preventDefault();showEffectsProcessor();break;
case 'N':e.preventDefault();showPerformanceCalendar();break;
}
});
}

// ===== INJECT CSS v11 =====
function injectV11CSS(){
var style=document.createElement('style');
style.textContent='.v11-quick-btn{background:linear-gradient(135deg,rgba(168,85,247,.2),rgba(124,58,237,.2));color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:8px 12px;cursor:pointer;font-size:12px;transition:all .2s;white-space:nowrap;}.v11-quick-btn:hover{background:linear-gradient(135deg,rgba(168,85,247,.4),rgba(124,58,237,.4));transform:scale(1.05);}.v11-quick-bar{display:flex;flex-wrap:wrap;gap:6px;padding:8px;justify-content:center;}';
document.head.appendChild(style);
}

// ===== INJECT UI v11 =====
function injectV11UI(){
var actions=[
{label:'📜 히스토리',fn:'showSongHistory'},
{label:'🌐 음역맵',fn:'showVocalRangeMap'},
{label:'🤖 AI추천',fn:'showRecommendations'},
{label:'🎧 녹음',fn:'showRecordingStudio'},
{label:'💨 호흡',fn:'showBreathingGuide'},
{label:'📈 피치',fn:'showPitchGraph'},
{label:'🏛️ 이펙트',fn:'showEffectsProcessor'},
{label:'⭐ 즐겨찾기',fn:'showFavorites'},
{label:'📅 캘린더',fn:'showPerformanceCalendar'},
{label:'🎉 파티',fn:'showPartyMode'}
];
var bar=document.createElement('div');
bar.className='v11-quick-bar';
bar.id='v11-quick-bar';
actions.forEach(function(a){
var btn=document.createElement('button');
btn.className='v11-quick-btn';
btn.textContent=a.label;
btn.onclick=function(){if(typeof window[a.fn]==='function')window[a.fn]();};
bar.appendChild(btn);
});
var target=document.querySelector('.song-list')||document.querySelector('#song-list')||document.querySelector('.controls')||document.querySelector('main');
if(target){target.parentNode.insertBefore(bar,target);}
else{document.body.appendChild(bar);}
}

// ===== HOOK: Record history on song end =====
function hookSongEnd(){
if(typeof window.endSong==='function'&&!window.__v11EndHooked){
var origEnd=window.endSong;
window.endSong=function(){
var result=origEnd.apply(this,arguments);
if(typeof currentSong!=='undefined'&&currentSong){
var score=0;
if(typeof lastScore!=='undefined')score=lastScore;
else if(typeof totalScore!=='undefined')score=totalScore;
recordSongHistory(currentSong.id,score);
}
return result;
};
window.__v11EndHooked=true;
}
}

// ===== SEO UPDATE v11 =====
function updateSEOv11(){
document.title='StarVoice v11 - AI 노래방';
var desc=document.querySelector('meta[name="description"]');
if(desc)desc.setAttribute('content','StarVoice v11: 85곡 AI 음정 분석 K-노래방 PWA. 히스토리/음역맵/AI추천/녹음스튜디오/호흡운동/피치그래프/보컬이펙트/즐겨찾기/캘린더/파티모드/66업적');
var ogDesc=document.querySelector('meta[property="og:description"]');
if(ogDesc)ogDesc.setAttribute('content','85곡 AI 음정 분석 노래방. 히스토리, 음역맵, AI추천, 녹음, 호흡, 피치분석, 파티모드, 66개 업적');
var ogTitle=document.querySelector('meta[property="og:title"]');
if(ogTitle)ogTitle.setAttribute('content','StarVoice v11 - AI 노래방');
var twTitle=document.querySelector('meta[name="twitter:title"]');
if(twTitle)twTitle.setAttribute('content','StarVoice v11 - AI 노래방');
var twDesc=document.querySelector('meta[name="twitter:description"]');
if(twDesc)twDesc.setAttribute('content','85곡 AI 음정 분석 K-노래방 PWA. 히스토리+음역맵+AI추천+녹음+호흡+피치+이펙트+즐겨찾기+캘린더+파티+66업적');
}

// ===== ACHIEVEMENT CHECKER v11 =====
function checkV11Achievements(){
if(typeof ACHIEVEMENTS==='undefined')return;
NEW_ACHIEVE_V11.forEach(function(a){
if(a.check&&a.check()){
var unlocked=ls11('unlockedAchievements',[]);
if(unlocked.indexOf(a.id)===-1){
unlocked.push(a.id);
ls11s('unlockedAchievements',unlocked);
playSfxV11('v11_achieve');
}
}
});
}

// ===== INIT v11 =====
function initV11(){
injectV11CSS();
injectV11UI();
updateSEOv11();
setupKeyboardV11();
hookSongEnd();

setInterval(checkV11Achievements,15000);

if(typeof renderList==='function')renderList();

console.log('[v11] patch loaded — Songs:',
typeof SONGS!=='undefined'?SONGS.length:'?',
'Achievements:',typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:'?');
}

window.showSongHistory=showSongHistory;
window.showVocalRangeMap=showVocalRangeMap;
window.showRecommendations=showRecommendations;
window.showRecordingStudio=showRecordingStudio;
window.showBreathingGuide=showBreathingGuide;
window.showPitchGraph=showPitchGraph;
window.showEffectsProcessor=showEffectsProcessor;
window.showFavorites=showFavorites;
window.showPerformanceCalendar=showPerformanceCalendar;
window.showPartyMode=showPartyMode;
window.recordPitchPoint=recordPitchPoint;
window.recordSongHistory=recordSongHistory;
window.toggleFavorite=toggleFavorite;

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initV11);}
else{setTimeout(initV11,400);}

})();
