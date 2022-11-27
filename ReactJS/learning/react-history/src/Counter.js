import React from "react";

class Counter extends React.Component {
  static defaultProps = { color: "green" };
  constructor(props) {
    super(props);
    this.state = { count: 0, isHiding: false };
    // This is ANNOYING
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Bye Bye");
  }

  render() {
    console.log("Rendering");
    const { color } = this.props;
    return (
      <div>
        <h1 style={{ color }}>I AM COUNTER</h1>
        <h3>Count is: {this.state.count}</h3>
        <button onClick={this.increment}>Add 1</button>
        <button onClick={this.decrement}>Take 1</button>
      </div>
    );
  }
}

export default Counter;
