const DoorJambLocation = require("../DoorJambLocation");

module.exports = async function seedDoorjamblocations() {
    const exists = await DoorJambLocation.exists({});

    if (!exists) {
      await DoorJambLocation.insertMany([
        {
         jambLocationName: "Front",
          jambLocationValue: "front",
          status: true
        },
        {
        jambLocationName: "Back",
          jambLocationValue: "back",
          status: true
        },
      ]);
  
      console.log("DoorJambLocation seed completed");
    } else {
      console.log("DoorJamblLocation already seeded");
    }
};