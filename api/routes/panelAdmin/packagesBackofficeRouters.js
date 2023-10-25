const express = require("express");
const router = express.Router();
const packagesController = require("../../controllers/panelAdmin/packagesController");

router.post("/newPackage", packagesController.createNewPackage);
router.get("/allPackages", packagesController.getAllPackages);

module.exports = router;
