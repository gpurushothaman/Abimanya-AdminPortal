const mongoose = require("mongoose");

const DoorShadesSchema = new mongoose.Schema(
  {
    modelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoorModel",
      required: true,
    },
    shadeName: {
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
    seamlessTextureID: {
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

module.exports = mongoose.model("DoorShades", DoorShadesSchema);
