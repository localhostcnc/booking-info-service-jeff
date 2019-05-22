/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import styled from 'styled-components';
// import Listings from './Listings.jsx';

const Wrapper = styled.section`
  border: solid;
  width: 25%;
`;

const Price = styled.section`
  border: solid;
  width: 25%;
`;
=======
import Listings from './Listings.jsx';
import Calendar from './calendar/index.jsx';
>>>>>>> cf0b8c162dabf6747cf1e12743b1d3fb36dd3836

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
    };
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    axios.get('/listings')
      .then((response) => {
        console.log(response.data[0]);
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
        }, () => console.log(this.state));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
<<<<<<< HEAD
      <Wrapper>
        <Price>{this.state.pricePerNight}</Price>
          <div>
            {/* <Listings listings={this.state.displayListing} /> */}
          </div>
=======
      <div>
        <div>
          <Calendar />
          {/* <Listings listings={this.state.displayListing} /> */}
>>>>>>> cf0b8c162dabf6747cf1e12743b1d3fb36dd3836
        </div>
      </Wrapper>
              <Footer>
              <h2>Report this listing</h2>
            </Footer>
      
    );
  }
}

export default App;
