const DoorLocation = require("../../models/admin/DoorLocation");

exports.saveDoorLocation = async (req, res) => {
  try {
    const doors = req.body;

    const savedDoors = await DoorLocation.insertMany(doors);

    res.status(201).json({
      success: true,
      message: "Door Locations Saved",
      data: savedDoors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDoorLocations = async (req, res) => {
  try {
    const doors = await DoorLocation.find();

    res.status(200).json({
      success: true,
      count: doors.length,
      data: doors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDoorLocationById = async (req, res) => {
  try {
    const door = await DoorLocation.findById(req.params.id);

    if (!door) {
      return res.status(404).json({
        success: false,
        message: "Door Location not found",
      });
    }

    res.status(200).json({
      success: true,
      data: door,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorLocation = async (req, res) => {
  try {
    const updatedDoor = await DoorLocation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDoor) {
      return res.status(404).json({
        success: false,
        message: "Door Location not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Location updated successfully",
      data: updatedDoor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDoorLocation = async (req, res) => {
  try {
    const deletedDoor = await DoorLocation.findByIdAndDelete(req.params.id);

    if (!deletedDoor) {
      return res.status(404).json({
        success: false,
        message: "Door Location not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Location deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
