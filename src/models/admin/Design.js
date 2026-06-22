const mongoose = require("mongoose");
const doorDesignSchema = new mongoose.Schema(
  {
    designName: { type: String, required: true },
    designValue: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Design", doorDesignSchema);