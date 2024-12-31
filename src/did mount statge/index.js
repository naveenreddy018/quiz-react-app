import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {

    clearInterval(this.timer);
  }

  
  render() {
    return <h1>Time elapsed: {this.state.seconds} seconds</h1>;
  }
}

export default Timer;
