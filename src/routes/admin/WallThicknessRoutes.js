const express = require("express");

const router = express.Router();

const {createWallThickness,getAllWallThickness,getWallThicknessById,updateWallThickness,deleteWallThickness,} = require("../../controllers/admin/wallThicknessController");

router.post("/", createWallThickness);
router.get("/", getAllWallThickness);
router.get("/:id", getWallThicknessById);
router.put("/:id", updateWallThickness);
router.delete("/:id", deleteWallThickness);

module.exports = router;