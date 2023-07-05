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

app.put("/:id", (req, res) => {
  const data = [
    req.body.child_id,
    req.body.attendance_date,
    req.body.attendance_type,
    req.body.attendance_title,
    req.body.attendance_desc,
    req.params.id,
  ];
  dbConnect.query(
    "UPDATE attendances SET child_id = ?, attendance_date = ?,attendance_type = ?,attendance_title = ?,attendance_desc = ? where id = ?",
    data,
    (error, results, fileds) => {
      if (error) {
        console.log(error);
      }
      res.send(results);
    }
  );
});

app.delete("/:id", (req, res) => {
  dbConnect.query(
    "DELETE  FROM attendances WHERE id =" + req.params.id,
    (error, result, fileds) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});
app.listen(5100);
