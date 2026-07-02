const mongoose = require("mongoose");

const doorThicknessSchema = new mongoose.Schema(
  {
      frameTypeOptionId: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "DoorFrameTypeOption",
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