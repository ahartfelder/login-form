const express = require("express");
const router = express.Router();
const { loginControllers } = require("../controllers/index");

router.get("/login", (req, res) => {
  res.render("pages/login", { title: "Login" });
});

router.post("/login", loginControllers.login);

router.get("/register", (req, res) => {
  res.send("Register Page");
});

router.post("/register", loginControllers.register);

module.exports = router;
