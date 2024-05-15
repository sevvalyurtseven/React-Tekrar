import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const user = {
    name: "Sevval",
    surname: "Yurtseven",
    age: 24,
  };

  return (
    <>
      <Header user={user} projectName="My First Project" />
      <Main name={user.name} />
    </>
  );
}

export default App;
