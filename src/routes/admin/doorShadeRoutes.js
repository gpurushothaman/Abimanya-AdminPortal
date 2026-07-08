const express = require("express");
const createUploader = require("../../middleware/createUploader");
const router = express.Router();

const upload = createUploader("src/assets/doors");

const {
  getDoorShades,
  updateDoorShade,
  deleteDoorShade,
  createDoorShade,
} = require("../../controllers/admin/doorShadesController");

router.get("/", getDoorShades);

router.post(
  "/",
  upload.fields([{ name: "shadeTexture", maxCount: 1 }]),
  createDoorShade
);

router.put(
  "/:id",
  upload.fields([{ name: "shadeTexture", maxCount: 1 }]),
  updateDoorShade
);

router.delete("/:id", deleteDoorShade);

module.exports = router;
