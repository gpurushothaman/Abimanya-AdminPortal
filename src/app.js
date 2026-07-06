//Middlewares

//Auth
const auth = require("./middleware/authMiddleware");

//Admin panel
const admin = require("./middleware/adminMiddleware");

//Routes

//Auth
const authRoutes = require("./routes/admin/authRoutes");

//Admin panel
const adminRoutes = require("./routes/admin");

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    "/assets",
    express.static(path.join(__dirname, "/assets"))
  );

//Admin panel - auth
app.use("/api/admin/auth", authRoutes);

//Admin
app.use("/api/admin", auth, admin, adminRoutes);

module.exports = app;
