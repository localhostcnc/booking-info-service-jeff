const mysql = require('mysql');
const faker = require('faker');
const Math = require('mathjs');
const random = require('math-random');

const connectCnc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cnc_reservations',
});


connectCnc.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  // every time this file is saved (to be more technical the connection end and restarts),
  // this below function is invoked and 100 more items are added to the database
  // until I find a more elegant solution to fill the database, this is how it has to be

  // fillListingTable();
});

const fillListingTable = () => {
  // const innerDeleteFunc = () => {
  //   connectCnc.query('DELETE from listings', (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(result, 'DELETED FROM DATABASE');
  //     }
  //   });
  // };

  // innerDeleteFunc()

  for (let i = 1; i < 101; i += 1) {
    let randomMinNights = Math.floor(random() * 3);
    let randomMaxGuests = Math.floor(random() * 4) + 4;
    let reviewCount = Math.floor(random() * 500) + 10;
    let review = (random() * 3) + 2;
    let randomServiceFee = Math.floor(random() * 10) + 10;
    let randomOccupationalFee = Math.floor(random() * 10) + 10;
    let randomPricePerNight = Math.floor(random() * 701) + 50;

    let listingSql = `INSERT INTO listings (id, price_per_night, name_of_owner, min_nights, max_guests, service_fee, occupational_fee, municipal_info, reviews, review_count) VALUES (${i}, ${randomPricePerNight}, ${faker.fake('"{{name.firstName}}"')}, ${randomMinNights}, ${randomMaxGuests}, ${randomServiceFee}, ${randomOccupationalFee}, ${faker.fake('"{{address.country}} {{address.city}}"')}, ${review}, ${reviewCount})`;

    connectCnc.query(listingSql, (err, result) => {
      if (err) throw err;
      console.log(result, 'record inserted');
    });
  }
};

// const checkValidBooking = () => {

//   // first question:
//   // how do we determine which nights are booked in a particular listing?
//   // look through booking table for desired ID of listing
//   // check the month, start date and duration of every booking that matches that ID
//   // add it to an array


//   // check open dates
//   // compare to min nights
// };

module.exports = {
  fillListingTable,
};
