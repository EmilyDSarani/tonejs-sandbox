// import style from'./App.css';
// import * as Tone from "tone";
import { playAb4, playC4, playD4, playE4, playF4, playG4 } from "./views/Keys"
// import playNote  from "./views/Keyboard";

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

 function handleKeyPress(event){
    //A
    if (event.key === 'A' ) {
      playC4();
      }
    //S
      if (event.key === 'S' ) {
      playD4();
      }
    //D
    if (event.key === 'D' ) {
      playAb4();
      } 
    //F   
    if (event.key === 'F' ) {
      playF4();
      }
    //C
    if (event.key === 'G' ) {
      playE4();
      }
    //T
    if (event.key === 'H' ) {
      playG4();
      }      
  }


  // const playC4 = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("C4", "8n");
  // }
  
  // const  playD4 = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("D4", "8n");
  // }
  // const playE4 = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("E4", "8n");
  // }
  // const playF4 = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("F4", "8n");
  // }
  // const playG4 = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("G4", "8n");
  // }
  // const playAb4 = () => {
  //   const synth = new Tone.Synth().toDestination();
  //   synth.triggerAttackRelease("Ab4", "8n");
  // }



  return(
  // <button onClick={playC4}>Play C4</button>
  // <button onClick={playD4}>Play D4</button>
  // <button onClick={playE4}>Play E4</button>
<div>
<input type="text" onKeyPress={handleKeyPress} />
</div>
  );
}

export default App;
