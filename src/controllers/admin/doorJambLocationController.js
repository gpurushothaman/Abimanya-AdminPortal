const DoorJambLocation = require("../../models/admin/doorJambLocation");

exports.createDoorJambLocation = async (req, res) => {
  try {
    const jambLocation =
      await DoorJambLocation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Door Jamb Location Created",
      data: jambLocation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDoorJambLocation = async (req, res) => {
  try {
    const jambLocation =
      await DoorJambLocation.find();

    res.status(200).json({
      success: true,
      count: jambLocation.length,
      data: jambLocation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDoorJambLocationById = async (
  req,
  res
) => {
  try {
    const jambLocation =
      await DoorJambLocation.findById(
        req.params.id
      );

    if (!jambLocation) {
      return res.status(404).json({
        success: false,
        message: "Door Jamb Location not found",
      });
    }

    res.status(200).json({
      success: true,
      data: jambLocation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorJambLocation = async (
  req,
  res
) => {
  try {
    const updated =
      await DoorJambLocation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Door Jamb Location not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Jamb Location Updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDoorJambLocation = async (
  req,
  res
) => {
  try {
    const deleted =
      await DoorJambLocation.findByIdAndDelete(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Door Jamb Location not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Jamb Location Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};