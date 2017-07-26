import React, { Component } from 'react';
import './CurrentWeather.css'

export default class CurrentWeather extends Component {

  render() {
    return (

      <div className='Condition-background'>
        <div className='Current-condition-container'>
          <div className='Temperature-container'>
            <h1 className='Temperature'>80&#176;</h1>
            <p className='Current-conditon-text'>Pretty ok so far</p>
          </div>
        </div>


          <div className='Current-location-container'>
            <h1 className='Location'>Denver, Co</h1>
            <p className='Current-text'>July 4, 2017</p>
            <p className='Current-text'>12:17 PM</p>
            <p className='Current-text'>High: 95&#176;</p>
            <p className='Current-text'>Low: 65&#176;</p>
          </div>
      </div>
    )
  }
}
