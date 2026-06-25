const DoorModel = require("../../models/admin/DoorModel");

exports.getDoorModels = async (req, res) => {
  try {
    const doorModel = await DoorModel.find()
      .populate("subDesignId");
 
    res.status(200).json({
      success: true,
      count: doorModel.length,
      data: doorModel,
    });
  } catch (error) {
    console.log("ERROR =>", error); // <-- add this line

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorModel = async (req, res) => {
  try {
    const updateDoorModel =
      await DoorModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!updateDoorModel) {
      return res.status(404).json({
        success: false,
        message: "Door model not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door model Updated",
      data: updateDoorModel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

