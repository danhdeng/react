import {memo} from "react";
export const Cat=({name, meow = f => f})=>{
    console.log(`rendering ${name}`);
    return <p onClick={()=>meow(name)}>{name}</p>;
};

export const PureCat = memo(Cat,
    (prevProps, nextProps) => prevProps.name === nextProps.name);