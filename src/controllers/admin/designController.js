const DoorDesign = require("../../models/admin/Design");

exports.saveDesign = async (req, res) => {
  try {
    const design = req.body;

    const savedDesigns = await DoorDesign.insertMany(design);

    res.status(201).json({
      success: true,
      message: "Door design Saved",
      data: savedDesigns,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDesign = async (req, res) => {
  try {
    const designs = await DoorDesign.find();

    res.status(200).json({
      success: true,
      count: designs.length,
      data: designs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDesignById = async (req, res) => {
  try {
    const design = await DoorDesign.findById(req.params.id);

    if (!design) {
      return res.status(404).json({
        success: false,
        message: "Door design not found",
      });
    }

    res.status(200).json({
      success: true,
      data: design,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDesign = async (req, res) => {
  try {
    const updatedDesign = await DoorDesign.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDesign) {
      return res.status(404).json({
        success: false,
        message: "Door design not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door design updated successfully",
      data: updatedDesign,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDesign = async (req, res) => {
  try {
    const deletedDesign = await DoorDesign.findByIdAndDelete(req.params.id);

    if (!deletedDesign) {
      return res.status(404).json({
        success: false,
        message: "Door design not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door design deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
