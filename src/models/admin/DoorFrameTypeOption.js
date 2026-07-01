const mongoose = require("mongoose");

const doorFrameTypeOptionSchema = new mongoose.Schema(
  {
    frameTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorFrameType",
      required: true,
    },
    frameTypeOptionName: {
      type: String,
      required: true,
    },
    frameTypeOptionValue: {
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
  "DoorFrameTypeOption",
  doorFrameTypeOptionSchema
);