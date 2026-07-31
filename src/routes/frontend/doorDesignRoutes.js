const express = require("express");

const router = express.Router();

const { getAllDesign } = require("../../controllers/admin/designController");

router.get("/", getAllDesign);

module.exports = router;
