import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color } = this.props;
    return (
      <div>
        <h1 style={{ color }}>I AM COUNTER</h1>
      </div>
    );
  }
}

export default Counter;
