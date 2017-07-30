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

  chooseCity(e) {
    const city = e.target.innerText;

    this.modifyLocation(city);
    console.log('city', city)
  }

  modifyLocation(inputLocation) {
    const modifiedLocation =
    inputLocation
      .split(', ')
      .reverse()
      .join('/')
      .replace(' ', '_');

    console.log('modified', modifiedLocation)
    return () => this.props.onClick(modifiedLocation);
  }

  render() {
    const { suggestions } = this.state;
    let suggestedCities;
    this.insertCityData(prefixList.data);

    if (suggestions !== undefined) {
      suggestedCities = suggestions.map((city, i) => {
        return <li key={`city${i}`} className='Possible-city'
        onClick={ (e) => this.chooseCity(e) }>{city}</li>;
      });
    }

    return (
      <div>
        <div className={this.props.container}>
          <h1 className={this.props.heading}>Weathrly</h1>
          <div className="Giraffe-container">
            <div className={this.props.search}>
              <input className={this.props.input}
              type='text'
              placeholder='Enter Your Location'
              value={this.state.inputLocation}
              onChange={ (e) => this.setState({ inputLocation: e.target.value }) }
              onKeyUp={ (e) => this.generateSuggestions(e.target.value) }
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
