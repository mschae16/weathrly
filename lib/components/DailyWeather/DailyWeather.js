import React, { Component } from 'react'
import DailyCard from '../DailyCard/DailyCard'

export default class DailyWeather extends Component {

render() {
  const dailyCards = []
  for (let i = 0; i < 10; i++) {
    dailyCards.push(<DailyCard/>)
  }
  return <div>{dailyCards}</div>
  }

}
