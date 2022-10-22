const App = () => (
  <div>
    <Tweet username="Carlos" tweet="Tomatos are Amazing!" />
    <Tweet username="Smith" tweet="Neo is wrong!, Matrix is real to me!" />
    <Tweet username="John" tweet="My name is John, John Wick" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
