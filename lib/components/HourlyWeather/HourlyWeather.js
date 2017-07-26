import React, { Component } from 'react';
import HourlyCard from '../HourlyCard/HourlyCard';

export default function HourlyWeather(props) {
  return (
    <div className="Hourly-card-container">
    {
      props.sevenHour.map((card, index) => {
        return (
            <HourlyCard
              index={index}
              time={card.time}
              temperature={card.temp} />
        );
      })
    }
    </div>
  );
}
