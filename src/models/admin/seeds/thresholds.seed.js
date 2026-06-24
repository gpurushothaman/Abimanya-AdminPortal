const DoorThreshold = require("../DoorThreshold");

module.exports = async function seedDoorThresholds() {
    const exists = await DoorThreshold.exists({});

    if (!exists) {
      await DoorThreshold.insertMany([
        {
          thresholdName: "Yes",
          thresholdValue: "yes",
          status: true
        },
        {
          thresholdName: "No",
          thresholdValue: "no",
          status: true
        },
      ]);
  
      console.log("DoorThreshold seed completed");
    } else {
      console.log("DoorThreshold already seeded");
    }
};