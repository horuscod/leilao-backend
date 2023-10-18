const admin = require("firebase-admin");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "projeto-leilao-69276",
    private_key_id: "94ee8b2288e57b22295e42404a0fd8dd679a5c29",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDeG3s378TzOPhu\nSPsLq5/6R+lzrVhJsz+f5Zt+X4goc2TiYcEWt6FI4sCq+hzA39arj5mBP7PlI67k\nhWnMqIwwHun8UOYEI5MPgRQEFuaHwFuLblpOCqF8tYNcTlkOiuNRQ2PKItUrFydC\nzI4vCrxhdAu3IrWy3ENTuB2nUZqiZsLigYfaG0a4Yu56cscC+nXeUCEqkInkSRPw\nzbH6Tncymg1//t+by4sOhrno6oXtiK7sTKgOaw0n3pKIREsU6Ctrm4zQhJOhAski\nDH24RQTdQXvEccAisMpHb8ouAhyf8d9tRAhbGSG+xmQkhdjWvNGgVb1p0G2W51Lo\nztjI/VJXAgMBAAECggEAAwNvcApY6ziI0leQzw854UJBg21vfGHUs/2AVxNtEajD\nI858uVYDd62FPKyeYEAz4D8CBP68GO3w166MXsJN/fHQGI7GbXmda1aZKBcMHf0O\nS5LTNyouF7bkvIde7ki/Hcv4GiF6hUD6qjgumP/LH4KyDVQzZTpXetbNfDF/aML4\nArsVrk2RjAU/rpRfSdFUI/+CssFs1KpfLuh2MKAm+ULS9kO2sspTWeEOKeylPwVE\nNT6dqKWO70qyqciUGFr0xgvRBbq3zpXFE9CQjArVjaJ2BzIT6C7PwLvffrgyOomH\nGvAbSMymi2mgRD/KUg+SZSzDo7YfRiYOPdUR0AA8JQKBgQD9eaQKOCxP6kUwvrXh\n+DWRbk93u/iaC5qy0fLGpLH0X4/x4/cuioRoNUNzVfW5e8LH6DT1L2AhOKogyfJg\nNwY9gVOuvMazJlnpSMVju8aI4MXZoZce36XDuEQQ0yJ7rByryQDyjQMJOLh0dDCV\n8H5cHfJVI4p194fLx5/4wcHiiwKBgQDgUdpZY2KaaIrx2LSJDFGk9Iqofd19hSEC\n2GtfuI3MjedBJ//txHJtBcWXMdduQAJMNpNV/h9W++5BVPim/KyUtdrr+sSuJs7I\npcwDBMgdIP7TUttFrfBRBNd+ER0Qf5ZZLQGeHAhed7SuOaZV/gcMiwcW8mqJOiA4\nIW3vBvqE5QKBgQC0MM4Bic9OfE71iQ2Jd0a1fQK3LoRbFhbCOmfo+NmczHZq0dE9\nX7Ei14J8skX9ttJQBG3pQuWGmF6w8n8AEP25qX9Qv9hNMN1H7riL3sgTNB7SSIJC\nq2CO0yZoA4AHBOJY6Ipo4v+ehZjzCEolvRJG7+7+wUZD+FSr89xwHWV0YwKBgFBQ\n3lYNAJv6fG01Qwai04S1TgQf9LLhfL1REbjXEmZAFKG+maLfKH0iiOmmndTKtEfn\nbn9mmoABegAIVXMsmvov1q+RPOSB3p32xwH5r1DGpJazXvEm4xmPGzz3Ean7lLBf\nLeoXbWOthpKu74BwkMOL78DmkQCLQEf4qCziGcaFAoGAO3kt9wbUKRYS2lpxZNGT\nJ2hrHA6jkKAtDbuiStKgv5+5XfJRTChUVrR5TdpXYra5NE/L2E90OTH1qox2l9NP\n9x6Rj226y2mlD+zq/ZATIo9bZiEjkz4pcgfRoWWp10SNTOk9QTIirfc5gPy5gDh8\n+wIHM++/VfONU7GGIn8Emeg=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-pu8gb@projeto-leilao-69276.iam.gserviceaccount.com",
    client_id: "117175588381918439772",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pu8gb%40projeto-leilao-69276.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

module.exports = admin;
