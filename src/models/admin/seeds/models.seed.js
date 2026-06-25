const DoorSubDesign = require("../DoorSubDesign");
const DoorModel = require("../DoorModel");

module.exports = async function seedDoorModels() {
  const exists = await DoorModel.exists({});

  if (exists) {
    console.log("Door models already seeded");
    return;
  }

  const flute = await DoorSubDesign.findOne({
    subDesignValue: "Flute",
  });

  const elite = await DoorSubDesign.findOne({
    subDesignValue: "Elite",
  });

  await DoorModel.insertMany([
    {
      subDesignId: flute._id,
      modelName: "LF 1",
      modelValue: "LF_1",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 2",
      modelValue: "LF_2",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 3",
      modelValue: "LF_3",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 4",
      modelValue: "LF_4",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 5",
      modelValue: "LF_5",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 6",
      modelValue: "LF_6",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 7",
      modelValue: "LF_7",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 8",
      modelValue: "LF_8",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 9",
      modelValue: "LF_9",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 10",
      modelValue: "LF_10",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 11",
      modelValue: "LF_11",
      status: true,
    },
    {
      subDesignId: flute._id,
      modelName: "LF 12",
      modelValue: "LF_12",
      status: true,
    },

    {
      subDesignId: elite._id,
      modelName: "LE 1",
      modelValue: "LE_1",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 2",
      modelValue: "LE_2",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 3",
      modelValue: "LE_3",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 4",
      modelValue: "LE_4",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 5",
      modelValue: "LE_5",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 6",
      modelValue: "LE_6",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 7",
      modelValue: "LE_7",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 8",
      modelValue: "LE_8",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 9",
      modelValue: "LE_9",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 10",
      modelValue: "LE_10",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 11",
      modelValue: "LE_11",
      status: true,
    },
    {
      subDesignId: elite._id,
      modelName: "LE 12",
      modelValue: "LE_12",
      status: true,
    }
  ]);

  console.log("Door models seed completed");
};
