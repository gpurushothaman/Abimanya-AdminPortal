const express = require("express");

const router = express.Router();

router.use("/door-location",require("./doorLocationRoutes"));
router.use("/door-thickness",require("./doorThicknessRoutes"));
router.use("/frame-size",require("./frameSizeRoutes"));
router.use("/dimension",require("./DimensionRoutes"));

module.exports = router;