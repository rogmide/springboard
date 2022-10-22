const App = () => (
  <div>
    <Person name="Cazzandra" age={18} hobbies={["Gaming", "Hunting"]}/>
    <Person name="Mize" age={15} hobbies={["Swimming"]}/>
    <Person name="UndergroupGang" age={21}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
