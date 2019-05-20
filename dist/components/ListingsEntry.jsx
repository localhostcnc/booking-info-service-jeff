/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
import React from 'react';

const ListingsEntry = props => (
  <div>
    <div>
id:
      {' '}
      {props.listing.id}
      {' '}
max guests:
      {' '}
      {props.listing.max_guests}
      {' '}
min nights:
      {' '}
      {props.listing.min_nights}
      {' '}
muni info:
      {' '}
      {props.listing.municipal_info}
      {' '}
name:
      {' '}
      {props.listing.name_of_owner}
      {' '}
occupation fee:
      {' '}
      {props.listing.occupational_fee}
      {' '}
price:
      {' '}
      {props.listing.price_per_night}
      {' '}
review count:
      {' '}
      {props.listing.review_count}
      {' '}
reviews:
      {' '}
      {props.listing.reviews}
      {' '}
service fee:
      {' '}
      {props.listing.service_fee}
    </div>
  </div>
);

export default ListingsEntry;
