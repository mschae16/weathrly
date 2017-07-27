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
      sevenHour: [],
      tenDay: [
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
        { day: 'Monday', icon: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif', high: 90, low: 45 },
      ],
    };
  }

  // componentDidMount() {
  //   const apiResults = callApi()
  //   console.log(apiResults);
  // }

  handleSearch() {
    this.setState({
      isLoggedIn: true,
    })

    callApi().then(result => this.setState({
      currentData: result.currentData,
      hourlyData: result.hourlyData,
      tenDay: result.tenDay,
    }))

    console.log(this.state);
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
            handleClick={this.handleSearch.bind(this)} />
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
              handleClick={this.handleSearch.bind(this)} />
            <CurrentWeather
              temperature={this.state.temperature}
              weatherSummary={this.state.weatherSummary}
              location={this.state.location}
              date={this.state.date}
              highTemp={this.state.highTemp}
              lowTemp={this.state.lowTemp}
              />
            <HourlyWeather
              sevenHour={this.state.sevenHour}
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
