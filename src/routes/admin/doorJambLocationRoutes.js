const express = require("express");

const router = express.Router();

const {createDoorJambLocation,getAllDoorJambLocation,getDoorJambLocationById,updateDoorJambLocation,deleteDoorJambLocation,} = require("../../controllers/admin/doorJambLocationController");

router.post("/", createDoorJambLocation);
router.get("/", getAllDoorJambLocation);
router.get("/:id", getDoorJambLocationById);
router.put("/:id", updateDoorJambLocation);
router.delete("/:id", deleteDoorJambLocation);

module.exports = router;