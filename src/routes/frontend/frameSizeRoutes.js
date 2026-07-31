const express = require("express");
const router = express.Router();

const { getFrameSize } = require("../../controllers/admin/frameSizeController");

router.get("/", getFrameSize);

module.exports = router;
