const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .catch((err) => console.log(err));

db.insert = function(data) {
  connection.connect((err) => {
    if (err) {
      console.log('Error connecting to DB to insert');
    }
    let insert = `INSERT INTO info VALUES ('${data.session_id}', '${data.name}', '${data.email}', '${data.password}', '${data.address1}', '${data.address2}', '${data.city}', '${data.state}', '${data.zip}', '${data.phone}', '${data.card_num}', '${data.card_expiry}', '${data.cvv}', '${data.bill_zip}')`;
    connection.query(insert, (err) => {
      if (err) {
        console.log(err);
      }
    });
  })
}

db.search = function(session, callback) {
  connection.connect((err) => {
    if (err) {
      console.log('Error connecting to DB to pull info');
    }
    let search = `SELECT * FROM info WHERE session_id = ${session}`;
    connection.query(search, (err, data) => {
      if (err) {
        console.log('Error finding info by session');
      }
      callback(data);
    })
  })
}

module.exports = db;
