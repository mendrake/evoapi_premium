const { Usuario } = require("../models/User");

async function verificar_apikey(apikey) {
  let db = await Usuario.findOne({ apikey: apikey });
  if (db === null) {
    return false;
  } else {
    return db.apikey;
  }
}

module.exports = { verificar_apikey };
