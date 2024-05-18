const { HttpError, ctrlWrapper } = require("../helpers");
const { Event } = require("../models/event");

const getEvents = async (req, res) => {
  const { page = 1, limit = 6 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Event.find({}, "-createdAt, -updatedAt", {
    skip,
    limit,
  });
  res.json(result);
};

const getEventById = async (req, res) => {
  const { id } = req.params;
  const result = await Event.findById(id, "-createdAt, -updatedAt");
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = {
  getEvents: ctrlWrapper(getEvents),
  getEventById: ctrlWrapper(getEventById),
};
