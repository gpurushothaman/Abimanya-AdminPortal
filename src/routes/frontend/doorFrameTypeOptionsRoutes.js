const express = require("express");

const router = express.Router();

const {
    getAllDoorFrameTypeOptions
} = require("../../controllers/admin/doorFrameTypeOptionsController");

router.get("/", getAllDoorFrameTypeOptions);

module.exports = router;
