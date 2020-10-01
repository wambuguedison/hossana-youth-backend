const db = require('../models/db');
const prayers = db.prayers;

exports.view_prayers = (req, res, next) => {
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
};

exports.add_prayer = (req, res, next) => {
  const prayer = {
    title: req.body.title,
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
};

exports.edit_prayer = (req, res, next) => {
  const new_prayer = {
    title: req.body.title,
    deleted: 0,
    created_at: new Date().toDateString()
  };
  prayers.update({ _id: req.params.id }, new_prayer, {}, (err, numReplaced) => {
    if (err) {
      res.status(500).json({
        error: err
      });
    }
    let edited_prayer = {
      title: new_prayer.title,
      id: new_prayer._id
    };
    res.status(201).json(edited_prayer);
  });
};

exports.delete_prayer = (req, res, next) => {
  prayers.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
    res.status(204).send('Prayer deleted successfully');
  });
};
