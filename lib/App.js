import React, { Component } from 'react'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import HourlyWeather from './HourlyWeather'
import DailyWeather from './DailyWeather'

export default class App extends Component {

  render() {
    return(
      <div>
      <Welcome/>
      <CurrentWeather/>
      <HourlyWeather/>

      <DailyWeather/>
      </div>
    )
  }

}
