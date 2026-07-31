const express = require("express");

const router = express.Router();

const {
  getAllDoorFrame,
} = require("../../controllers/admin/doorFrameController");

router.get("/", getAllDoorFrame);

module.exports = router;
