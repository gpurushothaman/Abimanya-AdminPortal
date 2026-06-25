const mongoose = require("mongoose");

const doorFrameSchema = new mongoose.Schema(
  {
    frameName: {
      type: String,
      required: true,
    },

    frameValue: {
      type: String,
      required: true,
      enum: ["full", "half", "no"],
    },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DoorFrame",
  doorFrameSchema
);