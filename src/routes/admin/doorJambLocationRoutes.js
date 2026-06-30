const express = require("express");

const router = express.Router();

const {getAllDoorJambLocation,updateDoorJambLocation} = require("../../controllers/admin/doorJambLocationController");


router.get("/", getAllDoorJambLocation);

router.put("/:id", updateDoorJambLocation);


module.exports = router;