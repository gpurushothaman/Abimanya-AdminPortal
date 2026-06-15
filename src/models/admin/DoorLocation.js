
                //      FULL CODE IMPORTED ------>>>  (((( THIYAGUUUU   )))

const mongoose = require("mongoose");
const doorLocationSchema =
  new mongoose.Schema(
    {
      doorName: { type: String,required: true},
      doorType: {type: String,required: true},
      status: {type: String,default: "Active"}
    },
    { timestamps: true }
  );
module.exports = mongoose.model("DoorLocation",doorLocationSchema);