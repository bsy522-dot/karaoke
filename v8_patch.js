/* StarVoice v8 Patch — Self-contained module injected via SW
 * Adds: 10 songs(45→55), vocal guide, practice planner, song ranking, share card,
 *        vocal range test, lyrics memorize mode, singing tips 12, seasonal theme,
 *        10 achievements(20→30), SFX 6, keyboard shortcuts +5
 */
(function(){
'use strict';

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Ab3=207.65,Bb3=233.08,Eb4=311.13,Bb4=466.16,Db4=277.18,Ab4=415.30;

// ===== 10 NEW SONGS (46~55) =====
var NEW_SONGS_V8=[
{id:46,cat:"동요",title:"산토끼 토끼야",icon:"🐇",diff:"쉬움",dc:"diff-easy",bpm:120,
melody:[
{t:0,d:.4,f:E4,s:"산"},{t:.4,d:.4,f:E4,s:"토"},{t:.8,d:.4,f:F4,s:"끼"},{t:1.2,d:.4,f:G4,s:"토"},
{t:1.6,d:.4,f:G4,s:"끼"},{t:2,d:.8,f:E4,s:"야"},
{t:2.8,d:.4,f:G4,s:"어"},{t:3.2,d:.4,f:A4,s:"디"},{t:3.6,d:.4,f:G4,s:"를"},{t:4,d:.8,f:E4,s:"가"},
{t:4.8,d:.4,f:D4,s:"느"},{t:5.2,d:.8,f:C4,s:"냐"},
{t:6,d:.4,f:E4,s:"깡"},{t:6.4,d:.4,f:E4,s:"충"},{t:6.8,d:.4,f:F4,s:"깡"},{t:7.2,d:.4,f:G4,s:"충"},
{t:7.6,d:.4,f:G4,s:"뛰"},{t:8,d:.4,f:A4,s:"면"},{t:8.4,d:.8,f:G4,s:"서"},
{t:9.2,d:.4,f:E4,s:"어"},{t:9.6,d:.4,f:D4,s:"디"},{t:10,d:.4,f:E4,s:"를"},{t:10.4,d:1.2,f:C4,s:"가느냐"}
],lyrics:[{t:0,tx:"산토끼 토끼야"},{t:2.8,tx:"어디를 가느냐"},{t:6,tx:"깡충깡충 뛰면서"},{t:9.2,tx:"어디를 가느냐"}],dur:12},

{id:47,cat:"동요",title:"우산",icon:"☂️",diff:"쉬움",dc:"diff-easy",bpm:105,
melody:[
{t:0,d:.6,f:E4,s:"이"},{t:.6,d:.6,f:G4,s:"슬"},{t:1.2,d:.6,f:A4,s:"비"},{t:1.8,d:.6,f:G4,s:"가"},
{t:2.4,d:1.2,f:E4,s:"오"},{t:3.6,d:.6,f:D4,s:"면"},{t:4.2,d:1.2,f:C4,s:"~"},
{t:5.4,d:.6,f:E4,s:"엄"},{t:6,d:.6,f:G4,s:"마"},{t:6.6,d:.6,f:A4,s:"가"},
{t:7.2,d:.6,f:G4,s:"우"},{t:7.8,d:.6,f:E4,s:"산"},{t:8.4,d:.6,f:D4,s:"을"},
{t:9,d:1.2,f:C4,s:"~"},
{t:10.2,d:.6,f:G4,s:"씌"},{t:10.8,d:.6,f:A4,s:"워"},{t:11.4,d:.6,f:G4,s:"주"},
{t:12,d:1.2,f:E4,s:"시"},
{t:13.2,d:.6,f:D4,s:"는"},{t:13.8,d:.6,f:E4,s:"우"},{t:14.4,d:1.5,f:C4,s:"산"}
],lyrics:[{t:0,tx:"이슬비가 오면~"},{t:5.4,tx:"엄마가 우산을~"},{t:10.2,tx:"씌워 주시는"},{t:13.2,tx:"우산"}],dur:16},

{id:48,cat:"가요/민요",title:"봄이 오면",icon:"🌷",diff:"보통",dc:"diff-medium",bpm:92,
melody:[
{t:0,d:.7,f:E4,s:"봄"},{t:.7,d:.7,f:G4,s:"이"},{t:1.4,d:1.4,f:A4,s:"오"},
{t:2.8,d:.7,f:G4,s:"면"},{t:3.5,d:.7,f:E4,s:"~"},{t:4.2,d:1.4,f:D4,s:"산"},
{t:5.6,d:.7,f:E4,s:"에"},{t:6.3,d:.7,f:G4,s:"들"},{t:7,d:1.4,f:A4,s:"에"},
{t:8.4,d:.7,f:A4,s:"진"},{t:9.1,d:.7,f:G4,s:"달"},{t:9.8,d:.7,f:E4,s:"래"},
{t:10.5,d:.7,f:D4,s:"꽃"},{t:11.2,d:1.8,f:C4,s:"피"},
{t:13,d:.7,f:E4,s:"네"},{t:13.7,d:.7,f:G4,s:"~"},{t:14.4,d:.7,f:A4,s:"진"},
{t:15.1,d:.7,f:B4,s:"달"},{t:15.8,d:1.4,f:A4,s:"래"},
{t:17.2,d:.7,f:G4,s:"꽃"},{t:17.9,d:.7,f:E4,s:"~"},{t:18.6,d:.7,f:D4,s:"대"},
{t:19.3,d:.7,f:E4,s:"문"},{t:20,d:1.8,f:C4,s:"밖에"}
],lyrics:[{t:0,tx:"봄이 오면~"},{t:4.2,tx:"산에 들에"},{t:8.4,tx:"진달래꽃 피네"},{t:13,tx:"진달래꽃~"},{t:17.2,tx:"대문 밖에"}],dur:22},

{id:49,cat:"가요/민요",title:"섬집 아기",icon:"🏝️",diff:"보통",dc:"diff-medium",bpm:88,
melody:[
{t:0,d:.7,f:E4,s:"엄"},{t:.7,d:.7,f:G4,s:"마"},{t:1.4,d:.7,f:A4,s:"가"},
{t:2.1,d:1.4,f:G4,s:"~"},{t:3.5,d:.7,f:A4,s:"섬"},
{t:4.2,d:.7,f:B4,s:"그"},{t:4.9,d:.7,f:A4,s:"늘"},{t:5.6,d:1.4,f:G4,s:"에"},
{t:7,d:.7,f:E4,s:"굴"},{t:7.7,d:.7,f:G4,s:"따"},{t:8.4,d:.7,f:A4,s:"러"},
{t:9.1,d:1.4,f:G4,s:"~"},{t:10.5,d:.7,f:E4,s:"가"},
{t:11.2,d:1.4,f:D4,s:"면"},{t:12.6,d:.7,f:E4,s:"~"},
{t:13.3,d:.7,f:D4,s:"아"},{t:14,d:.7,f:E4,s:"기"},{t:14.7,d:.7,f:D4,s:"는"},
{t:15.4,d:1.8,f:C4,s:"혼자"}
],lyrics:[{t:0,tx:"엄마가~"},{t:3.5,tx:"섬 그늘에"},{t:7,tx:"굴 따러~"},{t:10.5,tx:"가면"},{t:13.3,tx:"아기는 혼자"}],dur:18},

{id:50,cat:"세계명곡",title:"캉캉",icon:"💃",diff:"어려움",dc:"diff-hard",bpm:150,
melody:[
{t:0,d:.3,f:E4,s:"라"},{t:.3,d:.3,f:F4,s:"라"},{t:.6,d:.3,f:G4,s:"라"},
{t:.9,d:.3,f:A4,s:"라"},{t:1.2,d:.3,f:G4,s:"~"},{t:1.5,d:.3,f:F4,s:"~"},
{t:1.8,d:.6,f:E4,s:"라"},
{t:2.4,d:.3,f:E4,s:"라"},{t:2.7,d:.3,f:F4,s:"라"},{t:3,d:.3,f:G4,s:"라"},
{t:3.3,d:.3,f:A4,s:"라"},{t:3.6,d:.3,f:B4,s:"~"},{t:3.9,d:.3,f:A4,s:"~"},
{t:4.2,d:.6,f:G4,s:"라"},
{t:4.8,d:.3,f:G4,s:"라"},{t:5.1,d:.3,f:A4,s:"라"},{t:5.4,d:.6,f:B4,s:"라"},
{t:6,d:.3,f:A4,s:"라"},{t:6.3,d:.3,f:G4,s:"라"},{t:6.6,d:.6,f:A4,s:"라"},
{t:7.2,d:.3,f:G4,s:"라"},{t:7.5,d:.3,f:F4,s:"라"},{t:7.8,d:.3,f:E4,s:"라"},
{t:8.1,d:.3,f:D4,s:"~"},{t:8.4,d:.3,f:E4,s:"~"},{t:8.7,d:.9,f:C4,s:"라"}
],lyrics:[{t:0,tx:"라라라라~~라"},{t:2.4,tx:"라라라라~~라"},{t:4.8,tx:"라라라 라라라"},{t:7.2,tx:"라라라~~라"}],dur:10},

{id:51,cat:"세계명곡",title:"환희의 송가",icon:"🎵",diff:"보통",dc:"diff-medium",bpm:100,
melody:[
{t:0,d:.6,f:E4,s:"기"},{t:.6,d:.6,f:E4,s:"뻐"},{t:1.2,d:.6,f:F4,s:"하"},{t:1.8,d:.6,f:G4,s:"라"},
{t:2.4,d:.6,f:G4,s:"아"},{t:3,d:.6,f:F4,s:"름"},{t:3.6,d:.6,f:E4,s:"다"},
{t:4.2,d:.6,f:D4,s:"운"},
{t:4.8,d:.6,f:C4,s:"신"},{t:5.4,d:.6,f:C4,s:"의"},{t:6,d:.6,f:D4,s:"빛"},
{t:6.6,d:.6,f:E4,s:"이"},{t:7.2,d:.9,f:E4,s:"여"},{t:8.1,d:.3,f:D4,s:"~"},
{t:8.4,d:1.2,f:D4,s:"~"},
{t:9.6,d:.6,f:E4,s:"기"},{t:10.2,d:.6,f:E4,s:"뻐"},{t:10.8,d:.6,f:F4,s:"하"},
{t:11.4,d:.6,f:G4,s:"라"},{t:12,d:.6,f:G4,s:"아"},{t:12.6,d:.6,f:F4,s:"름"},
{t:13.2,d:.6,f:E4,s:"다"},{t:13.8,d:.6,f:D4,s:"운"},
{t:14.4,d:.6,f:C4,s:"신"},{t:15,d:.6,f:C4,s:"의"},{t:15.6,d:.6,f:D4,s:"빛"},
{t:16.2,d:.6,f:E4,s:"이"},{t:16.8,d:.9,f:D4,s:"여"},{t:17.7,d:.3,f:C4,s:"~"},
{t:18,d:1.2,f:C4,s:"~"}
],lyrics:[{t:0,tx:"기뻐하라 아름다운"},{t:4.8,tx:"신의 빛이여~"},{t:9.6,tx:"기뻐하라 아름다운"},{t:14.4,tx:"신의 빛이여~"}],dur:20},

{id:52,cat:"동요",title:"그대로 멈춰라",icon:"🛑",diff:"보통",dc:"diff-medium",bpm:130,
melody:[
{t:0,d:.35,f:G4,s:"무"},{t:.35,d:.35,f:G4,s:"궁"},{t:.7,d:.35,f:E4,s:"화"},{t:1.05,d:.35,f:E4,s:"꽃"},
{t:1.4,d:.35,f:D4,s:"이"},{t:1.75,d:.7,f:C4,s:"피"},
{t:2.45,d:.35,f:D4,s:"었"},{t:2.8,d:.7,f:E4,s:"습"},
{t:3.5,d:.35,f:G4,s:"니"},{t:3.85,d:.7,f:E4,s:"다"},
{t:4.55,d:.35,f:G4,s:"무"},{t:4.9,d:.35,f:G4,s:"궁"},{t:5.25,d:.35,f:A4,s:"화"},
{t:5.6,d:.35,f:A4,s:"꽃"},{t:5.95,d:.35,f:G4,s:"이"},
{t:6.3,d:.7,f:E4,s:"피"},{t:7,d:.35,f:D4,s:"었"},
{t:7.35,d:.7,f:E4,s:"습"},{t:8.05,d:.35,f:D4,s:"니"},
{t:8.4,d:1.2,f:C4,s:"다"}
],lyrics:[{t:0,tx:"무궁화꽃이 피었습니다"},{t:4.55,tx:"무궁화꽃이 피었습니다"}],dur:10},

{id:53,cat:"가요/민요",title:"오빠 생각",icon:"💭",diff:"보통",dc:"diff-medium",bpm:85,
melody:[
{t:0,d:.7,f:E4,s:"뜸"},{t:.7,d:.7,f:D4,s:"북"},{t:1.4,d:.7,f:E4,s:"뜸"},
{t:2.1,d:.7,f:G4,s:"북"},{t:2.8,d:1.4,f:A4,s:"~"},
{t:4.2,d:.7,f:G4,s:"장"},{t:4.9,d:.7,f:E4,s:"구"},{t:5.6,d:1.4,f:D4,s:"장"},
{t:7,d:.7,f:E4,s:"이"},{t:7.7,d:1.4,f:C4,s:"~"},
{t:9.1,d:.7,f:G4,s:"소"},{t:9.8,d:.7,f:A4,s:"리"},{t:10.5,d:.7,f:B4,s:"내"},
{t:11.2,d:1.4,f:A4,s:"며"},{t:12.6,d:.7,f:G4,s:"~"},
{t:13.3,d:.7,f:E4,s:"오"},{t:14,d:.7,f:D4,s:"빠"},
{t:14.7,d:.7,f:E4,s:"생"},{t:15.4,d:1.8,f:C4,s:"각"}
],lyrics:[{t:0,tx:"뜸북뜸북~"},{t:4.2,tx:"장구장이~"},{t:9.1,tx:"소리내며~"},{t:13.3,tx:"오빠 생각"}],dur:18},

{id:54,cat:"세계명곡",title:"로우 로우 보트",icon:"🚣",diff:"쉬움",dc:"diff-easy",bpm:100,
melody:[
{t:0,d:.6,f:C4,s:"로"},{t:.6,d:.6,f:C4,s:"우"},{t:1.2,d:.6,f:C4,s:"로"},
{t:1.8,d:.4,f:D4,s:"우"},{t:2.2,d:.6,f:E4,s:"유"},
{t:2.8,d:.6,f:E4,s:"어"},{t:3.4,d:.4,f:D4,s:"보"},
{t:3.8,d:.6,f:E4,s:"트"},{t:4.4,d:.4,f:F4,s:"젠"},
{t:4.8,d:1.2,f:G4,s:"틀"},
{t:6,d:.4,f:C5,s:"리"},{t:6.4,d:.4,f:C5,s:"~"},{t:6.8,d:.4,f:G4,s:"다"},
{t:7.2,d:.4,f:G4,s:"운"},{t:7.6,d:.4,f:E4,s:"더"},{t:8,d:.4,f:E4,s:"~"},
{t:8.4,d:.4,f:C4,s:"스"},{t:8.8,d:.4,f:C4,s:"트"},
{t:9.2,d:.6,f:G4,s:"림"},{t:9.8,d:.6,f:F4,s:"메"},
{t:10.4,d:.6,f:E4,s:"릴"},{t:11,d:.6,f:D4,s:"리"},
{t:11.6,d:.6,f:E4,s:"메"},{t:12.2,d:.6,f:D4,s:"릴"},
{t:12.8,d:.6,f:E4,s:"리"},{t:13.4,d:.6,f:D4,s:"라"},
{t:14,d:1.5,f:C4,s:"이프"}
],lyrics:[{t:0,tx:"로우 로우 유어 보트"},{t:4.8,tx:"젠틀리 다운 더"},{t:8.4,tx:"스트림"},{t:9.2,tx:"메릴리 메릴리"},{t:12.8,tx:"라이프"}],dur:16},

{id:55,cat:"가요/민요",title:"고향의 봄",icon:"🌸",diff:"보통",dc:"diff-medium",bpm:90,
melody:[
{t:0,d:.7,f:E4,s:"나"},{t:.7,d:.7,f:G4,s:"의"},{t:1.4,d:1.4,f:A4,s:"살"},
{t:2.8,d:.7,f:G4,s:"던"},{t:3.5,d:.7,f:E4,s:"고"},{t:4.2,d:1.4,f:D4,s:"향"},
{t:5.6,d:.7,f:E4,s:"은"},{t:6.3,d:.7,f:G4,s:"~"},{t:7,d:.7,f:A4,s:"꽃"},
{t:7.7,d:.7,f:B4,s:"피"},{t:8.4,d:.7,f:A4,s:"는"},
{t:9.1,d:1.4,f:G4,s:"산"},
{t:10.5,d:.7,f:A4,s:"골"},{t:11.2,d:1.4,f:E4,s:"~"},
{t:12.6,d:.7,f:G4,s:"복"},{t:13.3,d:.7,f:E4,s:"숭"},{t:14,d:.7,f:D4,s:"아"},
{t:14.7,d:.7,f:E4,s:"꽃"},{t:15.4,d:.7,f:D4,s:"살"},
{t:16.1,d:1.8,f:C4,s:"구"}
],lyrics:[{t:0,tx:"나의 살던 고향은"},{t:5.6,tx:"꽃 피는 산골"},{t:12.6,tx:"복숭아꽃 살구"}],dur:18}
];

if(typeof SONGS!=='undefined'){NEW_SONGS_V8.forEach(function(s){SONGS.push(s);});}

// ===== WEB AUDIO SFX ENGINE (6 sounds) =====
var sfxCtx=null;
function getSfxCtx(){if(!sfxCtx){try{sfxCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return sfxCtx;}
function playSfx(type){
  var ctx=getSfxCtx();if(!ctx)return;
  var o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);
  var now=ctx.currentTime;
  switch(type){
    case 'guide':o.frequency.value=523.25;o.type='sine';g.gain.setValueAtTime(.15,now);g.gain.exponentialRampToValueAtTime(.001,now+.3);o.start(now);o.stop(now+.3);break;
    case 'range_test':o.frequency.value=440;o.type='triangle';g.gain.setValueAtTime(.2,now);g.gain.exponentialRampToValueAtTime(.001,now+.5);o.start(now);o.stop(now+.5);break;
    case 'ranking':o.frequency.value=659.25;o.type='sine';g.gain.setValueAtTime(.12,now);g.gain.exponentialRampToValueAtTime(.001,now+.4);o.start(now);o.stop(now+.4);break;
    case 'share':o.frequency.value=783.99;o.type='sine';g.gain.setValueAtTime(.1,now);var o2=ctx.createOscillator(),g2=ctx.createGain();o2.connect(g2);g2.connect(ctx.destination);o2.frequency.value=987.77;o2.type='sine';g2.gain.setValueAtTime(.1,now);g2.gain.exponentialRampToValueAtTime(.001,now+.5);g.gain.exponentialRampToValueAtTime(.001,now+.5);o.start(now);o2.start(now+.15);o.stop(now+.5);o2.stop(now+.65);break;
    case 'planner':o.frequency.value=349.23;o.type='sine';g.gain.setValueAtTime(.12,now);g.gain.exponentialRampToValueAtTime(.001,now+.25);o.start(now);o.stop(now+.25);break;
    case 'tips':o.frequency.value=293.66;o.type='triangle';g.gain.setValueAtTime(.1,now);g.gain.exponentialRampToValueAtTime(.001,now+.35);o.start(now);o.stop(now+.35);break;
  }
}

// ===== 10 NEW ACHIEVEMENTS (v8) =====
var NEW_ACH_V8=[
{id:'songs_55',name:'노래 황제',desc:'55곡 전부 부르기',icon:'🎙️',check:function(){var sp;try{sp=JSON.parse(localStorage.getItem('sv6_stats')||'{}').songPlays||{};}catch(e){return false;}if(typeof SONGS==='undefined')return false;return SONGS.every(function(x){return sp[x.id];});}},
{id:'range_tested',name:'음역 탐험가',desc:'음역 테스트 완료',icon:'🔊',check:function(){try{return localStorage.getItem('sv8_range_tested')==='true';}catch(e){return false;}}},
{id:'guide_used',name:'가이드 활용왕',desc:'보컬 가이드 5회 사용',icon:'🎓',check:function(){try{return parseInt(localStorage.getItem('sv8_guide_count')||'0')>=5;}catch(e){return false;}}},
{id:'share_card',name:'자랑쟁이',desc:'공유 카드 생성',icon:'📸',check:function(){try{return localStorage.getItem('sv8_shared')==='true';}catch(e){return false;}}},
{id:'planner_7',name:'꾸준한 연습생',desc:'연습 플래너 7일 달성',icon:'📅',check:function(){try{var p=JSON.parse(localStorage.getItem('sv8_planner')||'{}');return Object.keys(p).length>=7;}catch(e){return false;}}},
{id:'grade_s15',name:'S등급 전설',desc:'15곡에서 S등급',icon:'💠',check:function(){var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){return false;}var c=0;if(typeof SONGS!=='undefined')SONGS.forEach(function(x){if(hs[x.id]&&hs[x.id].g==='S')c++;});return c>=15;}},
{id:'perfect_3',name:'트리플 퍼펙트',desc:'100점 3곡 달성',icon:'🌈',check:function(){var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){return false;}var c=0;for(var k in hs){if(hs[k]&&hs[k].s>=100)c++;}return c>=3;}},
{id:'tips_reader',name:'보컬 학생',desc:'노래 팁 전부 읽기',icon:'📖',check:function(){try{return localStorage.getItem('sv8_tips_read')==='true';}catch(e){return false;}}},
{id:'memorize_clear',name:'가사 암기왕',desc:'가사 외우기 모드 클리어',icon:'🧠',check:function(){try{return localStorage.getItem('sv8_memorize_clear')==='true';}catch(e){return false;}}},
{id:'seasonal_singer',name:'사계절 가수',desc:'4계절 모두 경험',icon:'🌍',check:function(){try{var s=JSON.parse(localStorage.getItem('sv8_seasons')||'[]');return s.length>=4;}catch(e){return false;}}}
];

if(typeof ACHIEVEMENTS!=='undefined'){NEW_ACH_V8.forEach(function(a){ACHIEVEMENTS.push(a);});}

// ===== VOCAL GUIDE SYSTEM =====
var guideOn=false,guideOsc=null,guideGain=null;

function startVocalGuide(){
  if(typeof audioCtx==='undefined'||!audioCtx)return;
  guideOn=true;
  guideOsc=audioCtx.createOscillator();guideGain=audioCtx.createGain();
  guideOsc.type='sine';guideOsc.frequency.value=0;guideGain.gain.value=0;
  guideOsc.connect(guideGain);guideGain.connect(audioCtx.destination);
  guideOsc.start();
  var cnt=parseInt(localStorage.getItem('sv8_guide_count')||'0');
  localStorage.setItem('sv8_guide_count',String(cnt+1));
  if(typeof checkAchievements==='function'){try{var stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');checkAchievements(stats);}catch(e){}}
}
function stopVocalGuide(){guideOn=false;if(guideOsc){try{guideOsc.stop();}catch(e){}}guideOsc=null;guideGain=null;}
function updateVocalGuide(freq){
  if(!guideOn||!guideOsc||!guideGain)return;
  if(freq>0){guideOsc.frequency.value=freq;guideGain.gain.value=0.08;}
  else{guideGain.gain.value=0;}
}

// ===== PRACTICE PLANNER =====
function getPlanner(){try{return JSON.parse(localStorage.getItem('sv8_planner')||'{}');}catch(e){return {};}}
function savePlanner(p){localStorage.setItem('sv8_planner',JSON.stringify(p));}
function recordPractice(){
  var today=new Date().toISOString().slice(0,10);
  var p=getPlanner();if(!p[today])p[today]={songs:0,minutes:0};
  p[today].songs++;p[today].minutes+=3;
  savePlanner(p);
  if(typeof checkAchievements==='function'){try{var stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');checkAchievements(stats);}catch(e){}}
}

function showPlannerModal(){
  var m=document.getElementById('v8PlannerModal');if(!m)return;
  m.classList.add('show');
  var p=getPlanner();var keys=Object.keys(p).sort().reverse().slice(0,30);
  var totalDays=keys.length;var totalSongs=0;var totalMin=0;
  keys.forEach(function(k){totalSongs+=p[k].songs||0;totalMin+=p[k].minutes||0;});
  var streak=0;var d=new Date();
  for(var i=0;i<365;i++){var ds=new Date(d-i*86400000).toISOString().slice(0,10);if(p[ds])streak++;else break;}
  var html='<div class="v8-modal-box"><h3 style="color:var(--accent);margin-bottom:16px">📅 연습 플래너</h3>';
  html+='<div class="stat-grid" style="margin-bottom:16px">';
  html+='<div class="stat-item"><div class="si-val">'+totalDays+'</div><div class="si-lbl">연습일</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+streak+'</div><div class="si-lbl">연속일</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+totalSongs+'</div><div class="si-lbl">총 곡수</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+totalMin+'</div><div class="si-lbl">총 분</div></div>';
  html+='</div>';
  html+='<div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">최근 기록</div>';
  keys.slice(0,7).forEach(function(k){
    html+='<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px">';
    html+='<span style="color:var(--text-primary)">'+k+'</span>';
    html+='<span style="color:var(--accent-gold)">'+p[k].songs+'곡 / '+p[k].minutes+'분</span></div>';
  });
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v8PlannerModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
  playSfx('planner');
}

// ===== SONG RANKING =====
function showRankingModal(){
  var m=document.getElementById('v8RankingModal');if(!m)return;
  m.classList.add('show');
  var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){hs={};}
  var ranked=[];
  if(typeof SONGS!=='undefined'){
    SONGS.forEach(function(s){
      if(hs[s.id]){ranked.push({title:s.title,icon:s.icon,score:hs[s.id].s||0,grade:hs[s.id].g||'-'});}
    });
  }
  ranked.sort(function(a,b){return b.score-a.score;});
  var html='<div class="v8-modal-box"><h3 style="color:var(--accent);margin-bottom:16px">🏆 나의 랭킹</h3>';
  if(ranked.length===0){html+='<div style="color:var(--text-muted);text-align:center;padding:20px">아직 기록이 없습니다</div>';}
  else{
    ranked.slice(0,20).forEach(function(r,i){
      var medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
      var gc='grade-'+r.grade;
      html+='<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px">';
      html+='<span style="width:28px;text-align:center;font-weight:900;color:var(--accent-gold)">'+(medal||(i+1))+'</span>';
      html+='<span style="font-size:20px">'+r.icon+'</span>';
      html+='<span style="flex:1;color:var(--text-primary)">'+r.title+'</span>';
      html+='<span class="'+gc+'" style="font-weight:900;font-size:18px;margin-right:8px">'+r.grade+'</span>';
      html+='<span style="color:var(--accent-gold);font-weight:700;width:40px;text-align:right">'+r.score+'</span>';
      html+='</div>';
    });
  }
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v8RankingModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
  playSfx('ranking');
}

// ===== SHARE CARD (Canvas) =====
function generateShareCard(){
  var canvas=document.createElement('canvas');canvas.width=600;canvas.height=380;
  var ctx=canvas.getContext('2d');
  var grad=ctx.createLinearGradient(0,0,600,380);
  grad.addColorStop(0,'#1a1040');grad.addColorStop(0.5,'#2a1060');grad.addColorStop(1,'#0f0a1e');
  ctx.fillStyle=grad;ctx.fillRect(0,0,600,380);
  ctx.fillStyle='#ff6ab0';ctx.font='bold 28px -apple-system,sans-serif';ctx.fillText('StarVoice v8',30,45);
  ctx.fillStyle='#a855f7';ctx.font='14px -apple-system,sans-serif';ctx.fillText('AI 노래방',200,45);
  var stats;try{stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');}catch(e){stats={};}
  var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){hs={};}
  var totalSongs=stats.totalSongs||0;
  var bestCombo=stats.bestCombo||0;
  var avgPitch=totalSongs>0?Math.round((stats.totalPitch||0)/totalSongs):0;
  var sCount=0;if(typeof SONGS!=='undefined')SONGS.forEach(function(x){if(hs[x.id]&&hs[x.id].g==='S')sCount++;});
  var ach;try{ach=JSON.parse(localStorage.getItem('sv6_ach')||'{}');}catch(e){ach={};}
  var achCount=Object.keys(ach).length;
  var items=[
    {label:'총 노래',value:totalSongs+'곡',color:'#ff6ab0'},
    {label:'최고 콤보',value:bestCombo+'x',color:'#ffd700'},
    {label:'평균 음정',value:avgPitch+'%',color:'#4caf50'},
    {label:'S등급',value:sCount+'곡',color:'#a855f7'},
    {label:'업적',value:achCount+'개',color:'#2196f3'},
    {label:'곡 라이브러리',value:(typeof SONGS!=='undefined'?SONGS.length:'55'),color:'#ff9800'}
  ];
  items.forEach(function(item,i){
    var col=i%3;var row=Math.floor(i/3);
    var x=30+col*190;var y=80+row*140;
    ctx.fillStyle='rgba(255,255,255,.06)';
    ctx.beginPath();ctx.roundRect(x,y,170,120,12);ctx.fill();
    ctx.fillStyle=item.color;ctx.font='bold 36px -apple-system,sans-serif';
    ctx.fillText(item.value,x+15,y+55);
    ctx.fillStyle='#aaa';ctx.font='13px -apple-system,sans-serif';
    ctx.fillText(item.label,x+15,y+85);
  });
  ctx.fillStyle='rgba(255,255,255,.15)';ctx.font='11px -apple-system,sans-serif';
  ctx.fillText(new Date().toISOString().slice(0,10)+' | PRIME Holdings',30,365);
  localStorage.setItem('sv8_shared','true');
  if(typeof checkAchievements==='function'){try{var st=JSON.parse(localStorage.getItem('sv6_stats')||'{}');checkAchievements(st);}catch(e){}}
  playSfx('share');
  canvas.toBlob(function(blob){
    if(!blob)return;
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');a.href=url;a.download='starvoice_v8_card.png';
    document.body.appendChild(a);a.click();document.body.removeChild(a);
    setTimeout(function(){URL.revokeObjectURL(url);},5000);
  });
}

// ===== VOCAL RANGE TEST =====
function showRangeTest(){
  var m=document.getElementById('v8RangeModal');if(!m)return;
  m.classList.add('show');
  var html='<div class="v8-modal-box"><h3 style="color:var(--accent);margin-bottom:16px">🎤 음역 테스트</h3>';
  html+='<div style="text-align:center;padding:20px">';
  html+='<div style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">마이크를 켜고 가장 낮은 음부터 높은 음까지 불러보세요</div>';
  html+='<div id="rangeTestDisplay" style="font-size:48px;font-weight:900;color:var(--accent-gold);margin:20px 0">--</div>';
  html+='<div id="rangeTestInfo" style="font-size:14px;color:var(--text-secondary)">최저: -- | 최고: --</div>';
  html+='<div style="margin-top:20px;display:flex;gap:10px;justify-content:center">';
  html+='<button class="btn-retry" onclick="startRangeTest()">테스트 시작</button>';
  html+='<button class="btn-back" onclick="stopRangeTest()">종료</button>';
  html+='</div></div></div>';
  m.innerHTML=html;
}

var rangeTestActive=false,rangeTestLow=9999,rangeTestHigh=0,rangeTestInterval=null;

function noteFromFreq(f){
  var notes=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  var n=12*(Math.log2(f/440))+69;
  var nn=Math.round(n);
  return notes[nn%12]+(Math.floor(nn/12)-1);
}

window.startRangeTest=function(){
  rangeTestActive=true;rangeTestLow=9999;rangeTestHigh=0;
  playSfx('range_test');
  if(typeof McLeodPitch!=='undefined'&&McLeodPitch.getLastDetection){
    rangeTestInterval=setInterval(function(){
      if(!rangeTestActive)return;
      var det=McLeodPitch.getLastDetection();
      if(det&&det.freq>60&&det.freq<2000&&det.confidence>.6){
        if(det.freq<rangeTestLow)rangeTestLow=det.freq;
        if(det.freq>rangeTestHigh)rangeTestHigh=det.freq;
        var disp=document.getElementById('rangeTestDisplay');
        var info=document.getElementById('rangeTestInfo');
        if(disp)disp.textContent=noteFromFreq(det.freq);
        if(info){
          var lo=rangeTestLow<9999?noteFromFreq(rangeTestLow):'--';
          var hi=rangeTestHigh>0?noteFromFreq(rangeTestHigh):'--';
          info.textContent='최저: '+lo+' ('+Math.round(rangeTestLow)+'Hz) | 최고: '+hi+' ('+Math.round(rangeTestHigh)+'Hz)';
        }
      }
    },100);
  }
};

window.stopRangeTest=function(){
  rangeTestActive=false;
  if(rangeTestInterval)clearInterval(rangeTestInterval);rangeTestInterval=null;
  if(rangeTestLow<9999&&rangeTestHigh>0){
    localStorage.setItem('sv8_range_tested','true');
    localStorage.setItem('sv8_range',JSON.stringify({low:Math.round(rangeTestLow),high:Math.round(rangeTestHigh)}));
    if(typeof checkAchievements==='function'){try{var stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');checkAchievements(stats);}catch(e){}}
  }
  document.getElementById('v8RangeModal').classList.remove('show');
};

// ===== SINGING TIPS =====
var TIPS=[
  {title:'복식호흡',desc:'배로 숨쉬기. 어깨가 올라가지 않도록! 손을 배에 대고 배가 나올 때 들이마시고 들어갈 때 내쉬세요.',icon:'🫁'},
  {title:'발성 워밍업',desc:'립트릴(입술 떨기)로 시작. &quot;브르르르&quot; 소리를 내며 음을 올렸다 내렸다 하세요.',icon:'🔥'},
  {title:'음정 잡기',desc:'가이드 멜로디를 먼저 &quot;음~&quot;으로 따라 부르세요. 가사보다 음이 먼저!',icon:'🎯'},
  {title:'고음 내기',desc:'힘으로 밀지 말고, 머리 위로 소리를 보낸다 생각하세요. 두성(head voice) 연습!',icon:'⬆️'},
  {title:'리듬감',desc:'박자를 느끼려면 발로 탭하거나 몸을 흔들어보세요. 메트로놈 활용도 좋아요.',icon:'🥁'},
  {title:'감정 표현',desc:'가사의 의미를 생각하며 부르세요. 슬픈 곡은 약하게, 밝은 곡은 강하게!',icon:'💝'},
  {title:'마이크 거리',desc:'마이크에서 주먹 하나 거리를 유지하세요. 너무 가까우면 소리가 왜곡됩니다.',icon:'🎤'},
  {title:'비브라토',desc:'성대를 약간 긴장시키며 음을 흔들어보세요. 처음엔 느리게, 점점 빠르게!',icon:'〰️'},
  {title:'쉼표 활용',desc:'쉬는 곳에서 확실히 쉬세요. 숨을 쉬는 포인트를 미리 정해두면 좋습니다.',icon:'⏸️'},
  {title:'녹음 듣기',desc:'자기 목소리를 녹음해서 들어보세요. 객관적으로 부족한 점을 찾을 수 있어요.',icon:'🔊'},
  {title:'물 마시기',desc:'노래 전후로 미지근한 물을 마시세요. 성대가 촉촉해야 소리가 잘 나와요.',icon:'💧'},
  {title:'자세',desc:'서서 부르면 복식호흡이 더 쉬워요. 양발을 어깨너비로 벌리고 편안하게!',icon:'🧍'}
];

function showTipsModal(){
  var m=document.getElementById('v8TipsModal');if(!m)return;
  m.classList.add('show');
  var html='<div class="v8-modal-box" style="max-height:80vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">🎤 노래 잘 부르는 12가지 팁</h3>';
  TIPS.forEach(function(tip,i){
    html+='<div style="background:var(--btn-bg);border:1px solid var(--btn-border);border-radius:12px;padding:14px;margin:8px 0;cursor:pointer;transition:all .2s" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--btn-border)\'">';
    html+='<div style="display:flex;align-items:center;gap:10px"><span style="font-size:24px">'+tip.icon+'</span>';
    html+='<div><div style="font-weight:700;color:var(--text-primary);font-size:14px">'+(i+1)+'. '+tip.title+'</div>';
    html+='<div style="font-size:12px;color:var(--text-secondary);margin-top:4px;line-height:1.5">'+tip.desc+'</div></div></div></div>';
  });
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v8TipsModal\').classList.remove(\'show\');localStorage.setItem(\'sv8_tips_read\',\'true\');if(typeof checkAchievements===\'function\'){try{checkAchievements(JSON.parse(localStorage.getItem(\'sv6_stats\')||\'{}\'));}catch(e){}}">닫기</button></div></div>';
  m.innerHTML=html;
  playSfx('tips');
}

// ===== LYRICS MEMORIZE MODE =====
var memorizeActive=false;
function toggleMemorize(){
  memorizeActive=!memorizeActive;
  var btn=document.getElementById('btnMemorize');
  if(btn)btn.classList.toggle('active',memorizeActive);
  var lyricsArea=document.getElementById('lyricsArea');
  if(lyricsArea){
    var curLyric=lyricsArea.querySelector('.cur-lyric');
    if(curLyric&&memorizeActive){curLyric.style.filter='blur(8px)';curLyric.style.transition='filter .3s';}
    else if(curLyric){curLyric.style.filter='none';}
  }
}

// ===== SEASONAL THEME =====
function applySeasonalTheme(){
  var month=new Date().getMonth()+1;
  var season,emoji,gradient;
  if(month>=3&&month<=5){season='봄';emoji='🌸';gradient='linear-gradient(135deg,rgba(255,182,193,.08),rgba(255,105,180,.05))';}
  else if(month>=6&&month<=8){season='여름';emoji='☀️';gradient='linear-gradient(135deg,rgba(0,191,255,.08),rgba(30,144,255,.05))';}
  else if(month>=9&&month<=11){season='가을';emoji='🍁';gradient='linear-gradient(135deg,rgba(255,140,0,.08),rgba(210,105,30,.05))';}
  else{season='겨울';emoji='❄️';gradient='linear-gradient(135deg,rgba(135,206,250,.08),rgba(70,130,180,.05))';}
  var banner=document.createElement('div');
  banner.style.cssText='grid-column:1/-1;background:'+gradient+';border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:10px 16px;margin-bottom:4px;display:flex;align-items:center;gap:8px;font-size:13px';
  banner.innerHTML='<span style="font-size:20px">'+emoji+'</span><span style="color:var(--text-primary);font-weight:700">'+season+' 시즌</span><span style="color:var(--text-secondary)">| 계절에 맞는 노래를 불러보세요!</span>';
  var songSelect=document.getElementById('songSelect');
  if(songSelect&&songSelect.firstChild)songSelect.insertBefore(banner,songSelect.firstChild);
  try{
    var seasons=JSON.parse(localStorage.getItem('sv8_seasons')||'[]');
    if(seasons.indexOf(season)===-1){seasons.push(season);localStorage.setItem('sv8_seasons',JSON.stringify(seasons));}
    if(typeof checkAchievements==='function'){var stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');checkAchievements(stats);}
  }catch(e){}
}

// ===== KEYBOARD SHORTCUTS =====
function setupKeyboardV8(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
    switch(e.key.toLowerCase()){
      case 'r':showRankingModal();break;
      case 'p':showPlannerModal();break;
      case 'v':showRangeTest();break;
      case 't':showTipsModal();break;
      case 'c':generateShareCard();break;
    }
  });
}

// ===== INJECT CSS =====
function injectV8CSS(){
  var style=document.createElement('style');
  style.textContent=
    '.v8-modal{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.85);z-index:55;flex-direction:column;align-items:center;justify-content:center;padding:20px}'+
    '.v8-modal.show{display:flex}'+
    '.v8-modal-box{background:linear-gradient(135deg,#1a1040,#2a1060);border:2px solid #6a3aaa;border-radius:16px;padding:24px;max-width:420px;width:100%;max-height:80vh;overflow-y:auto}'+
    '.v8-quick-actions{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}'+
    '.v8-qa-btn{background:var(--btn-bg);border:1px solid var(--btn-border);color:var(--text-primary);padding:6px 14px;border-radius:16px;font-size:12px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:4px}'+
    '.v8-qa-btn:hover{background:rgba(255,106,176,.2);border-color:var(--accent)}'+
    '@media(max-width:600px){.v8-modal-box{max-width:calc(100vw - 40px);padding:16px}.v8-qa-btn{font-size:11px;padding:5px 10px}}';
  document.head.appendChild(style);
}

// ===== INJECT UI =====
function injectV8UI(){
  var h1=document.querySelector('#header h1');
  if(h1)h1.textContent='StarVoice v8';
  var badge=document.getElementById('songCountBadge');
  if(badge&&typeof SONGS!=='undefined')badge.textContent=SONGS.length;

  // Add modals
  var modals=['v8PlannerModal','v8RankingModal','v8RangeModal','v8TipsModal'];
  modals.forEach(function(id){
    var m=document.createElement('div');m.className='v8-modal';m.id=id;
    m.onclick=function(e){if(e.target===m)m.classList.remove('show');};
    document.body.appendChild(m);
  });

  // Add memorize + guide buttons to sing controls
  var controls=document.getElementById('singControls');
  if(controls){
    var memBtn=document.createElement('button');memBtn.id='btnMemorize';
    memBtn.title='가사 외우기';memBtn.textContent='🧠';
    memBtn.onclick=function(){toggleMemorize();};
    var guideBtn=document.createElement('button');guideBtn.id='btnGuide';
    guideBtn.title='보컬 가이드';guideBtn.textContent='🎵';
    guideBtn.onclick=function(){
      if(guideOn){stopVocalGuide();guideBtn.classList.remove('active');}
      else{startVocalGuide();guideBtn.classList.add('active');}
    };
    var firstBtn=controls.firstChild;
    controls.insertBefore(guideBtn,firstBtn);
    controls.insertBefore(memBtn,firstBtn);
  }

  // Add quick action buttons to song select
  var songSelect=document.getElementById('songSelect');
  if(songSelect){
    var qa=document.createElement('div');qa.className='v8-quick-actions';
    qa.innerHTML=
      '<button class="v8-qa-btn" onclick="showRankingModal()">🏆 랭킹</button>'+
      '<button class="v8-qa-btn" onclick="showPlannerModal()">📅 연습플래너</button>'+
      '<button class="v8-qa-btn" onclick="showRangeTest()">🎤 음역테스트</button>'+
      '<button class="v8-qa-btn" onclick="showTipsModal()">💡 노래팁</button>'+
      '<button class="v8-qa-btn" onclick="generateShareCard()">📸 공유카드</button>';
    var searchWrap=songSelect.querySelector('.search-wrap');
    if(searchWrap&&searchWrap.nextSibling)songSelect.insertBefore(qa,searchWrap.nextSibling);
    else songSelect.insertBefore(qa,songSelect.firstChild);
  }

  // Update header buttons
  var hdrBtns=document.querySelector('.hdr-btns');
  if(hdrBtns){
    var tipsBtn=document.createElement('button');tipsBtn.setAttribute('aria-label','노래 팁');
    tipsBtn.textContent='💡 팁';
    tipsBtn.onclick=function(){showTipsModal();};
    hdrBtns.appendChild(tipsBtn);
  }
}

// ===== HOOK INTO EXISTING FUNCTIONS =====

// Hook endSong for practice planner + vocal guide
var origEndSongV8=typeof endSong==='function'?endSong:null;
window.endSong=function(){
  stopVocalGuide();
  memorizeActive=false;
  var lyricsArea=document.getElementById('lyricsArea');
  if(lyricsArea){var cl=lyricsArea.querySelector('.cur-lyric');if(cl)cl.style.filter='none';}

  recordPractice();

  // Check memorize achievement
  if(typeof curSong!=='undefined'&&curSong&&typeof totalN!=='undefined'&&typeof score!=='undefined'){
    var fs=totalN>0?Math.min(100,Math.round(score/Math.max(1,totalN))):0;
    if(fs>=80)localStorage.setItem('sv8_memorize_clear','true');
  }

  if(origEndSongV8)origEndSongV8();
};

// Hook game loop to update vocal guide
var origUpdatePitch=null;
if(typeof window!=='undefined'){
  var checkGuideInterval=setInterval(function(){
    if(typeof McLeodPitch!=='undefined'&&McLeodPitch.getLastDetection){
      clearInterval(checkGuideInterval);
      setInterval(function(){
        if(!guideOn)return;
        if(typeof curSong!=='undefined'&&curSong&&typeof songTime!=='undefined'){
          var melody=curSong.melody;if(!melody)return;
          var closest=null;
          for(var i=0;i<melody.length;i++){
            if(songTime>=melody[i].t&&songTime<melody[i].t+melody[i].d){closest=melody[i];break;}
          }
          if(closest)updateVocalGuide(closest.f);
          else updateVocalGuide(0);
        }
      },50);
    }
  },500);
}

// ===== SEO UPDATE =====
function updateSEO(){
  var desc=document.querySelector('meta[name="description"]');
  if(desc)desc.setAttribute('content','StarVoice v8: 55곡 AI 음정 분석 K-노래방 PWA. 보컬 가이드, 음역 테스트, 연습 플래너, 랭킹, 공유 카드, 노래 팁 12가지, 30개 업적');
  var ogDesc=document.querySelector('meta[property="og:description"]');
  if(ogDesc)ogDesc.setAttribute('content','55곡 AI 음정 분석 노래방. 보컬 가이드, 음역 테스트, 연습 플래너, 30개 업적');
  var ogTitle=document.querySelector('meta[property="og:title"]');
  if(ogTitle)ogTitle.setAttribute('content','StarVoice v8 - AI 노래방');
  document.title='StarVoice v8 - AI 노래방';
}

// ===== INIT =====
function initV8(){
  injectV8CSS();
  injectV8UI();
  updateSEO();
  applySeasonalTheme();
  setupKeyboardV8();

  if(typeof renderList==='function')renderList();

  console.log('[v8] patch loaded — Songs:',
    typeof SONGS!=='undefined'?SONGS.length:'?',
    'Achievements:',typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:'?');
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initV8);}
else{setTimeout(initV8,100);}

})();
