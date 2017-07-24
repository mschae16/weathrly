import React, { Component } from 'react';

export default class Welcome extends Component {

render() {

  return(<div>
    <h1>Weatherly</h1>
    <input type='text' placeholder='Enter Your Location'/>
    <input type='submit' value='submit'/>
    </div>


  )

}

}
