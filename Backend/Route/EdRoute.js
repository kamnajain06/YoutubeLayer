const express = require('express');
const router = express.Router();
const {getYtAllDetail,updateInCard} = require("../Controller/Profile")
const {getAllTaskData}= require("../Controller/EdData");
const {auth}= require("../Middleware/Auth");

router.get("/getYtAllDetail",getYtAllDetail)
router.post("/getAllTaskData",getAllTaskData);
router.post("/updateInCard",auth,updateInCard);
module.exports = router;