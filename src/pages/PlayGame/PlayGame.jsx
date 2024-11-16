import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../../components/Hangman/Hangman";


function PlayGame(){

   const [usedLetters,setUsedLetters]=useState([]);
   const [step, setStep] = useState(1);
   const location=useLocation();
   const wordSelected=location.state?.wordSelected|| " " ;   //if state is not defined ,it will return undefined,                                       
const handleLetterClick=function(letter){                 // otherwise it will return the value of word selected
    if(wordSelected.toUpperCase().includes(letter)){
        console.log("correct");
    }else{
        console.log("incorrect");
        setStep(step+1);
        
    }
      setUsedLetters([...usedLetters,letter]);
     
   }

    return(
        <div>
            <h1>play game</h1>
            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <div className="flex justify-between items-center">
                   <div className="basis-2/4">
                      <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                   </div>

                   <div className="basis-2/4 flex justify-center items-center">
                   <Hangman step={step}/>
                   </div>
            </div>
            <hr/>
            <button onClick={()=>setStep(step+1)}>next step</button>
            
            
            <hr/>
            <Link to="/start" className="text-blue-600 underline hover:text-blue-700">start game</Link>
        </div>
    )
}
export default PlayGame;