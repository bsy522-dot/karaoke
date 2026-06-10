/* StarVoice v12 Patch — Self-contained IIFE module injected via SW
 * 10 songs(85→95), VU meter Canvas, lyrics analyzer, vocal report radar Canvas,
 * medley mode, pitch match mini-game, weekly challenges, singer profile card Canvas,
 * music dictionary 40 terms, vocal health guide 8 tips,
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
var Gb4=369.99,Db5=554.37,Eb5=622.25,Fs4=369.99,Cs5=554.37;

function ls12(k,d){try{var v=localStorage.getItem('sv12-'+k);return v?JSON.parse(v):d;}catch(e){return d;}}
function ls12s(k,v){try{localStorage.setItem('sv12-'+k,JSON.stringify(v));}catch(e){}}

// ===== 10 NEW SONGS (86~95) =====
var NEW_SONGS_V12=[
{id:86,cat:"동요",title:"떳다 떳다 비행기",icon:"✈️",diff:"쉬움",dc:"diff-easy",bpm:120,
melody:[
{t:0,d:.4,f:G4,s:"떳"},{t:.4,d:.4,f:G4,s:"다"},
{t:.8,d:.4,f:A4,s:"떳"},{t:1.2,d:.4,f:A4,s:"다"},
{t:1.6,d:.8,f:G4,s:"비"},{t:2.4,d:.4,f:E4,s:"행"},
{t:2.8,d:.8,f:G4,s:"기"},
{t:3.6,d:.4,f:E4,s:"날"},{t:4,d:.4,f:E4,s:"아"},
{t:4.4,d:.4,f:D4,s:"라"},{t:4.8,d:.8,f:C4,s:"날"},
{t:5.6,d:.4,f:D4,s:"아"},{t:6,d:.4,f:E4,s:"라"},
{t:6.4,d:.4,f:G4,s:"높"},{t:6.8,d:.8,f:E4,s:"이"},
{t:7.6,d:.8,f:D4,s:"높"},{t:8.4,d:1,f:C4,s:"이"}
],lyrics:[{t:0,tx:"떳다 떳다 비행기"},{t:3.6,tx:"날아라 날아라"},{t:6.4,tx:"높이 높이"}],dur:10},

{id:87,cat:"가요/민요",title:"고향의 봄",icon:"🌸",diff:"보통",dc:"diff-medium",bpm:96,
melody:[
{t:0,d:.6,f:E4,s:"나"},{t:.6,d:.6,f:G4,s:"의"},
{t:1.2,d:1.2,f:A4,s:"살"},{t:2.4,d:.6,f:G4,s:"던"},
{t:3,d:.6,f:E4,s:"고"},{t:3.6,d:1.2,f:D4,s:"향"},
{t:4.8,d:.6,f:E4,s:"은"},{t:5.4,d:.6,f:G4,s:"꽃"},
{t:6,d:.6,f:A4,s:"피"},{t:6.6,d:.6,f:B4,s:"는"},
{t:7.2,d:1.2,f:A4,s:"산"},{t:8.4,d:.6,f:G4,s:"골"},
{t:9,d:.6,f:E4,s:"복"},{t:9.6,d:.6,f:D4,s:"숭"},
{t:10.2,d:.6,f:E4,s:"아"},{t:10.8,d:.6,f:G4,s:"꽃"},
{t:11.4,d:1.8,f:E4,s:"물"}
],lyrics:[{t:0,tx:"나의 살던 고향은"},{t:4.8,tx:"꽃피는 산골"},{t:9,tx:"복숭아꽃 물"}],dur:14},

{id:88,cat:"세계명곡",title:"스카보로 페어",icon:"🏰",diff:"어려움",dc:"diff-hard",bpm:72,
melody:[
{t:0,d:1.2,f:E4,s:"Are"},{t:1.2,d:.6,f:E4,s:"you"},
{t:1.8,d:1.2,f:A4,s:"go"},{t:3,d:.6,f:A4,s:"ing"},
{t:3.6,d:.6,f:B4,s:"to"},{t:4.2,d:1.8,f:A4,s:"Scar"},
{t:6,d:1.2,f:G4,s:"bo"},{t:7.2,d:.6,f:E4,s:"rough"},
{t:7.8,d:1.8,f:D4,s:"Fair"},
{t:9.6,d:.6,f:E4,s:"Par"},{t:10.2,d:.6,f:F4,s:"sley"},
{t:10.8,d:.6,f:E4,s:"sage"},
{t:11.4,d:.6,f:D4,s:"rose"},{t:12,d:.6,f:C4,s:"ma"},
{t:12.6,d:1.8,f:D4,s:"ry"},
{t:14.4,d:.6,f:A3,s:"and"},{t:15,d:1.8,f:E4,s:"thyme"}
],lyrics:[{t:0,tx:"Are you going to"},{t:3.6,tx:"Scarborough Fair"},{t:9.6,tx:"Parsley sage rosemary"},{t:14.4,tx:"and thyme"}],dur:17},

{id:89,cat:"가요/민요",title:"밀양 아리랑",icon:"🎶",diff:"보통",dc:"diff-medium",bpm:108,
melody:[
{t:0,d:.5,f:E4,s:"날"},{t:.5,d:.5,f:G4,s:"좀"},
{t:1,d:.5,f:A4,s:"보"},{t:1.5,d:.5,f:B4,s:"소"},
{t:2,d:1,f:A4,s:"날"},
{t:3,d:.5,f:G4,s:"좀"},{t:3.5,d:1,f:E4,s:"보"},
{t:4.5,d:.5,f:D4,s:"소"},
{t:5,d:.5,f:E4,s:"동"},{t:5.5,d:.5,f:G4,s:"지"},
{t:6,d:.5,f:A4,s:"섣"},{t:6.5,d:.5,f:B4,s:"달"},
{t:7,d:1,f:C5,s:"꽃"},
{t:8,d:.5,f:B4,s:"본"},{t:8.5,d:.5,f:A4,s:"듯"},
{t:9,d:.5,f:G4,s:"이"},{t:9.5,d:.5,f:E4,s:"날"},
{t:10,d:.5,f:D4,s:"좀"},{t:10.5,d:1.5,f:E4,s:"보"},{t:12,d:.5,f:D4,s:"소"}
],lyrics:[{t:0,tx:"날 좀 보소 날 좀 보소"},{t:5,tx:"동지섣달 꽃"},{t:8,tx:"본듯이 날 좀 보소"}],dur:13},

{id:90,cat:"세계명곡",title:"캐논 변주곡",icon:"🎻",diff:"어려움",dc:"diff-hard",bpm:68,
melody:[
{t:0,d:1,f:E5,s:"La"},{t:1,d:1,f:D5,s:"la"},
{t:2,d:1,f:C5,s:"la"},{t:3,d:1,f:B4,s:"la"},
{t:4,d:1,f:A4,s:"La"},{t:5,d:1,f:G4,s:"la"},
{t:6,d:1,f:A4,s:"la"},{t:7,d:1,f:B4,s:"la"},
{t:8,d:1,f:C5,s:"La"},{t:9,d:1,f:B4,s:"la"},
{t:10,d:1,f:A4,s:"la"},{t:11,d:1,f:G4,s:"la"},
{t:12,d:1,f:F4,s:"La"},{t:13,d:1,f:E4,s:"la"},
{t:14,d:1,f:F4,s:"la"},{t:15,d:1,f:G4,s:"la"}
],lyrics:[{t:0,tx:"La la la la"},{t:4,tx:"La la la la"},{t:8,tx:"La la la la"},{t:12,tx:"La la la la"}],dur:17},

{id:91,cat:"동요",title:"작은 별 변주",icon:"⭐",diff:"쉬움",dc:"diff-easy",bpm:112,
melody:[
{t:0,d:.4,f:C4,s:"반"},{t:.4,d:.4,f:C4,s:"짝"},
{t:.8,d:.4,f:G4,s:"반"},{t:1.2,d:.4,f:G4,s:"짝"},
{t:1.6,d:.4,f:A4,s:"작"},{t:2,d:.4,f:A4,s:"은"},
{t:2.4,d:.8,f:G4,s:"별"},
{t:3.2,d:.4,f:F4,s:"아"},{t:3.6,d:.4,f:F4,s:"름"},
{t:4,d:.4,f:E4,s:"답"},{t:4.4,d:.4,f:E4,s:"게"},
{t:4.8,d:.4,f:D4,s:"비"},{t:5.2,d:.4,f:D4,s:"추"},
{t:5.6,d:.8,f:C4,s:"네"},
{t:6.4,d:.4,f:G4,s:"서"},{t:6.8,d:.4,f:G4,s:"쪽"},
{t:7.2,d:.4,f:F4,s:"하"},{t:7.6,d:.4,f:F4,s:"늘"},
{t:8,d:.4,f:E4,s:"에"},{t:8.4,d:.4,f:E4,s:"서"},
{t:8.8,d:.8,f:D4,s:"도"}
],lyrics:[{t:0,tx:"반짝반짝 작은 별"},{t:3.2,tx:"아름답게 비추네"},{t:6.4,tx:"서쪽 하늘에서도"}],dur:10},

{id:92,cat:"가요/민요",title:"능수버들",icon:"🌿",diff:"보통",dc:"diff-medium",bpm:100,
melody:[
{t:0,d:.6,f:A4,s:"능"},{t:.6,d:.6,f:G4,s:"수"},
{t:1.2,d:.6,f:E4,s:"버"},{t:1.8,d:1.2,f:D4,s:"들"},
{t:3,d:.6,f:E4,s:"흔"},{t:3.6,d:.6,f:G4,s:"들"},
{t:4.2,d:1.2,f:A4,s:"리"},{t:5.4,d:.6,f:G4,s:"는"},
{t:6,d:.6,f:E4,s:"바"},{t:6.6,d:.6,f:D4,s:"람"},
{t:7.2,d:.6,f:C4,s:"에"},{t:7.8,d:.6,f:D4,s:"춤"},
{t:8.4,d:.6,f:E4,s:"을"},{t:9,d:1.2,f:G4,s:"추"},
{t:10.2,d:1.8,f:E4,s:"네"}
],lyrics:[{t:0,tx:"능수버들"},{t:3,tx:"흔들리는"},{t:6,tx:"바람에 춤을 추네"}],dur:12},

{id:93,cat:"세계명곡",title:"엘리제를 위하여",icon:"🎹",diff:"어려움",dc:"diff-hard",bpm:72,
melody:[
{t:0,d:.5,f:E5,s:"La"},{t:.5,d:.5,f:Eb5,s:"la"},
{t:1,d:.5,f:E5,s:"la"},{t:1.5,d:.5,f:Eb5,s:"la"},
{t:2,d:.5,f:E5,s:"la"},{t:2.5,d:.5,f:B4,s:"la"},
{t:3,d:.5,f:D5,s:"la"},{t:3.5,d:.5,f:C5,s:"la"},
{t:4,d:1,f:A4,s:"la"},
{t:5,d:.5,f:C4,s:"La"},{t:5.5,d:.5,f:E4,s:"la"},
{t:6,d:.5,f:A4,s:"la"},{t:6.5,d:1,f:B4,s:"la"},
{t:7.5,d:.5,f:E4,s:"La"},{t:8,d:.5,f:Ab4,s:"la"},
{t:8.5,d:.5,f:B4,s:"la"},{t:9,d:1,f:C5,s:"la"},
{t:10,d:.5,f:E4,s:"La"},{t:10.5,d:.5,f:E5,s:"la"},
{t:11,d:.5,f:Eb5,s:"la"},{t:11.5,d:.5,f:E5,s:"la"},
{t:12,d:.5,f:Eb5,s:"la"},{t:12.5,d:.5,f:E5,s:"la"},
{t:13,d:.5,f:B4,s:"la"},{t:13.5,d:.5,f:D5,s:"la"},
{t:14,d:.5,f:C5,s:"la"},{t:14.5,d:1,f:A4,s:"la"}
],lyrics:[{t:0,tx:"La la la la la la"},{t:4,tx:"la la la la"},{t:7.5,tx:"la la la la"},{t:10,tx:"la la la la la la la la la"}],dur:16},

{id:94,cat:"동요",title:"올챙이와 개구리",icon:"🐸",diff:"쉬움",dc:"diff-easy",bpm:126,
melody:[
{t:0,d:.35,f:C4,s:"개"},{t:.35,d:.35,f:C4,s:"굴"},
{t:.7,d:.35,f:E4,s:"에"},{t:1.05,d:.35,f:E4,s:"서"},
{t:1.4,d:.35,f:G4,s:"놀"},{t:1.75,d:.35,f:G4,s:"던"},
{t:2.1,d:.7,f:E4,s:"올"},
{t:2.8,d:.35,f:D4,s:"챙"},{t:3.15,d:.7,f:C4,s:"이"},
{t:3.85,d:.35,f:D4,s:"뒷"},{t:4.2,d:.35,f:E4,s:"다"},
{t:4.55,d:.35,f:D4,s:"리"},{t:4.9,d:.35,f:C4,s:"가"},
{t:5.25,d:.7,f:E4,s:"나"},
{t:5.95,d:.35,f:G4,s:"오"},{t:6.3,d:.35,f:E4,s:"면"},
{t:6.65,d:.35,f:G4,s:"개"},{t:7,d:.35,f:A4,s:"구"},
{t:7.35,d:.7,f:G4,s:"리"}
],lyrics:[{t:0,tx:"개굴에서 놀던 올챙이"},{t:3.85,tx:"뒷다리가 나오면"},{t:6.65,tx:"개구리"}],dur:8},

{id:95,cat:"세계명곡",title:"라 쿠카라차",icon:"💃",diff:"보통",dc:"diff-medium",bpm:130,
melody:[
{t:0,d:.3,f:C4,s:"La"},{t:.3,d:.3,f:C4,s:"cu"},
{t:.6,d:.3,f:C4,s:"ca"},{t:.9,d:.6,f:F4,s:"ra"},
{t:1.5,d:.6,f:A4,s:"cha"},
{t:2.1,d:.3,f:C4,s:"La"},{t:2.4,d:.3,f:C4,s:"cu"},
{t:2.7,d:.3,f:C4,s:"ca"},{t:3,d:.6,f:F4,s:"ra"},
{t:3.6,d:.6,f:A4,s:"cha"},
{t:4.2,d:.3,f:F4,s:"ya"},{t:4.5,d:.3,f:F4,s:"no"},
{t:4.8,d:.3,f:E4,s:"pue"},{t:5.1,d:.3,f:E4,s:"de"},
{t:5.4,d:.3,f:D4,s:"ca"},{t:5.7,d:.3,f:D4,s:"mi"},
{t:6,d:.6,f:C4,s:"nar"},
{t:6.6,d:.3,f:E4,s:"por"},{t:6.9,d:.3,f:E4,s:"que"},
{t:7.2,d:.3,f:D4,s:"le"},{t:7.5,d:.3,f:D4,s:"fal"},
{t:7.8,d:.3,f:C4,s:"ta"},{t:8.1,d:.3,f:C4,s:"por"},
{t:8.4,d:.3,f:Bb3,s:"que"},{t:8.7,d:.3,f:Bb3,s:"no"},
{t:9,d:.6,f:A3,s:"tie"},{t:9.6,d:.6,f:A3,s:"ne"}
],lyrics:[{t:0,tx:"La cucaracha"},{t:2.1,tx:"La cucaracha"},{t:4.2,tx:"ya no puede caminar"},{t:6.6,tx:"porque le falta porque no tiene"}],dur:11}
];

if(typeof SONGS!=='undefined'){NEW_SONGS_V12.forEach(function(s){if(!SONGS.find(function(x){return x.id===s.id;}))SONGS.push(s);});}

// ===== WEB AUDIO SFX ENGINE v12 (12 sounds) =====
var sfxV12Types={
vu_open:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(440,ac.currentTime);o.frequency.linearRampToValueAtTime(880,ac.currentTime+.15);g.gain.setValueAtTime(.18,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.2);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.2);},
lyrics_analyze:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.setValueAtTime(349,ac.currentTime);o.frequency.linearRampToValueAtTime(523,ac.currentTime+.25);g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.3);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.3);},
report_gen:function(ac){for(var i=0;i<3;i++){var o=ac.createOscillator(),g2=ac.createGain();o.type='sine';o.frequency.setValueAtTime([392,523,659][i],ac.currentTime+i*.08);g2.gain.setValueAtTime(.15,ac.currentTime+i*.08);g2.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.08+.2);o.connect(g2);g2.connect(ac.destination);o.start(ac.currentTime+i*.08);o.stop(ac.currentTime+i*.08+.2);}},
medley_start:function(ac){for(var i=0;i<4;i++){var o=ac.createOscillator(),g2=ac.createGain();o.type='sine';o.frequency.setValueAtTime([262,330,392,523][i],ac.currentTime+i*.1);g2.gain.setValueAtTime(.2,ac.currentTime+i*.1);g2.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.1+.15);o.connect(g2);g2.connect(ac.destination);o.start(ac.currentTime+i*.1);o.stop(ac.currentTime+i*.1+.15);}},
pitch_game:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='square';o.frequency.setValueAtTime(660,ac.currentTime);o.frequency.linearRampToValueAtTime(990,ac.currentTime+.12);g.gain.setValueAtTime(.1,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.15);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.15);},
challenge:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(523,ac.currentTime);o.frequency.setValueAtTime(659,ac.currentTime+.1);o.frequency.setValueAtTime(784,ac.currentTime+.2);g.gain.setValueAtTime(.2,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.3);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.3);},
profile_gen:function(ac){for(var i=0;i<5;i++){var o=ac.createOscillator(),g2=ac.createGain();o.type='sine';o.frequency.setValueAtTime([262,330,392,523,659][i],ac.currentTime+i*.06);g2.gain.setValueAtTime(.15,ac.currentTime+i*.06);g2.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.06+.15);o.connect(g2);g2.connect(ac.destination);o.start(ac.currentTime+i*.06);o.stop(ac.currentTime+i*.06+.15);}},
dict_open:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.setValueAtTime(440,ac.currentTime);g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.2);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.2);},
health_tip:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(262,ac.currentTime);o.frequency.linearRampToValueAtTime(392,ac.currentTime+.3);g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.35);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.35);},
pitch_correct:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.setValueAtTime(784,ac.currentTime);g.gain.setValueAtTime(.2,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.1);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.1);},
pitch_wrong:function(ac){var o=ac.createOscillator(),g=ac.createGain();o.type='sawtooth';o.frequency.setValueAtTime(200,ac.currentTime);g.gain.setValueAtTime(.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.01,ac.currentTime+.15);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.15);},
v12_achieve:function(ac){for(var i=0;i<5;i++){var o=ac.createOscillator(),g2=ac.createGain();o.type='sine';o.frequency.setValueAtTime([523,587,659,784,1047][i],ac.currentTime+i*.1);g2.gain.setValueAtTime(.17,ac.currentTime+i*.1);g2.gain.exponentialRampToValueAtTime(.01,ac.currentTime+i*.1+.18);o.connect(g2);g2.connect(ac.destination);o.start(ac.currentTime+i*.1);o.stop(ac.currentTime+i*.1+.18);}}
};

function playSfxV12(type){
try{var ac=new(window.AudioContext||window.webkitAudioContext)();if(sfxV12Types[type])sfxV12Types[type](ac);setTimeout(function(){ac.close();},2000);}catch(e){}
}

// ===== 12 NEW ACHIEVEMENTS (v12: 66→78) =====
var NEW_ACHIEVE_V12=[
{id:'songs_95',title:'🎵 95곡 마스터',desc:'95곡 모두 부르기',check:function(){var s=ls12('songsSung',{});try{var s2=JSON.parse(localStorage.getItem('sv11-songsSung')||'{}');Object.keys(s2).forEach(function(k){s[k]=true;});}catch(e){}return Object.keys(s).length>=95;}},
{id:'vu_watcher',title:'📊 VU 감상가',desc:'VU 미터 5회 사용',check:function(){return ls12('vuViews',0)>=5;}},
{id:'lyrics_analyst',title:'📝 가사 분석가',desc:'가사 분석 3회',check:function(){return ls12('lyricsAnalyzed',0)>=3;}},
{id:'report_master',title:'📋 리포트 마스터',desc:'보컬 리포트 생성',check:function(){return ls12('reportGenerated',false);}},
{id:'medley_star',title:'🎭 메들리 스타',desc:'메들리 모드 완주',check:function(){return ls12('medleyComplete',0)>=1;}},
{id:'pitch_ace',title:'🎯 음정 에이스',desc:'음정 게임 90점+',check:function(){return ls12('pitchGameBest',0)>=90;}},
{id:'challenge_7',title:'🏆 주간 챌린저',desc:'챌린지 7개 완료',check:function(){return ls12('challengesDone',[]).length>=7;}},
{id:'profile_shared',title:'🪪 프로필 공유',desc:'프로필 카드 생성',check:function(){return ls12('profileGenerated',false);}},
{id:'dict_reader',title:'📚 음악 박사',desc:'용어사전 20개 읽기',check:function(){return ls12('dictRead',[]).length>=20;}},
{id:'health_aware',title:'💚 건강한 가수',desc:'건강 가이드 전체 읽기',check:function(){return ls12('healthRead',[]).length>=8;}},
{id:'score_s_10',title:'🌟 S등급 10회',desc:'S등급 10곡 달성',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}return h.filter(function(x){return x.score>=95;}).length>=10;}},
{id:'v12_explorer',title:'🚀 v12 탐험가',desc:'v12 신기능 5개 이상 사용',check:function(){var c=0;if(ls12('vuViews',0)>0)c++;if(ls12('lyricsAnalyzed',0)>0)c++;if(ls12('reportGenerated',false))c++;if(ls12('medleyComplete',0)>0)c++;if(ls12('pitchGameBest',0)>0)c++;if(ls12('challengesDone',[]).length>0)c++;if(ls12('profileGenerated',false))c++;if(ls12('dictRead',[]).length>0)c++;if(ls12('healthRead',[]).length>0)c++;return c>=5;}}
];

if(typeof ACHIEVEMENTS!=='undefined'){NEW_ACHIEVE_V12.forEach(function(a){if(!ACHIEVEMENTS.find(function(x){return x.id===a.id;}))ACHIEVEMENTS.push(a);});}

// ===== 1. VU METER CANVAS VISUALIZATION =====
function showVUMeter(){
playSfxV12('vu_open');
ls12s('vuViews',(ls12('vuViews',0))+1);
var m=document.createElement('div');m.id='v12-vu-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">📊 VU 미터</h2><button onclick="this.closest(\'#v12-vu-modal\').remove();window.__v12VURunning=false;" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v12-vu-canvas" width="480" height="320" style="width:100%;background:#0a0818;border-radius:12px;border:1px solid rgba(255,106,176,.2);"></canvas>';
html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;">';
html+='<div style="background:rgba(255,106,176,.1);border:1px solid rgba(255,106,176,.2);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">현재 dB</div><div id="v12-vu-db" style="color:#ff6ab0;font-size:22px;font-weight:bold;">--</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">피크</div><div id="v12-vu-peak" style="color:#a855f7;font-size:22px;font-weight:bold;">--</div></div>';
html+='<div style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">평균</div><div id="v12-vu-avg" style="color:#22c55e;font-size:22px;font-weight:bold;">--</div></div></div>';
html+='<button id="v12-vu-start" onclick="startVUMeter()" style="background:linear-gradient(135deg,#ff6ab0,#a855f7);color:#fff;border:none;border-radius:10px;padding:12px;width:100%;margin-top:12px;cursor:pointer;font-size:14px;font-weight:bold;">🎤 마이크 시작</button>';
html+='<p style="color:#666;font-size:11px;text-align:center;margin-top:8px;">마이크 입력 레벨을 실시간 시각화합니다</p>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.startVUMeter=function(){
window.__v12VURunning=true;
var btn=document.getElementById('v12-vu-start');
if(btn){btn.textContent='측정 중...';btn.style.opacity='.6';}
navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
var ac=new(window.AudioContext||window.webkitAudioContext)();
var src=ac.createMediaStreamSource(stream);
var analyser=ac.createAnalyser();
analyser.fftSize=256;
src.connect(analyser);
var data=new Uint8Array(analyser.frequencyBinCount);
var peak=0,sum=0,count=0;
function draw(){
if(!window.__v12VURunning){stream.getTracks().forEach(function(t){t.stop();});ac.close();return;}
analyser.getByteFrequencyData(data);
var c=document.getElementById('v12-vu-canvas');if(!c){window.__v12VURunning=false;return;}
var ctx=c.getContext('2d');var W=c.width,H=c.height;
ctx.fillStyle='rgba(10,8,24,.3)';ctx.fillRect(0,0,W,H);
var barW=W/data.length*2.5;
var rms=0;
for(var i=0;i<data.length;i++){
var v=data[i]/255;rms+=v*v;
var h=v*H*.9;
var grad=ctx.createLinearGradient(0,H-h,0,H);
grad.addColorStop(0,v>0.8?'#ef4444':v>0.5?'#eab308':'#22c55e');
grad.addColorStop(1,'rgba(168,85,247,.3)');
ctx.fillStyle=grad;
ctx.fillRect(i*barW+1,H-h,barW-2,h);
}
rms=Math.sqrt(rms/data.length);
var db=Math.round(20*Math.log10(rms+0.0001));
if(db>peak)peak=db;
sum+=db;count++;
var avg=Math.round(sum/count);
var dbEl=document.getElementById('v12-vu-db');if(dbEl)dbEl.textContent=db+'dB';
var peakEl=document.getElementById('v12-vu-peak');if(peakEl)peakEl.textContent=peak+'dB';
var avgEl=document.getElementById('v12-vu-avg');if(avgEl)avgEl.textContent=avg+'dB';
ctx.fillStyle='#ff6ab0';ctx.font='bold 14px sans-serif';
ctx.fillText('LEVEL',10,20);
var meterW=W-80;var meterX=60;
ctx.fillStyle='rgba(255,255,255,.05)';ctx.fillRect(meterX,6,meterW,10);
var level=Math.min(1,Math.max(0,(db+60)/60));
var mGrad=ctx.createLinearGradient(meterX,0,meterX+meterW*level,0);
mGrad.addColorStop(0,'#22c55e');mGrad.addColorStop(0.6,'#eab308');mGrad.addColorStop(1,'#ef4444');
ctx.fillStyle=mGrad;ctx.fillRect(meterX,6,meterW*level,10);
requestAnimationFrame(draw);
}
draw();
}).catch(function(){
var btn2=document.getElementById('v12-vu-start');
if(btn2){btn2.textContent='마이크 접근 실패';btn2.style.background='#ef4444';}
});
};

// ===== 2. LYRICS ANALYZER =====
function showLyricsAnalyzer(){
playSfxV12('lyrics_analyze');
ls12s('lyricsAnalyzed',(ls12('lyricsAnalyzed',0))+1);
var m=document.createElement('div');m.id='v12-lyrics-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">📝 가사 분석기</h2><button onclick="this.closest(\'#v12-lyrics-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

if(typeof SONGS==='undefined'){html+='<p style="color:#888;">곡 데이터를 불러올 수 없습니다.</p></div>';m.innerHTML=html;document.body.appendChild(m);return;}

var catStats={};var totalSyl=0,totalSongs=0;
SONGS.forEach(function(s){
if(!catStats[s.cat])catStats[s.cat]={count:0,syllables:0,avgBpm:0};
catStats[s.cat].count++;
catStats[s.cat].avgBpm+=s.bpm||0;
var syl=0;if(s.melody)s.melody.forEach(function(){syl++;});
catStats[s.cat].syllables+=syl;
totalSyl+=syl;totalSongs++;
});

html+='<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:16px;">';
html+='<div style="background:rgba(255,106,176,.1);border:1px solid rgba(255,106,176,.2);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">총 곡 수</div><div style="color:#ff6ab0;font-size:28px;font-weight:bold;">'+totalSongs+'</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:12px;text-align:center;"><div style="color:#888;font-size:11px;">총 음절 수</div><div style="color:#a855f7;font-size:28px;font-weight:bold;">'+totalSyl+'</div></div></div>';

html+='<h3 style="color:#c084fc;margin:12px 0 8px;">장르별 분석</h3>';
Object.keys(catStats).forEach(function(cat){
var st=catStats[cat];
var avgBpm=Math.round(st.avgBpm/st.count);
var avgSyl=Math.round(st.syllables/st.count);
var barW=Math.round(st.count/totalSongs*100);
html+='<div style="background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.15);border-radius:10px;padding:12px;margin-bottom:8px;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<span style="color:#e0e0e0;font-weight:bold;">'+cat+'</span>';
html+='<span style="color:#ff6ab0;font-size:13px;">'+st.count+'곡</span></div>';
html+='<div style="height:6px;background:rgba(255,255,255,.08);border-radius:3px;margin:6px 0;overflow:hidden;"><div style="height:100%;width:'+barW+'%;background:linear-gradient(90deg,#ff6ab0,#a855f7);border-radius:3px;"></div></div>';
html+='<div style="display:flex;justify-content:space-between;color:#888;font-size:11px;"><span>평균 BPM: '+avgBpm+'</span><span>평균 음절: '+avgSyl+'</span></div></div>';
});

var diffCount={easy:0,medium:0,hard:0};
SONGS.forEach(function(s){
if(s.dc==='diff-easy')diffCount.easy++;
else if(s.dc==='diff-medium')diffCount.medium++;
else if(s.dc==='diff-hard')diffCount.hard++;
});
html+='<h3 style="color:#c084fc;margin:12px 0 8px;">난이도 분포</h3>';
html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">';
html+='<div style="background:rgba(76,175,80,.1);border:1px solid rgba(76,175,80,.3);border-radius:10px;padding:10px;text-align:center;"><div style="color:#4caf50;font-size:24px;font-weight:bold;">'+diffCount.easy+'</div><div style="color:#888;font-size:11px;">쉬움</div></div>';
html+='<div style="background:rgba(255,152,0,.1);border:1px solid rgba(255,152,0,.3);border-radius:10px;padding:10px;text-align:center;"><div style="color:#ff9800;font-size:24px;font-weight:bold;">'+diffCount.medium+'</div><div style="color:#888;font-size:11px;">보통</div></div>';
html+='<div style="background:rgba(244,67,54,.1);border:1px solid rgba(244,67,54,.3);border-radius:10px;padding:10px;text-align:center;"><div style="color:#f44336;font-size:24px;font-weight:bold;">'+diffCount.hard+'</div><div style="color:#888;font-size:11px;">어려움</div></div></div>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

// ===== 3. VOCAL REPORT (RADAR CANVAS) =====
function showVocalReport(){
playSfxV12('report_gen');
ls12s('reportGenerated',true);
var m=document.createElement('div');m.id='v12-report-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';

var hist=[];try{hist=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}
var totalPlayed=hist.length;
var avgScore=0;if(totalPlayed>0){hist.forEach(function(h){avgScore+=h.score;});avgScore=Math.round(avgScore/totalPlayed);}
var sGrade=hist.filter(function(h){return h.score>=95;}).length;
var uniqueSongs={};hist.forEach(function(h){uniqueSongs[h.id]=true;});
var variety=Object.keys(uniqueSongs).length;
var consistency=0;
if(totalPlayed>=3){
var scores=hist.slice(-10).map(function(h){return h.score;});
var mean=scores.reduce(function(a,b){return a+b;},0)/scores.length;
var variance=scores.reduce(function(a,b){return a+(b-mean)*(b-mean);},0)/scores.length;
consistency=Math.max(0,100-Math.round(Math.sqrt(variance)*2));
}

var pitch=Math.min(100,avgScore);
var rhythm=Math.min(100,Math.round(avgScore*0.9+totalPlayed*0.5));
var range2=Math.min(100,variety*5);
var stamina=Math.min(100,totalPlayed*3);
var expression=Math.min(100,Math.round((consistency+sGrade*10)/2));

var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">📋 보컬 리포트</h2><button onclick="this.closest(\'#v12-report-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v12-radar-canvas" width="400" height="400" style="width:100%;max-width:400px;display:block;margin:0 auto;"></canvas>';

var overallScore=Math.round((pitch+rhythm+range2+stamina+expression)/5);
var grade=overallScore>=90?'S':overallScore>=80?'A':overallScore>=70?'B':overallScore>=60?'C':'D';
var gradeColor=grade==='S'?'#ffd700':grade==='A'?'#22c55e':grade==='B'?'#3b82f6':grade==='C'?'#ff9800':'#ef4444';

html+='<div style="text-align:center;margin:12px 0;"><span style="font-size:60px;font-weight:900;color:'+gradeColor+';text-shadow:0 0 30px '+gradeColor+'44;">'+grade+'</span><div style="color:#888;font-size:14px;">종합 점수: <span style="color:'+gradeColor+';font-weight:bold;">'+overallScore+'</span>/100</div></div>';

var axes=[{name:'음정',val:pitch},{name:'리듬',val:rhythm},{name:'음역',val:range2},{name:'지구력',val:stamina},{name:'표현력',val:expression}];
html+='<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin:12px 0;">';
axes.forEach(function(a){
var c=a.val>=80?'#22c55e':a.val>=60?'#eab308':'#ef4444';
html+='<div style="text-align:center;"><div style="color:'+c+';font-size:18px;font-weight:bold;">'+a.val+'</div><div style="color:#888;font-size:10px;">'+a.name+'</div></div>';
});
html+='</div>';

html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:12px;margin-top:12px;">';
html+='<div style="color:#c084fc;font-size:13px;font-weight:bold;margin-bottom:8px;">분석 요약</div>';
html+='<div style="color:#aaa;font-size:12px;line-height:1.8;">';
html+='총 '+totalPlayed+'곡 연습 / '+variety+'종 다양성 / S등급 '+sGrade+'회<br>';
if(avgScore>=90)html+='뛰어난 음정 감각! 고난도 곡에 도전해보세요.';
else if(avgScore>=70)html+='좋은 실력입니다. 꾸준히 연습하면 S등급 가능!';
else if(avgScore>=50)html+='기본기가 있습니다. 쉬운 곡부터 연습해보세요.';
else html+='아직 시작 단계입니다. 동요부터 시작해보세요!';
html+='</div></div></div>';

m.innerHTML=html;
document.body.appendChild(m);
drawRadarCanvas(axes);
}

function drawRadarCanvas(axes){
var c=document.getElementById('v12-radar-canvas');if(!c)return;
var ctx=c.getContext('2d');
var W=c.width,H=c.height;
var cx=W/2,cy=H/2,r=150;
ctx.clearRect(0,0,W,H);

for(var ring=1;ring<=5;ring++){
ctx.strokeStyle='rgba(168,85,247,'+(0.08+ring*0.03)+')';ctx.lineWidth=1;
ctx.beginPath();
for(var i=0;i<=5;i++){
var angle=Math.PI*2*i/5-Math.PI/2;
var rr=r*ring/5;
var x=cx+rr*Math.cos(angle);
var y=cy+rr*Math.sin(angle);
if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
}
ctx.closePath();ctx.stroke();
}

for(var i=0;i<5;i++){
var angle=Math.PI*2*i/5-Math.PI/2;
ctx.strokeStyle='rgba(168,85,247,.15)';
ctx.beginPath();ctx.moveTo(cx,cy);
ctx.lineTo(cx+r*Math.cos(angle),cy+r*Math.sin(angle));
ctx.stroke();
ctx.fillStyle='#c084fc';ctx.font='bold 13px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
var lx=cx+(r+22)*Math.cos(angle);
var ly=cy+(r+22)*Math.sin(angle);
ctx.fillText(axes[i].name,lx,ly);
}

ctx.beginPath();
axes.forEach(function(a,i){
var angle=Math.PI*2*i/5-Math.PI/2;
var val=a.val/100*r;
var x=cx+val*Math.cos(angle);
var y=cy+val*Math.sin(angle);
if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
});
ctx.closePath();
ctx.fillStyle='rgba(255,106,176,.2)';ctx.fill();
ctx.strokeStyle='#ff6ab0';ctx.lineWidth=2;ctx.stroke();

axes.forEach(function(a,i){
var angle=Math.PI*2*i/5-Math.PI/2;
var val=a.val/100*r;
var x=cx+val*Math.cos(angle);
var y=cy+val*Math.sin(angle);
ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);
ctx.fillStyle='#ff6ab0';ctx.fill();
ctx.strokeStyle='#fff';ctx.lineWidth=1;ctx.stroke();
});
}

// ===== 4. MEDLEY MODE =====
function showMedleyMode(){
playSfxV12('medley_start');
var m=document.createElement('div');m.id='v12-medley-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">🎭 메들리 모드</h2><button onclick="this.closest(\'#v12-medley-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

var presets=[
{name:'동요 메들리',icon:'🧒',desc:'쉬운 동요 5곡 연속',filter:function(s){return s.cat==='동요';}},
{name:'가요 메들리',icon:'🇰🇷',desc:'한국 가요/민요 5곡',filter:function(s){return s.cat==='가요/민요';}},
{name:'세계명곡 메들리',icon:'🌍',desc:'클래식/세계명곡 5곡',filter:function(s){return s.cat==='세계명곡';}},
{name:'랜덤 메들리',icon:'🎲',desc:'전 장르 랜덤 5곡',filter:function(){return true;}},
{name:'고난도 메들리',icon:'🔥',desc:'어려운 곡만 5곡',filter:function(s){return s.dc==='diff-hard';}},
{name:'초보자 메들리',icon:'🌱',desc:'쉬운 곡만 5곡',filter:function(s){return s.dc==='diff-easy';}}
];

var medleyHist=ls12('medleyHistory',[]);
html+='<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:16px;">';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">완주 횟수</div><div style="color:#a855f7;font-size:22px;font-weight:bold;">'+ls12('medleyComplete',0)+'</div></div>';
html+='<div style="background:rgba(255,106,176,.1);border:1px solid rgba(255,106,176,.2);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">최고 평균</div><div style="color:#ff6ab0;font-size:22px;font-weight:bold;">'+(ls12('medleyBestAvg',0)||'--')+'</div></div></div>';

presets.forEach(function(p){
var available=0;
if(typeof SONGS!=='undefined')available=SONGS.filter(p.filter).length;
html+='<div style="background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:14px;margin-bottom:8px;cursor:pointer;transition:all .2s;" onmouseover="this.style.borderColor=\'#ff6ab0\'" onmouseout="this.style.borderColor=\'rgba(168,85,247,.2)\'" onclick="startMedley(\''+p.name+'\')">';
html+='<div style="display:flex;align-items:center;gap:10px;">';
html+='<span style="font-size:28px;">'+p.icon+'</span>';
html+='<div><div style="color:#e0e0e0;font-weight:bold;">'+p.name+'</div>';
html+='<div style="color:#888;font-size:11px;">'+p.desc+' ('+available+'곡 가능)</div></div></div></div>';
});
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.startMedley=function(presetName){
if(typeof SONGS==='undefined')return;
var filters={
'동요 메들리':function(s){return s.cat==='동요';},
'가요 메들리':function(s){return s.cat==='가요/민요';},
'세계명곡 메들리':function(s){return s.cat==='세계명곡';},
'랜덤 메들리':function(){return true;},
'고난도 메들리':function(s){return s.dc==='diff-hard';},
'초보자 메들리':function(s){return s.dc==='diff-easy';}
};
var filter=filters[presetName]||function(){return true;};
var pool=SONGS.filter(filter);
if(pool.length<3){alert('곡이 부족합니다 (최소 3곡 필요)');return;}
var shuffled=pool.slice().sort(function(){return Math.random()-.5;}).slice(0,5);
ls12s('medleyQueue',shuffled.map(function(s){return s.id;}));
ls12s('medleyIdx',0);
ls12s('medleyScores',[]);
ls12s('medleyName',presetName);
var el=document.getElementById('v12-medley-modal');if(el)el.remove();
alert(presetName+' 시작! '+shuffled.length+'곡 연속 도전');
if(typeof selectSong==='function')selectSong(shuffled[0].id);
};

// ===== 5. PITCH MATCH MINI-GAME =====
function showPitchGame(){
playSfxV12('pitch_game');
var m=document.createElement('div');m.id='v12-pitchgame-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">🎯 음정 맞추기</h2><button onclick="this.closest(\'#v12-pitchgame-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

var best=ls12('pitchGameBest',0);
var plays=ls12('pitchGamePlays',0);

html+='<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:16px;">';
html+='<div style="background:rgba(255,106,176,.1);border:1px solid rgba(255,106,176,.2);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">최고 점수</div><div style="color:#ff6ab0;font-size:22px;font-weight:bold;">'+best+'</div></div>';
html+='<div style="background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.2);border-radius:10px;padding:10px;text-align:center;"><div style="color:#888;font-size:11px;">플레이 횟수</div><div style="color:#a855f7;font-size:22px;font-weight:bold;">'+plays+'</div></div></div>';

html+='<div style="text-align:center;margin:20px 0;">';
html+='<div style="color:#888;font-size:13px;margin-bottom:12px;">목표 음을 듣고, 같은 음정을 맞춰보세요!</div>';
html+='<canvas id="v12-pg-canvas" width="400" height="200" style="width:100%;background:#0a0818;border-radius:10px;border:1px solid rgba(168,85,247,.2);margin-bottom:12px;"></canvas>';
html+='<div id="v12-pg-status" style="font-size:18px;font-weight:bold;color:#c084fc;margin:8px 0;">준비</div>';
html+='<div id="v12-pg-score" style="font-size:14px;color:#888;">0 / 10</div>';
html+='</div>';

html+='<button onclick="startPitchGame()" style="background:linear-gradient(135deg,#ff6ab0,#a855f7);color:#fff;border:none;border-radius:10px;padding:12px;width:100%;cursor:pointer;font-size:14px;font-weight:bold;">게임 시작</button>';
html+='<p style="color:#666;font-size:11px;text-align:center;margin-top:8px;">음정을 듣고 4개 보기 중 정답을 고르세요 (10문제)</p>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.startPitchGame=function(){
ls12s('pitchGamePlays',(ls12('pitchGamePlays',0))+1);
var notes=[
{name:'도(C4)',freq:261.63},{name:'레(D4)',freq:293.66},{name:'미(E4)',freq:329.63},
{name:'파(F4)',freq:349.23},{name:'솔(G4)',freq:392.00},{name:'라(A4)',freq:440.00},
{name:'시(B4)',freq:493.88},{name:'높은도(C5)',freq:523.25}
];
var round=0,score=0,total=10;
function nextRound(){
if(round>=total){
var finalScore=Math.round(score/total*100);
var best=ls12('pitchGameBest',0);
if(finalScore>best)ls12s('pitchGameBest',finalScore);
var statusEl=document.getElementById('v12-pg-status');
if(statusEl)statusEl.innerHTML='<span style="color:'+(finalScore>=90?'#22c55e':finalScore>=70?'#eab308':'#ef4444')+';">최종: '+finalScore+'점!</span>';
var scoreEl=document.getElementById('v12-pg-score');
if(scoreEl)scoreEl.textContent=score+' / '+total+' 정답';
return;
}
var correct=notes[Math.floor(Math.random()*notes.length)];
var options=[correct];
while(options.length<4){
var opt=notes[Math.floor(Math.random()*notes.length)];
if(!options.find(function(o){return o.name===opt.name;}))options.push(opt);
}
options.sort(function(){return Math.random()-.5;});
try{
var ac=new(window.AudioContext||window.webkitAudioContext)();
var osc=ac.createOscillator();var gn=ac.createGain();
osc.type='sine';osc.frequency.setValueAtTime(correct.freq,ac.currentTime);
gn.gain.setValueAtTime(.25,ac.currentTime);gn.gain.exponentialRampToValueAtTime(.01,ac.currentTime+1);
osc.connect(gn);gn.connect(ac.destination);osc.start();osc.stop(ac.currentTime+1);
setTimeout(function(){ac.close();},1500);
}catch(e){}
var c=document.getElementById('v12-pg-canvas');
if(c){
var ctx=c.getContext('2d');var W=c.width,H=c.height;
ctx.clearRect(0,0,W,H);
ctx.fillStyle='#ff6ab0';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
ctx.fillText('Round '+(round+1)+'/'+total,W/2,30);
ctx.fillStyle='#eab308';ctx.font='20px sans-serif';
ctx.fillText('♫ ?',W/2,70);
var btnW=170,btnH=50,gap=10;
var startX=(W-btnW*2-gap)/2;var startY=90;
options.forEach(function(opt,i){
var col=Math.floor(i/2);var row=i%2;
var bx=startX+row*(btnW+gap);var by=startY+col*(btnH+gap);
ctx.fillStyle='rgba(168,85,247,.2)';
ctx.strokeStyle='rgba(168,85,247,.4)';ctx.lineWidth=1;
ctx.beginPath();ctx.roundRect(bx,by,btnW,btnH,8);ctx.fill();ctx.stroke();
ctx.fillStyle='#e0e0e0';ctx.font='14px sans-serif';ctx.textAlign='center';
ctx.fillText(opt.name,bx+btnW/2,by+btnH/2+5);
});
c.onclick=function(e){
var rect=c.getBoundingClientRect();
var sx=e.clientX-rect.left;var sy=e.clientY-rect.top;
var scaleX=c.width/rect.width;var scaleY=c.height/rect.height;
sx*=scaleX;sy*=scaleY;
var startX2=(W-btnW*2-gap)/2;var startY2=90;
options.forEach(function(opt,i){
var col=Math.floor(i/2);var row=i%2;
var bx=startX2+row*(btnW+gap);var by=startY2+col*(btnH+gap);
if(sx>=bx&&sx<=bx+btnW&&sy>=by&&sy<=by+btnH){
if(opt.name===correct.name){score++;playSfxV12('pitch_correct');}
else{playSfxV12('pitch_wrong');}
round++;
var statusEl=document.getElementById('v12-pg-status');
if(statusEl)statusEl.textContent=(opt.name===correct.name?'정답!':'오답 ('+correct.name+')')+'  '+score+'/'+total;
c.onclick=null;
setTimeout(nextRound,800);
}
});
};
}
var statusEl=document.getElementById('v12-pg-status');
if(statusEl)statusEl.textContent='음을 듣고 맞춰보세요!';
var scoreEl=document.getElementById('v12-pg-score');
if(scoreEl)scoreEl.textContent=score+' / '+total;
}
nextRound();
};

// ===== 6. WEEKLY CHALLENGES =====
function showChallenges(){
playSfxV12('challenge');
var m=document.createElement('div');m.id='v12-challenge-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';

var now=new Date();
var weekNum=Math.floor(now.getTime()/(7*24*60*60*1000));
var challenges=[
{id:'ch_easy3',title:'쉬운 곡 3곡 부르기',icon:'🌱',desc:'쉬운 난이도 곡 3곡 완료',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}var thisWeek=h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000&&x.diff==='쉬움';});return thisWeek.length>=3;}},
{id:'ch_s1',title:'S등급 달성',icon:'🌟',desc:'아무 곡이나 S등급(95+) 한 번',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}return h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000&&x.score>=95;}).length>=1;}},
{id:'ch_5songs',title:'5곡 연습',icon:'🎤',desc:'이번 주 5곡 이상 부르기',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}return h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000;}).length>=5;}},
{id:'ch_variety',title:'장르 탐험',icon:'🎵',desc:'3개 이상 장르 곡 부르기',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}var cats={};h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000;}).forEach(function(x){cats[x.diff]=true;});return Object.keys(cats).length>=3;}},
{id:'ch_hard1',title:'도전자 정신',icon:'🔥',desc:'어려운 곡 1곡 도전',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}return h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000&&x.diff==='어려움';}).length>=1;}},
{id:'ch_improve',title:'실력 향상',icon:'📈',desc:'같은 곡 2회 부르고 점수 올리기',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}var byId={};h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000;}).forEach(function(x){if(!byId[x.id])byId[x.id]=[];byId[x.id].push(x.score);});return Object.keys(byId).some(function(id){var sc=byId[id];return sc.length>=2&&sc[sc.length-1]>sc[0];});}},
{id:'ch_streak3',title:'3일 연속',icon:'🔥',desc:'3일 연속 노래 부르기',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}var days={};h.forEach(function(x){var d=new Date(x.ts);days[d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()]=true;});var streak=0;for(var i=0;i<7;i++){var d=new Date(now.getTime()-i*24*60*60*1000);if(days[d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()])streak++;else break;}return streak>=3;}},
{id:'ch_pitch5',title:'음정 게임 도전',icon:'🎯',desc:'음정 맞추기 5회 플레이',check:function(){return ls12('pitchGamePlays',0)>=5;}},
{id:'ch_new_song',title:'새 곡 도전',icon:'✨',desc:'처음 부르는 곡 3곡',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}var recent=h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000;});var prev={};h.filter(function(x){return x.ts<=now.getTime()-7*24*60*60*1000;}).forEach(function(x){prev[x.id]=true;});var newSongs=recent.filter(function(x){return!prev[x.id];});return newSongs.length>=3;}},
{id:'ch_avg80',title:'평균 80점+',icon:'💪',desc:'이번 주 평균 점수 80점 이상',check:function(){var h=[];try{h=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}var recent=h.filter(function(x){return x.ts>now.getTime()-7*24*60*60*1000;});if(recent.length===0)return false;var avg=recent.reduce(function(a,b){return a+b.score;},0)/recent.length;return avg>=80;}}
];

var done=ls12('challengesDone',[]);
challenges.forEach(function(ch){if(ch.check()&&done.indexOf(ch.id)===-1)done.push(ch.id);});
ls12s('challengesDone',done);

var html='<div style="max-width:500px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">🏆 주간 챌린지</h2><button onclick="this.closest(\'#v12-challenge-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';

html+='<div style="background:linear-gradient(135deg,rgba(255,106,176,.15),rgba(168,85,247,.15));border:1px solid rgba(255,106,176,.3);border-radius:10px;padding:12px;margin-bottom:12px;text-align:center;">';
html+='<div style="color:#888;font-size:12px;">진행률</div>';
html+='<div style="color:#ff6ab0;font-size:28px;font-weight:bold;">'+done.length+' / '+challenges.length+'</div>';
html+='<div style="height:8px;background:rgba(255,255,255,.1);border-radius:4px;margin-top:8px;overflow:hidden;"><div style="height:100%;width:'+Math.round(done.length/challenges.length*100)+'%;background:linear-gradient(90deg,#ff6ab0,#a855f7);border-radius:4px;transition:width .5s;"></div></div></div>';

challenges.forEach(function(ch){
var isDone=done.indexOf(ch.id)!==-1;
html+='<div style="background:rgba(168,85,247,'+(isDone?'.15':'.05')+');border:1px solid rgba('+(isDone?'34,197,94':'168,85,247')+','+(isDone?'.4':'.2')+');border-radius:10px;padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">';
html+='<span style="font-size:24px;'+(isDone?'':'filter:grayscale(1);opacity:.5;')+'">'+ch.icon+'</span>';
html+='<div style="flex:1;"><div style="color:'+(isDone?'#22c55e':'#e0e0e0')+';font-weight:bold;font-size:13px;">'+(isDone?'✅ ':'')+ch.title+'</div>';
html+='<div style="color:#888;font-size:11px;">'+ch.desc+'</div></div></div>';
});
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

// ===== 7. SINGER PROFILE CARD (Canvas) =====
function showProfileCard(){
playSfxV12('profile_gen');
ls12s('profileGenerated',true);
var m=document.createElement('div');m.id='v12-profile-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">🪪 가수 프로필</h2><button onclick="this.closest(\'#v12-profile-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<canvas id="v12-profile-canvas" width="600" height="380" style="width:100%;border-radius:12px;"></canvas>';
html+='<div style="display:flex;gap:8px;margin-top:12px;">';
html+='<button onclick="downloadProfileCard()" style="flex:1;background:linear-gradient(135deg,#ff6ab0,#a855f7);color:#fff;border:none;border-radius:10px;padding:12px;cursor:pointer;font-size:14px;">📥 다운로드</button>';
html+='<button onclick="copyProfileCard()" style="flex:1;background:rgba(168,85,247,.2);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:10px;padding:12px;cursor:pointer;font-size:14px;">📋 복사</button></div>';
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
drawProfileCard();
}

function drawProfileCard(){
var c=document.getElementById('v12-profile-canvas');if(!c)return;
var ctx=c.getContext('2d');var W=c.width,H=c.height;

var grd=ctx.createLinearGradient(0,0,W,H);
grd.addColorStop(0,'#1a0a30');grd.addColorStop(0.5,'#2a1050');grd.addColorStop(1,'#0a0818');
ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);

ctx.strokeStyle='rgba(255,106,176,.15)';ctx.lineWidth=1;
for(var i=0;i<8;i++){ctx.beginPath();ctx.arc(W/2,H/2,40+i*30,0,Math.PI*2);ctx.stroke();}

ctx.fillStyle='rgba(255,106,176,.15)';
ctx.beginPath();ctx.arc(90,100,50,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#ff6ab0';ctx.font='40px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText('🎤',90,100);

ctx.fillStyle='#ff6ab0';ctx.font='bold 24px sans-serif';ctx.textAlign='left';
ctx.fillText('StarVoice Singer',160,80);
ctx.fillStyle='#c084fc';ctx.font='13px sans-serif';
ctx.fillText('AI Karaoke Profile Card',160,105);

var hist=[];try{hist=JSON.parse(localStorage.getItem('sv11-history')||'[]');}catch(e){}
var totalPlayed=hist.length;
var avgScore=0;if(totalPlayed>0){hist.forEach(function(h){avgScore+=h.score;});avgScore=Math.round(avgScore/totalPlayed);}
var sGrade=hist.filter(function(h){return h.score>=95;}).length;
var uniqueSongs={};hist.forEach(function(h){uniqueSongs[h.id]=true;});
var variety=Object.keys(uniqueSongs).length;
var totalSongs=typeof SONGS!=='undefined'?SONGS.length:95;
var completion=Math.round(variety/totalSongs*100);

var grade=avgScore>=90?'S':avgScore>=80?'A':avgScore>=70?'B':avgScore>=60?'C':'D';
var gradeColor=grade==='S'?'#ffd700':grade==='A'?'#22c55e':grade==='B'?'#3b82f6':grade==='C'?'#ff9800':'#ef4444';

ctx.fillStyle=gradeColor;ctx.font='bold 60px sans-serif';ctx.textAlign='right';
ctx.fillText(grade,W-30,90);

ctx.strokeStyle='rgba(168,85,247,.3)';ctx.lineWidth=1;
ctx.beginPath();ctx.moveTo(20,140);ctx.lineTo(W-20,140);ctx.stroke();

var stats=[
{label:'총 연습',val:totalPlayed+'곡',icon:'🎵'},
{label:'평균 점수',val:avgScore+'점',icon:'📊'},
{label:'S등급',val:sGrade+'회',icon:'🌟'},
{label:'다양성',val:variety+'종',icon:'🎭'},
{label:'완주율',val:completion+'%',icon:'📈'},
{label:'등급',val:grade+'등급',icon:'🏆'}
];

stats.forEach(function(st,i){
var col=i%3;var row=Math.floor(i/3);
var bx=20+col*193;var by=155+row*100;
ctx.fillStyle='rgba(168,85,247,.1)';
ctx.beginPath();ctx.roundRect(bx,by,183,85,10);ctx.fill();
ctx.strokeStyle='rgba(168,85,247,.25)';ctx.stroke();
ctx.fillStyle='#fff';ctx.font='20px sans-serif';ctx.textAlign='center';
ctx.fillText(st.icon,bx+30,by+42);
ctx.fillStyle='#e0e0e0';ctx.font='bold 20px sans-serif';ctx.textAlign='center';
ctx.fillText(st.val,bx+110,by+35);
ctx.fillStyle='#888';ctx.font='12px sans-serif';
ctx.fillText(st.label,bx+110,by+58);
});

ctx.fillStyle='rgba(255,106,176,.6)';ctx.font='11px sans-serif';ctx.textAlign='center';
ctx.fillText('StarVoice v12 — AI Karaoke PWA',W/2,H-15);
}

window.downloadProfileCard=function(){
var c=document.getElementById('v12-profile-canvas');if(!c)return;
var link=document.createElement('a');link.download='starvoice-profile.png';
link.href=c.toDataURL('image/png');link.click();
};
window.copyProfileCard=function(){
var c=document.getElementById('v12-profile-canvas');if(!c)return;
c.toBlob(function(blob){
if(navigator.clipboard&&navigator.clipboard.write){
navigator.clipboard.write([new ClipboardItem({'image/png':blob})]).then(function(){alert('클립보드에 복사되었습니다!');}).catch(function(){alert('복사 실패');});
}else{alert('이 브라우저에서는 클립보드 복사를 지원하지 않습니다.');}
},'image/png');
};

// ===== 8. MUSIC DICTIONARY (40 terms) =====
function showMusicDict(){
playSfxV12('dict_open');
var m=document.createElement('div');m.id='v12-dict-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';

var terms=[
{cat:'발성',term:'복식호흡',def:'횡격막을 이용한 깊은 호흡법. 노래의 기본.'},
{cat:'발성',term:'두성',def:'머리 공명을 이용한 고음 발성. 가성과 다름.'},
{cat:'발성',term:'흉성',def:'가슴 울림을 이용한 중저음 발성.'},
{cat:'발성',term:'믹스보이스',def:'흉성과 두성을 혼합한 발성. 자연스러운 고음.'},
{cat:'발성',term:'가성(팔세토)',def:'성대를 가볍게 접촉시키는 부드러운 고음.'},
{cat:'발성',term:'벨팅',def:'강한 흉성으로 고음을 내는 기법. 뮤지컬에서 자주 사용.'},
{cat:'발성',term:'비브라토',def:'음정을 주기적으로 흔드는 기법. 초당 5~7회.'},
{cat:'발성',term:'환성점(파사지오)',def:'흉성에서 두성으로 전환되는 음역 구간.'},
{cat:'기법',term:'포르타멘토',def:'두 음 사이를 미끄러지듯 연결하는 기법.'},
{cat:'기법',term:'멜리스마',def:'한 음절에 여러 음을 얹어 부르는 장식적 기법.'},
{cat:'기법',term:'스캣',def:'의미 없는 음절(da-ba-dee)로 즉흥 노래.'},
{cat:'기법',term:'글리산도',def:'음정을 빠르게 미끄러지듯 이동시키는 기법.'},
{cat:'기법',term:'트릴',def:'인접한 두 음을 빠르게 번갈아 부르는 기법.'},
{cat:'기법',term:'애드리브',def:'원곡에 없는 즉흥적인 변주를 추가하는 것.'},
{cat:'기법',term:'립트릴',def:'입술을 떨며 발성하는 워밍업 기법.'},
{cat:'기법',term:'험밍',def:'입을 다물고 콧소리로 멜로디를 부르는 기법.'},
{cat:'음악이론',term:'옥타브',def:'같은 음이름 사이의 12반음 간격 (예: C4→C5).'},
{cat:'음악이론',term:'반음',def:'서양 음악에서 가장 작은 음정 단위.'},
{cat:'음악이론',term:'온음',def:'반음 2개 간격. 도→레가 온음.'},
{cat:'음악이론',term:'BPM',def:'Beats Per Minute. 분당 박자 수. 템포 단위.'},
{cat:'음악이론',term:'피치(음높이)',def:'소리의 주파수(Hz). 높을수록 고음.'},
{cat:'음악이론',term:'셈여림(다이내믹스)',def:'소리의 세기 변화. pp~ff로 표기.'},
{cat:'음악이론',term:'싱코페이션',def:'정박이 아닌 엇박에 강세를 두는 리듬.'},
{cat:'음악이론',term:'스타카토',def:'음을 짧게 끊어서 연주/노래하는 방법.'},
{cat:'오디오',term:'리버브',def:'공간 잔향 효과. 홀/방/성당 등 시뮬레이션.'},
{cat:'오디오',term:'딜레이',def:'음성을 시간차를 두고 반복하는 효과.'},
{cat:'오디오',term:'컴프레서',def:'음량 차이를 줄여주는 오디오 프로세서.'},
{cat:'오디오',term:'이퀄라이저(EQ)',def:'특정 주파수 대역을 증감하는 음색 조절기.'},
{cat:'오디오',term:'게인',def:'신호의 증폭 정도. 너무 높으면 클리핑 발생.'},
{cat:'오디오',term:'클리핑',def:'신호가 최대치를 넘어 왜곡되는 현상.'},
{cat:'오디오',term:'피드백',def:'마이크가 스피커 소리를 다시 수음하여 발생하는 하울링.'},
{cat:'오디오',term:'하모나이저',def:'원음에 화음을 자동으로 추가하는 이펙터.'},
{cat:'노래방',term:'반주(MR)',def:'Music Recorded. 보컬이 빠진 반주 음원.'},
{cat:'노래방',term:'키 조절',def:'원곡의 음정을 올리거나 내리는 것 (±반음 단위).'},
{cat:'노래방',term:'에코',def:'음성을 반복시켜 풍성하게 만드는 노래방 이펙트.'},
{cat:'노래방',term:'듀엣',def:'두 사람이 파트를 나누어 함께 부르는 것.'},
{cat:'노래방',term:'메들리',def:'여러 곡을 이어서 부르는 형식.'},
{cat:'노래방',term:'가이드 멜로디',def:'노래 음정을 안내해주는 멜로디 라인.'},
{cat:'노래방',term:'점수 채점',def:'음정/박자/비브라토 등을 분석하여 점수 산출.'},
{cat:'노래방',term:'음정 바',def:'화면에 표시되는 목표 음정 막대.'}
];

var cats=['발성','기법','음악이론','오디오','노래방'];
var readList=ls12('dictRead',[]);
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">📚 음악 용어사전</h2><button onclick="this.closest(\'#v12-dict-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<div style="margin-bottom:12px;"><input id="v12-dict-search" type="text" placeholder="용어 검색..." oninput="filterDict()" style="width:100%;padding:10px 14px;background:rgba(255,255,255,.08);border:1px solid rgba(255,106,176,.2);border-radius:10px;color:#fff;font-size:14px;outline:none;box-sizing:border-box;"></div>';
html+='<div style="color:#888;font-size:12px;margin-bottom:8px;">'+readList.length+'/'+terms.length+' 읽음</div>';
html+='<div id="v12-dict-list">';

cats.forEach(function(cat){
html+='<h3 style="color:#c084fc;margin:12px 0 6px;font-size:14px;border-left:3px solid #c084fc;padding-left:8px;">'+cat+'</h3>';
terms.filter(function(t){return t.cat===cat;}).forEach(function(t){
var isRead=readList.indexOf(t.term)!==-1;
html+='<div class="v12-dict-item" data-term="'+t.term+'" onclick="markDictRead(\''+t.term.replace(/'/g,'\\&#39;')+'\')" style="background:rgba(168,85,247,'+(isRead?'.12':'.05')+');border:1px solid rgba(168,85,247,'+(isRead?'.3':'.15')+');border-radius:8px;padding:10px 12px;margin-bottom:6px;cursor:pointer;transition:all .2s;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;">';
html+='<span style="color:'+(isRead?'#22c55e':'#e0e0e0')+';font-weight:bold;font-size:13px;">'+(isRead?'✅ ':'')+t.term+'</span>';
html+='<span style="color:#888;font-size:10px;">'+t.cat+'</span></div>';
html+='<div style="color:#aaa;font-size:12px;margin-top:4px;">'+t.def+'</div></div>';
});
});
html+='</div></div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.markDictRead=function(term){
var readList=ls12('dictRead',[]);
if(readList.indexOf(term)===-1){readList.push(term);ls12s('dictRead',readList);}
};
window.filterDict=function(){
var search=document.getElementById('v12-dict-search');
if(!search)return;
var q=search.value.toLowerCase();
var items=document.querySelectorAll('.v12-dict-item');
items.forEach(function(el){
var term=el.getAttribute('data-term').toLowerCase();
var text=el.textContent.toLowerCase();
el.style.display=(q===''||term.indexOf(q)!==-1||text.indexOf(q)!==-1)?'block':'none';
});
};

// ===== 9. VOCAL HEALTH GUIDE =====
function showVocalHealth(){
playSfxV12('health_tip');
var m=document.createElement('div');m.id='v12-health-modal';
m.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.94);z-index:10000;overflow-y:auto;padding:20px;box-sizing:border-box;';

var tips=[
{title:'수분 보충',icon:'💧',desc:'노래 전후 미지근한 물을 충분히 마시세요. 성대 점막을 촉촉하게 유지하는 것이 가장 중요합니다. 차가운 물보다 미지근한 물이 좋습니다.'},
{title:'워밍업 필수',icon:'🏃',desc:'갑자기 고음을 내지 마세요. 5~10분 험밍, 립트릴, 스케일로 성대를 예열한 후 노래하세요. 근육 운동 전 스트레칭과 같은 원리입니다.'},
{title:'무리하지 않기',icon:'⚠️',desc:'목이 아프거나 쉰 목소리가 나면 즉시 쉬세요. 통증은 성대가 보내는 경고 신호입니다. 무리하면 성대 결절이 생길 수 있습니다.'},
{title:'올바른 자세',icon:'🧍',desc:'허리를 펴고 어깨를 편안하게 내리세요. 턱을 살짝 당기면 기도가 열려 발성이 편해집니다. 서서 노래하는 것이 가장 좋습니다.'},
{title:'카페인/알코올 주의',icon:'☕',desc:'커피와 술은 성대를 건조하게 만듭니다. 노래 전 카페인 섭취를 줄이고, 음주 후 노래는 성대에 큰 부담을 줍니다.'},
{title:'충분한 수면',icon:'😴',desc:'피로한 상태에서 노래하면 성대에 무리가 갑니다. 7~8시간 수면으로 성대와 몸 전체를 회복시키세요.'},
{title:'기침/헛기침 주의',icon:'🤧',desc:'습관적인 헛기침은 성대를 마찰시켜 손상을 줍니다. 목이 간지러우면 물을 마시거나 부드럽게 험밍하세요.'},
{title:'정기적 휴식',icon:'🧘',desc:'30분 노래 후 10분 휴식을 권장합니다. 성대도 근육이므로 과사용하면 피로가 누적됩니다. 주 1~2일은 노래를 쉬세요.'}
];

var readList=ls12('healthRead',[]);
var html='<div style="max-width:520px;margin:0 auto;">';
html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="color:#ff6ab0;margin:0;">💚 보컬 건강 가이드</h2><button onclick="this.closest(\'#v12-health-modal\').remove()" style="background:#ff6ab0;color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;">✕</button></div>';
html+='<div style="color:#888;font-size:12px;margin-bottom:12px;">'+readList.length+'/'+tips.length+' 읽음 — 모두 읽으면 업적 달성!</div>';

tips.forEach(function(tip,idx){
var isRead=readList.indexOf(idx)!==-1;
html+='<div onclick="markHealthRead('+idx+')" style="background:rgba(168,85,247,'+(isRead?'.12':'.05')+');border:1px solid rgba('+(isRead?'34,197,94':'168,85,247')+','+(isRead?'.4':'.2')+');border-radius:12px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s;">';
html+='<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">';
html+='<span style="font-size:28px;">'+tip.icon+'</span>';
html+='<div style="flex:1;"><div style="color:'+(isRead?'#22c55e':'#e0e0e0')+';font-weight:bold;font-size:15px;">'+(isRead?'✅ ':'')+tip.title+'</div></div></div>';
html+='<div style="color:#aaa;font-size:13px;line-height:1.7;padding-left:38px;">'+tip.desc+'</div></div>';
});
html+='</div>';
m.innerHTML=html;
document.body.appendChild(m);
}

window.markHealthRead=function(idx){
var readList=ls12('healthRead',[]);
if(readList.indexOf(idx)===-1){readList.push(idx);ls12s('healthRead',readList);
var el=document.getElementById('v12-health-modal');if(el)el.remove();showVocalHealth();}
};

// ===== QUIZ v12: 15 NEW QUESTIONS (72→87) =====
var QUIZ_V12=[
{q:'VU 미터에서 측정하는 것은?',a:['음량(dB)','음정(Hz)','박자(BPM)','음색'],c:0,e:'VU 미터는 음량(데시벨)을 측정합니다.'},
{q:'레이더 차트에서 가수의 지구력은 무엇으로 측정?',a:['연습 곡 수','최고 점수','음역 범위','비브라토 횟수'],c:0,e:'지구력은 총 연습량(곡 수)으로 측정됩니다.'},
{q:'메들리(medley)란?',a:['여러 곡 연속 부르기','솔로 연주','화음 합창','무반주 노래'],c:0,e:'메들리는 여러 곡을 이어서 부르는 형식입니다.'},
{q:'벨팅(belting)은 어떤 음역에서 사용?',a:['고음','저음','중음','초저음'],c:0,e:'벨팅은 강한 흉성으로 고음을 내는 기법입니다.'},
{q:'음정 바(pitch bar)의 역할은?',a:['목표 음정 표시','가사 표시','점수 표시','템포 표시'],c:0,e:'음정 바는 부를 목표 음정을 시각적으로 보여줍니다.'},
{q:'스타카토(staccato)로 노래하면?',a:['짧게 끊어 부름','길게 늘여 부름','떨며 부름','속삭이듯 부름'],c:0,e:'스타카토는 음을 짧고 분리하여 연주/노래합니다.'},
{q:'성대 건강을 위해 노래 전 마시면 좋은 것은?',a:['미지근한 물','차가운 콜라','뜨거운 커피','얼음물'],c:0,e:'미지근한 물이 성대 점막 보호에 가장 좋습니다.'},
{q:'클리핑(clipping)이 발생하면?',a:['소리 왜곡','음정 변화','리듬 변화','무음 출력'],c:0,e:'클리핑은 신호 과포화로 소리가 왜곡되는 현상입니다.'},
{q:'리버브(reverb)의 효과는?',a:['공간 잔향 추가','음정 보정','음량 증가','박자 조절'],c:0,e:'리버브는 공간감(잔향)을 만들어주는 효과입니다.'},
{q:'A4 음의 표준 주파수는?',a:['440Hz','220Hz','880Hz','330Hz'],c:0,e:'국제 표준 음높이 A4는 440Hz입니다.'},
{q:'멜리스마(melisma)의 예시는?',a:['한 글자에 여러 음','한 음에 여러 글자','무반주 노래','기계 보정'],c:0,e:'한 음절에 여러 음을 얹어 장식적으로 부릅니다.'},
{q:'포르타멘토(portamento)의 특징은?',a:['음 사이 미끄러짐','음 끊기','음 반복','음 삭제'],c:0,e:'두 음을 미끄러지듯 자연스럽게 연결합니다.'},
{q:'노래 연습 후 권장되는 휴식 시간은?',a:['30분마다 10분','1시간마다 5분','2시간마다 3분','쉴 필요 없음'],c:0,e:'30분 노래 후 10분 쉬는 것을 권장합니다.'},
{q:'MR의 뜻은?',a:['Music Recorded','Music Remix','Mic Recording','My Record'],c:0,e:'MR은 Music Recorded, 보컬 없는 반주 음원입니다.'},
{q:'싱코페이션(syncopation)의 특징은?',a:['엇박 강세','정박 강세','무강세','강세 없음'],c:0,e:'싱코페이션은 엇박(약박)에 강세를 두는 리듬입니다.'}
];

if(typeof QUIZ_QUESTIONS!=='undefined'){QUIZ_V12.forEach(function(q){QUIZ_QUESTIONS.push(q);});}
else if(typeof quizQuestions!=='undefined'){QUIZ_V12.forEach(function(q){quizQuestions.push(q);});}

// ===== KEYBOARD SHORTCUTS v12 =====
function setupKeyboardV12(){
document.addEventListener('keydown',function(e){
if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
if(!e.shiftKey)return;
switch(e.key.toUpperCase()){
case 'V':e.preventDefault();showVUMeter();break;
case 'L':e.preventDefault();showLyricsAnalyzer();break;
case 'R':e.preventDefault();showVocalReport();break;
case 'M':e.preventDefault();showMedleyMode();break;
case 'P':e.preventDefault();showPitchGame();break;
case 'C':e.preventDefault();showChallenges();break;
case 'K':e.preventDefault();showProfileCard();break;
case 'D':e.preventDefault();showMusicDict();break;
}
});
}

// ===== INJECT CSS v12 =====
function injectV12CSS(){
var style=document.createElement('style');
style.textContent='.v12-quick-btn{background:linear-gradient(135deg,rgba(255,106,176,.2),rgba(168,85,247,.2));color:#ff6ab0;border:1px solid rgba(255,106,176,.3);border-radius:10px;padding:8px 12px;cursor:pointer;font-size:12px;transition:all .2s;white-space:nowrap;}.v12-quick-btn:hover{background:linear-gradient(135deg,rgba(255,106,176,.4),rgba(168,85,247,.4));transform:scale(1.05);}.v12-quick-bar{display:flex;flex-wrap:wrap;gap:6px;padding:8px;justify-content:center;}';
document.head.appendChild(style);
}

// ===== INJECT UI v12 =====
function injectV12UI(){
var actions=[
{label:'📊 VU미터',fn:'showVUMeter'},
{label:'📝 가사분석',fn:'showLyricsAnalyzer'},
{label:'📋 보컬리포트',fn:'showVocalReport'},
{label:'🎭 메들리',fn:'showMedleyMode'},
{label:'🎯 음정게임',fn:'showPitchGame'},
{label:'🏆 챌린지',fn:'showChallenges'},
{label:'🪪 프로필',fn:'showProfileCard'},
{label:'📚 용어사전',fn:'showMusicDict'},
{label:'💚 건강가이드',fn:'showVocalHealth'}
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
var target=document.getElementById('v11-quick-bar')||document.querySelector('.v11-quick-bar');
if(target){target.parentNode.insertBefore(bar,target.nextSibling);}
else{
var target2=document.querySelector('.song-list')||document.querySelector('#song-list')||document.querySelector('.controls')||document.querySelector('main');
if(target2){target2.parentNode.insertBefore(bar,target2);}
else{document.body.appendChild(bar);}
}
}

// ===== MEDLEY HOOK =====
function hookMedley(){
if(typeof window.endSong==='function'&&!window.__v12MedleyHooked){
var origEnd=window.endSong;
window.endSong=function(){
var result=origEnd.apply(this,arguments);
var queue=ls12('medleyQueue',[]);
if(queue.length>0){
var idx=ls12('medleyIdx',0);
var scores=ls12('medleyScores',[]);
var score=0;
if(typeof lastScore!=='undefined')score=lastScore;
else if(typeof totalScore!=='undefined')score=totalScore;
scores.push(score);
ls12s('medleyScores',scores);
idx++;
if(idx<queue.length){
ls12s('medleyIdx',idx);
setTimeout(function(){
if(typeof selectSong==='function')selectSong(queue[idx]);
},1500);
}else{
var avg=Math.round(scores.reduce(function(a,b){return a+b;},0)/scores.length);
var best=ls12('medleyBestAvg',0);
if(avg>best)ls12s('medleyBestAvg',avg);
ls12s('medleyComplete',(ls12('medleyComplete',0))+1);
ls12s('medleyQueue',[]);
ls12s('medleyIdx',0);
ls12s('medleyScores',[]);
alert('메들리 완주! 평균 점수: '+avg+'점');
}
}
return result;
};
window.__v12MedleyHooked=true;
}
}

// ===== SEO UPDATE v12 =====
function updateSEOv12(){
document.title='StarVoice v12 - AI 노래방';
var desc=document.querySelector('meta[name="description"]');
if(desc)desc.setAttribute('content','StarVoice v12: 95곡 AI 음정 분석 K-노래방 PWA. VU미터/가사분석/보컬리포트레이더/메들리모드/음정게임/주간챌린지/프로필카드/용어사전40/건강가이드/78업적');
var ogDesc=document.querySelector('meta[property="og:description"]');
if(ogDesc)ogDesc.setAttribute('content','95곡 AI 음정 분석 노래방. VU미터, 보컬리포트, 메들리, 음정게임, 챌린지, 프로필카드, 용어사전, 건강가이드, 78개 업적');
var ogTitle=document.querySelector('meta[property="og:title"]');
if(ogTitle)ogTitle.setAttribute('content','StarVoice v12 - AI 노래방');
var twTitle=document.querySelector('meta[name="twitter:title"]');
if(twTitle)twTitle.setAttribute('content','StarVoice v12 - AI 노래방');
var twDesc=document.querySelector('meta[name="twitter:description"]');
if(twDesc)twDesc.setAttribute('content','95곡 AI 음정 분석 K-노래방 PWA. VU미터+보컬리포트+메들리+음정게임+챌린지+프로필+용어사전+건강+78업적');
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
hookMedley();

setInterval(checkV12Achievements,15000);

if(typeof renderList==='function')renderList();

console.log('[v12] patch loaded — Songs:',
typeof SONGS!=='undefined'?SONGS.length:'?',
'Achievements:',typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:'?');
}

window.showVUMeter=showVUMeter;
window.showLyricsAnalyzer=showLyricsAnalyzer;
window.showVocalReport=showVocalReport;
window.showMedleyMode=showMedleyMode;
window.showPitchGame=showPitchGame;
window.showChallenges=showChallenges;
window.showProfileCard=showProfileCard;
window.showMusicDict=showMusicDict;
window.showVocalHealth=showVocalHealth;

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initV12);}
else{setTimeout(initV12,500);}

})();
