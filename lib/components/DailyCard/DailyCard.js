import React, { Component } from 'react';
import './DailyCard.css';

export default function DailyCard(props) {
  return (
    <div className='Daily-card'>
      <p className='Day-text'>{props.day}</p>
      <img src={props.icon} alt="weather-icon"/>
      <p className='Temp-range-text'>{props.high} &#176;F {props.low} &#176;F</p>
    </div>
  );
}
