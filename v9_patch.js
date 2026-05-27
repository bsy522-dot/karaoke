/* StarVoice v9 Patch — Self-contained module injected via SW
 * Adds: 10 songs(55→65), duet mode, voice effects equalizer, song difficulty chart,
 *        warm-up routine builder, practice stats dashboard, vocal diary,
 *        song request board, genre radio mode, pitch training mini-game,
 *        12 achievements(30→42), SFX 6, keyboard shortcuts +5
 */
(function(){
'use strict';

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Ab3=207.65,Bb3=233.08,Eb4=311.13,Bb4=466.16,Db4=277.18,Ab4=415.30;
var Gb4=369.99,Db5=554.37,Eb5=622.25;

// ===== 10 NEW SONGS (56~65) =====
var NEW_SONGS_V9=[
{id:56,cat:"동요",title:"싱글벙글",icon:"😄",diff:"쉬움",dc:"diff-easy",bpm:120,
melody:[
{t:0,d:.4,f:C4,s:"싱"},{t:.4,d:.4,f:E4,s:"글"},{t:.8,d:.4,f:G4,s:"벙"},{t:1.2,d:.8,f:E4,s:"글"},
{t:2,d:.4,f:C4,s:"웃"},{t:2.4,d:.4,f:D4,s:"으"},{t:2.8,d:.8,f:E4,s:"면"},
{t:3.6,d:.4,f:D4,s:"좋"},{t:4,d:.4,f:E4,s:"은"},{t:4.4,d:1.2,f:C4,s:"날"},
{t:5.6,d:.4,f:E4,s:"싱"},{t:6,d:.4,f:G4,s:"글"},{t:6.4,d:.4,f:A4,s:"벙"},{t:6.8,d:.8,f:G4,s:"글"},
{t:7.6,d:.4,f:E4,s:"매"},{t:8,d:.4,f:D4,s:"일"},{t:8.4,d:.4,f:E4,s:"매"},{t:8.8,d:1.2,f:C4,s:"일"}
],lyrics:[{t:0,tx:"싱글벙글 웃으면"},{t:3.6,tx:"좋은 날"},{t:5.6,tx:"싱글벙글 매일매일"}],dur:10},

{id:57,cat:"동요",title:"과수원 길",icon:"🍎",diff:"보통",dc:"diff-medium",bpm:95,
melody:[
{t:0,d:.7,f:E4,s:"동"},{t:.7,d:.7,f:G4,s:"구"},{t:1.4,d:.7,f:A4,s:"밖"},
{t:2.1,d:.7,f:G4,s:"과"},{t:2.8,d:1.4,f:A4,s:"수"},
{t:4.2,d:.7,f:B4,s:"원"},{t:4.9,d:.7,f:A4,s:"길"},
{t:5.6,d:.7,f:G4,s:"아"},{t:6.3,d:.7,f:E4,s:"카"},
{t:7,d:.7,f:D4,s:"시"},{t:7.7,d:1.4,f:C4,s:"아"},
{t:9.1,d:.7,f:E4,s:"꽃"},{t:9.8,d:.7,f:G4,s:"피"},
{t:10.5,d:.7,f:A4,s:"는"},{t:11.2,d:1.4,f:G4,s:"날"},
{t:12.6,d:.7,f:A4,s:"너"},{t:13.3,d:.7,f:G4,s:"와"},
{t:14,d:.7,f:E4,s:"함"},{t:14.7,d:.7,f:D4,s:"께"},
{t:15.4,d:1.8,f:C4,s:"~"}
],lyrics:[{t:0,tx:"동구 밖 과수원길"},{t:4.2,tx:"아카시아"},{t:9.1,tx:"꽃피는 날"},{t:12.6,tx:"너와 함께~"}],dur:18},

{id:58,cat:"세계명곡",title:"젓가락 행진곡",icon:"🥢",diff:"어려움",dc:"diff-hard",bpm:140,
melody:[
{t:0,d:.3,f:F4,s:"라"},{t:.3,d:.3,f:G4,s:"라"},{t:.6,d:.6,f:A4,s:"라"},
{t:1.2,d:.3,f:G4,s:"라"},{t:1.5,d:.3,f:F4,s:"라"},{t:1.8,d:.6,f:G4,s:"라"},
{t:2.4,d:.3,f:A4,s:"라"},{t:2.7,d:.3,f:G4,s:"라"},{t:3,d:.6,f:F4,s:"라"},
{t:3.6,d:.3,f:G4,s:"라"},{t:3.9,d:.3,f:A4,s:"라"},{t:4.2,d:.3,f:B4,s:"라"},
{t:4.5,d:.3,f:A4,s:"라"},{t:4.8,d:.6,f:G4,s:"라"},
{t:5.4,d:.3,f:F4,s:"라"},{t:5.7,d:.3,f:G4,s:"라"},{t:6,d:.6,f:A4,s:"라"},
{t:6.6,d:.3,f:G4,s:"라"},{t:6.9,d:.3,f:F4,s:"라"},{t:7.2,d:.6,f:E4,s:"라"},
{t:7.8,d:.3,f:D4,s:"라"},{t:8.1,d:.3,f:E4,s:"라"},{t:8.4,d:1,f:F4,s:"라"}
],lyrics:[{t:0,tx:"라라라 라라라"},{t:2.4,tx:"라라라 라라라"},{t:5.4,tx:"라라라 라라라"},{t:7.8,tx:"라라라~"}],dur:10},

{id:59,cat:"가요/민요",title:"밀양 아리랑",icon:"🌾",diff:"어려움",dc:"diff-hard",bpm:85,
melody:[
{t:0,d:.8,f:E4,s:"아"},{t:.8,d:.8,f:G4,s:"리"},{t:1.6,d:1.6,f:A4,s:"랑"},
{t:3.2,d:.8,f:A4,s:"아"},{t:4,d:.8,f:B4,s:"리"},{t:4.8,d:1.6,f:A4,s:"랑"},
{t:6.4,d:.8,f:G4,s:"아"},{t:7.2,d:.8,f:E4,s:"라"},
{t:8,d:.8,f:G4,s:"리"},{t:8.8,d:1.6,f:A4,s:"요"},
{t:10.4,d:.8,f:A4,s:"아"},{t:11.2,d:.8,f:G4,s:"리"},
{t:12,d:.8,f:E4,s:"랑"},{t:12.8,d:.8,f:D4,s:"고"},
{t:13.6,d:.8,f:E4,s:"개"},{t:14.4,d:.8,f:D4,s:"를"},
{t:15.2,d:1.8,f:C4,s:"넘"},
{t:17,d:.8,f:E4,s:"어"},{t:17.8,d:.8,f:G4,s:"간"},{t:18.6,d:1.8,f:A4,s:"다"}
],lyrics:[{t:0,tx:"아리랑 아리랑"},{t:6.4,tx:"아라리요"},{t:10.4,tx:"아리랑 고개를"},{t:15.2,tx:"넘어간다"}],dur:21},

{id:60,cat:"세계명곡",title:"에델바이스",icon:"🌼",diff:"보통",dc:"diff-medium",bpm:100,
melody:[
{t:0,d:.6,f:E4,s:"에"},{t:.6,d:.6,f:G4,s:"델"},{t:1.2,d:1.2,f:B4,s:"바"},
{t:2.4,d:.6,f:A4,s:"이"},{t:3,d:1.8,f:G4,s:"스"},
{t:4.8,d:.6,f:E4,s:"에"},{t:5.4,d:.6,f:D4,s:"델"},
{t:6,d:1.2,f:E4,s:"바"},{t:7.2,d:1.2,f:G4,s:"이"},
{t:8.4,d:1.8,f:E4,s:"스"},
{t:10.2,d:.6,f:E4,s:"매"},{t:10.8,d:.6,f:G4,s:"일"},
{t:11.4,d:.6,f:A4,s:"아"},{t:12,d:.6,f:B4,s:"침"},
{t:12.6,d:.6,f:A4,s:"에"},{t:13.2,d:.6,f:G4,s:"만"},
{t:13.8,d:1.2,f:E4,s:"나"},
{t:15,d:.6,f:D4,s:"반"},{t:15.6,d:.6,f:E4,s:"가"},
{t:16.2,d:1.8,f:C4,s:"워"}
],lyrics:[{t:0,tx:"에델바이스"},{t:4.8,tx:"에델바이스"},{t:10.2,tx:"매일 아침에 만나"},{t:15,tx:"반가워"}],dur:18},

{id:61,cat:"동요",title:"꼬마 눈사람",icon:"⛄",diff:"쉬움",dc:"diff-easy",bpm:115,
melody:[
{t:0,d:.4,f:E4,s:"눈"},{t:.4,d:.4,f:E4,s:"을"},{t:.8,d:.4,f:G4,s:"뭉"},
{t:1.2,d:.4,f:G4,s:"쳐"},{t:1.6,d:.8,f:A4,s:"서"},
{t:2.4,d:.4,f:A4,s:"눈"},{t:2.8,d:.4,f:G4,s:"사"},
{t:3.2,d:.8,f:E4,s:"람"},
{t:4,d:.4,f:D4,s:"만"},{t:4.4,d:.4,f:D4,s:"들"},{t:4.8,d:.8,f:E4,s:"고"},
{t:5.6,d:.4,f:D4,s:"눈"},{t:6,d:.4,f:E4,s:"사"},{t:6.4,d:1.2,f:C4,s:"람"},
{t:7.6,d:.4,f:E4,s:"솜"},{t:8,d:.4,f:G4,s:"사"},{t:8.4,d:.4,f:A4,s:"탕"},
{t:8.8,d:.4,f:G4,s:"같"},{t:9.2,d:.8,f:A4,s:"이"},
{t:10,d:.4,f:A4,s:"하"},{t:10.4,d:.4,f:G4,s:"얀"},
{t:10.8,d:.8,f:E4,s:"눈"},
{t:11.6,d:.4,f:D4,s:"사"},{t:12,d:.4,f:E4,s:"랑"},{t:12.4,d:1.6,f:C4,s:"해"}
],lyrics:[{t:0,tx:"눈을 뭉쳐서"},{t:2.4,tx:"눈사람 만들고"},{t:5.6,tx:"눈사람"},{t:7.6,tx:"솜사탕같이 하얀"},{t:11.6,tx:"사랑해"}],dur:14},

{id:62,cat:"가요/민요",title:"님과 함께",icon:"💑",diff:"보통",dc:"diff-medium",bpm:90,
melody:[
{t:0,d:.7,f:G4,s:"푸"},{t:.7,d:.7,f:A4,s:"른"},{t:1.4,d:1.4,f:B4,s:"하"},
{t:2.8,d:.7,f:A4,s:"늘"},{t:3.5,d:.7,f:G4,s:"아"},{t:4.2,d:1.4,f:E4,s:"래"},
{t:5.6,d:.7,f:G4,s:"님"},{t:6.3,d:.7,f:A4,s:"과"},
{t:7,d:.7,f:B4,s:"함"},{t:7.7,d:1.4,f:A4,s:"께"},
{t:9.1,d:.7,f:G4,s:"걸"},{t:9.8,d:.7,f:E4,s:"어"},
{t:10.5,d:1.4,f:D4,s:"가"},
{t:11.9,d:.7,f:E4,s:"는"},{t:12.6,d:.7,f:G4,s:"이"},
{t:13.3,d:.7,f:A4,s:"길"},{t:14,d:.7,f:G4,s:"이"},
{t:14.7,d:.7,f:E4,s:"꽃"},{t:15.4,d:.7,f:D4,s:"길"},
{t:16.1,d:1.8,f:C4,s:"~"}
],lyrics:[{t:0,tx:"푸른 하늘 아래"},{t:5.6,tx:"님과 함께"},{t:9.1,tx:"걸어가는"},{t:11.9,tx:"이 길이 꽃길~"}],dur:18},

{id:63,cat:"세계명곡",title:"오 솔레 미오",icon:"☀️",diff:"어려움",dc:"diff-hard",bpm:95,
melody:[
{t:0,d:.6,f:G4,s:"오"},{t:.6,d:1.2,f:A4,s:"솔"},
{t:1.8,d:.6,f:A4,s:"레"},{t:2.4,d:1.8,f:B4,s:"미"},
{t:4.2,d:1.2,f:A4,s:"오"},
{t:5.4,d:.6,f:G4,s:"오"},{t:6,d:1.2,f:A4,s:"솔"},
{t:7.2,d:.6,f:A4,s:"레"},{t:7.8,d:1.8,f:B4,s:"미"},
{t:9.6,d:1.2,f:A4,s:"오"},
{t:10.8,d:.6,f:E4,s:"스"},{t:11.4,d:.6,f:G4,s:"타"},
{t:12,d:.6,f:A4,s:"인"},{t:12.6,d:.6,f:B4,s:"프"},
{t:13.2,d:.6,f:A4,s:"론"},{t:13.8,d:.6,f:G4,s:"테"},
{t:14.4,d:.6,f:A4,s:"아"},{t:15,d:1.2,f:G4,s:"테"},
{t:16.2,d:.6,f:E4,s:"마"},{t:16.8,d:.6,f:D4,s:"솔"},
{t:17.4,d:1.8,f:C4,s:"~"}
],lyrics:[{t:0,tx:"오 솔레 미오"},{t:5.4,tx:"오 솔레 미오"},{t:10.8,tx:"스타 인 프론테"},{t:14.4,tx:"아 테 마솔~"}],dur:20},

{id:64,cat:"동요",title:"작은별 변주곡",icon:"🌠",diff:"어려움",dc:"diff-hard",bpm:130,
melody:[
{t:0,d:.35,f:C4,s:"반"},{t:.35,d:.35,f:C4,s:"짝"},{t:.7,d:.35,f:G4,s:"반"},{t:1.05,d:.35,f:G4,s:"짝"},
{t:1.4,d:.35,f:A4,s:"작"},{t:1.75,d:.35,f:A4,s:"은"},{t:2.1,d:.7,f:G4,s:"별"},
{t:2.8,d:.35,f:F4,s:"아"},{t:3.15,d:.35,f:F4,s:"름"},{t:3.5,d:.35,f:E4,s:"답"},
{t:3.85,d:.35,f:E4,s:"게"},{t:4.2,d:.35,f:D4,s:"비"},{t:4.55,d:.35,f:D4,s:"치"},
{t:4.9,d:.7,f:C4,s:"네"},
{t:5.6,d:.25,f:G4,s:"서"},{t:5.85,d:.25,f:A4,s:"쪽"},{t:6.1,d:.25,f:G4,s:"나"},
{t:6.35,d:.25,f:F4,s:"라"},{t:6.6,d:.25,f:E4,s:"동"},{t:6.85,d:.25,f:F4,s:"쪽"},
{t:7.1,d:.5,f:G4,s:"나"},
{t:7.6,d:.25,f:A4,s:"라"},{t:7.85,d:.25,f:B4,s:"높"},{t:8.1,d:.25,f:A4,s:"은"},
{t:8.35,d:.25,f:G4,s:"하"},{t:8.6,d:.25,f:A4,s:"늘"},{t:8.85,d:.25,f:G4,s:"에"},
{t:9.1,d:.5,f:E4,s:"서"},
{t:9.6,d:.35,f:C4,s:"반"},{t:9.95,d:.35,f:C4,s:"짝"},{t:10.3,d:.35,f:G4,s:"반"},
{t:10.65,d:.35,f:G4,s:"짝"},{t:11,d:.35,f:A4,s:"작"},{t:11.35,d:.35,f:A4,s:"은"},
{t:11.7,d:1.2,f:G4,s:"별"}
],lyrics:[{t:0,tx:"반짝반짝 작은별"},{t:2.8,tx:"아름답게 비치네"},{t:5.6,tx:"서쪽나라 동쪽나라"},{t:7.6,tx:"높은 하늘에서"},{t:9.6,tx:"반짝반짝 작은별"}],dur:13},

{id:65,cat:"가요/민요",title:"태극기",icon:"🇰🇷",diff:"보통",dc:"diff-medium",bpm:95,
melody:[
{t:0,d:.7,f:C4,s:"동"},{t:.7,d:.7,f:E4,s:"해"},{t:1.4,d:.7,f:G4,s:"물"},
{t:2.1,d:.7,f:A4,s:"과"},{t:2.8,d:1.4,f:G4,s:"~"},
{t:4.2,d:.7,f:A4,s:"백"},{t:4.9,d:.7,f:B4,s:"두"},
{t:5.6,d:.7,f:A4,s:"산"},{t:6.3,d:.7,f:G4,s:"이"},
{t:7,d:1.4,f:E4,s:"~"},
{t:8.4,d:.7,f:G4,s:"마"},{t:9.1,d:.7,f:A4,s:"르"},
{t:9.8,d:.7,f:G4,s:"고"},{t:10.5,d:.7,f:E4,s:"닳"},
{t:11.2,d:.7,f:D4,s:"도"},{t:11.9,d:.7,f:E4,s:"록"},
{t:12.6,d:1.8,f:C4,s:"~"},
{t:14.4,d:.7,f:E4,s:"하"},{t:15.1,d:.7,f:G4,s:"느"},{t:15.8,d:.7,f:A4,s:"님"},
{t:16.5,d:.7,f:G4,s:"이"},{t:17.2,d:.7,f:E4,s:"보"},
{t:17.9,d:.7,f:D4,s:"우"},{t:18.6,d:.7,f:E4,s:"하"},
{t:19.3,d:1.8,f:C4,s:"사"}
],lyrics:[{t:0,tx:"동해물과~"},{t:4.2,tx:"백두산이~"},{t:8.4,tx:"마르고 닳도록~"},{t:14.4,tx:"하느님이 보우하사"}],dur:22}
];

if(typeof SONGS!=='undefined'){NEW_SONGS_V9.forEach(function(s){SONGS.push(s);});}

// ===== WEB AUDIO SFX ENGINE v9 (6 sounds) =====
var sfxCtx9=null;
function getSfxCtx9(){if(!sfxCtx9){try{sfxCtx9=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return sfxCtx9;}
function playSfx9(type){
  var ctx=getSfxCtx9();if(!ctx)return;
  var now=ctx.currentTime;
  function mkOsc(freq,waveform,vol,dur,delay){
    var o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type=waveform;o.frequency.value=freq;
    g.gain.setValueAtTime(vol,now+(delay||0));
    g.gain.exponentialRampToValueAtTime(.001,now+(delay||0)+dur);
    o.start(now+(delay||0));o.stop(now+(delay||0)+dur);
  }
  switch(type){
    case 'duet':mkOsc(523.25,'sine',.12,.3,0);mkOsc(659.25,'sine',.1,.3,.1);mkOsc(783.99,'sine',.08,.3,.2);break;
    case 'eq':mkOsc(440,'triangle',.1,.25,0);mkOsc(554.37,'triangle',.08,.2,.1);break;
    case 'pitch_game':mkOsc(329.63,'sine',.15,.2,0);mkOsc(659.25,'sine',.12,.2,.15);break;
    case 'diary':mkOsc(293.66,'sine',.1,.35,0);break;
    case 'radio':mkOsc(392,'triangle',.12,.3,0);mkOsc(523.25,'triangle',.1,.25,.12);break;
    case 'stats':mkOsc(261.63,'sine',.1,.2,0);mkOsc(329.63,'sine',.08,.2,.08);mkOsc(392,'sine',.06,.2,.16);break;
  }
}

// ===== 12 NEW ACHIEVEMENTS (v9) =====
var NEW_ACH_V9=[
{id:'songs_65',name:'65곡 마스터',desc:'65곡 전부 부르기',icon:'👑',check:function(){var sp;try{sp=JSON.parse(localStorage.getItem('sv6_stats')||'{}').songPlays||{};}catch(e){return false;}if(typeof SONGS==='undefined')return false;return SONGS.every(function(x){return sp[x.id];});}},
{id:'duet_5',name:'듀엣 러버',desc:'듀엣 모드 5회 완료',icon:'👫',check:function(){try{return parseInt(localStorage.getItem('sv9_duet_count')||'0')>=5;}catch(e){return false;}}},
{id:'eq_master',name:'이퀄라이저 마스터',desc:'EQ 프리셋 5종 모두 사용',icon:'🎛️',check:function(){try{var u=JSON.parse(localStorage.getItem('sv9_eq_used')||'[]');return u.length>=5;}catch(e){return false;}}},
{id:'pitch_10',name:'음감 천재',desc:'음정 트레이닝 10라운드 클리어',icon:'🎯',check:function(){try{return parseInt(localStorage.getItem('sv9_pitch_rounds')||'0')>=10;}catch(e){return false;}}},
{id:'pitch_streak',name:'완벽한 귀',desc:'음정 트레이닝 5연속 정답',icon:'👂',check:function(){try{return parseInt(localStorage.getItem('sv9_pitch_best_streak')||'0')>=5;}catch(e){return false;}}},
{id:'diary_7',name:'보컬 일기장',desc:'보컬 다이어리 7일 기록',icon:'📔',check:function(){try{var d=JSON.parse(localStorage.getItem('sv9_diary')||'[]');var days=[];d.forEach(function(e){var day=e.date.slice(0,10);if(days.indexOf(day)===-1)days.push(day);});return days.length>=7;}catch(e){return false;}}},
{id:'radio_all',name:'라디오 DJ',desc:'장르 라디오 모든 장르 청취',icon:'📻',check:function(){try{var g=JSON.parse(localStorage.getItem('sv9_radio_genres')||'[]');return g.length>=4;}catch(e){return false;}}},
{id:'warmup_custom',name:'워밍업 전문가',desc:'커스텀 워밍업 루틴 생성',icon:'🏋️',check:function(){try{return localStorage.getItem('sv9_custom_warmup')==='true';}catch(e){return false;}}},
{id:'score_95_5',name:'95점 이상 5곡',desc:'5곡에서 95점 이상',icon:'💎',check:function(){var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){return false;}var c=0;for(var k in hs){if(hs[k]&&hs[k].s>=95)c++;}return c>=5;}},
{id:'total_100',name:'100곡 가수',desc:'총 노래 100곡 부르기',icon:'🎤',check:function(){try{var s=JSON.parse(localStorage.getItem('sv6_stats')||'{}');return(s.totalSongs||0)>=100;}catch(e){return false;}}},
{id:'all_diff',name:'난이도 정복자',desc:'쉬움/보통/어려움 각 3곡 이상',icon:'🏅',check:function(){var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){return false;}if(typeof SONGS==='undefined')return false;var cnt={easy:0,medium:0,hard:0};SONGS.forEach(function(s){if(hs[s.id]){if(s.dc==='diff-easy')cnt.easy++;else if(s.dc==='diff-medium')cnt.medium++;else if(s.dc==='diff-hard')cnt.hard++;}});return cnt.easy>=3&&cnt.medium>=3&&cnt.hard>=3;}},
{id:'streak_30',name:'30일 연속 가수',desc:'30일 연속 연습',icon:'🔥',check:function(){try{var p=JSON.parse(localStorage.getItem('sv8_planner')||'{}');var streak=0;var d=new Date();for(var i=0;i<365;i++){var ds=new Date(d-i*86400000).toISOString().slice(0,10);if(p[ds])streak++;else break;}return streak>=30;}catch(e){return false;}}}
];

if(typeof ACHIEVEMENTS!=='undefined'){NEW_ACH_V9.forEach(function(a){ACHIEVEMENTS.push(a);});}

// ===== DUET MODE =====
var duetMode=false;
var duetPart='A';

function showDuetModal(){
  var m=document.getElementById('v9DuetModal');if(!m)return;
  m.classList.add('show');
  playSfx9('duet');
  var html='<div class="v9-modal-box"><h3 style="color:var(--accent);margin-bottom:16px">👫 듀엣 모드</h3>';
  html+='<div style="text-align:center;padding:16px">';
  html+='<div style="font-size:14px;color:var(--text-secondary);margin-bottom:20px;line-height:1.6">가사가 번갈아 색상으로 표시됩니다.<br>파트 A(보라)와 파트 B(핑크)를 나눠 부르세요!</div>';
  html+='<div style="display:flex;gap:12px;justify-content:center;margin-bottom:20px">';
  html+='<button class="btn-retry" onclick="setDuetPart(\'A\')" style="min-width:120px"><span style="font-size:20px">🎤</span><br>파트 A</button>';
  html+='<button class="btn-share" onclick="setDuetPart(\'B\')" style="min-width:120px"><span style="font-size:20px">🎤</span><br>파트 B</button>';
  html+='</div>';
  html+='<div style="display:flex;gap:12px;justify-content:center">';
  html+='<button class="btn-play" onclick="toggleDuetMode()">'+( duetMode?'듀엣 끄기':'듀엣 켜기')+'</button>';
  html+='<button class="btn-back" onclick="document.getElementById(\'v9DuetModal\').classList.remove(\'show\')">닫기</button>';
  html+='</div></div></div>';
  m.innerHTML=html;
}

window.setDuetPart=function(p){
  duetPart=p;
  var toast=document.createElement('div');toast.className='ach-toast show';
  toast.textContent='🎤 파트 '+p+' 선택됨';
  document.body.appendChild(toast);
  setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},1500);
};

window.toggleDuetMode=function(){
  duetMode=!duetMode;
  if(duetMode){
    var cnt=parseInt(localStorage.getItem('sv9_duet_count')||'0');
    localStorage.setItem('sv9_duet_count',String(cnt+1));
    if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  }
  document.getElementById('v9DuetModal').classList.remove('show');
  var toast=document.createElement('div');toast.className='ach-toast show';
  toast.textContent=duetMode?'👫 듀엣 모드 ON':'👤 솔로 모드';
  document.body.appendChild(toast);
  setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},1500);
};

// ===== VOICE EFFECTS EQUALIZER =====
var EQ_PRESETS=[
  {name:'기본',icon:'🔊',bass:0,mid:0,treble:0,desc:'원래 음색 그대로'},
  {name:'밝은 음색',icon:'✨',bass:-2,mid:2,treble:5,desc:'고음이 또렷하게'},
  {name:'따뜻한 음색',icon:'🌅',bass:4,mid:1,treble:-2,desc:'풍성한 저음'},
  {name:'라이브 홀',icon:'🏛️',bass:2,mid:-1,treble:3,desc:'콘서트홀 느낌'},
  {name:'라디오',icon:'📻',bass:-3,mid:5,treble:-1,desc:'라디오 보이스'},
  {name:'파워풀',icon:'💥',bass:5,mid:3,treble:4,desc:'임팩트 있는 소리'},
  {name:'부드러운',icon:'🌙',bass:1,mid:-2,treble:-3,desc:'잔잔한 분위기'},
  {name:'팝 보컬',icon:'🎵',bass:1,mid:4,treble:2,desc:'팝 스타일 보컬'}
];

var currentEQPreset=0;
var eqNodes={bass:null,mid:null,treble:null};

function applyEQ(preset){
  currentEQPreset=preset;
  var p=EQ_PRESETS[preset];
  if(typeof audioCtx!=='undefined'&&audioCtx){
    if(!eqNodes.bass){
      eqNodes.bass=audioCtx.createBiquadFilter();eqNodes.bass.type='lowshelf';eqNodes.bass.frequency.value=300;
      eqNodes.mid=audioCtx.createBiquadFilter();eqNodes.mid.type='peaking';eqNodes.mid.frequency.value=1000;eqNodes.mid.Q.value=1;
      eqNodes.treble=audioCtx.createBiquadFilter();eqNodes.treble.type='highshelf';eqNodes.treble.frequency.value=3000;
    }
    eqNodes.bass.gain.value=p.bass;
    eqNodes.mid.gain.value=p.mid;
    eqNodes.treble.gain.value=p.treble;
  }
  try{
    var used=JSON.parse(localStorage.getItem('sv9_eq_used')||'[]');
    if(used.indexOf(p.name)===-1){used.push(p.name);localStorage.setItem('sv9_eq_used',JSON.stringify(used));}
    if(typeof checkAchievements==='function')checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));
  }catch(e){}
}

function showEQModal(){
  var m=document.getElementById('v9EQModal');if(!m)return;
  m.classList.add('show');
  playSfx9('eq');
  var html='<div class="v9-modal-box" style="max-height:80vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">🎛️ 보이스 이퀄라이저</h3>';
  html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
  EQ_PRESETS.forEach(function(p,i){
    var active=i===currentEQPreset;
    html+='<div onclick="selectEQPreset('+i+')" style="background:'+(active?'rgba(255,106,176,.2)':'var(--btn-bg)')+';border:2px solid '+(active?'var(--accent)':'var(--btn-border)')+';border-radius:12px;padding:12px;cursor:pointer;transition:all .2s;text-align:center">';
    html+='<div style="font-size:28px;margin-bottom:4px">'+p.icon+'</div>';
    html+='<div style="font-size:13px;font-weight:700;color:var(--text-primary)">'+p.name+'</div>';
    html+='<div style="font-size:11px;color:var(--text-secondary);margin-top:2px">'+p.desc+'</div>';
    if(active)html+='<div style="color:var(--accent);font-size:10px;margin-top:4px;font-weight:700">적용 중</div>';
    html+='</div>';
  });
  html+='</div>';
  html+='<div style="margin-top:16px;padding:12px;background:var(--btn-bg);border-radius:12px">';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">현재 설정</div>';
  var cur=EQ_PRESETS[currentEQPreset];
  html+='<div style="display:flex;justify-content:space-around;font-size:12px">';
  html+='<div style="text-align:center"><div style="color:var(--accent-gold);font-weight:700">Bass</div><div style="color:var(--text-primary)">'+(cur.bass>0?'+':'')+cur.bass+'dB</div></div>';
  html+='<div style="text-align:center"><div style="color:var(--accent-gold);font-weight:700">Mid</div><div style="color:var(--text-primary)">'+(cur.mid>0?'+':'')+cur.mid+'dB</div></div>';
  html+='<div style="text-align:center"><div style="color:var(--accent-gold);font-weight:700">Treble</div><div style="color:var(--text-primary)">'+(cur.treble>0?'+':'')+cur.treble+'dB</div></div>';
  html+='</div></div>';
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v9EQModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.selectEQPreset=function(idx){
  applyEQ(idx);
  showEQModal();
};

// ===== PITCH TRAINING MINI-GAME =====
var pitchGameActive=false,pitchGameRound=0,pitchGameScore=0,pitchGameStreak=0,pitchGameBestStreak=0;
var INTERVALS=[
  {name:'단2도',ratio:16/15,semitones:1},{name:'장2도',ratio:9/8,semitones:2},
  {name:'단3도',ratio:6/5,semitones:3},{name:'장3도',ratio:5/4,semitones:4},
  {name:'완전4도',ratio:4/3,semitones:5},{name:'증4도',ratio:Math.sqrt(2),semitones:6},
  {name:'완전5도',ratio:3/2,semitones:7},{name:'단6도',ratio:8/5,semitones:8},
  {name:'장6도',ratio:5/3,semitones:9},{name:'단7도',ratio:16/9,semitones:10},
  {name:'장7도',ratio:15/8,semitones:11},{name:'완전8도',ratio:2,semitones:12}
];
var pitchGameTarget=null;

function showPitchGame(){
  var m=document.getElementById('v9PitchModal');if(!m)return;
  m.classList.add('show');
  pitchGameRound=0;pitchGameScore=0;pitchGameStreak=0;
  playSfx9('pitch_game');
  renderPitchGameRound();
}

function renderPitchGameRound(){
  var m=document.getElementById('v9PitchModal');if(!m)return;
  if(pitchGameRound>=10){
    var total=parseInt(localStorage.getItem('sv9_pitch_rounds')||'0');
    localStorage.setItem('sv9_pitch_rounds',String(total+10));
    if(pitchGameBestStreak<pitchGameStreak){pitchGameBestStreak=pitchGameStreak;localStorage.setItem('sv9_pitch_best_streak',String(pitchGameBestStreak));}
    if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
    var grade=pitchGameScore>=9?'S':pitchGameScore>=7?'A':pitchGameScore>=5?'B':pitchGameScore>=3?'C':'D';
    var html='<div class="v9-modal-box" style="text-align:center"><h3 style="color:var(--accent);margin-bottom:16px">🎯 음정 트레이닝 결과</h3>';
    html+='<div class="res-grade grade-'+grade+'" style="font-size:64px">'+grade+'</div>';
    html+='<div style="font-size:36px;font-weight:900;color:var(--accent-gold);margin:8px 0">'+pitchGameScore+'/10</div>';
    html+='<div style="font-size:14px;color:var(--text-secondary)">최고 연속 정답: '+pitchGameStreak+'</div>';
    html+='<div style="display:flex;gap:10px;justify-content:center;margin-top:20px">';
    html+='<button class="btn-retry" onclick="pitchGameRound=0;pitchGameScore=0;pitchGameStreak=0;renderPitchGameRound()">다시 하기</button>';
    html+='<button class="btn-back" onclick="document.getElementById(\'v9PitchModal\').classList.remove(\'show\')">닫기</button>';
    html+='</div></div>';
    m.innerHTML=html;
    return;
  }
  var targetIdx=Math.floor(Math.random()*INTERVALS.length);
  pitchGameTarget=INTERVALS[targetIdx];
  var options=[];options.push(targetIdx);
  while(options.length<4){var r=Math.floor(Math.random()*INTERVALS.length);if(options.indexOf(r)===-1)options.push(r);}
  for(var i=options.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=options[i];options[i]=options[j];options[j]=tmp;}
  var html='<div class="v9-modal-box"><h3 style="color:var(--accent);margin-bottom:8px">🎯 음정 트레이닝</h3>';
  html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
  html+='<span style="font-size:13px;color:var(--text-secondary)">라운드 '+(pitchGameRound+1)+'/10</span>';
  html+='<span style="font-size:13px;color:var(--accent-gold);font-weight:700">점수: '+pitchGameScore+' | 연속: '+pitchGameStreak+'</span></div>';
  html+='<div style="text-align:center;margin:20px 0">';
  html+='<button class="btn-retry" onclick="playPitchInterval()" style="font-size:16px;padding:12px 28px">🔊 음정 듣기</button>';
  html+='</div>';
  html+='<div style="font-size:13px;color:var(--text-secondary);text-align:center;margin-bottom:16px">두 음의 음정 간격은?</div>';
  html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
  options.forEach(function(oi){
    html+='<button onclick="answerPitchGame('+oi+','+targetIdx+')" style="background:var(--btn-bg);border:2px solid var(--btn-border);border-radius:12px;padding:14px;color:var(--text-primary);font-size:14px;font-weight:700;cursor:pointer;transition:all .2s">'+INTERVALS[oi].name+'</button>';
  });
  html+='</div></div>';
  m.innerHTML=html;
}

window.playPitchInterval=function(){
  var ctx=getSfxCtx9();if(!ctx)return;
  var baseFreq=261.63+Math.random()*200;
  var now=ctx.currentTime;
  var o1=ctx.createOscillator(),g1=ctx.createGain();
  o1.connect(g1);g1.connect(ctx.destination);o1.type='sine';o1.frequency.value=baseFreq;
  g1.gain.setValueAtTime(.2,now);g1.gain.exponentialRampToValueAtTime(.001,now+.6);o1.start(now);o1.stop(now+.6);
  var o2=ctx.createOscillator(),g2=ctx.createGain();
  o2.connect(g2);g2.connect(ctx.destination);o2.type='sine';o2.frequency.value=baseFreq*pitchGameTarget.ratio;
  g2.gain.setValueAtTime(.2,now+.7);g2.gain.exponentialRampToValueAtTime(.001,now+1.3);o2.start(now+.7);o2.stop(now+1.3);
};

window.answerPitchGame=function(selected,correct){
  pitchGameRound++;
  if(selected===correct){pitchGameScore++;pitchGameStreak++;
    var toast=document.createElement('div');toast.className='ach-toast show';toast.style.background='linear-gradient(135deg,rgba(76,175,80,.95),rgba(56,142,60,.95))';
    toast.textContent='✅ 정답! '+INTERVALS[correct].name;document.body.appendChild(toast);
    setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},1200);
  }else{pitchGameStreak=0;
    var toast=document.createElement('div');toast.className='ach-toast show';toast.style.background='linear-gradient(135deg,rgba(244,67,54,.95),rgba(198,40,40,.95))';
    toast.textContent='❌ '+INTERVALS[correct].name+' 이었어요';document.body.appendChild(toast);
    setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},1500);
  }
  setTimeout(renderPitchGameRound,800);
};

// ===== VOCAL DIARY =====
function getDiary(){try{return JSON.parse(localStorage.getItem('sv9_diary')||'[]');}catch(e){return [];}}
function saveDiary(d){localStorage.setItem('sv9_diary',JSON.stringify(d));}

function showDiaryModal(){
  var m=document.getElementById('v9DiaryModal');if(!m)return;
  m.classList.add('show');
  playSfx9('diary');
  var diary=getDiary();
  var html='<div class="v9-modal-box" style="max-height:80vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">📔 보컬 다이어리</h3>';
  html+='<div style="background:var(--btn-bg);border:1px solid var(--btn-border);border-radius:12px;padding:14px;margin-bottom:16px">';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">오늘의 기록</div>';
  html+='<div style="display:flex;gap:8px;margin-bottom:8px">';
  html+='<select id="diaryMood" style="flex:1;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--btn-border);border-radius:8px;padding:6px;font-size:13px">';
  html+='<option value="😊">😊 좋음</option><option value="😐">😐 보통</option><option value="😢">😢 별로</option><option value="🔥">🔥 최고</option><option value="😴">😴 피곤</option>';
  html+='</select>';
  html+='<select id="diaryVoice" style="flex:1;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--btn-border);border-radius:8px;padding:6px;font-size:13px">';
  html+='<option value="좋음">목상태 좋음</option><option value="보통">목상태 보통</option><option value="피곤">목 피곤</option><option value="아픔">목 아픔</option>';
  html+='</select></div>';
  html+='<textarea id="diaryNote" placeholder="오늘 연습 메모..." style="width:100%;height:60px;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--btn-border);border-radius:8px;padding:8px;font-size:13px;resize:none;font-family:inherit"></textarea>';
  html+='<button class="btn-retry" onclick="addDiaryEntry()" style="width:100%;margin-top:8px;font-size:13px">기록 추가</button>';
  html+='</div>';
  if(diary.length>0){
    html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">최근 기록 ('+diary.length+'개)</div>';
    diary.slice(-15).reverse().forEach(function(e){
      html+='<div style="background:var(--btn-bg);border:1px solid var(--btn-border);border-radius:10px;padding:10px;margin:6px 0">';
      html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">';
      html+='<span style="font-size:12px;color:var(--text-secondary)">'+e.date+'</span>';
      html+='<span>'+e.mood+' <span style="font-size:11px;color:var(--text-muted)">'+e.voice+'</span></span>';
      html+='</div>';
      if(e.note)html+='<div style="font-size:12px;color:var(--text-primary);line-height:1.5">'+e.note.replace(/</g,'&lt;')+'</div>';
      html+='</div>';
    });
  }else{
    html+='<div style="text-align:center;color:var(--text-muted);padding:20px">아직 기록이 없습니다</div>';
  }
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v9DiaryModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.addDiaryEntry=function(){
  var mood=document.getElementById('diaryMood').value;
  var voice=document.getElementById('diaryVoice').value;
  var note=document.getElementById('diaryNote').value.trim();
  var diary=getDiary();
  diary.push({date:new Date().toISOString().slice(0,16).replace('T',' '),mood:mood,voice:voice,note:note});
  if(diary.length>100)diary=diary.slice(-100);
  saveDiary(diary);
  if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  showDiaryModal();
};

// ===== GENRE RADIO MODE =====
var GENRE_MAP={
  '동요':{icon:'🧒',color:'#4caf50'},
  '가요/민요':{icon:'🇰🇷',color:'#ff9800'},
  '세계명곡':{icon:'🌍',color:'#2196f3'},
  '팝':{icon:'🎵',color:'#e91e63'}
};

function showRadioModal(){
  var m=document.getElementById('v9RadioModal');if(!m)return;
  m.classList.add('show');
  playSfx9('radio');
  if(typeof SONGS==='undefined')return;
  var genres={};
  SONGS.forEach(function(s){
    if(!genres[s.cat])genres[s.cat]={songs:[],count:0};
    genres[s.cat].songs.push(s);genres[s.cat].count++;
  });
  var html='<div class="v9-modal-box"><h3 style="color:var(--accent);margin-bottom:16px">📻 장르 라디오</h3>';
  html+='<div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">장르를 선택하면 해당 장르의 랜덤 곡이 자동 선택됩니다</div>';
  Object.keys(genres).forEach(function(cat){
    var info=GENRE_MAP[cat]||{icon:'🎶',color:'#a855f7'};
    html+='<div onclick="playRadioGenre(\''+cat.replace(/'/g,'\\\'')+'\')" style="background:var(--btn-bg);border:2px solid var(--btn-border);border-radius:12px;padding:14px;margin:8px 0;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:12px" onmouseover="this.style.borderColor=\''+info.color+'\'" onmouseout="this.style.borderColor=\'var(--btn-border)\'">';
    html+='<span style="font-size:32px">'+info.icon+'</span>';
    html+='<div style="flex:1"><div style="font-weight:700;color:var(--text-primary);font-size:15px">'+cat+'</div>';
    html+='<div style="font-size:12px;color:var(--text-secondary);margin-top:2px">'+genres[cat].count+'곡</div></div>';
    html+='<span style="font-size:20px;color:'+info.color+'">▶</span>';
    html+='</div>';
  });
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v9RadioModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.playRadioGenre=function(cat){
  if(typeof SONGS==='undefined')return;
  var matching=SONGS.filter(function(s){return s.cat===cat;});
  if(matching.length===0)return;
  var pick=matching[Math.floor(Math.random()*matching.length)];
  try{
    var used=JSON.parse(localStorage.getItem('sv9_radio_genres')||'[]');
    if(used.indexOf(cat)===-1){used.push(cat);localStorage.setItem('sv9_radio_genres',JSON.stringify(used));}
    if(typeof checkAchievements==='function')checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));
  }catch(e){}
  document.getElementById('v9RadioModal').classList.remove('show');
  if(typeof selectSong==='function')selectSong(pick);
};

// ===== PRACTICE STATS DASHBOARD =====
function showStatsModal(){
  var m=document.getElementById('v9StatsModal');if(!m)return;
  m.classList.add('show');
  playSfx9('stats');
  var stats;try{stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');}catch(e){stats={};}
  var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){hs={};}
  var planner;try{planner=JSON.parse(localStorage.getItem('sv8_planner')||'{}');}catch(e){planner={};}
  var totalSongs=stats.totalSongs||0;
  var totalPitch=totalSongs>0?Math.round((stats.totalPitch||0)/totalSongs):0;
  var bestCombo=stats.bestCombo||0;
  var gradeCount={S:0,A:0,B:0,C:0,D:0};
  var diffCount={easy:0,medium:0,hard:0};
  if(typeof SONGS!=='undefined'){
    SONGS.forEach(function(s){
      if(hs[s.id]){
        if(hs[s.id].g)gradeCount[hs[s.id].g]=(gradeCount[hs[s.id].g]||0)+1;
        if(s.dc==='diff-easy')diffCount.easy++;
        else if(s.dc==='diff-medium')diffCount.medium++;
        else diffCount.hard++;
      }
    });
  }
  var plannerDays=Object.keys(planner).length;
  var totalMin=0;Object.keys(planner).forEach(function(k){totalMin+=planner[k].minutes||0;});
  var streak=0;var d=new Date();
  for(var i=0;i<365;i++){var ds=new Date(d-i*86400000).toISOString().slice(0,10);if(planner[ds])streak++;else break;}
  var weekData=[];
  for(var w=6;w>=0;w--){
    var wd=new Date(d-w*86400000).toISOString().slice(0,10);
    weekData.push({day:wd.slice(5),songs:planner[wd]?(planner[wd].songs||0):0});
  }
  var maxWeekSongs=Math.max.apply(null,weekData.map(function(x){return x.songs;}))||1;
  var html='<div class="v9-modal-box" style="max-height:85vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">📊 연습 통계 대시보드</h3>';
  html+='<div class="stat-grid" style="margin-bottom:16px">';
  html+='<div class="stat-item"><div class="si-val">'+totalSongs+'</div><div class="si-lbl">총 노래</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+totalPitch+'%</div><div class="si-lbl">평균 음정</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+streak+'</div><div class="si-lbl">연속일</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+totalMin+'</div><div class="si-lbl">총 분</div></div>';
  html+='</div>';
  html+='<div style="background:var(--btn-bg);border-radius:12px;padding:14px;margin-bottom:12px">';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:10px">주간 연습량</div>';
  html+='<div style="display:flex;align-items:flex-end;gap:6px;height:80px">';
  weekData.forEach(function(wd){
    var h=Math.max(4,Math.round(wd.songs/maxWeekSongs*70));
    html+='<div style="flex:1;text-align:center"><div style="background:linear-gradient(180deg,var(--accent),var(--accent2));height:'+h+'px;border-radius:4px 4px 0 0;margin-bottom:4px;transition:height .5s"></div>';
    html+='<div style="font-size:9px;color:var(--text-muted)">'+wd.day+'</div></div>';
  });
  html+='</div></div>';
  html+='<div style="background:var(--btn-bg);border-radius:12px;padding:14px;margin-bottom:12px">';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:10px">등급 분포</div>';
  var totalGraded=gradeCount.S+gradeCount.A+gradeCount.B+gradeCount.C+gradeCount.D;
  ['S','A','B','C','D'].forEach(function(g){
    var pct=totalGraded>0?Math.round(gradeCount[g]/totalGraded*100):0;
    var colors={S:'#ffd700',A:'#4caf50',B:'#2196f3',C:'#ff9800',D:'#f44336'};
    html+='<div style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:12px">';
    html+='<span style="width:16px;font-weight:900;color:'+colors[g]+'">'+g+'</span>';
    html+='<div style="flex:1;height:10px;background:rgba(255,255,255,.08);border-radius:5px;overflow:hidden"><div style="height:100%;width:'+pct+'%;background:'+colors[g]+';border-radius:5px"></div></div>';
    html+='<span style="width:28px;text-align:right;color:var(--text-primary);font-weight:700">'+gradeCount[g]+'</span></div>';
  });
  html+='</div>';
  html+='<div style="background:var(--btn-bg);border-radius:12px;padding:14px">';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:10px">난이도별 완주</div>';
  var labels={easy:'쉬움',medium:'보통',hard:'어려움'};
  var dColors={easy:'#4caf50',medium:'#ff9800',hard:'#f44336'};
  ['easy','medium','hard'].forEach(function(dl){
    html+='<div style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:12px">';
    html+='<span style="width:36px;color:'+dColors[dl]+';font-weight:700">'+labels[dl]+'</span>';
    html+='<div style="flex:1;height:10px;background:rgba(255,255,255,.08);border-radius:5px;overflow:hidden"><div style="height:100%;width:'+Math.min(100,diffCount[dl]*5)+'%;background:'+dColors[dl]+';border-radius:5px"></div></div>';
    html+='<span style="width:20px;text-align:right;color:var(--text-primary);font-weight:700">'+diffCount[dl]+'</span></div>';
  });
  html+='</div>';
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v9StatsModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

// ===== CUSTOM WARMUP ROUTINE BUILDER =====
var WARMUP_EXERCISES=[
  {id:'breath',name:'복식호흡',icon:'🫁',dur:60,desc:'4초 들이쉬고 4초 내쉬기'},
  {id:'lip_trill',name:'립트릴',icon:'💋',dur:45,desc:'입술 떨면서 음 올리기'},
  {id:'humming',name:'허밍',icon:'🎵',dur:45,desc:'입 다물고 콧소리로 음 내기'},
  {id:'vowels',name:'모음 발성',icon:'🔤',dur:30,desc:'아에이오우 순서대로'},
  {id:'scales',name:'스케일',icon:'🎹',dur:60,desc:'도레미파솔라시도 올리기'},
  {id:'staccato',name:'스타카토',icon:'⚡',dur:30,desc:'짧게 끊어서 하하하'},
  {id:'sirens',name:'사이렌',icon:'🚨',dur:45,desc:'낮은음에서 높은음 쭉 올리기'},
  {id:'tongue',name:'혀 풀기',icon:'👅',dur:30,desc:'라라라 빠르게 반복'}
];

function showWarmupBuilder(){
  var m=document.getElementById('v9WarmupModal');if(!m)return;
  m.classList.add('show');
  var saved;try{saved=JSON.parse(localStorage.getItem('sv9_warmup_routine')||'null');}catch(e){saved=null;}
  var html='<div class="v9-modal-box" style="max-height:80vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">🏋️ 워밍업 루틴 빌더</h3>';
  html+='<div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">나만의 워밍업 루틴을 만들어보세요</div>';
  WARMUP_EXERCISES.forEach(function(ex){
    var inRoutine=saved&&saved.indexOf(ex.id)!==-1;
    html+='<div onclick="toggleWarmupExercise(\''+ex.id+'\')" style="background:'+(inRoutine?'rgba(168,85,247,.15)':'var(--btn-bg)')+';border:2px solid '+(inRoutine?'var(--accent2)':'var(--btn-border)')+';border-radius:12px;padding:12px;margin:6px 0;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:10px">';
    html+='<span style="font-size:24px">'+ex.icon+'</span>';
    html+='<div style="flex:1"><div style="font-weight:700;color:var(--text-primary);font-size:13px">'+ex.name+'</div>';
    html+='<div style="font-size:11px;color:var(--text-secondary)">'+ex.desc+' ('+ex.dur+'초)</div></div>';
    html+='<span style="font-size:18px">'+(inRoutine?'✅':'⬜')+'</span>';
    html+='</div>';
  });
  if(saved&&saved.length>0){
    var totalDur=0;
    saved.forEach(function(id){WARMUP_EXERCISES.forEach(function(ex){if(ex.id===id)totalDur+=ex.dur;});});
    html+='<div style="background:rgba(168,85,247,.1);border:1px solid var(--accent2);border-radius:12px;padding:12px;margin-top:12px;text-align:center">';
    html+='<div style="font-size:13px;color:var(--text-primary)">나의 루틴: '+saved.length+'개 운동 / '+Math.round(totalDur/60)+'분 '+totalDur%60+'초</div>';
    html+='<button class="btn-play" onclick="startCustomWarmup()" style="margin-top:8px;font-size:13px">🏋️ 루틴 시작</button></div>';
  }
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v9WarmupModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.toggleWarmupExercise=function(id){
  var saved;try{saved=JSON.parse(localStorage.getItem('sv9_warmup_routine')||'[]');}catch(e){saved=[];}
  var idx=saved.indexOf(id);
  if(idx===-1)saved.push(id);else saved.splice(idx,1);
  localStorage.setItem('sv9_warmup_routine',JSON.stringify(saved));
  if(saved.length>0){localStorage.setItem('sv9_custom_warmup','true');
    if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  }
  showWarmupBuilder();
};

window.startCustomWarmup=function(){
  var saved;try{saved=JSON.parse(localStorage.getItem('sv9_warmup_routine')||'[]');}catch(e){return;}
  if(saved.length===0)return;
  document.getElementById('v9WarmupModal').classList.remove('show');
  var exercises=[];
  saved.forEach(function(id){WARMUP_EXERCISES.forEach(function(ex){if(ex.id===id)exercises.push(ex);});});
  var curIdx=0;
  function runExercise(){
    if(curIdx>=exercises.length){
      var toast=document.createElement('div');toast.className='ach-toast show';
      toast.textContent='🏋️ 워밍업 완료!';document.body.appendChild(toast);
      setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},2000);
      return;
    }
    var ex=exercises[curIdx];
    var toast=document.createElement('div');toast.className='ach-toast show';
    toast.textContent=ex.icon+' '+ex.name+' ('+ex.dur+'초)';document.body.appendChild(toast);
    setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();curIdx++;runExercise();},400);},ex.dur*1000);
  }
  runExercise();
};

// ===== SONG DIFFICULTY CHART =====
function showDiffChart(){
  var m=document.getElementById('v9DiffModal');if(!m)return;
  m.classList.add('show');
  if(typeof SONGS==='undefined')return;
  var easy=[],medium=[],hard=[];
  SONGS.forEach(function(s){
    if(s.dc==='diff-easy')easy.push(s);
    else if(s.dc==='diff-medium')medium.push(s);
    else hard.push(s);
  });
  var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){hs={};}
  var html='<div class="v9-modal-box" style="max-height:80vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">📈 난이도 차트</h3>';
  html+='<div style="display:flex;gap:8px;margin-bottom:16px;text-align:center">';
  html+='<div style="flex:1;background:rgba(76,175,80,.1);border:1px solid rgba(76,175,80,.3);border-radius:10px;padding:10px"><div style="font-size:24px;font-weight:900;color:#4caf50">'+easy.length+'</div><div style="font-size:11px;color:var(--text-secondary)">쉬움</div></div>';
  html+='<div style="flex:1;background:rgba(255,152,0,.1);border:1px solid rgba(255,152,0,.3);border-radius:10px;padding:10px"><div style="font-size:24px;font-weight:900;color:#ff9800">'+medium.length+'</div><div style="font-size:11px;color:var(--text-secondary)">보통</div></div>';
  html+='<div style="flex:1;background:rgba(244,67,54,.1);border:1px solid rgba(244,67,54,.3);border-radius:10px;padding:10px"><div style="font-size:24px;font-weight:900;color:#f44336">'+hard.length+'</div><div style="font-size:11px;color:var(--text-secondary)">어려움</div></div>';
  html+='</div>';
  function renderGroup(title,songs,color){
    html+='<div style="font-size:13px;font-weight:700;color:'+color+';margin:12px 0 6px;border-left:3px solid '+color+';padding-left:8px">'+title+'</div>';
    songs.forEach(function(s){
      var rec=hs[s.id];
      html+='<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:12px">';
      html+='<span style="font-size:18px">'+s.icon+'</span>';
      html+='<span style="flex:1;color:var(--text-primary)">'+s.title+'</span>';
      if(rec)html+='<span class="grade-'+rec.g+'" style="font-weight:900">'+rec.g+'</span><span style="color:var(--accent-gold);font-weight:700;width:32px;text-align:right">'+rec.s+'</span>';
      else html+='<span style="color:var(--text-muted)">미완</span>';
      html+='</div>';
    });
  }
  renderGroup('쉬움',easy,'#4caf50');
  renderGroup('보통',medium,'#ff9800');
  renderGroup('어려움',hard,'#f44336');
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v9DiffModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

// ===== KEYBOARD SHORTCUTS v9 =====
function setupKeyboardV9(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
    switch(e.key.toLowerCase()){
      case 'u':showDuetModal();break;
      case 'e':showEQModal();break;
      case 'g':showPitchGame();break;
      case 'j':showDiaryModal();break;
      case 'f':showRadioModal();break;
    }
  });
}

// ===== INJECT CSS v9 =====
function injectV9CSS(){
  var style=document.createElement('style');
  style.textContent=
    '.v9-modal{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.88);z-index:56;flex-direction:column;align-items:center;justify-content:center;padding:20px}'+
    '.v9-modal.show{display:flex}'+
    '.v9-modal-box{background:linear-gradient(135deg,#1a1040,#2a1060);border:2px solid #6a3aaa;border-radius:16px;padding:24px;max-width:440px;width:100%;max-height:85vh;overflow-y:auto}'+
    '.v9-qa-btn{background:var(--btn-bg);border:1px solid var(--btn-border);color:var(--text-primary);padding:6px 14px;border-radius:16px;font-size:12px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:4px}'+
    '.v9-qa-btn:hover{background:rgba(168,85,247,.2);border-color:var(--accent2)}'+
    '.duet-a{color:#a855f7 !important;text-shadow:0 0 10px rgba(168,85,247,.5) !important}'+
    '.duet-b{color:#ff6ab0 !important;text-shadow:0 0 10px rgba(255,106,176,.5) !important}'+
    '@media(max-width:600px){.v9-modal-box{max-width:calc(100vw - 32px);padding:16px}.v9-qa-btn{font-size:11px;padding:5px 10px}}';
  document.head.appendChild(style);
}

// ===== INJECT UI v9 =====
function injectV9UI(){
  var h1=document.querySelector('#header h1');
  if(h1)h1.textContent='StarVoice v9';
  var badge=document.getElementById('songCountBadge');
  if(badge&&typeof SONGS!=='undefined')badge.textContent=SONGS.length;

  var modals=['v9DuetModal','v9EQModal','v9PitchModal','v9DiaryModal','v9RadioModal','v9StatsModal','v9WarmupModal','v9DiffModal'];
  modals.forEach(function(id){
    var m=document.createElement('div');m.className='v9-modal';m.id=id;
    m.onclick=function(e){if(e.target===m)m.classList.remove('show');};
    document.body.appendChild(m);
  });

  var songSelect=document.getElementById('songSelect');
  if(songSelect){
    var qa=document.createElement('div');
    qa.style.cssText='grid-column:1/-1;display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px';
    qa.innerHTML=
      '<button class="v9-qa-btn" onclick="showDuetModal()">👫 듀엣</button>'+
      '<button class="v9-qa-btn" onclick="showEQModal()">🎛️ EQ</button>'+
      '<button class="v9-qa-btn" onclick="showPitchGame()">🎯 음정훈련</button>'+
      '<button class="v9-qa-btn" onclick="showDiaryModal()">📔 다이어리</button>'+
      '<button class="v9-qa-btn" onclick="showRadioModal()">📻 라디오</button>'+
      '<button class="v9-qa-btn" onclick="showStatsModal()">📊 통계</button>'+
      '<button class="v9-qa-btn" onclick="showWarmupBuilder()">🏋️ 워밍업</button>'+
      '<button class="v9-qa-btn" onclick="showDiffChart()">📈 난이도</button>';
    var v8Actions=songSelect.querySelector('.v8-quick-actions');
    if(v8Actions&&v8Actions.nextSibling)songSelect.insertBefore(qa,v8Actions.nextSibling);
    else{var searchWrap=songSelect.querySelector('.search-wrap');
    if(searchWrap&&searchWrap.nextSibling)songSelect.insertBefore(qa,searchWrap.nextSibling);
    else songSelect.insertBefore(qa,songSelect.firstChild);}
  }

  var hdrBtns=document.querySelector('.hdr-btns');
  if(hdrBtns){
    var eqBtn=document.createElement('button');eqBtn.setAttribute('aria-label','이퀄라이저');
    eqBtn.textContent='🎛️ EQ';eqBtn.onclick=function(){showEQModal();};
    hdrBtns.appendChild(eqBtn);
  }
}

// ===== DUET LYRICS HOOK =====
function hookDuetLyrics(){
  var origShowLyrics=null;
  var checkInterval=setInterval(function(){
    var lyricsArea=document.getElementById('lyricsArea');
    if(!lyricsArea)return;
    clearInterval(checkInterval);
    var observer=new MutationObserver(function(){
      if(!duetMode)return;
      var curLyric=lyricsArea.querySelector('.cur-lyric');
      if(!curLyric)return;
      var syls=curLyric.querySelectorAll('.syl');
      syls.forEach(function(s,i){
        if(i%2===0)s.classList.add('duet-a');
        else s.classList.add('duet-b');
      });
    });
    observer.observe(lyricsArea,{childList:true,subtree:true,characterData:true});
  },500);
}

// ===== HOOK endSong for duet count =====
function hookEndSongV9(){
  var origEndSongV9=typeof endSong==='function'?endSong:null;
  window.endSong=function(){
    if(duetMode){
      var cnt=parseInt(localStorage.getItem('sv9_duet_count')||'0');
      localStorage.setItem('sv9_duet_count',String(cnt+1));
    }
    if(origEndSongV9)origEndSongV9();
  };
}

// ===== SEO UPDATE =====
function updateSEOv9(){
  var desc=document.querySelector('meta[name="description"]');
  if(desc)desc.setAttribute('content','StarVoice v9: 65곡 AI 음정 분석 K-노래방 PWA. 듀엣 모드, 보이스 EQ, 음정 트레이닝, 보컬 다이어리, 장르 라디오, 연습 통계, 워밍업 빌더, 42개 업적');
  var ogDesc=document.querySelector('meta[property="og:description"]');
  if(ogDesc)ogDesc.setAttribute('content','65곡 AI 음정 분석 노래방. 듀엣 모드, EQ 8종, 음정 트레이닝, 보컬 다이어리, 42개 업적');
  var ogTitle=document.querySelector('meta[property="og:title"]');
  if(ogTitle)ogTitle.setAttribute('content','StarVoice v9 - AI 노래방');
  document.title='StarVoice v9 - AI 노래방';
}

// ===== INIT v9 =====
function initV9(){
  injectV9CSS();
  injectV9UI();
  updateSEOv9();
  setupKeyboardV9();
  hookDuetLyrics();
  hookEndSongV9();

  if(typeof renderList==='function')renderList();

  console.log('[v9] patch loaded — Songs:',
    typeof SONGS!=='undefined'?SONGS.length:'?',
    'Achievements:',typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:'?');
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initV9);}
else{setTimeout(initV9,200);}

})();
