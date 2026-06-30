const DoorSubDesign = require("../DoorSubDesign");
const DoorThreshold = require("../DoorThreshold");

module.exports = async function seedDoorThreshold() {
  const exists = await DoorThreshold.exists({});
  if (exists) {
    console.log("Door Threshold already seeded");
    return;
  }

  //Laminate
  const flute = await DoorSubDesign.findOne({
    subDesignValue: "flute",
  });

  const elite = await DoorSubDesign.findOne({
    subDesignValue: "elite",
  });

  const titan = await DoorSubDesign.findOne({
    subDesignValue: "titan",
  });

  const platina = await DoorSubDesign.findOne({
    subDesignValue: "platina",
  });

  //Veneer
  const emporio = await DoorSubDesign.findOne({
    subDesignValue: "emporio",
  });

  const luxe = await DoorSubDesign.findOne({
    subDesignValue: "luxe",
  });

  //Royal paint
  const RP = await DoorSubDesign.findOne({
    subDesignValue: "RP",
  });

  //Skin
  const classic = await DoorSubDesign.findOne({
    subDesignValue: "classic",
  });

  if (!exists) {
    await DoorThreshold.insertMany([
      {
        subDesignId: flute._id,
       thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: flute._id,
       thresholdName: "No",
          thresholdValue: "no",
        status: true,
      },
      {
        subDesignId: elite._id,
           thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: elite._id,
     thresholdName: "No",
          thresholdValue: "no",
        status: true,
      },
       {
        subDesignId: titan._id,
       thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: titan._id, 
           thresholdName: "No",
          thresholdValue: "no",
        status: true,
      },
      {
        subDesignId: platina._id,
     thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: platina._id,
            thresholdName: "No",
          thresholdValue: "no",
        status: true,
      },
      {
        subDesignId: emporio._id,
          thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: emporio._id,
             thresholdName: "No",
          thresholdValue: "no",
        status: true,
      },
      {
        subDesignId: luxe._id,
        thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: luxe._id,
           thresholdName: "No",
          thresholdValue: "no",
        status: true,
      },
      {
        subDesignId: RP._id,
          thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: RP._id,
             thresholdName: "No",
          thresholdValue: "no",
        status: true,
      },
      {
        subDesignId: classic._id,
         thresholdName: "Yes",
          thresholdValue: "yes",
        status: true,
      },
      {
        subDesignId: classic._id,
           thresholdName: "No",
          thresholdValue: "no",
        status: true,
      }
    ]);

    console.log("DoorThreshold seed completed");
  } else {
    console.log("DoorThreshold already seeded");
  }
};
