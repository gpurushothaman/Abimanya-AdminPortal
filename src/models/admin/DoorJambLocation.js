const mongoose = require("mongoose");

const doorJambLocationSchema = new mongoose.Schema(
  {
    subDesignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorSubDesign",
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
