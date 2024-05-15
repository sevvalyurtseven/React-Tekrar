import "./Header.css";
import { getFullName } from "../utils/utils";

function Header(props) {
  const projectName = "My First Project";
  //console.log("header:", props.user);
  return (
    <header>
      <h1>
        Welcome {getFullName(props.user)} to {props.projectName}
      </h1>
    </header>
  );
}

export default Header;
