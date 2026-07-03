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
    // laminate full
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
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
      {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
      {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
    // laminate half
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
      {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
      {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },


    // veneer full
     {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
      
    //  venner half
         {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
    
    // royal paint full

           {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
    // royal paint half
          {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
      // skin classic full

           {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      options: [
        { name: "African Teak", value: "Africanteak" },
        { name: "Mahogany", value: "Mahogany" },
        { name: "Steambeech", value: "Steambeech" },
      ],
    },
    // skin classic half
          {
      subDesign: "classic",
      frame: "half",
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
