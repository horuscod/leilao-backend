const express = require("express");
const router = express.Router();
const productController = require("../../controllers/panelAdmin/productsController");

/* Rotas do Painel administrativo */
router.get("/allProducts", productController.getAllProducts);
router.post("/newProduct", productController.createNewProduct);

/* Rotas do site */
router.get("/products", productController.getAllProducts);

module.exports = router;
