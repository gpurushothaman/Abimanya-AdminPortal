const mongoose = require("mongoose");

const doorOrientationSchema = new mongoose.Schema(
  {
    DoorOrientationname: {
      type: String,
      required: true,
    },

    DoorOrientationvalue: {
      type: String,
      required: true,
      enum: ["lhs", "rhs"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DoorOrientation",
  doorOrientationSchema
);