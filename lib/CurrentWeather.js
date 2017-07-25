import React, { Component } from 'react';
import './CurrentWeather.css'

export default class CurrentWeather extends Component {

render() {
  return(<div>

    <div className='Current-condition-Container'>

      <div className='Temperature-container'>
        <h1 className='Temperature'>80 &#176;</h1>
        <p className='Current-conditon-text'>Pretty ok so far</p>
      </div>

      <div className='Current-location-container'>
        <h1>Denver, Co</h1>
        <p>July 4, 2017</p>
        <p>12:17 PM</p>
        <p>High: 95 &#176;</p>
        <p>Low: 65 &#176;</p>
      </div>
    </div>

    </div>)


}

}
