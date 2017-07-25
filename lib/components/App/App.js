import React, { Component } from 'react'
import Welcome from '../Welcome/Welcome.js'
import CurrentWeather from '../CurrentWeather/CurrentWeather.js'
import HourlyWeather from '../HourlyWeather/HourlyWeather.js'
import DailyWeather from '../DailyWeather/DailyWeather.js'
import './AppStyles.css'

export default class App extends Component {
  render() {
    return (
      <div>
      <Welcome/>
      <CurrentWeather/>
      <HourlyWeather/>
      <DailyWeather/>
      </div>
    )
  }

}
