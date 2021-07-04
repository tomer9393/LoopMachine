import React from "react";

export default function RenderTime(props){
  const { remainingTime } = props;

  return (
    <div className="timer">
      <div className="value" id="sec" value={remainingTime}>{remainingTime}</div>
    </div>
  );
};