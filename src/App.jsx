// import style from'./App.css';
import * as Tone from "tone";
import { array } from "prop-types"
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

  const keys = []
  //'1', '2','3','4','5','6','7','8','9','0','Q','q','W','w','E','e','R','r','T','t','y',"Y",'u','U','i','I','O','o','P','p','a','A','s','S','d','D','F','f','g','G','H','h','j','J','k','K','l','L','z','Z','x','X','c','C','v','V','b','B','n','N','m','M','!','@','#','$','%','*','?'

// const note = notes[Math.floor(Math.random() * notes.length)]

// function playNote(notes) {
//   let synth = new Tone.Synth().toDestination();
//   let interval = new Tone.Sequence(function(time, note){
//       synth.triggerAttackRelease(note, 1);
//   }, notes, "8n");

//   //begin at the beginning
//   interval.loop = false;
//   interval.start(0);    
//   Tone.Transport.start("1");
// }


const notes = [
    'C4',
    'D4'
    // { pitch: "E4" },
    // { pitch: "F4" },
    // { pitch: "G4"}
];
let randomNote = Math.floor(Math.random() * notes.length);

function play() {
  const synth = new Tone.Synth(randomNote).toDestination();
        synth.triggerAttackRelease(['C4', 'D4'], '8n');  
    }



 function handleKeyPress(event){
    if (event.key === 'A') {
      play();
   
      }
    //   if (event.key === 'S') {
    //   playD4();
    //   }
    // if (event.key === 'D' ) {
    //   playAb4();
    //   }    
    // if (event.key === 'F' ) {
    //   playF4();
    //   }
    // if (event.key === 'G' ) {
    //   playE4();
    //   }
    // if (event.key === 'H' ) {
    //   playG4();
    //   }   
    // if (event.key === 'K' ) {
    //   playB4();
    //   }  
    // if (event.key === 'T' ) {
    //   playGb4();
    //   }      
    // if (event.key === 'J' ) {
    //   playBb4();
    //   } 
    // if (event.key === 'E' ) {
    //   playDb4();
    //   }  
    // if (event.key === 'W') {
    //   playC5();
    //   }          
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
