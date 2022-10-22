// Main COMPONET
const App = () => (
  <div>
    <RandomChoice choices={["red", "green", "yellow"]} />
    <Animal
      name="Stevie Chicks"
      species="Silkie Chicken"
      emoji="🐔"
      num={10}
      obj1={{ name: "something" }}
      isCute={false}
    />
    <Animal
      name="asd33"
      species="Chick123"
      emoji="🐔"
      num={10}
      obj1={{ name: "something" }}
      isCute={true}
    />
    <RandomNumn />
    <RandomNumn />
    <RandomNumn />
    <Bouncer age={22} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
