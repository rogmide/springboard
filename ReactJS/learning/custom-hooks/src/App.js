import "./App.css";
import MoodClicker from "./MoodClicker";
import Counter from "./Counter";
// import ColorPiker from "./ColorPiker";
import SignupForm from "./SignupForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ColorPiker /> */}
        <SignupForm />
        <Counter />
        <MoodClicker />
      </header>
    </div>
  );
}

export default App;
