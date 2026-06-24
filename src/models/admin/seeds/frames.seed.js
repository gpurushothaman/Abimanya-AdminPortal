const DoorFrame = require("../DoorFrame");

module.exports = async function seedDoorFrames() {
    const exists = await DoorFrame.exists({});

  if (!exists) {
    await DoorFrame.insertMany([
      {
        frameName: "Full",
        frameValue:"full",
        status: true
      },
      {
      frameName: "Half",
       frameValue:"half",
       status: true
      },
      {
      frameName: "No",
       frameValue:"no",
       status: true
      }
    ]);

    console.log("DoorFrame seed completed");
  } else {
    console.log("DoorFrame already seeded");
  }
};