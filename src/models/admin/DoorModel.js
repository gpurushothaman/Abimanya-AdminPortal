const mongoose = require("mongoose");

const DoorModelSchema = new mongoose.Schema(
  {
    subDesignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorSubDesign",
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DoorModel", DoorModelSchema);
