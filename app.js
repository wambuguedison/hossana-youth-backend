const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nedb = require('nedb');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const events = require('./routes/events');
const prayers = require('./routes/prayers');
app.use('', events);
app.use('', prayers);

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'we are the youth'
  });
});

module.exports = app;
