import React, { Component } from 'react';
import './HourlyCard.css';

export default function HourlyCard(props) {
  return (
    <div className='Hourly-card'>
      <p className='Text'>{props.time}</p>
      <img src={props.icon} alt="weather-icon"/>
      <p className='Text'>{props.temperature} &#176;F</p>
    </div>
  );
}
