const express = require("express");
const router = express.Router();

const {
  getDoorSubDesign,
} = require("../../controllers/admin/doorSubDesignController");

router.get("/", getDoorSubDesign);

module.exports = router;
