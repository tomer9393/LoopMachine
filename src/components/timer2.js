import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span style={{size: '30px'}}>
        {seconds}
      </span>
    );
  }
};

export default function Timer(){

return (
    <Countdown date={Date.now() + 10000} renderer={renderer} />
    );
}
    
