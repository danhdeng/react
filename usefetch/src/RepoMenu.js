import React, { useEffect } from "react";
import { useIterator } from "./UseIterator";
import RepositoryReadme from "./RepositoryReadme";

export default function RepoMenu({
    repositories,
    login,
    onSelect=f=>f
}){
    //console.log(`data from repos : ${repositoires}`);
    const [{name}, previous, next]=useIterator(repositories);
    useEffect(()=>{
        if(!name) return;
        onSelect(name);
    },[name]);

    return(
        <>
            <div style={{display:"flex"}}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    );
}