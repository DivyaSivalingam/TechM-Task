import React, { Component } from "react";

class Timer extends Component {
  componentDidMount() {
    this.interval = setInterval(() => console.log("Tick"), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Timer Running...</div>;
  }
}

export default Timer;
