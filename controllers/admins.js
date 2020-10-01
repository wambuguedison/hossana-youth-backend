const db = require('../models/db');
const admins = db.admins;
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
  admins.findOne({ name: req.body.name }, (err, admin) => {
    if (err) {
      res.status(500).send(err);
    }
    if (admin !== null) {
      let info = {
        message: `the name ${req.body.name} is already in use`
      };
      res.status(422).json(info);
    } else {
      bcrypt.hash(req.body.password, 10).then((hash) => {
        const admin = {
          name: req.body.name,
          password: hash,
          created_at: new Date().toDateString()
        };
        admins.insert(admin, (err, admin) => {
          if (err) {
            res.status(500).json({
              error: err
            });
          }
          let added_admin = {
            name: admin.name,
            id: admin._id
          };
          res.status(201).json(added_admin);
        });
      });
    }
  });
};

exports.login = (req, res, next) => {};
