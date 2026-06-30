const DoorSubDesign = require("../DoorSubDesign");
const DoorJambLocation = require("../DoorJambLocation");

module.exports = async function seedDoorJambLocation() {
  const exists = await DoorJambLocation.exists({});
  if (exists) {
    console.log("Door JambLocation already seeded");
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
    await DoorJambLocation.insertMany([
      {
        subDesignId: flute._id,
       jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: flute._id,
       jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      },
      {
        subDesignId: elite._id,
           jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: elite._id,
      jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      },
       {
        subDesignId: titan._id,
      jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: titan._id, 
         jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      },
      {
        subDesignId: platina._id,
      jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: platina._id,
         jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      },
      {
        subDesignId: emporio._id,
          jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: emporio._id,
           jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      },
      {
        subDesignId: luxe._id,
          jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: luxe._id,
         jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      },
      {
        subDesignId: RP._id,
          jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: RP._id,
          jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      },
      {
        subDesignId: classic._id,
          jambLocationName: "Front",
          jambLocationValue: "front",
        status: true,
      },
      {
        subDesignId: classic._id,
         jambLocationName: "Back",
          jambLocationValue: "back",
        status: true,
      }
    ]);

    console.log("DoorJambLocation seed completed");
  } else {
    console.log("DoorJambLocation already seeded");
  }
};
