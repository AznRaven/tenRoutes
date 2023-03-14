const express = require("express");

const router = express.Router();

const shoppingController = require("../controllers/shoppingController");

router.get("/", shoppingController.index);

module.exports = router;
