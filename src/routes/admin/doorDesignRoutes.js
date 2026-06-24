const express = require("express");

const router = express.Router();

const {getAllDesign,updateDesign} = require("../../controllers/admin/designController");

router.get("/", getAllDesign);
router.put("/:id", updateDesign);

module.exports = router;