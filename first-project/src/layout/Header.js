import { getFullName } from "../utils/utils";
import styled from "styled-components";

function Header(props) {
  const { changeUser, user, projectName } = props;

  const Title = styled.h1`
    text-align: center;
  `;
  const Button = styled.button`
    height: 80px;
    width: 80px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: aqua;
    cursor: pointer;
  `;

  return (
    <header>
      <Title>
        Welcome {getFullName(user)} to {projectName}
      </Title>
      <Button onClick={changeUser}>Change User</Button>
    </header>
  );
}

export default Header;
