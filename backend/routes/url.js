const express = require("express");
const { GenerateShortURL, ReturnClicks } = require('../controllers/url');
const router = express.Router()

router.post("/", GenerateShortURL);

router.get("/analytics/:shortId", ReturnClicks);

module.exports = router;