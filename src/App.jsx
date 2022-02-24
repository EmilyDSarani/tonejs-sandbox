// import style from'./App.css';
// import * as Tone from "tone";
import { playAb4, playC4, playD4, playE4, playF4, playG4, playBb4, playC5, playGb4, playB4, playDb4 } from "./views/Keys"
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
    if (event.key === 'A') {
      playC4();
      }
      if (event.key === 'S') {
      playD4();
      }
    if (event.key === 'D' ) {
      playAb4();
      }    
    if (event.key === 'F' ) {
      playF4();
      }
    if (event.key === 'G' ) {
      playE4();
      }
    if (event.key === 'H' ) {
      playG4();
      }   
    if (event.key === 'K' ) {
      playB4();
      }  
    if (event.key === 'T' ) {
      playGb4();
      }      
    if (event.key === 'J' ) {
      playBb4();
      } 
    if (event.key === 'E' ) {
      playDb4();
      }  
    if (event.key === 'W') {
      playC5();
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
 <fieldset>
    <legend> DUN DUN DUUUUN </legend>
      <label> Oodaley Odalaley </label> 
      <input type="text" onKeyPress={handleKeyPress} />
      <label> Golley, what a day </label>
      <input type="password" onKeyPress={handleKeyPress} />
</fieldset> 
</div>
  );
}

export default App;
