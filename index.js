const express = require('express');
const db = require('./server/db/booking');

const APP = express();

APP.get('/api/v1/booking', (req, res) => {
  const booking = db;
  res.json(booking);
});

const PORT = 5000;

APP.listen(PORT, () => console.log(`Server running on port: ${PORT}`));