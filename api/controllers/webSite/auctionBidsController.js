const admin = require("../../../config/firebase-config");
const db = admin.firestore();
const usersController = require("../../controllers/panelAdmin/usersController");

/* Função para não mexer até o momento */
const getOneUserByUID = (uid) => {
  //Essa função serve exclusivamente só para pegar os dados do usuário que está dando o Lance
  const usersCollection = db.collection("usersWebSite");

  return usersCollection
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        console.log("Usuário encontrado");
        console.log(documentData);
        return documentData;
      } else {
        console.log("Documento Não Encontrado");
        return null;
      }
    })
    .catch((error) => {
      console.error("Erro ao obter o documento: ", error);
    });
};
const getOneProductById = async (uidProduct) => {
  //Essa função serve exclusivamente para pegar o dado do produto
  const productcColletion = db.collection("products");
  try {
    const doc = await productcColletion.doc(uidProduct).get();
    if (doc.exists) {
      const productDocument = doc.data();

      console.log("Produto Existe");

      return productDocument;
    } else {
      console.log("Documento não encontrado");

      return null;
    }
  } catch (error) {
    console.error("Erro ao obter o documento: ", error);
    throw error; // Lançar o erro para que ele seja capturado pela chamada assíncrona.
  }
};

const goToSetNewLanceInProduct = (uidProduct, userData, valueLance) => {
  admin
    .firestore()
    .collection("products")
    .doc(uidProduct)
    .update({
      lance: admin.firestore.FieldValue.arrayUnion({
        namePerson: userData.name,
        valueLance: valueLance,
      }),
    });
};

const gotToSetArrayLanceInProduct = (uidProduct) => {
  admin
    .firestore()
    .collection("products")
    .doc(uidProduct)
    .update({
      lance: admin.firestore.FieldValue.arrayUnion({
        namePerson: "Vitoria Martiz",
        valueLance: 1,
      }),
    });
};

const goToDecreaseBidAmountInUser = (uidUser, value, userData) => {
  const newValue = userData.cupons - value;

  if (newValue > 0) {
    admin.firestore().collection("usersWebSite").doc(uidUser).update({
      cupons: newValue,
    });
  }
};

const goToFreeProduct = (uidProduct, productData, value) => {
  const newValue = productData.currentValueLance + value;
  const valueFreeProduct = productData.valueFree;
  const currentValueLance = productData.currentValueLance;
  const botWinner = productData.botWin;

  admin.firestore().collection("products").doc(uidProduct).update({
    currentValueLance: newValue,
  });

  if (currentValueLance >= valueFreeProduct) {
    return console.log("Você ganhou o premio");
    /* Rergra de ganhador na tabela  */
    /* Regra do bot se vai ou não ter um ganhador */
  } else {
    return console.log("Não ganhou tente novamente");
  }
};

/* FINAL NÃO MEXER NAS FUNçÕES ACIMA */

actionAuctionUser = async (req, res) => {
  /* Importante pegar o Usuário que está dando o lance e o Produto que está relacionado ao lance */

  const { userUID, productUID, valueLance } = req.body;

  try {
    // const userData = await getOneUserByUID(uidUser);

    // Peguei o Dado do produto
    const productData = await getOneProductById(productUID);

    const userData = await getOneUserByUID(userUID);

    console.log("------------------------------------------");
    console.log("Dados do usuário Na função Principal");
    console.log(userData);
    console.log("------------------------------------------");
    console.log("Dados do Produto Na função Principal");
    console.log(productData);
    console.log("------------------------------------------");

    if (productData.lance) {
      ///Verificação dupla, a tabela de usuário demanda mais tempo para dar o retorno, coisa de 2.3 segundos a média. Por isso não é assync

      if (userData) {
        goToSetNewLanceInProduct(productUID, userData, valueLance);
        goToDecreaseBidAmountInUser(userUID, valueLance, userData);

        goToFreeProduct(productUID, productData, valueLance);
      }
    } else {
      gotToSetArrayLanceInProduct(userUID, valueLance);
      goToSetNewLanceInProduct(productUID, userData, valueLance);
      goToFreeProduct(productData);

      goToFreeProduct(productUID, productData, valueLance);
    }
    // Jsons armazenados

    // Verificar se o usuário tem cupom suficiente para lance
    //console.log(userData);

    //AddActionAuctionInDocumentProduct(userData, uidProduct);

    return res.status(200).end();
  } catch (error) {
    console.error("Erro na ação de leilão: ", error);
    return res.status(500).end();
  }
};

getAllActionBidsInOneProduct = async (req, res) => {
  const { id } = req.params;
  const productColletion = db.collection("products");
  productColletion
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        return res.json(documentData);
      } else {
        console.log("Documento não encontrado");
      }
    })
    .catch((error) => {
      console.error("Erro ao obter o documento: ", error);
    });
};

module.exports = {
  actionAuctionUser,
  getAllActionBidsInOneProduct,
};
