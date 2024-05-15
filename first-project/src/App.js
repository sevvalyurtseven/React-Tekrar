import "./App.css";
import Counter from "./components/Counter";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { user } from "./api/getUser";
function App() {
  return (
    <>
      <Header user={user} projectName="My First Project" />
      <Main name={user.name} />
    </>
  );
}

export default App;
