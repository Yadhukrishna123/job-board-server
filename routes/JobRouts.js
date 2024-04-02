const express = require("express");
const router = express.Router();
const upload = require("../middleware/fileUpload");
const { upplyedUser} = require("../controllers/jobControllers");


router.route("/upply").post(upload.single("resume"),upplyedUser)



    module.exports = router;