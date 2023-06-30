const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.send(`<h1>hello,This is home page</h1>`);
});
app.get("/profile", (req, res) => {
  const user = {
    name: "divyang",
    email: "dalsaniyadivyang121@gmail.com",
    age: 25,
    skills: ["php", "c++", "node", "react js"],
  };

  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/about", (req, res) => {
  console.log(req.query.name);
  res.send(`<input type="text" placeholder="Enter Your Name" />`);
});
app.get("/help", (req, res) => {
  res.send("hello,This is help page");
});

app.get("*", (req, res) => {
  res.send("Page not found 404 ");
});
app.listen(4100);
