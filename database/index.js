const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// schema contains properties with data types
let repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  url: String,
  stargazers_count: Number,
  owner: {
    id: Number,
    login: String
  }
});

// compiles the schema into a class
let Repo = mongoose.model('Repo', repoSchema);

// This function should save a repo or repos to
// the MongoDB
let save = (repos, callback) => {
  Repo.create(repos, callback);
}

// get the count of repos in the db
let countSavedRepos = (callback) => {

}

// This function should retrieve the top 25 by stargazers_count, descending
let getTop25Repos = (callback) => {
  console.log('getTop25Repos ran')
  Repo.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  }).sort({'stargazers_count': -1}).limit(25);
}

module.exports.save = save;
module.exports.getTop25Repos = getTop25Repos;