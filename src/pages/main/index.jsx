import React, { useEffect, useState } from "react";
import "./style.css";

const Main = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  
  }
  useEffect(() => {
    console.log("Counter value:", counter);
  }, [counter]);

  return (
    <div className="main flex">
      <div>{counter}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Main;
