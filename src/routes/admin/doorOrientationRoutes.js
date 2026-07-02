const express = require("express");
const router = express.Router();

const {
  getAllDoorOrientations,
  updateDoorOrientation,
} = require("../../controllers/admin/doorOrientationController");

router.get("/", getAllDoorOrientations);
router.put("/:id", updateDoorOrientation);

module.exports = router;
