const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");

router.use("/", homeController);
router.use("/login", loginController);

module.exports = router;
