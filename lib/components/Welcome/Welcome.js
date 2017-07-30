import React, { Component } from 'react';
import './Welcome.css';
import './WelcomeDisplay.css';
import Trie from '../../helpers/Trie';
import prefixList from '../../helpers/cities';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLocation: '',
      trie: new Trie(),
    };
  }

  // handleEnterKey (e) {
  //   if (e.keyCode === 13) {
  //     this.modifyLocation(this.state.inputLocation)
  //   }
  // }

  generateSuggestions(inputLocation) {
    return this.state.trie.suggest(inputLocation);
  }

  modifyLocation(inputLocation) {
    const modifiedLocation =
    inputLocation
      .split(', ')
      .reverse()
      .join('/')
      .replace(' ', '_');

    return () => this.props.onClick(modifiedLocation);
  }

  render() {
    let suggestedCities;

    this.state.trie.populate(prefixList.data);

    // suggestedCities = this.generateSuggestions(this.state.inputLocation)

    // if (suggestedCities.length > 0) {
    //   suggestedCities.map((elem, i) => {
    //     <li>{elem}</li>;
    //   });
    // }

    return (
      <div>
        <div className={this.props.container}>
          <h1 className={this.props.heading}>Weathrly</h1>
          <div className={this.props.search}>
            <input className={this.props.input}
            type='text'
            placeholder='Enter Your Location'
            value={this.state.inputLocation}
            onChange={ (e) => this.setState({ inputLocation: e.target.value }) }
            onKeyUp={ (this.generateSuggestions(this.state.inputLocation)) }
            />
          <div className="Drop-down">
            <ul>
              {suggestedCities}
            </ul>
          </div>
            <button className={this.props.button}
              onClick={(this.modifyLocation(this.state.inputLocation))}>
              Search</button>
          </div>
        </div>
      </div>
    );
  }
}
