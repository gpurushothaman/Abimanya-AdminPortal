const DoorOrientation = require("../../models/admin/DoorOrientation");

exports.createDoorOrientation = async (req, res) => {
  try {
    const doorOrientation = await DoorOrientation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Door Orientation Created",
      data: doorOrientation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDoorOrientation = async (req, res) => {
  try {
    const doorOrientation = await DoorOrientation.find();

    res.status(200).json({
      success: true,
      count: doorOrientation.length,
      data: doorOrientation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDoorOrientationById = async (req, res) => {
  try {
    const doorOrientation = await DoorOrientation.findById(
      req.params.id
    );

    if (!doorOrientation) {
      return res.status(404).json({
        success: false,
        message: "Door Orientation not found",
      });
    }

    res.status(200).json({
      success: true,
      data: doorOrientation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorOrientation = async (req, res) => {
  try {
    const updatedDoorOrientation =
      await DoorOrientation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedDoorOrientation) {
      return res.status(404).json({
        success: false,
        message: "Door Orientation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Orientation Updated",
      data: updatedDoorOrientation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDoorOrientation = async (req, res) => {
  try {
    const deletedDoorOrientation =
      await DoorOrientation.findByIdAndDelete(
        req.params.id
      );

    if (!deletedDoorOrientation) {
      return res.status(404).json({
        success: false,
        message: "Door Orientation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Orientation Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};