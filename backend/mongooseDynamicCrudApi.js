const { dbConnect } = require("./config/dbnew");
const express = require("express");
const product = require("./mongoose/product");

dbConnect();
const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
  let data = new product(req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await product.find();
  res.send(data);
});

app.delete("/remove/:_id", async (req, res) => {
  const result = await product.deleteOne(req.params);
  res.send(result);
});

app.put("/update/:_id", async (req, res) => {
  const result = await product.updateOne(req.params, {
    $set: req.body,
  });
  console.log("🚀 ~ file: index.js:28 ~ app.put ~ result:", result);
  res.send(result);
});

app.listen(5100);
