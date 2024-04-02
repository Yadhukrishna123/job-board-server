const express = require("express")
const router = express.Router();
const {getAllUsers,  userRegister, userLogin,getUser, updateuser,deleteAcc ,newJob} = require("../controllers/userController");





router.route("/users").get( getAllUsers);

router.route("/register").post(userRegister);

router.route("/login").post(userLogin);
router.route("/user/:id").get(getUser).put(updateuser).delete(deleteAcc);
router.route("/updateJob").post(newJob);








module.exports = router