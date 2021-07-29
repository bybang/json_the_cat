const request = require('request');
const breedName = process.argv.slice(2)[0]; // => http:// address


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  if (error) {
    return console.log('error message');
  }
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log('Page not found');
  }
  console.log(data[0]["description"]);
  //console.log('body:', body); // Print the HTML for the Google homepage.
});