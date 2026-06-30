const mongoose = require("mongoose");

const doorOrientationSchema = new mongoose.Schema(
  {
    subDesignId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "DoorSubDesign",
          required: true,
        },
    DoorOrientationname: {
      type: String,
      required: true,
    },

    DoorOrientationvalue: {
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
  "DoorOrientation",
  doorOrientationSchema
);