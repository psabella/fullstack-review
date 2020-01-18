const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      callback(error);
    } else {
      callback(null, body);
    }
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

module.exports.getReposByUsername = getReposByUsername;