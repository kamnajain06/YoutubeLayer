const express = require('express');
const router = express.Router();
const { oauth2, oauth2_v2 } = require("googleapis/build/src/apis/oauth2");
const { google } = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
router.post("/", function (req, res) {
    res.send("Welcome")
})

module.exports = router;