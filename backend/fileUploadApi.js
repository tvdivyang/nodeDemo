const { dbConnect } = require("./config/dbnew");
const product = require("./mongoose/product");
const express = require("express");
const multer = require("multer");

dbConnect();

const app = express();
app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cd) {
      cd(null, "uploads");
    },
    filename: function (req, file, cd) {
      cd(null, file.fieldname + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("file upload");
});

app.listen(5100);
