import React from 'react';
import Color from './Color';
//import {ColorContext} from './'
import { useColors } from "./ColorProvider";
import { css } from "@emotion/css";

export default function ColorList(){
    const { colors } =useColors();
    if(!colors.length) return <div>No Colors Listed.(Add a color)</div>
    return (
        <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
     >
            {colors.map(color=>(
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}