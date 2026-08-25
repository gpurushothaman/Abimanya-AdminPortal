const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");
const DoorFrameType = require("../DoorFrameType");
const DoorFrameTypeOption = require("../DoorFrameTypeOption");
const DoorFrameSection = require("../DoorFrameSection");

module.exports = async function seedDoorFrameSections() {
  const exists = await DoorFrameSection.exists({});
  if (exists) {
    console.log("Door frame section already seeded");
    return;
  }

  const data = [
    // laminate full
    {
      subDesign: "flute",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "elite",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "platina",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "titan",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    // laminate half
    {
      subDesign: "flute",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "elite",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "platina",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "titan",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },

    // veneer full
    {
      subDesign: "emporio",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "luxe",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },

    //  venner half
    {
      subDesign: "emporio",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    {
      subDesign: "luxe",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },

    // royal paint full

    {
      subDesign: "RP",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    // royal paint half
    {
      subDesign: "RP",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    // skin classic full

    {
      subDesign: "classic",
      frame: "full",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
      ],
    },
    // skin classic half
    {
      subDesign: "classic",
      frame: "half",
      frameType: "solidWood",
      options: [
        {
          name: "African Teak",
          value: "Africanteak",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Mahogany",
          value: "Mahogany",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
        {
          name: "Steambeech",
          value: "Steambeech",
          sections: [
            {
              name: "90 x 60",
              value: "SAT_3a_90_60_F",
            },
            {
              name: "115 x 60",
              value: "SAT_3a_115_60_F",
            },
            {
              name: "140 x 60",
              value: "SAT_3a_140_60_F",
            },
          ],
        },
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

      for (const opt of item.options) {
        // Get already existing DoorFrameTypeOption
        const frameTypeOption = await DoorFrameTypeOption.findOne({
          frameTypeId: frameType._id,
          frameTypeOptionValue: opt.value,
        });

        if (!frameTypeOption) {
          console.log(`Frame type option not found: ${opt.value}`);
          continue;
        }

        // Insert sections into separate DoorFrameSection collection
        const sections = opt.sections.map((section) => ({
          frameTypeOptionId: frameTypeOption._id,
          frameSectionName: section.name,
          frameSectionValue: section.value,
          status: true,
        }));

        await DoorFrameSection.insertMany(sections);
      }
    }

    console.log("Door frame section seed completed");
  } else {
    console.log("Door frame section already seeded");
  }
};
