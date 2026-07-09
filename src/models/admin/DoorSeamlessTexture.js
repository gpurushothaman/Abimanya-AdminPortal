const mongoose = require("mongoose");

const DoorSeamlessTextureSchema = new mongoose.Schema(
  {
    designRefId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Design",
      required: true,
    },
    textureName: {
      type: String,
      required: true,
    },
    texturePath: {
      type: String,
      required: false,
      default: "",
    },
    textureFileName: {
      type: String,
      required: false,
      default: "",
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

module.exports = mongoose.model("DoorSeamlessTexture", DoorSeamlessTextureSchema);
