const mongoose = require("mongoose");

const doorFrameSchema = new mongoose.Schema(
  {
    subDesignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorSubDesign",
      required: true,
    },
    frameName: {
      type: String,
      required: true,
    },
    frameValue: {
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
  "DoorFrame",
  doorFrameSchema
);