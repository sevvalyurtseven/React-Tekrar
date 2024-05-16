import { Button } from "reactstrap";

function CounterController(props) {
  const { counter, arttir, azalt } = props;
  return (
    <div>
      <Button
        className="me-4"
        color="success"
        disabled={counter >= 10 ? true : false}
        onClick={arttir}
      >
        Arttır
      </Button>
      <Button
        color="danger"
        disabled={counter <= 0 ? true : false}
        onClick={azalt}
      >
        Azalt
      </Button>
    </div>
  );
}
export default CounterController;
