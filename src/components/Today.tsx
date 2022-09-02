import React from 'react';
import { getIconUrl, convertKelvinToCelsius } from '../utils';
import { WeatherCurrent } from '../types';
import '../styles/today.less';

type TodayProps = {
  weather: WeatherCurrent | null;
};

export default class Today extends React.PureComponent<TodayProps> {
  render(): React.ReactNode {
    if (!this.props.weather) {
      return null;
    }
    const { temp, weather } = this.props.weather;
    return (
      <div className="today">
        <div className="h3 text-center">Today</div>
        <div className="weather-detail">
          <img src={getIconUrl(weather[0].icon, true)} alt={weather[0].icon}></img>
          <div>
            <div className="h1 temp">{convertKelvinToCelsius(temp)}°</div>
            <div className="h3">{weather[0].main}</div>
          </div>
        </div>
      </div>
    );
  }
}
