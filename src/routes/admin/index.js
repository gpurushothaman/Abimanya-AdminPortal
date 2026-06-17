const express = require("express");

const router = express.Router();

router.use("/door-location",require("./doorLocationRoutes"));
router.use("/wall-thickness",require("./wallThicknessRoutes"));
router.use("/frame-size",require("./frameSizeRoutes"));

module.exports = router;