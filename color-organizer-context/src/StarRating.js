import React from 'react';
import { createArray } from './lib';
import Star from './Star';

export default function StarRating({
    totalStarts=5, 
    selectedStars=0, 
    onRate=f=>f
}){
    return (
        <>
            {createArray(totalStarts).map((n, i)=>(
                <Star  
                    key={i} 
                    selected={selectedStars>i} 
                    onSelect={()=>onRate(i+1)} />
            ))}
            <p>
                {selectedStars} of {totalStarts} stars
            </p>
        </>
    );
}