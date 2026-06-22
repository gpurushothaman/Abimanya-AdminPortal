const DoorThreshold = require("../../models/admin/DoorThreshold");

exports.createDoorThreshold = async (req, res) => {
  try {
    const threshold =
      await DoorThreshold.create(req.body);

    res.status(201).json({
      success: true,
      message: "Door Threshold Created",
      data: threshold,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDoorThreshold = async (req, res) => {
  try {
    const threshold =
      await DoorThreshold.find();

    res.status(200).json({
      success: true,
      count: threshold.length,
      data: threshold,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDoorThresholdById = async (
  req,
  res
) => {
  try {
    const threshold =
      await DoorThreshold.findById(
        req.params.id
      );

    if (!threshold) {
      return res.status(404).json({
        success: false,
        message: "Door Threshold not found",
      });
    }

    res.status(200).json({
      success: true,
      data: threshold,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorThreshold = async (
  req,
  res
) => {
  try {
    const updated =
      await DoorThreshold.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Door Threshold not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Threshold Updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDoorThreshold = async (
  req,
  res
) => {
  try {
    const deleted =
      await DoorThreshold.findByIdAndDelete(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Door Threshold not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Threshold Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};