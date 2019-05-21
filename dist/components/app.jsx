/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayListing: [],
    };
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    axios.get('/listings')
      .then((response) => {
        this.setState({
          displayListing: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="title">Jeff's component</h1>
        <div>
          <Listings listings={this.state.displayListing} />
        </div>
      </div>
    );
  }
}

export default App;
