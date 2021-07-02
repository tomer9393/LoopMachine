import React from "react";
import { useEffect, useState } from "react";

function Pad(props) {
  const audioPad = props.audio; 
  const name = audioPad.text;
  const bgColor = audioPad.bgColor;
  const bgImage = audioPad.bgImage;
  const tag = audioPad.tag;

  const [state, setState] = useState(false);

  function HandelStateClick(){
    if(state===false){
      setState(true);
    }
    if(state===true){
      setState(false);
    }
  }

    return (
      <>
      <div className="pad">
      <div className="listing__item">
        <div className="listing__item__pic set-bg" onClick={HandelStateClick} style={{backgroundColor: `${bgColor}`, backgroundImage: `${bgImage}`}}>
          <div className="listing__item__pic__tag"><img src={`pics/${tag}`} alt="" /></div>
        </div>
        {/* <div className="listing__item__text" style={{textAlign: `left`}}>
          <div className="listing__item__text__inside">
            <h5>{name}</h5>
            <ul>
              <li>
                <span className="icon_pin_alt" /> location
              </li>
              <li>
                <span className="icon_calendar" />
                <a>date</a> 
              </li>
            </ul>
          </div>
          <div className="listing__item__text__info">
          <a>Buy Tickets</a> 
          </div>
        </div> */}
          {
          state===false ? 
          <div className="listing__item__text__info" style={{	background: '#f03250'}}></div>
          : <div className="listing__item__text__info" style={{ background: '#38f032'}}></div>
          }
      </div>
    </div>
    </>
    );
  }

export default Pad;
