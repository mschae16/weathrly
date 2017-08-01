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

  it('should have a default status of closed and condition of empty object', () => {
    expect(wrapper.state()).toEqual({ status: 'closed', condition: {} })
  });

  it('should change the status', () => {
    expect(wrapper.state()).toEqual({ status: 'closed', condition: {} })
    wrapper.setState({ status: 'open', condition: {} })
    expect(wrapper.state()).toEqual({ status: 'open', condition: {} })
  });



});
