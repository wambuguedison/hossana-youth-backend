const db = require('../models/db');
const events = db.events;

exports.view_events = (req, res, next) => {
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
};

exports.add_event = (req, res, next) => {
  const event = {
    title: req.body.title,
    imageUrl: '',
    description: req.body.description,
    date: req.body.date,
    deleted: 0,
    user: req.id,
    created_at: new Date().toDateString()
  };
  events.insert(event, (err, event) => {
    if (err) {
      res.status(500).json({
        error: err
      });
    }
    let added_event = {
      title: event.title,
      description: event.description,
      date: event.date,
      id: event._id
    };
    res.status(201).json(added_event);
  });
};

exports.edit_event = (req, res, next) => {
  const new_event = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    date: req.body.date,
    deleted: 0,
    created_at: new Date().toDateString()
  };
  events.update({ _id: req.params.id }, new_event, {}, (err, numReplaced) => {
    if (err) {
      res.status(500).json({
        error: err
      });
    }
    let edited_event = {
      title: new_event.title,
      description: new_event.description,
      date: new_event.date,
      id: new_event._id
    };
    res.status(201).json(edited_event);
  });
};

exports.delete_event = (req, res, next) => {
  events.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
    res.status(204).send('event deleted successfully');
  });
};
