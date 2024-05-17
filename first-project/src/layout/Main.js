import { Route, Switch } from "react-router-dom";
import Counter from "../components/Counter";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import UserPage from "../pages/UserPage";
import Login from "../pages/Login";
import AddUser from "../pages/AddUser";

function Main(props) {
  const { name, users, changeUser, addNewUser } = props;

  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/">
          {name === "" && <Login changeUser={changeUser} />}
        </Route>
        <Route path="/counter">
          <Counter name={name} />
        </Route>
        <Route exact path="/users">
          <Users users={users} />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
        <Route exact path="/user/add">
          <AddUser addNewUser={addNewUser} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
export default Main;
