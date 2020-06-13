// travel.js - route Module
const express = require("express");
const router = express.Router();

// Setup empty JS object to act as API endpoint
const projectData = require("fs");

// Setup the API functions
const functions = require("./utils/functions");

// Get travelList
router.get("/", (req, res) => {
  console.log("get travel");
});

// Post one travel
router.post("/", async (req, res) => {
  const value = req.body.location;
  const date = req.body.date;

  const geonamesResult = await functions.getGeonames(value);
  const {
    toponymName,
    lat,
    lng,
    countryName,
    population,
    countryCode,
  } = geonamesResult.geonames[0];
  const geonamesObject = {
    toponymName,
    lat,
    lng,
    countryName,
    population,
    countryCode,
  };

  const weatherbitResult = await functions.getWeatherbit(lat, lng);
  const { country_code, data, timezone } = weatherbitResult;
  const dayWeather = data.find((item) => item.valid_date === date);
  const weatherObject = {
    country_code,
    dayWeather,
    timezone,
  };

  const pixabayResult = await functions.getPixabay(
    `${geonamesObject.toponymName} ${geonamesObject.countryName}`
  );
  const { largeImageURL } = pixabayResult.hits[0];
  const pixabayObject = { largeImageURL };

  let travelList = require("./db.json");
  const id = travelList.length + 1;
  const travelData = {
    _id: `${id}`,
    geonamesObject,
    weatherObject,
    pixabayObject,
  };

  travelList.push(travelData);

  projectData.writeFileSync(`${__dirname}/db.json`, JSON.stringify(travelList));

  res.json({
    ok: true,
    respond: travelData,
  });
});

module.exports = router;
