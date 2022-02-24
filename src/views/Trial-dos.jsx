// import style from'./App.css';
import * as Tone from "tone";
import { useState, useEffect } from "react";


// function playC4(){
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("C4", "8n");
// }

// function playD4(){
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("D4", "8n");
// }
// function playE4(){
//   const synth = new Tone.Synth().toDestination();
//   synth.triggerAttackRelease("E4", "8n");
// }

function App() {

  const playC4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  }
  
  const  playD4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");
  }
  const playE4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
  }
  
  const [user, setUser] = useState('')
  const [computer, setComputer] = useState('')
  const [start, setStart] = useState(false)

  const startHandle = () => {
    setStart(true)
  }

  function noteSelect() {
    const notes = [playC4, playD4, playE4]
    const sequence = notes[Math.floor(Math.random() * notes)];

    return sequence
  }




  
  return(
  // <button onClick={playC4}>Play C4</button>
  // <button onClick={playD4}>Play D4</button>
  // <button onClick={playE4}>Play E4</button>
<div>
<button onClick={playC4}>Play C4</button>
<button onClick={playD4}>Play D4</button>
<button onClick={playE4}>Play E4</button>
</div>
  );
}


export default App;
