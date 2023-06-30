const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const database = "neobox-desktop";
const client = new MongoClient(url);

const getdata = async () => {
  const result = await client.connect();
  const db = result.db(database);
  const collection = db.collection("users");
  const response = await collection.find({}).toArray();
  console.log(response, "res");
};

getdata();
