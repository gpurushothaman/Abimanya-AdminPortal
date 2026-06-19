const DoorThickness = require("../../models/admin/DoorThickness");

exports.createDoorThickness = async (req, res) => {
  try {
    const doorThickness = await DoorThickness.create(req.body);

    res.status(201).json({
      success: true,
      message: "Door Thickness Created",
      data: doorThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDoorThickness = async (req, res) => {
  try {
    const doorThickness = await DoorThickness.find();

    res.status(200).json({
      success: true,
      count: doorThickness.length,
      data: doorThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDoorThicknessById = async (req, res) => {
  try {
    const doorThickness = await DoorThickness.findById(
      req.params.id
    );

    if (!doorThickness) {
      return res.status(404).json({
        success: false,
        message: "Door Thickness not found",
      });
    }

    res.status(200).json({
      success: true,
      data: doorThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorThickness = async (req, res) => {
  try {
    const updatedDoorThickness =
      await DoorThickness.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedDoorThickness) {
      return res.status(404).json({
        success: false,
        message: "Door Thickness not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Thickness Updated",
      data: updatedDoorThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDoorThickness = async (req, res) => {
  try {
    const deletedDoorThickness =
      await DoorThickness.findByIdAndDelete(
        req.params.id
      );

    if (!deletedDoorThickness) {
      return res.status(404).json({
        success: false,
        message: "Door Thickness not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Thickness Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};