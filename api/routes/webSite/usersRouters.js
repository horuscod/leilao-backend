const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/webSite/usersController");

router.post("/signup", usersController.createUserLoginPage);
router.post("/login", usersController.userLogin);
router.post("/getOneUser", usersController.getOneUserByUID);
router.put("/profile/person", usersController.updateUserInfoPerson);
router.put("/profile/address", usersController.updateUserInfoAddress);

module.exports = router;
