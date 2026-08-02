const DoorLocation = require("../../models/admin/DoorLocation");
const DoorDesign = require("../../models/admin/Design");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");

exports.getAllDoorCustomizeOptions = async (req, res) => {
  try {
    const location = await DoorLocation.find();
    const design = await DoorDesign.find();
    const subDesign = await DoorSubDesign.find();

    const allOptions={
      location : location,
      design : design,
      subDesign: subDesign
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

