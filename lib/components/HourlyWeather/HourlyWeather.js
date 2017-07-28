import React, { Component } from 'react';
import HourlyCard from '../HourlyCard/HourlyCard';

export default function HourlyWeather(props) {
  console.log(props.hourlyData)
  return (
    <div className="Hourly-card-container">
    {
      props.hourlyData.map((card, index) => {
        return (
            <HourlyCard
              key={index}
              time={card.time}
              icon={card.icon}
              temperature={card.temp} />
        );
      })
    }
    </div>
  );
}
