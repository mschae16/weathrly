import React, { Component } from 'react';
import './Welcome.css';
import './WelcomeDisplay.css';

export default class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputLocation: '',
    }
  }

  // handleEnterKey (e) {
  //   if (e.keyCode === 13) {
  //     this.modifyLocation(this.state.inputLocation)
  //   }
  // }

  modifyLocation(inputLocation) {
    let modifiedLocation =
    inputLocation.split(', ').reverse().join('/').replace(' ', '_')

    return () => this.props.onClick(modifiedLocation)
  }


  render () {

    return (
      <div>
        <div className={this.props.container}>
          <h1 className={this.props.heading}>Weathrly</h1>
          <div className={this.props.search}>
            <input className={this.props.input}
            type='text'
            placeholder='Enter Your Location'
            value={this.state.inputLocation}
            onChange={ (e) => this.setState ({ inputLocation: e.target.value}) }
            />
            <button className={this.props.button} onClick={   (this.modifyLocation(this.state.inputLocation))
           }>Search</button>
          </div>
        </div>
      </div>
    );
   }
  }
