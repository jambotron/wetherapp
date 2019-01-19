import React, { Component } from 'react';
import Form from './components/Form';
import CurrentInfo from './components/CurrentInfo';
import Forecast from './components/Forecast';
import HourlyInfo from './components/HourlyInfo';


const WETHER_API_KEY = "47fa2bde9d2c41b385783953191601",
      IP_API_KEY = "446d64c7cacea793ebf82c1445104d75";

class App extends Component {

  state = {};

gettingWether = async (e) => {
  e.preventDefault();

  let cityName = e.target.elements.city.value

  if (cityName) {
    const api_url_response = await
    fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${WETHER_API_KEY}&lang=ru&q=${cityName}&showlocaltime=yes&mca=no&format=json`);

    const dataJSON = await api_url_response.json();
    console.log(dataJSON);

    if (dataJSON.data.error) {
      this.setState({
        data: {
          error: "Местоположение не найдено"
        }
      });
    } else {this.setState({
        data: {
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
          daysData: dataJSON.data.weather
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

////
getCityName = async () => {
  const ip_api_response = await
  fetch(`http://api.ipstack.com/check?access_key=${IP_API_KEY}&language=ru`);

  const dataIP = await ip_api_response.json(),
        city = dataIP.city;

  const api_url_response = await
  fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${WETHER_API_KEY}&lang=ru&q=${city}&showlocaltime=yes&mca=no&format=json`);

  const dataJSON = await api_url_response.json();
  console.log(dataJSON);

  return dataJSON;
}

componentDidMount() {
        this.getCityName()
        .then(dataJSON => {
          this.setState({
            data: {
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
              daysData: dataJSON.data.weather
            }
          });
        });
    }
/////

  render() {
    const {data} = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <div className="wrapper">
        <div className="row">
          <Form gettingWether={this.gettingWether}/>
          <CurrentInfo data = {this.state.data} />
          <HourlyInfo data = {this.state.data}/>
          <Forecast data = {this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
