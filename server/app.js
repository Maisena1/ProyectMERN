const express = require(`express`);
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// importar rutas
const authRoutes = require("./routers/auth");
// Configurar Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Configure static dolter
app.use(express.static("uploads"));
// Configurar Header HTTP - CORDS
app.use(cors());
// Configurar rutas
app.use("/api/v1", authRoutes);
module.exports = app;
