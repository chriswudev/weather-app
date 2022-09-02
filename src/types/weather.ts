export type WeatherReport = {
  current: WeatherCurrent;
  daily: WeatherDaily[];
};

export type WeatherCurrent = {
  dt: number;
  temp: number;
  weather: Weather[];
};

export type WeatherDaily = {
  dt: number;
  temp: {
    morn: number;
    day: number;
    eve: number;
    night: number;
    min: number;
    max: number;
  };
  weather: Weather[];
};

export type Weather = {
  id: number;
  icon: string;
  main: string;
  description: string;
};
