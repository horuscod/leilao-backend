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
  "http://localhost:3001/",
  "http://192.168.18.2:3001/",
];

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

/* BackOffice Routes */

const usersBackOffice = require("./api/routes/panelAdmin/usersBackoffice");
const productsBackOffice = require("./api/routes/panelAdmin/productsBackoffice");
const packagesBackofficeRouters = require("./api/routes/panelAdmin/packagesBackofficeRouters");
const championsBackofficeRouters = require("./api/routes/panelAdmin/championsBackofficeRouters");
app.use(usersBackOffice);
app.use(productsBackOffice);
app.use(packagesBackofficeRouters);
app.use(championsBackofficeRouters);

/* Web site Routes */

const usersRouters = require("./api/routes/webSite/usersRouters");
const auctionBidsRouters = require("./api/routes/webSite/auctionBidsRouters");
const productsOffertRoutres = require("./api/routes/webSite/productsOffertsRouters");
app.use(usersRouters);
app.use(auctionBidsRouters);
app.use(productsOffertRoutres);

const dataJson = {
  tipo: "Receita",
  CPF: "47305189855",
};

// Criar objeto FormData
const formData = new FormData();

// Adicionar cada chave e valor do objeto JSON ao FormData
Object.keys(dataJson).forEach((key) => {
  formData.append(key, dataJson[key]);
});


const headers = new Headers();
// Criar cabeçalhos
headers.append(
  "Accept",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
);
headers.append("Accept-Encoding", "gzip, deflate, br");
headers.append("Accept-Language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
headers.append("Cache-Control", "max-age=0");
headers.append("Content-Type", "application/x-www-form-urlencoded");
headers.append(
  "Cookie",
  "twk_uuid_6323fc5d54f06e12d89505a6=%7B%22uuid%22%3A%221.1hH9NqqX5DqvMJQLRF423wVTDkHAhVF9Ea024xmVp9zFuCNRWdhPLUxvvzS6xlsSggoFLlCPORapJUTZ7ic2J58P4Z5ifpvGn23xrWfLP4gkwntEIZE%22%2C%22version%22%3A3%2C%22domain%22%3A%22i-find.org%22%2C%22ts%22%3A1699394170499%7D; vsID=6141f058ea46b1835fdce5b62f54e115; tk=682dc80a-1b80-48ba-b21a-8008d4edbcd0"
);
headers.append("Origin", "https://i-find.org");
headers.append("Referer", "https://i-find.org/consultar/CPF");
headers.append(
  "Sec-Ch-Ua",
  '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"'
);
headers.append("Sec-Ch-Ua-Mobile", "?0");
headers.append("Sec-Ch-Ua-Platform", '"Windows"');
headers.append("Sec-Fetch-Dest", "document");
headers.append("Sec-Fetch-Mode", "navigate");
headers.append("Sec-Fetch-Site", "same-origin");
headers.append("Sec-Fetch-User", "?1");
headers.append("Upgrade-Insecure-Requests", "1");
headers.append(
  "User-Agent",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
);


app.get("/", (req, res) => {
  res.send("Olá, Hórus!");
});

app.get("/horus", (req, res) => {
  res.send("Hey Hórus, Go to Jokes hehehe");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
