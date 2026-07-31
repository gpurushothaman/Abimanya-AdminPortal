const express = require("express");

const router = express.Router();

const {
  getDoorShades,
} = require("../../controllers/admin/doorShadesController");

router.get("/", getDoorShades);

module.exports = router;
