/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-style: bold;
  width: 22%;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
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
  border-width: thin;
  text-align: center;
  margin: 0;
`;

const CalendarTitle = styled.section`
  text-align: center;
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

// display: table-cell;
// text-align: center;
// font-size: 12px;
// padding: 10px;
// table-layout: auto;
// width: 10px;
// width: fixed;
// border: solid;
// border-color: gray;
// border-width: thin;
// padding-top: none;


const CalendarBody = styled.section`
  color: black;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateObject: moment(),
    };
  }

  placementOfFirstDayOfMonth() {
    const { dateObject } = this.state;
    const firstDay = moment(dateObject)
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
          {this.month()}
          {' '}
          {this.year()}
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

const now = moment();
const weekdayshort = moment.weekdaysShort();

export default Calendar;
