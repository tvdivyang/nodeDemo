const { dbConnect, closeConnection } = require("./config/db");

const deletes = async () => {
  try {
    const db = await dbConnect();
    const collection = await db.collection("product");
    const result = await collection.deleteMany({
      Name: "burger",
    });
    console.log("🚀 ~ file: delete.js:9 ~ deletes ~ result:", result);
  } catch (erroe) {
    console.log("erroe:", erroe);
  } finally {
    closeConnection();
  }
};

deletes();
