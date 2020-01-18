const express = require('express');
const app = express();
const body_parser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js');

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
      save.save(repos);
    }
  res.status(201).send('Your Post to Server / Request to API worked');
  });
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  // TODO - your code here!
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

