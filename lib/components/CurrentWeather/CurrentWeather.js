import React, { Component } from 'react';
import './CurrentWeather.css';

export default function CurrentWeather(props) {
  return (
    <div className='Condition-background'>
      <div className='Current-condition-container'>
        <div className='Temperature-container'>
          <h1 className='Temperature'>{props.temperature}&#176; F</h1>
          <p className='Current-conditon-text'>{props.weatherSummary}</p>
        </div>
    </div>

        <div className='Current-location-container'>
          <h1 className='Location'>{props.location}</h1>
          <p className='Current-text'>{props.monthName} {props.day}, {props.year}</p>
          <p className='Current-text'>High: {props.highTemp}&#176;</p>
          <p className='Current-text'>Low: {props.lowTemp}&#176;</p>
        </div>
    </div>
  );
}
