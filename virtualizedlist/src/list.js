import React from "react";

export default function List({data, renderItem, renderEmpty}){       
  return !data.length ? renderEmpty :
        (
            <ul>
           { 
                data.map((item, i)=><li key={i}>{renderItem(item)}</li>)
            }
            </ul>
        );
}

export const renderItem=item=>(
    <div style={{ display: "flex" }}>
    <img src={item.avatar} alt={item.name} width={50} />
    <p>
    {item.name} - {item.email}
    </p>
    </div>
);