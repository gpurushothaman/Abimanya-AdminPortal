const express = require("express");

const router = express.Router();

const {createDoorThreshold,getAllDoorThreshold,getDoorThresholdById,updateDoorThreshold,deleteDoorThreshold,} = require("../../controllers/admin/doorThresholdController");

router.post("/", createDoorThreshold);
router.get("/", getAllDoorThreshold);
router.get("/:id", getDoorThresholdById);
router.put("/:id", updateDoorThreshold);
router.delete("/:id", deleteDoorThreshold);

module.exports = router;