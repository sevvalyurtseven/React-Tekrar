import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const user = {
    name: "Sevval",
    surname: "Yurtseven",
    age: 24,
  };

  return (
    <>
      <Header user={user} />
      <Counter />
    </>
  );
}

export default App;
