import "./App.css";
import Colors from "./Colors";
import { BrowserRouter } from "react-router-dom";
import ColorsRoutes from "./ColorsRoutes";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <ColorsRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
