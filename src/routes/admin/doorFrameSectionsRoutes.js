const express = require("express");

const router = express.Router();

const {
    getAllDoorFrameSections,
    updateDoorFrameSection,
} = require("../../controllers/admin/doorFrameSectionsController");

router.get("/", getAllDoorFrameSections);
router.put("/:id", updateDoorFrameSection);

module.exports = router;