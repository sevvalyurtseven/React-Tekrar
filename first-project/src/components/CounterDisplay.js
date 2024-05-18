function CounterDisplay(props) {
  const { name, counter } = props;
  return (
    <h2 data-cy="counter-display">
      {name}'s Counter: {counter}
    </h2>
  );
}
export default CounterDisplay;
