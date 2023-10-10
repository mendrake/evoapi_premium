const axios = require("axios");
// Modulos
const express = require("express");

// config express
const app = express.Router();

// import das api

// rotas
app.get("/", async (req, res) => {
  axios
    .get(
      `http://teles-jokes.azurewebsites.net/api/GetJoke?code=7skvGJHPnh6jOiZhwNKV0dL0awj9qTorLElJq596sKVHmrmgFJ6u4w==`
    )
    .then((response) => {
      res.status(200).json(response.data);
    });
});

module.exports = app;
