import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../lib/components/App/App';
import mockData from '../__test-helpers__/mockData.js';

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

  it('should be able to change state', () => {
    wrapper.instance().setState({ error: true });
    expect(wrapper.state('error')).toEqual(true);

    wrapper.instance().setState({ error: false });
    expect(wrapper.state('error')).toEqual(false);
  });

  it('should render the Welcome display if localStorage is empty', () => {
    expect(localStorage.store).toEqual({});
    expect(wrapper.state().location).toEqual(null);
    wrapper.instance().render();
    expect(wrapper.find('.welcome-display')).toBeTruthy();
  });

  it('should render the Error display if location cannot be found', () => {
    wrapper.instance().setState({ error: true });
    expect(wrapper.state().error).toEqual(true);
    wrapper.instance().render();
    expect(wrapper.find('.error-display')).toBeTruthy();
  });

  it('should render the current weather display if location is found', () => {
    wrapper.instance().setState({
      location: 'CO/Denver',
      currentData: mockData.currentData,
      hourlyData: mockData.hourlyData,
      tenDay: mockData.tenDay,
      error: false,
    });
    expect(wrapper.state().location).toEqual('CO/Denver');
    expect(wrapper.state().error).toEqual(false);
    wrapper.instance().render();
    expect(wrapper.find('.weather-display')).toBeTruthy();
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
});
