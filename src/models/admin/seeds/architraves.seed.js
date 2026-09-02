const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");
const DoorFrameTypeOption = require("../DoorFrameTypeOption");
const DoorArchitrave = require("../DoorArchitrave");

module.exports = async function seedDoorArchitraves() {
  const exists = await DoorArchitrave.exists({});

  if (exists) {
    console.log("Door architraves already seeded");
    return;
  }

  const data = [
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },
    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
      },
    },

    //  Half portion

    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Africanteak",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Mahogany",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
    },
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      frameTypeOption: "Steambeech",
      architraves: {
        front: [
          { name: "S40", value: "S40" },
          { name: "S60", value: "S60" },
        ],
        back: [{ name: "S30", value: "S30" }],
      },
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

    // Create architrave document
    const doc = {
      frameTypeOptionId: frameTypeOption._id,

      front: item.architraves.front.map((architrave) => ({
        name: architrave.name,
        value: architrave.value,
      })),

      back: item.architraves.back.map((architrave) => ({
        name: architrave.name,
        value: architrave.value,
      })),

      status: true,
    };

    await DoorArchitrave.create(doc);
  }

  console.log("Door architrave seed completed");
};
