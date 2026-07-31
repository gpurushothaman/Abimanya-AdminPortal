const express = require("express");

const router = express.Router();

const {
  getAllDoorJambLocation,
} = require("../../controllers/admin/doorJambLocationController");

router.get("/", getAllDoorJambLocation);

module.exports = router;
