function CounterController(props) {
  return (
    <div>
      <button
        disabled={props.counter >= 10 ? true : false}
        onClick={props.arttir}
      >
        +1
      </button>
      <button
        disabled={props.counter <= 0 ? true : false}
        onClick={props.azalt}
      >
        -1
      </button>
    </div>
  );
}
export default CounterController;
