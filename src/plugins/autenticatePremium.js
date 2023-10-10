const jwt = require("jsonwebtoken");
const Usuario = require("../database/models/User");
const secretKey = "UIYWRGYUI247895249DFGHJGJI0KGI35009";

function authenticateTokenAndPremium(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send("Token de autenticação não fornecido.");
  }

  jwt.verify(token, secretKey, async (err, user) => {
    if (err) {
      return res.status(403).send("Token inválido.");
    }

    try {
      const actualUser = await Usuario.findOne({ email: user.email });

      if (!actualUser || !actualUser.premium) {
        return res
          .status(403)
          .send(
            "Apenas usuários premium têm permissão para acessar esta rota."
          );
      }

      req.user = user; // Atribui o usuário autenticado à req para uso posterior
      next(); // Chama a próxima função/middleware
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro no servidor.");
    }
  });
}

module.exports = authenticateTokenAndPremium;
