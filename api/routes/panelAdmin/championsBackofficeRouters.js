const express = require("express");
const router = express.Router();
const championsController = require("../../controllers/panelAdmin/championsController");

router.get("/allChampions", championsController.getAllChampions);

module.exports = router;
