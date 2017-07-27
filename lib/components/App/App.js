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
      temperature: 80,
      weatherSummary: 'Pretty rad',
      date: 'Wed July 26 2017',
      time: '12:17 PM',
      highTemp: 94,
      lowTemp: 68,
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

    console.log('clicked');
  }

  callAPI() {
    fetch('http://api.wunderground.com/api/'+ Key + '/conditions/forecast/10dayforecast/hourly/q/CA/San_Francisco.json').then(result => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({forecastData: jsonResult})
      console.log(this.state);
    })
  }

  render() {
    // console.log(this.state.forecastData.current_observation.temp_f)
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
              temperature={this.state.forecastData.current_observation.temp_f}
              weatherSummary={this.state.forecastData.current_observation.weather}
              location={this.state.forecastData.current_observation.display_location.full}
              date={this.state.forecastData.current_observation.local_time_rfc822}
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
