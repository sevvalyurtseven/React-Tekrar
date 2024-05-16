import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { user } from "./api/getUser";
import { useState, useEffect } from "react";
import SideBar from "./layout/SideBar";
import Footer from "./layout/Footer";
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
      <div className="middle-area">
        <SideBar />
        <Main name={loggedUser.name} />
      </div>
      <Footer />
    </>
  );
}

export default App;
