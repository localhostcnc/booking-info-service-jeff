/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-plusplus */
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
  padding-left: 12.5px;
  padding-right: 13px;
  font-style: bold;
  display: inline;
  font-size: 13px;
  color: #707070;
`;

const CalendarDay = styled.section`
  display: table-cell;
  padding: 12.5px 12.5px 12.5px 12.5px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: auto;
  text-align: center;
  margin-top: -1;
  margin-left: -1;
  color: 	#909090;
  border: solid;
  font-size: 12px;
`;

const AvailCalendarDay = styled.section`
  display: table-cell;
  padding: 12.5px 12.5px 12.5px 12.5px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: auto;
  text-align: center;
  margin-top: -1;
  margin-left: -1;
  color: #D0D0D0;
  border: solid;
  font-size: 12px;
  cursor: pointer;
  :hover {
    background: #DCDCDC;
  }
`;

const CalendarTitle = styled.section`
  font-size: 18px;
  font-weight: bold;
  height: 20px;
  width: 200px;
  padding-left: 43px;
  padding-right: 50px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CalendarBody = styled.section`
  color: black;
  border-color: #D0D0D0;
`;

const Title = styled.section`
  text-align: center;
`;

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
  cursor: pointer;
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
  cursor: pointer;
`;

const modalStyle = {
  overlay: {
    backgroundColor: 'none',
  },
  content: {
    width: '22.5%',
    marginTop: '125px',
    marginLeft: '769px',
    position: 'fixed',
    borderTop: '2px solid #368489',
    height: '295px',
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
      loading: 'initial',
      currentBookings: [],
      bookingsThisMonth: [],
      checkInOn: false,
      selectedDay: '',
      bgColor: '',
      availableDates: [],
    };
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.moveToNextMonth = this.moveToNextMonth.bind(this);
  }

  loadData() {
    const promise = new Promise((resolve, reject) => { 
      setTimeout(() => {
        resolve(this.props.bookings);
      }, 1000);
    });
    return promise;
  }

  componentDidMount() {
    this.setState({ loading: 'true' });
    this.loadData()
      .then((data) => {
        this.setState({
          currentBookings: data,
          loading: 'false',
        }, () => this.handleBlockouts(data));
      });
  }

  handleBlockouts(currentlyBooked) {
    const bookingsThisMonth = [];
    currentlyBooked.forEach((element) => {
      if (element.month === Number(this.state.currentMonth.format('M'))) {
        bookingsThisMonth.push(element.dates);
      }
    });
    const setOfBookings = new Set();
    bookingsThisMonth.forEach((element) => {
      for (let i = 0; i < element.length; i++) {
        setOfBookings.add(element[i]);
      }
    });
    this.setState({
      bookingsThisMonth: setOfBookings,
    }, () => console.log(this.state.bookingsThisMonth));
  }

  handleCheckInClick() {
    if (this.state.showCalendar === false) {
      this.setState({
        checkInbgColor: '#75efe3',
        checkOutbgColor: '',
        checkInOn: true,
        showCalendar: !this.state.showCalendar,
      });
    } else {
      this.setState({
        checkInbgColor: '',
        checkOutbgColor: '',
        checkInOn: false,
        showCalendar: !this.state.showCalendar,
      });
    }
  }

  handleCheckOutClick() {
    if (this.state.checkInOn && this.state.showCalendar) {
      this.setState({
        checkInbgColor: '',
        checkOutbgColor: '#75efe3',
        checkInOn: false,
      });
    } else if (this.state.showCalendar === false) {
      this.setState({
        checkInbgColor: '',
        checkOutbgColor: '#75efe3',
        showCalendar: !this.state.showCalendar,
      });
    } else if (!this.state.showCalendar) {
      this.setState({
        checkInbgColor: '',
        checkOutbgColor: '',
      });
    }
  }

  placementOfFirstDayOfMonth() {
    const { currentMonth } = this.state;
    const firstDay = Moment(currentMonth)
      .startOf('month')
      .format('d');
    return firstDay;
  }

  previousMonth() {
    if (this.state.currentMonth.format('MMMM').toString() === Moment().format('MMMM').toString()) {
      this.setState({
        currentMonth: Moment(),
      });
    } else {
      const lastMonth = Moment(this.state.currentMonth).subtract(1, 'months');
      this.setState({
        currentMonth: lastMonth,
      }, () => this.handleBlockouts(this.state.currentBookings));
    }
  }

  moveToNextMonth() {
    const nextMonth = Moment(this.state.currentMonth).add(1, 'months');
    this.setState({
      currentMonth: nextMonth,
    }, () => this.handleBlockouts(this.state.currentBookings));
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
    // const background = { backgroundColor: '#368489' }
    // for (let i; i < this.state.availableDates.length; i++) {
    //   if (this.state.availableDates.length)
    // }
  }

  grabCalendarDates(dates) {
    for (let i; i < dates.length; i++) {
      if (dates[i].key === this.state.selectedDay) {
        console.log(dates[i]);
      }
    }
  }

  monthFormatter() {
    const fillerDays = [];
    const rowsOfDays = [];
    const monthArr = [];
    const iterateArr = [];
    let daysPerEachWeek = [];
    const availableDaysInAMonth = [];
    const blockedOffDaysInAMonth = [];

    for (let i = 0; i < this.placementOfFirstDayOfMonth(); i += 1) {
      fillerDays.push(
        <CalendarDay style={{ border: 'none' }}></CalendarDay>,
      );
    }

    this.state.bookingsThisMonth.forEach((element) => {
      monthArr.push(element);
    });

    for (let d = 1; d <= this.state.currentMonth.daysInMonth(); d += 1) {
      iterateArr.push(d);
    }

    for (let i = 1; i <= iterateArr.length; i++) {
      if (monthArr.includes(iterateArr[i])) {
        blockedOffDaysInAMonth.push(
          <CalendarDay style={{ opacity: '.3', textDecoration: 'line-through', borderWidth: 'thin', fontColor: '#D0D0D0' }} key={i}>
            {i}
          </CalendarDay>,
        );
      } else {
        availableDaysInAMonth.push(
          <AvailCalendarDay onClick={this.onDayClick} style={{ borderWidth: 'thin', borderColor: '#D0D0D0', color: 'black' }} key={i}>
            {i}
          </AvailCalendarDay>,
        );
      }
    }

    const sortArr = [...availableDaysInAMonth, ...blockedOffDaysInAMonth];
    const months = sortArr.sort((a, b) => a.key - b.key);
    const totalCalendar = [...fillerDays, ...months];

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
    const { showCalendar, checkInbgColor, checkOutbgColor } = this.state;

    return (
      <Wrapper>
        <CheckIn onClick={this.handleCheckInClick} style={{ backgroundColor: checkInbgColor }}>
          Check-in
        </CheckIn>
        <Arrow>
          <FontAwesomeIcon icon="arrow-right" />
        </Arrow>
        <CheckOut onClick={this.handleCheckOutClick} style={{ backgroundColor: checkOutbgColor }}>
            Checkout
        </CheckOut>
        <ReactModal
          isOpen={showCalendar}
          dismiss={this.hideModal}
          onRequestClose={() => this.setState({ showCalendar: !this.state.showCalendar, checkInbgColor: '', checkOutbgColor: '' })}
          style={modalStyle}>
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
