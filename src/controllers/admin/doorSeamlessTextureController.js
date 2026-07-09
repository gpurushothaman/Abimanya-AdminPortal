const fs = require("fs");
const path = require("path");
const DoorSeamlessTexture = require("../../models/admin/DoorSeamlessTexture");

exports.getDoorSeamlessTexture = async (req, res) => {
  try {
    const doorSeamlessTexture = await DoorSeamlessTexture.find().populate("designRefId");

    res.status(200).json({
      success: true,
      count: doorSeamlessTexture.length,
      data: doorSeamlessTexture,
    });
  } catch (error) {
    console.log("ERROR =>", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createDoorSeamlessTexture = async (req, res) => {
  try {
    const createData = { ...req.body };

    const textureFile = req.files?.seamlessTexture?.[0];
    const designValue = createData?.designValue;  

    if (textureFile && designValue) {
      const folder = path.join(
        "src/assets/doors/seamless-texture",
        designValue
      );

      fs.mkdirSync(folder, { recursive: true });

      const destination = path.join(folder, textureFile.filename);

      fs.renameSync(textureFile.path, destination);

      createData.texturePath = destination
        .replace(/\\/g, "/")
        .replace(/^src\//, "");

      createData.textureFileName = textureFile.filename;
    }

    const created = await DoorSeamlessTexture.create(createData);

    res.status(201).json({
      success: true,
      data: created,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateDoorSeamlessTexture = async (req, res) => {
  try {
    const updateData = { ...req.body };
    const updated = await DoorSeamlessTexture.findByIdAndUpdate(
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

exports.deleteDoorSeamlessTexture = async (req, res) => {
  try {
    const { designValue } = req.query;
    const seamlessTextureData = await DoorSeamlessTexture.findById(req.params.id);
    const folder = path.join(
      "src/assets/doors/seamless-texture",
      designValue,      
    );
    const filePath = path.join(folder, seamlessTextureData?.textureFileName);
    if (filePath) {
      fs.rmSync(filePath, { recursive: true, force: true });
    }

    const deletedDoorSeamlessTexture = await DoorSeamlessTexture.findByIdAndDelete(req.params.id);

    if (!deletedDoorSeamlessTexture) {
      return res.status(404).json({
        success: false,
        message: "Door shade not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door shade deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
