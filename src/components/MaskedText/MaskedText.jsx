import {getAllCharacters} from "./MaskedTextUtility"
// {text}=the word to be guessed
// {usedLetters}=the array of letters that have been guessed so far

function MaskedText({text,usedLetters}){
    const letters=getAllCharacters(text,usedLetters).split('');
    return(
        <>
        {letters.map((letter,index)=>{
                return(
                    <span key={`letter-${index}`} className="inline-block mx-1">{letter}</span>
                )
            })}
        </>
    )
}
export default MaskedText;