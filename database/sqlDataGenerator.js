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
  // eslint-disable-next-line no-use-before-define
  fillListingTable();
  // eslint-disable-next-line no-use-before-define
  fillBookingTable();
});

const fillListingTable = () => {
  for (let i = 1; i < 101; i += 1) {
    const randomMinNights = Math.floor(random() * 3);
    const randomMaxGuests = Math.floor(random() * 4) + 4;
    const reviewCount = Math.floor(random() * 500) + 10;
    const review = (random() * 3) + 2;
    const randomServiceFee = Math.floor(random() * 10) + 10;
    const randomOccupationalFee = Math.floor(random() * 10) + 10;
    const randomPricePerNight = Math.floor(random() * 701) + 50;

    const listingSql = `INSERT INTO listings (id, price_per_night, name_of_owner, min_nights, max_guests, service_fee, occupational_fee, municipal_info, reviews, review_count) VALUES (${i}, ${randomPricePerNight}, ${faker.fake('"{{name.firstName}}"')}, ${randomMinNights}, ${randomMaxGuests}, ${randomServiceFee}, ${randomOccupationalFee}, ${faker.fake('"{{address.country}} {{address.city}}"')}, ${review}, ${reviewCount})`;

    connectCnc.query(listingSql, (err, result) => {
      if (err) throw err;
      console.log(result, 'record inserted');
    });
  }
};

const fillBookingTable = () => {
  for (let i = 1; i < 1001; i += 1) {
    const whichListingId = Math.floor(random() * 100) + 1;
    const month = Math.floor(random() * 3) + 5;
    const startDate = Math.floor(random() * 27) + 1;
    const stay = Math.floor(random() * 6) + 1;
    connectCnc.query(`INSERT INTO bookings (id, listing_id, name, month_of_booking, start_date, duration) VALUES (${i}, ${whichListingId}, ${faker.fake('"{{name.firstName}}"')}, ${month}, ${startDate}, ${stay})`, (err, result) => {
      if (err) throw err;
      console.log(result, 'record inserted');
    });
  }
};


module.exports = {
  fillListingTable,
  fillBookingTable,
};
