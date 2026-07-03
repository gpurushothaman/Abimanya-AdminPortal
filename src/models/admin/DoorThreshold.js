const mongoose = require("mongoose");

const doorThresholdSchema = new mongoose.Schema(
  {
     frameTypeOptionId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "DoorFrameTypeOption",
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