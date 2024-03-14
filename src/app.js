const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("src/views"));
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static(path.resolve("public")));

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/login", (req, res) => {
  res.render("pages/login", { title: "Login Page" });
});

app.listen(PORT, () => console.log("Running server on port %s", PORT));
