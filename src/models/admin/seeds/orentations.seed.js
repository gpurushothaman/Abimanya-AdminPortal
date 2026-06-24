const DoorOrientation = require("../DoorOrientation");

module.exports = async function seedDoorOrientations() {
    const exists = await DoorOrientation.exists({});

    if (!exists) {
      await DoorOrientation.insertMany([
        {
          DoorOrientationname: "LHS",
          DoorOrientationvalue: "lhs",
          status: true
        },
        {
         DoorOrientationname: "RHS",
         DoorOrientationvalue: "rhs",
         status: true
        },
      ]);
  
      console.log("DoorOrientation seed completed");
    } else {
      console.log("DoorOrientation already seeded");
    }
};