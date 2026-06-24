const DoorSubDesign = require("../../models/admin/DoorSubDesign");

exports.getDoorSubDesign = async (req, res) => {
  try {
    const doorSubDesign = await DoorSubDesign.find()
      .populate("designId", "designName");
 
    res.status(200).json({
      success: true,
      count: doorSubDesign.length,
      data: doorSubDesign,
    });
  } catch (error) {
    console.log("ERROR =>", error); // <-- add this line

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorSubDesign = async (req, res) => {
  try {
    const updateDoorSubDesign =
      await DoorSubDesign.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!updateDoorSubDesign) {
      return res.status(404).json({
        success: false,
        message: "Door SubDesign not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door SubDesign Updated",
      data: updateDoorSubDesign,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

