const express = require("express")
const upload = require("../middleware/fileUpload")
const { contactInfo } = require("../controllers/contactController")
const router = express.Router()

router.route("/contactInfo").post(upload.single("resume"), contactInfo)

module.exports = router