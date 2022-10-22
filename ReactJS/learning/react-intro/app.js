// Main COMPONET
const App = () => (
  <div>
    {/* Sample of Children */}
    <Alert>
      <h1>HELLO!!!</h1>
    </Alert>
    <RandomChoice choices={["red", "green", "yellow"]} />
    <RandomNumRange min={20} max={30} />
    <RandomNumRange />

    <Animal
      name="Stevie Chicks"
      species="Silkie Chicken"
      emoji="🐔"
      num={10}
      obj1={{ name: "something" }}
      isCute={false}
    />
    <RandomNumn />
    <RandomNumn />
    <RandomNumn />
    <Bouncer age={18} />
    <TodoList todos={["Walk Chicken", " Feed Chicken", "Eat Chicke"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
