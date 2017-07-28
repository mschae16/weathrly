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
      inputLocation: '',
      isLoggedIn: false,
      hourlyData: [],
      tenDay: [],
    };
  }

  componentDidMount() {
  callApi().then(result => this.setState({
    currentData: result.currentData,
    hourlyData: result.hourlyData,
    tenDay: result.tenDay,
  }))
  }

  handleSearch(e) {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      inputLocation: e.target.value
    })
  }

  render() {
    return (
      <div>
        {
          (!this.state.isLoggedIn) && <Welcome
            inputValue={this.state.inputLocation}
            handleChange= {this.handleChange.bind(this)}
            container={'Welcome-container'}
            heading={'Welcome-heading'}
            search={'Welcome-search'}
            input={'Search-input-field'}
            button={'Search-button'}
            handleClick={this.handleSearch.bind(this)} />
        }
        {
          (this.state.isLoggedIn) &&
          <div>
            <Welcome
              inputValue={this.state.inputLocation}
              handleChange= {this.handleChange.bind(this)}
              container={'Heading-container'}
              heading={'Heading'}
              search={'Search-bar-cont'}
              input={'Search-input'}
              button={'Search-btn'}
              handleClick={this.handleSearch.bind(this)} />
            <CurrentWeather
              temperature={this.state.currentData.temperature}
              weatherSummary={this.state.currentData.weatherSummary}
              location={this.state.currentData.location}
              date={this.state.currentData.date}
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
