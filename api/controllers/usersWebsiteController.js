const admin = require("../../config/firebase-config");

createNewUser = (req, res) => {
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

editUser = (req, res) => {
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

deleteUser = (req, res) => {
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

module.exports = {
  createNewUser,
  editUser,
  deleteUser,
};
