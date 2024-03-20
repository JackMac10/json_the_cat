const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe(`fetchBreedDescription`, () => {
  it(`returns a string description for a valid breed, via callback`, (done) => {
    fetchBreedDescription(`Siberian`, (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberian dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      assert.equal(expectedDesc, desc.trim());

      done()
    });
  });
  it(`returns an error when an invalid breed is passed in`, (done) => {
    fetchBreedDescription(`InvalidBreed`, (err, desc) => {
     
      assert.notEqual(err, null);
      assert.equal(desc, null);

      done();
  });
});
});