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
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [{ name: "not available", value: "0" }],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [{ name: "not available", value: "0" }],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [{ name: "not available", value: "0" }],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [{ name: "32", value: "DT_32" }],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [{ name: "32", value: "DT_32" }],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [{ name: "32", value: "DT_32" }],
    },
    //    Half MODEL
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "32", value: "DT_32" },
        { name: "35", value: "DT_35" },
        { name: "38", value: "DT_38" },
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [
        { name: "40", value: "DT_40" },
        { name: "45", value: "DT_45" },
        { name: "50", value: "DT_50" },
        { name: "55", value: "DT_55" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [{ name: "not available", value: "0" }],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [{ name: "not available", value: "0" }],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [{ name: "not available", value: "0" }],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      Thicknesss: [{ name: "32", value: "DT_32" }],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      Thicknesss: [{ name: "32", value: "DT_32" }],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      Thicknesss: [{ name: "32", value: "DT_32" }],
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
