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

const Wrapper = styled.section`
  font-style: bold;
  width: 103%;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
  padding: 2px;
  padding-top: 20px;
  padding-bottom: 60px;
  border: solid;

`;

const Weekday = styled.section`
  padding: 20px 2;
  width: 100%;
`;

const DayOfMonth = styled.section`
  padding-left: 10.5px;
  padding-right: 11px;
  fontStyle: bold;
  display: inline;
`;

const CalendarDay = styled.section`
  display: table-cell;
  padding: 11px 11px 11px 11px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: auto;
  border-width: .25px;
  text-align: center;
  margin: 0;
  color: #D0D0D0;
`;

const CalendarTitle = styled.section`
  font-size: 18px;
  font-weight: bold;
  height: 20px;
  width: 200px;
  margin-left: 50px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const CalendarBody = styled.section`
  color: black;
  border-color: #D0D0D0;
  margin-left: 10px;
`;

const Title = styled.section`
  color: black;
  display: inline-block;
  border: solid;

`;

// const ClearDates = styled.section`
//   color: black;
//   border-color: #D0D0D0;
//   margin-left: 
//   border: solid;
// `;

const RightArrow = styled.section`
  border: solid;
  display: inline-block;
  margin-right: 50px;
`;

const LeftArrow = styled.section`
  border: solid;
  margin-left: 50px;
  display: inline-block;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateObject: Moment(),
      currentBookings: [],
    };
    this.handleBookings = this.handleBookings.bind(this);
  }

  handleBookings() {
    const currentBookings = this.props.bookings;
    this.setState({
      currentBookings,
    });
  }

  // crossOutDay() {
  //   const lengthOfMonth = this.state.dateObject.daysInMonth();
  //   while()

  // }

  placementOfFirstDayOfMonth() {
    const { dateObject } = this.state;
    const firstDay = Moment(dateObject)
      .startOf('month')
      .format('d');
    return firstDay;
  }

  month() {
    return this.state.dateObject.format('MMMM');
  }

  year() {
    return this.state.dateObject.format('YYYY');
  }

  render() {
    const eachDayOfWeek = weekdayshort.map(day => (
      <DayOfMonth key={day}>
        {day.slice(0, -1)}
      </DayOfMonth>
    ));

    const fillerDays = [];
    for (let i = 0; i < this.placementOfFirstDayOfMonth(); i += 1) {
      fillerDays.push(
        <CalendarDay style={{ border: 'none' }}></CalendarDay>,
      );
    }

    const daysInAMonth = [];
    for (let d = 1; d <= this.state.dateObject.daysInMonth(); d += 1) {
      daysInAMonth.push(
        <CalendarDay style={{ border: 'solid', borderWidth: 'thin', borderColor: 'grey' }} key={d}>
          {d}
        </CalendarDay>,
      );
    }

    //  the total number of spaces to be rendered (included blank spaces at the front)
    const totalCalendar = [...fillerDays, ...daysInAMonth];
    const rowsOfDays = [];
    let daysPerEachWeek = [];

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

    const daysinmonth = rowsOfDays.map(d => <tr>{d}</tr>);

    return (
      <Wrapper>
        <CalendarTitle>
          <LeftArrow>
            
          </LeftArrow>
          <Title>
            {this.month() + ' ' + this.year()}
          </Title>
          <RightArrow>
            
          </RightArrow>
          
        </CalendarTitle>
        <Weekday>
          {eachDayOfWeek}
        </Weekday>
        <CalendarBody>
          {daysinmonth}
        </CalendarBody>
      </Wrapper>
    );
  }
}

// const now = moment();
const weekdayshort = Moment.weekdaysShort();

export default Calendar;
