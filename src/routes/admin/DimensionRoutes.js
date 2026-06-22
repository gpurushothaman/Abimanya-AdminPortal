const express = require("express");
const router = express.Router();

const {
  updateDimension,
  getAllDimension
} = require("../../controllers/admin/dimensionController");

router.put("/:id", updateDimension);
router.get("/", getAllDimension);

module.exports = router;
