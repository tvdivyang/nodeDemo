const mysql = require("mysql");

const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alagarderie",
});

dbConnect.connect((error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("connect");
  }
});

module.exports = dbConnect;
