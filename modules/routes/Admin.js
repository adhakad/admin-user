'use strict';
const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/Admin");


router.get("/", AdminController.getUsers);
router.get("/addUser", (req,res) => {
    res.render("add-user", {message:''});
});
router.post("/addUser", AdminController.addUser);

router.get("/active/:id", AdminController.active);
router.get("/inactive/:id",  AdminController.inactive);

router.get("/termsConditions", AdminController.termsConditions);


router.get("/addTermsConditions", (req,res) => {
    res.render("add-terms-conditions", {message:''});
});
router.post("/addTermsConditions", AdminController.addTermsConditions);

router.get("/termsConditions/:id", AdminController.deleteTermsConditions);





module.exports = router;