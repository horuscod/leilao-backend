const admin = require("../../../config/firebase-config");
const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const getDateHoursSaoPaulo = () => {
  const dataAtual = new Date();
  const fusoHorarioSaoPaulo = -3 * 60;
  const offsetSaoPaulo = dataAtual.getTimezoneOffset();
  dataAtual.setMinutes(
    dataAtual.getMinutes() - (offsetSaoPaulo - fusoHorarioSaoPaulo)
  );
  return dataAtual;
};

createUserLoginPage = (req, res) => {
  const db = admin.firestore();
  const { name, email, password } = req.body;
  var dateCurrentily = getDateHoursSaoPaulo();
  admin
    .auth()
    .createUser({
      email: email,
      password: password,
    })
    .then(function (userRecord) {
      const docRef = db.collection("usersWebSite").doc();
      docRef
        .set({
          uid: docRef.id,
          uidAuth: userRecord.uid,
          photoURL: userRecord.photoURL || null,
          email: userRecord.email,
          name: name || "",
          typeProfile: 0,
          dataCreated: dateCurrentily,
          cupons: 0,
        })
        .then(() => {
          console.log("Document created with ID:", docRef.id);
          return res.status(201).end();
        })
        .catch((error) => {
          console.error("Error creating document:", error);
        });
      console.log("Successfully created new user:", userRecord);
      return res.status(201).end();
    })
    .catch(function (error) {
      console.log("Error creating new user:", error);
    });
};

/* Para realizar o Login de autenticação as credenciais são WEB, devemos otimizar o código e separar os arquivos de configuração */
const firebaseConfigWeb = {
  apiKey: "AIzaSyDiimRwf0ay6Ad0rP6cVx_hgr25Ub8a7-E",
  authDomain: "projeto-leilao-69276.firebaseapp.com",
  projectId: "projeto-leilao-69276",
  storageBucket: "projeto-leilao-69276.appspot.com",
  messagingSenderId: "750312648265",
  appId: "1:750312648265:web:c450be21d227b49f069998",
  measurementId: "G-FZLJN2LL33",
};
userLogin = (req, res) => {
  const app = initializeApp(firebaseConfigWeb);
  const auth = getAuth(app);
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`User ${user.email} is authenticated`);
      res.json(user);
      res.status(200).end();
    })
    .catch((error) => {
      console.error("Authentication failed:", error);
      res.status(401).end();
    });
};

getOneUserByUID = (req, res) => {
  const { userUID } = req.body;
  const db = admin.firestore();
  const usersCollection = db.collection("usersWebSite");
  const responseData = [];

  usersCollection
    .where("uidAuth", "==", userUID)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var document = doc.data();
        responseData.push(document);
      });
      res.json(responseData);

      return res.status(200).end();
    })
    .catch((error) => {
      console.error("Erro ao obter documentos: ", error);
      res.status(500).json({ error: "Erro ao obter documentos" });
    });
};

module.exports = { createUserLoginPage, userLogin, getOneUserByUID };
