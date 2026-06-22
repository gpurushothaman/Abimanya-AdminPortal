const mongoose = require("mongoose");
require("dotenv").config();

const Dimension = require("./Dimension");
const DoorThreshold = require("./DoorThreshold");
const DoorOrientation = require("./DoorOrientation");
const DoorJambLocation =require("./DoorJambLocation");
const DoorFrame = require("./DoorFrame")

async function seedDimensions() {
  const exists = await Dimension.exists({});

  if (!exists) {
    await Dimension.create({});
    console.log("Dimension default document inserted");
  } else {
    console.log("Dimension already seeded");
  }
}

async function seedDoorThresholds() {
  const exists = await DoorThreshold.exists({});

  if (!exists) {
    await DoorThreshold.insertMany([
      {
        thresholdName: "Yes",
        thresholdValue: "yes",
      },
      {
        thresholdName: "No",
        thresholdValue: "no",
      },
    ]);

    console.log("DoorThreshold seed completed");
  } else {
    console.log("DoorThreshold already seeded");
  }
}

async function seedDoorOrientations() {
  const exists = await DoorOrientation.exists({});

  if (!exists) {
    await DoorOrientation.insertMany([
      {
        DoorOrientationname: "LHS",
        DoorOrientationvalue: "lhs",
      },
      {
       DoorOrientationname: "RHS",
       DoorOrientationvalue: "rhs",
      },
    ]);

    console.log("DoorOrientation seed completed");
  } else {
    console.log("DoorOrientation already seeded");
  }
}


async function seedDoorjamblocations() {
  const exists = await DoorJambLocation.exists({});

  if (!exists) {
    await DoorJambLocation.insertMany([
      {
       jambLocationName: "Front",
        jambLocationValue: "front",
      },
      {
      jambLocationName: "Back",
        jambLocationValue: "back",
      },
    ]);

    console.log("DoorJambLocation seed completed");
  } else {
    console.log("DoorJamblLocation already seeded");
  }
}




async function seedDoorFrames() {
  const exists = await DoorFrame.exists({});

  if (!exists) {
    await DoorFrame.insertMany([
      {
        frameName: "Full",
        frameValue:"full",
      },
      {
      frameName: "Half",
       frameValue:"half",
      },
      {
      frameName: "No",
       frameValue:"no",
      }
    ]);

    console.log("DoorFrame seed completed");
  } else {
    console.log("DoorFrame already seeded");
  }
}











async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await seedDimensions();
    await seedDoorThresholds();
    await seedDoorOrientations() 
    await seedDoorjamblocations()
    await seedDoorFrames()

    console.log("All seeds completed");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seed();