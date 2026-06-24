const Dimension = require("../Dimension");

module.exports = async function seedDimensions() {
  const exists = await Dimension.exists({});

  if (!exists) {
    await Dimension.create({});
    console.log("Dimension default document inserted");
  } else {
    console.log("Dimension already seeded");
  }
};