const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 1998;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

const whitelist = [
  "http://localhost:9000",
  "http://192.168.18.7:9000",
  "http://localhost:3000",
  "http://192.168.18.7:3000",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

/* BackOffice Routes */

const usersBackOffice = require("./api/routes/panelAdmin/usersBackoffice");
const productsBackOffice = require("./api/routes/panelAdmin/productsBackoffice");
const packagesBackofficeRouters = require("./api/routes/panelAdmin/packagesBackofficeRouters");
app.use(usersBackOffice);
app.use(productsBackOffice);
app.use(packagesBackofficeRouters);

/* Web site Routes */

const usersRouters = require("./api/routes/webSite/usersRouters");
app.use(usersRouters);
app.get("/", (req, res) => {
  res.send("Olá, Hórus!");
});

app.get("/horus", (req, res) => {
  res.send("Hey Hórus, Go to Jokes hehehe");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
