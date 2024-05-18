const { HttpError, ctrlWrapper } = require('../helpers');
const addParticipant = async (req, res) => {
  const result = await Participant.create(req.body);
  res.status(201).json(result);
};

const getAllEventParticipants = async (req, res) => {
  const { id } = req.params;
  const result = await Participant.find(
    { eventId: id },
    '-createdAt, -updatedAt'
  );
  console.log(result);
  if (!result) {
    throw HttpError(404, 'Not Found');
  }
  res.json(result);
};

const deleteParticipant = async (req, res) => {
  const { id } = req.params;
  const result = await Participant.findOneAndDelete({ _id: id });
  if (!result) {
    throw HttpError(404, 'Not Found');
  }
  res.status(200).json({ message: 'contact deleted' });
};

module.exports = {
  addParticipant: ctrlWrapper(addParticipant),
  deleteParticipant: ctrlWrapper(deleteParticipant),
  getAllEventParticipants: ctrlWrapper(getAllEventParticipants),
};
