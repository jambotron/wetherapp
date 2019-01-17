import React, { Component } from 'react';
import Form from './components/Form';
import CurrentInfo from './components/CurrentInfo';
import Forecast from './components/Forecast';
import HourlyInfo from './components/HourlyInfo';
import './App.css';
import './components/HourlyInfo.css';
import './components/Forecast.css';

const API_KEY = "47fa2bde9d2c41b385783953191601";

class App extends Component {

  state = {
    location: undefined,
    weatherDesc: undefined,
    temp: undefined,
    feelsLike: undefined,
    humidity: undefined,
    windspeed: undefined,
    pressure: undefined,
    weatherIcon: undefined,
    localtime: undefined,
    hourlyData: undefined,
    daysData: undefined,
    error: undefined
  }

// getLocation = async () => {
//   const ip_url_api = await
//   fetch(`http://api.ipstack.com/check?access_key=446d64c7cacea793ebf82c1445104d75&language=ru`);
//
//   const dataIP = await ip_url_api.json(),
//         city = dataIP.city;
//
//   console.log(dataIP);
//
//   const api_url = await
//   fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&lang=ru&q=${city}&showlocaltime=yes&mca=no&format=json`);
//
//   const dataJSON = await api_url.json();
//   console.log(dataJSON);
//
//   this.setState({
//     location: dataJSON.data.request[0].query,
//     weatherDesc: dataJSON.data.current_condition[0].lang_ru[0].value,
//     temp: dataJSON.data.current_condition[0].temp_C,
//     feelsLike: dataJSON.data.current_condition[0].FeelsLikeC,
//     humidity: dataJSON.data.current_condition[0].humidity,
//     windspeed: dataJSON.data.current_condition[0].windspeedKmph,
//     pressure: dataJSON.data.current_condition[0].pressure,
//     weatherIcon: dataJSON.data.current_condition[0].weatherIconUrl[0].value,
//     localtime: dataJSON.data.time_zone[0].localtime,
//     hourlyData: dataJSON.data.weather[0].hourly[0],
//     error: undefined
//   });
//
// }

gettingWether = async (e) => {
  e.preventDefault();

  let cityName = e.target.elements.city.value

  if (cityName) {
    const api_url = await
    fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&lang=ru&q=${cityName}&showlocaltime=yes&mca=no&format=json`);

    const dataJSON = await api_url.json();
    console.log(dataJSON);


    this.setState({
      location: dataJSON.data.request[0].query,
      weatherDesc: dataJSON.data.current_condition[0].lang_ru[0].value,
      temp: dataJSON.data.current_condition[0].temp_C,
      feelsLike: dataJSON.data.current_condition[0].FeelsLikeC,
      humidity: dataJSON.data.current_condition[0].humidity,
      windspeed: dataJSON.data.current_condition[0].windspeedKmph,
      pressure: dataJSON.data.current_condition[0].pressure,
      weatherIcon: dataJSON.data.current_condition[0].weatherIconUrl[0].value,
      localtime: dataJSON.data.time_zone[0].localtime,
      hourlyData: dataJSON.data.weather[0].hourly,
      daysData: dataJSON.data.weather,
      error: undefined
    });
  } else {
    this.setState({
      location: undefined,
      weatherDesc: undefined,
      temp: undefined,
      feelsLike: undefined,
      humidity: undefined,
      windspeed: undefined,
      pressure: undefined,
      weatherIcon: undefined,
      localtime: undefined,
      hourlyData: undefined,
      daysData: undefined,
      error: "Введите название города!"
    });
  }
}

  render() {
    return (
      <div className="App">
        <Form gettingWether={this.gettingWether}/>
        <CurrentInfo
          location = {this.state.location}
          weatherDesc = {this.state.weatherDesc}
          temp = {this.state.temp}
          feelsLike = {this.state.feelsLike}
          humidity = {this.state.humidity}
          windspeed = {this.state.windspeed}
          pressure = {this.state.pressure}
          weatherIcon = {this.state.weatherIcon}
          localtime = {this.state.localtime}
          error = {this.state.error}
          />
        <HourlyInfo hourlyData={this.state.hourlyData}/>
        <Forecast daysData={this.state.daysData}/>
      </div>
    );
  }
}

export default App;
