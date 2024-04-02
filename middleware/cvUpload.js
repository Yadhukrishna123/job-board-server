const multer  = require('multer');
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../newJob/image/logo")
    },
    filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
    }
})

const logo = multer({ storage: storage });

module.exports = logo