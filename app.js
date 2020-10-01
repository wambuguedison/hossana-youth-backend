const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'we are the youth'
  });
});

app.get('/prayers', (req, res, next) => {
  res.status(200).json({
    prayers: []
  });
});

app.get('/events', (req, res, next) => {
  res.status(200).json({
    events: []
  });
});

module.exports = app;
