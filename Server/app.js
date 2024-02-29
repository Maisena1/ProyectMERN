require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const apiVersion = process.env.API_VERSION;
const app = express();
// configurar Header HTTP
app.use(cors());
// importar rutas
const authRouters = require("./router/auth");
// config body parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configure static folders
app.use(express.static("uploads"));
// configurar rutas
app.use(`/api/${apiVersion}`, authRouters);

module.exports = app;
