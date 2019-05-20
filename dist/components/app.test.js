/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import App from './app.jsx';

describe('Initial render', () => {
  it('should exist with a display listing state', () => {
    const wrapper = shallow(<App />);
    const listAmount = wrapper.state();
    expect(listAmount).toEqual({ displayListing: [] });
  });
});
