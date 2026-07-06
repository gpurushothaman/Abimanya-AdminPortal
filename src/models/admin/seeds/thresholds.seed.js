const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");
const DoorFrameTypeOption = require("../DoorFrameTypeOption");
const DoorThreshold = require("../DoorThreshold");

module.exports = async function seedDoorThresholds() {
  const exists = await DoorThreshold.exists({});

  if (exists) {
    console.log("Door Thresholds already seeded");
    return;
  }

  const data = [
     {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
       { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
       { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
       { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
       { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
       { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
     { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
   
   
   


    //  Half portion

     {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
     {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      thresholds: [
        { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      thresholds: [
         { name: "Yes", value: "Yes" },
        { name: "No", value: "No" },
      ],
    },

  ]

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

    const docs = item.thresholds.map((threshold) => ({
      frameTypeOptionId: frameTypeOption._id,
      thresholdName: threshold.name,
      thresholdValue: threshold.value,
      status: true,
    }));

    await DoorThreshold.insertMany(docs);
  }

  console.log("Door thresholds seed completed");
};