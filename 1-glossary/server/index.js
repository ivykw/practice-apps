require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require('./db.js');

const app = express();

const url = '/glossary';
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// handle POST request from client, sends back updated list
app.post(url, (req, res) => {
  mongoose.add(req.body, (err, data) => {
    if (err) {
      console.log('Error receiving data from db');
    }
    res.end(JSON.stringify(data));
  })
})
// handle UPDATE ('PUT') request from client, sends back updated list
app.put(url, (req, res) => {
  console.log(req.body)
  mongoose.update(req.body, (err, data) => {
    if (err) {
      console.log('Error updating');
    }
    res.end(JSON.stringify(data));
  })
})
// handle DELETE request from client, sends back updated list
app.delete(url, (req, res) => {
  console.log(req.body);
  mongoose.remove(req.body, (err, data) => {
    if (err) {
      console.log('Error deleting entry');
    }
    res.end(JSON.stringify(data));
  })
})
// handle GET
app.get('/glossary/:term', (req, res) => {
  console.log('what server is receiving for search', req.params)
  mongoose.find(req.params, (err, data) => {
    if (err) {
      console.log('Error getting entry');
    }
    res.end(JSON.stringify(data));
  })
})
// get all
app.get(url, (req, res) => {
  mongoose.find({}, (err, data) => {
    if (err) {
      console.log('Error getting entry');
    }
    res.end(JSON.stringify(data));
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
