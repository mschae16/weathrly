import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import HourlyWeather from '../HourlyWeather/HourlyWeather.js';
import DailyWeather from '../DailyWeather/DailyWeather.js';
import Key from '../../keys.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      city: 'Denver',
      usState: 'CO',
      temperature: 80,
      weatherSummary: 'Pretty rad',
      date: 'Wed July 26 2017',
      time: '12:17 PM',
      highTemp: 94,
      lowTemp: 68,
      sevenHour: [
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
      ],
      tenDay: [
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
      ],
    };
  }

  callAPI() {
    fetch('http://api.wunderground.com/api/${Key}/conditions/forecast/10dayforecast/hourly/q/CA/San_Francisco.json').then((result) => {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult);
    })
  }

  render() {
    return (
      <div>
        <Welcome/>
        <CurrentWeather
          temperature={this.state.temperature}
          weatherSummary={this.state.weatherSummary}
          city={this.state.city}
          usState={this.state.usState}
          date={this.state.date}
          time={this.state.time}
          highTemp={this.state.highTemp}
          lowTemp={this.state.lowTemp}
        />
        <HourlyWeather
          sevenHour={this.state.sevenHour}
        />
        <DailyWeather
          tenDay={this.state.tenDay}
        />
      </div>
    )
  }

}
