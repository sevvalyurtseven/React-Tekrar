import "./App.css";
import Counter from "./components/Counter";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Users from "./layout/Users";
import { user } from "./api/getUser";
import { useState, useEffect } from "react";
import axios from "axios";
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

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error.response.message);
      })
      .finally(() => {
        console.log("İstek sonlandırıldı");
      });
  }, []); //didMount
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
