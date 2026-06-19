const mongoose = require("mongoose");
require("dotenv").config();
const Dimension = require("./Dimension");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  const exists = await Dimension.exists({});

  if (!exists) {
    await Dimension.create({});
    console.log("Default document inserted");
  }

  process.exit(0);
}

seed();