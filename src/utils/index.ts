const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const convertKelvinToCelsius = (temp: number) =>
  Math.round(temp - 273.15);

export const getIconUrl = (iconName: string, large: boolean = false) =>
  `http://openweathermap.org/img/wn/${iconName}@${large ? 4 : 2}x.png`;

export const getDay = (dt: number) => {
  const day = new Date(dt * 1000).getDay();
  return weekday[day];
};
