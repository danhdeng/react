import React, { useState } from 'react';
//import {FaStar} from 'react-icons/fa';
import Star from './Star';

const createArray=length=>[...Array(length)]

export default function StarRating({style={backgroundColor: "lightblue"},totalStars=5, ...props}){
    // return [
    //     <FaStar color="red" />,
    //     <FaStar color="red" />,
    //     <FaStar color="red" />,
    //     <FaStar color="grey" />,
    //     <FaStar color="grey" />,
    // ];
    //console.log(`style is  + ${style}`);
    const [selectedStars, setSelectedStars] = useState(0);
    return (
    <div style={{ padding: 5, ...style }} {...props}>
    {createArray(totalStars).map((n,i)=>(
        <Star key={i} 
            selected={selectedStars > i}           
            onSelect={() => setSelectedStars(i + 1)}
        />
    ))}
    <p>
        {selectedStars} of {totalStars} stars
    </p>
    </div>)
}
