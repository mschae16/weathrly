import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from '../lib/components/DailyCard/DailyCard';

describe('DailyCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyCard />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });
});
