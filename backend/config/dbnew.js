const mongoose = require("mongoose");

const dbConnect = async () => {
  const db = await mongoose.connect("mongodb://0.0.0.0:27017/Crud-api");
};

module.exports = { dbConnect };
