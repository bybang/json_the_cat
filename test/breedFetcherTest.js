// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, description) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, description.trim());
      // Error with the correct i

      done();
    });
  });
  it("returns a string error message 'Error fetch details: no data', via callback", (done) => {
    fetchBreedDescription('dogdog', (err) => {
      // we expect error for this scenario
      assert.notEqual(err, null);
      
      const expectedError = 'Error fetch details: no data';

      // compare returned description
      assert.equal(expectedError, err.trim());

      done();
    });
  });
  it("returns a string error message `Can't find the page! Check the URL`, via callback", (done) => {
    fetchBreedDescription('Chartreux', (err, description) => {
      // we expect error(wrong url) for this scenario
      assert.equal(err, `Can't find the page! Check the URL`);
  
      // compare returned description
      assert.equal(description, undefined);

      done();
    }, 'asdfoiew');
  });
});
