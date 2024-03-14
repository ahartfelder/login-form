const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");

router.get("/", (req, res) => {
  res.render("pages/home", { title: "Home Page" });
});
router.use("/auth", authRoutes);

module.exports = router;
