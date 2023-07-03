const { dbConnect, closeConnection } = require("./config/db");

const insert = async () => {
  try {
    const db = await dbConnect();
    const collection = db.collection("product");
    const result = await collection.insertMany([
      {
        Name: "pizza",
        Price: 999,
        qty: 2,
        __v: 0,
      },
      {
        Name: "dosa",
        Price: 99,
        qty: 1,
        __v: 0,
      },
      {
        Name: "burger",
        Price: 125,
        qty: 2,
        __v: 0,
      },
    ]);
    console.log("Document inserted:", result);
  } catch (error) {
    console.error("Failed to insert document", error);
  } finally {
    // Close the MongoDB client connection
    closeConnection();
  }
};

insert();
