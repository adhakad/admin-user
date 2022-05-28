'use strict';
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller");

router.get("/", (req,res) => {
    res.render("user-login",{message:''});
});
router.post("/", UserController.userLogin);
router.get("/getUsers",UserController.getUsers);

router.post("/TermsConditionsAccept",UserController.TermsConditionsAccept);

module.exports = router;