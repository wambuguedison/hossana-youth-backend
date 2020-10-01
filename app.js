const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

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

module.exports = app;
