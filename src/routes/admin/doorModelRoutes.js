const express = require("express");
const router = express.Router();

const {getDoorModels,updateDoorModel,} = require("../../controllers/admin/doorModelController");

router.get("/", getDoorModels);

router.put("/:id", updateDoorModel);

module.exports = router;
