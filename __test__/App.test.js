import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../lib/components/App/App';
import Welcome from '../lib/components/Welcome/Welcome';

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

  it('should render the Welcome display if localStorage is empty', () => {
    expect(localStorage.store).toEqual({});
    expect(wrapper.state().location).toEqual(null);
    expect(wrapper.find('.welcome-display')).toHaveLength(0);
    console.log(wrapper.find('Welcome'))
    expect(wrapper.find('<Welcome />').length).toEqual(1);
  });

  it('should render a Welcome component with 6 props', () => {
     wrapper.state().location = null;

    expect((wrapper.instance()).state.location).toEqual(null);
    let rendered = ((wrapper.instance()).render());
    expect((Object.keys(rendered.props.children.props)).length).toEqual(7)
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
