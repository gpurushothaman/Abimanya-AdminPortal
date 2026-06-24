const mongoose = require("mongoose");
require("dotenv").config();

const seedDimensions = require("./dimension.seed");
const seedDoorThresholds = require("./thresholds.seed");
const seedDoorOrientations = require("./orentations.seed");
const seedDoorJambLocations = require("./jambLocations.seed");
const seedDoorFrames = require("./frames.seed");
const seedDoorDesigns = require("./designs.seed");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const seeders = [
      seedDimensions,
      seedDoorThresholds,
      seedDoorOrientations,
      seedDoorJambLocations,
      seedDoorFrames,
      seedDoorDesigns
    ];

    for (const seeder of seeders) {
      await seeder();
    }

    console.log("All seeds completed");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seed();