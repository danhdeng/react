import { useEffect, useRef } from "react";

export default function useMountRef(){
    const mounted=useRef(false);
    useEffect(()=>{
        mounted.current=true;
        return ()=>(mounted.current=false);
    });
    return mounted;
}