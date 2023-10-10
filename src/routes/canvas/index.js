// Modulos
const express = require("express");
// config express
const app = express.Router();

// import das rotas
const efects = require("./efects/efect");
//const photoEdit = require("./photoEdit/photo");
app.use("/efects", efects);
//app.use("/photoedit", photoEdit);

// rotas
app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Rota para as apis Ephoto360" });
});

module.exports = app;
