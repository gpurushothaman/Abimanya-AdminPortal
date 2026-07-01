const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");

module.exports = async function seedDoorFrameTypes() {
  const exists = await DoorFrameType.exists({});
  if (exists) {
    console.log("Door frame type already seeded");
    return;
  }

  const data = [
    {
      subDesign: "flute",
      frame: "full",
      types: [
        { name: "Solid Wood", value: "solidWood" },
        { name: "Laminate Profile Wrapping", value: "laminateProfileWrapping" },
        { name: "Laminate Profile Wrapping + Wallcase", value: "laminateProfileWrappingWallcase" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      types: [
        { name: "Solid Wood", value: "solidWood" },
        { name: "Laminate Profile Wrapping", value: "laminateProfileWrapping" }
      ],
    },
    {
        subDesign: "flute",
        frame: "no",
        types: [],
    }
  ];


  if (!exists) {
    const documents = [];

    for (const item of data) {
      const subDesign = await DoorSubDesign.findOne({
        subDesignValue: item.subDesign,
      });
    
      const frame = await DoorFrame.findOne({
        subDesignId: subDesign._id,
        frameValue: item.frame,
      });
    
      item.types.forEach((type) => {
        documents.push({
          frameId: frame._id,
          frameTypeName: type.name,
          frameTypeValue: type.value,
          status: true,
        });
      });
    }
    
    await DoorFrameType.insertMany(documents);
    console.log("Door frame type seed completed");
  } else {
    console.log("Door frame type already seeded");
  }
};
