const DoorThickness = require("../../models/admin/DoorThickness");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const Design = require("../../models/admin/Design");



exports.getAllDoorThickness = async (req, res) => {
  try {
     const designs = await Design.find().select("_id designName");
     const subDesigns = await DoorSubDesign.find().select("_id subDesignName designId");
   const Thicknesss = await DoorThickness.find().select("_id DoorThicknessName subDesignId status");
 
     const data = designs.map((design) => ({
       _id: design._id,
       name: design.designName,
       subdesign: subDesigns
         .filter((sub) => sub.designId.toString() === design._id.toString())
         .map((sub) => ({
           _id: sub._id,
           name: sub.subDesignName,      
           thickness: Thicknesss
             .filter(
               (thickness) =>
                 thickness.subDesignId.toString() === sub._id.toString()
             )
             .map((thickness) => ({
               _id: thickness._id,
               DoorThicknessName: thickness.DoorThicknessName,
               status : thickness.status
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










exports.updateDoorThickness = async (req, res) => {
  try {
    const updatedDoorThickness =
      await DoorThickness.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!updatedDoorThickness) {
      return res.status(404).json({
        success: false,
        message: "Door Thickness not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Door Thickness Updated",
      data: updatedDoorThickness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

