import React, { Component } from 'react';
import './Welcome.css';
import './WelcomeDisplay.css';

export default function Welcome(props) {

  function handleEnterKey (e){
    if (e.keyCode === 13) {
      props.handleClick()
    }
  }
    return (
      <div>
        <div className={props.container}>
          <h1 className={props.heading}>Weathrly</h1>
          <div className={props.search}>
            <input className={props.input}
            type='text'
            placeholder='  Enter Your Location'
            value={props.inputValue}
            onChange= {props.handleChange} onKeyDown={props.handleEnterKey}/>
            <button className={props.button} type='submit' value='submit' onClick={props.handleClick}>Search</button>
          </div>
        </div>
      </div>
    );
  }
