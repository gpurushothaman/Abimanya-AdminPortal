const express = require("express");

const router = express.Router();

router.use("/door-location", require("./doorLocationRoutes"));
router.use("/door-thickness", require("./doorThicknessRoutes"));
router.use("/frame-size", require("./frameSizeRoutes"));
router.use("/dimension", require("./dimensionRoutes"));
router.use("/door-design", require("./doorDesignRoutes"));
router.use("/door-orientation", require("./doorOrientationRoutes"));
router.use("/door-jamb-location", require("./doorJambLocationRoutes"));
router.use("/door-frame", require("./doorFrameRoutes"));
router.use("/door-threshold", require("./doorThresholdRoutes"));
router.use("/door-sub-design", require("./doorSubDesignRoutes"));
router.use("/door-models", require("./doorModelRoutes"));
router.use("/door-frame-types", require("./doorFrameTypeRoutes"));
router.use("/door-frame-type-options", require("./doorFrameTypeOptionsRoutes"));
router.use("/door-shade", require("./doorShadeRoutes"));

module.exports = router;