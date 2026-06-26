const DoorFrame = require("../../models/admin/DoorFrame");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const Design = require("../../models/admin/Design");

// exports.getAllDoorFrame = async (req, res) => {
//   try {
//     const doorFrames = await DoorFrame.find();

//     res.status(200).json({
//       success: true,
//       count: doorFrames.length,
//       data: doorFrames,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


exports.getAllDoorFrame = async (req, res) => {
  try {
    const designs = await Design.find().select("_id designName");
    const subDesigns = await DoorSubDesign.find().select("_id subDesignName designId");
    const frames = await DoorFrame.find().select("_id frameName subDesignId status");

    const data = designs.map((design) => ({
      _id: design._id,
      name: design.designName,
      subdesign: subDesigns
        .filter((sub) => sub.designId.toString() === design._id.toString())
        .map((sub) => ({
          _id: sub._id,
          name: sub.subDesignName,      
          frame: frames
            .filter(
              (frame) =>
                frame.subDesignId.toString() === sub._id.toString()
            )
            .map((frame) => ({
              _id: frame._id,
              frameName: frame.frameName,
              status : frame.status
            })),
        })),
    }));

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


exports.updateDoorFrame = async (req, res) => {
  try {
    const updatedDoorFrame = await DoorFrame.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedDoorFrame) {
      return res.status(404).json({
        success: false,
        message: "Door Frame not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Frame Updated",
      data: updatedDoorFrame,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
