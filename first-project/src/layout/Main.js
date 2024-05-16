import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Counter from "../components/Counter";
import Users from "../pages/Users";

function Main(props) {
  const { name } = props;
  return (
    <div className="main-container">
      <Switch>
        <Route path="/counter">
          <Counter name={name} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}
export default Main;
