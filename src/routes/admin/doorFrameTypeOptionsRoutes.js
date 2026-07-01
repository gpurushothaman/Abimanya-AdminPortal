const express = require("express");

const router = express.Router();

const {
    getAllDoorFrameTypeOptions,
    updateDoorFrameTypeOption,
} = require("../../controllers/admin/doorFrameTypeOptionsController");

router.get("/", getAllDoorFrameTypeOptions);
router.put("/:id", updateDoorFrameTypeOption);

module.exports = router;
