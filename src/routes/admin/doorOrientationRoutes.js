const express = require("express");
const router = express.Router();

const {getAllDoorOrientation,updateDoorOrientation} = require("../../controllers/admin/doorOrientationController");


router.get("/", getAllDoorOrientation);
router.put("/:id",updateDoorOrientation);


module.exports = router;
