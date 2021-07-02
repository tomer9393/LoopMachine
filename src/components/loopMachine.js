import Pad from "./pad.js";
import React, { useEffect, useState } from "react";

function LoopMachine() {

  const audioList = [
    { key: 0, bgColor: "#8EC5FC" ,bgImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
     text: "120_future_funk_beats_25" , tag: "maracas.png" },

    { key: 1, bgColor: "#8BC6EC", bgImage: "linear-gradient(62deg, #d8c4fc 0%, #38b9fd 100%)",
     text: "electric guitar coutry slide 120bpm - B", tag: "electric-guitar.png" },

	  { key: 2, bgColor: "#21D4FD" ,bgImage: "linear-gradient(62deg, #4cbbfd 0%, #d4c4fc 100%)",
     text: "SilentStar_120_Em_OrganSynth", tag: "acoustic-guitar.png" },

    { key: 3, bgColor: "#08AEEA" ,bgImage: "linear-gradient(62deg, #08AEEA 0%, #2AF598 100%)",
     text: "120_stutter_breakbeats_16", tag: "conga (1).png" },

    { key: 4, bgColor: "#85FFBD" ,bgImage: "linear-gradient(62deg, #85FFBD 0%, #FFFB7D 100%)",
     text: "MazePolitics_120_Perc", tag: "drums (1).png" },

    { key: 5, bgColor: "#FFFB7D" ,bgImage: "linear-gradient(62deg, #FFFB7D 0%, #03a8e3 100%)",
     text: "FUD_120_StompySlosh", tag: "cymbal (1).png" },

    { key: 6, bgColor: "#FBAB7E" ,bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
     text: "Bass Warwick heavy funk groove on E 120 BPM", tag: "sound-mixer (1).png" },

    { key: 7, bgColor: "#FEE140" ,bgImage: "linear-gradient(62deg, #FEE140 0%, #FA709A 100%)",
     text: "PAS3GROOVE1.03B", tag: "level (1).png" },

    { key: 8, bgColor: "#FF9A8B" ,bgImage: "linear-gradient(62deg, #FF9A8B 0%, #FF6A88 27%, #FF99AC 49%)",
     text: "GrooveB_120bpm_Tanggu", tag: "sound-bar (1).png" },

  ];

  const Pads = audioList?.map((audio) => (
    <Pad key={audio._id} audio={audio} />
  ));

  return !audioList ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="most-search spad" style={{background: '#547693'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>LOOP MACHINE</h2>
                {/* <p>
                  Here you can find all our top popular events in each category!
                </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="most__search__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" >
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      // onClick={() => setName("Concerts")}
                    >
                      <span className="flaticon2-microphone" />
                      Concerts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      // onClick={() => setName("Festivals")}
                    >
                      <span className="flaticon2-hot-air-balloon" />
                      Festivals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      // onClick={() => setName("Sport")}
                    >
                      <span className="flaticon2-football" />
                      Sport 
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-4"
                      role="tab"
                      // onClick={() => setName("StandUp")}
                    >
                      <span className="flaticon2-microphone-1" />
                      StandUp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-5"
                      role="tab"
                      // onClick={() => setName("Theatre")}
                    >
                      <span className="flaticon2-theater" />
                      Theatre
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* <div className="tab-content"> */}
                {/* <div className="tab-pane active" role="tabpanel"> */}
                  <div className="pad-container">
                  {Pads}
                  </div>
                  <div className="pad-container">
                  
                  </div>
                </div>
              </div>
            </div>
          {/* </div>  */}
          {/* </div> */}
      </section>
      </>
  );
  }

export default LoopMachine;
