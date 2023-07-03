const { dbConnect, closeConnection } = require("./config/db");

const update = async () => {
  try {
    const db = await dbConnect();
    let collection = await db.collection("product");
    let result = await collection.updateOne(
      {
        Name: "large pizza",
      },
      { $set: { Name: "i phone max" } }
    );
    console.log("🚀 ~ file: update.js:13 ~ update ~ result:", result);
  } catch (error) {
    console.log("error:", error);
  } finally {
    // Close the MongoDB client connection
    closeConnection();
  }
};

update();
