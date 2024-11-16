function getButtonStyling(styleType){
    const primaryButtonStyling=" bg-blue-500 border-blue-600  hover:bg-blue-800 hover:border-blue-900";
    const secondaryButtonStyling=" bg-yellow-500 border-yellow-600  hover:bg-yellow-800 hover:border-yellow-900";
    const warningButtonStyling=" bg-red-500 border-red-600  hover:bg-red-800 hover:border-red-900"

    if(styleType=="primary"){
        return primaryButtonStyling;
    }else if(styleType==="secondary"){
        return secondaryButtonStyling;
    }else if(styleType=="warning"){
        return warningButtonStyling;
    }else {
        // Default styling if none of the types match
        return "bg-gray-500 border-gray-600 hover:bg-gray-800 hover:border-gray-900";
    }
}
export default getButtonStyling;