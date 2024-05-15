import "./App.css";
import Counter from "./components/Counter";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { user } from "./api/getUser";
import { useState } from "react";
function App() {
  const [loggedUser, setLoggedUser] = useState(user);

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
    </>
  );
}

export default App;
