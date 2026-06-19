const express = require("express");

const router = express.Router();

const {createDoorThickness,getAllDoorThickness,getDoorThicknessById,updateDoorThickness,deleteDoorThickness,} = require("../../controllers/admin/doorThicknessController");

router.post("/", createDoorThickness);
router.get("/", getAllDoorThickness);
router.get("/:id", getDoorThicknessById);
router.put("/:id", updateDoorThickness);
router.delete("/:id", deleteDoorThickness);

module.exports = router;