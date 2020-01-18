const express = require('express');
let app = express();
let body_parser = require('body-parser');
let getReposByUsername = require('../helpers/github.js').getReposByUsername;

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  res.status(201).send('hi');
  let username = req.body.term;
  getReposByUsername(username, (err, results) => {
    if (err) {
      console.err(err);
    } else {
      let repos = JSON.parse(results.toString());
      repos.forEach((repo) => {
        console.log(repo.name);
        //repo.save()
      })
    }
  });

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

