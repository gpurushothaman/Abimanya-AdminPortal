const express = require("express");

const router = express.Router();

const {
  getAllDoorFrameType,
} = require("../../controllers/admin/doorFrameTypesController");

router.get("/", getAllDoorFrameType);

module.exports = router;
