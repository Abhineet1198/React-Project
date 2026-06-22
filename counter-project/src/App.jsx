import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
  //  count >= 20 ? setCount(count):setCount(count+1);
  setCount(count+1)
 
  
  };

  const  decrement = () => {
    // count<=0? setCount(count):setCount(count-1)
    setCount(count-1)
   
    
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <br></br>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
