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

const prayers = new nedb({ filename: './prayers.db', autoload: true });
const events = new nedb({ filename: './events.db', autoload: true });

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'we are the youth'
  });
});

app.get('/prayers', (req, res, next) => {
  prayers.find({}, (err, prayers) => {
    if (err) {
      res.status(500).json({
        error: err
      });
    }

    res.status(200).json({
      prayers
    });
  });
});

app.post('/prayer', (req, res, next) => {
  const prayer = {
    title: req.body.title,
    imageUrl: '',
    deleted: 0,
    user: req.id,
    created_at: new Date().toDateString()
  };
  prayers.insert(prayer, (err, prayer) => {
    if (err) {
      res.status(500).json({
        error: err
      });
    }
    let added_prayer = {
      title: prayer.title,
      id: prayer._id
    };
    res.status(201).json(added_prayer);
  });
});

app.get('/events', (req, res, next) => {
  events.find({}, (err, events) => {
    if (err) {
      res.status(500).json({
        error: err
      });
    }

    res.status(200).json({
      events
    });
  });
});

app.post('/event', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Event created successfully!'
  });
});

module.exports = app;
