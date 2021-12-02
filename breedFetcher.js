const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (!err) {
      const data = JSON.parse(body);
      if (data.length) {
        return callback(null, data[0].description);
      } else {
        return callback('Invalid Breed',null);
      }
    } else {
      return callback(err, null);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};