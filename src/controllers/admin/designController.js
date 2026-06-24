const DoorDesign = require("../../models/admin/Design");

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

exports.updateDesign = async (req, res) => {
  try {
    const updatedDesign = await DoorDesign.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
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