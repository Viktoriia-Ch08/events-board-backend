const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const participantSchema = new Schema(
  {
    user: {
      name: {
        type: String,
        required: [true, 'Set name for participant'],
      },
      email: {
        type: String,
      },
      birthDate: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
    eventId: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

participantSchema.post('save', handleMongooseError);

const Participant = model('participants', participantSchema);

const addSchema = Joi.object({
  user: {
    name: Joi.string()
      .min(3)
      .max(15)
      .required()
      .messages({ 'any.required': 'missing required name field' }),
    email: Joi.string()
      .required()
      .messages({ 'any.required': 'missing required email field' }),
    birthDate: Joi.string()
      .required()
      .messages({ 'any.required': 'missing required birthDate field' }),
    answer: Joi.string(),
  },
  eventId: Joi.string(),
});

const schemas = {
  addSchema,
};

module.exports = { Participant, schemas };
