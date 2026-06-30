const DoorJambLocation = require("../../models/admin/doorJambLocation");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const Design = require("../../models/admin/Design");

exports.getAllDoorJambLocation = async (req, res) => {
  try {
     const designs = await Design.find().select("_id designName");
     const subDesigns = await DoorSubDesign.find().select("_id subDesignName designId");
   const DoorJambLocationsss = await DoorJambLocation.find().select("_id jambLocationName subDesignId status");
 
     const data = designs.map((design) => ({
       _id: design._id,
       name: design.designName,
       subdesign: subDesigns
         .filter((sub) => sub.designId.toString() === design._id.toString())
         .map((sub) => ({
           _id: sub._id,
           name: sub.subDesignName,      
           jamblocation: DoorJambLocationsss
             .filter(
               (jamblocation) =>
                 jamblocation.subDesignId.toString() === sub._id.toString()
             )
             .map((jamblocation) => ({
               _id: jamblocation._id,
               jambLocationName: jamblocation.jambLocationName,
               status : jamblocation.status
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









exports.updateDoorJambLocation = async (
  req,
  res
) => {
  try {
    const updated =
      await DoorJambLocation.findByIdAndUpdate(
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
        message: "Door Jamb Location not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Jamb Location Updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

