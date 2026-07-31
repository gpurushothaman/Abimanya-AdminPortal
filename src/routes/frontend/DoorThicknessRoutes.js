const express = require("express");

const router = express.Router();

const {
  getAllDoorThickness  
} = require("../../controllers/admin/doorThicknessController");

router.get("/", getAllDoorThickness);

module.exports = router;
