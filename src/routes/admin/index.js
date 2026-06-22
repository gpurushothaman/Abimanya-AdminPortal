const express = require("express");

const router = express.Router();

router.use("/door-location",require("./doorLocationRoutes"));
router.use("/door-thickness",require("./doorThicknessRoutes"));
router.use("/frame-size",require("./frameSizeRoutes"));
router.use("/dimension",require("./dimensionRoutes"));
router.use("/design",require("./designRoutes"));
router.use("/door-orientation",require("./doorOrientationRoutes"));
router.use("/door-jamb-location",require("./doorJambLocationRoutes"));
router.use("/door-frame",require("./doorFrameRoutes"));
router.use("/door-threshold",require("./doorThresholdRoutes"));


module.exports = router;