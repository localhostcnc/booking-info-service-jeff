/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';

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

  render() {
    const eachDayOfWeek = weekdayshort.map(day => (
      <td key={day} className="dayOfMonth">
        {day.slice(0, -1)}
      </td>
    ));

    const fillerDays = [];
    for (let i = 0; i < this.placementOfFirstDayOfMonth(); i += 1) {
      fillerDays.push(
        <tr className="calendar-day-empty"></tr>,
      );
    }

    const daysInAMonth = [];
    for (let d = 1; d <= this.state.dateObject.daysInMonth(); d += 1) {
      daysInAMonth.push(
        <tr key={d} className="calendar-day">
          {d}
        </tr>,
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

    const daysinmonth = totalCalendar.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table>
        <thead>
          <tr>
            <td className="weekdays">
              {eachDayOfWeek}
            </td>
          </tr>
        </thead>
        <tbody>
          {daysinmonth}
        </tbody>
      </table>
    );
  }
}

const now = moment();
const weekdayshort = moment.weekdaysShort();

export default Calendar;
