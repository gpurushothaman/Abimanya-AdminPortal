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
    useCommonModelStatus: {
      type: Boolean,
      default: true,
    },
    modelPath:{
      type: String,
      required: false,
      default: "",
    },
    modelFileName:{
      type: String,
      required: false,
      default: "",
    },
    modelMainTexturePath:{
      type: String,
      required: false,
      default: "",
    },
    modelMainTextureFileName:{
      type: String,
      required: false,
      default: "",
    },
    modelMainTextureThumbnailPath:{
      type: String,
      required: false,
      default: "",
    },
    modelSeamlessTextureID:{
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

module.exports = mongoose.model("DoorModel", DoorModelSchema);
