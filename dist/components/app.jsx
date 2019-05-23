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
// import Listings from './Listings.jsx';
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
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  margin-bottom: 10px;

`;

const Footer1 = styled.section``;

const Footer2 = styled.section``;

const LightBulb = styled.section``;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    axios.get('/listings')
      .then((response) => {
        this.setState({
          pricePerNight: response.data[0].price_per_night,
          minNumOfNights: response.data[0].min_nights,
          maxGuests: response.data[0].max_guests,
          municipalInfo: response.data[0].municipal_info,
          reviewCount: response.data[0].review_count,
          reviews: response.data[0].reviews,
          serviceFee: response.data[0].service_fee,
          occupationalFee: response.data[0].occupational_fee,
          nameOfOwner: response.data[0].name_of_owner,
        });
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
          <button type="submit">BOOK</button>
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
