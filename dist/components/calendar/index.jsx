/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Moment from 'moment';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import onClickOutside from 'react-onclickoutside';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CheckIn, CheckOut, Arrow } from '../styles.js';

library.add(faArrowRight, faArrowLeft);

const Wrapper = styled.section`
  font-style: bold;
  width: 103%;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Weekday = styled.section`
  padding: 20px 2;
  width: 100%;
`;

const DayOfMonth = styled.section`
  padding-left: 10px;
  padding-right: 12px;
  fontStyle: bold;
  display: inline;
`;

const CalendarDay = styled.section`
  display: table-cell;
  padding: 11px 11px 11px 11px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: auto;
  border-width: thin;
  text-align: center;
  margin-top: -1;
  margin-left: -1;
  color: #D0D0D0;
`;

const CalendarTitle = styled.section`
  font-size: 18px;
  font-weight: bold;
  height: 20px;
  width: 200px;
  padding-left: 43px;
  padding-right: 50px;
  margin-bottom: 20px;
`;

const CalendarBody = styled.section`
  color: black;
  border-color: #D0D0D0;
`;

const Title = styled.section`
  text-align: center;
`;

// const ClearDates = styled.section`
//   color: black;
//   border-color: #D0D0D0;
//   margin-left: 
//   border: solid;
// `;

const RightArrow = styled.section`
  border: solid;
  position: absolute;
  float: right;
  margin-top: -26px;
  margin-right: -48px;
  margin-left: 212px;
  padding: 5px 7px 5px 7px;
  border-width: thin;
  border-radius: 2px;
  color: #D0D0D0;
`;

const LeftArrow = styled.section`
  border: solid;
  float: left;
  margin-left: -40px;
  margin-top: -5px;
  padding: 5px 7px 5px 7px;
  border-width: thin;
  border-radius: 2px;
  color: #D0D0D0;
`;

const modalStyle = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    width: '22.5%',
    marginTop: '135px',
    marginLeft: '-1px',
    height: '310px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
  },
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: Moment(),
      showCalendar: false,
      checkOutbgColor: '',
      checkInbgColor: '',
    };
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.moveToNextMonth = this.moveToNextMonth.bind(this);
  }

  componentDidMount() {
    console.log('component did mount', this.handleBlockouts());
  }

  handleBlockouts() {
    const allBookings = this.props.bookings;
    console.log('in handle blockouts', allBookings);
    const bookingsThisMonth = [];
    const datesThisMonth = [];
    allBookings.forEach((element) => {
      const comparisonMonth = Number(this.props.bookings[element]);
      if (element.month === comparisonMonth) {
        bookingsThisMonth.push(element);
      }
    });

    // bookingsThisMonth.forEach((element) => {
    //   for (let i = 0; i < element.dates.length; i += 1) {
    //     datesThisMonth.push(element.dates[i]);
    //   }
    // });
    return bookingsThisMonth;
  }

  handleCheckInClick() {
    this.setState({
      showCalendar: !this.state.showCalendar,
    });

    if (this.state.showCalendar === false) {
      this.setState({
        checkInbgColor: '#75efe3',
        checkOutbgColor: '',
      });
    }
  }

  handleCheckOutClick() {
    this.setState({
      showCalendar: !this.state.showCalendar,
    });

    this.setState({
      checkInbgColor: '',
      checkOutbgColor: '#75efe3',
    });
  }

  placementOfFirstDayOfMonth() {
    const { currentMonth } = this.state;
    const firstDay = Moment(currentMonth)
      .startOf('month')
      .format('d');
    return firstDay;
  }

  previousMonth() {
    console.log(this.state.currentMonth.format('MMMM').toString() === Moment().format('MMMM').toString());
    if (this.state.currentMonth.format('MMMM').toString() === Moment().format('MMMM').toString()) {
      this.setState({
        currentMonth: Moment(),
      });
    } else {
      const lastMonth = Moment(this.state.currentMonth).subtract(1, 'months');
      this.setState({
        currentMonth: lastMonth,
      });
    }
  }

  moveToNextMonth() {
    const nextMonth = Moment(this.state.currentMonth).add(1, 'months');
    this.setState({
      currentMonth: nextMonth,
    });
  }

  month() {
    return this.state.currentMonth.format('MMMM');
  }

  year() {
    return this.state.currentMonth.format('YYYY');
  }

  weekDayFormat() {
    return Moment.weekdaysShort().map(day => (
      <DayOfMonth key={day}>
        {day.slice(0, -1)}
      </DayOfMonth>
    ));
  }

  onDayClick(e) {
    const dayClicked = Number(e.target.innerText);
    console.log(typeof Number(this.state.currentMonth.format('M')));
  }

  monthFormatter() {
    const fillerDays = [];
    const rowsOfDays = [];
    let daysPerEachWeek = [];
    const daysInAMonth = [];

    for (let i = 0; i < this.placementOfFirstDayOfMonth(); i += 1) {
      fillerDays.push(
        <CalendarDay style={{ border: 'none' }}></CalendarDay>,
      );
    }
    for (let d = 1; d <= this.state.currentMonth.daysInMonth(); d += 1) {
      daysInAMonth.push(
        <CalendarDay style={{ border: 'solid', borderWidth: 'thin', borderColor: 'grey' }} key={d}>
          {d}
        </CalendarDay>,
      );
    }

    //  the total number of spaces to be rendered (included blank spaces at the front)
    const totalCalendar = [...fillerDays, ...daysInAMonth];

    totalCalendar.forEach((row, i) => {
      if (i % 7 !== 0) {
        daysPerEachWeek.push(row);
      } else {
        rowsOfDays.push(daysPerEachWeek);
        daysPerEachWeek = [];
        daysPerEachWeek.push(row);
      }
      if (i === totalCalendar.length - 1) {
        rowsOfDays.push(daysPerEachWeek);
      }
    });
    return rowsOfDays.map(d => <tr onClick={(e) => { this.onDayClick(e); }}>{d}</tr>);
  }

  render() {
    const { checkInbgColor, checkOutbgColor } = this.state;
    return (
      <Wrapper>
        <CheckIn onClick={this.handleCheckInClick} style={{ backgroundColor: checkInbgColor }}>
          Check-in
        </CheckIn>
        <Arrow>
          <FontAwesomeIcon icon="arrow-right" />
        </Arrow>
        <CheckOut style={{ backgroundColor: checkOutbgColor }}>
            Checkout
        </CheckOut>
        <ReactModal
          isOpen={this.state.showCalendar}
          style={modalStyle}>

          {/* below is original files */}
          <CalendarTitle>
            <LeftArrow onClick={this.previousMonth}>
              <FontAwesomeIcon icon="arrow-left" />
            </LeftArrow>
            <Title>
              {this.month() + ' ' + this.year()}
            </Title>
            <RightArrow onClick={this.moveToNextMonth}>
              <FontAwesomeIcon icon="arrow-right" />
            </RightArrow>
          
          </CalendarTitle>
          <Weekday>
            {this.weekDayFormat()}
          </Weekday>
          <CalendarBody>
            {this.monthFormatter()}
          </CalendarBody>
        </ReactModal>
      </Wrapper>
    );
  }
}

export default Calendar;
