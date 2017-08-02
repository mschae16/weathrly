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

  it('should render div with appropriate className', () => {
    expect(wrapper.find('div.Giraffe-container').length).toEqual(1);
  });

  it.skip('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      inputLocation: '',
      suggestions: [],
      trie: new Trie(),
    });
  });

  it('should be able to change state', () => {
    expect(wrapper.state('inputLocation')).toEqual('');

    wrapper.instance().setState({ inputLocation: 'Denver, CO' });
    expect(wrapper.state('inputLocation')).toEqual('Denver, CO');
  });

  it('should execute function when button is clicked', () => {
    const mockFn = jest.fn();
    const component = shallow(<Welcome onClick={mockFn} />);
    const searchBtn = component.find('button');

    searchBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
    searchBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it.skip('should call a function on input change', () => {
    const mockFn = jest.fn();
    const component = shallow(<Welcome onChange={mockFn} />);
    const input = component.find('input');

    // input.simulate('change', { target: { value: '7' } });

    input.simulate('change', { key: 'd', keyCode: 68, which: 68 });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
