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

  const {
    name,
    marketPrice,
    warrantyTime,
    dateInit,
    description,
    imgMain,
    imgCarrousel1,
    imgCarrousel2,
    imgCarrousel3,
    minLance,
    valeuFree,
    botWin,
    maxLance,
    valueFree,
  } = req.body;

  console.log(req.body);

  var dateCurrentily = getDateHoursSaoPaulo();

  db.collection("products")
    .add({
      name: name,
      marketPrice: marketPrice,
      warrantyTime: warrantyTime,
      dateInit: dateInit,
      description: description,

      minLance: minLance,
      maxLance: maxLance,
      valueFree: valueFree,

      mainURLImage: imgMain,
      imgCarrousel1: imgCarrousel1,
      imgCarrousel2: imgCarrousel2,
      imgCarrousel3: imgCarrousel3,

      dateCurrentilyLance: 0,
      
      botWin: botWin,
    })
    .then((productCreated) => {
      console.log("Produto criado");
      console.log(productCreated);
      res.status(201).end();
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
      res.json(error);
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
