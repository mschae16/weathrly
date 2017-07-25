import React, { Component } from 'react';
import HourlyCard from '../HourlyCard/HourlyCard'
export default class HourlyWeather extends Component {

render() {
  const hourlyCards = []
  for (let i = 0; i < 7; i++) {
    hourlyCards.push(<HourlyCard/>)
  }
  return <div className="Hourly-card-cont">{hourlyCards}</div>
  }

}
