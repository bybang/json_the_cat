// index. js
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2)[0]; // => http:// address

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(description);
  }
});