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
    console.log("ERROR =>", error); // <-- add this line

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.createDoorShade = async (req, res) => {
    try {
      const createData = { ...req.body };
  
      const textureFile = req.files?.shadeTexture?.[0];
      const subDesignValue = createData?.subDesignValue;
      const modelValue = createData?.modelValue;
  
      if (textureFile && subDesignValue && modelValue) {
        const folder = path.join(
          "src/assets/doors/shades",
          subDesignValue,
          modelValue
        );
  
        // Create folder if it doesn't exist
        fs.mkdirSync(folder, { recursive: true });
  
        // Move uploaded file
        const destination = path.join(folder, textureFile.filename);
  
        fs.renameSync(textureFile.path, destination);
  
        // Store public path
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

exports.updateDoorShade = async (req, res) => {
  try {
    const updateData = { ...req.body };

    const textureFile = req.files?.shadeTexture?.[0];
    const subDesignValue = updateData?.subDesignValue;
    const modelValue = updateData?.modelValue;

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

      updateData.texturePath = destination.replace(/\\/g, "/").replace(/^src\//, "");
      updateData.textureFileName = textureFile.filename;
    }

    const updated = await DoorShades.findByIdAndUpdate(
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
      if(filePath){
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