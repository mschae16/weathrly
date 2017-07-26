import React, { Component } from 'react';
// import HourlyCard from '../HourlyCard/HourlyCard'
import '../HourlyCard/HourlyCard.css'

export default function HourlyWeather(props) {

  return (
    <div>
    {
      props.sevenHour.map( (card, index) => {
        console.log(card)
        return (
          <div key={index} className="Hourly-card-container">
            <div className='Hourly-card-wrapper'>
              <div className='Hourly-card'>
                <p>{card.time}</p>
                <img src={card.icon} alt="some image"/>
                <p>{card.temp} &#176;</p>
              </div>
            </div>
          </div>
        );
      })
  }
  </div>
  )
}
