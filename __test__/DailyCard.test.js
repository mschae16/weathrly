import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from '../lib/components/DailyCard/DailyCard';
import mockData from '../__test-helpers__/mockData.js';

describe('DailyCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyCard
      day={mockData.tenDay[0].day}
      icon={mockData.tenDay[0].icon}
      high={mockData.tenDay[0].high}
      low={mockData.tenDay[0].low}
      />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render div with className of Daily-card', () => {
    expect(wrapper.find('div.Daily-card').length).toEqual(1);
  });

  it('should render paragraph elements', () => {
    expect(wrapper.find('p.Day-text').length).toEqual(1);

    expect(wrapper.find('p.Temp-range-text').length).toEqual(1);
  });

  it('should display a day', () => {
    const day = wrapper.find('.Day-text');
    expect(day.text()).toEqual('Sun');
  });

  it('should display an icon', () => {
    const icon = wrapper.find('img');
    expect(icon.prop('src')).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
  });

  it('should display a high and low temperature', () => {
    const maxAndMin = wrapper.find('.Temp-range-text');
    expect(maxAndMin.text()).toEqual('80 °F 62 °F');
  });
});
