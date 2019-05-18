const express = require('express');
const db = require('../database/index.js');

const app = express();

app.use(express.static('public'));

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
