const mongoose = require("mongoose");

const doorOrientationSchema = new mongoose.Schema(
  {
    frameTypeOptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorFrameTypeOption",
      required: true,
    },
    doorOrientationName: {
      type: String,
      required: true,
    },

    doorOrientationValue: {
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
  "DoorOrientation",
  doorOrientationSchema
);