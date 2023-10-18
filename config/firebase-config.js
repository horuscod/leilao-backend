const admin = require("firebase-admin");
require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env

console.log(JSON.stringify(process.env.FIREBASE_PROJECT_ID))
console.log('VARIAVEEEEEELLLLL ___________________________')
console.log(process.env.FIREBASE_PROJECT_ID)

/* admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
    private_key_id: JSON.stringify(process.env.FIREBASE_API_KEY_ID),
    private_key: JSON.stringify(process.env.FIREBASE_API_KEY),
    client_email: JSON.stringify(process.env.FIREBASE_CLIENT_EMAIL),
    client_id: JSON.stringify(process.env.FIREBASE_CLIENT_ID),
    auth_uri: JSON.stringify(process.env.FIREBASE_AUTH_URI),
    token_uri: JSON.stringify(process.env.FIREBASE_TOKEN_URI),
    auth_provider_x509_cert_url: JSON.stringify(
      process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL
    ),
    client_x509_cert_url: JSON.stringify(
      process.env.FIREBASE_CLIENT_X509_CERT_URL
    ),
    universe_domain: JSON.stringify(process.env.FIREBASE_UNIVERSE_DOMAIN),
  }),
}); */

module.exports = admin;
