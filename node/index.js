const express = require("express");
const mysql2 = require("mysql2");

const app = express();

app.use(express.json());

const connection = mysql2.createConnection({
  host: "mysql",
  user: "root",
  database: "fullcycle",
  password: "admin",
  port: 3306,
});

app.get("/", (request, response) => {
  connection.connect((error) => {
    if (error) {
      throw error;
    }

    connection.query("SELECT * FROM people", (error, rows) => {
      if (error) {
        throw error;
      }

      return response.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>${rows.map((row) => `<li>${row.name}</li>`).join("")}</ul>
      `);
    });
  });
});

connection.connect((error) => {
  if (error) {
    throw error;
  }

  connection.query('CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(ID))', (error) => {
    if (error) {
      throw error
    }

    console.log("Database created successfully")

    connection.query(
      'INSERT INTO people(name) VALUES("Gabriel Ramos")',
      (error) => {
        if (error) {
          throw error;
        }
  
        console.log("1 record inserted");
      }
    );
  })
});

app.listen(3333, () => console.log("Server is running!"));
