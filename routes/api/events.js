const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/events');

const { validateBody, isValidId } = require('../../middleware');
const { schemas } = require('../../models/participant');

router.get('/', ctrl.getAllEvents);

router.get('/:id', isValidId, ctrl.getEventById);

module.exports = router;
