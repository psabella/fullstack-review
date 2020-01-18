const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// schema contains properties with data types
let repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  url: String,
  watchers_count: Number,
  owner: {
    id: Number,
    login: String
  }
});

// compiles the schema into a class
let Repo = mongoose.model('Repo', repoSchema);

// This function should save a repo or repos to
// the MongoDB
let save = (repos) => {
  Repo.create(repos);
}

module.exports.save = save;