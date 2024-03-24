import React, { useEffect, useState } from "react";
import "./style.css";

const Main = () => {
  const [counters, setCounters] = useState([[-1]]);

  const decrementCounter = (index) => {
    const updatedCounters = [...counters];
  
    if (index === updatedCounters.length - 1) {
      updatedCounters.push([-1]);
    } else if (Array.isArray(updatedCounters[index])) {
      const lastElement = updatedCounters[index][updatedCounters[index].length - 1];
      updatedCounters[index].push(lastElement - 1);
    } else {
      updatedCounters[index] = [-1]; 
    }
    
    setCounters(updatedCounters);
  };
  const incrementCounter = (index) => {
    const updatedCounters = [...counters];
    if (updatedCounters[index] < -1) {
      updatedCounters[index] += 1;
    } else if (index > 0) {
      updatedCounters.pop();
    }
    setCounters(updatedCounters);
  };

  useEffect(() => {
    console.log("Counter values:", counters);
  }, [counters]);

  return (
    <div>
      {counters.map((sublist, index) => (
        <div key={index} className="sublist">
          {sublist.map((counter, sublistindex) => (
            <div
              key={sublistindex}
              className={`main flex dynamic-margin`}
              style={{ "--index": index + 1 }}
            >
              <div className="counter">{counter}</div>
              <button onClick={() => decrementCounter(index)}>+</button>
              <button onClick={() => incrementCounter(index)}>-</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Main;
