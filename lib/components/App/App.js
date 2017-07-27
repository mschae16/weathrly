import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome.js';
import Search from '../Search/Search.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import HourlyWeather from '../HourlyWeather/HourlyWeather.js';
import DailyWeather from '../DailyWeather/DailyWeather.js';
import Key from '../../key.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      sevenHour: [
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
        { temp: 68, time: '1 PM', icon: 'image' },
      ],
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

  handleSearch() {
    this.setState({
      isLoggedIn: true,
    });
    this.callAPI()
  }

  callAPI() {
    fetch('http://api.wunderground.com/api/'+ Key + '/conditions/forecast/forecast10day/hourly/q/CA/San_Francisco.json').then(result => {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult)

      this.setState({
        temperature: jsonResult.current_observation.temp_f,
        location: jsonResult.current_observation.display_location.full,
        date: jsonResult.current_observation.local_time_rfc822,
        weatherSummary: jsonResult.current_observation.weather,
        highTemp: jsonResult.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        lowTemp: jsonResult.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        // sevenHour: [jsonResult.hourly_forecast],
        // tenDay: jsonResult.simpleforecast,
      });
    });
  }

  render() {
    return (
      <div>
        {
          (!this.state.isLoggedIn) && <Welcome handleClick={this.handleSearch.bind(this)} />
        }
        {
          (this.state.isLoggedIn) &&
          <div>
            <Search />
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
