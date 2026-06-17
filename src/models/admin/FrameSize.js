const mongoose = require("mongoose");

const frameSizeSchema = new mongoose.Schema(
  {
    name: {type: String,required: true,},
    type: {type: String,enum: ["height", "width"],required: true,},
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("FrameSize",frameSizeSchema);