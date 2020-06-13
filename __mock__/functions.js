// GET request - Geonames
const getGeonames = async (cityName) => {
  if (cityName) {
    return Promise.resolve({
      toponymName: "Madrid",
      lat: "40.4165",
      lng: "-3.70256",
      countryName: "Spain",
      population: 3255944,
      countryCode: "ES",
    });
  } else {
    return null;
  }
};

// GET request - Weatherbit
const getWeatherbit = async (lat, lng) => {
  if (lat && lng) {
    return Promise.resolve({
      dayWeather: {
        valid_date: "2020-06-15",
        low_temp: 12.1,
        max_temp: 26.1,
        temp: 20,
        min_temp: 12.1,
        clouds_mid: 25,
        clouds_low: 4,
        weather: { icon: "c03d", code: 803, description: "Broken clouds" },
      },
    });
  } else {
    return null;
  }
};

// GET request - Weatherbit
const getPixabay = async (searchTerm) => {
  if (searchTerm) {
    return Promise.resolve({
      largeImageURL:
        "https://pixabay.com/get/52e2d24a4355b108f5d084609629307e173fdbe5534c704c7c2d7bd3954bcc5e_1280.jpg",
    });
  } else {
    return null;
  }
};

exports.getGeonames = getGeonames;
exports.getWeatherbit = getWeatherbit;
exports.getPixabay = getPixabay;
