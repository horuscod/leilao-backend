const express = require("express");
const router = express.Router();
const usersBackOfficeController = require("../controllers/usersBackofficeController");

router.post("/newUserAdmin", usersBackOfficeController.createNewAdminUser);
router.get("/allUsersAdmin", (req, res) => {
  res.send(
    "Você é curioso em para achar essa rota aqui hahaha, para com isso porque é feio viu"
  );
});
router.post("/editUserAdmin", usersBackOfficeController.editAdminUser);
router.post("/deleteUserAdmin", usersBackOfficeController.deleteAdminUser);

router.post("/newUserEditor", usersBackOfficeController.createNewEditorUser);
router.post("/editUserEditor", usersBackOfficeController.editEditorUser);
router.post("/deleteUserEditor", usersBackOfficeController.deleteEditorUser);

module.exports = router;
