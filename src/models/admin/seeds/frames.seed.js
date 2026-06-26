const DoorSubDesign = require("../DoorSubDesign");
const DoorFrame = require("../DoorFrame");

module.exports = async function seedDoorFrames() {
  const exists = await DoorFrame.exists({});
  if (exists) {
    console.log("Door models already seeded");
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
    await DoorFrame.insertMany([
      {
        subDesignId: flute._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: flute._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: flute._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },

      {
        subDesignId: elite._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: elite._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: elite._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },

      {
        subDesignId: titan._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: titan._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: titan._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },

      {
        subDesignId: platina._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: platina._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: platina._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },

      {
        subDesignId: emporio._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: emporio._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: emporio._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },

      {
        subDesignId: luxe._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: luxe._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: luxe._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },

      {
        subDesignId: RP._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: RP._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: RP._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },

      {
        subDesignId: classic._id,
        frameName: "Full",
        frameValue: "full",
        status: true,
      },
      {
        subDesignId: classic._id,
        frameName: "Half",
        frameValue: "half",
        status: true,
      },
      {
        subDesignId: classic._id,
        frameName: "No",
        frameValue: "no",
        status: true,
      },
    ]);

    console.log("DoorFrame seed completed");
  } else {
    console.log("DoorFrame already seeded");
  }
};
