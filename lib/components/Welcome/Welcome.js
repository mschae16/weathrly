import React, { Component } from 'react';
import './Welcome.css';
import './WelcomeDisplay.css';
import './ErrorDisplay.css';
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
        return <li key={`city${i}`} className='Possible-city'
        onClick={ (e) => this.modifyLocation(e.target.innerText)()}>{city}</li>;
      });
    }

    return (
      <div>
        <div className={this.props.container}>
          <h1 className={this.props.heading}>{this.props.titleA}{this.props.titleB}
          </h1>

          <div>{this.props.lost}</div>

          <div className="Giraffe-container">
            <div className={this.props.search}>
              <input className={this.props.input}
              type='text'
              placeholder='Enter Your Location'
              value={this.state.inputLocation}
              onChange={ (e) => {
                this.setState({ inputLocation: e.target.value });
                if (e.target.value !== '') {
                  this.generateSuggestions(e.target.value);
                } else {
                  this.setState({ suggestions: [] });
                }
              }}
              />
              <button className={this.props.button}
                onClick={(this.modifyLocation(this.state.inputLocation))}>
                Search</button>
            </div>
            {suggestedCities.length ? <div className={this.props.dropdown}>
              <ul>
                {suggestedCities}
              </ul>
            </div> : null}
          </div>
        </div>
      </div>
    );
  }
}
