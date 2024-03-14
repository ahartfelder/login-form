const express = require("express");
const router = express.Router();

// Rota: GET /
router.get("/", (req, res) => {
  res.render("pages/home", { title: "Home Page" });
});

module.exports = router;
