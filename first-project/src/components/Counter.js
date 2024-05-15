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

  //degişikliğini track ettiğimiz prop veya state güncellendiğinde çalışır!

  useEffect(() => {
    console.log("Counter updated to ", counter);
  }, [counter]);

  useEffect(() => {
    console.log("Name updated to ", name);
  }, [name]);

  //component yüklendiğinde bir kere çalısır

  useEffect(() => {
    console.log("[componentDidMount()] event triggered");
  }, []);

  //component update oldugunda çalısır

  useEffect(() => {
    console.log("[componentDidUpdate()] event triggered");
  });

  return (
    <>
      <CounterDisplay counter={counter} name={name} />
      <CounterController counter={counter} arttir={arttir} azalt={azalt} />
    </>
  );
};
export default Counter;
