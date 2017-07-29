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
      isLoggedIn: false,
      location: null,
      hourlyData: [],
      tenDay: [],
    };
  }

  handleSearch(modifiedLocation) {
    this.setState({
      isLoggedIn: true,
    })
    callApi(modifiedLocation).then(result => this.setState({
      location: modifiedLocation,
      currentData: result.currentData,
      hourlyData: result.hourlyData,
      tenDay: result.tenDay,
    }))
  }

  render() {
    return (
      <div>
        {
          (!this.state.isLoggedIn) && <Welcome
            container={'Welcome-container'}
            heading={'Welcome-heading'}
            search={'Welcome-search'}
            input={'Search-input-field'}
            button={'Search-button'}
            onClick={this.handleSearch.bind(this)} />
        }
        {
          (this.state.isLoggedIn) &&
          <div>
            <Welcome
              container={'Heading-container'}
              heading={'Heading'}
              search={'Search-bar-cont'}
              input={'Search-input'}
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
    )
  }
}
