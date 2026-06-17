const express = require("express");
const router = express.Router();

const {saveDoorLocation,getAllDoorLocations,getDoorLocationById,updateDoorLocation,deleteDoorLocation,} = require("../../controllers/admin/doorLocationController");

router.post("/", saveDoorLocation);
router.get("/", getAllDoorLocations);
router.get("/:id", getDoorLocationById);
router.put("/:id", updateDoorLocation);
router.delete("/:id", deleteDoorLocation);

module.exports = router;
