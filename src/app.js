//Middlewares

//Auth
const auth = require("./middleware/authMiddleware");

//Admin panel
const admin = require("./middleware/adminMiddleware");

//Customer portal - middleware
const user = require("./middleware/userMiddleware");

//Routes

//Admin panel - Auth
const authRoutes = require("./routes/admin/authRoutes");

//Customer portal - Auth
const userAuthRoutes = require("./routes/frontend/authRoutes");

//Admin panel
const adminRoutes = require("./routes/admin");

//Customer portal
const userRoutes = require("./routes/frontend");

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

//Admin panel - auth
app.use("/api/admin/auth", authRoutes);

//Customer portal - auth
app.use("/api/user/auth", userAuthRoutes);

//Admin ( auth, middleware, routes )
app.use("/api/admin", auth, admin, adminRoutes);

//Customer portal ( auth, middleware, routes )
app.use("/api/user", auth, user, userRoutes);

module.exports = app;
