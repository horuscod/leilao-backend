const express = require("express");
const router = express.Router();
const usersBackOfficeController = require("../../controllers/panelAdmin/usersController");

router.post("/newUserAdmin", usersBackOfficeController.createNewAdminUser);
router.get("/allUsersAdmin", usersBackOfficeController.getAllAdminUsers);
router.post("/editUserAdmin", usersBackOfficeController.editAdminUser);
router.post("/deleteUserAdmin", usersBackOfficeController.deleteAdminUser);

router.post("/newUserEditor", usersBackOfficeController.createNewEditorUser);
router.get("/allUsersEditor", usersBackOfficeController.getAllEditorsUsers);
router.post("/editUserEditor", usersBackOfficeController.editEditorUser);
router.post("/deleteUserEditor", usersBackOfficeController.deleteEditorUser);

module.exports = router;
