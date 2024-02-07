const request = require("request");

const breedName = process.argv[2];

// Check if breedName is provided
if (!breedName) {
  console.error('Please provide a breed name.');
  process.exit(1);
}
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
    
    console.log(`${firstBreed.name}: ${firstBreed.description}`);
  } else {
    console.log(`Cat Breed "${breedName}" not found in database.`);
  }
});