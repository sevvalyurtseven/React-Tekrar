import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  console.log("component:", counter);

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
        <button disabled={counter >= 10 ? true : false} onClick={arttir}>
          +1
        </button>
        <button disabled={counter <= 0 ? true : false} onClick={azalt}>
          -1
        </button>
      </div>
    </>
  );
};
export default Counter;
