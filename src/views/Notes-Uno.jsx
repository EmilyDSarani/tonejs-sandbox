import React from 'react'
// import * as Tone from "tone";

// function playC4(){
//     const synth = new Tone.Synth().toDestination();
//     synth.triggerAttackRelease("C4", "8n");
//   }
  
//   function playD4(){
//     const synth = new Tone.Synth().toDestination();
//     synth.triggerAttackRelease("D4", "8n");
//   }
//   function playE4(){
//     const synth = new Tone.Synth().toDestination();
//     synth.triggerAttackRelease("E4", "8n");
//  }



export default function Notes({ note, onClick, flash }) {
  return (
    <div
    onClick={onClick}
    className={`noteCard ${note} ${flash ? "flash" : ""}`}
  ></div>
  )
}
