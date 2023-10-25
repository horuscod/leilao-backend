const admin = require("../../../config/firebase-config");
const db = admin.firestore();

createNewPackage = (req, res) => {
  const {
    name,
    quantityCupom,
    urlBuyPackage,
    valueToBuyPackage,
    urlImagePackage,
    textButtonBuy,
    description,
  } = req.body;

  db.collection("packages")
    .add({
      name: name,
      quantityCupom: parseInt(quantityCupom),
      urlBuyPackage: urlBuyPackage,
      valueToBuyPackage:valueToBuyPackage,
      urlImagePackage: urlImagePackage,
      textButtonBuy: textButtonBuy,
      description: description,
    })
    .then((packageData) => {
      res.json(packageData);
      return res.status(201).end();
    })
    .catch((error) => {
      console.log(error);
      return res.json(error);
    });
};

getAllPackages = (req, res) => {
  const collectionPacakges = db.collection("packages");
  const responseData = [];
  collectionPacakges
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var document = doc.data();
        responseData.push(document);
      });
      res.json(responseData);
    })
    .catch((error) => {
      console.error("Erro ao obter documentos: ", error);
      res.status(500).json({ error: "Erro ao obter documentos" });
    });
};

module.exports = {
  createNewPackage,
  getAllPackages,
};
