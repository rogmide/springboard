import "./App.css";
import MoodClicker from "./MoodClicker";
import Counter from "./Counter";
// import ColorPiker from "./ColorPiker";
import SignupForm from "./SignupForm";
import DogDetail from "./DogDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ColorPiker /> */}
        <DogDetail />
        <SignupForm />
        <Counter />
        <MoodClicker />
      </header>
    </div>
  );
}

export default App;
