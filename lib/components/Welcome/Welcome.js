import React, { Component } from 'react';
import './Welcome.css';

export default class Welcome extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className='Welcome-container'>
          <h1 className='Welcome-heading'>Weathrly</h1>
          <div className='Welcome-search'>
            <input className='Search-input-field' type='text' placeholder='      Enter Your Location'/>
            <button className='Search-button' type='submit' value='submit' onClick={this.props.handleClick}>Search</button>
          </div>
        </div>
      </div>
    );
  }
}
