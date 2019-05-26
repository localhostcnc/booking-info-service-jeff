import React from 'react';
import styled from 'styled-components';

class GuestDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thing: '',
      currentGuestNum: '',
    };
  }

  render() {
    return (
      <div className="dd-wrapper">
        <div className="dd-header">
          <div className="dd-header-title" />
        </div>
        <ul className="dd-list">
          <li className="dd-list-item" />
          <li className="dd-list-item" />
          <li className="dd-list-item" />
        </ul>
      </div>

    );
  }
}


export default GuestDropDown;
