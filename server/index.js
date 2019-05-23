const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

app.listen(PORT, () => {
  console.log('in server listening on: ', PORT);
});

app.get('/listings', (req, res) => {
  db.getListings((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/bookings', (req, res) => {
  db.getBooking(req.query.ID, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
