//import './App.css';
import StarRating from './StarRating';

// function App() {
//   return <StarRating 
//   style={{ backgroundColor: "lightblue" }}
//   onDoubleClick={e => alert("double click")} />;
// }
export default function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={e => alert("double click")}
    />
  );
}
