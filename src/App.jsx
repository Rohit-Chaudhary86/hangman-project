
import { Route, Routes } from "react-router-dom";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";


function App(){
   return(
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to hangman</h1>
    //   <TextInputFormContainer onSubmit={(value)=>{
    //     console.log("hidden value in form is",value);
        
    //   }} />

    // </div>
    <>
     <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div>not found</div>} />
     </Routes>
     </>

   );
}
export default App;