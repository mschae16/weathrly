import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {

  render() {
    return (
      <div className='Heading-container'>
        <h1 className='Heading'>Weathrly</h1>
        <div className='Search-bar-cont'>
          <input className='Search-input' type='text' placeholder='Enter Your Location'/>
          <button className='Search-btn' type='submit' value='submit'>Search</button>
        </div>
      </div>
    )
  }
}