const express = require("express");

const router = express.Router();

const {
  getDoorSeamlessTexture,
} = require("../../controllers/admin/doorSeamlessTextureController");

router.get("/", getDoorSeamlessTexture);

module.exports = router;
