import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  console.log(process.env.API);

  return (
    <>
      <h1>Hello world! I am using React</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>{counter}</div>
    </>
  );
};

export default App;
