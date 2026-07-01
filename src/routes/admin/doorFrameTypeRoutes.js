const express = require("express");

const router = express.Router();

const {
    getAllDoorFrameType,
    updateDoorFrameType,
} = require("../../controllers/admin/doorFrameTypesController");

router.get("/", getAllDoorFrameType);
router.put("/:id", updateDoorFrameType);

module.exports = router;
