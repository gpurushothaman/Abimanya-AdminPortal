const fs = require("fs");
const path = require("path");
const DoorModel = require("../../models/admin/DoorModel");

exports.getDoorModels = async (req, res) => {
  try {
    const doorModel = await DoorModel.find().populate("subDesignId");

    res.status(200).json({
      success: true,
      count: doorModel.length,
      data: doorModel,
    });
  } catch (error) {
    console.log("ERROR =>", error); // <-- add this line

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorModel = async (req, res) => {
  try {
    const updateData = { ...req.body };

    const modelFile = req.files?.modelFile?.[0];
    const textureFile = req.files?.mainTexture?.[0];
    const subDesignValue = updateData?.subDesignValue;
    const modelValue = updateData?.modelValue;

    const roughnessMapTexture = req.files?.roughnessMapTexture?.[0];
    const normalMapTexture = req.files?.normalMapTexture?.[0];

    if (modelFile && subDesignValue && modelValue) {
      const folder = path.join(
        "src/assets/doors/models",
        subDesignValue,
        modelValue
      );


      if (fs.existsSync(folder)) {
        fs.readdirSync(folder).forEach((file) => {
          const filePath = path.join(folder, file);
          fs.rmSync(filePath, { recursive: true, force: true });
        });
      } else {
        fs.mkdirSync(folder, { recursive: true });
      }

      const destination = path.join(folder, modelFile.filename);

      fs.renameSync(modelFile.path, destination);

      updateData.modelPath = destination.replace(/\\/g, "/").replace(/^src\//, "");
      updateData.modelFileName = modelFile.filename;
    }

    if (textureFile && subDesignValue && modelValue) {
      const folder = path.join(       
        "src/assets/doors/textures",
        subDesignValue,
        modelValue
      );

      if (fs.existsSync(folder)) {
        fs.readdirSync(folder).forEach((file) => {
          const filePath = path.join(folder, file);
          fs.rmSync(filePath, { recursive: true, force: true });
        });
      } else {
        fs.mkdirSync(folder, { recursive: true });
      }

      const destination = path.join(folder, textureFile.filename);

      fs.renameSync(textureFile.path, destination);

      updateData.modelMainTexturePath = destination.replace(/\\/g, "/").replace(/^src\//, "");
      updateData.modelMainTextureFileName = textureFile.filename;
    }


    if (roughnessMapTexture && subDesignValue && modelValue) {
      const folder = path.join(       
        "src/assets/doors/textures",
        subDesignValue,
        modelValue,
        "roughness_map"
      );

      if (fs.existsSync(folder)) {
        fs.readdirSync(folder).forEach((file) => {
          const filePath = path.join(folder, file);
          fs.rmSync(filePath, { recursive: true, force: true });
        });
      } else {
        fs.mkdirSync(folder, { recursive: true });
      }

      const destination = path.join(folder, roughnessMapTexture.filename);

      fs.renameSync(roughnessMapTexture.path, destination);

      updateData.modelRoughnessMapTexturePath = destination.replace(/\\/g, "/").replace(/^src\//, "");
      updateData.modelRoughnessMapTextureFileName = roughnessMapTexture.filename;
    }

    if (normalMapTexture && subDesignValue && modelValue) {
      const folder = path.join(       
        "src/assets/doors/textures",
        subDesignValue,
        modelValue,
        "normal_map"
      );

      if (fs.existsSync(folder)) {
        fs.readdirSync(folder).forEach((file) => {
          const filePath = path.join(folder, file);
          fs.rmSync(filePath, { recursive: true, force: true });
        });
      } else {
        fs.mkdirSync(folder, { recursive: true });
      }

      const destination = path.join(folder, normalMapTexture.filename);

      fs.renameSync(normalMapTexture.path, destination);

      updateData.modelNormalMapTexturePath = destination.replace(/\\/g, "/").replace(/^src\//, "");
      updateData.modelNormalMapTextureFileName = normalMapTexture.filename;
    }



    const updated = await DoorModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
