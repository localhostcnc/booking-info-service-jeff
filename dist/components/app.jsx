/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import random from 'math-random';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowRight, faStar, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyles, Wrapper, Price, PerNight, Reviews, DatesHeader, Dates, CheckIn, CheckOut, Arrow, GuestHeader,
  GuestWrapper, Guests, AngleDown, Book, Button, ChargedYet, Bar, Bar2, Bar3, Footer1, Footer2, LightBulb, TotalPrice,
  ServiceFee, OccupancyFeeAndTaxes, Fee1, Fee2, Fee3, Fee4, Total } from './styles.js';
import Calendar from './calendar/index.jsx';
import RenderStars from './stars/renderStars.jsx';
import GuestDropDown from './guestDropDown/guestDropDown.jsx';

library.add(faLightbulb, faArrowRight, faStar, faAngleDown);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentListing: {},
      showCalendar: false,
      showBookingDetails: false,
      bookings: [],
      highlightedCheck: false,
      checkOutbgColor: '',
      checkInbgColor: '',
      showGuests: false,
    };
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.handleBookClick = this.handleBookClick.bind(this);
    this.showGuests = this.showGuests.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    const randomIndex = Math.floor(random() * 100) + 1;
    axios.get('/listings')
      .then((response) => {
        const listing = response.data[randomIndex];
        this.setState({
          currentListing: listing,
        }, () => this.getBooking());
      })
      .catch((error) => {
        throw error;
      });
  }

  getBooking() {
    axios.get('/bookings', {
      params: {
        ID: this.state.currentListing.id,
      },
    })
      .then((response) => {
        const monthlyBooking = response.data;
        const allBooking = [];
        monthlyBooking.forEach((element) => {
          let length = element.duration;
          let startDate = element.start_date;
          const dates = [];
          while (length > 0) {
            dates.push(startDate);
            startDate++;
            length--;
          }
          allBooking.push({ month: element.month_of_booking, dates });
        });
        this.setState({
          bookings: allBooking,
        }, () => console.log(this.state.bookings));
      })
      .catch((error) => {
        throw error;
      });
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

  handleBookClick() {
    this.setState({
      showBookingDetails: !this.state.showBookingDetails,
    });
  }

  showGuests() {
    this.setState({
      showGuests: !this.state.showGuests,
    });
  }

  render() {
    const { currentListing } = this.state;

    return (
      <div>
        <GlobalStyles />
        <Wrapper>
          <Price>
          ${currentListing.price_per_night}
          </Price>
          <PerNight>
          per night
          </PerNight>
          <Reviews>
            <div style={{ display: 'inline-block' }}>
              <RenderStars count={currentListing.reviews} star={<FontAwesomeIcon icon="lightbulb" />} />
            </div>
            <div style={{ display: 'inline-block', marginLeft: '2px' }}>
              {currentListing.review_count}
            </div>
          </Reviews>
          <Bar />
          <DatesHeader>
          Dates
          </DatesHeader>
          <Dates>
            <CheckIn onClick={this.handleCheckInClick} style={{ backgroundColor: this.state.checkInbgColor }}>
            Check-in
            </CheckIn>
            <Arrow>
              <FontAwesomeIcon icon="arrow-right" />
            </Arrow>
            <CheckOut onClick={this.handleCheckOutClick} style={{ backgroundColor: this.state.checkOutbgColor }}>
            Checkout
            </CheckOut>
            {this.state.showCalendar && <Calendar bookings={this.state.bookings} />}
          </Dates>
          <GuestHeader>
          Guests
          </GuestHeader>
          <GuestWrapper onClick={this.showGuests}>
            <Guests>
              1 guest {this.state.showGuests && <GuestDropDown maxGuests={currentListing.max_guests} />}
            </Guests>
            <AngleDown>
              <FontAwesomeIcon icon="angle-down" size="lg" />
            </AngleDown>
          </GuestWrapper>
          <Book>
            {this.state.showBookingDetails
            && (
              <div>
                <TotalPrice>
                  ${currentListing.price_per_night} x _ nights
                </TotalPrice>
                <Fee1>
                  ?
                </Fee1>
                <Bar3 />
                <ServiceFee>
                  Service Fee
                </ServiceFee>
                <Fee2>
                  ${currentListing.service_fee}
                </Fee2>
                <Bar3 />
                <OccupancyFeeAndTaxes>
                Occupany taxes and fees
                </OccupancyFeeAndTaxes>
                <Fee3>
                ${currentListing.occupational_fee}
                </Fee3>
                <Bar3 />
                <Total>
                  Total
                </Total>
                <Fee4>
                  ${currentListing.price_per_night + currentListing.service_fee + currentListing.occupational_fee}
                </Fee4>
              </div>
            )
          }
            <Button onClick={this.handleBookClick}>
              Book
            </Button>
          </Book>
          <ChargedYet>
          You won't be charged yet
          </ChargedYet>
          <Bar2 />
          {/* TODO: conditionally render this with a randomizer */}
          <LightBulb>
            <FontAwesomeIcon icon="lightbulb" size="2x" />
          </LightBulb>
          <Footer1>
          This home is on people's minds.
          </Footer1>
          <Footer2>
          It's been viewed 500+ times in the past week.
          </Footer2>
        </Wrapper>
      </div>
    );
  }
}

export default App;
