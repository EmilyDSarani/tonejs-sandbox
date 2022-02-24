import { playAb4, playC4, playD4, playE4, playF4, playG4 } from "./Keys"

export function playNote(event){
    //A
    if (event.keyCode === 65 ) {
    playC4();
    }
    //S
    if (event.keyCode === 83 ) {
        playD4();
        }
    //D
    if (event.keyCode === 68 ) {
        playAb4();
    } 
    //F   
    if (event.keyCode === 70 ) {
        playF4();
    }
    //C
    if (event.keyCode === 67 ) {
        playE4();
    }
    //T
    if (event.keyCode === 84 ) {
        playG4();
    }      




}