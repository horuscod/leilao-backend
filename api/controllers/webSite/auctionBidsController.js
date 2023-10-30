const admin = require("../../../config/firebase-config");
const db = admin.firestore();
const usersController = require("../../controllers/panelAdmin/usersController");

/* Função para não mexer até o momento */
const getOneUserByUID = (uid) => {
  //Essa função serve exclusivamente só para pegar os dados do usuário que está dando o Lance
  const usersCollection = db.collection("usersBackOffice");

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
/* FINAL NÃO MEXER NAS FUNçÕES ACIMA */

const goToCreatePropertyLanceInDocument = (UIDProduct) => {
  const productcColletion = db.collection("products");
  productcColletion
    .doc(UIDProduct)
    .set(
      {
        lance: [],
      },
      { merge: true }
    )
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};

const AddActionAuctionInDocumentProduct = (userJson, UIDProduct) => {
  /* Aqui vou ter que fazer um Update no documento Product */
  console.log("entrou aqui na função de buscar produto");
  console.log(userJson);

  admin
    .firestore()
    .collection("products")
    .doc(UIDProduct)
    .update({
      lance: [
        {
          namePerson: "nome do usuário",
          valueLance: "Valor do lance",
        },
        {
          namePerson: "Pesso2",
          valueLance: "Valor do lance",
        },
        {
          namePerson: "Pesso3",
          valueLance: "Valor do lance",
        },
      ],
    })
    .then(() => {
      return console.log("Documento atualizado com sucesso");
    })
    .catch((error) => {
      return console.error("Erro ao atualizar o documento:", error);
    });
};

actionAuctionUser = async (req, res) => {
  /* Importante pegar o Usuário que está dando o lance e o Produto que está relacionado ao lance */
  const uidProduct = "mJ52ZDzpeuTsVJDgWGMg";
  const uidUser = "2QlGW9iwqN8rBg8mg0QI";
  const valueLance = 1;

  try {
    // const userData = await getOneUserByUID(uidUser);

    // Peguei o Dado do produto
    const productData = await getOneProductById(uidProduct);

    const userData = await getOneUserByUID(uidUser);

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
        goToSetNewLanceInProduct(uidProduct, userData, valueLance);
      }
    } else {
      gotToSetArrayLanceInProduct(uidProduct);
      goToSetNewLanceInProduct(uidProduct, userData, valueLance);
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
