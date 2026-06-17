const express = require("express");

const router = express.Router();

const {createUser} = require("../../controllers/admin/user");

router.post("/", createUser);

module.exports = router;