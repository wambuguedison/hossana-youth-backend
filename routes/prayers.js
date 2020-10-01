const express = require('express');

const controllers = require('../controllers/prayers');

const router = express.Router();

router.get('/prayers', controllers.view_prayers);
router.post('/prayer', controllers.add_prayer);
router.put('/prayer/:id', controllers.edit_prayer);
router.delete('/prayer/:id', controllers.delete_prayer);

module.exports = router;
