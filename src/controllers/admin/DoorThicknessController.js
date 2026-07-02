const Design = require("../../models/admin/Design");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const DoorFrame = require("../../models/admin/DoorFrame");
const DoorFrameType = require("../../models/admin/DoorFrameType");
const DoorFrameTypeOption = require("../../models/admin/DoorFrameTypeOption");
const DoorThickness = require("../../models/admin/DoorThickness");

exports.getAllDoorThickness = async (req, res) => {
  try {
    const [
      designs,
      subDesigns,
      frames,
      frameTypes,
      frameTypeOptions,
      Thicknesss,
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
      DoorThickness.find().select(
        "_id frameTypeOptionId DoorThicknessName DoorThicknessValue status"
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

                      Thicknesss: Thicknesss
                        .filter(
                          (Thickness) =>
                            Thickness.frameTypeOptionId.toString() ===
                            option._id.toString()
                        )
                        .map((Thickness) => ({
                          _id: Thickness._id,
                          DoorThicknessName: Thickness.DoorThicknessName,
                          DoorThicknessValue: Thickness.DoorThicknessValue,
                          status: Thickness.status,
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


exports.updateDoorThickness = async (req, res) => {
  try {
    const updatedThickness = await DoorThickness.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedThickness) {
      return res.status(404).json({
        success: false,
        message: "Door thickness not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Door thickness updated successfully",
      data: updatedThickness,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
