const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numeroTelefone: { type: String },
  senha: { type: String, required: true },
  apikey: { type: String, required: true },
  premium: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
});

const Usuario = mongoose.model("User", usuarioSchema);

module.exports = Usuario;
