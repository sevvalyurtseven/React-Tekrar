import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SideBar(props) {
  return (
    <div className="side-container">
      <Link to="/counter">Counter</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}
export default SideBar;
