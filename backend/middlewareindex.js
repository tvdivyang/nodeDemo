const express = require("express");
const reqFilter = require("./middleware");
const route = express.Router();
const app = express();
route.use(reqFilter);
// app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/users", (req, res) => {
  res.send("users page");
});

route.get("/about", (req, res) => {
  res.send("about page");
});

app.use("/", route);

app.listen(5100);
