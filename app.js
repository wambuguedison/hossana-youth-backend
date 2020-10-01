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

app.post('/prayer', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'prayer added successfully!'
  });
});

app.get('/events', (req, res, next) => {
  res.status(200).json({
    events: []
  });
});

app.post('/event', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Event created successfully!'
  });
});

module.exports = app;
