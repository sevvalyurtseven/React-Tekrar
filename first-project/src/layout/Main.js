import Counter from "../components/Counter";

function Main(props) {
  const { name } = props;
  return <Counter name={name} />;
}
export default Main;
