const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");
const DoorFrameTypeOption = require("../DoorFrameTypeOption");
const DoorJambLocation = require("../DoorJambLocation");

module.exports = async function seedDoorJambLocations() {
  const exists = await DoorJambLocation.exists({});

  if (exists) {
    console.log("Door JambLocation already seeded");
    return;
  }

  const data = [
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
   
   
   


    //  Half portion

     {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
     {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      jamblocations: [
        { name: "FRONT", value: "front" },
        { name: "BACK", value: "back" },
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

    const docs = item.jamblocations.map((jamblocation) => ({
      frameTypeOptionId: frameTypeOption._id,
      jambLocationName: jamblocation.name,
      jambLocationValue: jamblocation.value,
      status: true,
    }));

    await DoorJambLocation.insertMany(docs);
  }

  console.log("Door jamblocation seed completed");
};