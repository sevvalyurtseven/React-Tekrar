import { useEffect, useState } from "react";
import "./Counter.css";
import CounterDisplay from "./CounterDisplay";
import CounterController from "./CounterController";

const Counter = (props) => {
  const { name } = props;
  const [counter, setCounter] = useState(0);

  function arttir() {
    setCounter(counter + 1);
  }

  function azalt() {
    setCounter(counter - 1);
  }

  useEffect(() => {
    console.log("Counter updated to ", counter);
  }, [counter]);

  useEffect(() => {
    console.log("Name updated to ", name);
  }, [name]);
  return (
    <>
      <CounterDisplay counter={counter} name={name} />
      <CounterController counter={counter} arttir={arttir} azalt={azalt} />
    </>
  );
};
export default Counter;
