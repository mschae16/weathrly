import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyWeather from '../lib/components/HourlyWeather/HourlyWeather';
import HourlyCard from '../lib/components/HourlyCard/HourlyCard';
import mockData from '../__test-helpers__/mockData.js';

describe('HourlyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<HourlyWeather
      hourlyData={mockData.hourlyData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a container div with className of Hourly-card-container', () => {
    const hourlyWeather = wrapper.find('.Hourly-card-container');
    expect(hourlyWeather).toHaveLength(1);
  })

  it('should render seven hourly weather cards', () => {
    const hourlyWeather = wrapper.find(HourlyCard);
    expect(hourlyWeather).toHaveLength(7);
  });
});
