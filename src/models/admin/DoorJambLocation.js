const mongoose = require("mongoose");

const doorJambLocationSchema = new mongoose.Schema(
  {
    jambLocationName: {
      type: String,
      required: true,
    },

    jambLocationValue: {
      type: String,
      required: true,
      enum: ["front", "back"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DoorJambLocation",
  doorJambLocationSchema
);