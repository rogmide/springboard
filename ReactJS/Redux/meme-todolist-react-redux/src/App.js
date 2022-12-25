import "./App.css";
import MemeList from "./Meme/MemeList";
import TodoList from "./Todo/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MemeList />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
