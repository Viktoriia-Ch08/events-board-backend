const express = require('express');
const router = express.Router();

const participantsCtrl = require('../controllers/participants');
const eventsCtrl = require('../controllers/events');

const { validateBody, isValidId } = require('../middleware');
const { schemas } = require('../models/participant');

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the event
 *         title:
 *           type: string
 *           description: The title of the event
 *         organizer:
 *           type: string
 *           description: The organizer of the event
 *         eventDate:
 *           type: string
 *           description: The date of the event
 *         description:
 *           type: string
 *           description: The description of the event
 *         imageUrl:
 *           type: string
 *           description: The image url of the event
 *       example:
 *          _id: 66477cfe31c9d7990db23fb8
 *          title: Retro Fetish Burlesque Show
 *          organizer: Worek Kości
 *          eventDate: today 21:00
 *          description: A delicately fetish show, in an elegant retro style. The stage will feature stunning gowns, boas, fans and...
 *          imageUrl: https://goout.net/i/096/961086-800.jpg
 *     PaginatedEventsResponse:
 *       type: object
 *       properties:
 *         totalRecords:
 *           type: integer
 *           description: 'Total number of records available'
 *         currentPage:
 *           type: integer
 *           description: 'Current page number'
 *         totalPages:
 *           type: integer
 *           description: 'Total number of pages available'
 *         events:
 *           type: array
 *           description: 'The list of events'
 *           items:
 *             $ref: '#/components/schemas/Event'
 */

/**
 * @swagger
 * tags:
 *   - name: Events
 *     description: API for events
 */

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Returns the paginated list of all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PaginatedEventsResponse'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               error:
 *                 message: "Bad Request"
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *            example:
 *             error:
 *              message: "Not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *            example:
 *             error:
 *              message: "Server error"
 */

router.get('/events', eventsCtrl.getEvents);

router.get('/events/:id', eventsCtrl.getEventById);

router.get(
  '/events/:id/participants',
  isValidId,
  participantsCtrl.getAllParticipantsByEventId
);

router.get('/participant/:email', participantsCtrl.getParticipantByEmail);

router.post(
  '/events/:id/register/participant',
  validateBody(schemas.registerSchema),
  participantsCtrl.registerParticipantToEvent
);

module.exports = router;
