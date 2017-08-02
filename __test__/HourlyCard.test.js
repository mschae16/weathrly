import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyCard from '../lib/components/HourlyCard/HourlyCard';
import mockData from '../__test-helpers__/mockData.js';

describe('HourlyCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyCard
      time={mockData.hourlyData[0].time}
      icon={mockData.hourlyData[0].icon}
      temperature={mockData.hourlyData[0].temp} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render div with className of Hourly-card', () => {
    expect(wrapper.find('div.Hourly-card').length).toEqual(1);
  });

  it('should render paragraph elements', () => {
    expect(wrapper.find('p.Time-Text').length).toEqual(1);

    expect(wrapper.find('p.Temp-text').length).toEqual(1);
  });

  it('should display a time', () => {
    const time = wrapper.find('.Time-Text');
    expect(time.text()).toEqual('5:00 PM');
  });

  it('should display an icon', () => {
    const icon = wrapper.find('img');
    expect(icon.prop('src')).toEqual('http://icons.wxug.com/i/c/k/mostlycloudy.gif');
  });

  it('should display temperature', () => {
    const temperature = wrapper.find('.Temp-text');
    expect(temperature.text()).toEqual('75 °F');
  });
});
