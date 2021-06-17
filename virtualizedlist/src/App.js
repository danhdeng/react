import logo from './logo.svg';
import './App.css';
import List from "./list";
import {renderItem} from "./list"
import {BigList} from "./biglist";
import {FixedSizeList} from "react-window";

function App() {
  const renderRow=({index, style})=>(
    <div style={{...style,...{display:"flex"}}}>
        <img 
          src={BigList[index].avatar}
          alt={BigList[index].name}
          width={50}
        />
        <p>{BigList[index].name} - {BigList[index].email}</p>
    </div>
  )
  return (
    <div className="App">
      <FixedSizeList 
        height={window.innerHeight}
        width={window.innerWidth-20}
        itemCount={BigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

export default App;
