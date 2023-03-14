const express = require("express");

const router = express.Router();

const salesController = require("../controllers/salesController");

router.get("/", salesController.index);

module.exports = router;
