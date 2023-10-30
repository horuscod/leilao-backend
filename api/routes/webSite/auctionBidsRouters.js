const express = require("express");
const router = express.Router();
const auctionBidsController = require("../../controllers/webSite/auctionBidsController");

router.post("/newAuctionBids", auctionBidsController.actionAuctionUser);
router.get(
  "/listAllAuctionsBidsInProduct/:id",
  auctionBidsController.getAllActionBidsInOneProduct
);

module.exports = router;
