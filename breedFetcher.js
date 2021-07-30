const request = require('request');

const fetchBreedDescription = function(breedName, callback, urlOverride) {
  request(`${urlOverride || 'https://api.thecatapi.com/v1/breeds/search?q='}${breedName}`, function(error, response, body) {
    if (error) {
      return callback(`Can't find the page! Check the URL`);
    }
    const data = JSON.parse(body);
    // console.log(data);
    if (data.length === 0) {
      return callback('Error fetch details: no data');
      //console.log('Page not found');
    }
    return callback(null, (data[0]["description"]));
    //console.log('body:', body); // Print the HTML for the Google homepage.
  });
};

module.exports = { fetchBreedDescription };
// https://api.thecatapi.com/v1/breeds/search?q=${breedName}