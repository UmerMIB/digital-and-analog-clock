import React, { Component } from "react";
import DigitalClock from "./digitalClock";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString()
    };
    this.updateTime();
  }

  updateTime() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <DigitalClock time={this.state.currentTime} />
      </div>
    );
  }
}

export default Clock;
