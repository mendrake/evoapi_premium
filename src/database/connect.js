const mongoose = require("mongoose");

async function ConnectToMongo() {
  await mongoose
    .connect(
      `mongodb+srv://Caussz:UulEWMiHjbShRHkD@cluster0.6rewenu.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Banco de dados conectado");
    })
    .catch((err) => console.log(err));
}

module.exports = { ConnectToMongo };
