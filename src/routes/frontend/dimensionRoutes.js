const express = require("express");
const router = express.Router();

const {
  getAllDimension,
} = require("../../controllers/admin/dimensionController");

router.get("/", getAllDimension);

module.exports = router;
