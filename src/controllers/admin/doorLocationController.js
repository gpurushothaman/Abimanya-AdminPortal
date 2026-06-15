

                     //      FULL CODE IMPORTED ------>>>  (((( THIYAGUUUU   )))

const DoorLocation = require("../../models/admin/DoorLocation");
exports.saveDoorLocation = async (req, res) => {
  try {
        const doors = req.body;
        const savedDoors = await DoorLocation.insertMany(doors);
        res.status(201).json({
        success: true,
        message: "Door Locations Saved",
        data: savedDoors
    });
     }
catch (error) {
       console.error(error);
       res.status(500).json({
       success: false,
       message: error.message
    });
  }
};