const mongoose = require("mongoose");

const doorSubDesignSchema = new mongoose.Schema(
  {
    designId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Design",
      required: true,
    },
    subDesignName: {
      type: String,
      required: true,
    },
    subDesignValue: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "DoorSubDesign",
  doorSubDesignSchema
);