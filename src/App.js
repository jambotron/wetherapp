import React, { Component } from 'react';
import Form from './components/Form';
import CurrentInfo from './components/CurrentInfo';
import Forecast from './components/Forecast';
import HourlyInfo from './components/HourlyInfo';


const WETHER_API_KEY = "47fa2bde9d2c41b385783953191601";

class App extends Component {

  state = {};

getWetherData = async (e) => {
  e.preventDefault();

  let cityName = e.target.elements.city.value

  if (cityName) {
    const api_url_response = await
    fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${WETHER_API_KEY}&lang=ru&q=${cityName}&showlocaltime=yes&mca=no&format=json`);

    const { data } = await api_url_response.json();

    if (data.error) {
      this.setState({
        data: {
          error: "Местоположение не найдено"
        }
      });
    } else {this.setState({
        data: {
          location: data.request[0].query,
          weatherDesc: data.current_condition[0].lang_ru[0].value,
          temp: data.current_condition[0].temp_C,
          feelsLike: data.current_condition[0].FeelsLikeC,
          humidity: data.current_condition[0].humidity,
          windspeed: data.current_condition[0].windspeedKmph,
          pressure: data.current_condition[0].pressure,
          weatherIcon: data.current_condition[0].weatherIconUrl[0].value,
          localtime: data.time_zone[0].localtime,
          hourlyData: data.weather[0].hourly,
          daysData: data.weather
        }
      });
    }
  } else {
    this.setState({
      data: {
        error: "Введите название города!"
      }
    });
  }
}


getCityName = async () => {
  const ip_api_response = await
  fetch(`https://api.sypexgeo.net/json/`);

  const dataIP = await ip_api_response.json(),
        city = dataIP.city.name_ru;

  const api_url_response = await
  fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${WETHER_API_KEY}&lang=ru&q=${city}&showlocaltime=yes&mca=no&format=json`);

  const { data } = await api_url_response.json();

  return data;
}

componentDidMount() {
        this.getCityName()
        .then(data => {
          this.setState({
            data: {
              location: data.request[0].query,
              weatherDesc: data.current_condition[0].lang_ru[0].value,
              temp: data.current_condition[0].temp_C,
              feelsLike: data.current_condition[0].FeelsLikeC,
              humidity: data.current_condition[0].humidity,
              windspeed: data.current_condition[0].windspeedKmph,
              pressure: data.current_condition[0].pressure,
              weatherIcon: data.current_condition[0].weatherIconUrl[0].value,
              localtime: data.time_zone[0].localtime,
              hourlyData: data.weather[0].hourly,
              daysData: data.weather
            }
          });
        });
    }


  render() {
    const {data} = this.state;

    if (!data) {
      return (
        <div className="d-flex justify-content-center align-items-center spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="app">
        <div>
          <Form getWetherData={this.getWetherData} />
          <CurrentInfo data = {this.state.data} />
          <HourlyInfo data = {this.state.data} />
          <Forecast data = {this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
