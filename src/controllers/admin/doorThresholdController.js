const DoorThreshold = require("../../models/admin/DoorThreshold");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const Design = require("../../models/admin/Design");


exports.getAllDoorThreshold = async (req, res) => {
  try {
     const designs = await Design.find().select("_id designName");
     const subDesigns = await DoorSubDesign.find().select("_id subDesignName designId");
   const Thresholdsss = await DoorThreshold.find().select("_id thresholdName subDesignId status");
 
     const data = designs.map((design) => ({
       _id: design._id,
       name: design.designName,
       subdesign: subDesigns
         .filter((sub) => sub.designId.toString() === design._id.toString())
         .map((sub) => ({
           _id: sub._id,
           name: sub.subDesignName,      
           threshold: Thresholdsss
             .filter(
               (threshold) =>
                 threshold.subDesignId.toString() === sub._id.toString()
             )
             .map((threshold) => ({
               _id: threshold._id,
               thresholdName: threshold.thresholdName,
               status : threshold.status
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











exports.updateDoorThreshold = async (
  req,
  res
) => {
  try {  
    const updated =
      await DoorThreshold.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Door Threshold not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Threshold Updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

