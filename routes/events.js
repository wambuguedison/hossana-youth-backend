const express = require('express');

const controllers = require('../controllers/events');

const router = express.Router();

router.get('/events', controllers.view_events);
router.post('/event', controllers.add_event);
router.put('/event/:id', controllers.edit_event);
router.delete('/event/:id', controllers.delete_event);

module.exports = router;
