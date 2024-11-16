import { useState } from "react";
import TextInputForm from "./TextInputForm";

//Container component for TextinputForm
function TextInputFormContainer({onSubmit}){
    const[value,setValue]=useState("")
    const[inputType,setInputType]=useState("password")

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted",value);
        onSubmit?.(value)
    }

    function handleTextInputChange(event){
      console.log(event.target.value);
      setValue(event.target.value)
      
    }
    return(
        <TextInputForm 
     // Calling the presentation layer
         handleFormSubmit={handleFormSubmit}
         handleTextInputChange={handleTextInputChange}
         value={value}
         inputType={inputType}
         setInputType={setInputType}
    />
    )

}
export default TextInputFormContainer;