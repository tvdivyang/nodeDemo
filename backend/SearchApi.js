const { dbConnect } = require("./config/dbnew");
const express = require("express");
const product = require("./mongoose/product");

dbConnect();
const app = express();
app.use(express.json());

app.get("/search/:Name", async (req, res) => {
  const data = await product.find({
    $or: [{ Name: { $regex: req.params.Name } }],
  });
  res.send(data);
});

app.listen(5100);
