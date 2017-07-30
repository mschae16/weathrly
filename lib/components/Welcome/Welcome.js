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
      suggestions: [],
      trie: new Trie(),
    };
  }

  insertCityData(cities) {
    this.state.trie.populate(cities);
  }

  generateSuggestions(e) {
    const suggestions = this.state.trie.suggest(e);
    this.setState({ suggestions });

    // if (e.keyCode === 13) {
    //   console.log('enter key')
    //   this.modifyLocation(this.state.inputLocation);
    // }
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
    const { suggestions } = this.state;
    let suggestedCities;
    this.insertCityData(prefixList.data);

    if (suggestions !== undefined) {
      suggestedCities = suggestions.map((city, i) => {
        return <li key={`city${i}`} className='possible-city'>{city}</li>;
      });
    }

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
            onKeyUp={ (e) => this.generateSuggestions(e.target.value) }
            />
          <div className={this.props.dropdown}>
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
