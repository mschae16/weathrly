import React, { Component } from 'react'
import Welcome from '../Welcome/Welcome.js'
import CurrentWeather from '../CurrentWeather/CurrentWeather.js'
import HourlyWeather from '../HourlyWeather/HourlyWeather.js'
import DailyWeather from '../DailyWeather/DailyWeather.js'
import './AppStyles.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      city: 'Denver',
      usState: 'CO',
      temperature: 80,
      weatherSummary: 'Pretty rad',
      date: Date.now(),
      time: '12:17 PM',
      highTemp: 94,
      lowTemp: 68,
    }
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
      <HourlyWeather/>
      <DailyWeather/>
      </div>
    )
  }

}
