import {
  cleanForm,
  validateInput,
  postTravel,
  updateUI,
  handleSubmit,
  handleBar,
} from "../src/client/js/formHandler";

global.fetch = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        ok: true,
        respond: {
          geonamesObject: {
            toponymName: "Madrid",
            lat: "40.4165",
            lng: "-3.70256",
            countryName: "Spain",
            population: 3255944,
            countryCode: "ES",
          },
          weatherObject: {
            dayWeather: {
              valid_date: "2020-06-15",
              low_temp: 12.1,
              max_temp: 26.1,
              temp: 20,
              min_temp: 12.1,
              clouds_mid: 25,
              clouds_low: 4,
              weather: {
                icon: "c03d",
                code: 803,
                description: "Broken clouds",
              },
            },
          },
          pixabayObject: {
            largeImageURL:
              "https://pixabay.com/get/52e2d24a4355b108f5d084609629307e173fdbe5534c704c7c2d7bd3954bcc5e_1280.jpg",
          },
        },
      }),
  });

describe("formHandler file", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <main class="main-container">
      <section class="section-container">
        <div class="description">
          <p class="text-lg open-sans">
            Type your location and choose your date, you'll get weather
            information and an image of the location.
          </p>
        </div>
        <form method="POST" class="form-row">
          <div class="row-input text-base">
            <label for=""
              ><i class="fa fa-search icon-form" aria-hidden="true"></i
            ></label>
            <input
              type="text"
              class="input-form open-sans"
              name="location"
              id="location"
              placeholder="Trip location"
            />
          </div>
          <div class="row-input-md text-base">
            <label for=""
              ><i class="fa fa-calendar icon-form" aria-hidden="true"></i
            ></label>
            <input
              type="date"
              class="input-form open-sans"
              name="date"
              id="date"
            />
          </div>
          <button type="submit" id="submit" class="btn-form open-sans">
            Search
          </button>
        </form>
      </section>
      <section class="section-result">
        <div class="sub-title">
          <p><span class="text-xl open-sans">Dream of your next trip</span></p>
        </div>
        <div class="result-container">
          <div class="message">
            <span class="text-lg open-sans">Desired destinations result:</span>
          </div>
          <div class="card-container" id="result"></div>
        </div>
      </section>
    </main>
    `;
  });

  test("handleSubmit should be a function", () => {
    expect(typeof handleSubmit).toBe("function");
  });

  test("handleBar should be a function", () => {
    expect(typeof handleBar).toBe("function");
  });

  test("validateInput should be a function", () => {
    expect(typeof validateInput).toBe("function");
  });

  test("validateInput should return false with parameters with value", () => {
    expect(validateInput("madrid", "2020-06-13")).toBe(false);
  });

  test("postTravel should be a function", () => {
    expect(typeof postTravel).not.toBe(Object);
  });

  test("postTravel should be a function", () => {
    const dataObject = {
      location: "london",
      date: "2020-06-15",
    };
    postTravel(dataObject)
      .then((res) => res.json())
      .then((res2) => {
        expect(res2.ok).toBe(true);
      })
      .catch((err) => console.log("postTravel Error:", err));
  });

  test("cleanForm should clean the inputs", () => {
    cleanForm();
    expect(document.getElementById("location").value).toBe("");
    expect(document.getElementById("date").value).toBe("");
  });

  test("cleanForm should be a function", () => {
    expect(typeof cleanForm).not.toBe(Object);
  });

  test("updateUI should be a function", () => {
    expect(typeof updateUI).not.toBe(Object);
  });

  test("updateUI should create new elements", () => {
    const response = {
      geonamesObject: {
        toponymName: "Madrid",
        lat: "40.4165",
        lng: "-3.70256",
        countryName: "Spain",
        population: 3255944,
        countryCode: "ES",
      },
      weatherObject: {
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
      },
      pixabayObject: {
        largeImageURL:
          "https://pixabay.com/get/52e2d24a4355b108f5d084609629307e173fdbe5534c704c7c2d7bd3954bcc5e_1280.jpg",
      },
    };
    updateUI(response);
    expect(document.getElementsByClassName("card")).toBeTruthy();
  });
});
