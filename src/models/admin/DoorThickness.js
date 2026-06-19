const mongoose = require("mongoose");

const doorThicknessSchema = new mongoose.Schema(
  {
    DoorThicknessname: {type: String,required: true,},
    DoorThicknessvalue: {type: Number,required: true, },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DoorThickness",
  doorThicknessSchema
);