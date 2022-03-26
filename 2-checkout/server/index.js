require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());
// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// handle POST request for all info
app.post('/checkout', (req, res) => {
  // db.insert(req.session_id, req.body);
  console.log(req.body)
  res.end();
})
// handle GET request for all info
app.get('/checkout', (req, res) => {
  db.search(req.session_id, (data) => {
    let response = data[0];
    delete response.session_id;
    console.log(response);
    res.end(response);
  });
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
