/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import Moment from 'moment';
import Index from '../dist/components/calendar/index.jsx';


describe('Date acquisition', () => {
  it('should dynamically consider the current date in rendering', () => {
    const wrapper = shallow(<Index />);
    const moment = Moment().format('M');
    expect(moment).toEqual(wrapper.state().dateObject.format('M'));
  });
});
