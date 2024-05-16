import "./SideBar.css";
import { NavLink } from "react-router-dom";

function SideBar(props) {
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
    </div>
  );
}
export default SideBar;
