const DoorDesign = require("../Design");
const DoorSubDesign = require("../DoorSubDesign");

module.exports = async function seedDoorSubDesigns() {
  const exists = await DoorSubDesign.exists({});

  if (exists) {
    console.log("DoorSubDesign already seeded");
    return;
  }

  const laminate = await DoorDesign.findOne({
    designValue: "laminate",
  });

  const veneer = await DoorDesign.findOne({
    designValue: "veneer",
  });

  const royalPaint = await DoorDesign.findOne({
    designValue: "royalPaint",
  });

  const skinClassic = await DoorDesign.findOne({
    designValue: "skinClassic",
  });

  await DoorSubDesign.insertMany([
    {
      designId: laminate._id,
      subDesignName: "Flute",
      subDesignValue: "flute",
      status: true,
    },
    {
      designId: laminate._id,
      subDesignName: "Elite",
      subDesignValue: "elite",
      status: true,
    },
    {
      designId: laminate._id,
      subDesignName: "Titan",
      subDesignValue: "titan",
      status: true,
    },
    {
      designId: laminate._id,
      subDesignName: "Platina",
      subDesignValue: "platina",
      status: true,
    },

    {
      designId: veneer._id,
      subDesignName: "Emporio",
      subDesignValue: "emporio",
      status: true,
    },
    {
      designId: veneer._id,
      subDesignName: "luxe",
      subDesignValue: "luxe",
      status: true,
    },

    {
      designId: royalPaint._id,
      subDesignName: "RP",
      subDesignValue: "RP",
      status: true,
    },
    {
      designId: skinClassic._id,
      subDesignName: "Classic",
      subDesignValue: "classic",
      status: true,
    },
  ]);

  console.log("DoorSubDesign seed completed");
};
