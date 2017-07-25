import React, { Component } from 'react'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import HourlyWeather from './HourlyWeather'
import DailyWeather from './DailyWeather'
import './AppStyles.css'
import './HourlyWeather.css'
import './CurrentWeather.css'
import './HourlyCard.css'
import './DailyCard.css'
import './Welcome.css'

export default class App extends Component {

  render() {
    return(
      <div>
      <div className="background-img-container">
      <Welcome/>
      <CurrentWeather/>
      <HourlyWeather/>
      <DailyWeather/>
      </div>
      </div>
    )
  }

}
