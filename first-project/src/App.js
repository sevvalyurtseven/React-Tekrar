import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { user } from "./api/getUser";
import { useState, useEffect } from "react";
import SideBar from "./layout/SideBar";
import Footer from "./layout/Footer";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loggedUser, setLoggedUser] = useState(user);
  const [users, setUsers] = useState([]);

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

  function changeUser(user) {
    /* const newUser = {
      ...user,
      name: "Yeni User" + Math.floor(Math.random() * 100),
    }; */
    setLoggedUser(user);
  }

  function addNewUser(user) {
    setUsers([...users, user]);
  }

  return (
    <>
      <Header
        user={loggedUser}
        changeUser={changeUser}
        projectName="My First Project"
      />
      <div className="middle-area">
        <SideBar users={users} />
        <Main
          name={loggedUser.name}
          changeUser={changeUser}
          users={users}
          addNewUser={addNewUser}
        />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
