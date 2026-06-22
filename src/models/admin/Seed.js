const mongoose = require("mongoose");
require("dotenv").config();

const Dimension = require("./Dimension");
const DoorThreshold = require("./DoorThreshold");

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

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await seedDimensions();
    await seedDoorThresholds();

    console.log("All seeds completed");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seed();