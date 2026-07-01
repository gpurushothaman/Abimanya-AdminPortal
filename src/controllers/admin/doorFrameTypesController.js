const DoorFrame = require("../../models/admin/DoorFrame");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const Design = require("../../models/admin/Design");
const DoorFrameType = require("../../models/admin/DoorFrameType");

exports.getAllDoorFrameType = async (req, res) => {
  try {
    const [designs, subDesigns, frames, frameTypes] = await Promise.all([
      Design.find().select("_id designName"),
      DoorSubDesign.find().select("_id subDesignName designId"),
      DoorFrame.find().select("_id frameName subDesignId status"),
      DoorFrameType.find().select(
        "_id frameId frameTypeName frameTypeValue status"
      ),
    ]);

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
              status: frame.status,

              frameTypes: frameTypes
                .filter(
                  (type) =>
                    type.frameId.toString() === frame._id.toString()
                )
                .map((type) => ({
                  _id: type._id,
                  frameTypeName: type.frameTypeName,            
                  status: type.status,
                })),
            })),
        })),
    }));

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDoorFrameType = async (req, res) => {
  try {
    const updatedDoorFrameType = await DoorFrameType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedDoorFrameType) {
      return res.status(404).json({
        success: false,
        message: "Door frame type not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door frame type Updated",
      data: updatedDoorFrameType,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
