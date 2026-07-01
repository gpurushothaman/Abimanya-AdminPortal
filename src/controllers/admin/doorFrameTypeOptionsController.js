const Design = require("../../models/admin/Design");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const DoorFrame = require("../../models/admin/DoorFrame");
const DoorFrameType = require("../../models/admin/DoorFrameType");
const DoorFrameTypeOption = require("../../models/admin/DoorFrameTypeOption");

exports.getAllDoorFrameTypeOptions = async (req, res) => {
  try {
    const [
      designs,
      subDesigns,
      frames,
      frameTypes,
      frameTypeOptions,
    ] = await Promise.all([
      Design.find().select("_id designName"),
      DoorSubDesign.find().select("_id designId subDesignName"),
      DoorFrame.find().select("_id subDesignId frameName status"),
      DoorFrameType.find().select(
        "_id frameId frameTypeName frameTypeValue status"
      ),
      DoorFrameTypeOption.find().select(
        "_id frameTypeId frameTypeOptionName frameTypeOptionValue status"
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
                  frameTypeValue: type.frameTypeValue,
                  status: type.status,

                  options: frameTypeOptions
                    .filter(
                      (option) =>
                        option.frameTypeId.toString() ===
                        type._id.toString()
                    )
                    .map((option) => ({
                      _id: option._id,
                      frameTypeOptionName: option.frameTypeOptionName,
                      frameTypeOptionValue: option.frameTypeOptionValue,
                      status: option.status,
                    })),
                })),
            })),
        })),
    }));

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateDoorFrameTypeOption = async (req, res) => {
  try {
    const updatedDoorFrameTypeOption = await DoorFrameTypeOption.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedDoorFrameTypeOption) {
      return res.status(404).json({
        success: false,
        message: "Door frame type option not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door frame type option Updated",
      data: updatedDoorFrameTypeOption,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
