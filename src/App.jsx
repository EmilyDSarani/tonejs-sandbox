// import style from'./App.css';
import * as Tone from "tone";
import { useState, useEffect } from "react";
import Notes from "./views/Notes";

function playC4(){
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}

function playD4(){
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("D4", "8n");
}
function playE4(){
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("E4", "8n");
}

function App() {

  const [isOn, setIsOn] = useState(false);
  const noteList = ["C4", "D4", "E4"];
  // const notefunctions = [playC4, playD4, playE4];

  const initialStart = {
    isDisplay: false,
    notes: [],
    userPlay: false,
    userNotes: [],
  }
  const [play, setPlay] = useState(initialStart);
  const [buttonColor, setButtonColor] = useState("")

  async function beginHandle(){
    setIsOn(true);
    const synth = new Tone.Synth().toDestination();
    await Tone.start();
  }

  useEffect(() => {
    if(isOn){
      setPlay({...initialStart, isDisplay: true });
    } else {
      setPlay(initialStart);
    }
  }, [isOn]);
    

  useEffect(() => {
    if (isOn && play.isDisplay){
      let newNote = noteList[Math.floor(Math.random() * 3)];
      const copyNote = [play.notes];
      copyNote.push(newNote);
      setPlay({...play, notes: copyNote});

    }
  }, [isOn, play.isDisplay]);

  useEffect(() => {
    if(isOn && play.isDisplay && play.notes.length){
      displayNotes();
    }
  }, [isOn, play.isDisplay, play.notes.length]);

  async function displayNotes(){
    for (let i = 0; i <play.colors.length; i++){
      setButtonColor(play.notes[i]);
      if(i === play.notes.length - 1){
        const copyNotes = [...play.notes];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userNotes: copyNotes.reverse(),
        });
      }
    }
  }

async function clickHandle(note){
  if (!play.isDisplay && play.userPlay){
    const copyUserNote = [...play.userNotes];
    const lastNote = copyUserNote.pop(); 
    setButtonColor(note);
    if (note === lastNote) {
      if (copyUserNote.length) {
        setPlay({ ...play, userNotes: copyUserNote });
      } else {
        
        setPlay({
          ...play,
          isDisplay: true,
          userPlay: false,
          score: play.notes.length,
          userNotes: [],
        });
      }
    } else {
     
      setPlay({ ...initialStart });
    }
   
    setFlashColor("");
  }
}

function closeHandle() {
  setIsOn(false);
}
  
  return(
  // <button onClick={playC4}>Play C4</button>
  // <button onClick={playD4}>Play D4</button>
  // <button onClick={playE4}>Play E4</button>
<div>
      <header>
        <div>
          {noteList &&
            noteList.map((v, i) => (
              <Notes
                onClick={() => {
                  beginHandle(v);
                }}
                flash={buttonColor === v}
                note={v}
              ></Notes>
            ))}
        </div>

        {isOn && !play.isDisplay && !play.userPlay && (
          <div className="lost">
            <button onClick={closeHandle}>Close</button>
          </div>
        )}
        {!isOn && (
          <button onClick={clickHandle} className="startButton">
            Start
          </button>
        )}
      </header>
    </div>
  );
}


export default App;
