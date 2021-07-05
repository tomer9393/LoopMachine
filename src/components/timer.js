import React, {useEffect} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer(props) {

  // rendering the seconds running backwards.
  const RenderTime = ({ remainingTime }) => {

    // Checks if the loop has restarted (8 sec), 
    // restart the cycle and pass the cycle state back to loop-machine.
    useEffect(() => {
    if(remainingTime===8){               
      props.setLoopCycle(true);
    }
    }, [remainingTime]);

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
      <div className="timer-wrapper">
        <CountdownCircleTimer
            size={90}
            isPlaying
            duration={8}
            colors={[["#fffaf0"]]}
            onComplete={() => [true, 0 ]}    // true bool for "shouldRepeat" and 0 for delay (by millsec).  
          >
          {RenderTime}
        </CountdownCircleTimer>
    </div>
  );
}
  
export default Timer;