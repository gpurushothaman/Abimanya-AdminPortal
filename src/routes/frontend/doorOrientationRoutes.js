const express = require("express");
const router = express.Router();

const {getAllDoorOrientations} = require("../../controllers/admin/doorOrientationController");

router.get("/", getAllDoorOrientations);

module.exports = router;
