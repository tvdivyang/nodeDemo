// mongodb packge useing

const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const database = "Crud-api";
const client = new MongoClient(url);

const dbConnect = async () => {
  try {
    await client.connect();
    return client.db(database);
    // const db = client.db(database);
    // return db.collection("product");
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw error;
  }
};
const closeConnection = () => {
  client.close(); // Close the MongoDB client connection
};

module.exports = { dbConnect, closeConnection };
