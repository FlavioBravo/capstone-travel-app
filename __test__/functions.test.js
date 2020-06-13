import "babel-polyfill";
import { getGeonames, getWeatherbit, getPixabay } from "../__mock__/functions";

describe("functions file", () => {
  test("getGeonames should be a function", () => {
    expect(typeof getGeonames).not.toBe(Object);
  });

  test("getGeonames should return a response", () => {
    getGeonames("Madrid")
      .then((resg) => resg.json())
      .then((resg2) => {
        expect(resg2.toponymName).toBe("Madrid");
        expect(resg2.countryName).toBe("Spain");
      })
      .catch((err) => console.log("getGeonames Error:", err));
  });

  test("getWeatherbit should be a function", () => {
    expect(typeof getWeatherbit).not.toBe(Object);
  });

  test("getWeatherbit should return a response", () => {
    getWeatherbit("40.4165", "-3.70256")
      .then((resw) => resw.json())
      .then((resw2) => {
        expect(resw2.dayWeather.low_temp).toBeCloseTo(12.1);
        expect(resw2.dayWeather.max_temp).toBeCloseTo(26.1);
        expect(resw2.dayWeather.weather.description).toBe("Broken clouds");
      })
      .catch((err) => console.log("getWeatherbit Error:", err));
  });

  test("getPixabay should be a function", () => {
    expect(typeof getPixabay).not.toBe(Object);
  });

  test("getPixabay should return a response", () => {
    getPixabay("Madrid Spain")
      .then((resp) => resp.json())
      .then((resp2) => {
        expect(resp2.largeImageURL).toBe(
          "https://pixabay.com/get/52e2d24a4355b108f5d084609629307e173fdbe5534c704c7c2d7bd3954bcc5e_1280.jpg"
        );
      })
      .catch((err) => console.log("getPixabay Error:", err));
  });
});
