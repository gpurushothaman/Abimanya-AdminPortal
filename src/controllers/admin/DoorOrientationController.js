const Design = require("../../models/admin/Design");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const DoorFrame = require("../../models/admin/DoorFrame");
const DoorFrameType = require("../../models/admin/DoorFrameType");
const DoorFrameTypeOption = require("../../models/admin/DoorFrameTypeOption");
const DoorOrientation = require("../../models/admin/DoorOrientation");

exports.getAllDoorOrientations = async (req, res) => {
  try {
    const [
      designs,
      subDesigns,
      frames,
      frameTypes,
      frameTypeOptions,
      orientations,
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
      DoorOrientation.find().select(
        "_id frameTypeOptionId doorOrientationName doorOrientationValue status"
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
              (frame) => frame.subDesignId.toString() === sub._id.toString()
            )
            .map((frame) => ({
              _id: frame._id,
              frameName: frame.frameName,
              status: frame.status,

              frameTypes: frameTypes
                .filter(
                  (type) => type.frameId.toString() === frame._id.toString()
                )
                .map((type) => ({
                  _id: type._id,
                  frameTypeName: type.frameTypeName,
                  frameTypeValue: type.frameTypeValue,
                  status: type.status,

                  options: frameTypeOptions
                    .filter(
                      (option) =>
                        option.frameTypeId.toString() === type._id.toString()
                    )
                    .map((option) => ({
                      _id: option._id,
                      frameTypeOptionName: option.frameTypeOptionName,
                      frameTypeOptionValue: option.frameTypeOptionValue,
                      status: option.status,

                      orientations: orientations
                        .filter(
                          (orientation) =>
                            orientation.frameTypeOptionId.toString() ===
                            option._id.toString()
                        )
                        .map((orientation) => ({
                          _id: orientation._id,
                          doorOrientationName: orientation.doorOrientationName,
                          doorOrientationValue: orientation.doorOrientationValue,
                          status: orientation.status,
                        })),
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


exports.updateDoorOrientation = async (req, res) => {
  try {
    const updatedOrientation = await DoorOrientation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedOrientation) {
      return res.status(404).json({
        success: false,
        message: "Door orientation not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Door orientation updated successfully",
      data: updatedOrientation,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
