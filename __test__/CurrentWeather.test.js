import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/components/CurrentWeather/CurrentWeather';
import mockData from '../__test-helpers__/mockData.js';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather
      temperature={Math.floor(mockData.currentData.temperature)}
      weatherSummary={mockData.currentData.weatherSummary}
      location={mockData.currentData.location}
      day={mockData.currentData.day}
      monthName={mockData.currentData.monthname}
      year={mockData.currentData.year}
      highTemp={mockData.currentData.highTemp}
      lowTemp={mockData.currentData.lowTemp}
      />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display a temperature', () => {
    const currentTemp = wrapper.find('.Temperature');
    expect(currentTemp.text()).toEqual('77° F');
  });

  it('should display a weather summary', () => {
    const weatherSummary = wrapper.find('.Current-conditon-text');
    expect(weatherSummary.text()).toEqual('Mostly Cloudy');
  });

  it('should display a location', () => {
    const location = wrapper.find('.Location');
    expect(location.text()).toEqual('Denver, CO');
  });

  it('should display a date', () => {
    const date = wrapper.find('.Current-date-text');
    expect(date.text()).toEqual('July 30, 2017');
  });

  it('should display a high temperature', () => {
    const highTemp = wrapper.find('.Current-high-text');
    expect(highTemp.text()).toEqual('High: 80°');
  });

  it('should display a low temperature', () => {
    const lowTemp = wrapper.find('.Current-low-text');
    expect(lowTemp.text()).toEqual('Low: 62°');
  });
});
