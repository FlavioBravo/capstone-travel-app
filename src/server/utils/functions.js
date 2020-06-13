// Setup constants variables
const constants = require("./constants");

// npm package that brings window.fetch to Node.js
const fetch = require("node-fetch");

// GET request - Geonames
const getGeonames = async (cityName) => {
  const URLGeonames = `${constants.baseURLGeonames}${encodeURIComponent(
    cityName
  )}&maxRows=1&username=${process.env.API_KEY_GEONAMES}`;

  try {
    const response = await fetch(URLGeonames);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getGeonames Error: ", error);
  }
};

// GET request - Weatherbit
const getWeatherbit = async (lat, lng) => {
  const URLWeatherbit = `${constants.baseURLWeatherbit}lat=${lat}&lon=${lng}&key=${process.env.API_KEY_WEATHERBIT}`;

  try {
    const response = await fetch(URLWeatherbit);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getWeatherbit Error: ", error);
  }
};

// GET request - Weatherbit
const getPixabay = async (searchTerm) => {
  const URLPixabay = `${constants.baseURLPixabay}?key=${
    process.env.API_KEY_PIXABAY
  }&q=${encodeURIComponent(searchTerm)}`;

  try {
    const response = await fetch(URLPixabay);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getPixabay Error: ", error);
  }
};

exports.getGeonames = getGeonames;
exports.getWeatherbit = getWeatherbit;
exports.getPixabay = getPixabay;
