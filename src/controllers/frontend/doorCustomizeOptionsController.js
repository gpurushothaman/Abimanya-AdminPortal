const DoorLocation = require("../../models/admin/DoorLocation");
const DoorDesign = require("../../models/admin/Design");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const DoorModel = require("../../models/admin/DoorModel");
const DoorShades = require("../../models/admin/DoorShades");

exports.getAllDoorCustomizeOptions = async (req, res) => {
  try {
    const location = await DoorLocation.find();
    const design = await DoorDesign.find();
    const subDesign = await DoorSubDesign.find();
    const doorModel = await DoorModel.find();
    const doorShades = await DoorShades.find();

    const allOptions={
      location : location,
      design : design,
      subDesign : subDesign,
      models : doorModel, 
      shades : doorShades
    };

    res.status(200).json({
      success: true,      
      data: allOptions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

