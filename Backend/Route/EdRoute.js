const express = require('express');
const router = express.Router();
const {getYtAllDetail} = require("../Controller/Profile")
const {getAllTaskData}= require("../Controller/EdData");

router.get("/getYtAllDetail",getYtAllDetail)
router.post("/getAllTaskData",getAllTaskData);
module.exports = router;