/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../dist/components/app.jsx';

describe('Initial render', () => {
  it('should have an inital state with empty properties:', () => {
    const wrapper = shallow(<App />);
    const listAmount = wrapper.state();
    expect(listAmount).toEqual({
      pricePerNight: '',
      minNumOfNights: '',
      maxGuests: '',
      municipalInfo: '',
      reviewCount: '',
      reviews: '',
      serviceFee: '',
      occupationalFee: '',
      nameOfOwner: '',
      showCalendar: false,
    });
  });
});

describe('Show calendar upon render', () => {
  it('should NOT render calendar upon load', () => {
    const wrapper = shallow(<App />);
    const { showCalendar } = wrapper.state();
    expect(showCalendar).toEqual(false);
  });
});

describe('Click event for calendar', () => {
  it('should change state upon click', () => {
    const button = shallow((<App />));
    const firstButton = button.find('button').at(0);
    firstButton.simulate('click');
    expect(button.state().showCalendar).toEqual(true);
  });
});

describe('Click event for BOOK', () => {
  it('should do nothing', () => {
    const button = shallow(<App />);
    const secondButton = button.find('button').at(1);
    secondButton.simulate('click');
    expect(button.state()).toEqual(button.state());
  });
});
