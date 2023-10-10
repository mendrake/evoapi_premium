// Modulos
const express = require("express");
const listEndpoints = require("express-list-endpoints");
const bodyParser = require("body-parser");
const cors = require("cors");

// Banco de dados e plugins
const { ConnectToMongo } = require("./database/connect");

// Config express
const app = express();
const port = process.env.PORT || 1051;

// Import das rotas
const UserRouters = require("./routes/userRouter");
const DownRotes = require("./routes/downloads");
const cards = require("./routes/cards");

const searchRotes = require("./routes/search");
const stalkRotes = require("./routes/stalks");
const textProRotes = require("./routes/textPro");
const worksRotes = require("./routes/works");
const funRoutes = require("./routes/fun");
const wallpaperRoutes = require("./routes/wallpaper");
const eP = require("./routes/ephoto");
const oxy = require("./routes/photooxy");
const nsfw = require("./routes/nsfw");
const canvas = require("./routes/canvas");
const imgmaker = require("./routes/imgmaker");
const ia = require("./routes/ia");

// Middlewares e configuracoes
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use("/download", DownRotes);
app.use("/search", searchRotes);
app.use("/stalk", stalkRotes);
app.use("/logos", textProRotes, eP, oxy);
app.use("/work", worksRotes);
app.use("/fun", funRoutes);
app.use("/wallpaper", wallpaperRoutes);
app.use("/nsfw", nsfw);
app.use("/canvas", canvas);
app.use("/imgmaker", imgmaker);
app.use("/ia", ia);
app.use("/user", UserRouters);
app.use("/cards", cards);
// Rota publica
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Servidor online" });
});

// Rota para exibir todas as rotas
app.get("/rotas", (req, res) => {
  const routes = listEndpoints(app);
  res.status(200).json(routes);
});

// Rota para lidar com erros de rota não encontrada (404)
app.use((req, res, next) => {
  res.status(404).send("Rota não encontrada");
});

// Rota para lidar com erros internos do servidor (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erro interno do servidor");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});

ConnectToMongo();

module.exports = app;
