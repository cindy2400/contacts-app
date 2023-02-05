const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_contacts_app",
});

const app = express();
connection.connect();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/contacts", (req, res) => {
  const sqlQuery = "SELECT * FROM contacts";
  connection.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/contacts", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const tel = req.body.telephone;

  const sqlQuery =
    "INSERT INTO contacts (name, email, telephone) VALUES (?,?,?)";
  connection.query(sqlQuery, [name, email, tel], (err, result) => {
    res.send(result);
  });
});

app.delete("/contact/:id", (req, res) => {
  const id = req.params.id;

  const sqlQuery = "DELETE FROM contacts WHERE id = ?";
  connection.query(sqlQuery, [id], (err, result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`running on server ${port}`);
});
