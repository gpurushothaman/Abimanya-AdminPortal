const DoorFrame = require("../../models/admin/DoorFrame");

exports.createDoorFrame = async (req, res) => {
  try {
    const doorFrame = await DoorFrame.create(req.body);

    res.status(201).json({
      success: true,
      message: "Door Frame Created",
      data: doorFrame,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDoorFrame = async (req, res) => {
  try {
    const doorFrames = await DoorFrame.find();

    res.status(200).json({
      success: true,
      count: doorFrames.length,
      data: doorFrames,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDoorFrameById = async (req, res) => {
  try {
    const doorFrame = await DoorFrame.findById(req.params.id);

    if (!doorFrame) {
      return res.status(404).json({
        success: false,
        message: "Door Frame not found",
      });
    }

    res.status(200).json({
      success: true,
      data: doorFrame,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorFrame = async (req, res) => {
  try {
    const updatedDoorFrame =
      await DoorFrame.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedDoorFrame) {
      return res.status(404).json({
        success: false,
        message: "Door Frame not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Frame Updated",
      data: updatedDoorFrame,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDoorFrame = async (req, res) => {
  try {
    const deletedDoorFrame =
      await DoorFrame.findByIdAndDelete(req.params.id);

    if (!deletedDoorFrame) {
      return res.status(404).json({
        success: false,
        message: "Door Frame not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Frame Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};