import React from "react";
import { useIterator } from "./UseIterator";

export default function Iterator(){
    const [letter, previous, next]= useIterator(
       [ "a",
        "b",
        "c"
        ]);
    return (
        <p>letter: {letter} previous: {previous} next: {next}</p>
    );
}