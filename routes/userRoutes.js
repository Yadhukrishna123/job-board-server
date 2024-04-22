const express = require("express")
const router = express.Router();
const {getAllUsers,  userRegister, userLogin,getUser, updateuser,deleteAcc ,newJob,getJob, deleteJob, getJobs, updateJobs} = require("../controllers/userController");





router.route("/users").get( getAllUsers);

router.route("/register").post(userRegister);

router.route("/login").post(userLogin);
router.route("/user/:id").get(getUser).put(updateuser).delete(deleteAcc);
router.route("/updateJob").post(newJob);
router.route("/getjob").get(getJob);
router.route("/getjob/:id").delete(deleteJob).get(getJobs).put(updateJobs)









module.exports = router