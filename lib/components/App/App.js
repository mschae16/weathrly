import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import Key from '../../key';
import dataClean from '../../helpers/clean';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      error: false,
      hourlyData: [],
      tenDay: [],
    };
  }

  componentWillMount() {
    const place = localStorage.getItem('location');
    if (place) {
      this.handleSearch(place);
    }
  }

  handleSearch(modifiedLocation) {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/forecast/forecast10day/hourly/q/${modifiedLocation}.json`)
      .then(result => result.json())
      .then(parsedResult => dataClean(parsedResult))
      .then(result => {
      this.saveToStorage(result.currentData.location);
      this.setState({
        location: modifiedLocation,
        currentData: result.currentData,
        hourlyData: result.hourlyData,
        tenDay: result.tenDay,
        error: false,
      });
    })
    .catch(error => this.setState({ error: true }));
  }

  saveToStorage(location) {
    localStorage.setItem('location', location);
  }

  render() {
    return (
      <div>
        {
          ((localStorage.getItem('location')) === null) && (!this.state.error) && <Welcome
            container={'Welcome-container'}
            heading={'Welcome-heading'}
            search={'Welcome-search'}
            input={'Search-input-field'}
            dropdown={'Drop-down-welcome'}
            button={'Search-button'}
            onClick={this.handleSearch.bind(this)} />
        }

        {
          (this.state.error) && <Welcome
            container={'Error-container'}
            heading={'Error-heading'}
            search={'Error-search'}
            input={'Error-input-field'}
            dropdown={'Error-down-welcome'}
            button={'Error-button'}
            onClick={this.handleSearch.bind(this)} />
        }

        { (this.state.location) && (!this.state.error) &&
          <div>
            <Welcome
              container={'Heading-container'}
              heading={'Heading'}
              search={'Search-bar-cont'}
              input={'Search-input'}
              dropdown={'Drop-down-refresh'}
              button={'Search-btn'}
              onClick={this.handleSearch.bind(this)} />
            <CurrentWeather
              temperature={this.state.currentData.temperature}
              weatherSummary={this.state.currentData.weatherSummary}
              location={this.state.currentData.location}
              day={this.state.currentData.day}
              monthName={this.state.currentData.monthname}
              year={this.state.currentData.year}
              highTemp={this.state.currentData.highTemp}
              lowTemp={this.state.currentData.lowTemp}
              />
            <HourlyWeather
              hourlyData={this.state.hourlyData}
              />
            <DailyWeather
              tenDay={this.state.tenDay}
              />
          </div>
          }
      </div>
    );
  }
}
