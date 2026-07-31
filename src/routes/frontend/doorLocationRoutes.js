const express = require("express");
const router = express.Router();

const {getAllDoorLocations,getDoorLocationById} = require("../../controllers/admin/doorLocationController");

router.get("/", getAllDoorLocations);
router.get("/:id", getDoorLocationById);

module.exports = router;
