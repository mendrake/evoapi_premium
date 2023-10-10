const translate = require("translate-google");

async function traduzir(texto, idioma) {
  translate.engine = "google";
  let text = await translate(texto, { to: idioma });
  return text;
}

module.exports = traduzir;
