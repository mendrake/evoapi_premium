const jwt = require("jsonwebtoken");
const Usuario = require("../database/models/User");
const secretKey = "UIYWRGYUI247895249DFGHJGJI0KGI35009";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado!" });
  }

  try {
    const secret = secretKey;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token inválido!", error: err.message });
  }
}

module.exports = authenticateToken;
