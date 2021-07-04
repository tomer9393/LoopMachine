import React from "react";
import { useState } from "react";

function Pad(props) {
  const audioPad = props.pad;
  const index = audioPad.key;
  const barColor = audioPad.barColor;
  const tag = audioPad.tag;
  const HandelPad = props.HandelPad;
  const [status, setStatus] = useState(false);

  function HandelStatusClick(){
    if(status===false){
      setStatus(true);
      HandelPad(index,true)
    }
    if(status===true){
      setStatus(false);
      HandelPad(index,false)
    }
  }

    return (
      <>
      <div className="pad">
        <div>
          <div className="pad_item" onClick={HandelStatusClick} >
            <div className="pad_item_tag"><img src={`pics/${tag}`} alt="" /></div>
          </div>
          {
          status===false ? 
          <div className="pad_bar" style={{	background: 'floralwhite'}}></div>
          : <div className={`pad_bar ${barColor}`}></div>
          }
        </div>
      </div>
      </>
    );
  }

export default Pad;
