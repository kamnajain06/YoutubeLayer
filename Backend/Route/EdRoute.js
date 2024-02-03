const express = require('express');
const router = express.Router();
const {getYtAllDetail,updateInCard} = require("../Controller/Profile")
const {getAllTaskData}= require("../Controller/EdData");


router.get("/getYtAllDetail",getYtAllDetail)
router.post("/getAllTaskData",getAllTaskData);
router.post("/updateInCard",updateInCard);
module.exports = router;