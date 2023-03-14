const express = require("express");

const router = express.Router();

const vlogController = require("../controllers/vlogController");

router.get("/", vlogController.index);

module.exports = router;
