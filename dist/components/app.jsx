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
import styled, { createGlobalStyle } from 'styled-components';
import random from 'math-random';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Calendar from './calendar/index.jsx';
import renderStars from './stars/renderStars.js';


library.add(faLightbulb, faArrowRight, faStar);

// import { library } from '@fortawesome/fontawesome-svg-core';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Notable', sans-serif;
  }
`;

const Wrapper = styled.section`
  border: solid;
  border-width: 1px;
  border-color: #D0D0D0
  width: 30%;
  color: #484848;
`;

const Price = styled.section`
  margin-left: 8%;
  padding-top: 20px;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  margin-right: 2px;
`;

const PerNight = styled.section`
  display: inline-block;
  font-size: 12px;
`;

const Reviews = styled.section`
  margin-left: 8%;
  font-size: 12px;
`;

const DatesHeader = styled.section`
  margin-left: 8%;
  font-size: 12px;
  padding-top: 10px;
  font-weight: semi-bold;
`;

const Dates = styled.section`
  border: solid;
  border-width: 1px;
  border-color: #D0D0D0
  text-align: center;
  margin-left: 8%;
  margin-right: 8%;
  padding: 8px;
`;

const CheckIn = styled.section`
  display: inline-block;
  color: gray;
  font-size: 17px;
  font-weight: lighter;
  text-align: left;
  padding: 5px 50px 5px 5px;
  border-radius: 5px;
`;

const CheckOut = styled.section`
  text-align: right;
  display: inline-block;
  color: gray;
  font-size: 17px;
  font-weight: lighter;
  padding: 5px 50px 5px 5px;
  border-radius: 5px;
`;

const Arrow = styled.section`
  text-align: center;
  display: inline-block;
  padding-left: 12px;
  padding-right: 10px;

`;

const GuestHeader = styled.section`
  margin-left: 8%;
  font-size: 12px;
  padding-top: 10px;
  font-weight: 400;
`;

const GuestWrapper = styled.section`
  border: solid;
  border-width: 1px;
  border-color: #D0D0D0
  margin-left: 8%;
  margin-right: 8%;
  padding-top: 14px;
  padding-bottom: 14px;
`;

const Guests = styled.section`
  margin-left: 5%;
  text-align: left;
  display: inline-block;
  margin-right: 60px;
  font-size: 17px;
  font-weight: lighter;
`;

const Book = styled.section`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
`;

const Button = styled.section`
  margin-left: 2%;
  margin-right: 2%;
  border: solid;
  color: white;
  padding: 15px 50px 15px 50px;
  background-color: #fc534e;
  border-radius: 7px;
  font-size: 16px;
`;

const ChargedYet = styled.section`
  text-align: center;
  font-size: 13px;
  margin-top: -20px;
  font-weight: 500;
`;

const Bar = styled.section`
  border: solid;
  border-width: .25px;
  border-color: #D0D0D0
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Bar2 = styled.section`
  border: solid;
  border-width: .5px;
  border-color: #D0D0D0
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 10px;
`;

const Bar3 = styled.section`
  border: solid;
  border-width: .5px;
  border-color: #D0D0D0
  margin-top: 10px;
  margin-left: 3%;
  margin-right: 3%;
`;

const Footer1 = styled.section`
  margin-top: 20px;
  margin-left: 8%;
  font-weight: bold;
  font-size: 14px;
  margin-right: 30%;
`;

const Footer2 = styled.section`
  margin-top: 5px;
  font-size: 14px;
  margin-left: 8%;
  margin-bottom: 20px;
  margin-right: 20%;
`;

const LightBulb = styled.section`
  float: right; 
  width: 20%;
  margin-bottom: 50px;
  height: 100%;
  padding-top: 28px;
`;

const TotalPrice = styled.section`
  text-align: left;
  margin-left: 10px;
  margin-top: -10px;
  font-size: 14px;
  font-weight: lighter;
  display: inline-block;
  margin-right: 210px;
`;

const ServiceFee = styled.section`
  text-align: left;
  margin-left: 8px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: lighter;
  display: inline-block;
  margin-right: 220px;
`;

const OccupancyFeeAndTaxes = styled.section`  
  text-align: left;
  margin-left: 8px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: lighter;
  display: inline-block;
  margin-right: 132px;
`;

const Fee1 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
`;

const Fee2 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
  font-size: 14px;
  font-weight: lighter;
`;

const Fee3 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
`;

const Total = styled.section`
  text-align: left;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-top: 7px;
  font-size: 14px;
  padding-bottom: 20px;
  display: inline-block;
  margin-right: 250px;
  font-weight: bolder;
`;

const Fee4 = styled.section`
  text-align: right;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: bolder;
  display: inline-block;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
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
      showBookingDetails: false,
      bookings: [],
      highlightedCheck: false,
      checkOutbgColor: '',
      checkInbgColor: '',
    };
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.handleBookClick = this.handleBookClick.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    const randomIndex = Math.floor(random() * 100) + 1;
    axios.get('/listings')
      .then((response) => {
        this.setState({
          id: response.data[randomIndex].id,
          pricePerNight: response.data[randomIndex].price_per_night,
          minNumOfNights: response.data[randomIndex].min_nights,
          maxGuests: response.data[randomIndex].max_guests,
          municipalInfo: response.data[randomIndex].municipal_info,
          reviewCount: response.data[randomIndex].review_count,
          reviews: response.data[randomIndex].reviews,
          serviceFee: response.data[randomIndex].service_fee,
          occupationalFee: response.data[randomIndex].occupational_fee,
          nameOfOwner: response.data[randomIndex].name_of_owner,
        }, () => this.getBooking());
      })
      .catch((error) => {
        throw error;
      });
  }

  getBooking() {
    axios.get('/bookings', {
      params: {
        ID: this.state.id,
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

  render() {
    return (
      <div>
        <GlobalStyles />
        <Wrapper>
          <Price>
          ${this.state.pricePerNight}
          </Price>
          <PerNight>
          per night
          </PerNight>
          <Reviews>
            <renderStars starCount={this.state.reviews} /> {this.state.reviewCount}
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
          <GuestWrapper>
            <Guests>
            1 guest
            </Guests>
          </GuestWrapper>
          <Book>
            {this.state.showBookingDetails
            && (
              <div>
                <TotalPrice>
                  ${this.state.pricePerNight} x _ nights
                </TotalPrice>
                <Fee1>
                  ?
                </Fee1>
                <Bar3 />
                <ServiceFee>
                  Service Fee
                </ServiceFee>
                <Fee2>
                  ${this.state.serviceFee}
                </Fee2>
                <Bar3 />
                <OccupancyFeeAndTaxes>
                Occupany taxes and fees
                </OccupancyFeeAndTaxes>
                <Fee3>
                ${this.state.occupationalFee}
                </Fee3>
                <Bar3 />
                <Total>
                  Total
                </Total>
                <Fee4>
                  ${this.state.pricePerNight + this.state.serviceFee + this.state.occupationalFee}
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
