const express = require("express");
const router = express.Router();

const { user_signup, user_signin, user_signout, requireSignin } = require("../../controllers/user/auth");
const {userSignupValidator} = require("../../validator/user");

router.post("/user_signup", userSignupValidator, user_signup);
router.post("/user_signin", user_signin);
router.get("/user_signout", user_signout);




module.exports = router;