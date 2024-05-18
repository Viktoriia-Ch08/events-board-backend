const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/participant');

const { validateBody, isValidId } = require('../../middleware');
const { schemas } = require('../../models/participant');

router.post('/register', validateBody(schemas.addSchema), ctrl.addParticipant);

router.get('/participants/:id', isValidId, ctrl.getAllEventParticipants);

router.delete('/:id', isValidId, ctrl.deleteParticipant);

module.exports = router;
