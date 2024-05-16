import { Route, Switch } from "react-router-dom";
import Counter from "../components/Counter";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import User from "../pages/User";

function Main(props) {
  const { name, users } = props;
  return (
    <div className="main-container">
      <Switch>
        <Route path="/counter">
          <Counter name={name} />
        </Route>
        <Route path="/users">
          <Users users={users} />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
export default Main;
