const express = require("express");

const router = express.Router();

const {
  getAllDoorThreshold,
} = require("../../controllers/admin/doorThresholdController");

router.get("/", getAllDoorThreshold);

module.exports = router;
