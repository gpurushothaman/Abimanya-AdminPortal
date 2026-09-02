const mongoose = require("mongoose");

const architraveOptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const doorArchitraveSchema = new mongoose.Schema(
  {
    frameTypeOptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorFrameTypeOption",
      required: true,
    },

    front: {
      type: [architraveOptionSchema],
      default: [],
    },

    back: {
      type: [architraveOptionSchema],
      default: [],
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

module.exports = mongoose.model(
  "DoorArchitrave",
  doorArchitraveSchema
);