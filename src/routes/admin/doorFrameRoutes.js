const express = require("express");

const router = express.Router();

const {createDoorFrame,getAllDoorFrame,getDoorFrameById,updateDoorFrame,deleteDoorFrame,} = require("../../controllers/admin/doorFrameController");

router.post("/", createDoorFrame);
router.get("/", getAllDoorFrame);
router.get("/:id", getDoorFrameById);
router.put("/:id", updateDoorFrame);
router.delete("/:id", deleteDoorFrame);

module.exports = router;