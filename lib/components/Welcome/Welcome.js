import React, { Component } from 'react';
import './Welcome.css';
import './WelcomeDisplay.css';

export default class Welcome extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className={this.props.container}>
          <h1 className={this.props.heading}>Weathrly</h1>
          <div className={this.props.search}>
            <input className={this.props.input} type='text' placeholder='      Enter Your Location'/>
            <button className={this.props.button} type='submit' value='submit' onClick={this.props.handleClick}>Search</button>
          </div>
        </div>
      </div>
    );
  }
}
