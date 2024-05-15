function CounterController(props) {
  const { counter, arttir, azalt } = props;
  return (
    <div>
      <button disabled={counter >= 10 ? true : false} onClick={arttir}>
        +1
      </button>
      <button disabled={counter <= 0 ? true : false} onClick={azalt}>
        -1
      </button>
    </div>
  );
}
export default CounterController;
