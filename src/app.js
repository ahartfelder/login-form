const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static(path.resolve("public")));

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  if (req.method === "POST") console.log(req.body);
  next();
});

app.use("/", routes);

app.listen(PORT, () => console.log("Running server on port %s", PORT));
