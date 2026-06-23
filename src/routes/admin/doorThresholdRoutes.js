const express = require("express");

const router = express.Router();

const {getAllDoorThreshold,updateDoorThreshold} = require("../../controllers/admin/doorThresholdController");

router.get("/", getAllDoorThreshold);
router.put("/:id", updateDoorThreshold);

module.exports = router;