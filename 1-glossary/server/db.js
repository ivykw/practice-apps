const mongoose = require("mongoose");
require("dotenv").config();
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

// create connection
var dbName = process.env.DB_NAME;
mongoose.connect(`mongodb://localhost/${dbName}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true});

// create schema
const termSchema = new mongoose.Schema(
  { term: {type: String, unique: true},
    definition: String
  });

// convert schema to model
const Term = mongoose.model('Term', termSchema);
var findAll = (callback) => {
  Term.find({},{term: 1, definition: 1, _id: 0}).exec(callback);
}
// write method to insert new entries
let add = (data, callback) => {
  let entry = new Term({term: data.term, definition: data.definition});
  entry.save(function(err) {
    if (err) {
      console.log('Word already exists in database!');
    }
    findAll(callback);
  })
};
// write method to update entries
let update = (data, callback) => {
  var filter = {term: data.term};
  var newDef = {definition: data.definition};
  Term.findOneAndUpdate(filter, newDef, function(err) {
    if (err) {
      console.log(`Error updating ${data.term} in database`)
    }
    findAll(callback);
  })
}
// write method to delete entries
let remove = (data, callback) => {
  Term.deleteOne(data, function(err) {
    if (err) {
      console.log(`Error deleting ${word} from database`)
    }
    findAll(callback);
  })
}
// write method to pull entries based on criteria
let find = (query, callback) => {
  Term.find(query, {term: 1, definition: 1, _id: 0}).exec(callback);
};

// export mongoose
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;
module.exports.find = find;

