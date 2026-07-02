const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");
const DoorFrameTypeOption = require("../DoorFrameTypeOption");
const DoorThickness = require("../DoorThickness");

module.exports = async function seedDoorThickness() {
  const exists = await DoorThickness.exists({});

  if (exists) {
    console.log("Door Thickness already seeded");
    return;
  }

  const data = [
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "32" },
        { name: "35", value: "35" },
        { name: "38", value: "38" },
        { name: "40", value: "40" },
        { name: "45", value: "45" },
        { name: "50", value: "50" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "32" },
        { name: "35", value: "35" },
        { name: "38", value: "38" },
        { name: "40", value: "40" },
        { name: "45", value: "45" },
        { name: "50", value: "50" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "32" },
        { name: "35", value: "35" },
        { name: "38", value: "38" },
        { name: "40", value: "40" },
        { name: "45", value: "45" },
        { name: "50", value: "50" },
      ],
    },
  ];

  for (const item of data) {
    const sub = await DoorSubDesign.findOne({
      subDesignValue: item.subDesign,
    });

    if (!sub) continue;

    const frame = await DoorFrame.findOne({
      subDesignId: sub._id,
      frameValue: item.frame,
    });

    if (!frame) continue;

    const frameType = await DoorFrameType.findOne({
      frameId: frame._id,
      frameTypeValue: item.frameType,
    });

    if (!frameType) continue;

    const frameTypeOption = await DoorFrameTypeOption.findOne({
      frameTypeId: frameType._id,
      frameTypeOptionValue: item.frameTypeOption,
    });

    if (!frameTypeOption) continue;

    const docs = item.Thicknesss.map((Thickness) => ({
      frameTypeOptionId: frameTypeOption._id,
      DoorThicknessName: Thickness.name,
      DoorThicknessValue: Thickness.value,
      status: true,
    }));

    await DoorThickness.insertMany(docs);
  }

  console.log("Door Thickness seed completed");
};