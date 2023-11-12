const admin = require("../../../config/firebase-config");
const db = admin.firestore();

const getOneProductById = (req, res) => {
  const { id } = req.params;
  const responseData = [];
  console.log(id);
  //Essa função serve exclusivamente para pegar o dado do produto
  const productcColletion = db.collection("products");

  productcColletion
    .where("id", "==", id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var document = doc.data();
        responseData.push(document);
      });

      console.log("debugar data resposta");

      console.log(responseData);
      res.json(responseData);

      res.status(200).end();
    })
    .catch((error) => {
      console.error("Erro ao obter documentos: ", error);
      res.status(500).json({ error: "Erro ao obter documentos" });
    });
};

module.exports = {
  getOneProductById,
};
