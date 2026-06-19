const express = require("express");
const router = express.Router();

const {
  updateDimension,
  getAllDimension
} = require("../../controllers/admin/DimensionController");

router.put("/:id", updateDimension);
router.get("/", getAllDimension);

module.exports = router;
