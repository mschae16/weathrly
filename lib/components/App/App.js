import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import HourlyWeather from '../HourlyWeather/HourlyWeather.js';
import DailyWeather from '../DailyWeather/DailyWeather.js';
import callApi from '../../helpers/API.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
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
    callApi(modifiedLocation).then(result => {
      this.setState({
        location: modifiedLocation,
        currentData: result.currentData,
        hourlyData: result.hourlyData,
        tenDay: result.tenDay,
      });
    });

    if (this.state.location !== null) {
      this.saveToStorage(modifiedLocation)
    }
  }

  saveToStorage(location) {
    localStorage.setItem('location', location);
  }

  render() {
    return (
      <div>
        {
          ((localStorage.getItem('location')) === null) && <Welcome
            container={'Welcome-container'}
            heading={'Welcome-heading'}
            search={'Welcome-search'}
            input={'Search-input-field'}
            dropdown={'Drop-down-welcome'}
            button={'Search-button'}
            onClick={this.handleSearch.bind(this)} />
        }

        { (this.state.location) &&
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
