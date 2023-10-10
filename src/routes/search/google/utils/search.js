const googleIt = require("google-it");

async function pesquisa(text) {
  return await googleIt({ query: text });
}

module.exports = pesquisa;
