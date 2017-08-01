import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from '../lib/components/DailyCard/DailyCard';

describe('DailyCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyCard />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
