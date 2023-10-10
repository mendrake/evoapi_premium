// Modulos
const express = require("express");

// config express
const app = express.Router();

// import das api
const gitstalk = require("./utils/ghstalk");

// rotas
app.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ error: "Parâmetro text não fornecido" });
  }
  gitstalk(text).then((perfil) => {
    res.status(200).json({
      author: perfil.author,
      id: perfil.id,
      node_id: perfil.node_id,
      avatar_url: perfil.avatar_url,
      gravatar_id: perfil.gravatar_id,
      url: perfil.html_url,
      followers: perfil.followers,
      following: perfil.following,
      type: perfil.type,
      site_admin: perfil.site_admin,
      name: perfil.name,
      company: perfil.company,
      blog: perfil.blog,
      location: perfil.location,
      email: perfil.email,
      bio: perfil.bio,
      public_repos: perfil.public_repos,
      public_gists: perfil.public_gists,
      twitter_username: perfil.twitter_username,
      created_at: perfil.created_at,
      updated_at: perfil.updated_at,
    });
  });
});

module.exports = app;
