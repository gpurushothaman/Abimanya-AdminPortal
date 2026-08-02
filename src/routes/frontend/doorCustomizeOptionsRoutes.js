const express = require("express");
const router = express.Router();

const {
  getAllDoorCustomizeOptions,
} = require("../../controllers/frontend/doorCustomizeOptionsController");

router.get("/", getAllDoorCustomizeOptions);

module.exports = router;
