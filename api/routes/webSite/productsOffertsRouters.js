const express = require("express");
const router = express.Router();
const ProductsController = require("../../controllers/webSite/productsOffertsController");

router.get(
  "/getOneProduct/:id",
  ProductsController.getOneProductById
);

module.exports = router;
