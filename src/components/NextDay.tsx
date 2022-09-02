import React from 'react';
import { WeatherDaily } from '../types';
import { convertKelvinToCelsius, getIconUrl, getDay } from '../utils';
import '../styles/nextday.less';

type NextDayProps = {
  weather: WeatherDaily;
};

export default class NextDay extends React.PureComponent<NextDayProps> {
  render(): React.ReactNode {
    console.log(this.props.weather);
    if (!this.props.weather) {
      return null;
    }
    const {
      dt,
      temp: { day },
      weather: [{ icon }],
    } = this.props.weather;
    return (
      <div className="nextday">
        <div className="h4 text-center">{getDay(dt)}</div>
        <img src={getIconUrl(icon)} alt={icon}></img>
        <div className="h3 text-center temp">
          {convertKelvinToCelsius(day)}°
        </div>
      </div>
    );
  }
}
