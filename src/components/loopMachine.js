import React, { useEffect, useState} from "react";
import Pad from "./pad.js";
import Timer from './timer.js';

function LoopMachine() {

  const [isPlaying,  setIsPlaying] = useState(false);       // indicator for play/stop buttons if state is on or off.
  const [isRecording,  setIsRecording] = useState(false);   // indicator for rec button if state is on or off.
  const [playList,  setPlayList] = useState(new Array(9));  // list of the audio files connected to all current active pads.
  const [activePads , setActivePads] = useState(0);         // counter for current active pads.
  const [loopCycle, setLoopCycle] = useState();             // counter for current loop cycles.

  // Array list for pads and all the props.
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

  // Checks if a loop cycle has started. 
  // if true, play the audio elements in the playlist and reset the cycle.
  useEffect(() => {
    if(loopCycle===true){
    playList.forEach((e) => {
      if(e!==undefined){ e.play();}
    })
    setLoopCycle(false)
  }
  }, [loopCycle,playList]);


  // Handle for pad click,
  // parameters are the pad index in the list and a bool indicator if the action is on or off.
  function HandelPad(index,bool){
    const audio = new Audio(audioList[index].path);
    audio.loop=true;                                   // Creates new audio element based on the index and set it to loop.
    
    let tempPlayList = [...playList];
    if (bool===true){                                 // If the click is for ON,
      tempPlayList[index]=audio;                      // add the new audio element its index position in the playlist.
      setPlayList(tempPlayList);                      
      if(isPlaying === true){
        if(activePads===0){                           // Check if the isPlaying state is on, and if this is the first pad activated.
          audio.play();                               // if its the first pad, play it.
        }                                             // if not, this pad will start playing in the next cycle.
      }
      setActivePads(activePads => activePads + 1)     // add 1 to the active pads counter.
    }
    else {                                            // If the click is for OFF,
      if(isPlaying === true){                         // Check if the isPlaying state in on. if true, stop playing this pad.
        tempPlayList[index].pause();                 
      }
      tempPlayList[index] = undefined;                 // remove the audio element by its index from the playlist, and set active pad counter down by 1.
      setPlayList(tempPlayList);
      setActivePads(activePads => activePads - 1)
    }
  }


  // Handle for play and stop click.
  function HandelPlayStopClick(){
    if(isPlaying===false){                            // Check if the click is on play button. if it is, start playing the playlist.
      setIsPlaying(true);
      playList.forEach((e) => {
        if(e!==undefined){ e.play();}
      })
    }
    if(isPlaying===true){                             // Check if the click is on stop button.
      setIsPlaying(false);                            // if it is, stop playing the playlist and set the audio elemnts runtime to the end.
      setIsRecording(false);
      playList.forEach((e) => {
        if(e!==undefined){ 
          e.currentTime = 8;
          e.pause();
        }
      })
    }
  }


  // Handle for rec and stop-rec click.
  function HandelRecClick(){
    if(isRecording===false){
      setIsRecording(true);
      }else{
      setIsRecording(false);
    }
  }
    
  // Create all the pad elements in a loop by the audio list, and pass the handle pad function.
  const Pads = audioList?.map((pad) => (
    <Pad key={pad.key} pad={pad} HandelPad={HandelPad} />
  ));

  return (
    <>
      <section className="looper_section" >
        <div className="looper_container"
          // inline style to check if we are on stop,play or rec mode, and change the box-shadow by it.
          style={{backgroundImage: 'url(pics/multi-pad-edited.jpg)', 
          boxShadow: isPlaying === true && isRecording === true ? '0px 5px 10px 4px  #b61313'    
          : isPlaying === true ? '0px 5px 10px 4px  #574ddb' : null}}>
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
              {/* display countdown for cycle, pass setCycle to Timer component. */}
              <div className="timer" >
                {
                isPlaying===true && activePads > 0 ? <Timer setLoopCycle={setLoopCycle}></Timer> 
                : <div style={{width:'90px'}}></div>
                }
              </div>
              <div className="rec_button">
                <div className="headline">
                  <h5 style={{marginRight: '10px'}}>Rec</h5>
                </div>
                <img className="rec" src="pics/rec.png" alt="" onClick={ isPlaying===false ? (e) => e.preventDefault() : HandelRecClick }/>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
  }

export default LoopMachine;
