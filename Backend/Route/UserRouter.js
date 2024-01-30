const express = require('express');
const router = express.Router();

const {signup,login}= require("../Controller/Autherise");
const {getUserDetails} =require("../Controller/Profile")



router.post("/signup",signup);
router.post("/login",login);
router.post("/getUserDetails",getUserDetails);


module.exports = router;