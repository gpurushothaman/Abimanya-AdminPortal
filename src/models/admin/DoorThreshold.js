const mongoose = require("mongoose");

const doorThresholdSchema = new mongoose.Schema(
  {
    thresholdName: {type: String,required: true,},
    thresholdValue: {type: String,required: true,enum: ["yes", "no"],},
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DoorThreshold",doorThresholdSchema);