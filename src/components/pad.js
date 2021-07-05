import React from "react";
import { useState } from "react";

function Pad(props) {
  const audioPad = props.pad;
  const index = audioPad.key;
  const barColor = audioPad.barColor;
  const tag = audioPad.tag;
  const HandelPad = props.HandelPad;
  const [activePad, setActivePad] = useState(false);

  // Handle for pad click.
  // if OFF turn to ON. if ON turn to OFF.
  // and activate the handle pad func that was passed from loop-machine.
  function HandelPadClick(){
    if(activePad===false){
      setActivePad(true);
      HandelPad(index,true)
    }
    if(activePad===true){
      setActivePad(false);
      HandelPad(index,false)
    }
  }

    return (
      <>
      <div className="pad">
        <div>
          <div className="pad_item" onClick={HandelPadClick} >
            <div className="pad_item_tag"><img src={`pics/${tag}`} alt="" /></div>
          </div>
          {
          activePad===false ? 
          <div className="pad_bar" style={{	background: 'floralwhite'}}></div>
          : <div className={`pad_bar ${barColor}`}></div>
          }
        </div>
      </div>
      </>
    );
  }

export default Pad;
