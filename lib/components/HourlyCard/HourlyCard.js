import React, { Component } from 'react';
import './HourlyCard.css';

export default function HourlyCard(props) {
  return (
    <div key={props.index} className='Hourly-card'>
      <p>{props.time}</p>
      <p>{props.temperature} &#176;</p>
    </div>
  );
}
