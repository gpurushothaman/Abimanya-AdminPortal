const mongoose = require("mongoose");

const doorJambLocationSchema = new mongoose.Schema(
  {
     frameTypeOptionId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "DoorFrameTypeOption",
       required: true,
     },
    jambLocationName: {
      type: String,
      required: true,
    },
    jambLocationValue: {
      type: String,
      required: true,
    },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DoorJambLocation", doorJambLocationSchema);
