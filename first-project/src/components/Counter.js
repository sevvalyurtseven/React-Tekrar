import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  //virtual DOM'un counter degerinin degistigini anlayabilmesi icin useState hooku kullandik
  const [counter, setCounter] = useState(0);

  function arttir() {
    setCounter(counter + 1);
  }

  function azalt() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={arttir}>+1</button>
        <button onClick={azalt}>-1</button>
      </div>
    </>
  );
};
export default Counter;
