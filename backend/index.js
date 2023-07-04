const dbConnect = require("./config/mysql");

const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  dbConnect.query("select * from attendances", (err, result) => {
    if (err) {
      console.log(err, "error");
    } else {
      console.log("result", result);
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  dbConnect.query(
    "INsert INTO attendances SET ?",
    data,
    (error, result, fields) => {
      if (error) {
        console.log(error, "error");
      } else {
        res.send(result);
      }
      //   res.send("result", result);
    }
  );
});

app.listen(5500);
