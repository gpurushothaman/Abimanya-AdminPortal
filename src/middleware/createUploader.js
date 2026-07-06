const multer = require("multer");
const path = require("path");
const fs = require("fs");

function createUploader(uploadFolder) {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      const tempFolder = "uploads/temp";
      fs.mkdirSync(tempFolder, { recursive: true });
      cb(null, tempFolder);
    },

    filename(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  return multer({ storage });
}

module.exports = createUploader;
