const admin = require("../../config/firebase-config");

const getDateHoursSaoPaulo = () => {
  const dataAtual = new Date();
  const fusoHorarioSaoPaulo = -3 * 60;
  const offsetSaoPaulo = dataAtual.getTimezoneOffset();
  dataAtual.setMinutes(
    dataAtual.getMinutes() - (offsetSaoPaulo - fusoHorarioSaoPaulo)
  );
  return dataAtual;
};

createNewAdminUser = (req, res) => {
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
      const docRef = db.collection("usersBackOffice").doc();
      docRef
        .set({
          uid: docRef.id,
          photoURL: userRecord.photoURL || null,
          email: userRecord.email,
          name: name || "",
          typeProfile: 1,
          dataCreated: dateCurrentily,
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

getAllAdminUsers = (req, res) => {
  const db = admin.firestore();
  const usersCollection = db.collection("usersBackOffice");
  const responseData = [];

  usersCollection
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

editAdminUser = (req, res) => {
  const db = admin.firestore();
  const { customer } = req.body;
  const { subscription } = req.body;

  if (subscription.status_event === "approved") {
    admin
      .auth()
      .createUser({
        email: customer.email,
        password: customer.password,
      })
      .then(function (userRecord) {
        const docRef = db.collection("usersBackOffice").doc();

        docRef
          .set({
            uid: docRef.id,
            photoURL: userRecord.photoURL || null,
            email: userRecord.email,
            name: customer.full_name || "",
            typeProfile: 1,
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
  } else {
    console.log(
      "evento diferente não cria usuário no sistema e está tudo bem!"
    );
  }
  return true;
};

deleteAdminUser = (req, res) => {
  const db = admin.firestore();
  const { customer } = req.body;
  const { subscription } = req.body;

  if (subscription.status_event === "approved") {
    admin
      .auth()
      .createUser({
        email: customer.email,
        password: customer.password,
      })
      .then(function (userRecord) {
        const docRef = db.collection("usersBackOffice").doc();

        docRef
          .set({
            uid: docRef.id,
            photoURL: userRecord.photoURL || null,
            email: userRecord.email,
            name: customer.full_name || "",
            typeProfile: 1,
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
  } else {
    console.log(
      "evento diferente não cria usuário no sistema e está tudo bem!"
    );
  }
  return true;
};

createNewEditorUser = (req, res) => {
  const db = admin.firestore();
  const { customer } = req.body;
  const { subscription } = req.body;

  if (subscription.status_event === "approved") {
    admin
      .auth()
      .createUser({
        email: customer.email,
        password: customer.password,
      })
      .then(function (userRecord) {
        const docRef = db.collection("usersBackOffice").doc();

        docRef
          .set({
            uid: docRef.id, // Usando o ID do documento como UID
            photoURL: userRecord.photoURL || null,
            email: userRecord.email,
            name: customer.full_name || "",
            typeProfile: 2,
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
  } else {
    console.log(
      "evento diferente não cria usuário no sistema e está tudo bem!"
    );
  }
  return true;
};
editEditorUser = (req, res) => {
  const db = admin.firestore();
  const { customer } = req.body;
  const { subscription } = req.body;

  if (subscription.status_event === "approved") {
    admin
      .auth()
      .createUser({
        email: customer.email,
        password: customer.password,
      })
      .then(function (userRecord) {
        const docRef = db.collection("usersBackOffice").doc();

        docRef
          .set({
            uid: docRef.id, // Usando o ID do documento como UID
            photoURL: userRecord.photoURL || null,
            email: userRecord.email,
            name: customer.full_name || "",
            typeProfile: 2,
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
  } else {
    console.log(
      "evento diferente não cria usuário no sistema e está tudo bem!"
    );
  }
  return true;
};

deleteEditorUser = (req, res) => {
  const db = admin.firestore();
  const { customer } = req.body;
  const { subscription } = req.body;

  if (subscription.status_event === "approved") {
    admin
      .auth()
      .createUser({
        email: customer.email,
        password: customer.password,
      })
      .then(function (userRecord) {
        const docRef = db.collection("usersBackOffice").doc();

        docRef
          .set({
            uid: docRef.id, // Usando o ID do documento como UID
            photoURL: userRecord.photoURL || null,
            email: userRecord.email,
            name: customer.full_name || "",
            typeProfile: 2,
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
  } else {
    console.log(
      "evento diferente não cria usuário no sistema e está tudo bem!"
    );
  }
  return true;
};

module.exports = {
  createNewAdminUser,
  getAllAdminUsers,
  editAdminUser,
  deleteAdminUser,
  createNewEditorUser,
  editEditorUser,
  deleteEditorUser,
};
