const googleIt = require("google-it");

function pesquisa(text) {
  let final = "Sem resultado";
  googleIt({ query: text })
    .then((r) => (final = r))
    .catch((e) => (final = e));
  return final;
}

pesquisa("Twitter o que e");
