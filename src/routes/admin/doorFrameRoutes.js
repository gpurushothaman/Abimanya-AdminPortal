const express = require("express");

const router = express.Router();

const {
  getAllDoorFrame,
  updateDoorFrame,
} = require("../../controllers/admin/doorFrameController");

router.get("/", getAllDoorFrame);
router.put("/:id", updateDoorFrame);

module.exports = router;
