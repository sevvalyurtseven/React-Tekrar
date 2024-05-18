import { Button } from "reactstrap";

function CounterController(props) {
  const { counter, arttir, azalt } = props;
  return (
    <div className="my-4">
      <Button
        className="me-4"
        color="success"
        disabled={counter >= 10 ? true : false}
        onClick={arttir}
        data-cy="increase"
      >
        Arttır
      </Button>
      <Button
        color="danger"
        disabled={counter <= 0 ? true : false}
        onClick={azalt}
        data-cy="decrease"
      >
        Azalt
      </Button>
    </div>
  );
}
export default CounterController;
