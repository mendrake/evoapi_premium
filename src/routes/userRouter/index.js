const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../../database/models/User");
const authenticateToken = require("../../plugins/autenticate");
const app = express.Router();
const sendMail = require("../../plugins/email");
const secretKey = "UIYWRGYUI247895249DFGHJGJI0KGI35009";

// Rota para cadastro de usuário
app.post("/signup", async (req, res) => {
  try {
    const { nome, email, senha, apikey } = req.body;

    if (!nome || !email || !senha || !apikey) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }
    // Verifica se o email já existe
    const existingUser = await Usuario.findOne({ email });
    if (existingUser) {
      return res.status(409).send("Este email já está em uso.");
    }

    // Hash da senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = new Usuario({
      nome,
      email,
      senha: hashedPassword,
      apikey,
    });
    await newUser.save();
    await sendMail(newUser.email, newUser.name);
    res.status(201).send("Usuário cadastrado com sucesso.");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor.");
  }
});

// Rota para login de usuário
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const user = await Usuario.findOne({ email });

  if (!user) {
    return res.status(401).send("Credenciais inválidas.");
  }

  const isPasswordValid = await bcrypt.compare(senha, user.senha);
  if (!isPasswordValid) {
    return res.status(401).send("Credenciais inválidas.");
  }

  // Gera um token JWT
  const token = jwt.sign({ email: user.email }, secretKey);
  res.json({ token, user });
});

// Rota privada para obter informações do usuário
app.get("/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Usuario.findById(id, "-password");

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Rota para atualizar informações do usuário
app.put("/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;
  const { nome, email, apikey, numeroTelefone } = req.body;

  try {
    const updatedUser = await Usuario.findByIdAndUpdate(
      id,
      { nome, email, apikey, numeroTelefone },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Rota para excluir um usuário
app.delete("/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await Usuario.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    res.status(200).json({ msg: "Usuário excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Rota para tornar um usuário premium
app.put("/premium/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Usuario.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    user.premium = true;
    await user.save();

    res.status(200).json({ msg: "Usuário definido como premium com sucesso." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Rota para tornar um usuário administrador
app.put("/admin/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Usuario.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    user.admin = true;
    await user.save();

    res
      .status(200)
      .json({ msg: "Usuário definido como administrador com sucesso." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
module.exports = app;
