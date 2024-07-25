import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //let counter = 15;
  const addValue = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>I am perfecting react</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={addValue}>Add value</button>
      <button>remove value</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App;
