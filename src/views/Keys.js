import * as Tone from "tone";

export function playC4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  }
  
  export function  playD4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");
  }
  export function playE4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
  }
  export function playF4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", "8n");
  }
  export function playG4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4", "8n");
  }
  export function playAb4(){
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Ab4", "8n");
  }
