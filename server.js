const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let status = "offline";

app.use(express.static("public"));
app.use(express.json());

app.post("/start", (req, res) => {
  status = "online";
  console.log("Servidor iniciado.");
  res.json({ message: "Servidor iniciado com sucesso!" });
});

app.get("/status", (req, res) => {
  res.json({ status });
});

app.listen(PORT, () => {
  console.log(`Eternal rodando na porta ${PORT}`);
});
