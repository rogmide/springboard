import "./App.css";
import Colors from "./Colors";
import { BrowserRouter } from "react-router-dom";
import ColorsRoutes from "./ColorsRoutes";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the color factory</h1>
      <button>Add a color</button>
      <div>
        <BrowserRouter>
          <ColorsRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
