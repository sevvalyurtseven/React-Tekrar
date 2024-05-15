import "./App.css";
import Counter from "./components/Counter";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Users from "./layout/Users";
import { user } from "./api/getUser";
import { useState } from "react";
function App() {
  const [loggedUser, setLoggedUser] = useState(user);
  const [users, setUsers] = useState([]);

  function changeUser() {
    const newUser = {
      ...user,
      name: "Yeni User" + Math.floor(Math.random() * 100),
    };
    setLoggedUser(newUser);
  }
  return (
    <>
      <Header
        user={loggedUser}
        changeUser={changeUser}
        projectName="My First Project"
      />
      <Main name={loggedUser.name} />
      <Users users={users} />
    </>
  );
}

export default App;
