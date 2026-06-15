const mongoose = require("mongoose");
const doorLocationSchema = new mongoose.Schema(
  {
    doorLocationName: { type: String, required: true },
    doorLocationValue: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("DoorLocation", doorLocationSchema);
