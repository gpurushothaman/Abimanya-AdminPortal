const express = require("express");
const router = express.Router();

const {
  getDoorModels,
} = require("../../controllers/admin/doorModelController");

router.get("/", getDoorModels);

module.exports = router;
