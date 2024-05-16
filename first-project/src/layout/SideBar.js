import "./SideBar.css";
import { NavLink, Route } from "react-router-dom";
import UserList from "../components/user/UserList";

function SideBar(props) {
  const { users } = props;
  return (
    <div className="side-container">
      <NavLink
        to="/counter"
        className={(isActive) => (isActive ? "active" : null)}
      >
        Counter
      </NavLink>
      <NavLink
        to="/users"
        className={(isActive) => (isActive ? "active" : null)}
      >
        Users
      </NavLink>
      <Route path="*/users">
        <UserList type="listMode" users={users} />
      </Route>
    </div>
  );
}
export default SideBar;
