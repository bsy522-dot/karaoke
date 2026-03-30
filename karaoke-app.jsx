import { useState, useEffect, useRef, useCallback } from "react";
import * as Tone from "tone";

const NOTE_NAMES = ["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"];
function genNotes(dur,bpm,key){
  const notes=[],beat=60/bpm,ki=NOTE_NAMES.indexOf(key.replace("m","")),sc=key.includes("m")?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11];
  let t=2;
  while(t<dur-2){const pL=4+Math.floor(Math.random()*6);for(let i=0;i<pL&&t<dur-2;i++){const ni=(ki+sc[Math.floor(Math.random()*sc.length)])%12,nd=beat*(Math.random()>0.3?1:2);notes.push({time:+(t.toFixed(2)),note:ni,octave:4+(Math.random()>0.7?1:0),duration:+(nd.toFixed(2))});t+=nd+(Math.random()>0.5?beat*0.5:0);}t+=beat*(2+Math.floor(Math.random()*4));}
  return notes;
}

const LYRICS={
  1:[{time:2,text:"너를 보내고 돌아선 거리"},{time:6,text:"가슴에 박힌 가시가 아파"},{time:10,text:"잡을 수 없는 너의 뒷모습"},{time:14,text:"흐르는 눈물 멈출 수 없어"},{time:19,text:"매일 밤 네 이름을 불러봐도"},{time:23,text:"돌아오지 않는 메아리뿐"},{time:27,text:"이 아픔이 지나갈 수 있을까"},{time:31,text:"시간아 제발 빨리 흘러가줘"},{time:36,text:"뽑을 수 없는 가시처럼"},{time:40,text:"너는 내 안에 남아있어"},{time:44,text:"아프지만 지울 수가 없어"},{time:48,text:"영원히 남을 상처인 걸"},{time:52,text:"바보처럼 너만 기다려"},{time:56,text:"이 가시를 안고 살아갈래"}],
  2:[{time:2,text:"하루가 일 년 같은 이 밤에"},{time:6,text:"네가 너무 보고 싶어져"},{time:10,text:"사진 속 웃고 있는 네 얼굴"},{time:14,text:"손끝으로 쓸어보네"},{time:19,text:"보고 싶다 보고 싶다"},{time:23,text:"이 말밖에 할 수가 없어"},{time:27,text:"꿈에서라도 만날 수 있다면"},{time:31,text:"이 밤이 끝나지 않기를"},{time:36,text:"거리에 흩날리는 낙엽처럼"},{time:40,text:"흩어진 우리 추억들이"},{time:44,text:"바람에 실려 내게 돌아와"},{time:48,text:"눈물이 또 흘러내려"},{time:52,text:"보고 싶다 한 번만이라도"},{time:56,text:"너의 목소리를 듣고 싶어"}],
  3:[{time:2,text:"너의 말이 전부 거짓이란 걸"},{time:5,text:"알면서도 믿고 싶었어"},{time:8,text:"달콤한 속삭임에 속아 넘어가"},{time:11,text:"바보 같은 나였어"},{time:14,text:"거짓말 거짓말 다 거짓말"},{time:17,text:"네 입술에서 흘러나온"},{time:20,text:"사랑한다는 그 한마디가"},{time:23,text:"전부 거짓이었잖아"},{time:27,text:"돌이킬 수 없는 걸 알아"},{time:30,text:"그래도 미워할 수 없어"},{time:33,text:"어리석은 내 마음이 원해"},{time:36,text:"한 번만 더 거짓말해줘"},{time:40,text:"사랑한다고 말해줘"},{time:43,text:"비록 그게 거짓이라 해도"},{time:46,text:"마지막으로 한 번만"},{time:49,text:"예쁜 거짓말을 해줘"},{time:53,text:"거짓말이라도 좋으니까"},{time:56,text:"떠나지 말아줘 제발"}],
  4:[{time:2,text:"하얀 눈이 내리는 겨울 밤"},{time:7,text:"너와 걸었던 그 길을 걸어"},{time:12,text:"발자국마다 피어나는 추억"},{time:17,text:"눈꽃처럼 아름다웠던 날들"},{time:22,text:"차가운 바람이 볼을 스쳐도"},{time:27,text:"네 온기가 아직 남아있어"},{time:32,text:"이 겨울이 지나고 봄이 와도"},{time:37,text:"너를 잊을 수 있을까"},{time:42,text:"눈의 꽃이 피고 또 지듯이"},{time:47,text:"우리 사랑도 계절을 따라"},{time:52,text:"언젠가 다시 피어날 거야"},{time:57,text:"기다릴게 그 봄날까지"}],
  5:[{time:1.5,text:"오늘도 네 생각에 웃음이 나"},{time:4,text:"세상이 달라 보이는 마법"},{time:7,text:"너를 만난 그 순간부터"},{time:10,text:"매일이 선물 같아"},{time:13,text:"사랑스러워 너의 모든 게"},{time:16,text:"눈웃음부터 걸음걸이까지"},{time:19,text:"하나하나 빠짐없이 다"},{time:22,text:"내 마음을 훔쳐가 버렸어"},{time:26,text:"함께하는 시간이 너무 짧아"},{time:29,text:"시계를 멈추고 싶은 밤"},{time:32,text:"네 곁에 있는 것만으로도"},{time:35,text:"세상을 다 가진 기분이야"},{time:39,text:"사랑스러워 이런 내 맘이"},{time:42,text:"부끄럽지만 말할게"},{time:45,text:"너를 만나서 행복해"},{time:48,text:"영원히 함께 하고 싶어"},{time:52,text:"사랑해 사랑해"},{time:55,text:"천 번 만 번을 말해도 부족해"}],
  6:[{time:2,text:"미안해 이 말밖에 할 수 없어"},{time:7,text:"너에게 준 상처가 너무 깊어"},{time:12,text:"돌이킬 수 없는 시간 앞에"},{time:17,text:"무릎을 꿇고 빌어보지만"},{time:22,text:"사랑한다 이 한마디를"},{time:27,text:"왜 제때 하지 못했을까"},{time:32,text:"후회가 밀려오는 이 새벽에"},{time:37,text:"혼자서 울고 있어"},{time:42,text:"미안해 사랑해 보고 싶어"},{time:47,text:"이 세 마디가 전부인 나를"},{time:52,text:"용서해줄 수 있을까"},{time:57,text:"다시 한번만 기회를 줘"}],
  7:[{time:2,text:"처음 눈이 마주친 순간"},{time:5.5,text:"심장이 멈추는 줄 알았어"},{time:9,text:"말도 안 되는 이 떨림이"},{time:12.5,text:"사랑의 시작인 걸"},{time:16,text:"내 사람아 내 곁에 있어줘"},{time:19.5,text:"이 세상 누구보다 소중한"},{time:23,text:"단 하나뿐인 너를"},{time:26.5,text:"절대 놓치고 싶지 않아"},{time:30,text:"비가 와도 바람이 불어도"},{time:33.5,text:"네 손을 꼭 잡고 걸어갈게"},{time:37,text:"험한 세상 속에서도"},{time:40.5,text:"너만은 지켜줄 테니까"},{time:44,text:"내 사람아 영원히"},{time:47.5,text:"변하지 않을 이 마음"},{time:51,text:"하늘이 무너져도"},{time:55,text:"너를 사랑할 거야"}],
  8:[{time:1.5,text:"오늘 밤은 신나게 놀아보자"},{time:4,text:"고민 따위 다 잊어버려"},{time:6.5,text:"음악에 몸을 맡기고서"},{time:9,text:"리듬을 타 봐 자유롭게"},{time:12,text:"빠라빠빠 노래를 불러"},{time:14.5,text:"온 세상이 무대인 것처럼"},{time:17,text:"두 손을 높이 올리고"},{time:19.5,text:"소리 질러 봐"},{time:22.5,text:"밤새도록 춤을 춰 볼까"},{time:25,text:"내일 걱정은 내일의 나에게"},{time:27.5,text:"지금 이 순간이 전부니까"},{time:30,text:"마음껏 즐겨봐"},{time:33.5,text:"빠라빠빠 랄랄라"},{time:36,text:"멈추지 마 이 리듬 위에서"},{time:38.5,text:"우리 함께 노래하자"},{time:41,text:"밤이 끝날 때까지"},{time:44.5,text:"자 다 같이 소리 질러"},{time:47,text:"하나 둘 셋 빠라빠빠"},{time:50,text:"이 밤은 우리 거야"},{time:53,text:"끝까지 불태워 봐"},{time:56,text:"빠라빠빠 빠빠빠"}],
};

const SONGS=[
  {id:1,title:"가시",artist:"버즈",duration:60,difficulty:"어려움",genre:"발라드",cover:"🌹",key:"Bb",bpm:68,notes:genNotes(60,68,"Bb")},
  {id:2,title:"보고 싶다",artist:"김범수",duration:60,difficulty:"어려움",genre:"발라드",cover:"🌙",key:"G",bpm:72,notes:genNotes(60,72,"G")},
  {id:3,title:"거짓말",artist:"god",duration:60,difficulty:"보통",genre:"댄스",cover:"🎭",key:"F#m",bpm:128,notes:genNotes(60,128,"F#m")},
  {id:4,title:"눈의 꽃",artist:"박효신",duration:60,difficulty:"어려움",genre:"발라드",cover:"❄️",key:"C",bpm:66,notes:genNotes(60,66,"C")},
  {id:5,title:"한 발짝 더",artist:"god",duration:60,difficulty:"보통",genre:"댄스",cover:"👟",key:"D",bpm:120,notes:genNotes(60,120,"D")},
  {id:6,title:"미안하다 사랑한다",artist:"김건모",duration:60,difficulty:"보통",genre:"발라드",cover:"💔",key:"Eb",bpm:70,notes:genNotes(60,70,"Eb")},
  {id:7,title:"내 사람",artist:"SG워너비",duration:60,difficulty:"보통",genre:"발라드",cover:"💕",key:"F",bpm:78,notes:genNotes(60,78,"F")},
  {id:8,title:"빠라빠빠",artist:"DJ신나",duration:60,difficulty:"쉬움",genre:"댄스",cover:"🪩",key:"Ab",bpm:135,notes:genNotes(60,135,"Ab")},
];

function freqToNote(f){if(f<50)return null;const n=12*(Math.log2(f/440))+9;return{note:((Math.round(n)%12)+12)%12,octave:Math.floor((Math.round(n)+3)/12)+4,cents:(n-Math.round(n))*100};}
function nSemi(n,o){return o*12+n;}

const COMMUNITY=[
  {id:1,user:"추억의가수",avatar:"🎤",song:"가시",artist:"버즈",score:94,likes:567,comments:42,time:"1시간 전",badge:"🏆"},
  {id:2,user:"2000감성",avatar:"🎵",song:"보고 싶다",artist:"김범수",score:91,likes:334,comments:28,time:"2시간 전",badge:"⭐"},
  {id:3,user:"갓오브댄스",avatar:"🎶",song:"거짓말",artist:"god",score:88,likes:256,comments:19,time:"4시간 전",badge:"👑"},
  {id:4,user:"발라드왕",avatar:"🎙️",song:"눈의 꽃",artist:"박효신",score:96,likes:789,comments:56,time:"5시간 전",badge:"💎"},
  {id:5,user:"노래사랑",avatar:"🎧",song:"내 사람",artist:"SG워너비",score:85,likes:178,comments:11,time:"7시간 전",badge:""},
];

// ─── Pitch + Recording ──────────────────────────────────────────
function useAudioInput(){
  const ctxRef=useRef(null),anRef=useRef(null),strRef=useRef(null),bufRef=useRef(null);
  const modeRef=useRef("none");
  const recRef=useRef(null),chunksRef=useRef([]);

  const start=useCallback(async()=>{
    try{
      const s=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});
      strRef.current=s;
      const ctx=new(window.AudioContext||window.webkitAudioContext)();ctxRef.current=ctx;
      const an=ctx.createAnalyser();an.fftSize=4096;anRef.current=an;
      bufRef.current=new Float32Array(an.fftSize);
      ctx.createMediaStreamSource(s).connect(an);
      modeRef.current="mic";

      // Start recording
      chunksRef.current=[];
      try{
        const rec=new MediaRecorder(s,{mimeType:'audio/webm;codecs=opus'});
        rec.ondataavailable=e=>{if(e.data.size>0)chunksRef.current.push(e.data);};
        rec.start(100);
        recRef.current=rec;
      }catch(e){
        try{
          const rec=new MediaRecorder(s);
          rec.ondataavailable=e=>{if(e.data.size>0)chunksRef.current.push(e.data);};
          rec.start(100);
          recRef.current=rec;
        }catch(e2){console.log("Recording not supported");}
      }
      return true;
    }catch(e){
      modeRef.current="sim";
      return true;
    }
  },[]);

  const stop=useCallback(()=>{
    let blob=null;
    if(recRef.current&&recRef.current.state!=="inactive"){
      recRef.current.stop();
      blob=new Promise(res=>{
        recRef.current.onstop=()=>{
          if(chunksRef.current.length>0){
            const b=new Blob(chunksRef.current,{type:recRef.current.mimeType||'audio/webm'});
            res(URL.createObjectURL(b));
          }else res(null);
        };
      });
    }
    strRef.current?.getTracks().forEach(t=>t.stop());
    ctxRef.current?.close().catch(()=>{});
    modeRef.current="none";
    return blob;
  },[]);

  const getPitch=useCallback((tgt)=>{
    if(modeRef.current==="mic"&&anRef.current&&bufRef.current){
      anRef.current.getFloatTimeDomainData(bufRef.current);
      const buf=bufRef.current,sr=ctxRef.current.sampleRate;
      let rms=0;for(let i=0;i<buf.length;i++)rms+=buf[i]*buf[i];
      rms=Math.sqrt(rms/buf.length);
      if(rms<0.008)return null;
      const SZ=buf.length,cr=new Float32Array(SZ);
      for(let l=0;l<SZ;l++){let s=0;for(let i=0;i<SZ-l;i++)s+=buf[i]*buf[i+l];cr[l]=s;}
      let d=0;while(d<SZ&&cr[d]>0)d++;if(d>=SZ)return null;
      let mv=-1,mp=-1;for(let i=d;i<SZ;i++){if(cr[i]>mv){mv=cr[i];mp=i;}}
      if(mp===-1||mv<0.01*cr[0])return null;
      const f=sr/mp;if(f<80||f>1200)return null;
      return{freq:f,volume:rms};
    }
    if(modeRef.current==="sim"&&tgt){
      const r=Math.random(),bn=tgt.note,bo=tgt.octave;let sn,so=bo;
      if(r<0.45)sn=bn;else if(r<0.70)sn=(bn+1)%12;else if(r<0.85)sn=(bn+11)%12;else if(r<0.92)sn=(bn+2)%12;else sn=(bn+5)%12;
      return{freq:440*Math.pow(2,(sn-9+(so-4)*12)/12),volume:0.1+Math.random()*0.15};
    }
    return null;
  },[]);

  return{start,stop,getPitch,modeRef};
}

// ─── Components ─────────────────────────────────────────────────
function ScoreRing({score,size=120}){
  const r=size/2-8,ci=2*Math.PI*r,off=ci-(score/100)*ci;
  const c=score>=90?"#FFD700":score>=70?"#00E5A0":score>=50?"#FF8C42":"#FF4B6E";
  return(<div style={{position:"relative",width:size,height:size}}>
    <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6"/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={c} strokeWidth="6" strokeDasharray={ci} strokeDashoffset={off} strokeLinecap="round" style={{transition:"stroke-dashoffset 1.5s ease-out"}}/></svg>
    <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:size*0.3,fontWeight:800,color:c}}>{score}</span><span style={{fontSize:size*0.1,color:"rgba(255,255,255,0.5)"}}>점</span></div>
  </div>);
}

// ─── Pitch Visualizer ───────────────────────────────────────────
function PitchViz({targetNote,userPitch,isActive,song,currentTime}){
  const cvRef=useRef(null),histRef=useRef([]),afRef=useRef(null);
  useEffect(()=>{
    if(!isActive){histRef.current=[];return;}
    const cv=cvRef.current;if(!cv)return;
    const ctx=cv.getContext("2d");
    const W=cv.width=cv.offsetWidth*2,H=cv.height=cv.offsetHeight*2;
    const draw=()=>{
      ctx.fillStyle="rgba(8,5,18,0.25)";ctx.fillRect(0,0,W,H);
      const cs=targetNote?nSemi(targetNote.note,targetNote.octave):57;
      const sToY=s=>H/2-(s-cs)*(H/20);

      // Grid
      for(let s=cs-10;s<=cs+10;s++){
        const y=sToY(s);
        const isT=targetNote&&s===nSemi(targetNote.note,targetNote.octave);
        if(isT){
          const g=ctx.createLinearGradient(0,y-14,0,y+14);
          g.addColorStop(0,"rgba(0,229,160,0)");g.addColorStop(0.5,"rgba(0,229,160,0.12)");g.addColorStop(1,"rgba(0,229,160,0)");
          ctx.fillStyle=g;ctx.fillRect(0,y-14,W,28);
          ctx.strokeStyle="rgba(0,229,160,0.5)";ctx.lineWidth=2;ctx.setLineDash([6,6]);
          ctx.beginPath();ctx.moveTo(50,y);ctx.lineTo(W,y);ctx.stroke();ctx.setLineDash([]);
          ctx.fillStyle="#00E5A0";ctx.font="bold 20px 'Outfit',sans-serif";
          ctx.fillText("♪"+NOTE_NAMES[targetNote.note]+targetNote.octave,4,y+6);
        }else{
          ctx.strokeStyle=s%12===0?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.015)";
          ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(50,y);ctx.lineTo(W,y);ctx.stroke();
        }
      }

      // Upcoming note blocks
      if(song){
        const la=4;
        song.notes.filter(n=>n.time>=currentTime-0.5&&n.time<=currentTime+la).forEach(n=>{
          const x=50+(n.time-currentTime)/la*(W-50);
          const y=sToY(nSemi(n.note,n.octave));
          const w=Math.max(16,(n.duration/la)*(W-50));
          const cur=currentTime>=n.time&&currentTime<=n.time+n.duration;
          ctx.fillStyle=cur?"rgba(0,229,160,0.25)":"rgba(139,92,246,0.12)";
          ctx.strokeStyle=cur?"rgba(0,229,160,0.6)":"rgba(139,92,246,0.25)";
          ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(x,y-9,w,18,9);ctx.fill();ctx.stroke();
        });
      }

      // User pitch trail
      if(userPitch){
        const pi=freqToNote(userPitch.freq);
        if(pi)histRef.current.push({semi:nSemi(pi.note,pi.octave)+pi.cents/100,vol:userPitch.volume,x:W-30});
      }
      histRef.current=histRef.current.filter(p=>p.x>-10);
      histRef.current.forEach(p=>p.x-=3.5);

      if(histRef.current.length>2){
        // Glow
        ctx.beginPath();ctx.strokeStyle="rgba(255,75,154,0.12)";ctx.lineWidth=20;ctx.lineCap="round";
        for(let i=0;i<histRef.current.length;i++){const p=histRef.current[i],y=sToY(p.semi);i===0?ctx.moveTo(p.x,y):ctx.lineTo(p.x,y);}ctx.stroke();
        // Line
        ctx.beginPath();ctx.strokeStyle="#FF4B9A";ctx.lineWidth=3.5;ctx.shadowColor="#FF4B9A";ctx.shadowBlur=12;ctx.lineCap="round";
        for(let i=0;i<histRef.current.length;i++){const p=histRef.current[i],y=sToY(p.semi);i===0?ctx.moveTo(p.x,y):ctx.lineTo(p.x,y);}ctx.stroke();ctx.shadowBlur=0;
        // Dot
        const l=histRef.current[histRef.current.length-1],ly=sToY(l.semi);
        const grd=ctx.createRadialGradient(l.x,ly,0,l.x,ly,22);
        grd.addColorStop(0,"rgba(255,75,154,0.5)");grd.addColorStop(1,"rgba(255,75,154,0)");
        ctx.fillStyle=grd;ctx.fillRect(l.x-22,ly-22,44,44);
        ctx.beginPath();ctx.arc(l.x,ly,7,0,Math.PI*2);ctx.fillStyle="#FF4B9A";ctx.fill();
        ctx.beginPath();ctx.arc(l.x,ly,3,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();
        // Note label
        const nn=((Math.round(l.semi)%12)+12)%12;
        ctx.fillStyle="#fff";ctx.font="bold 15px 'Outfit',sans-serif";
        ctx.fillText(NOTE_NAMES[nn],l.x+14,ly+5);
        // Distance line to target
        if(targetNote){
          const tY=sToY(nSemi(targetNote.note,targetNote.octave));
          if(Math.abs(ly-tY)>8){
            ctx.strokeStyle="rgba(255,255,255,0.06)";ctx.lineWidth=1;ctx.setLineDash([3,3]);
            ctx.beginPath();ctx.moveTo(l.x,ly);ctx.lineTo(l.x,tY);ctx.stroke();ctx.setLineDash([]);
          }
        }
      }
      afRef.current=requestAnimationFrame(draw);
    };draw();
    return()=>cancelAnimationFrame(afRef.current);
  },[isActive,targetNote,userPitch,song,currentTime]);
  return <canvas ref={cvRef} style={{width:"100%",height:"200px",borderRadius:16,background:"rgba(8,5,18,0.7)",border:"1px solid rgba(255,255,255,0.04)"}}/>;
}

// ─── Lyrics ─────────────────────────────────────────────────────
function Lyrics({songId,currentTime}){
  const ly=LYRICS[songId]||[];let ci=-1;
  for(let i=ly.length-1;i>=0;i--){if(currentTime>=ly[i].time){ci=i;break;}}
  const p=ci>0?ly[ci-1]:null,c=ci>=0?ly[ci]:null,n=ci<ly.length-1?ly[ci+1]:null;
  let pr=0;if(c&&n)pr=Math.min(1,(currentTime-c.time)/(n.time-c.time));else if(c)pr=Math.min(1,(currentTime-c.time)/4);
  return(
    <div style={{padding:"8px 20px",textAlign:"center",minHeight:90,display:"flex",flexDirection:"column",justifyContent:"center",gap:5}}>
      <div style={{fontSize:12,color:"rgba(255,255,255,0.15)",minHeight:16}}>{p?.text||""}</div>
      <div style={{position:"relative",fontSize:18,fontWeight:700,minHeight:26}}>
        {c?(<div style={{position:"relative",display:"inline-block"}}>
          <span style={{color:"rgba(255,255,255,0.2)"}}>{c.text}</span>
          <span style={{position:"absolute",left:0,top:0,overflow:"hidden",whiteSpace:"nowrap",width:`${pr*100}%`,background:"linear-gradient(90deg,#FF4B9A,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",transition:"width 0.12s linear"}}>{c.text}</span>
        </div>):(<span style={{color:"rgba(255,255,255,0.1)"}}>🎵 준비중...</span>)}
      </div>
      <div style={{fontSize:13,color:"rgba(255,255,255,0.25)",minHeight:16}}>{n?.text||""}</div>
    </div>
  );
}

// ─── Playback Component ─────────────────────────────────────────
function AudioPlayer({url,label}){
  const [isPlay,setIsPlay]=useState(false);
  const audioRef=useRef(null);

  useEffect(()=>{
    if(!url)return;
    const a=new Audio(url);
    audioRef.current=a;
    a.onended=()=>setIsPlay(false);
    return()=>{a.pause();a.src="";};
  },[url]);

  const toggle=()=>{
    if(!audioRef.current)return;
    if(isPlay){audioRef.current.pause();setIsPlay(false);}
    else{audioRef.current.play().catch(()=>{});setIsPlay(true);}
  };

  if(!url)return <div style={{fontSize:12,color:"rgba(255,255,255,0.3)",padding:"8px 0"}}>🎤 시뮬레이션 모드 (녹음 없음)</div>;

  return(
    <button onClick={toggle} style={{display:"flex",alignItems:"center",gap:10,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"12px 20px",cursor:"pointer",color:"#fff",fontFamily:"inherit",width:"100%",maxWidth:300}}>
      <div style={{width:40,height:40,borderRadius:20,background:isPlay?"linear-gradient(135deg,#FF4B9A,#8B5CF6)":"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0,transition:"all 0.3s"}}>
        {isPlay?"⏸":"▶️"}
      </div>
      <div style={{textAlign:"left"}}>
        <div style={{fontSize:14,fontWeight:600}}>{isPlay?"재생 중...":"내 녹음 듣기"}</div>
        <div style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>{label||"마이크 녹음"}</div>
      </div>
      {isPlay&&<div style={{marginLeft:"auto",width:8,height:8,borderRadius:4,background:"#FF4B9A",animation:"blink 1s infinite"}}/>}
    </button>
  );
}

// ─── Main ───────────────────────────────────────────────────────
export default function App(){
  const[scr,setScr]=useState("home"),[song,setSong]=useState(null),[playing,setPlaying]=useState(false);
  const[time,setTime]=useState(0),[score,setScore]=useState(0),[combo,setCombo]=useState(0),[maxCombo,setMaxCombo]=useState(0);
  const[pitch,setPitch]=useState(null),[target,setTarget]=useState(null),[finalScore,setFinalScore]=useState(null);
  const[hits,setHits]=useState({perfect:0,good:0,ok:0,miss:0}),[tab,setTab]=useState("home");
  const[liked,setLiked]=useState({}),[myScores,setMyScores]=useState([]),[search,setSearch]=useState(""),[genre,setGenre]=useState("전체");
  const[sim,setSim]=useState(false),[judg,setJudg]=useState(null);
  const[recUrl,setRecUrl]=useState(null);
  const[playingRec,setPlayingRec]=useState(null); // for profile playback

  const{start,stop,getPitch,modeRef}=useAudioInput();
  const tmr=useRef(),ptr=useRef(),sR=useRef(0),hR=useRef(0),cR=useRef(0),tR=useRef(null),svR=useRef(0);
  const melRef=useRef(),padRef=useRef(),kickRef=useRef(),hhRef=useRef(),loopRef=useRef(),lnRef=useRef();

  const genres=["전체","발라드","댄스"];
  const filtered=SONGS.filter(s=>(genre==="전체"||s.genre===genre)&&(search===""||s.title.toLowerCase().includes(search.toLowerCase())||s.artist.toLowerCase().includes(search.toLowerCase())));

  useEffect(()=>{tR.current=target;},[target]);
  useEffect(()=>{svR.current=score;},[score]);

  const initAudio=useCallback(async()=>{
    await Tone.start();
    melRef.current=new Tone.PolySynth(Tone.Synth,{oscillator:{type:"triangle"},envelope:{attack:0.05,decay:0.3,sustain:0.4,release:0.8},volume:-8}).toDestination();
    padRef.current=new Tone.PolySynth(Tone.Synth,{oscillator:{type:"sine"},envelope:{attack:0.5,decay:1,sustain:0.6,release:2},volume:-18}).toDestination();
    kickRef.current=new Tone.MembraneSynth({pitchDecay:0.05,octaves:6,oscillator:{type:"sine"},envelope:{attack:0.001,decay:0.3,sustain:0,release:0.3},volume:-10}).toDestination();
    hhRef.current=new Tone.NoiseSynth({noise:{type:"white"},envelope:{attack:0.001,decay:0.08,sustain:0,release:0.05},volume:-20}).toDestination();
  },[]);

  const startBeat=useCallback(bpm=>{
    Tone.getTransport().bpm.value=bpm;let bc=0;
    loopRef.current=new Tone.Loop(t=>{if(kickRef.current){if(bc%4===0||bc%4===2)kickRef.current.triggerAttackRelease("C1","8n",t);if(hhRef.current)hhRef.current.triggerAttackRelease("16n",t,bc%2===0?0.3:0.15);}bc++;},"8n").start(0);
    Tone.getTransport().start();
  },[]);

  const stopAudio=useCallback(()=>{
    try{Tone.getTransport().stop();Tone.getTransport().cancel();}catch(e){}
    [loopRef,melRef,padRef,kickRef,hhRef].forEach(r=>{try{r.current?.dispose();}catch(e){}r.current=null;});lnRef.current=null;
  },[]);

  const go=async(s)=>{
    setSong(s);setScr("sing");setTime(0);setScore(0);setCombo(0);setMaxCombo(0);
    setHits({perfect:0,good:0,ok:0,miss:0});setJudg(null);setRecUrl(null);
    sR.current=0;hR.current=0;cR.current=0;
    await initAudio();startBeat(s.bpm);
    const ki=NOTE_NAMES.indexOf(s.key.replace("m","")),mn=s.key.includes("m");
    if(padRef.current)padRef.current.triggerAttack([NOTE_NAMES[ki]+"3",NOTE_NAMES[(ki+(mn?3:4))%12]+"3",NOTE_NAMES[(ki+7)%12]+"3"]);
    await start();setSim(modeRef.current==="sim");setPlaying(true);
    const t0=Date.now();
    tmr.current=setInterval(()=>{
      const el=(Date.now()-t0)/1000;setTime(el);
      if(el>=s.duration){fin(s);return;}
      const cn=s.notes.find(n=>el>=n.time&&el<=n.time+n.duration);setTarget(cn||null);
      if(cn&&melRef.current){const ns=NOTE_NAMES[cn.note]+cn.octave;if(ns!==lnRef.current){lnRef.current=ns;try{melRef.current.triggerAttackRelease(ns,cn.duration*0.8);}catch(e){}}}
      else if(!cn)lnRef.current=null;
    },50);
    ptr.current=setInterval(()=>{
      const t=tR.current,p=getPitch(t);setPitch(p);
      if(p&&t){const d=freqToNote(p.freq);if(d){
        const df=Math.abs(d.note-t.note);let pts=0,jt="MISS";
        if(df<=1){pts=10;jt="PERFECT ✨";setHits(h=>({...h,perfect:h.perfect+1}));}
        else if(df<=2){pts=7;jt="GOOD 👍";setHits(h=>({...h,good:h.good+1}));}
        else if(df<=3){pts=4;jt="OK";setHits(h=>({...h,ok:h.ok+1}));}
        else setHits(h=>({...h,miss:h.miss+1}));
        setJudg(jt);
        if(pts>0){cR.current++;setCombo(cR.current);setMaxCombo(m=>Math.max(m,cR.current));sR.current+=pts*(1+cR.current*0.015);hR.current++;}
        else{cR.current=0;setCombo(0);}
        setScore(Math.min(100,Math.round(sR.current/Math.max(1,hR.current)*1.1)));
      }}
    },100);
  };

  const fin=useCallback(async(s)=>{
    clearInterval(tmr.current);clearInterval(ptr.current);
    stopAudio();setPlaying(false);

    // Get recording
    const urlPromise=stop();
    let url=null;
    if(urlPromise&&typeof urlPromise.then==='function'){url=await urlPromise;}

    setRecUrl(url);
    const fs=Math.min(100,Math.max(0,svR.current));
    setFinalScore(fs);
    setMyScores(p=>[...p,{song:s,score:fs,date:new Date().toLocaleDateString("ko-KR"),maxCombo,recUrl:url}]);
    setScr("result");
  },[stop,stopAudio,maxCombo]);

  const fmt=s=>`${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,"0")}`;
  const gr=s=>s>=95?"SSS":s>=90?"SS":s>=85?"S":s>=80?"A":s>=70?"B":s>=60?"C":"D";
  const gc=s=>s>=90?"#FFD700":s>=80?"#00E5A0":s>=70?"#3B82F6":"#FF8C42";
  const dc=d=>d==="어려움"?"#FF4B6E":d==="보통"?"#FFD700":"#00E5A0";
  const jc=j=>!j?"transparent":j.includes("PERFECT")?"#FFD700":j.includes("GOOD")?"#00E5A0":j.includes("OK")?"#FF8C42":"#FF4B6E";
  const HS={padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:"blur(20px)",background:"rgba(10,8,20,0.5)",position:"sticky",top:0,zIndex:50};
  const BTN=c=>({background:`linear-gradient(135deg,${c},${c}88)`,border:"none",color:"#fff",padding:"14px 32px",borderRadius:50,fontWeight:700,fontSize:15,cursor:"pointer",fontFamily:"inherit",boxShadow:`0 4px 24px ${c}44`});

  return(
    <div style={{fontFamily:"'Outfit','Noto Sans KR',sans-serif",background:"linear-gradient(160deg,#0A0818 0%,#1A0B2E 30%,#16082A 60%,#0D0620 100%)",color:"#fff",minHeight:"100vh",maxWidth:480,margin:"0 auto",position:"relative"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}::-webkit-scrollbar{display:none}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
      <div style={{position:"fixed",top:-100,right:-100,width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,75,154,0.15),transparent 70%)",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"fixed",bottom:-50,left:-50,width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle,rgba(100,50,255,0.12),transparent 70%)",pointerEvents:"none",zIndex:0}}/>

      <div style={{position:"relative",zIndex:1}}>

        {/* HOME */}
        {scr==="home"&&tab==="home"&&(<div style={{paddingBottom:90}}>
          <div style={HS}><div style={{fontSize:22,fontWeight:800,background:"linear-gradient(135deg,#FF4B9A,#8B5CF6,#00E5A0)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>StarVoice ⭐</div></div>
          <div style={{padding:"14px 20px 8px"}}><div style={{display:"flex",alignItems:"center",background:"rgba(255,255,255,0.06)",borderRadius:14,padding:"12px 16px",gap:10,border:"1px solid rgba(255,255,255,0.06)"}}>
            <span style={{fontSize:18,opacity:0.4}}>🔍</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="노래 또는 가수 검색..." style={{background:"none",border:"none",outline:"none",color:"#fff",fontSize:14,flex:1,fontFamily:"inherit"}}/>
          </div></div>
          <div style={{padding:"8px 20px",display:"flex",gap:8}}>{genres.map(g=>(<button key={g} onClick={()=>setGenre(g)} style={{padding:"8px 18px",borderRadius:50,border:`1px solid ${genre===g?"#FF4B9A":"rgba(255,255,255,0.1)"}`,background:genre===g?"rgba(255,75,154,0.15)":"transparent",color:genre===g?"#FF4B9A":"rgba(255,255,255,0.5)",fontSize:13,fontWeight:600,cursor:"pointer"}}>{g}</button>))}</div>
          <div style={{margin:"12px 20px",padding:24,borderRadius:20,background:"linear-gradient(135deg,rgba(255,75,154,0.2),rgba(139,92,246,0.2))",border:"1px solid rgba(255,75,154,0.15)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-20,right:-20,fontSize:80,opacity:0.15}}>🎤</div>
            <div style={{fontSize:13,color:"#FF4B9A",fontWeight:700,marginBottom:6}}>2000's HITS 💿</div>
            <div style={{fontSize:20,fontWeight:800,marginBottom:4}}>추억의 노래방!</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,0.5)"}}>마이크로 부르면 녹음되고 나중에 들을 수 있어요 🎧</div>
          </div>
          <div style={{padding:"8px 20px",display:"flex",flexDirection:"column",gap:10}}>
            {filtered.map(s=>(<div key={s.id} onClick={()=>go(s)} style={{background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.06)",padding:16,cursor:"pointer",display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:1}}>
              <div style={{width:56,height:56,borderRadius:14,background:"linear-gradient(135deg,rgba(255,75,154,0.2),rgba(139,92,246,0.3))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,flexShrink:0}}>{s.cover}</div>
              <div style={{flex:1,minWidth:0}}><div style={{fontSize:15,fontWeight:700,marginBottom:3}}>{s.title}</div><div style={{fontSize:12,color:"rgba(255,255,255,0.45)"}}>{s.artist}</div></div>
              <div style={{textAlign:"right",flexShrink:0}}><div style={{fontSize:11,color:dc(s.difficulty),fontWeight:600,marginBottom:4}}>{s.difficulty}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.3)"}}>{fmt(s.duration)}</div></div>
            </div>))}
          </div>
        </div>)}

        {/* COMMUNITY */}
        {scr==="home"&&tab==="community"&&(<div style={{paddingBottom:90}}>
          <div style={HS}><div style={{fontSize:20,fontWeight:800}}>커뮤니티</div></div>
          <div style={{padding:"8px 20px",display:"flex",flexDirection:"column",gap:14}}>
            {COMMUNITY.map(p=>(<div key={p.id} style={{background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.06)",padding:16}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                <div style={{width:42,height:42,borderRadius:"50%",background:"linear-gradient(135deg,rgba(255,75,154,0.3),rgba(139,92,246,0.3))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{p.avatar}</div>
                <div style={{flex:1}}><div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:14,fontWeight:700}}>{p.user}</span>{p.badge&&<span>{p.badge}</span>}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.3)"}}>{p.time}</div></div>
                <ScoreRing score={p.score} size={52}/>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",background:"rgba(255,255,255,0.03)",borderRadius:12,marginBottom:12}}>
                <div style={{fontSize:24}}>{SONGS.find(s=>s.title===p.song)?.cover||"🎵"}</div>
                <div><div style={{fontSize:14,fontWeight:600}}>{p.song}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>{p.artist}</div></div>
                <div style={{marginLeft:"auto",fontSize:22,fontWeight:900,color:gc(p.score)}}>{gr(p.score)}</div>
              </div>
              <div style={{display:"flex",gap:20}}>
                <button onClick={()=>setLiked(l=>({...l,[p.id]:!l[p.id]}))} style={{background:"none",border:"none",color:liked[p.id]?"#FF4B9A":"rgba(255,255,255,0.3)",cursor:"pointer",fontSize:13,display:"flex",alignItems:"center",gap:6,fontFamily:"inherit"}}>{liked[p.id]?"❤️":"🤍"} {p.likes+(liked[p.id]?1:0)}</button>
                <span style={{fontSize:13,color:"rgba(255,255,255,0.3)",display:"flex",alignItems:"center",gap:6}}>💬 {p.comments}</span>
              </div>
            </div>))}
          </div>
        </div>)}

        {/* PROFILE */}
        {scr==="home"&&tab==="profile"&&(<div style={{paddingBottom:90}}>
          <div style={HS}><div style={{fontSize:20,fontWeight:800}}>내 프로필</div></div>
          <div style={{padding:20,textAlign:"center"}}>
            <div style={{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg,#FF4B9A,#8B5CF6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,margin:"0 auto 12px",boxShadow:"0 0 40px rgba(255,75,154,0.3)"}}>🎤</div>
            <div style={{fontSize:20,fontWeight:800,marginBottom:4}}>병석</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.4)",marginBottom:24}}>StarVoice Singer</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:24}}>
              {[{l:"부른 곡",v:myScores.length,i:"🎵"},{l:"평균",v:myScores.length?Math.round(myScores.reduce((a,b)=>a+b.score,0)/myScores.length):0,i:"📊"},{l:"최고",v:myScores.length?Math.max(...myScores.map(s=>s.score)):0,i:"🏆"}].map(({l,v,i})=>(<div key={l} style={{background:"rgba(255,255,255,0.04)",borderRadius:16,padding:"16px 8px",border:"1px solid rgba(255,255,255,0.06)"}}><div style={{fontSize:20,marginBottom:4}}>{i}</div><div style={{fontSize:22,fontWeight:800}}>{v}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>{l}</div></div>))}
            </div>
          </div>
          <div style={{padding:"0 20px"}}><div style={{fontSize:16,fontWeight:700,marginBottom:12}}>🎶 최근 기록</div>
            {myScores.length===0?(<div style={{background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.06)",padding:32,textAlign:"center"}}><div style={{fontSize:40,marginBottom:12}}>🎤</div><div style={{fontSize:14,color:"rgba(255,255,255,0.4)"}}>아직 기록이 없어요</div></div>)
            :[...myScores].reverse().map((r,i)=>(<div key={i} style={{background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.06)",padding:16,marginBottom:10}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:r.recUrl?10:0}}>
                <div style={{width:44,height:44,borderRadius:12,background:"linear-gradient(135deg,rgba(255,75,154,0.2),rgba(139,92,246,0.2))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{r.song.cover}</div>
                <div style={{flex:1}}><div style={{fontSize:14,fontWeight:600}}>{r.song.title}</div><div style={{fontSize:11,color:"rgba(255,255,255,0.3)"}}>{r.song.artist}·{r.date}</div></div>
                <div style={{textAlign:"right"}}><div style={{fontSize:20,fontWeight:800,color:gc(r.score)}}>{r.score}</div><div style={{fontSize:11,color:gc(r.score),fontWeight:700}}>{gr(r.score)}</div></div>
              </div>
              {r.recUrl&&<AudioPlayer url={r.recUrl} label={`${r.song.title} - ${r.song.artist}`}/>}
            </div>))}
          </div>
        </div>)}

        {/* SINGING */}
        {scr==="sing"&&song&&(<div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
          <div style={{padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <button onClick={()=>fin(song)} style={{background:"rgba(255,255,255,0.1)",border:"none",color:"#fff",width:40,height:40,borderRadius:12,cursor:"pointer",fontSize:18}}>✕</button>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:15,fontWeight:700}}>{song.title}</div>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.4)"}}>{song.artist}{sim?" · 시뮬레이션":" · 🔴 녹음중"}</div>
            </div>
            <div style={{width:40}}>{!sim&&<div style={{width:10,height:10,borderRadius:5,background:"#FF4B6E",animation:"blink 1s infinite",margin:"0 auto"}}/>}</div>
          </div>
          <div style={{padding:"0 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><div style={{fontSize:30,fontWeight:800,background:"linear-gradient(135deg,#FFD700,#FF4B9A)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{score}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.4)",letterSpacing:2}}>SCORE</div></div>
            <div style={{textAlign:"center"}}>{judg&&<div style={{fontSize:16,fontWeight:800,color:jc(judg),textShadow:`0 0 20px ${jc(judg)}44`}}>{judg}</div>}</div>
            <div style={{textAlign:"right"}}>{combo>2&&<div><div style={{fontSize:22,fontWeight:800,color:combo>20?"#FFD700":combo>10?"#FF4B9A":"#00E5A0"}}>{combo}x</div><div style={{fontSize:10,color:"rgba(255,255,255,0.4)",letterSpacing:2}}>COMBO</div></div>}</div>
          </div>
          <Lyrics songId={song.id} currentTime={time}/>
          <div style={{padding:"4px 20px",flex:1}}><PitchViz targetNote={target} userPitch={pitch} isActive={playing} song={song} currentTime={time}/></div>
          <div style={{padding:"8px 20px 20px"}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:6}}><span>{fmt(time)}</span><span>{fmt(song.duration)}</span></div>
            <div style={{height:4,background:"rgba(255,255,255,0.06)",borderRadius:2,overflow:"hidden"}}><div style={{height:"100%",width:`${(time/song.duration)*100}%`,background:"linear-gradient(90deg,#FF4B9A,#8B5CF6)",borderRadius:2,transition:"width 0.1s"}}/></div>
            <div style={{display:"flex",justifyContent:"center",marginTop:14}}><button onClick={()=>fin(song)} style={BTN("#FF4B6E")}>🛑 종료</button></div>
          </div>
        </div>)}

        {/* RESULT */}
        {scr==="result"&&song&&(<div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,textAlign:"center"}}>
          <div style={{fontSize:14,color:"rgba(255,255,255,0.4)",letterSpacing:4,marginBottom:8}}>RESULT</div>
          <div style={{fontSize:18,fontWeight:700,marginBottom:4}}>{song.title}</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.4)",marginBottom:24}}>{song.artist}</div>
          <div style={{position:"relative",marginBottom:20}}><ScoreRing score={finalScore} size={160}/><div style={{position:"absolute",top:-10,right:-10,fontSize:32,fontWeight:900,color:gc(finalScore),textShadow:`0 0 30px ${gc(finalScore)}44`}}>{gr(finalScore)}</div></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,width:"100%",maxWidth:340,marginBottom:20}}>
            {[{l:"Perfect",v:hits.perfect,c:"#FFD700"},{l:"Good",v:hits.good,c:"#00E5A0"},{l:"OK",v:hits.ok,c:"#FF8C42"},{l:"Miss",v:hits.miss,c:"#FF4B6E"}].map(({l,v,c})=>(<div key={l} style={{background:"rgba(255,255,255,0.04)",borderRadius:14,padding:"12px 6px",border:"1px solid rgba(255,255,255,0.06)"}}><div style={{fontSize:20,fontWeight:800,color:c}}>{v}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.4)",marginTop:4}}>{l}</div></div>))}
          </div>
          <div style={{background:"rgba(255,255,255,0.04)",borderRadius:14,padding:"12px 20px",marginBottom:20,border:"1px solid rgba(255,255,255,0.06)"}}><span style={{fontSize:13,color:"rgba(255,255,255,0.5)"}}>최대 콤보 </span><span style={{fontSize:20,fontWeight:800,color:"#FF4B9A"}}>{maxCombo}x</span></div>

          {/* 🎧 Recording Playback */}
          <div style={{marginBottom:24,width:"100%",display:"flex",justifyContent:"center"}}>
            <AudioPlayer url={recUrl} label={`${song.title} - ${song.artist}`}/>
          </div>

          <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
            <button onClick={()=>go(song)} style={BTN("#8B5CF6")}>🔄 다시</button>
            <button onClick={()=>{setScr("home");setTab("home");}} style={BTN("#FF4B9A")}>🏠 홈</button>
          </div>
        </div>)}
      </div>

      {scr==="home"&&(<div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,display:"flex",justifyContent:"space-around",padding:"12px 0 20px",background:"linear-gradient(to top,rgba(10,8,20,0.98),rgba(10,8,20,0.8))",backdropFilter:"blur(20px)",zIndex:100,borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        {[{id:"home",icon:"🏠",label:"홈"},{id:"community",icon:"🌍",label:"커뮤니티"},{id:"profile",icon:"👤",label:"프로필"}].map(item=>(<button key={item.id} onClick={()=>setTab(item.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"none",border:"none",color:tab===item.id?"#FF4B9A":"rgba(255,255,255,0.4)",cursor:"pointer",fontSize:10,fontWeight:600}}>
          <span style={{fontSize:22}}>{item.icon}</span><span>{item.label}</span>
          {tab===item.id&&<div style={{width:20,height:3,borderRadius:2,background:"#FF4B9A",marginTop:2}}/>}
        </button>))}
      </div>)}
    </div>
  );
}
