const express = require('express');
const app = express();
const body_parser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;
const getTop25Repos = require('../database/index.js').getTop25Repos;

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  let username = req.body.term;
  getReposByUsername(username, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      let repos = JSON.parse(results.toString());
      // to check if getting the repos
      repos.forEach((repo) => {
        console.log(repo.name);
      })
      // save the repos to the db
      save(repos, (err) => {
        console.error(err);
      });
      res.status(201).send(results);
    }
  });
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  getTop25Repos((err, topRepos) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(topRepos);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

