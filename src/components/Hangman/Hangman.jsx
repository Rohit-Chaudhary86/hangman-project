import level1 from "../../assets/Images/level1.svg"
import level2 from "../../assets/Images/level2.svg"
import level3 from "../../assets/Images/level3.svg"
import level4 from "../../assets/Images/level4.svg"
import level5 from "../../assets/Images/level5.svg"
import level6 from "../../assets/Images/level6.svg"
import level7 from "../../assets/Images/level7.svg"
import level8 from "../../assets/Images/level8.svg"
import level9 from "../../assets/Images/level9.svg"
function Hangman({step}){
   const images=[level1,level2,level3,level4,level5,level6,level7,level8,level9];
   return(
    <div className="w-[300px] h-[300px]">
        <img src={step>=images.length ? images[images.length-1]:images[step]}  />
    </div>
   )
}
export default Hangman;