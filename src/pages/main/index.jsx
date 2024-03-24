import React, { useEffect, useState } from "react";
import "./style.css";

const Main = () => {
  const [counters, setCounters] = useState([-1]);

  const incrementCounter = (index) => {
    const updatedCounters = [...counters];

    if (index == updatedCounters.length - 1) {
      updatedCounters.push(-1);
    } else {
      updatedCounters[index] -= 1;
    }
    setCounters(updatedCounters);
  };

  const decrementCounter = (index) => {
    const updatedCounters = [...counters];
    if (updatedCounters[index] < -1) {
      updatedCounters[index] += 1;
    } else {
      updatedCounters.pop();
    }
    setCounters(updatedCounters);
  };

  useEffect(() => {
    console.log("Counter values:", counters);
  }, [counters]);

  return (
    <div>
      {counters.map((counter, index) => (
        <div
          key={index}
          className={`main flex  dynamic-margin`}
          style={{ "--index": index + 1 }}
        >
          <div className="counter">{counter}</div>
          <button onClick={() => incrementCounter(index)}>+</button>
          <button onClick={() => decrementCounter(index)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Main;
