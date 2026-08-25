const DoorLocation = require("../../models/admin/DoorLocation");
const DoorDesign = require("../../models/admin/Design");
const DoorSubDesign = require("../../models/admin/DoorSubDesign");
const DoorModel = require("../../models/admin/DoorModel");
const DoorShades = require("../../models/admin/DoorShades");
const DoorFrame = require("../../models/admin/DoorFrame");

exports.getAllDoorCustomizeOptions = async (req, res) => {
  try {
    const location = await DoorLocation.find();
    const design = await DoorDesign.find();
    const subDesign = await DoorSubDesign.find();

    const doorModel = await DoorModel.aggregate([
      {
        $lookup: {
          from: "doorseamlesstextures",
          let: {
            textureId: {
              $convert: {
                input: "$modelSeamlessTextureID",
                to: "objectId",
                onError: null,
                onNull: null,
              },
            },
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$textureId"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                texturePath: 1,
              },
            },
          ],
          as: "textureData",
        },
      },
    ]);


    const doorShades = await DoorShades.aggregate([
      {
        $lookup: {
          from: "doorseamlesstextures",
          let: {
            textureId: {
              $convert: {
                input: "$seamlessTextureId",
                to: "objectId",
                onError: null,
                onNull: null,
              },
            },
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$textureId"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                texturePath: 1,
              },
            },
          ],
          as: "textureData",
        },
      },
    ]);


    const doorFrames = await DoorFrame.find();

    const allOptions = {
      location: location,
      design: design,
      subDesign: subDesign,
      models: doorModel,
      shades: doorShades,
      frames: doorFrames,
    };

    res.status(200).json({
      success: true,
      data: allOptions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
