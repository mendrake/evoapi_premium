const { Hercai } = require("hercai");
const translate = require("translate-google");

async function traduzir(texto) {
  translate.engine = "google";
  let text = await translate(texto, { to: "pt" });
  return text;
}
const client = new Hercai();

const express = require("express");

// config express
const app = express.Router();

app.get("/", async (req, res) => {
  var msg = req.query.msg;
  if (!msg)
    return res.status(400).json({ error: "Parâmetro msg não fornecido" });

  /* Available Models "v2","beta" | Default Model; "v2" */
  client.question({ model: "v2", content: msg }).then((response) => {
    traduzir(response.reply).then((traduzido) =>
      res.status(200).json({ texto: traduzido, dev: "bruno" })
    );
  });
});

module.exports = app;
