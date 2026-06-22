const express = require("express");

const router = express.Router();

router.use("/door-location",require("./doorLocationRoutes"));
router.use("/door-thickness",require("./doorThicknessRoutes"));
router.use("/frame-size",require("./frameSizeRoutes"));
<<<<<<< HEAD
router.use("/dimension",require("./dimensionRoutes"));
router.use("/design",require("./designRoutes"));
=======
router.use("/dimension",require("./DimensionRoutes"));
router.use("/door-orientation",require("./doorOrientationRoutes"));
router.use("/door-jamb-location",require("./doorJambLocationRoutes"));
router.use("/door-frame",require("./doorFrameRoutes"));

>>>>>>> 892854d76b926cafa144dd3805bacdbb132e3935

module.exports = router;