// import logo from './logo.svg';
import "./App.css";
// import Timer from "./Timer";
// import Counter from "./Counter";
import ProfileViwer from "./ProfileViwer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <Timer /> */}
        <ProfileViwer name="rogmide" />
        <ProfileViwer name="colt" />
      </header>
    </div>
  );
}

export default App;
