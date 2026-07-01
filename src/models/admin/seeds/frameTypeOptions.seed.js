const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");
const DoorFrameTypeOption = require("../DoorFrameTypeOption");

module.exports = async function seedDoorFrameTypeOptions() {
  const exists = await DoorFrameTypeOption.exists({});
  if (exists) {
    console.log("Door frame type option already seeded");
    return;
  }

  const data = [
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
  ];

  if (!exists) {
    for (const item of data) {
      const sub = await DoorSubDesign.findOne({
        subDesignValue: item.subDesign,
      });

      const frame = await DoorFrame.findOne({
        subDesignId: sub._id,
        frameValue: item.frame,
      });

      const frameType = await DoorFrameType.findOne({
        frameId: frame._id,
        frameTypeValue: item.frameType,
      });

      const docs = item.options.map((opt) => ({
        frameTypeId: frameType._id,
        frameTypeOptionName: opt.name,
        frameTypeOptionValue: opt.value,
        status: true,
      }));

      await DoorFrameTypeOption.insertMany(docs);
    }

    console.log("Door frame type option seed completed");
  } else {
    console.log("Door frame type option already seeded");
  }
};
