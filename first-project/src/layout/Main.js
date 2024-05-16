import { Route, Switch } from "react-router-dom";
import Counter from "../components/Counter";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";

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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
export default Main;
