import React, { Component } from 'react'
import './DailyCard.css'

export default function DailyCard(props) {
  return (
    <div className='Daily-card'>
      <p>{props.day}</p>
      <p>pic</p>
      <p>{props.high} &#176; {props.low} &#176;</p>
    </div>
  );
}
