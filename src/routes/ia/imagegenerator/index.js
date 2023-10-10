const { Hercai } = require("hercai");

const express = require("express");

// config express
const app = express.Router();
const path = require("path");
const download = require("../../../functions");

app.get("/", async (req, res) => {
  var text = req.query.text;
  if (!text)
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  /* Importing The Package */
  const client = new Hercai();
  /* Available Models "v1" , "v2" , "v2-beta" | Default Model; "v2" */
  client.drawImage({ model: "prodia", prompt: text }).then((response) => {
    console.log(response.url);
    download(response.url, "./lol.jpg", function () {
      res.sendFile(path.resolve("./lol.jpg"));
    });
    /* The module will reply based on the prompt! */
  });
});

module.exports = app;
