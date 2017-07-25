import React, { Component } from 'react';

export default class Welcome extends Component {

render() {

  return(<div>
    <div className='Search-bar-cont'>
      <h1 className='Heading'>Weatherly</h1>
      <input className='Search-input' type='text' placeholder='Enter Your Location'/>
      <button className='Search-btn' type='submit' value='submit'>Search</button>
      </div>
    </div>


  )

}

}
