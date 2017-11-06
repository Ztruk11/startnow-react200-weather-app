import axios from "axios";

export const types = {
  GET_WEATHER: "GET_WEATHER",
  UPDATE_CITY: "UPDATE_CITY",
  GET_FORECAST: "GET_FORECAST"
};

export function getWeather(city) {
  return {
    type: types.GET_WEATHER,
    payload: axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=ea922415347d25c3ed1cb1790ba1b8bd"
      )
      .then(results => results.data)
      .catch(err => console.log(err))
  };
}

export function getForecast(city) {
  return {
    type: types.GET_FORECAST,
    payload: axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=ea922415347d25c3ed1cb1790ba1b8bd"
      )
      .then(results => results.data)
      .catch(err => console.log(err))
  };
}

export function updateCity(city) {
  return {
    type: types.UPDATE_CITY,
    payload: {
      city: city
    }
  };
}
