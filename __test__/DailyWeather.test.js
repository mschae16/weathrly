import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyWeather from '../lib/components/DailyWeather/DailyWeather';
import DailyCard from '../lib/components/DailyCard/DailyCard'
import mockData from '../__test-helpers__/mockData.js';

describe('DailyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<DailyWeather
      tenDay={mockData.tenDay} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a container div with className of Daily-card-container', () => {
    const dailyWeather = wrapper.find('.Daily-card-container');
    expect(dailyWeather).toHaveLength(1);
  })

  it('should render ten daily weather cards', () => {
    const tenDay = wrapper.find(DailyCard);
    expect(tenDay).toHaveLength(10);
  });
});
