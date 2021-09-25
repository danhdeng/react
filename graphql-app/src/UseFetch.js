import { useEffect, useState } from "react";
import useMountRef from "./useMountRef";

export default function useFetch(uri){
    const [data, setData]=useState();
    const [error, setError]=useState();
    const [loading, setLoading]=useState(true);
    const mounted=useMountRef();
    useEffect(()=>{
        if(!uri) return;
        fetch(uri)
            .then(data=>{
                if(!mounted.current) throw new Error("the component is not mount");
                return data;
            })
            .then(data=>data.json())
            .then(setData)
            .then(()=>setLoading(false))
            .catch(setError)
    },[uri]);
    return {
        loading,
        data,
        error
    }
}