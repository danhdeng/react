import React, { useEffect, useMemo } from "react";
import {useAnyKeyToRender} from "./useAnyKeyToRender"

export default function WorldCount({children=""}){
    useAnyKeyToRender();
    // const words=useMemo(() => {
    //     const words=children.split(" ");
    //     return words;
    // },[]);
    const words=useMemo(() => children.split(" "),[children]);
    useEffect(()=>{
        console.log("refresh console");
    },[words]);
    return (
        <>
        <p>{children}</p>
        <p>
        <strong>{words.length} - words</strong>
        </p>
        </>
        ); 
    
}