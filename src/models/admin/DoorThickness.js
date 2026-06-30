const mongoose = require("mongoose");

const doorThicknessSchema = new mongoose.Schema(
  {
      subDesignId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "DoorSubDesign",
              required: true,
            },
    DoorThicknessName: {type: String,required: true,},
    DoorThicknessValue: {type: Number,required: true, },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DoorThickness",
  doorThicknessSchema
);