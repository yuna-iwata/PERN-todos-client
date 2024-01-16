import logo from "./logo.svg";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { ListTodo } from "./components/ListTodo";

function App() {
  return (
    <div className="App">
      <h1>PERN To dos</h1>
      <InputTodo />
      <ListTodo />
    </div>
  );
}

export default App;
