/* StarVoice v10 Patch — Self-contained IIFE module injected via SW
 * 10 songs(65→75), vocal coaching 8 techniques, custom playlist, vocal battle,
 * vocal analysis radar, daily vocal challenge, live stage mode, lyrics typing game,
 * voice profile, quiz +15(→57), achievements +12(42→54), SFX 12, keyboard +8
 */
(function(){
'use strict';

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Ab3=207.65,Bb3=233.08,Eb4=311.13,Bb4=466.16,Db4=277.18,Ab4=415.30;
var Gb4=369.99,Db5=554.37,Eb5=622.25;

// ===== 10 NEW SONGS (66~75) =====
var NEW_SONGS_V10=[
{id:66,cat:"동요",title:"곰 세 마리",icon:"🐻",diff:"쉬움",dc:"diff-easy",bpm:110,
melody:[
{t:0,d:.4,f:C4,s:"곰"},{t:.4,d:.4,f:C4,s:"세"},{t:.8,d:.4,f:C4,s:"마"},
{t:1.2,d:.8,f:C4,s:"리"},{t:2,d:.4,f:C4,s:"가"},{t:2.4,d:.4,f:E4,s:"한"},
{t:2.8,d:.4,f:G4,s:"집"},{t:3.2,d:.4,f:G4,s:"에"},{t:3.6,d:.8,f:E4,s:"있"},
{t:4.4,d:.8,f:C4,s:"어"},{t:5.2,d:.4,f:G4,s:"아"},{t:5.6,d:.4,f:G4,s:"빠"},
{t:6,d:.4,f:E4,s:"곰"},{t:6.4,d:.4,f:E4,s:"엄"},
{t:6.8,d:.4,f:D4,s:"마"},{t:7.2,d:.4,f:D4,s:"곰"},{t:7.6,d:.4,f:E4,s:"애"},
{t:8,d:.4,f:D4,s:"기"},{t:8.4,d:.8,f:C4,s:"곰"}
],lyrics:[{t:0,tx:"곰 세 마리가"},{t:2,tx:"한 집에 있어"},{t:5.2,tx:"아빠 곰 엄마 곰"},{t:7.6,tx:"애기 곰"}],dur:10},

{id:67,cat:"동요",title:"나비야",icon:"🦋",diff:"쉬움",dc:"diff-easy",bpm:100,
melody:[
{t:0,d:.5,f:G4,s:"나"},{t:.5,d:.5,f:E4,s:"비"},{t:1,d:.5,f:G4,s:"야"},
{t:1.5,d:.5,f:E4,s:"나"},{t:2,d:.5,f:G4,s:"비"},{t:2.5,d:1,f:A4,s:"야"},
{t:3.5,d:.5,f:G4,s:"이"},{t:4,d:.5,f:E4,s:"리"},{t:4.5,d:.5,f:D4,s:"날"},
{t:5,d:.5,f:E4,s:"아"},{t:5.5,d:1,f:C4,s:"~"},
{t:6.5,d:.5,f:D4,s:"노"},{t:7,d:.5,f:D4,s:"랑"},{t:7.5,d:.5,f:E4,s:"나"},
{t:8,d:.5,f:G4,s:"비"},{t:8.5,d:.5,f:A4,s:"흰"},{t:9,d:.5,f:A4,s:"나"},
{t:9.5,d:1,f:G4,s:"비"},
{t:10.5,d:.5,f:E4,s:"춤"},{t:11,d:.5,f:G4,s:"을"},{t:11.5,d:.5,f:E4,s:"추"},
{t:12,d:.5,f:D4,s:"며"},{t:12.5,d:1.5,f:C4,s:"~"}
],lyrics:[{t:0,tx:"나비야 나비야"},{t:3.5,tx:"이리 날아~"},{t:6.5,tx:"노랑나비 흰나비"},{t:10.5,tx:"춤을 추며~"}],dur:14},

{id:68,cat:"세계명곡",title:"스카보로 페어",icon:"🌿",diff:"어려움",dc:"diff-hard",bpm:80,
melody:[
{t:0,d:1,f:E4,s:"Are"},{t:1,d:1,f:E4,s:"you"},
{t:2,d:1,f:A4,s:"go"},{t:3,d:1,f:A4,s:"ing"},
{t:4,d:.8,f:B4,s:"to"},{t:4.8,d:1.5,f:A4,s:"Scar"},
{t:6.3,d:.8,f:G4,s:"bo"},{t:7.1,d:.8,f:A4,s:"rough"},
{t:7.9,d:1.5,f:E4,s:"Fair"},
{t:9.4,d:1,f:E4,s:"Par"},{t:10.4,d:1,f:D4,s:"sley"},
{t:11.4,d:.8,f:E4,s:"sage"},{t:12.2,d:.8,f:D4,s:"rose"},
{t:13,d:.8,f:C4,s:"ma"},{t:13.8,d:1.5,f:D4,s:"ry"},
{t:15.3,d:1.5,f:E4,s:"thyme"}
],lyrics:[{t:0,tx:"Are you going to"},{t:4,tx:"Scarborough Fair"},{t:9.4,tx:"Parsley sage"},{t:13,tx:"rosemary thyme"}],dur:17},

{id:69,cat:"가요/민요",title:"고향의 봄",icon:"🌸",diff:"보통",dc:"diff-medium",bpm:92,
melody:[
{t:0,d:.6,f:E4,s:"나"},{t:.6,d:.6,f:G4,s:"의"},{t:1.2,d:.6,f:A4,s:"살"},
{t:1.8,d:.6,f:G4,s:"던"},{t:2.4,d:1.2,f:A4,s:"고"},
{t:3.6,d:.6,f:B4,s:"향"},{t:4.2,d:.6,f:A4,s:"은"},
{t:4.8,d:.6,f:G4,s:"꽃"},{t:5.4,d:.6,f:E4,s:"피"},
{t:6,d:.6,f:D4,s:"는"},{t:6.6,d:1.2,f:C4,s:"~"},
{t:7.8,d:.6,f:E4,s:"산"},{t:8.4,d:.6,f:G4,s:"골"},
{t:9,d:.6,f:A4,s:"복"},{t:9.6,d:.6,f:G4,s:"숭"},
{t:10.2,d:.6,f:A4,s:"아"},{t:10.8,d:.6,f:B4,s:"꽃"},
{t:11.4,d:.6,f:A4,s:"살"},{t:12,d:.6,f:G4,s:"구"},
{t:12.6,d:1.8,f:E4,s:"꽃"}
],lyrics:[{t:0,tx:"나의 살던 고향은"},{t:4.8,tx:"꽃피는~"},{t:7.8,tx:"산골 복숭아꽃"},{t:11.4,tx:"살구꽃"}],dur:15},

{id:70,cat:"가요/민요",title:"봄이 오면",icon:"🌷",diff:"보통",dc:"diff-medium",bpm:88,
melody:[
{t:0,d:.7,f:G4,s:"봄"},{t:.7,d:.7,f:A4,s:"이"},
{t:1.4,d:1.4,f:B4,s:"오"},
{t:2.8,d:.7,f:A4,s:"면"},{t:3.5,d:1.4,f:G4,s:"~"},
{t:4.9,d:.7,f:E4,s:"산"},{t:5.6,d:.7,f:G4,s:"에"},
{t:6.3,d:.7,f:A4,s:"들"},{t:7,d:.7,f:G4,s:"에"},
{t:7.7,d:1.4,f:E4,s:"~"},
{t:9.1,d:.7,f:D4,s:"진"},{t:9.8,d:.7,f:E4,s:"달"},
{t:10.5,d:.7,f:G4,s:"래"},{t:11.2,d:.7,f:A4,s:"꽃"},
{t:11.9,d:.7,f:G4,s:"이"},{t:12.6,d:.7,f:E4,s:"피"},
{t:13.3,d:1.8,f:D4,s:"네"}
],lyrics:[{t:0,tx:"봄이 오면~"},{t:4.9,tx:"산에 들에~"},{t:9.1,tx:"진달래꽃이"},{t:12.6,tx:"피네"}],dur:16},

{id:71,cat:"세계명곡",title:"마이 보니",icon:"⚓",diff:"보통",dc:"diff-medium",bpm:100,
melody:[
{t:0,d:.6,f:G4,s:"My"},{t:.6,d:.6,f:A4,s:"Bon"},
{t:1.2,d:1.2,f:B4,s:"nie"},{t:2.4,d:.6,f:A4,s:"lies"},
{t:3,d:.6,f:G4,s:"o"},{t:3.6,d:.6,f:E4,s:"ver"},
{t:4.2,d:.6,f:G4,s:"the"},{t:4.8,d:1.2,f:A4,s:"o"},
{t:6,d:1.2,f:G4,s:"cean"},
{t:7.2,d:.6,f:G4,s:"My"},{t:7.8,d:.6,f:A4,s:"Bon"},
{t:8.4,d:1.2,f:B4,s:"nie"},{t:9.6,d:.6,f:A4,s:"lies"},
{t:10.2,d:.6,f:G4,s:"o"},{t:10.8,d:.6,f:E4,s:"ver"},
{t:11.4,d:.6,f:D4,s:"the"},{t:12,d:1.8,f:C4,s:"sea"}
],lyrics:[{t:0,tx:"My Bonnie lies"},{t:3,tx:"over the ocean"},{t:7.2,tx:"My Bonnie lies"},{t:10.2,tx:"over the sea"}],dur:14},

{id:72,cat:"동요",title:"즐거운 나의 집",icon:"🏠",diff:"쉬움",dc:"diff-easy",bpm:105,
melody:[
{t:0,d:.5,f:E4,s:"즐"},{t:.5,d:.5,f:E4,s:"거"},{t:1,d:.5,f:D4,s:"운"},
{t:1.5,d:.5,f:C4,s:"나"},{t:2,d:1,f:E4,s:"의"},
{t:3,d:.5,f:G4,s:"집"},{t:3.5,d:1,f:G4,s:"~"},
{t:4.5,d:.5,f:A4,s:"내"},{t:5,d:.5,f:G4,s:"사"},
{t:5.5,d:.5,f:E4,s:"랑"},{t:6,d:.5,f:D4,s:"하"},
{t:6.5,d:1,f:C4,s:"는"},
{t:7.5,d:.5,f:D4,s:"나"},{t:8,d:.5,f:E4,s:"의"},
{t:8.5,d:1.5,f:C4,s:"집"}
],lyrics:[{t:0,tx:"즐거운 나의 집~"},{t:4.5,tx:"내 사랑하는"},{t:7.5,tx:"나의 집"}],dur:10},

{id:73,cat:"세계명곡",title:"그리그 아침",icon:"🌅",diff:"어려움",dc:"diff-hard",bpm:72,
melody:[
{t:0,d:1,f:E4,s:"나"},{t:1,d:1,f:G4,s:"~"},
{t:2,d:1,f:A4,s:"~"},{t:3,d:1,f:E4,s:"~"},
{t:4,d:1,f:G4,s:"~"},{t:5,d:1,f:Bb4,s:"~"},
{t:6,d:1,f:A4,s:"~"},{t:7,d:1,f:E4,s:"~"},
{t:8,d:1,f:G4,s:"~"},{t:9,d:1,f:A4,s:"~"},
{t:10,d:1,f:G4,s:"~"},{t:11,d:1,f:E4,s:"~"},
{t:12,d:1,f:D4,s:"~"},{t:13,d:1,f:E4,s:"~"},
{t:14,d:1,f:G4,s:"~"},{t:15,d:2,f:C4,s:"~"}
],lyrics:[{t:0,tx:"나~~ ~~"},{t:4,tx:"~ ~~"},{t:8,tx:"~ ~~"},{t:12,tx:"~ ~ ~~"}],dur:17},

{id:74,cat:"가요/민요",title:"섬집 아기",icon:"🏝️",diff:"보통",dc:"diff-medium",bpm:85,
melody:[
{t:0,d:.8,f:E4,s:"엄"},{t:.8,d:.8,f:G4,s:"마"},
{t:1.6,d:.8,f:A4,s:"가"},{t:2.4,d:1.6,f:G4,s:"~"},
{t:4,d:.8,f:A4,s:"섬"},{t:4.8,d:.8,f:B4,s:"그"},
{t:5.6,d:.8,f:A4,s:"늘"},{t:6.4,d:1.6,f:G4,s:"에"},
{t:8,d:.8,f:G4,s:"굴"},{t:8.8,d:.8,f:A4,s:"따"},
{t:9.6,d:.8,f:G4,s:"러"},{t:10.4,d:1.6,f:E4,s:"~"},
{t:12,d:.8,f:D4,s:"간"},{t:12.8,d:.8,f:E4,s:"다"},
{t:13.6,d:2,f:C4,s:"~"}
],lyrics:[{t:0,tx:"엄마가~"},{t:4,tx:"섬그늘에"},{t:8,tx:"굴 따러~"},{t:12,tx:"간다~"}],dur:16},

{id:75,cat:"세계명곡",title:"아비뇽의 다리",icon:"🌉",diff:"보통",dc:"diff-medium",bpm:120,
melody:[
{t:0,d:.4,f:C4,s:"쉬"},{t:.4,d:.4,f:D4,s:"르"},
{t:.8,d:.4,f:E4,s:"르"},{t:1.2,d:.4,f:C4,s:"퐁"},
{t:1.6,d:.4,f:E4,s:"다"},{t:2,d:.4,f:F4,s:"비"},
{t:2.4,d:.8,f:G4,s:"뇽"},
{t:3.2,d:.4,f:C4,s:"쉬"},{t:3.6,d:.4,f:D4,s:"르"},
{t:4,d:.4,f:E4,s:"르"},{t:4.4,d:.4,f:C4,s:"퐁"},
{t:4.8,d:.4,f:D4,s:"다"},{t:5.2,d:.4,f:E4,s:"비"},
{t:5.6,d:.8,f:C4,s:"뇽"},
{t:6.4,d:.4,f:G4,s:"온"},{t:6.8,d:.4,f:A4,s:"니"},
{t:7.2,d:.4,f:G4,s:"당"},{t:7.6,d:.4,f:E4,s:"스"},
{t:8,d:.4,f:F4,s:"온"},{t:8.4,d:.4,f:E4,s:"니"},
{t:8.8,d:.4,f:D4,s:"당"},{t:9.2,d:.8,f:C4,s:"스"}
],lyrics:[{t:0,tx:"쉬르르퐁 다비뇽"},{t:3.2,tx:"쉬르르퐁 다비뇽"},{t:6.4,tx:"온니당스 온니당스"}],dur:10}
];

if(typeof SONGS!=='undefined'){NEW_SONGS_V10.forEach(function(s){SONGS.push(s);});}

// ===== WEB AUDIO SFX ENGINE v10 (12 sounds) =====
var sfxCtx10=null;
function getSfxCtx10(){if(!sfxCtx10){try{sfxCtx10=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return sfxCtx10;}
function playSfx10(type){
  var ctx=getSfxCtx10();if(!ctx)return;
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
    case 'coaching':mkOsc(440,'sine',.12,.25,0);mkOsc(554.37,'sine',.10,.25,.08);mkOsc(659.25,'sine',.08,.25,.16);break;
    case 'playlist_add':mkOsc(523.25,'triangle',.1,.2,0);mkOsc(659.25,'triangle',.08,.15,.1);break;
    case 'battle_start':mkOsc(196,'sawtooth',.08,.3,0);mkOsc(261.63,'sawtooth',.07,.3,.1);mkOsc(392,'sawtooth',.06,.3,.2);break;
    case 'battle_win':mkOsc(523.25,'sine',.12,.2,0);mkOsc(659.25,'sine',.10,.2,.1);mkOsc(783.99,'sine',.08,.2,.2);mkOsc(1046.50,'sine',.06,.3,.3);break;
    case 'analysis':mkOsc(329.63,'sine',.10,.3,0);mkOsc(440,'sine',.08,.3,.1);break;
    case 'daily_complete':mkOsc(523.25,'triangle',.12,.2,0);mkOsc(659.25,'triangle',.10,.2,.1);mkOsc(783.99,'triangle',.08,.3,.2);break;
    case 'stage_on':mkOsc(220,'sawtooth',.06,.5,0);mkOsc(330,'sawtooth',.05,.4,.15);mkOsc(440,'sine',.08,.3,.3);break;
    case 'typing_correct':mkOsc(880,'sine',.08,.1,0);break;
    case 'typing_wrong':mkOsc(200,'square',.06,.15,0);break;
    case 'profile':mkOsc(392,'sine',.1,.2,0);mkOsc(493.88,'sine',.08,.2,.1);break;
    case 'quiz_v10_correct':mkOsc(523.25,'sine',.12,.15,0);mkOsc(659.25,'sine',.10,.15,.08);break;
    case 'quiz_v10_wrong':mkOsc(233.08,'square',.06,.2,0);break;
  }
}

// ===== 12 NEW ACHIEVEMENTS (v10: 42→54) =====
var NEW_ACH_V10=[
{id:'songs_75',name:'75곡 마스터',desc:'75곡 전부 부르기',icon:'🎵',check:function(){var sp;try{sp=JSON.parse(localStorage.getItem('sv6_stats')||'{}').songPlays||{};}catch(e){return false;}if(typeof SONGS==='undefined')return false;return SONGS.every(function(x){return sp[x.id];});}},
{id:'coaching_all',name:'보컬 코치 수료',desc:'8가지 발성 기법 모두 학습',icon:'🎓',check:function(){try{var l=JSON.parse(localStorage.getItem('sv10_coaching_learned')||'[]');return l.length>=8;}catch(e){return false;}}},
{id:'playlist_3',name:'플레이리스트 매니아',desc:'3개 플레이리스트 생성',icon:'📋',check:function(){try{var p=JSON.parse(localStorage.getItem('sv10_playlists')||'[]');return p.length>=3;}catch(e){return false;}}},
{id:'battle_5',name:'보컬 파이터',desc:'보컬 배틀 5회 참가',icon:'⚔️',check:function(){try{return parseInt(localStorage.getItem('sv10_battle_count')||'0')>=5;}catch(e){return false;}}},
{id:'battle_win_3',name:'배틀 챔피언',desc:'보컬 배틀 3승',icon:'🏆',check:function(){try{return parseInt(localStorage.getItem('sv10_battle_wins')||'0')>=3;}catch(e){return false;}}},
{id:'analysis_check',name:'보컬 분석가',desc:'보컬 분석 리포트 확인',icon:'📊',check:function(){try{return localStorage.getItem('sv10_analysis_viewed')==='true';}catch(e){return false;}}},
{id:'daily_vocal_7',name:'일일 도전 7일',desc:'보컬 도전 7일 완료',icon:'🔥',check:function(){try{return parseInt(localStorage.getItem('sv10_daily_streak')||'0')>=7;}catch(e){return false;}}},
{id:'stage_mode',name:'스테이지 퍼포머',desc:'라이브 스테이지 모드 사용',icon:'🎭',check:function(){try{return localStorage.getItem('sv10_stage_used')==='true';}catch(e){return false;}}},
{id:'typing_perfect',name:'가사 타자왕',desc:'가사 타이핑 100% 정확도',icon:'⌨️',check:function(){try{return localStorage.getItem('sv10_typing_perfect')==='true';}catch(e){return false;}}},
{id:'profile_complete',name:'보이스 프로필 완성',desc:'보이스 프로필 작성 완료',icon:'🪪',check:function(){try{return localStorage.getItem('sv10_profile_done')==='true';}catch(e){return false;}}},
{id:'score_98',name:'98점 이상',desc:'어떤 곡이든 98점 달성',icon:'💯',check:function(){var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){return false;}for(var k in hs){if(hs[k]&&hs[k].s>=98)return true;}return false;}},
{id:'v10_master',name:'v10 올라운더',desc:'v10 기능 6종 이상 사용',icon:'👑',check:function(){try{var cnt=0;if(localStorage.getItem('sv10_coaching_learned'))cnt++;if(localStorage.getItem('sv10_playlists'))cnt++;if(localStorage.getItem('sv10_battle_count'))cnt++;if(localStorage.getItem('sv10_analysis_viewed'))cnt++;if(localStorage.getItem('sv10_stage_used'))cnt++;if(localStorage.getItem('sv10_profile_done'))cnt++;if(localStorage.getItem('sv10_typing_played'))cnt++;if(localStorage.getItem('sv10_daily_streak'))cnt++;return cnt>=6;}catch(e){return false;}}}
];

if(typeof ACHIEVEMENTS!=='undefined'){NEW_ACH_V10.forEach(function(a){ACHIEVEMENTS.push(a);});}

// ===== VOCAL COACHING SYSTEM =====
var VOCAL_TECHNIQUES=[
  {id:'chest',name:'흉성(Chest Voice)',icon:'💪',color:'#f44336',desc:'가슴에서 울리는 힘 있는 소리. 중저음역에서 사용하며 파워풀한 톤을 만듭니다.',
   steps:['편안하게 서서 가슴에 손을 올리세요','&quot;아~&quot; 소리를 낮은 음으로 내면서 가슴 진동을 느끼세요','점점 볼륨을 키우면서 가슴 울림을 유지하세요','도~솔 스케일을 흉성으로 올라가 보세요']},
  {id:'head',name:'두성(Head Voice)',icon:'🧠',color:'#9c27b0',desc:'머리 위쪽에서 울리는 맑은 소리. 고음역에서 사용하며 가볍고 밝은 톤입니다.',
   steps:['머리 꼭대기에 손을 올리세요','&quot;우~&quot; 소리를 높은 음으로 내세요','이마와 정수리의 진동을 느끼세요','고음 스케일을 두성으로 가볍게 올리세요']},
  {id:'nasal',name:'비성(Nasal)',icon:'👃',color:'#ff9800',desc:'코로 울리는 특유의 음색. K-POP에서 감성적인 표현에 자주 사용됩니다.',
   steps:['코를 살짝 막고 &quot;은~&quot; 소리를 내세요','코를 떼면서 같은 음을 유지하세요','&quot;냐~&quot; 발음으로 코 울림을 연습하세요','노래 가사 중 하나를 비성으로 불러보세요']},
  {id:'falsetto',name:'가성(Falsetto)',icon:'✨',color:'#03a9f4',desc:'성대를 얇게 사용해 만드는 높은 소리. 부드럽고 가벼운 고음 표현에 적합합니다.',
   steps:['편안하게 &quot;후~&quot; 소리를 내세요','자연스럽게 음을 올려 가성으로 전환하세요','가성 상태에서 &quot;라~&quot; 스케일을 올리세요','흉성→가성 전환을 반복 연습하세요']},
  {id:'belting',name:'벨팅(Belting)',icon:'🔥',color:'#e91e63',desc:'흉성의 파워를 고음까지 끌어올리는 기법. 클라이맥스에서 강렬한 인상을 줍니다.',
   steps:['&quot;야!&quot; 하고 외치듯 소리 내세요','그 느낌을 유지하면서 음을 올리세요','횡격막 지지를 느끼며 고음을 밀어올리세요','좋아하는 곡의 하이라이트를 벨팅으로 불러보세요']},
  {id:'mix',name:'믹스 보이스(Mix)',icon:'🎨',color:'#4caf50',desc:'흉성과 두성을 자연스럽게 섞는 기법. 프로 가수들이 가장 많이 사용합니다.',
   steps:['중간 음역에서 &quot;마~&quot; 소리를 내세요','흉성 느낌을 유지하면서 천천히 올리세요','두성 영역에 들어가도 흉성 울림을 놓지 마세요','전환점에서 끊기지 않게 연결 연습하세요']},
  {id:'whisper',name:'위스퍼(Whisper Tone)',icon:'🌙',color:'#607d8b',desc:'속삭이듯 부르는 감성적 톤. 발라드 도입부나 감정적인 파트에 효과적입니다.',
   steps:['속삭이듯 &quot;하~&quot; 소리를 내세요','숨소리를 섞어 기식적인 톤을 만드세요','볼륨을 낮추면서도 발음은 명확하게 하세요','발라드 첫 소절을 위스퍼 톤으로 불러보세요']},
  {id:'vibrato',name:'비브라토(Vibrato)',icon:'〰️',color:'#795548',desc:'음을 떨리게 하는 장식 기법. 음 끝에 사용하면 풍성하고 감동적인 느낌을 줍니다.',
   steps:['하나의 음을 길게 &quot;아~&quot; 유지하세요','배에 힘을 주었다 풀었다 반복하세요','점점 빠르게 진동 폭을 만드세요','노래 끝 음에서 자연스러운 비브라토를 넣어보세요']}
];

function showCoachingModal(){
  var m=document.getElementById('v10CoachingModal');if(!m)return;
  m.classList.add('show');
  playSfx10('coaching');
  var learned;try{learned=JSON.parse(localStorage.getItem('sv10_coaching_learned')||'[]');}catch(e){learned=[];}
  var html='<div class="v10-modal-box" style="max-height:85vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:8px">🎤 보컬 코칭</h3>';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:16px">8가지 발성 기법을 마스터하세요! ('+learned.length+'/8 수료)</div>';
  html+='<div style="width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;margin-bottom:16px;overflow:hidden"><div style="height:100%;width:'+Math.round(learned.length/8*100)+'%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:3px"></div></div>';
  VOCAL_TECHNIQUES.forEach(function(tech){
    var done=learned.indexOf(tech.id)!==-1;
    html+='<div onclick="showTechDetail(\''+tech.id+'\')" style="background:'+(done?'rgba(76,175,80,.1)':'var(--btn-bg)')+';border:2px solid '+(done?'rgba(76,175,80,.4)':'var(--btn-border)')+';border-radius:12px;padding:12px;margin:6px 0;cursor:pointer;transition:all .2s">';
    html+='<div style="display:flex;align-items:center;gap:10px">';
    html+='<span style="font-size:28px;flex-shrink:0">'+tech.icon+'</span>';
    html+='<div style="flex:1"><div style="font-weight:700;color:var(--text-primary);font-size:13px">'+tech.name+(done?' ✅':'')+'</div>';
    html+='<div style="font-size:11px;color:var(--text-secondary);margin-top:2px;line-height:1.4">'+tech.desc.slice(0,40)+'...</div></div>';
    html+='<span style="font-size:16px;color:'+tech.color+'">▶</span>';
    html+='</div></div>';
  });
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v10CoachingModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.showTechDetail=function(id){
  var tech=null;VOCAL_TECHNIQUES.forEach(function(t){if(t.id===id)tech=t;});if(!tech)return;
  var m=document.getElementById('v10CoachingModal');if(!m)return;
  var html='<div class="v10-modal-box" style="max-height:85vh;overflow-y:auto">';
  html+='<div style="text-align:center;margin-bottom:16px"><span style="font-size:48px">'+tech.icon+'</span>';
  html+='<h3 style="color:'+tech.color+';margin-top:8px">'+tech.name+'</h3></div>';
  html+='<div style="font-size:13px;color:var(--text-secondary);line-height:1.7;margin-bottom:20px;background:var(--btn-bg);border-radius:12px;padding:14px">'+tech.desc+'</div>';
  html+='<div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:12px">연습 단계</div>';
  tech.steps.forEach(function(step,i){
    html+='<div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05)">';
    html+='<div style="width:28px;height:28px;border-radius:50%;background:'+tech.color+';color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0">'+(i+1)+'</div>';
    html+='<div style="font-size:13px;color:var(--text-primary);line-height:1.5;padding-top:4px">'+step+'</div>';
    html+='</div>';
  });
  html+='<div style="display:flex;gap:10px;justify-content:center;margin-top:20px">';
  html+='<button class="btn-retry" onclick="completeCoaching(\''+id+'\')">수료 완료</button>';
  html+='<button class="btn-back" onclick="showCoachingModal()">목록으로</button>';
  html+='</div></div>';
  m.innerHTML=html;
};

window.completeCoaching=function(id){
  try{
    var learned=JSON.parse(localStorage.getItem('sv10_coaching_learned')||'[]');
    if(learned.indexOf(id)===-1){learned.push(id);localStorage.setItem('sv10_coaching_learned',JSON.stringify(learned));}
    if(typeof checkAchievements==='function')checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));
  }catch(e){}
  var toast=document.createElement('div');toast.className='ach-toast show';
  toast.textContent='🎓 기법 수료 완료!';document.body.appendChild(toast);
  setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},1500);
  showCoachingModal();
};

// ===== CUSTOM PLAYLIST SYSTEM =====
function getPlaylists(){try{return JSON.parse(localStorage.getItem('sv10_playlists')||'[]');}catch(e){return [];}}
function savePlaylists(p){localStorage.setItem('sv10_playlists',JSON.stringify(p));}

function showPlaylistModal(){
  var m=document.getElementById('v10PlaylistModal');if(!m)return;
  m.classList.add('show');
  playSfx10('playlist_add');
  var pls=getPlaylists();
  var html='<div class="v10-modal-box" style="max-height:85vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">📋 나의 플레이리스트</h3>';
  html+='<div style="background:var(--btn-bg);border:1px solid var(--btn-border);border-radius:12px;padding:12px;margin-bottom:16px">';
  html+='<div style="display:flex;gap:8px"><input id="newPlName" placeholder="새 플레이리스트 이름" style="flex:1;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--btn-border);border-radius:8px;padding:8px;font-size:13px;font-family:inherit">';
  html+='<button class="btn-retry" onclick="createPlaylist()" style="font-size:13px;white-space:nowrap">+ 생성</button></div></div>';
  if(pls.length===0){
    html+='<div style="text-align:center;color:var(--text-muted);padding:30px">플레이리스트를 만들어보세요!</div>';
  }else{
    pls.forEach(function(pl,pi){
      html+='<div style="background:var(--btn-bg);border:2px solid var(--btn-border);border-radius:12px;padding:14px;margin:8px 0">';
      html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">';
      html+='<div style="font-weight:700;color:var(--text-primary);font-size:14px">'+pl.name.replace(/</g,'&lt;')+' <span style="font-size:11px;color:var(--text-muted)">('+pl.songs.length+'곡)</span></div>';
      html+='<div style="display:flex;gap:6px"><button onclick="playPlaylist('+pi+')" style="background:rgba(76,175,80,.2);border:1px solid rgba(76,175,80,.4);color:#8f8;border-radius:14px;padding:4px 12px;font-size:11px;cursor:pointer">▶ 재생</button>';
      html+='<button onclick="deletePlaylist('+pi+')" style="background:rgba(244,67,54,.2);border:1px solid rgba(244,67,54,.4);color:#f66;border-radius:14px;padding:4px 10px;font-size:11px;cursor:pointer">삭제</button></div></div>';
      if(pl.songs.length>0&&typeof SONGS!=='undefined'){
        html+='<div style="display:flex;flex-wrap:wrap;gap:4px">';
        pl.songs.forEach(function(sid){
          var song=null;SONGS.forEach(function(s){if(s.id===sid)song=s;});
          if(song)html+='<span style="font-size:11px;background:var(--bg-secondary);padding:3px 8px;border-radius:10px;color:var(--text-secondary)">'+song.icon+' '+song.title+'</span>';
        });
        html+='</div>';
      }
      html+='<div style="margin-top:8px"><select onchange="addToPlaylist('+pi+',this.value);this.selectedIndex=0" style="width:100%;background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--btn-border);border-radius:8px;padding:6px;font-size:12px"><option value="">+ 곡 추가...</option>';
      if(typeof SONGS!=='undefined'){SONGS.forEach(function(s){if(pl.songs.indexOf(s.id)===-1)html+='<option value="'+s.id+'">'+s.icon+' '+s.title+'</option>';});}
      html+='</select></div></div>';
    });
  }
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v10PlaylistModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.createPlaylist=function(){
  var name=document.getElementById('newPlName').value.trim();if(!name)return;
  var pls=getPlaylists();pls.push({name:name,songs:[],created:new Date().toISOString().slice(0,10)});
  savePlaylists(pls);
  if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  showPlaylistModal();
};

window.addToPlaylist=function(pi,sid){
  if(!sid)return;sid=parseInt(sid);
  var pls=getPlaylists();if(!pls[pi])return;
  if(pls[pi].songs.indexOf(sid)===-1){pls[pi].songs.push(sid);savePlaylists(pls);}
  playSfx10('playlist_add');showPlaylistModal();
};

window.deletePlaylist=function(pi){
  var pls=getPlaylists();pls.splice(pi,1);savePlaylists(pls);showPlaylistModal();
};

window.playPlaylist=function(pi){
  var pls=getPlaylists();if(!pls[pi]||pls[pi].songs.length===0)return;
  var sid=pls[pi].songs[Math.floor(Math.random()*pls[pi].songs.length)];
  if(typeof SONGS!=='undefined'&&typeof selectSong==='function'){
    var song=null;SONGS.forEach(function(s){if(s.id===sid)song=s;});
    if(song)selectSong(song);
  }
  document.getElementById('v10PlaylistModal').classList.remove('show');
};

// ===== VOCAL BATTLE MODE =====
function showBattleModal(){
  var m=document.getElementById('v10BattleModal');if(!m)return;
  m.classList.add('show');
  playSfx10('battle_start');
  var wins=parseInt(localStorage.getItem('sv10_battle_wins')||'0');
  var total=parseInt(localStorage.getItem('sv10_battle_count')||'0');
  var html='<div class="v10-modal-box"><h3 style="color:var(--accent);margin-bottom:16px">⚔️ 보컬 배틀</h3>';
  html+='<div style="text-align:center;margin-bottom:20px">';
  html+='<div style="font-size:48px;margin-bottom:8px">🎤⚡🎤</div>';
  html+='<div style="font-size:14px;color:var(--text-secondary);line-height:1.6">AI 라이벌과 점수 대결!<br>같은 곡을 부르고 점수를 비교하세요</div>';
  html+='<div style="display:flex;gap:12px;justify-content:center;margin-top:12px">';
  html+='<div style="background:var(--btn-bg);border-radius:10px;padding:10px 16px;text-align:center"><div style="font-size:20px;font-weight:900;color:var(--accent-gold)">'+wins+'</div><div style="font-size:10px;color:var(--text-muted)">승리</div></div>';
  html+='<div style="background:var(--btn-bg);border-radius:10px;padding:10px 16px;text-align:center"><div style="font-size:20px;font-weight:900;color:var(--accent)">'+total+'</div><div style="font-size:10px;color:var(--text-muted)">총 대전</div></div>';
  html+='<div style="background:var(--btn-bg);border-radius:10px;padding:10px 16px;text-align:center"><div style="font-size:20px;font-weight:900;color:#4caf50">'+(total>0?Math.round(wins/total*100):0)+'%</div><div style="font-size:10px;color:var(--text-muted)">승률</div></div>';
  html+='</div></div>';
  html+='<div style="font-size:13px;font-weight:700;color:var(--accent);margin-bottom:10px">곡 선택</div>';
  if(typeof SONGS!=='undefined'){
    var shuffled=SONGS.slice().sort(function(){return Math.random()-.5;}).slice(0,6);
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
    shuffled.forEach(function(s){
      html+='<button onclick="startBattle('+s.id+')" style="background:var(--btn-bg);border:2px solid var(--btn-border);border-radius:12px;padding:12px;cursor:pointer;text-align:center;transition:all .2s;color:var(--text-primary)" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--btn-border)\'">';
      html+='<div style="font-size:24px">'+s.icon+'</div><div style="font-size:12px;font-weight:700;margin-top:4px">'+s.title+'</div>';
      html+='<div class="'+s.dc+'" style="font-size:10px;margin-top:2px;display:inline-block;padding:1px 6px;border-radius:8px">'+s.diff+'</div>';
      html+='</button>';
    });
    html+='</div>';
  }
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v10BattleModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.startBattle=function(songId){
  localStorage.setItem('sv10_battle_count',String(parseInt(localStorage.getItem('sv10_battle_count')||'0')+1));
  localStorage.setItem('sv10_battle_song',String(songId));
  document.getElementById('v10BattleModal').classList.remove('show');
  if(typeof SONGS!=='undefined'&&typeof selectSong==='function'){
    var song=null;SONGS.forEach(function(s){if(s.id===songId)song=s;});
    if(song)selectSong(song);
  }
  if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
};

function hookBattleResult(){
  var origEndSongV10=typeof endSong==='function'?endSong:null;
  window.endSong=function(){
    if(origEndSongV10)origEndSongV10.apply(this,arguments);
    var battleSong=localStorage.getItem('sv10_battle_song');
    if(battleSong){
      localStorage.removeItem('sv10_battle_song');
      setTimeout(function(){
        var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){hs={};}
        var myScore=(hs[battleSong]&&hs[battleSong].s)||0;
        var aiBase=60+Math.random()*30;
        var aiScore=Math.round(aiBase);
        var won=myScore>aiScore;
        if(won)localStorage.setItem('sv10_battle_wins',String(parseInt(localStorage.getItem('sv10_battle_wins')||'0')+1));
        if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
        var toast=document.createElement('div');toast.className='ach-toast show';
        toast.style.background=won?'linear-gradient(135deg,rgba(255,215,0,.95),rgba(255,165,0,.95))':'linear-gradient(135deg,rgba(244,67,54,.95),rgba(198,40,40,.95))';
        toast.textContent=won?'🏆 배틀 승리! '+myScore+' vs '+aiScore:'💪 아쉽게 패배 '+myScore+' vs '+aiScore;
        document.body.appendChild(toast);
        playSfx10(won?'battle_win':'battle_start');
        setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},2500);
      },500);
    }
  };
}

// ===== VOCAL ANALYSIS RADAR =====
function showAnalysisModal(){
  var m=document.getElementById('v10AnalysisModal');if(!m)return;
  m.classList.add('show');
  playSfx10('analysis');
  localStorage.setItem('sv10_analysis_viewed','true');
  if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  var stats;try{stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');}catch(e){stats={};}
  var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){hs={};}
  var totalSongs=stats.totalSongs||0;
  var avgPitch=totalSongs>0?Math.round((stats.totalPitch||0)/totalSongs):50;
  var bestCombo=stats.bestCombo||0;
  var sCount=0;for(var k in hs){if(hs[k]&&hs[k].s>=90)sCount++;}
  var pitch=Math.min(100,avgPitch);
  var rhythm=Math.min(100,40+bestCombo*3);
  var breath=Math.min(100,30+totalSongs*2);
  var expression=Math.min(100,20+sCount*8);
  var stamina=Math.min(100,25+totalSongs*1.5);
  var axes=[
    {name:'음정',val:pitch,color:'#ff6ab0'},
    {name:'리듬',val:rhythm,color:'#a855f7'},
    {name:'호흡',val:breath,color:'#4caf50'},
    {name:'표현',val:expression,color:'#ff9800'},
    {name:'지구력',val:stamina,color:'#2196f3'}
  ];
  var total=Math.round((pitch+rhythm+breath+expression+stamina)/5);
  var grade=total>=90?'S':total>=75?'A':total>=60?'B':total>=45?'C':'D';
  var html='<div class="v10-modal-box" style="max-height:85vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">📊 보컬 분석 리포트</h3>';
  html+='<div style="text-align:center;margin-bottom:16px"><div class="res-grade grade-'+grade+'" style="font-size:56px;margin:4px 0">'+grade+'</div>';
  html+='<div style="font-size:24px;font-weight:900;color:var(--accent-gold)">종합 '+total+'점</div></div>';
  html+='<canvas id="v10RadarCanvas" width="280" height="280" style="display:block;margin:0 auto 16px"></canvas>';
  axes.forEach(function(ax){
    html+='<div style="display:flex;align-items:center;gap:8px;margin:6px 0;font-size:12px">';
    html+='<span style="width:44px;text-align:right;color:'+ax.color+';font-weight:700">'+ax.name+'</span>';
    html+='<div style="flex:1;height:10px;background:rgba(255,255,255,.08);border-radius:5px;overflow:hidden"><div style="height:100%;width:'+ax.val+'%;background:'+ax.color+';border-radius:5px;transition:width .8s"></div></div>';
    html+='<span style="width:28px;text-align:right;color:var(--text-primary);font-weight:700">'+ax.val+'</span></div>';
  });
  html+='<div style="background:var(--btn-bg);border-radius:12px;padding:14px;margin-top:16px">';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px">맞춤 조언</div>';
  var weakest=axes.reduce(function(a,b){return a.val<b.val?a:b;});
  var advice={'음정':'음정 트레이닝(G키)으로 귀를 훈련하세요!','리듬':'박자에 맞춰 손뼉 치기 연습을 해보세요','호흡':'복식호흡 워밍업을 매일 실천하세요','표현':'감정을 담아 다양한 곡을 불러보세요','지구력':'매일 꾸준히 3곡 이상 연습하세요'};
  html+='<div style="font-size:13px;color:var(--text-primary);line-height:1.6">약점: <strong style="color:'+weakest.color+'">'+weakest.name+' ('+weakest.val+'점)</strong><br>'+advice[weakest.name]+'</div>';
  html+='</div>';
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v10AnalysisModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
  setTimeout(function(){drawRadar('v10RadarCanvas',axes);},100);
}

function drawRadar(canvasId,axes){
  var canvas=document.getElementById(canvasId);if(!canvas)return;
  var ctx=canvas.getContext('2d');if(!ctx)return;
  var cx=140,cy=140,r=110,n=axes.length;
  ctx.clearRect(0,0,280,280);
  for(var lv=1;lv<=4;lv++){
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var angle=-Math.PI/2+(2*Math.PI/n)*(i%n);
      var lr=r*(lv/4);
      var x=cx+lr*Math.cos(angle),y=cy+lr*Math.sin(angle);
      if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.strokeStyle='rgba(255,255,255,.1)';ctx.stroke();
  }
  for(var i=0;i<n;i++){
    var angle=-Math.PI/2+(2*Math.PI/n)*i;
    ctx.beginPath();ctx.moveTo(cx,cy);
    ctx.lineTo(cx+r*Math.cos(angle),cy+r*Math.sin(angle));
    ctx.strokeStyle='rgba(255,255,255,.15)';ctx.stroke();
    var lx=cx+(r+18)*Math.cos(angle),ly=cy+(r+18)*Math.sin(angle);
    ctx.fillStyle=axes[i].color;ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(axes[i].name,lx,ly);
  }
  ctx.beginPath();
  for(var i=0;i<=n;i++){
    var angle=-Math.PI/2+(2*Math.PI/n)*(i%n);
    var v=axes[i%n].val/100;
    var x=cx+r*v*Math.cos(angle),y=cy+r*v*Math.sin(angle);
    if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
  }
  ctx.closePath();
  ctx.fillStyle='rgba(255,106,176,.2)';ctx.fill();
  ctx.strokeStyle='rgba(255,106,176,.8)';ctx.lineWidth=2;ctx.stroke();
  for(var i=0;i<n;i++){
    var angle=-Math.PI/2+(2*Math.PI/n)*i;
    var v=axes[i].val/100;
    var x=cx+r*v*Math.cos(angle),y=cy+r*v*Math.sin(angle);
    ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fillStyle=axes[i].color;ctx.fill();
  }
}

// ===== DAILY VOCAL CHALLENGE =====
var DAILY_CHALLENGES=[
  {name:'고음 챌린지',desc:'어려운 곡에서 80점 이상',icon:'🎵'},
  {name:'연속 S등급',desc:'연속 2곡 S등급 달성',icon:'⭐'},
  {name:'워밍업 완주',desc:'워밍업 루틴 1회 완료',icon:'🏋️'},
  {name:'음정 마스터',desc:'평균 음정 정확도 85% 이상',icon:'🎯'},
  {name:'3곡 완주',desc:'오늘 3곡 이상 부르기',icon:'🎤'},
  {name:'다장르 도전',desc:'서로 다른 장르 2곡 부르기',icon:'🌍'},
  {name:'새 곡 도전',desc:'안 불러본 곡 1곡 도전',icon:'🆕'},
  {name:'발성 연습',desc:'보컬 코칭 기법 1개 학습',icon:'🎓'},
  {name:'다이어리 작성',desc:'보컬 다이어리에 기록 남기기',icon:'📔'},
  {name:'즐겨찾기 부르기',desc:'즐겨찾기 곡 2곡 부르기',icon:'❤️'},
  {name:'EQ 실험',desc:'이퀄라이저 3종 이상 사용',icon:'🎛️'},
  {name:'퀴즈 도전',desc:'퀴즈에서 8점 이상',icon:'🧠'},
  {name:'보컬 배틀 참가',desc:'AI와 보컬 배틀 1회',icon:'⚔️'},
  {name:'가사 외우기',desc:'가사 타이핑 게임 1회',icon:'⌨️'}
];

function getDailyChallenge(){
  var today=new Date().toISOString().slice(0,10);
  var seed=0;for(var i=0;i<today.length;i++)seed+=today.charCodeAt(i);
  var picked=[];
  for(var c=0;c<3;c++){var idx=(seed*(c+1)+c*7)%DAILY_CHALLENGES.length;
    while(picked.indexOf(idx)!==-1)idx=(idx+1)%DAILY_CHALLENGES.length;
    picked.push(idx);
  }
  return picked.map(function(i){return DAILY_CHALLENGES[i];});
}

function showDailyModal(){
  var m=document.getElementById('v10DailyModal');if(!m)return;
  m.classList.add('show');
  var challenges=getDailyChallenge();
  var today=new Date().toISOString().slice(0,10);
  var completed;try{completed=JSON.parse(localStorage.getItem('sv10_daily_done_'+today)||'[]');}catch(e){completed=[];}
  var streak=parseInt(localStorage.getItem('sv10_daily_streak')||'0');
  var html='<div class="v10-modal-box"><h3 style="color:var(--accent);margin-bottom:8px">🔥 일일 보컬 도전</h3>';
  html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
  html+='<span style="font-size:12px;color:var(--text-secondary)">'+today+'</span>';
  html+='<span style="font-size:12px;color:var(--accent-gold);font-weight:700">🔥 '+streak+'일 연속</span></div>';
  challenges.forEach(function(ch,ci){
    var done=completed.indexOf(ci)!==-1;
    html+='<div style="background:'+(done?'rgba(76,175,80,.1)':'var(--btn-bg)')+';border:2px solid '+(done?'rgba(76,175,80,.4)':'var(--btn-border)')+';border-radius:12px;padding:14px;margin:8px 0;display:flex;align-items:center;gap:12px">';
    html+='<span style="font-size:28px">'+ch.icon+'</span>';
    html+='<div style="flex:1"><div style="font-weight:700;color:var(--text-primary);font-size:13px">'+ch.name+(done?' ✅':'')+'</div>';
    html+='<div style="font-size:11px;color:var(--text-secondary);margin-top:2px">'+ch.desc+'</div></div>';
    if(!done)html+='<button onclick="completeDailyChallenge('+ci+')" class="btn-play" style="font-size:11px;padding:6px 12px">완료</button>';
    html+='</div>';
  });
  if(completed.length>=3){
    html+='<div style="text-align:center;margin-top:16px;background:rgba(255,215,0,.1);border:1px solid rgba(255,215,0,.3);border-radius:12px;padding:16px">';
    html+='<div style="font-size:32px;margin-bottom:4px">🎉</div>';
    html+='<div style="font-size:14px;font-weight:700;color:var(--accent-gold)">오늘의 도전 모두 완료!</div></div>';
  }
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v10DailyModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.completeDailyChallenge=function(ci){
  var today=new Date().toISOString().slice(0,10);
  var completed;try{completed=JSON.parse(localStorage.getItem('sv10_daily_done_'+today)||'[]');}catch(e){completed=[];}
  if(completed.indexOf(ci)===-1){
    completed.push(ci);localStorage.setItem('sv10_daily_done_'+today,JSON.stringify(completed));
    playSfx10('daily_complete');
    if(completed.length>=3){
      var yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);
      var yd;try{yd=JSON.parse(localStorage.getItem('sv10_daily_done_'+yesterday)||'[]');}catch(e){yd=[];}
      var streak=yd.length>=3?parseInt(localStorage.getItem('sv10_daily_streak')||'0')+1:1;
      localStorage.setItem('sv10_daily_streak',String(streak));
    }
    if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  }
  showDailyModal();
};

// ===== LIVE STAGE MODE =====
var stageActive=false;
var stageCanvas=null;
var stageAnimFrame=null;

function showStageModal(){
  var m=document.getElementById('v10StageModal');if(!m)return;
  m.classList.add('show');
  playSfx10('stage_on');
  var html='<div class="v10-modal-box"><h3 style="color:var(--accent);margin-bottom:16px">🎭 라이브 스테이지</h3>';
  html+='<div style="text-align:center;margin-bottom:20px">';
  html+='<div style="font-size:48px;margin-bottom:8px">🎤🌟🎤</div>';
  html+='<div style="font-size:14px;color:var(--text-secondary);line-height:1.6">노래할 때 화려한 무대 조명과<br>파티클 효과가 추가됩니다!</div></div>';
  html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">';
  var effects=[
    {name:'네온 글로우',icon:'💡',desc:'네온 조명'},
    {name:'스타 파티클',icon:'⭐',desc:'별 파티클'},
    {name:'비트 펄스',icon:'💓',desc:'비트 싱크'},
    {name:'레이저 빔',icon:'🔦',desc:'레이저 효과'}
  ];
  effects.forEach(function(ef){
    html+='<div style="background:var(--btn-bg);border:2px solid '+(stageActive?'var(--accent)':'var(--btn-border)')+';border-radius:12px;padding:12px;text-align:center">';
    html+='<div style="font-size:24px">'+ef.icon+'</div>';
    html+='<div style="font-size:12px;font-weight:700;color:var(--text-primary);margin-top:4px">'+ef.name+'</div>';
    html+='<div style="font-size:10px;color:var(--text-secondary)">'+ef.desc+'</div></div>';
  });
  html+='</div>';
  html+='<div style="text-align:center">';
  html+='<button class="'+(stageActive?'btn-back':'btn-retry')+'" onclick="toggleStageMode()" style="min-width:160px;font-size:14px">'+(stageActive?'🔇 스테이지 OFF':'🎭 스테이지 ON')+'</button></div>';
  html+='<div style="text-align:center;margin-top:12px"><button class="btn-back" onclick="document.getElementById(\'v10StageModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.toggleStageMode=function(){
  stageActive=!stageActive;
  localStorage.setItem('sv10_stage_used','true');
  if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  if(stageActive){
    if(!stageCanvas){
      stageCanvas=document.createElement('canvas');
      stageCanvas.id='v10StageCanvas';
      stageCanvas.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:4;opacity:.6';
      var pitchArea=document.getElementById('pitchArea');
      if(pitchArea)pitchArea.appendChild(stageCanvas);
      else document.body.appendChild(stageCanvas);
    }
    stageCanvas.style.display='block';
    animateStage();
  }else{
    if(stageCanvas)stageCanvas.style.display='none';
    if(stageAnimFrame)cancelAnimationFrame(stageAnimFrame);
  }
  var toast=document.createElement('div');toast.className='ach-toast show';
  toast.textContent=stageActive?'🎭 라이브 스테이지 ON':'🔇 스테이지 OFF';
  document.body.appendChild(toast);
  setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},1500);
  document.getElementById('v10StageModal').classList.remove('show');
};

function animateStage(){
  if(!stageActive||!stageCanvas)return;
  var c=stageCanvas;c.width=c.offsetWidth;c.height=c.offsetHeight;
  var ctx=c.getContext('2d');if(!ctx)return;
  var particles=[];
  for(var i=0;i<15;i++){particles.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*2,vy:-Math.random()*2-1,size:Math.random()*3+1,color:'hsl('+(Math.random()*360)+',80%,70%)',life:Math.random()});}
  function draw(){
    if(!stageActive){ctx.clearRect(0,0,c.width,c.height);return;}
    ctx.clearRect(0,0,c.width,c.height);
    particles.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;p.life-=.005;
      if(p.life<=0||p.y<0){p.x=Math.random()*c.width;p.y=c.height+10;p.life=1;}
      ctx.globalAlpha=p.life*.7;ctx.fillStyle=p.color;
      ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();
    });
    ctx.globalAlpha=1;
    stageAnimFrame=requestAnimationFrame(draw);
  }
  draw();
}

// ===== LYRICS TYPING GAME =====
function showTypingModal(){
  var m=document.getElementById('v10TypingModal');if(!m)return;
  m.classList.add('show');
  localStorage.setItem('sv10_typing_played','true');
  if(typeof SONGS==='undefined')return;
  var songs=SONGS.filter(function(s){return s.lyrics&&s.lyrics.length>0;});
  var pick=songs[Math.floor(Math.random()*songs.length)];
  if(!pick)return;
  var allLyrics='';
  pick.lyrics.forEach(function(l){allLyrics+=l.tx;});
  allLyrics=allLyrics.replace(/[~\s]/g,'');
  var html='<div class="v10-modal-box"><h3 style="color:var(--accent);margin-bottom:8px">⌨️ 가사 타이핑 게임</h3>';
  html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
  html+='<span style="font-size:24px">'+pick.icon+'</span>';
  html+='<span style="font-size:14px;font-weight:700;color:var(--text-primary)">'+pick.title+'</span>';
  html+='<span style="font-size:12px;color:var(--text-muted)">'+allLyrics.length+'자</span></div>';
  html+='<div id="typingDisplay" style="font-size:20px;font-weight:700;color:var(--text-muted);line-height:1.8;text-align:center;margin-bottom:16px;min-height:60px;word-break:break-all;letter-spacing:2px">'+allLyrics.split('').map(function(c){return '<span>'+c+'</span>';}).join('')+'</div>';
  html+='<input id="typingInput" type="text" placeholder="여기에 가사를 입력하세요..." style="width:100%;padding:12px;background:var(--bg-secondary);color:var(--text-primary);border:2px solid var(--btn-border);border-radius:12px;font-size:16px;text-align:center;font-family:inherit" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
  html+='<div id="typingStats" style="text-align:center;margin-top:12px;font-size:13px;color:var(--text-secondary)">타이핑을 시작하세요!</div>';
  html+='<div style="text-align:center;margin-top:16px"><button class="btn-back" onclick="document.getElementById(\'v10TypingModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
  var input=document.getElementById('typingInput');
  var display=document.getElementById('typingDisplay');
  var statsEl=document.getElementById('typingStats');
  if(!input||!display)return;
  var startTime=0;
  input.focus();
  input.addEventListener('input',function(){
    if(!startTime)startTime=Date.now();
    var typed=input.value;
    var spans=display.querySelectorAll('span');
    var correct=0,wrong=0;
    for(var i=0;i<spans.length;i++){
      if(i<typed.length){
        if(typed[i]===allLyrics[i]){spans[i].style.color='#4caf50';spans[i].style.textShadow='0 0 8px rgba(76,175,80,.5)';correct++;}
        else{spans[i].style.color='#f44336';spans[i].style.textShadow='0 0 8px rgba(244,67,54,.5)';wrong++;}
      }else{spans[i].style.color='var(--text-muted)';spans[i].style.textShadow='none';}
    }
    var elapsed=Math.max(1,(Date.now()-startTime)/1000);
    var cpm=Math.round(correct/elapsed*60);
    if(statsEl)statsEl.innerHTML='정확도: <strong style="color:'+(wrong===0?'#4caf50':'#ff9800')+'">'+(typed.length>0?Math.round(correct/typed.length*100):0)+'%</strong> | 속도: <strong style="color:var(--accent)">'+cpm+'자/분</strong>';
    if(typed.length>=allLyrics.length){
      var accuracy=Math.round(correct/allLyrics.length*100);
      if(accuracy===100){localStorage.setItem('sv10_typing_perfect','true');playSfx10('typing_correct');}else{playSfx10('typing_wrong');}
      if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
      if(statsEl)statsEl.innerHTML='완료! 정확도: <strong style="color:'+(accuracy===100?'#ffd700':'#ff9800')+'">'+accuracy+'%</strong> | 속도: <strong style="color:var(--accent)">'+cpm+'자/분</strong>'+(accuracy===100?' 🎉 퍼펙트!':'');
      input.disabled=true;
    }
  });
}

// ===== VOICE PROFILE =====
function showProfileModal(){
  var m=document.getElementById('v10ProfileModal');if(!m)return;
  m.classList.add('show');
  playSfx10('profile');
  var stats;try{stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');}catch(e){stats={};}
  var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){hs={};}
  var profile;try{profile=JSON.parse(localStorage.getItem('sv10_profile')||'{}');}catch(e){profile={};}
  var genres={};var songCount=0;
  if(typeof SONGS!=='undefined'){
    SONGS.forEach(function(s){if(hs[s.id]){songCount++;if(!genres[s.cat])genres[s.cat]=0;genres[s.cat]++;}});
  }
  var topGenre='아직 없음';var topCount=0;
  for(var g in genres){if(genres[g]>topCount){topCount=genres[g];topGenre=g;}}
  var avgScore=0;var scoreCount=0;
  for(var k in hs){if(hs[k]&&hs[k].s){avgScore+=hs[k].s;scoreCount++;}}
  avgScore=scoreCount>0?Math.round(avgScore/scoreCount):0;
  var level=songCount<5?'입문':songCount<15?'초급':songCount<30?'중급':songCount<50?'고급':'마스터';
  var levelColor=songCount<5?'#888':songCount<15?'#4caf50':songCount<30?'#2196f3':songCount<50?'#ff9800':'#ffd700';
  var html='<div class="v10-modal-box" style="max-height:85vh;overflow-y:auto"><h3 style="color:var(--accent);margin-bottom:16px">🪪 보이스 프로필</h3>';
  html+='<div style="text-align:center;margin-bottom:20px">';
  html+='<div style="font-size:48px;margin-bottom:8px">🎤</div>';
  html+='<input id="profileName" value="'+(profile.name||'보컬리스트').replace(/"/g,'&quot;')+'" style="background:transparent;border:none;color:var(--text-primary);font-size:18px;font-weight:900;text-align:center;width:200px;border-bottom:2px solid var(--btn-border);padding:4px;font-family:inherit" maxlength="20">';
  html+='<div style="margin-top:8px"><span style="background:'+levelColor+';color:#fff;font-size:11px;padding:3px 12px;border-radius:10px;font-weight:700">'+level+'</span></div></div>';
  html+='<div class="stat-grid" style="margin-bottom:16px">';
  html+='<div class="stat-item"><div class="si-val">'+songCount+'</div><div class="si-lbl">부른 곡</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+avgScore+'</div><div class="si-lbl">평균 점수</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+topGenre+'</div><div class="si-lbl">선호 장르</div></div>';
  html+='<div class="stat-item"><div class="si-val">'+(stats.bestCombo||0)+'</div><div class="si-lbl">최고 콤보</div></div>';
  html+='</div>';
  html+='<div style="background:var(--btn-bg);border-radius:12px;padding:14px;margin-bottom:12px">';
  html+='<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">장르별 활동</div>';
  for(var g in genres){
    var pct=songCount>0?Math.round(genres[g]/songCount*100):0;
    html+='<div style="display:flex;align-items:center;gap:8px;margin:4px 0;font-size:12px">';
    html+='<span style="width:60px;text-align:right;color:var(--text-primary);font-weight:600">'+g+'</span>';
    html+='<div style="flex:1;height:8px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden"><div style="height:100%;width:'+pct+'%;background:var(--accent);border-radius:4px"></div></div>';
    html+='<span style="width:20px;text-align:right;color:var(--text-muted)">'+genres[g]+'</span></div>';
  }
  html+='</div>';
  html+='<div style="display:flex;gap:8px;justify-content:center">';
  html+='<button class="btn-retry" onclick="saveProfile()" style="font-size:13px">저장</button>';
  html+='<button class="btn-back" onclick="document.getElementById(\'v10ProfileModal\').classList.remove(\'show\')">닫기</button></div></div>';
  m.innerHTML=html;
}

window.saveProfile=function(){
  var nameEl=document.getElementById('profileName');
  var name=nameEl?nameEl.value.trim():'보컬리스트';
  localStorage.setItem('sv10_profile',JSON.stringify({name:name}));
  localStorage.setItem('sv10_profile_done','true');
  if(typeof checkAchievements==='function'){try{checkAchievements(JSON.parse(localStorage.getItem('sv6_stats')||'{}'));}catch(e){}}
  var toast=document.createElement('div');toast.className='ach-toast show';
  toast.textContent='🪪 프로필 저장 완료!';document.body.appendChild(toast);
  setTimeout(function(){toast.classList.remove('show');setTimeout(function(){toast.remove();},400);},1500);
};

// ===== QUIZ v10: 15 NEW QUESTIONS =====
var QUIZ_V10=[
{q:'노래할 때 &quot;벨팅&quot;이란?',a:['고음에서 흉성의 파워를 유지하는 기법','속삭이듯 부르는 기법','가성으로 높은 음 내기','비음으로 부르는 기법'],c:0},
{q:'비브라토(Vibrato)의 올바른 설명은?',a:['음을 규칙적으로 떨리게 하는 기법','음을 끊어서 부르는 기법','음을 점점 크게 하는 기법','음을 점점 빠르게 하는 기법'],c:0},
{q:'카포(Capo)의 용도는?',a:['기타 키를 올리는 도구','마이크 음량 조절기','박자를 맞추는 도구','가사를 표시하는 장치'],c:0},
{q:'MR(Music Recorded)의 의미는?',a:['보컬 없는 반주 음악','마이크 녹음 기능','음악 리믹스','무대 리허설'],c:0},
{q:'&quot;도레미파솔라시도&quot;에서 &quot;라&quot;의 주파수는?',a:['440Hz','261Hz','330Hz','520Hz'],c:0},
{q:'노래방에서 &quot;키&quot;를 올린다는 것은?',a:['전체 음높이를 반음 단위로 높이는 것','볼륨을 키우는 것','템포를 빠르게 하는 것','에코를 강하게 하는 것'],c:0},
{q:'&quot;아카펠라&quot;란?',a:['반주 없이 목소리만으로 부르는 것','마이크 없이 부르는 것','1명이 부르는 노래','악기만 연주하는 것'],c:0},
{q:'성대에 가장 좋은 음료는?',a:['미지근한 물','아이스 커피','탄산음료','에너지 드링크'],c:0},
{q:'&quot;브레스 컨트롤&quot;이란?',a:['호흡을 조절하여 안정적으로 부르는 기법','마이크 거리 조절','음량 조절 기법','리듬 맞추기'],c:0},
{q:'노래할 때 &quot;피치(Pitch)&quot;란?',a:['음의 높낮이','음의 크기','음의 길이','음의 색깔'],c:0},
{q:'&quot;앙코르&quot;의 원래 의미는?',a:['프랑스어로 &quot;한 번 더&quot;','이탈리아어로 &quot;끝&quot;','영어로 &quot;최고&quot;','독일어로 &quot;박수&quot;'],c:0},
{q:'한국 최초의 대중가요는?',a:['이 풍진 세월 (1929)','아리랑 (1926)','목포의 눈물 (1935)','울밑에선 봉선화 (1920)'],c:0},
{q:'&quot;리버브(Reverb)&quot; 효과란?',a:['공간에서 울리는 잔향 효과','음을 반복시키는 효과','음을 높이는 효과','목소리를 변조하는 효과'],c:0},
{q:'K-POP에서 &quot;고음파트&quot;를 주로 맡는 멤버를?',a:['메인보컬','래퍼','비주얼','리더'],c:0},
{q:'노래 연습에 가장 효과적인 방법은?',a:['매일 짧은 시간이라도 꾸준히','일주일에 한번 오래','한달에 한번 집중적으로','시험 전에만 연습'],c:0}
];

function showQuizV10(){
  var m=document.getElementById('v10QuizModal');if(!m)return;
  m.classList.add('show');
  var questions=QUIZ_V10.slice().sort(function(){return Math.random()-.5;}).slice(0,10);
  var qi=0,score=0;
  function renderQ(){
    if(qi>=questions.length){
      var grade=score>=9?'S':score>=7?'A':score>=5?'B':score>=3?'C':'D';
      var html='<div class="v10-modal-box" style="text-align:center"><h3 style="color:var(--accent);margin-bottom:16px">🧠 노래 퀴즈 결과</h3>';
      html+='<div class="res-grade grade-'+grade+'" style="font-size:64px">'+grade+'</div>';
      html+='<div style="font-size:36px;font-weight:900;color:var(--accent-gold);margin:8px 0">'+score+'/'+questions.length+'</div>';
      html+='<div style="display:flex;gap:10px;justify-content:center;margin-top:20px">';
      html+='<button class="btn-retry" onclick="showQuizV10()">다시 하기</button>';
      html+='<button class="btn-back" onclick="document.getElementById(\'v10QuizModal\').classList.remove(\'show\')">닫기</button></div></div>';
      m.innerHTML=html;return;
    }
    var q=questions[qi];
    var shuffled=q.a.map(function(a,i){return{t:a,i:i};}).sort(function(){return Math.random()-.5;});
    var html='<div class="v10-modal-box"><h3 style="color:var(--accent);margin-bottom:8px">🧠 노래 퀴즈</h3>';
    html+='<div style="display:flex;justify-content:space-between;margin-bottom:16px;font-size:13px">';
    html+='<span style="color:var(--text-secondary)">'+(qi+1)+'/'+questions.length+'</span>';
    html+='<span style="color:var(--accent-gold);font-weight:700">점수: '+score+'</span></div>';
    html+='<div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:16px;line-height:1.5">'+q.q+'</div>';
    shuffled.forEach(function(opt){
      html+='<button onclick="answerQuizV10('+opt.i+','+q.c+')" style="display:block;width:100%;background:var(--btn-bg);border:2px solid var(--btn-border);border-radius:12px;padding:12px;margin:6px 0;color:var(--text-primary);font-size:13px;text-align:left;cursor:pointer;transition:all .2s;font-family:inherit" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--btn-border)\'">'+opt.t+'</button>';
    });
    html+='</div>';
    m.innerHTML=html;
  }
  window.answerQuizV10=function(sel,correct){
    qi++;
    if(sel===correct){score++;playSfx10('quiz_v10_correct');}else{playSfx10('quiz_v10_wrong');}
    setTimeout(renderQ,300);
  };
  renderQ();
}

// ===== KEYBOARD SHORTCUTS v10 =====
function setupKeyboardV10(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
    if(e.shiftKey){
      switch(e.key){
        case 'C':showCoachingModal();e.preventDefault();break;
        case 'L':showPlaylistModal();e.preventDefault();break;
        case 'B':showBattleModal();e.preventDefault();break;
        case 'A':showAnalysisModal();e.preventDefault();break;
        case 'D':showDailyModal();e.preventDefault();break;
        case 'S':showStageModal();e.preventDefault();break;
        case 'T':showTypingModal();e.preventDefault();break;
        case 'P':showProfileModal();e.preventDefault();break;
      }
    }
  });
}

// ===== INJECT CSS v10 =====
function injectV10CSS(){
  var style=document.createElement('style');
  style.textContent=
    '.v10-modal{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.9);z-index:57;flex-direction:column;align-items:center;justify-content:center;padding:16px}'+
    '.v10-modal.show{display:flex}'+
    '.v10-modal-box{background:linear-gradient(135deg,#1a1040,#2a1060);border:2px solid #7c3aed;border-radius:16px;padding:24px;max-width:460px;width:100%;max-height:88vh;overflow-y:auto}'+
    '.v10-qa-btn{background:var(--btn-bg);border:1px solid var(--btn-border);color:var(--text-primary);padding:6px 14px;border-radius:16px;font-size:12px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:4px}'+
    '.v10-qa-btn:hover{background:rgba(124,58,237,.2);border-color:#7c3aed}'+
    '@media(max-width:600px){.v10-modal-box{max-width:calc(100vw - 24px);padding:16px}.v10-qa-btn{font-size:11px;padding:5px 10px}}';
  document.head.appendChild(style);
}

// ===== INJECT UI v10 =====
function injectV10UI(){
  var h1=document.querySelector('#header h1');
  if(h1)h1.textContent='StarVoice v10';
  var badge=document.getElementById('songCountBadge');
  if(badge&&typeof SONGS!=='undefined')badge.textContent=SONGS.length;

  var modalIds=['v10CoachingModal','v10PlaylistModal','v10BattleModal','v10AnalysisModal','v10DailyModal','v10StageModal','v10TypingModal','v10ProfileModal','v10QuizModal'];
  modalIds.forEach(function(id){
    var m=document.createElement('div');m.className='v10-modal';m.id=id;
    m.onclick=function(e){if(e.target===m)m.classList.remove('show');};
    document.body.appendChild(m);
  });

  var songSelect=document.getElementById('songSelect');
  if(songSelect){
    var qa=document.createElement('div');
    qa.className='v10-quick-actions';
    qa.style.cssText='grid-column:1/-1;display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px';
    qa.innerHTML=
      '<button class="v10-qa-btn" onclick="showCoachingModal()">🎤 보컬코칭</button>'+
      '<button class="v10-qa-btn" onclick="showPlaylistModal()">📋 플레이리스트</button>'+
      '<button class="v10-qa-btn" onclick="showBattleModal()">⚔️ 배틀</button>'+
      '<button class="v10-qa-btn" onclick="showAnalysisModal()">📊 보컬분석</button>'+
      '<button class="v10-qa-btn" onclick="showDailyModal()">🔥 일일도전</button>'+
      '<button class="v10-qa-btn" onclick="showStageModal()">🎭 스테이지</button>'+
      '<button class="v10-qa-btn" onclick="showTypingModal()">⌨️ 가사타이핑</button>'+
      '<button class="v10-qa-btn" onclick="showProfileModal()">🪪 프로필</button>'+
      '<button class="v10-qa-btn" onclick="showQuizV10()">🧠 퀴즈</button>';
    var v9Actions=songSelect.querySelector('.v9-qa-btn');
    var v9Container=v9Actions?v9Actions.parentElement:null;
    if(v9Container&&v9Container.nextSibling)songSelect.insertBefore(qa,v9Container.nextSibling);
    else{var searchWrap=songSelect.querySelector('.search-wrap');
    if(searchWrap&&searchWrap.nextSibling)songSelect.insertBefore(qa,searchWrap.nextSibling);
    else songSelect.insertBefore(qa,songSelect.firstChild);}
  }
}

// ===== SEO UPDATE v10 =====
function updateSEOv10(){
  document.title='StarVoice v10 - AI 노래방';
  var desc=document.querySelector('meta[name="description"]');
  if(desc)desc.setAttribute('content','StarVoice v10: 75곡 AI 음정 분석 K-노래방 PWA. 보컬코칭8기법/배틀/분석리포트/플레이리스트/일일도전/라이브스테이지/가사타이핑/보이스프로필/54업적');
  var ogDesc=document.querySelector('meta[property="og:description"]');
  if(ogDesc)ogDesc.setAttribute('content','75곡 AI 음정 분석 노래방. 보컬 코칭, 배틀 모드, 5축 분석, 플레이리스트, 54개 업적');
  var ogTitle=document.querySelector('meta[property="og:title"]');
  if(ogTitle)ogTitle.setAttribute('content','StarVoice v10 - AI 노래방');
}

// ===== INIT v10 =====
function initV10(){
  injectV10CSS();
  injectV10UI();
  updateSEOv10();
  setupKeyboardV10();
  hookBattleResult();

  if(typeof renderList==='function')renderList();

  console.log('[v10] patch loaded — Songs:',
    typeof SONGS!=='undefined'?SONGS.length:'?',
    'Achievements:',typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:'?');
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initV10);}
else{setTimeout(initV10,300);}

})();
