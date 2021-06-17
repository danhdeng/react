import React from "react";
import List from "./list";

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 }
  ];
export default function App() {
  return (
    // <ul>
    // {tahoe_peaks.map((peak, i) => (
    // <li key={i}>
    // {peak.name} - {peak.elevation.toLocaleString()}ft
    // </li>
    // ))}
    // </ul>
    <List data={tahoe_peaks} 
          renderItem={item=>(
            <>
              {item.name} - {item.elevation.toLocaleString()}ft
            </>
          )}
          renderEmpty={<p>This list is empty</p>}
           />
    );
}
