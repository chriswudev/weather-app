import React from 'react';
import Today from '../components/Today';
import NextDay from '../components/NextDay';
import Loading from '../components/Loading';
import { fetchWeather } from '../api';
import { City, WeatherReport, WeatherCurrent, WeatherDaily } from '../types';
import '../styles/weather.less';

type WeatherProps = {
  city: City;
};

type WeatherState = {
  loading: boolean;
  today: WeatherCurrent | null;
  nextFourDays: WeatherDaily[] | null;
};

export default class Weather extends React.Component<
  WeatherProps,
  WeatherState
> {
  state: WeatherState = {
    loading: false,
    today: null,
    nextFourDays: null,
  };
  componentDidMount() {
    this.updateWeather();
  }
  componentDidUpdate(prevProps: WeatherProps) {
    if (
      this.props.city &&
      prevProps.city &&
      this.props.city.name !== prevProps.city.name
    ) {
      this.updateWeather();
    }
  }
  updateWeather = () => {
    this.setState({ loading: true });
    fetchWeather(this.props.city.location).then(async (res) => {
      const weather: WeatherReport = await res.json();
      const { current, daily } = weather;
      this.setState({
        loading: false,
        today: current,
        nextFourDays: daily.slice(1, 5),
      });
    });
  };
  render(): React.ReactNode {
    return (
      <div className="weather-container">
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <div className="weather-today">
              <Today weather={this.state.today} />
            </div>
            <div className="weather-next-days">
              {this.state.nextFourDays &&
                this.state.nextFourDays.map((weather, index) => (
                  <NextDay key={index} weather={weather} />
                ))}
            </div>
          </>
        )}
      </div>
    );
  }
}
