import axios from 'axios';

const API_KEY = "92b06ebfa2204ea1e396022b8b6a2f27";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(location) {
  let encodedLocation = encodeURIComponent(location);
  const url = `${ROOT_URL}&q=${encodedLocation}`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
