const express = require("express");
const router = express.Router();

const {getDoorSubDesign,updateDoorSubDesign} = require("../../controllers/admin/doorSubDesignController");

router.get("/", getDoorSubDesign);

router.put("/:id",updateDoorSubDesign);


module.exports = router;
