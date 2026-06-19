const Dimension = require("../../models/admin/Dimension");

const updateDimension = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDimension = await Dimension.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedDimension) {
      return res.status(404).json({
        success: false,
        message: "Dimension not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedDimension,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createDimension = async (req, res) => {
  try {
    const existing = await Dimension.findOne();

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Dimension already exists. Use update instead.",
      });
    }

    const dimension = await Dimension.create({});

    res.status(201).json({
      success: true,
      data: dimension,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllDimension = async (req, res) => {
  try {
    const dimension = await Dimension.find();

    res.status(200).json({
      success: true,
      count: dimension.length,
      data: dimension,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { updateDimension, createDimension, getAllDimension };
