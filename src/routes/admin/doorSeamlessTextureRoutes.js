const express = require("express");
const createUploader = require("../../middleware/createUploader");
const router = express.Router();

const upload = createUploader("src/assets/doors");

const {
    getDoorSeamlessTexture,
    createDoorSeamlessTexture,
    updateDoorSeamlessTexture,
    deleteDoorSeamlessTexture,
} = require("../../controllers/admin/doorSeamlessTextureController");

router.get("/", getDoorSeamlessTexture);

router.post(
  "/",
  upload.fields([{ name: "seamlessTexture", maxCount: 1 }]),
  createDoorSeamlessTexture
);

router.put(
  "/:id",
  updateDoorSeamlessTexture
);

router.delete("/:id", deleteDoorSeamlessTexture);

module.exports = router;
