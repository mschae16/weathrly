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

  it.skip('should render the Welcome display if localStorage is empty', () => {
    expect(localStorage.store).toEqual({});
    expect(wrapper.find('.welcome-display')).toHaveLength(0);
    let rendered = wrapper.instance().render();
    expect(wrapper.find('.welcome-display')).toHaveLength(1);
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      location: null,
      error: false,
      hourlyData: [],
      tenDay: [],
    });
  });

  it('should be able to change state', () => {
    wrapper.instance().setState({ error: true });
    expect(wrapper.state('error')).toEqual(true);

    wrapper.instance().setState({ error: false });
    expect(wrapper.state('error')).toEqual(false);
  });

  it('should be able to save location to localStorage', () => {
    const location = 'Denver, CO';
    wrapper.instance().saveToStorage(location);
    expect(localStorage.store.location).toEqual('Denver, CO');
  });

  it('should be able to retrieve location from localStorage', () => {
    const location = 'Denver, CO';
    wrapper.instance().saveToStorage(location);
    expect(localStorage.store.location).toEqual('Denver, CO');
    expect(localStorage.getItem('location')).toEqual('Denver, CO');
  });

  it('should be able ')

});
