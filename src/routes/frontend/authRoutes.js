const express = require("express");

const router = express.Router();

const { login,me, register } = require("../../controllers/frontend/authController");

router.post("/login", login);
router.get("/me", me);
router.post("/register", register);

module.exports = router;
