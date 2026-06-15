const express = require("express");

const router = express.Router();

router.use(
    "/door-location",
    require("./doorLocationRoutes")
);

module.exports = router;