import { Location } from '../types';

export const getApiUrl = (location: Location) =>
  `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

export const fetchWeather = (location: Location) => {
  return fetch(getApiUrl(location));
};
