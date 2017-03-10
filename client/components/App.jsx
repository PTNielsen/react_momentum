import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Time />
    )
  }
}

class Time extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  componentWillMount() {
    this._setTime();
  }

  render() {
    return (
      <div>
        <h1 className="time">{this._formattedHour(this.state.hour)}:{this.state.minute}</h1>
        <p className="time-message">{this._timeMessage(this.state.hour)}, Patrick</p>
      </div>
    );
  }

  componentDidMount() {
    setInterval(this._setTime.bind(this), 1000);
  }

  _setTime() {
    let date = new Date();

    this.setState({hour: date.getHours(), minute: date.getMinutes()});
  }

  _formattedHour(hour) {
    let val = hour

    if (hour > 12) {
      val = hour - 12
    } else if (hour === 0) {
      val = 12
    }

    return val
  }

  _timeMessage(hour) {
    let message = "Good evening"

    if (hour >= 0 && hour < 12) {
      message = "Good morning"
    } else if (hour >= 12 && hour <= 19) {
      message = "Good afternoon"
    }

    return message
  }
}
