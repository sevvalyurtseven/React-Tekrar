import { useEffect, useState } from "react";
import { getFullName } from "../utils/utils";
import styled from "styled-components";

function Header(props) {
  const { changeUser, user, projectName } = props;

  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  useEffect(() => {
    console.log("Click Count: ", clickCount);
  }, [clickCount]);

  function getColor() {
    if (clickCount > 5) {
      return "red";
    } else {
      return "blue";
    }
  }

  const Title = styled.h1`
    text-align: center;
  `;
  const Profile = styled.button`
    height: 80px;
    width: 80px;
    border: 5px solid black;
    border-radius: 50%;
    background-color: aqua;
    cursor: pointer;
  `;

  const Notifications = styled(Profile)`
    background-color: ${getColor()};
    border-color: ${Math.floor(Math.random() * 2) % 2 === 0 ? "red" : "blue"};
  `;

  return (
    <header>
      <Title>
        Welcome {getFullName(user)} to {projectName}
      </Title>
      <Profile onClick={changeUser}>Change User</Profile>
      <Notifications onClick={handleClick} />
    </header>
  );
}

export default Header;
