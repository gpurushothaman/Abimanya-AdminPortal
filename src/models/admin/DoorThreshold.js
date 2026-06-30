const mongoose = require("mongoose");

const doorThresholdSchema = new mongoose.Schema(
  {
     subDesignId: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "DoorSubDesign",
                  required: true,
                },
    thresholdName: {type: String,required: true,},
    thresholdValue: {type: String,required: true},
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DoorThreshold",doorThresholdSchema);