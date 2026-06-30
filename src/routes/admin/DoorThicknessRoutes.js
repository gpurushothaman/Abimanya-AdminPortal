const express = require("express");

const router = express.Router();

const {getAllDoorThickness,updateDoorThickness} = require("../../controllers/admin/doorThicknessController");


router.get("/", getAllDoorThickness);

router.put("/:id", updateDoorThickness);


module.exports = router;