

                //      FULL CODE IMPORTED ------>>>  (((( THIYAGUUUU   )))



const express = require("express");
const router = express.Router();
const {saveDoorLocation} = require("../../controllers/admin/doorLocationController");
router.post("/save",saveDoorLocation);
module.exports = router;
// http://localhost:5000/api/admin/doorlocation/save