const admin = require("../../../config/firebase-config");
const db = admin.firestore();

createNewChampion = (req, res) => {
    
  db.collection("champions")
    .add({})
    .then((championsData) => {
      res.json(championsData);
      return res.status(201).end();
    })
    .catch((error) => {
      console.log(error);
      return res.json(error);
    });
};

getAllChampions = (req, res) => {
  const championsCollection = db.collection("champions");
  const responseData = [];
  championsCollection
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
  createNewChampion,
  getAllChampions,
};
