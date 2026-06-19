const mongoose = require("mongoose");

const rangeSchema = new mongoose.Schema(
  {
    min: {
      type: Number,
      required: true,
      default: 0,
    },
    max: {
      type: Number,
      required: true,
      default: 100,
    },
  },
  { _id: false }
);

const dimensionSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: "GLOBAL_SETTINGS",
      unique: true,
    },
    height: {
      type: rangeSchema,
      default: () => ({ min: 50, max: 500 }),
    },
    width: {
      type: rangeSchema,
      default: () => ({ min: 50, max: 1000 }),
    },
    wallThickness: {
      type: rangeSchema,
      default: () => ({ min: 100, max: 2000 }),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dimension", dimensionSchema);
