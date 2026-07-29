const fs = require("fs");
const path = require("path");
const DoorShades = require("../../models/admin/DoorShades");

exports.getDoorShades = async (req, res) => {
  try {
    const doorShades = await DoorShades.find().populate("modelId");

    res.status(200).json({
      success: true,
      count: doorShades.length,
      data: doorShades,
    });
  } catch (error) {
    console.log("ERROR =>", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createDoorShade = async (req, res) => {
  try {
    let createData = { ...req.body };

    const textureFile = req.files?.shadeTexture?.[0];
    const subDesignValue = createData?.subDesignValue;
    const modelValue = createData?.modelValue;  
    createData = {
      ...req.body,
      doorThicknessBasedCost: JSON.parse(req.body.doorThicknessBasedCost),
    };

    if (textureFile && subDesignValue && modelValue) {
      const folder = path.join(
        "src/assets/doors/shades",
        subDesignValue,
        modelValue
      );

      fs.mkdirSync(folder, { recursive: true });

      const destination = path.join(folder, textureFile.filename);

      fs.renameSync(textureFile.path, destination);

      createData.texturePath = destination
        .replace(/\\/g, "/")
        .replace(/^src\//, "");

      createData.textureFileName = textureFile.filename;
    }

    const created = await DoorShades.create(createData);

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
                             //  THiyaguu ------------->>>>

exports.updateDoorShade = async (req, res) => {
  try {
    const shade = await DoorShades.findById(req.params.id);

    if (!shade) {
      return res.status(404).json({
        success: false,
        message: "Door shade not found",
      });
    }

    const updateData = {
      ...req.body,
    };

    // Convert thickness cost from FormData string to object
    if (req.body.doorThicknessBasedCost) {
      updateData.doorThicknessBasedCost = JSON.parse(
        req.body.doorThicknessBasedCost
      );
    }

    // New texture uploaded
    const textureFile = req.files?.shadeTexture?.[0];

    if (textureFile) {
      const subDesignValue = req.body.subDesignValue;
      const modelValue = req.body.modelValue;

      if (!subDesignValue || !modelValue) {
        return res.status(400).json({
          success: false,
          message: "subDesignValue and modelValue are required",
        });
      }

      const folder = path.join(
        "src/assets/doors/shades",
        subDesignValue,
        modelValue
      );

      fs.mkdirSync(folder, { recursive: true });

      const destination = path.join(
        folder,
        textureFile.filename
      );

      // Move new uploaded image
      fs.renameSync(
        textureFile.path,
        destination
      );

      // Delete old image
      if (shade.textureFileName) {
        const oldFilePath = path.join(
          folder,
          shade.textureFileName
        );

        fs.rmSync(
          oldFilePath,
          {
            force: true
          }
        );
      }

      updateData.texturePath = destination
        .replace(/\\/g, "/")
        .replace(/^src\//, "");

      updateData.textureFileName =
        textureFile.filename;
    }

    const updated = await DoorShades.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    ).populate("modelId");

    res.status(200).json({
      success: true,
      data: updated,
    });

  } catch (err) {
    console.error(
      "UPDATE DOOR SHADE ERROR:",
      err
    );

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.deleteDoorShade = async (req, res) => {
  try {
    const { subDesignValue, modelValue } = req.query;
    const shade = await DoorShades.findById(req.params.id);
    const folder = path.join(
      "src/assets/doors/shades",
      subDesignValue,
      modelValue
    );
    const filePath = path.join(folder, shade?.textureFileName);
    if (filePath) {
      fs.rmSync(filePath, { recursive: true, force: true });
    }

    const deletedDoorShade = await DoorShades.findByIdAndDelete(req.params.id);

    if (!deletedDoorShade) {
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
