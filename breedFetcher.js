const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }


    if (response.statusCode !== 200) {
      console.error('Unexpected status code:', response.statusCode);
      return;
    }

    const data = JSON.parse(body);

    if (Array.isArray(data) && data.length > 0) {
      const firstBreed = data[0];
      callback(null, `${firstBreed.name}: ${firstBreed.description}`);
    } else {
      callback(null, `Breed "${breedName}" not found.`);
    }
  });
};

module.exports = { fetchBreedDescription };
