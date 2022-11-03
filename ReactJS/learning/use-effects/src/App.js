// import logo from './logo.svg';
import "./App.css";
import Timer from "./Timer";
import TimeWrapper from "./TimerWrapper";
// import Counter from "./Counter";
// import ProfileViwer from "./ProfileViwer";
import ProfileViwerSearch from "./ProfileViwerWithSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <Timer /> */}
        <TimeWrapper />
        {/* <ProfileViwer name="rogmide" color="teal" />
        <ProfileViwer name="colt" color="green" /> */}
        {/* <ProfileViwerSearch /> */}
      </header>
    </div>
  );
}

export default App;
