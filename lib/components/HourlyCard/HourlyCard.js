import React, { Component } from 'react'
import './HourlyCard.css'

export default function HourlyCard (props) {

  return (
    <div className='Hourly-card-wrapper'>
      <div className='Hourly-card-container'>
        <p>{props.time}</p>
        <p>{props.temperature} &#176;</p>
      </div>
    </div>
  )
}
