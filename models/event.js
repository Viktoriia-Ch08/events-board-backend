const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const eventSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    eventDate: {
      type: String,
    },
    organizer: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const Event = model('events', eventSchema);

module.exports = { Event };
