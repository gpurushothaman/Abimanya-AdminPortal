const DoorSubDesign = require("../DoorSubDesign");
const DoorOrientation = require("../DoorOrientation");

module.exports = async function seedDoorOrientation() {
  const exists = await DoorOrientation.exists({});
  if (exists) {
    console.log("Door Orientations already seeded");
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
    await DoorOrientation.insertMany([
      {
        subDesignId: flute._id,
       DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: flute._id,
       DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      },
      {
        subDesignId: elite._id,
        DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: elite._id,
       DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      },
       {
        subDesignId: titan._id,
       DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: titan._id, 
       DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      },
      {
        subDesignId: platina._id,
       DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: platina._id,
       DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      },
      {
        subDesignId: emporio._id,
         DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: emporio._id,
         DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      },
      {
        subDesignId: luxe._id,
         DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: luxe._id,
        DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      },
      {
        subDesignId: RP._id,
        DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: RP._id,
        DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      },
      {
        subDesignId: classic._id,
        DoorOrientationName: "LHS",
          DoorOrientationValue: "lhs",
        status: true,
      },
      {
        subDesignId: classic._id,
       DoorOrientationName: "RHS",
          DoorOrientationValue: "rhs",
        status: true,
      }
    ]);

    console.log("DoorOrientation seed completed");
  } else {
    console.log("DoorOrientation already seeded");
  }
};
