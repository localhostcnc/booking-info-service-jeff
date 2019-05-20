/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
import React from 'react';
import ListingsEntry from './ListingsEntry.jsx';

const Listings = props => (
  <div>
    {props.listings.map(listing => <ListingsEntry listing={listing} key={listing.id} />)}
  </div>
);


export default Listings;
