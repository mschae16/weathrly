import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyWeather from '../lib/components/HourlyWeather/HourlyWeather';

describe('HourlyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyWeather />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
