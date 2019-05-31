import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  handleClick = () => this.setState({ isActive: !this.state.isActive });

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { isActive, count } = this.state;
    return (
      <div className="App">
        <br />
        <div>
          {" "}
          <button onClick={this.handleClick}>
            {isActive ? "Hide" : "Show"}
          </button>
        </div>
        <br />
        <div>
          <button className="increment" onClick={this.increment}>
            Increment countu
          </button>
          <button className="decrement" onClick={this.decrement}>
            Decrement count
          </button>
        </div>
        <br />
        <div>{count}</div>
      </div>
    );
  }
}

export default App;
