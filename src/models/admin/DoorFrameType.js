const mongoose = require("mongoose");

const doorFrameTypeSchema = new mongoose.Schema(
  {
    frameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorFrame",
      required: true,
    },
    frameTypeName: {
      type: String,
      required: true,
    },
    frameTypeValue: {
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
  "DoorFrameType",
  doorFrameTypeSchema
);



