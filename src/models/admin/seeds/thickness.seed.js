const DoorSubDesign = require("../DoorSubDesign");
const DoorThickness = require("../DoorThickness");

module.exports = async function seedDoorThickness() {
  const exists = await DoorThickness.exists({});
  if (exists) {
    console.log("Door Thickness already seeded");
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
    await DoorThickness.insertMany([
      {
        subDesignId: flute._id,
         DoorThicknessName:"32",
          DoorThicknessValue: "32",
        status: true,
      },
      {
        subDesignId: flute._id,
       DoorThicknessName: "35",
          DoorThicknessValue: "35",
        status: true,
      },
         {
        subDesignId: flute._id,
         DoorThicknessName:"38",
          DoorThicknessValue: "38",
        status: true,
      },
         {
        subDesignId: flute._id,
         DoorThicknessName:"40",
          DoorThicknessValue: "40",
        status: true,
      },
         {
        subDesignId: flute._id,
         DoorThicknessName:"45",
          DoorThicknessValue: "45",
        status: true,
      },
         {
        subDesignId: flute._id,
         DoorThicknessName:"50",
          DoorThicknessValue: "50",
        status: true,
      },
      {
        subDesignId: elite._id,
            DoorThicknessName:"32",
          DoorThicknessValue:  "32",
        status: true,
      },
      {
        subDesignId: elite._id,
     DoorThicknessName: "35",
          DoorThicknessValue:  "35",
        status: true,
      },
       {
        subDesignId: elite._id,
            DoorThicknessName:"38",
          DoorThicknessValue:  "38",
        status: true,
      },
       {
        subDesignId: elite._id,
            DoorThicknessName:"40",
          DoorThicknessValue:  "40",
        status: true,
      },
       {
        subDesignId: elite._id,
            DoorThicknessName:"45",
          DoorThicknessValue:  "45",
        status: true,
      },
       {
        subDesignId: elite._id,
            DoorThicknessName:"50",
          DoorThicknessValue:  "50",
        status: true,
      },
       {
        subDesignId: titan._id,
        DoorThicknessName: "32",
          DoorThicknessValue:  "32",
        status: true,
      },
        {
        subDesignId: titan._id,
        DoorThicknessName: "35",
          DoorThicknessValue:  "35",
        status: true,
      },
        {
        subDesignId: titan._id,
        DoorThicknessName: "38",
          DoorThicknessValue:  "38",
        status: true,
      },
        {
        subDesignId: titan._id,
        DoorThicknessName: "40",
          DoorThicknessValue:  "40",
        status: true,
      },
        {
        subDesignId: titan._id,
        DoorThicknessName: "45",
          DoorThicknessValue:  "45",
        status: true,
      },
      {
        subDesignId: titan._id, 
          DoorThicknessName: "50",
          DoorThicknessValue: "50",
        status: true,
      },
      {
        subDesignId: platina._id,
      DoorThicknessName: "32",
      DoorThicknessValue:  "32",
        status: true,
      },
      {
        subDesignId: platina._id,
             DoorThicknessName: "35",
        DoorThicknessValue: "35",
        status: true,
      },
       {
        subDesignId: platina._id,
      DoorThicknessName: "38",
      DoorThicknessValue:  "38",
        status: true,
      },
       {
        subDesignId: platina._id,
      DoorThicknessName: "40",
      DoorThicknessValue:  "40",
        status: true,
      },
       {
        subDesignId: platina._id,
      DoorThicknessName: "45",
      DoorThicknessValue:  "45",
        status: true,
      },
       {
        subDesignId: platina._id,
      DoorThicknessName: "50",
      DoorThicknessValue:  "50",
        status: true,
      },
      {
        subDesignId: emporio._id,
           DoorThicknessName:"40",
          DoorThicknessValue:  "40",
        status: true,
      },
      {
        subDesignId: emporio._id,
              DoorThicknessName: "45",
        DoorThicknessValue:  "45",
        status: true,
      },
        {
        subDesignId: emporio._id,
           DoorThicknessName:"50",
          DoorThicknessValue:  "50",
        status: true,
      },
        {
        subDesignId: emporio._id,
           DoorThicknessName:"55",
          DoorThicknessValue:  "55",
        status: true,
      },
      {
        subDesignId: luxe._id,
         DoorThicknessName: "40",
         DoorThicknessValue: "40",
        status: true,
      },
      {
        subDesignId: luxe._id,
            DoorThicknessName: "45",
          DoorThicknessValue:  "45",
        status: true,
      },
         {
        subDesignId: luxe._id,
            DoorThicknessName: "50",
          DoorThicknessValue:  "50",
        status: true,
      },
         {
        subDesignId: luxe._id,
            DoorThicknessName: "55",
          DoorThicknessValue:  "55",
        status: true,
      },
       {
        subDesignId: RP._id,
            DoorThicknessName: "Not Available",
          DoorThicknessValue:  "0",
        status: true,
      },
   
      {
        subDesignId: classic._id,
         DoorThicknessName:"32",
          DoorThicknessValue:  "32",
        status: true,
      },
    
    ]);

    console.log("DoorThickness seed completed");
  } else {
    console.log("DoorThickness already seeded");
  }
};
