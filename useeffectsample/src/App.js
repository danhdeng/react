import logo from './logo.svg';
import './App.css';
import WorldCount from "./worldcount";
import { useCallback, useEffect,useState } from 'react';
import {useAnyKeyToRender} from "./useAnyKeyToRender";
import { PureCat } from "./Cat";
function App() {  
  // const fn=useCallback(()=>{
  //   console.log("hello");
  //   console.log("my world");
  // },[]);

  // useAnyKeyToRender();
  // useEffect(()=>{
  //   console.log("fresh sender");
  //   fn();
  // }, [fn]);
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    
    <div className="App">
      {/* <CheckBox />
      <DependencyArray /> */}     
      <>
      <h1>open the console</h1>
      {cats.map((name, i) => (
      <PureCat key={i} name={name} meow={name => console.log(`${name} has meowed`)} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
      Add a Cat
      </button>
      </>
      {/* <WorldCount>You are not going to believe this but...</WorldCount> */}
    </div>
  );
}

export default App;
