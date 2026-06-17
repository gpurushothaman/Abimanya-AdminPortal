const FrameSize = require("../../models/admin/FrameSize");

// Create
exports.createFrameSize = async (req, res) => {
  try {
    const frameSize =
      await FrameSize.create(req.body);

    res.status(201).json({
      success: true,
      data: frameSize,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All
exports.getFrameSize = async (req, res) => {
  try {
    const data = await FrameSize.find();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update
exports.updateFrameSize = async (
  req,
  res
) => {
  try {
    const data =
      await FrameSize.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete
exports.deleteFrameSize = async (
  req,
  res
) => {
  try {
    await FrameSize.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};