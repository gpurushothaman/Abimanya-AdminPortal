const express = require("express");
const router = express.Router();

const {saveDesign,getAllDesign,getDesignById,updateDesign,deleteDesign,} = require("../../controllers/admin/designController");

router.post("/", saveDesign);
router.get("/", getAllDesign);
router.get("/:id", getDesignById);
router.put("/:id", updateDesign);
router.delete("/:id", deleteDesign);

module.exports = router;
