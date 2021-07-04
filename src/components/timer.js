import React, {useState, useEffect} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import RenderTime from './RenderTime.js'

// const renderTime = ({ remainingTime }) => {
    
//     return (
//       <div className="timer">
//         <div className="value">{remainingTime}</div>
//       </div>
//     );
//   };
  
function Timer(props) {
    
    return (
      <div className="timer">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            size={90}
            isPlaying
            duration={8}
            colors={[["#fffaf0"]]}
            onComplete={() => [true, 100]}
          >
            {RenderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    );
  }
  
export default Timer;