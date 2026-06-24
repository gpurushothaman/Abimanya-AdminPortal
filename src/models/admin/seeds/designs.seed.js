const DoorDesign = require("../Design");

module.exports = async function seedDoorDesigns() {
    const exists = await DoorDesign.exists({});

    if (!exists) {
      await DoorDesign.insertMany([
        {
          designName: "Laminate",
          designValue: "laminate",
          status: true
        },
        {
            designName: "Veneer",
            designValue: "veneer",
          status: true
        },
        {
            designName: "Royal Paint",
            designValue: "royalPaint",
          status: true
        },
        {
            designName: "Skin",
            designValue: "skinClassic",
          status: true
        }
      ]);
  
      console.log("Door design seed completed");
    } else {
      console.log("Door design already seeded");
    }
};