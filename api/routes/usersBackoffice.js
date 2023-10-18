const express = require("express");
const router = express.Router();
const usersBackOfficeController = require("../controllers/usersBackofficeController");

router.post("/newUserAdmin", usersBackOfficeController.createNewAdminUser);
router.post("/editUserAdmin", usersBackOfficeController.editAdminUser);
router.post("/deleteUserAdmin", usersBackOfficeController.deleteAdminUser);

router.post("/newUserEditor", usersBackOfficeController.createNewEditorUser);
router.post("/editUserEditor", usersBackOfficeController.editEditorUser);
router.post("/deleteUserEditor", usersBackOfficeController.deleteEditorUser);

module.exports = router;
