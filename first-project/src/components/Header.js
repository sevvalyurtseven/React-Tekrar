import "./Header.css";
import { getFullName } from "../utils/utils";

export const user = {
  name: "Sevval",
  surname: "Yurtseven",
  age: 24,
};
function Header() {
  const projectName = "My First Project";
  return (
    <header>
      <h1>
        Welcome {getFullName(user)} to {projectName}
      </h1>
    </header>
  );
}

export default Header;
