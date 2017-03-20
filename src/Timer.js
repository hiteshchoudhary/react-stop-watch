import React, { Component } from 'react';

class Timer extends Component {

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000)
  }

  ticker(){
    this.setState({clock: new Date() - this.props.start})
  }

  constructor(props){
    super(props);

    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }
  render(){
    var clock = Math.round(this.state.clock / 1000);
    return(
      <div>
        <p>You have been on this site since: </p> <br />
        <span> {clock}</span>
        <p>Seconds.</p>
      </div>
    );
  }
}

export default Timer;
