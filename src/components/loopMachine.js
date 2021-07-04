import React, { useEffect, useState, useContext  } from "react";
import Pad from "./pad.js";
import Timer from './timer.js';

function LoopMachine() {

  const [isPlaying,  setIsPlaying] = useState(false);
  const [isRecording,  setIsRecording] = useState(false);
  const [playList,  setPlayList] = useState(new Array(9));
  const [padCount , setPadCount] = useState(0);

  const audioList = [
    { key: 0, barColor: "glow-blue" , path: "audio/120_stutter_breakbeats_16.mp3" , tag: "maracas.png" },
    { key: 1, barColor: "glow-red",path: "audio/Bass Warwick heavy funk groove on E 120 BPM.mp3", tag: "acoustic-guitar.png" },
	  { key: 2, barColor: "glow-red" ,path: "audio/electric guitar coutry slide 120bpm - B.mp3", tag: "electric-guitar.png" },
    { key: 3, barColor: "glow-green" ,path: "audio/GrooveB_120bpm_Tanggu.mp3", tag: "conga.png" },
    { key: 4, barColor: "glow-red" ,path: "audio/FUD_120_StompySlosh.mp3", tag: "drums.png" },
    { key: 5, barColor: "glow-yellow" ,path: "audio/PAS3GROOVE1.03B.mp3", tag: "cymbal.png" },					
    { key: 6, barColor: "glow-yellow" ,path: "audio/SilentStar_120_Em_OrganSynth.mp3", tag: "sound-mixer.png" },					 
    { key: 7, barColor: "glow-green" ,path: "audio/120_future_funk_beats_25.mp3", tag: "level.png" },					 
    { key: 8, barColor: "glow-blue" ,path: "audio/MazePolitics_120_Perc.mp3", tag: "sound-bar.png" },
  ];
  
  //  useEffect(() => {
  //   if(isPlaying===true && padCount>0){
  //   var sec = document.getElementById("sec");
  //   if(sec){
  //     console.log(typeof sec)
  //     console.log(sec.value)
  //     console.log(Object.values(sec.value))
  //   }
  // }
  // }, [isPlaying,padCount])


  // const [counter, setCounter] = React.useState(0);
  // useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //     console.log(counter)
  //   return () => clearInterval(timer);
  // }, [counter]);

  function HandelPad(index,bool){
    const audio = new Audio(audioList[index].path);
    audio.loop=true;
    
    let tempPlayList = [...playList];
    if (bool===true){
      tempPlayList[index]=audio;
      setPlayList(tempPlayList);
      setPadCount(padCount => padCount + 1)
      if(isPlaying === true){
        audio.play();
      }
    }else {
      if(isPlaying === true){
        tempPlayList[index].pause();
      }
      tempPlayList[index] = undefined;
      setPlayList(tempPlayList);
      setPadCount(padCount => padCount - 1)
    }
  }

  function HandelPlayStopClick(){
    if(isPlaying===false){
      setIsPlaying(true);
      playList.forEach((e) => {
        if(e!==undefined){ e.play();}
      })
    }
    if(isPlaying===true){
      setIsPlaying(false);
      playList.forEach((e) => {
        if(e!==undefined){ 
          e.currentTime = 8;
          e.pause();
        }
      })
    }
  }

  const Pads = audioList?.map((pad) => (
    <Pad key={pad.key} pad={pad} HandelPad={HandelPad} />
  ));

  return (
    <>
      <section className="looper_section" >
        <div className="looper_container" 
          style={{backgroundImage: 'url(pics/multi-pad-edited.jpg)', 
          boxShadow: isPlaying === true ? '0px 5px 10px 4px  #12ae29' 
          : isRecording === true ? '0px 5px 10px 4px  #b61313' : null}}>
          <div className="pad_container">
            {Pads}
          </div>
          <div className="player_container">
            <h2>LOOP MACHINE</h2>
            <div className="buttons_set">
              <div className="play_stop">
                <div className="headline">
                  <h5 >Play</h5>
                  <h5 >Stop</h5>
                </div>
                <img className="play" src="pics/play.png" alt="" onClick={ isPlaying===true ? (e) => e.preventDefault() : HandelPlayStopClick }/>
                <img className="stop" src="pics/stop.png" alt="" onClick={ isPlaying===false ? (e) => e.preventDefault() : HandelPlayStopClick }/>
              </div>
              <div className="timer" >
                {
                isPlaying===true && padCount > 0 ? <Timer></Timer>
                : <div></div>
                }
              </div>
              <div className="rec_stop">
                <div className="headline">
                  <h5 style={{marginLeft: '0px'}}>Rec</h5>
                  {/* <h5 >Stop</h5> */}
                </div>
                <img className="rec" src="pics/rec.png" alt="" />
                {/* <img className="stop" src="pics/stop.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
  }

export default LoopMachine;
