const DoorOrientation = require("../../models/admin/DoorOrientation");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const Design = require("../../models/admin/Design");



exports.getAllDoorOrientation = async (req, res) => {
  try {
     const designs = await Design.find().select("_id designName");
     const subDesigns = await DoorSubDesign.find().select("_id subDesignName designId");
   const Orientationsss = await DoorOrientation.find().select("_id DoorOrientationname subDesignId status");
 
     const data = designs.map((design) => ({
       _id: design._id,
       name: design.designName,
       subdesign: subDesigns
         .filter((sub) => sub.designId.toString() === design._id.toString())
         .map((sub) => ({
           _id: sub._id,
           name: sub.subDesignName,      
           orientation: Orientationsss
             .filter(
               (orientation) =>
                 orientation.subDesignId.toString() === sub._id.toString()
             )
             .map((orientation) => ({
               _id: orientation._id,
               DoorOrientationname: orientation.DoorOrientationname,
               status : orientation.status
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



exports.updateDoorOrientation = async (req, res) => {
  try {
    const updatedDoorOrientation =
      await DoorOrientation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!updatedDoorOrientation) {
      return res.status(404).json({
        success: false,
        message: "Door Orientation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Orientation Updated",
      data: updatedDoorOrientation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

