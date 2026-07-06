const express = require("express");
const createUploader = require("../../middleware/createUploader");
const router = express.Router();

const upload = createUploader("src/assets/doors");

const {getDoorModels,updateDoorModel,} = require("../../controllers/admin/doorModelController");

router.get("/", getDoorModels);

// router.put("/:id",  upload.fields([
//     { name: "modelFile", maxCount: 1 },
//     { name: "mainTexture", maxCount: 1 },
//   ]), updateDoorModel);

  router.put("/:id",  upload.fields([
    { name: "modelFile", maxCount: 1 },
    { name: "mainTexture", maxCount: 1 },
  ]),
  updateDoorModel);

module.exports = router;
