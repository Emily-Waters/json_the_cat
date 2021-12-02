const request = require('request');

const args = process.argv.slice(2);

// console.log(request);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (!error) {
    console.log(response.statusCode, response.statusMessage);
    // console.log(body);
    const data = JSON.parse(body);
    if (data.length) {
      console.log(data);
    } else {
      console.log('Breed Not Found');
    }
  } else {
    console.log(`There was an error :\n\n${error}`);
  }
});