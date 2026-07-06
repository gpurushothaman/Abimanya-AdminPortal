const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");
const DoorFrameTypeOption = require("../DoorFrameTypeOption");
const DoorOrientation = require("../DoorOrientation");

module.exports = async function seedDoorOrientations() {
  const exists = await DoorOrientation.exists({});

  if (exists) {
    console.log("Door orientation already seeded");
    return;
  }

  const data = [
     {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
       { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
       { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
       { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
       { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
       { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
     { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
   
   
   


    //  Half portion

     {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
     {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      orientations: [
        { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
      ],
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      orientations: [
         { name: "LHS", value: "lhs" },
        { name: "RHS", value: "rhs" },
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

    const docs = item.orientations.map((orientation) => ({
      frameTypeOptionId: frameTypeOption._id,
      doorOrientationName: orientation.name,
      doorOrientationValue: orientation.value,
      status: true,
    }));

    await DoorOrientation.insertMany(docs);
  }

  console.log("Door orientation seed completed");
};