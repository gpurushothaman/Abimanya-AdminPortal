const express = require("express");
const router = express.Router();

const {createFrameSize,getFrameSize,updateFrameSize,deleteFrameSize,} = require("../../controllers/admin/frameSizeController");

router.post("/", createFrameSize);
router.get("/", getFrameSize);
router.put("/:id", updateFrameSize);
router.delete("/:id", deleteFrameSize);

module.exports = router;