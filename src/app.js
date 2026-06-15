//Middlewares

//Auth
const auth =
require("./middleware/authMiddleware");

//Admin panel
const admin =
require("./middleware/adminMiddleware");

//Routes

//Auth
const authRoutes = require("./routes/admin/authRoutes");   


//               ((((     THIYAGU UPDATED THE DOOR LOCATION   )))) 

const doorLocationRoutes = require("./routes/admin/doorLocationRoutes"); 



//Admin panel
const adminRoutes =
    require("./routes/admin");
 

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


//Admin panel - auth
app.use("/api/admin/auth", authRoutes);
// https://localhost:5000/api/admin/auth
//Admin
app.use("/api/admin",auth,admin,adminRoutes);




                           // THIYAGUUUU CREATE THE API LINKS ---> ((( Doorlocation )))
                
app.use("/api/admin/doorlocation",doorLocationRoutes);
//  http://localhost:5000/api/admin/doorlocation





module.exports = app;