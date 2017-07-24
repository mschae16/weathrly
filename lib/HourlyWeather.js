import React, { Component } from 'react';
import HourlyCard from './HourlyCard'
export default class HourlyWeather extends Component {

render() {
  const hourlyCards = []
  for (let i = 0; i < 10; i++) {
    hourlyCards.push(<HourlyCard/>)
  }
  return <div>{hourlyCards}</div>
  }

}
