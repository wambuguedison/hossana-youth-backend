const nedb = require('nedb');

exports.events = new nedb({ filename: './models/events.db', autoload: true });

exports.prayers = new nedb({ filename: './models/prayers.db', autoload: true });

exports.admins = new nedb({ filename: './models/admins.db', autoload: true });
