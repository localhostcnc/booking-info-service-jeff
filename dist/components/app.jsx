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
import styled from 'styled-components';
import random from 'math-random';
import Calendar from './calendar/index.jsx';

const Wrapper = styled.section`
  border: solid;
  width: 25%;
`;

const Price = styled.section`
  width: 25%;
`;

const Reviews = styled.section`
`;

const DatesHeader = styled.section`
  margin-left: 5%;
`;

const Dates = styled.section`
  border: solid;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const GuestHeader = styled.section`
  margin-top: 10px;
  margin-left: 5%;
`;

const Guests = styled.section`
  border: solid;
  margin-left: 5%;
  margin-right: 5%;
`;

const Book = styled.section`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
`;

const ChargedYet = styled.section`
  text-align: center;
`;

const Bar = styled.section`
  border: solid;
  border-width: thin;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Footer1 = styled.section``;

const Footer2 = styled.section``;

const LightBulb = styled.section``;

const TotalPrice = styled.section`
  text-align: left;
`;

const ServiceFee = styled.section`
  text-align: left;
`;

const OccupancyFeeAndTaxes = styled.section`
  text-align: left;
`;

const Total = styled.section`
  text-align: left;
  padding-bottom: 10px;
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
    };
    this.handleClick = this.handleClick.bind(this);
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
        this.setState({
          bookings: response.data,
        }, () => console.log(this.state.bookings));
      })
      .catch((error) => {
        throw error;
      });
  }

  handleClick() {
    this.setState({
      showCalendar: !this.state.showCalendar,
    });
  }

  handleBookClick() {
    this.setState({
      showBookingDetails: !this.state.showBookingDetails,
    });
  }

  render() {
    return (
      <Wrapper>
        <Price>
          ${this.state.pricePerNight} / night
        </Price>
        <Reviews>
          {this.state.reviews}*** {this.state.reviewCount}
        </Reviews>
        <Bar />
        <DatesHeader>
          Dates
        </DatesHeader>
        <Dates>
          CheckIn -> CheckOut
          <button onClick={this.handleClick}>
            Press here to expose calendar!
          </button>
          {this.state.showCalendar && <Calendar />}
        </Dates>
        <GuestHeader>
          Guests
        </GuestHeader>
        <Guests>
          1 Guest
        </Guests>
        <Book>
          {this.state.showBookingDetails
            && (
              <div>
                <TotalPrice>
                  {this.state.pricePerNight} x yNights ?
                </TotalPrice>
                <Bar />
                <ServiceFee>
                Service Fee: {this.state.serviceFee}
                </ServiceFee>
                <Bar />
                <OccupancyFeeAndTaxes>
                Occupany Fee and Taxes: {this.state.occupationalFee}
                </OccupancyFeeAndTaxes>
                <Bar />
                <Total>
              Total: {this.state.pricePerNight + this.state.serviceFee + this.state.occupationalFee}
                </Total>
              </div>
            )
          }
          <button onClick={this.handleBookClick}>
            CLICK HERE TO BOOK
          </button>
        </Book>
        <ChargedYet>
          You won't be charged yet
        </ChargedYet>
        <Bar />
        <Footer1>
          This home is on people's minds.
        </Footer1>
        <Footer2>
          It's been viewed 500+ times in the past week.
        </Footer2>
        <LightBulb />
      </Wrapper>
    );
  }
}

export default App;
