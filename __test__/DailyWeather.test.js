import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyWeather from '../lib/components/DailyWeather/DailyWeather';

describe('DailyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyWeather />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
