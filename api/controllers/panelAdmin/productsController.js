const admin = require("../../../config/firebase-config");

const getDateHoursSaoPaulo = () => {
  const dataAtual = new Date();
  const fusoHorarioSaoPaulo = -3 * 60;
  const offsetSaoPaulo = dataAtual.getTimezoneOffset();
  dataAtual.setMinutes(
    dataAtual.getMinutes() - (offsetSaoPaulo - fusoHorarioSaoPaulo)
  );
  return dataAtual;
};

createNewProduct = (req, res) => {
  const db = admin.firestore();
  const { productName, email, password } = req.body;
  var dateCurrentily = getDateHoursSaoPaulo();

  db.collection("products")
    .add({})
    .then((productCreated) => {})
    .catch((error) => {
      console.log("Error creating new user:", error);
      res.status(500).end();
    });
};

getAllProducts = (req, res) => {
  const db = admin.firestore();
  const productsCollection = db.collection("products");
  const responseData = [];
  productsCollection
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

editProduct = (req, res) => {
  const db = admin.firestore();
};

removeProduct = (req, res) => {
  const db = admin.firestore();
};

module.exports = {
  createNewProduct,
  getAllProducts,
  editProduct,
  removeProduct,
};
