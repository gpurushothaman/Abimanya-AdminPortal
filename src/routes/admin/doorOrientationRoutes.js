const express = require("express");
const router = express.Router();

const {createDoorOrientation,getAllDoorOrientation,getDoorOrientationById,updateDoorOrientation,deleteDoorOrientation,} = require("../../controllers/admin/doorOrientationController");

router.post("/",createDoorOrientation);
router.get("/", getAllDoorOrientation);
router.get("/:id", getDoorOrientationById);
router.put("/:id",updateDoorOrientation);
router.delete("/:id", deleteDoorOrientation);

module.exports = router;
