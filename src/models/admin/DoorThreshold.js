const mongoose = require("mongoose");

const doorThresholdSchema = new mongoose.Schema(
  {
    thresholdName: {type: String,required: true,},
    thresholdValue: {type: String,required: true,enum: ["yes", "no"],},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DoorThreshold",doorThresholdSchema);