const express = require("express");
const { dbConnect } = require("./config/db");
const mongodb = require("mongodb");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const db = await dbConnect();
  let data = await db.collection("product");
  data = await data.find().toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  const db = await dbConnect();
  let data = await db.collection("product");
  let result = await data.insertOne(req.body);
  res.send(result);
});

app.put("/:Name", async (req, res) => {
  const db = await dbConnect();
  const collection = await db.collection("product");
  let result = await collection.updateOne(
    { Name: req.params.Name },
    { $set: req.body }
  );
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  const db = await dbConnect();
  const collection = await db.collection("product");
  const result = await collection.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5100);
