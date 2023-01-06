import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

  class Timer extends React.Component {
    constructor(props){
      super(props)
      const targetDateTime = new Date();
      targetDateTime.setFullYear(2023,2,3);
      targetDateTime.setHours(23,59,59);
      this.state = {
        targetDateTime: targetDateTime,
        secondsDifference: 0,
        minutesDifference: 0,
        houresDifference: 0,
        daysDifference: 0,
      };
      this.calcTime = this.calcTime.bind(this);
    }

    calcTime() {
      const dateTime = new Date();
      this.setState({
        secondsDifference: this.state.targetDateTime.getSeconds() - dateTime.getSeconds(),
        minutesDifference: this.state.targetDateTime.getMinutes() - dateTime.getMinutes(),
        houresDifference: this.state.targetDateTime.getHours() - dateTime.getHours(),
        daysDifference: Math.floor((this.state.targetDateTime.getTime() - dateTime.getTime())/(24*3600*1000)),
      });
    }

    componentDidMount() {
      this.timerId = setInterval(
        () => this.calcTime(),
        1000
      );
    }

    render() {
      return (<span>Timer: {this.state.daysDifference > 0 && this.state.daysDifference + ' days' } {this.state.houresDifference } h {this.state.minutesDifference} min {this.state.secondsDifference} sec</span>);
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("timer"));
  root.render(<Timer />);
  