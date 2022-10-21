// Main COMPONET
const App = () => (
  <div>
    <RandomChoice choices={["red", "green", "yellow"]} />
    <Animal 
        name="Stevie Chicks" 
        species="Silkie Chicken" 
        emoji="🐔" 
        num={10}
        obj1={{ name: "something" }} />
    <RandomNumn />
    <RandomNumn />
    <RandomNumn />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
