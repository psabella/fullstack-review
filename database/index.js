const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// schema contains properties with data types
let repoSchema = mongoose.Schema({
  _id: 'number',
  name: 'string',
  url: 'string',
  watchers_count: 'number',
  owner: {
    id: 'number',
    login: 'string'
  }
});

// compiles the schema into a class
let Repo = mongoose.model('Repo', repoSchema);

// for each repo need to create an instance of the Repo class with the values corresponding to the repo data
let save = (err, ) => {
  // TODO: Your code here
  if (err) {
    return console.error(err);
  } else {
    // TODO
  }
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;