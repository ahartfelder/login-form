const express = require("express");
const router = express.Router();

// Rota: GET /login
router.get("/", (req, res) => {
  res.render("pages/login", { title: "Login Page" });
});

// Rota: POST /login
router.post("/", (req, res) => {
  console.log(req.body);
  // Lógica de autenticação...
});

module.exports = router;
