const mysql = require('mysql');

const connec = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cnc_reservations',
});

connec.connect();

const getListings = (callback) => {
  connec.query('SELECT * from listings', (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getBooking = (id, callback) => {
  const numId = Number(id);
  connec.query(`SELECT * from bookings WHERE listing_id = ${numId}`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getListings,
  getBooking,
};
