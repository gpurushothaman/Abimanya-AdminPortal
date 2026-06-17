const WallThickness = require("../../models/admin/WallThickness");

exports.createWallThickness = async (req, res) => {
  try {
    const wallThickness = await WallThickness.create(req.body);

    res.status(201).json({
      success: true,
      message: "Wall Thickness Created",
      data: wallThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllWallThickness = async (req, res) => {
  try {
    const wallThickness = await WallThickness.find();

    res.status(200).json({
      success: true,
      count: wallThickness.length,
      data: wallThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getWallThicknessById = async (req, res) => {
  try {
    const wallThickness = await WallThickness.findById(
      req.params.id
    );

    if (!wallThickness) {
      return res.status(404).json({
        success: false,
        message: "Wall Thickness not found",
      });
    }

    res.status(200).json({
      success: true,
      data: wallThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateWallThickness = async (req, res) => {
  try {
    const updatedWallThickness =
      await WallThickness.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedWallThickness) {
      return res.status(404).json({
        success: false,
        message: "Wall Thickness not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Wall Thickness Updated",
      data: updatedWallThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteWallThickness = async (req, res) => {
  try {
    const deletedWallThickness =
      await WallThickness.findByIdAndDelete(
        req.params.id
      );

    if (!deletedWallThickness) {
      return res.status(404).json({
        success: false,
        message: "Wall Thickness not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Wall Thickness Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};