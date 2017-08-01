import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      location: null,
      error: false,
      hourlyData: [],
      tenDay: [],
    });
  });

  it.skip('should change state', () => {
    expect(wrapper.state()).toEqual({ status: 'closed', condition: {} })
    wrapper.setState({ status: 'open', condition: {} })
    expect(wrapper.state()).toEqual({ status: 'open', condition: {} })
  });



});
