import React, { Component } from 'react';
import DailyCard from '../DailyCard/DailyCard';

export default function DailyWeather(props) {
  return (
    <div className="Daily-card-container">
      {
        props.tenDay.map((card, index) =>
            <DailyCard
              key={index}
              day={card.day}
              icon={card.icon}
              high={card.high}
              low={card.low} />)
      }
    </div>
  );
}
