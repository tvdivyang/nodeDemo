const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Crud-api");
const productSchema = new mongoose.Schema({
  Name: String,
  price: Number,
  qty: Number,
});
const saveInDB = async () => {
  const productsModel = mongoose.model("product", productSchema);
  let data = new productsModel({ Name: "samsung s23", price: 111, qty: 2 });
  let result = await data.save();
  console.log("🚀 ~ file: index.js:11 ~ main ~ result:", result);
};

const updateInDB = async () => {
  const products = mongoose.model("product", productSchema);
  let data = await products.updateOne(
    {
      Name: "samsung s23",
    },
    { $set: { price: 552 } }
  );
  console.log("🚀 ~ file: index.js:21 ~ updateInDB ~ data:", data);
};

const deleteInDB = async () => {
  const products = mongoose.model("product", productSchema);
  let data = await products.deleteOne({
    Name: "samsung s23",
  });
  console.log("🚀 ~ file: index.js:21 ~ updateInDB ~ data:", data);
};

const findInDB = async () => {
  const products = mongoose.model("product", productSchema);
  let data = await products.find();
  console.log("🚀 ~ file: index.js:21 ~ updateInDB ~ data:", data);
};

// main();
// updateInDB();
// deleteInDB();
findInDB();
