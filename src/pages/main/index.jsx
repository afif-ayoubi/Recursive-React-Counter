import React, { useState } from "react";
import "./style.css";

const Main = ({initial}) => {
  const [nested, setNested] = useState([initial]);
  const handler = (operation) => {
    switch (operation) {
      case "+":
        setNested([...nested, initial]);
        break;
      case "-":
        setNested([]);
        break;
      default:
        break;
    }
  };
  return (
    <div className={`main flex `}>
      <div className="flex">
        <div className="counter">-{initial}</div>
        <button onClick={() => handler("+")}>+</button>
        <button onClick={() => handler("-")}>-</button>
      </div>
      {nested.map((item, index) => {
        return <Main key={index} initial={item + 1} />;
      })}
    </div>
  );
};

export default Main;
