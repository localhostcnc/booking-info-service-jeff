/* eslint-disable import/extensions */
import React from 'react';
import ReactModal from 'react-modal';
import { shallow } from 'enzyme';
import guestDropDown from '../dist/components/guestDropDown/guestDropDown.jsx';

describe('<ModalContainer>', () => {
  it('renders <ReactModal>', () => {
    const wrapper = shallow(<guestDropDown />);
    expect(wrapper.find(ReactModal).length).toEqual(1);
  });

  it('opens modal when button is clicked', () => {
    const wrapper = shallow(<guestDropDown />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(ReactModal).prop('isOpen')).toEqual(true);
  });
});