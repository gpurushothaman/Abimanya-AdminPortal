const express = require("express");

const router = express.Router();

const {login} = require("../../controllers/admin/authController");

router.post("/login", login);

module.exports = router;


// http://localhost:5000/api/admin/auth/login