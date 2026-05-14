/* StarVoice v7 Patch — Self-contained module injected via SW
 * Adds: 10 songs, 8 achievements, daily challenge, queue, chorus, noraebang numbers, SEO, accessibility
 */
(function(){
'use strict';

var C3=130.81,D3=146.83,E3=164.81,F3=174.61,G3=196.00,A3=220.00,B3=246.94;
var C4=261.63,D4=293.66,E4=329.63,F4=349.23,G4=392.00,A4=440.00,B4=493.88;
var C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
var Ab3=207.65,Bb3=233.08,Eb4=311.13,Bb4=466.16;

var NEW_SONGS=[
{id:36,cat:"동요",title:"떴다 떴다 비행기",icon:"✈️",diff:"쉬움",dc:"diff-easy",bpm:110,
melody:[
{t:0,d:.5,f:C4,s:"떴"},{t:.5,d:.5,f:C4,s:"다"},{t:1,d:.5,f:E4,s:"떴"},{t:1.5,d:.5,f:E4,s:"다"},
{t:2,d:.5,f:G4,s:"비"},{t:2.5,d:.5,f:G4,s:"행"},{t:3,d:1,f:E4,s:"기"},
{t:4,d:.5,f:D4,s:"날"},{t:4.5,d:.5,f:D4,s:"아"},{t:5,d:1,f:E4,s:"라"},
{t:6,d:.5,f:D4,s:"높"},{t:6.5,d:.5,f:D4,s:"이"},{t:7,d:.5,f:D4,s:"높"},{t:7.5,d:.5,f:D4,s:"이"},
{t:8,d:.5,f:E4,s:"날"},{t:8.5,d:.5,f:E4,s:"아"},{t:9,d:1,f:D4,s:"라"},
{t:10,d:.5,f:C4,s:"우"},{t:10.5,d:.5,f:C4,s:"리"},{t:11,d:.5,f:E4,s:"비"},{t:11.5,d:.5,f:E4,s:"행"},
{t:12,d:.5,f:G4,s:"기"},{t:12.5,d:.5,f:E4,s:"는"},{t:13,d:1.5,f:C4,s:"~"}
],lyrics:[{t:0,tx:"떴다 떴다 비행기"},{t:4,tx:"날아라 높이 높이"},{t:8,tx:"날아라"},{t:10,tx:"우리 비행기는~"}],dur:15},

{id:37,cat:"동요",title:"꽃밭에서",icon:"🌻",diff:"쉬움",dc:"diff-easy",bpm:100,
melody:[
{t:0,d:.6,f:E4,s:"꽃"},{t:.6,d:.6,f:E4,s:"밭"},{t:1.2,d:.6,f:E4,s:"에"},
{t:1.8,d:.6,f:D4,s:"앉"},{t:2.4,d:.6,f:E4,s:"아"},{t:3,d:1.2,f:G4,s:"서"},
{t:4.2,d:.6,f:A4,s:"꽃"},{t:4.8,d:.6,f:A4,s:"잎"},{t:5.4,d:.6,f:G4,s:"을"},
{t:6,d:.6,f:E4,s:"세"},{t:6.6,d:.6,f:D4,s:"어"},{t:7.2,d:1.2,f:C4,s:"봅"},
{t:8.4,d:1.2,f:C4,s:"니다"},
{t:9.6,d:.6,f:G4,s:"한"},{t:10.2,d:.6,f:G4,s:"잎"},{t:10.8,d:.6,f:A4,s:"두"},
{t:11.4,d:.6,f:G4,s:"잎"},{t:12,d:.6,f:E4,s:"꽃"},{t:12.6,d:.6,f:D4,s:"잎"},
{t:13.2,d:.6,f:E4,s:"세"},{t:13.8,d:.6,f:D4,s:"어"},{t:14.4,d:1.5,f:C4,s:"봅니다"}
],lyrics:[{t:0,tx:"꽃밭에 앉아서"},{t:4.2,tx:"꽃잎을 세어 봅니다"},{t:9.6,tx:"한 잎 두 잎 꽃잎"},{t:13.2,tx:"세어 봅니다"}],dur:16},

{id:38,cat:"동요",title:"고드름",icon:"❄️",diff:"쉬움",dc:"diff-easy",bpm:110,
melody:[
{t:0,d:.5,f:E4,s:"고"},{t:.5,d:.5,f:F4,s:"드"},{t:1,d:1,f:G4,s:"름"},
{t:2,d:.5,f:G4,s:"고"},{t:2.5,d:.5,f:A4,s:"드"},{t:3,d:1,f:G4,s:"름"},
{t:4,d:.5,f:E4,s:"수"},{t:4.5,d:.5,f:F4,s:"정"},{t:5,d:.5,f:G4,s:"고"},
{t:5.5,d:.5,f:F4,s:"드"},{t:6,d:1.5,f:E4,s:"름"},
{t:7.5,d:.5,f:G4,s:"고"},{t:8,d:.5,f:A4,s:"드"},{t:8.5,d:.5,f:B4,s:"름"},
{t:9,d:.5,f:A4,s:"따"},{t:9.5,d:1,f:G4,s:"다"},
{t:10.5,d:.5,f:E4,s:"먹"},{t:11,d:.5,f:F4,s:"어"},{t:11.5,d:1.5,f:E4,s:"봐"},
{t:13,d:.5,f:D4,s:"사"},{t:13.5,d:.5,f:E4,s:"르"},{t:14,d:.5,f:D4,s:"르"},
{t:14.5,d:1.5,f:C4,s:"르"}
],lyrics:[{t:0,tx:"고드름 고드름"},{t:4,tx:"수정 고드름"},{t:7.5,tx:"고드름 따다"},{t:10.5,tx:"먹어봐"},{t:13,tx:"사르르르"}],dur:16},

{id:39,cat:"동요",title:"얼굴 찌푸리지 말아요",icon:"😊",diff:"보통",dc:"diff-medium",bpm:120,
melody:[
{t:0,d:.4,f:G4,s:"얼"},{t:.4,d:.4,f:E4,s:"굴"},{t:.8,d:.8,f:G4,s:"~"},
{t:1.6,d:.4,f:A4,s:"찌"},{t:2,d:.4,f:G4,s:"푸"},{t:2.4,d:.4,f:E4,s:"리"},
{t:2.8,d:.4,f:D4,s:"지"},{t:3.2,d:.8,f:C4,s:"말"},
{t:4,d:.8,f:E4,s:"아"},{t:4.8,d:.8,f:D4,s:"요"},
{t:5.6,d:.4,f:G4,s:"인"},{t:6,d:.4,f:E4,s:"상"},{t:6.4,d:.8,f:G4,s:"~"},
{t:7.2,d:.4,f:A4,s:"쓰"},{t:7.6,d:.4,f:G4,s:"면"},{t:8,d:.4,f:E4,s:"쓸"},
{t:8.4,d:.4,f:D4,s:"수"},{t:8.8,d:.4,f:E4,s:"록"},{t:9.2,d:1,f:C4,s:"~"},
{t:10.2,d:.4,f:E4,s:"하"},{t:10.6,d:.4,f:G4,s:"하"},{t:11,d:.4,f:A4,s:"하"},
{t:11.4,d:.4,f:G4,s:"하"},{t:11.8,d:.4,f:E4,s:"웃"},{t:12.2,d:.4,f:D4,s:"으"},
{t:12.6,d:.4,f:E4,s:"면"},{t:13,d:.4,f:D4,s:"복"},{t:13.4,d:1.5,f:C4,s:"이와요"}
],lyrics:[{t:0,tx:"얼굴~ 찌푸리지"},{t:4,tx:"말아요"},{t:5.6,tx:"인상~ 쓰면 쓸수록~"},{t:10.2,tx:"하하하하 웃으면 복이와요"}],dur:15},

{id:40,cat:"가요/민요",title:"독도는 우리 땅",icon:"🏝️",diff:"보통",dc:"diff-medium",bpm:130,
melody:[
{t:0,d:.35,f:E4,s:"울"},{t:.35,d:.35,f:E4,s:"릉"},{t:.7,d:.35,f:G4,s:"도"},{t:1.05,d:.35,f:G4,s:"동"},
{t:1.4,d:.35,f:A4,s:"남"},{t:1.75,d:.35,f:A4,s:"쪽"},{t:2.1,d:.7,f:G4,s:"~"},
{t:2.8,d:.35,f:E4,s:"뱃"},{t:3.15,d:.35,f:E4,s:"길"},{t:3.5,d:.35,f:D4,s:"따"},{t:3.85,d:.35,f:D4,s:"라"},
{t:4.2,d:.35,f:E4,s:"이"},{t:4.55,d:.35,f:E4,s:"백"},{t:4.9,d:.7,f:D4,s:"리"},
{t:5.6,d:.35,f:G4,s:"외"},{t:5.95,d:.35,f:G4,s:"로"},{t:6.3,d:.35,f:A4,s:"운"},
{t:6.65,d:.35,f:B4,s:"섬"},{t:7,d:.35,f:A4,s:"하"},{t:7.35,d:.35,f:G4,s:"나"},
{t:7.7,d:.7,f:E4,s:"~"},
{t:8.4,d:.35,f:A4,s:"새"},{t:8.75,d:.35,f:A4,s:"들"},{t:9.1,d:.35,f:G4,s:"의"},
{t:9.45,d:.35,f:E4,s:"고"},{t:9.8,d:.35,f:D4,s:"향"},{t:10.15,d:1,f:C4,s:"~"},
{t:11.15,d:.35,f:D4,s:"독"},{t:11.5,d:.35,f:E4,s:"도"},{t:11.85,d:.35,f:D4,s:"는"},
{t:12.2,d:.35,f:E4,s:"우"},{t:12.55,d:.35,f:D4,s:"리"},{t:12.9,d:1.2,f:C4,s:"땅"}
],lyrics:[{t:0,tx:"울릉도 동남쪽~"},{t:2.8,tx:"뱃길 따라 이백리"},{t:5.6,tx:"외로운 섬 하나~"},{t:8.4,tx:"새들의 고향~"},{t:11.15,tx:"독도는 우리 땅"}],dur:15},

{id:41,cat:"가요/민요",title:"과수원 길",icon:"🍎",diff:"보통",dc:"diff-medium",bpm:95,
melody:[
{t:0,d:.6,f:E4,s:"동"},{t:.6,d:.6,f:G4,s:"구"},{t:1.2,d:.6,f:A4,s:"밖"},{t:1.8,d:.6,f:G4,s:"과"},
{t:2.4,d:.6,f:E4,s:"수"},{t:3,d:.6,f:D4,s:"원"},{t:3.6,d:1.2,f:C4,s:"길"},
{t:4.8,d:.6,f:D4,s:"아"},{t:5.4,d:.6,f:E4,s:"카"},{t:6,d:.6,f:G4,s:"시"},
{t:6.6,d:.6,f:E4,s:"아"},{t:7.2,d:.6,f:D4,s:"꽃"},{t:7.8,d:1.2,f:C4,s:"이"},
{t:9,d:.6,f:E4,s:"활"},{t:9.6,d:.6,f:G4,s:"짝"},{t:10.2,d:.6,f:A4,s:"피"},
{t:10.8,d:1.2,f:G4,s:"어"},
{t:12,d:.6,f:A4,s:"하"},{t:12.6,d:.6,f:G4,s:"얀"},{t:13.2,d:.6,f:E4,s:"꽃"},
{t:13.8,d:.6,f:D4,s:"향"},{t:14.4,d:.6,f:E4,s:"기"},{t:15,d:1.5,f:C4,s:"~"},
{t:16.5,d:.6,f:G4,s:"둥"},{t:17.1,d:.6,f:A4,s:"근"},{t:17.7,d:.6,f:B4,s:"달"},
{t:18.3,d:1.2,f:A4,s:"밤"},
{t:19.5,d:.6,f:G4,s:"잠"},{t:20.1,d:.6,f:E4,s:"못"},{t:20.7,d:.6,f:D4,s:"들"},
{t:21.3,d:.6,f:E4,s:"어"},{t:21.9,d:1.5,f:C4,s:"~"}
],lyrics:[{t:0,tx:"동구 밖 과수원 길"},{t:4.8,tx:"아카시아 꽃이"},{t:9,tx:"활짝 피어"},{t:12,tx:"하얀 꽃향기~"},{t:16.5,tx:"둥근 달밤"},{t:19.5,tx:"잠 못 들어~"}],dur:24},

{id:42,cat:"세계명곡",title:"오 클레멘타인",icon:"🤠",diff:"쉬움",dc:"diff-easy",bpm:100,
melody:[
{t:0,d:.6,f:C4,s:"오"},{t:.6,d:.6,f:C4,s:"마"},{t:1.2,d:.6,f:C4,s:"이"},
{t:1.8,d:.6,f:G3,s:"달"},{t:2.4,d:1.2,f:E4,s:"링"},
{t:3.6,d:.6,f:E4,s:"오"},{t:4.2,d:.6,f:E4,s:"마"},{t:4.8,d:.6,f:E4,s:"이"},
{t:5.4,d:.6,f:C4,s:"달"},{t:6,d:1.2,f:G4,s:"링"},
{t:7.2,d:.6,f:C4,s:"오"},{t:7.8,d:.6,f:E4,s:"마"},{t:8.4,d:.6,f:G4,s:"이"},
{t:9,d:.6,f:G4,s:"달"},{t:9.6,d:.6,f:F4,s:"링"},{t:10.2,d:.6,f:E4,s:"클"},
{t:10.8,d:1.2,f:D4,s:"레"},
{t:12,d:.6,f:E4,s:"멘"},{t:12.6,d:.6,f:D4,s:"타"},{t:13.2,d:.6,f:E4,s:"인"},
{t:13.8,d:.6,f:C4,s:"영"},{t:14.4,d:.6,f:D4,s:"원"},{t:15,d:1.5,f:C4,s:"히"}
],lyrics:[{t:0,tx:"오 마이 달링"},{t:3.6,tx:"오 마이 달링"},{t:7.2,tx:"오 마이 달링 클레"},{t:12,tx:"멘타인 영원히"}],dur:17},

{id:43,cat:"세계명곡",title:"로렐라이",icon:"🏰",diff:"보통",dc:"diff-medium",bpm:88,
melody:[
{t:0,d:.7,f:E4,s:"나"},{t:.7,d:.7,f:E4,s:"는"},{t:1.4,d:.7,f:E4,s:"모"},
{t:2.1,d:.7,f:G4,s:"르"},{t:2.8,d:.7,f:F4,s:"겠"},{t:3.5,d:1.4,f:E4,s:"네"},
{t:4.9,d:.7,f:D4,s:"무"},{t:5.6,d:.7,f:D4,s:"엇"},{t:6.3,d:.7,f:D4,s:"이"},
{t:7,d:.7,f:F4,s:"이"},{t:7.7,d:.7,f:E4,s:"런"},{t:8.4,d:1.4,f:D4,s:"지"},
{t:9.8,d:.7,f:E4,s:"이"},{t:10.5,d:.7,f:E4,s:"상"},{t:11.2,d:.7,f:E4,s:"한"},
{t:11.9,d:.7,f:G4,s:"느"},{t:12.6,d:.7,f:A4,s:"낌"},{t:13.3,d:1.4,f:G4,s:"이"},
{t:14.7,d:.7,f:E4,s:"나"},{t:15.4,d:.7,f:D4,s:"를"},{t:16.1,d:.7,f:E4,s:"슬"},
{t:16.8,d:.7,f:D4,s:"프"},{t:17.5,d:1.5,f:C4,s:"게해"}
],lyrics:[{t:0,tx:"나는 모르겠네"},{t:4.9,tx:"무엇이 이런지"},{t:9.8,tx:"이상한 느낌이"},{t:14.7,tx:"나를 슬프게 해"}],dur:20},

{id:44,cat:"동요",title:"잠자리",icon:"🪰",diff:"쉬움",dc:"diff-easy",bpm:110,
melody:[
{t:0,d:.5,f:G4,s:"잠"},{t:.5,d:.5,f:E4,s:"자"},{t:1,d:.5,f:G4,s:"리"},{t:1.5,d:.5,f:E4,s:"~"},
{t:2,d:.5,f:G4,s:"잠"},{t:2.5,d:.5,f:A4,s:"자"},{t:3,d:1,f:G4,s:"리"},
{t:4,d:.5,f:A4,s:"앞"},{t:4.5,d:.5,f:G4,s:"잠"},{t:5,d:.5,f:A4,s:"자"},{t:5.5,d:.5,f:G4,s:"리"},
{t:6,d:.5,f:E4,s:"뒤"},{t:6.5,d:.5,f:D4,s:"잠"},{t:7,d:1,f:E4,s:"자리"},
{t:8,d:.5,f:G4,s:"날"},{t:8.5,d:.5,f:E4,s:"아"},{t:9,d:.5,f:G4,s:"라"},{t:9.5,d:.5,f:E4,s:"~"},
{t:10,d:.5,f:G4,s:"산"},{t:10.5,d:.5,f:A4,s:"넘"},{t:11,d:1,f:G4,s:"어"},
{t:12,d:.5,f:E4,s:"물"},{t:12.5,d:.5,f:D4,s:"건"},{t:13,d:.5,f:E4,s:"너"},{t:13.5,d:1.5,f:C4,s:"~"}
],lyrics:[{t:0,tx:"잠자리 잠자리"},{t:4,tx:"앞잠자리 뒤잠자리"},{t:8,tx:"날아라~ 산 넘어"},{t:12,tx:"물 건너~"}],dur:15},

{id:45,cat:"동요",title:"머리 어깨 무릎 발",icon:"🦶",diff:"쉬움",dc:"diff-easy",bpm:130,
melody:[
{t:0,d:.35,f:C4,s:"머"},{t:.35,d:.35,f:D4,s:"리"},{t:.7,d:.35,f:E4,s:"어"},{t:1.05,d:.35,f:F4,s:"깨"},
{t:1.4,d:.35,f:G4,s:"무"},{t:1.75,d:.35,f:A4,s:"릎"},{t:2.1,d:.7,f:G4,s:"발"},
{t:2.8,d:.35,f:G4,s:"무"},{t:3.15,d:.35,f:A4,s:"릎"},{t:3.5,d:.7,f:G4,s:"발"},
{t:4.2,d:.35,f:C4,s:"머"},{t:4.55,d:.35,f:D4,s:"리"},{t:4.9,d:.35,f:E4,s:"어"},{t:5.25,d:.35,f:F4,s:"깨"},
{t:5.6,d:.35,f:G4,s:"무"},{t:5.95,d:.35,f:A4,s:"릎"},{t:6.3,d:.7,f:G4,s:"발"},
{t:7,d:.35,f:G4,s:"무"},{t:7.35,d:.35,f:A4,s:"릎"},{t:7.7,d:.7,f:G4,s:"발"},
{t:8.4,d:.35,f:E4,s:"눈"},{t:8.75,d:.35,f:F4,s:"과"},{t:9.1,d:.35,f:G4,s:"귀"},
{t:9.45,d:.35,f:E4,s:"와"},{t:9.8,d:.35,f:D4,s:"입"},{t:10.15,d:.5,f:C4,s:"과"},
{t:10.65,d:.35,f:D4,s:"코"},{t:11,d:1,f:C4,s:"~"},
{t:12,d:.35,f:C4,s:"머"},{t:12.35,d:.35,f:D4,s:"리"},{t:12.7,d:.35,f:E4,s:"어"},{t:13.05,d:.35,f:F4,s:"깨"},
{t:13.4,d:.35,f:G4,s:"무"},{t:13.75,d:.35,f:A4,s:"릎"},{t:14.1,d:.7,f:G4,s:"발"},
{t:14.8,d:.35,f:G4,s:"무"},{t:15.15,d:.35,f:A4,s:"릎"},{t:15.5,d:1,f:G4,s:"발"}
],lyrics:[{t:0,tx:"머리 어깨 무릎 발"},{t:2.8,tx:"무릎 발"},{t:4.2,tx:"머리 어깨 무릎 발"},{t:7,tx:"무릎 발"},{t:8.4,tx:"눈과 귀와 입과 코"},{t:12,tx:"머리 어깨 무릎 발"},{t:14.8,tx:"무릎 발"}],dur:17}
];

if(typeof SONGS!=='undefined'){NEW_SONGS.forEach(function(s){SONGS.push(s);});}

// ===== NORAEBANG NUMBERS =====
var nbNumbers={};
if(typeof SONGS!=='undefined'){
  SONGS.forEach(function(s,i){nbNumbers[s.id]=1001+i;s.nbNum=1001+i;});
}

// ===== NEW ACHIEVEMENTS =====
var NEW_ACH=[
{id:'songs_50',name:'노래의 신',desc:'50곡 부르기',icon:'🎵',check:function(s){return(s.totalSongs||0)>=50;}},
{id:'grade_s10',name:'S등급 마스터',desc:'10곡에서 S등급',icon:'👑',check:function(){var hs;try{hs=JSON.parse(localStorage.getItem('sv3_hs')||'{}');}catch(e){return false;}var c=0;if(typeof SONGS!=='undefined')SONGS.forEach(function(x){if(hs[x.id]&&hs[x.id].g==='S')c++;});return c>=10;}},
{id:'combo_100',name:'콤보 신화',desc:'100 콤보 달성',icon:'💫',check:function(s){return(s.bestCombo||0)>=100;}},
{id:'all_gayo',name:'가요 마스터',desc:'모든 가요/민요 부르기',icon:'🇰🇷',check:function(){var sp;try{sp=JSON.parse(localStorage.getItem('sv6_stats')||'{}').songPlays||{};}catch(e){return false;}if(typeof SONGS==='undefined')return false;return SONGS.filter(function(x){return x.cat==='가요/민요';}).every(function(x){return sp[x.id];});}},
{id:'challenge_clear',name:'챌린지 클리어',desc:'일일 챌린지 완료',icon:'🏅',check:function(){try{var cd=JSON.parse(localStorage.getItem('sv7_challenge')||'{}');return cd.completed===true;}catch(e){return false;}}},
{id:'queue_5',name:'DJ 입문',desc:'재생 큐 5곡 연속 부르기',icon:'🎧',check:function(){try{return parseInt(localStorage.getItem('sv7_queueStreak')||'0')>=5;}catch(e){return false;}}},
{id:'all_clear_45',name:'퍼펙트 클리어',desc:'45곡 전부 부르기',icon:'🏆',check:function(){var sp;try{sp=JSON.parse(localStorage.getItem('sv6_stats')||'{}').songPlays||{};}catch(e){return false;}if(typeof SONGS==='undefined')return false;return SONGS.every(function(x){return sp[x.id];});}},
{id:'pitch_98',name:'절대 음감',desc:'한 곡에서 음정 98% 이상',icon:'💯',check:function(){try{return localStorage.getItem('sv7_pitch98')==='true';}catch(e){return false;}}}
];

if(typeof ACHIEVEMENTS!=='undefined'){NEW_ACH.forEach(function(a){ACHIEVEMENTS.push(a);});}

// ===== DAILY CHALLENGE SYSTEM =====
var challengeState={songs:[],scores:{},completed:false};

function getChallengeDate(){return new Date().toISOString().slice(0,10);}

function getDailyChallengeData(){
  var today=getChallengeDate();
  try{var saved=JSON.parse(localStorage.getItem('sv7_challenge')||'{}');
  if(saved.date===today)return saved;}catch(e){}
  if(typeof SONGS==='undefined'||SONGS.length<3)return{date:today,songIds:[],scores:{},completed:false};
  var d=new Date();var seed=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
  var ids=[];var pool=SONGS.slice();
  for(var i=0;i<3&&pool.length>0;i++){var idx=(seed*(i+7)+i*31)%pool.length;ids.push(pool[idx].id);pool.splice(idx,1);}
  var data={date:today,songIds:ids,scores:{},completed:false};
  localStorage.setItem('sv7_challenge',JSON.stringify(data));
  return data;
}

function updateChallengeScore(songId,score){
  var data=getDailyChallengeData();
  if(data.songIds.indexOf(songId)===-1)return;
  if(!data.scores[songId]||score>data.scores[songId])data.scores[songId]=score;
  var allDone=data.songIds.every(function(id){return data.scores[id]!==undefined;});
  if(allDone)data.completed=true;
  localStorage.setItem('sv7_challenge',JSON.stringify(data));
  if(allDone&&typeof checkAchievements==='function'){
    try{var stats=JSON.parse(localStorage.getItem('sv6_stats')||'{}');checkAchievements(stats);}catch(e){}
  }
}

// ===== QUEUE SYSTEM =====
var songQueue=[];
var queueStreak=0;

function addToQueue(songId){
  if(songQueue.indexOf(songId)===-1){songQueue.push(songId);renderQueueBadge();}
}
function removeFromQueue(songId){
  var idx=songQueue.indexOf(songId);if(idx>=0)songQueue.splice(idx,1);renderQueueBadge();
}
function getNextInQueue(){return songQueue.length>0?songQueue.shift():null;}
function renderQueueBadge(){
  var badge=document.getElementById('queueBadge');
  if(badge){badge.textContent=songQueue.length;badge.style.display=songQueue.length>0?'inline-block':'none';}
}

// ===== CHORUS EFFECT =====
var chorusNode1=null,chorusNode2=null,chorusGain=null,chorusOn=false;

function setupChorus(){
  if(typeof audioCtx==='undefined'||!audioCtx||chorusNode1)return;
  try{
    chorusNode1=audioCtx.createDelay(0.05);chorusNode1.delayTime.value=0.025;
    chorusNode2=audioCtx.createDelay(0.05);chorusNode2.delayTime.value=0.035;
    chorusGain=audioCtx.createGain();chorusGain.gain.value=0;
    var lfo=audioCtx.createOscillator();lfo.frequency.value=0.5;lfo.type='sine';
    var lfoGain=audioCtx.createGain();lfoGain.gain.value=0.002;
    lfo.connect(lfoGain);lfoGain.connect(chorusNode1.delayTime);
    var lfo2=audioCtx.createOscillator();lfo2.frequency.value=0.7;lfo2.type='sine';
    var lfoGain2=audioCtx.createGain();lfoGain2.gain.value=0.003;
    lfo2.connect(lfoGain2);lfoGain2.connect(chorusNode2.delayTime);
    chorusNode1.connect(chorusGain);chorusNode2.connect(chorusGain);
    chorusGain.connect(audioCtx.destination);
    lfo.start();lfo2.start();
  }catch(e){chorusNode1=null;}
}

function toggleChorus(){
  chorusOn=!chorusOn;
  if(chorusGain)chorusGain.gain.value=chorusOn?0.25:0;
  var btn=document.getElementById('btnChorus');
  if(btn)btn.classList.toggle('active',chorusOn);
}

// ===== SEO META TAGS =====
function injectSEO(){
  var head=document.head;
  var metas=[
    {p:'og:title',c:'StarVoice v7 - AI 노래방'},
    {p:'og:description',c:'45곡 AI 음정 분석 노래방. 실시간 음정 감지, 리버브/에코/코러스, 일일 챌린지, 업적 시스템'},
    {p:'og:type',c:'website'},
    {p:'og:locale',c:'ko_KR'},
    {n:'twitter:card',c:'summary_large_image'},
    {n:'twitter:title',c:'StarVoice v7 - AI 노래방'},
    {n:'twitter:description',c:'45곡 AI 음정 분석 K-노래방 PWA'},
    {n:'description',c:'StarVoice v7: 45곡 AI 음정 분석 노래방 PWA. McLeod Pitch Method 실시간 감지, WebGL 셰이더, 리버브/에코/코러스 이펙트, 일일 챌린지, 재생 큐, 20개 업적, 통계 대시보드'}
  ];
  metas.forEach(function(m){
    var tag=document.createElement('meta');
    if(m.p)tag.setAttribute('property',m.p);
    if(m.n)tag.setAttribute('name',m.n);
    tag.setAttribute('content',m.c);
    head.appendChild(tag);
  });
  var ld=document.createElement('script');ld.type='application/ld+json';
  ld.textContent=JSON.stringify({
    "@context":"https://schema.org","@type":"WebApplication",
    "name":"StarVoice v7","applicationCategory":"EntertainmentApplication",
    "operatingSystem":"Web","description":"45곡 AI 음정 분석 K-노래방 PWA",
    "offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"},
    "inLanguage":"ko"
  });
  head.appendChild(ld);
}

// ===== ACCESSIBILITY =====
function injectA11y(){
  var skip=document.createElement('a');
  skip.href='#songSelect';skip.className='skip-link';
  skip.textContent='본문으로 건너뛰기';
  skip.style.cssText='position:fixed;top:-100px;left:16px;z-index:9999;background:var(--accent);color:#fff;padding:8px 16px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;transition:top .2s';
  skip.addEventListener('focus',function(){skip.style.top='8px';});
  skip.addEventListener('blur',function(){skip.style.top='-100px';});
  document.body.insertBefore(skip,document.body.firstChild);
}

// ===== INJECT UI ELEMENTS =====
function injectUI(){
  // Update header
  var h1=document.querySelector('#header h1');
  if(h1)h1.textContent='StarVoice v7';
  var badge=document.getElementById('songCountBadge');
  if(badge&&typeof SONGS!=='undefined')badge.textContent=SONGS.length;

  // Add chorus button to sing controls
  var controls=document.getElementById('singControls');
  if(controls){
    var chorusBtn=document.createElement('button');chorusBtn.id='btnChorus';
    chorusBtn.title='코러스';chorusBtn.textContent='🎹';
    chorusBtn.onclick=function(){setupChorus();toggleChorus();};
    var stopBtn=document.getElementById('btnStop');
    if(stopBtn)controls.insertBefore(chorusBtn,stopBtn);
  }

  // Add queue button to header
  var hdrBtns=document.querySelector('.hdr-btns');
  if(hdrBtns){
    var qBtn=document.createElement('button');qBtn.id='btnQueue';qBtn.setAttribute('aria-label','재생 큐 보기');
    qBtn.innerHTML='📋 <span id="queueBadge" style="display:none;background:var(--accent);color:#fff;font-size:9px;padding:1px 5px;border-radius:8px;margin-left:2px">0</span>';
    qBtn.onclick=function(){showQueueModal();};
    hdrBtns.insertBefore(qBtn,hdrBtns.firstChild);
  }

  // Add challenge tab to bottom nav
  var nav=document.getElementById('bottomNav');
  if(nav){
    var chalBtn=document.createElement('button');chalBtn.id='navChallenge';
    chalBtn.onclick=function(){switchTabV7('challenge');};
    chalBtn.innerHTML='<span class="nav-icon">🏅</span>챌린지';
    var achieveBtn=document.getElementById('navAchieve');
    if(achieveBtn)nav.insertBefore(chalBtn,achieveBtn);
  }

  // Add challenge panel
  var app=document.getElementById('app');
  if(app){
    var cp=document.createElement('div');cp.id='challengePanel';
    cp.style.cssText='flex:1;overflow-y:auto;padding:16px;display:none;flex-direction:column;gap:12px';
    var statsP=document.getElementById('statsPanel');
    if(statsP)app.insertBefore(cp,statsP);
  }

  // Inject CSS for new features
  var style=document.createElement('style');
  style.textContent=
    '.queue-modal{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--modal-bg);z-index:50;flex-direction:column;align-items:center;justify-content:center;padding:20px}'+
    '.queue-modal.show{display:flex}'+
    '.queue-box{background:var(--modal-box-bg);border:2px solid var(--header-border);border-radius:16px;padding:24px;max-width:400px;width:100%;max-height:70vh;overflow-y:auto}'+
    '.queue-item{display:flex;align-items:center;gap:10px;padding:8px;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px}'+
    '.queue-item .qi-rm{background:none;border:none;color:#f44336;cursor:pointer;font-size:16px;padding:0 4px}'+
    '.chal-card{background:var(--card-bg);border:2px solid var(--card-border);border-radius:14px;padding:16px;transition:all .3s}'+
    '.chal-card.done{border-color:var(--accent-gold);box-shadow:0 0 16px rgba(255,215,0,.15)}'+
    '.chal-header{text-align:center;margin-bottom:16px}'+
    '.chal-header h3{color:var(--accent);font-size:20px;margin-bottom:4px}'+
    '.chal-total{font-size:36px;font-weight:900;color:var(--accent-gold);text-align:center;margin:12px 0}'+
    '.song-card .nb-num{position:absolute;bottom:8px;left:10px;font-size:10px;color:var(--text-muted);font-family:monospace}'+
    '.song-card .q-btn{position:absolute;top:8px;right:58px;font-size:14px;background:none;border:none;cursor:pointer;opacity:.5;transition:opacity .2s;padding:0}'+
    '.song-card .q-btn:hover{opacity:1}'+
    '@media(max-width:600px){.queue-box{max-width:calc(100vw - 40px)}}';
  document.head.appendChild(style);

  // Add queue modal
  var qm=document.createElement('div');qm.className='queue-modal';qm.id='queueModal';
  qm.innerHTML='<div class="queue-box" id="queueBox"></div>';
  document.body.appendChild(qm);
}

// ===== QUEUE MODAL =====
function showQueueModal(){
  var m=document.getElementById('queueModal');if(!m)return;
  m.classList.add('show');
  var box=document.getElementById('queueBox');if(!box)return;
  var html='<h3 style="color:var(--accent);margin-bottom:12px">📋 재생 큐 ('+songQueue.length+'곡)</h3>';
  if(songQueue.length===0){
    html+='<div style="color:var(--text-muted);text-align:center;padding:20px">큐가 비어있습니다.<br>곡 카드의 ➕ 버튼으로 추가하세요.</div>';
  }else{
    songQueue.forEach(function(id,i){
      var song;if(typeof SONGS!=='undefined')song=SONGS.find(function(s){return s.id===id;});
      if(!song)return;
      html+='<div class="queue-item"><span style="color:var(--accent-gold);font-weight:900;width:20px">'+(i+1)+'</span>'+
        '<span>'+song.icon+' '+song.title+'</span>'+
        '<button class="qi-rm" data-qid="'+id+'">✕</button></div>';
    });
    html+='<div style="text-align:center;margin-top:12px"><button class="btn-retry" onclick="playQueue()">▶ 큐 재생</button></div>';
  }
  html+='<div style="text-align:center;margin-top:12px"><button class="btn-back" onclick="document.getElementById(\'queueModal\').classList.remove(\'show\')">닫기</button></div>';
  box.innerHTML=html;
  setTimeout(function(){
    box.querySelectorAll('.qi-rm').forEach(function(b){
      b.onclick=function(){removeFromQueue(parseInt(b.getAttribute('data-qid')));showQueueModal();};
    });
  },0);
}

window.playQueue=function(){
  document.getElementById('queueModal').classList.remove('show');
  var nextId=getNextInQueue();
  if(nextId&&typeof SONGS!=='undefined'&&typeof pickSong==='function'){
    var song=SONGS.find(function(s){return s.id===nextId;});
    if(song){queueStreak++;localStorage.setItem('sv7_queueStreak',String(queueStreak));pickSong(song,false);}
  }
};

// ===== CHALLENGE PANEL =====
function renderChallenge(){
  var p=document.getElementById('challengePanel');if(!p)return;
  var data=getDailyChallengeData();
  var html='<div class="chal-header"><h3>🏅 오늘의 챌린지</h3><div style="color:var(--text-secondary);font-size:13px">'+data.date+'</div></div>';

  if(typeof SONGS==='undefined'){p.innerHTML=html+'<div style="color:var(--text-muted);text-align:center">로딩 중...</div>';return;}

  var totalScore=0;var doneCount=0;
  data.songIds.forEach(function(id){
    var song=SONGS.find(function(s){return s.id===id;});
    if(!song)return;
    var sc=data.scores[id];
    var done=sc!==undefined;
    if(done){totalScore+=sc;doneCount++;}
    html+='<div class="chal-card '+(done?'done':'')+'">'+
      '<div style="display:flex;align-items:center;gap:12px">'+
      '<span style="font-size:32px">'+song.icon+'</span>'+
      '<div style="flex:1"><div style="font-weight:700;color:var(--text-primary)">'+song.title+'</div>'+
      '<div style="font-size:11px;color:var(--text-secondary)">'+song.cat+' &middot; '+song.diff+'</div></div>'+
      (done?'<div style="text-align:right"><div style="font-size:24px;font-weight:900;color:var(--accent-gold)">'+sc+'</div><div style="font-size:10px;color:var(--text-secondary)">점</div></div>':
      '<button class="btn-retry" style="padding:8px 16px;font-size:12px" onclick="playChalSong('+id+')">부르기</button>')+
      '</div></div>';
  });

  if(data.completed){
    html+='<div class="chal-total">🎉 합산: '+totalScore+'점</div>';
    html+='<div style="text-align:center;color:var(--accent-gold);font-weight:700">오늘의 챌린지 완료!</div>';
  }else{
    html+='<div style="text-align:center;color:var(--text-secondary);font-size:13px;margin-top:8px">'+doneCount+'/3 완료</div>';
  }

  p.innerHTML=html;
}

window.playChalSong=function(id){
  if(typeof SONGS==='undefined'||typeof pickSong!=='function')return;
  var song=SONGS.find(function(s){return s.id===id;});
  if(song){switchTabV7('songs');setTimeout(function(){pickSong(song,false);},100);}
};

// ===== EXTENDED TAB NAVIGATION =====
function switchTabV7(tab){
  if(typeof switchTab==='function'&&(tab==='songs'||tab==='stats'||tab==='achieve')){switchTab(tab);}
  var cp=document.getElementById('challengePanel');
  if(cp)cp.style.display=tab==='challenge'?'flex':'none';
  if(tab==='challenge'){
    document.getElementById('songSelect').style.display='none';
    document.getElementById('statsPanel').style.display='none';
    document.getElementById('achievePanel').style.display='none';
    renderChallenge();
  }
  document.querySelectorAll('#bottomNav button').forEach(function(b){b.classList.remove('active');});
  var navId={songs:'navSongs',stats:'navStats',achieve:'navAchieve',challenge:'navChallenge'};
  var activeBtn=document.getElementById(navId[tab]);
  if(activeBtn)activeBtn.classList.add('active');
}

// Override switchTab globally
var origSwitchTab=typeof switchTab==='function'?switchTab:null;
window.switchTab=function(tab){
  switchTabV7(tab);
};

// ===== HOOK INTO EXISTING FUNCTIONS =====

// Hook endSong to update challenge + queue auto-play
var origEndSong=typeof endSong==='function'?endSong:null;
window.endSong=function(){
  if(origEndSong)origEndSong();

  // Update challenge score
  if(typeof curSong!=='undefined'&&curSong){
    var fs=0;
    if(typeof totalN!=='undefined'&&typeof score!=='undefined'){
      fs=totalN>0?Math.min(100,Math.round(score/Math.max(1,totalN))):0;
    }
    updateChallengeScore(curSong.id,fs);

    // Check pitch 98% achievement
    if(typeof pitchSum!=='undefined'&&typeof totalN!=='undefined'&&totalN>0){
      var pa=Math.round(pitchSum/totalN);
      if(pa>=98)localStorage.setItem('sv7_pitch98','true');
    }
  }

  // Auto-play next in queue after delay
  if(songQueue.length>0){
    var nextId=songQueue[0];
    var rScreen=document.getElementById('resultScreen');
    if(rScreen){
      var nextBtn=document.createElement('button');nextBtn.className='btn-retry';
      nextBtn.style.background='linear-gradient(135deg,#6366f1,#a855f7)';
      nextBtn.textContent='▶ 다음 곡 (큐: '+songQueue.length+')';
      nextBtn.onclick=function(){window.playQueue();};
      var btnsDiv=rScreen.querySelector('.res-btns');
      if(btnsDiv)btnsDiv.appendChild(nextBtn);
    }
  }
};

// Hook renderSongCard to add queue button and noraebang number
var origRenderSongCard=typeof renderSongCard==='function'?renderSongCard:null;
window.renderSongCard=function(container,song,hs,idx){
  if(origRenderSongCard)origRenderSongCard(container,song,hs,idx);
  var cards=container.querySelectorAll('.song-card');
  var card=cards[cards.length-1];
  if(!card)return;

  // Add noraebang number
  if(song.nbNum){
    var numEl=document.createElement('span');numEl.className='nb-num';
    numEl.textContent='#'+song.nbNum;
    card.appendChild(numEl);
  }

  // Add queue button
  var qBtn=document.createElement('button');qBtn.className='q-btn';
  qBtn.textContent='➕';qBtn.title='큐에 추가';
  qBtn.setAttribute('aria-label',song.title+' 큐에 추가');
  qBtn.onclick=function(e){e.stopPropagation();addToQueue(song.id);qBtn.textContent='✅';setTimeout(function(){qBtn.textContent='➕';},1500);};
  card.appendChild(qBtn);
};

// Hook renderList to include noraebang number search
var origRenderList=typeof renderList==='function'?renderList:null;
if(origRenderList){
  window.renderList=function(){
    origRenderList();
    // Enhance search to support noraebang number
    var si=document.getElementById('searchInput');
    if(si){
      si.placeholder='노래 검색 또는 번호 입력... (/ 단축키)';
      var origHandler=si.oninput;
      si.oninput=function(){
        var q=si.value;
        if(/^\d{4}$/.test(q.trim())){
          var num=parseInt(q.trim());
          if(typeof SONGS!=='undefined'){
            var found=SONGS.find(function(s){return s.nbNum===num;});
            if(found&&typeof pickSong==='function'){pickSong(found,false);si.value='';return;}
          }
        }
        if(typeof searchQuery!=='undefined')window.searchQuery=q;
        origRenderList();
      };
    }
  };
}

// Update share card to say v7
var origDownloadShareCard=typeof downloadShareCard==='function'?downloadShareCard:null;
window.downloadShareCard=function(){
  if(!origDownloadShareCard)return;
  origDownloadShareCard();
};

// ===== INIT =====
function initV7(){
  injectSEO();
  injectA11y();
  injectUI();
  getDailyChallengeData();

  // Connect chorus to mic if already active
  if(typeof micSource!=='undefined'&&micSource&&typeof audioCtx!=='undefined'&&audioCtx){
    setupChorus();
    if(chorusNode1)micSource.connect(chorusNode1);
    if(chorusNode2)micSource.connect(chorusNode2);
  }

  // Re-render with new songs
  if(typeof renderList==='function')renderList();

  console.log('[v7] patch loaded — Songs:',
    typeof SONGS!=='undefined'?SONGS.length:'?',
    'Achievements:',typeof ACHIEVEMENTS!=='undefined'?ACHIEVEMENTS.length:'?',
    'Queue:',songQueue.length,'Challenge:',getDailyChallengeData().date);
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initV7);}
else{initV7();}

})();
