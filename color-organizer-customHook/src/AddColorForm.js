import React from 'react';
import {useInput} from './hooks'

export default function AddColor({onNewColor=f=>f}){
    const [titleProps, resetTtile]=useInput("");
    const [colorProps, resetColor]=useInput("#000000");
    const submit=e=>{
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTtile();
        resetColor();
    }
    return(
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );
}