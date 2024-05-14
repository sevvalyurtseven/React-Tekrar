import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [showPanel, setShowPanel] = useState(true);

  console.log("component:", counter);

  function arttir() {
    setCounter(counter + 1);
    if (counter >= 10) {
      setShowPanel(false);
    }
  }

  function azalt() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h2>Counter: {counter}</h2>
      <div>
        {showPanel && <button onClick={arttir}>+1</button>}
        <button onClick={azalt}>-1</button>
      </div>
    </>
  );
};
export default Counter;
