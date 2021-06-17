import React, { useEffect, useState } from "react";

export default function CheckBox(){
    const[checked, setChecked]=useState(false);

    useEffect(()=>{
        //alert(`checked: ${checked.toString()}`);
        console.log(checked ? "Yes, checked" : "No, not checked");
        localStorage.setItem("checkbox-value", checked);
    });

    return(
        <>
        <input
        type="checkbox"
        value={checked}
        onChange={()=>setChecked(checked=>!checked)} /> 
        {checked? "checked" : "Not checked"}
        </>
    );
}