import "./Header.css";
import { getFullName } from "../utils/utils";

function Header(props) {
  const { changeUser, user, projectName } = props;
  //console.log("header:", props.user);
  return (
    <header>
      <h1>
        Welcome {getFullName(user)} to {projectName}
      </h1>
      <button onClick={changeUser}>Change User</button>
    </header>
  );
}

export default Header;
