const { HttpError, ctrlWrapper } = require("../helpers");
const { Participant } = require("../models/participant");

const registerParticipantToEvent = async (req, res) => {
  const { eventId, user } = req.body;
  const existingRegistration = await Participant.findOne(
    { eventId: eventId, "user.email": user.email },
    "-createdAt, -updatedAt"
  );
  if (existingRegistration) {
    throw HttpError(409, "Conflict");
  }

  const result = await Participant.create(req.body);
  res.status(201).json(result);
};

const getAllParticipantsByEventId = async (req, res) => {
  const { id } = req.params;
  const result = await Participant.find(
    { eventId: id },
    "-createdAt, -updatedAt"
  );
  res.json(result);
};

module.exports = {
  registerParticipantToEvent: ctrlWrapper(registerParticipantToEvent),
  getAllParticipantsByEventId: ctrlWrapper(getAllParticipantsByEventId),
};
