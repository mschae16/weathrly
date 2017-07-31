import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/components/Welcome/Welcome';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });
});
