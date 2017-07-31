import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyCard from '../lib/components/HourlyCard/HourlyCard';

describe('HourlyCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyCard />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
