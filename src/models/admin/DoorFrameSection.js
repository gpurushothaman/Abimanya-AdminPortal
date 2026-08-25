const mongoose = require("mongoose");

const doorFrameSectionsSchema = new mongoose.Schema(
  {
    frameTypeOptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorFrameTypeOption",
      required: true,
    },
    frameSectionName: {
      type: String,
      required: true,
    },
    frameSectionValue: {
      type: String,
      required: true
    },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DoorFrameSection",
  doorFrameSectionsSchema
);