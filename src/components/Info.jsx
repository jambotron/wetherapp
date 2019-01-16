import React, { Component } from 'react';

class Info extends Component {
  render () {
    const {location, temp, feelsLike, windspeed, humidity, pressure, weatherDesc, weatherIcon, localtime, error} = this.props,
          pressure_mmHg = Math.round(pressure/1.33322)

    return (
      <div>
      { location &&
        <div>
          <h3> {location} <br/><span>{localtime}</span> </h3>
          <p> <img src={weatherIcon} alt="weather-icon"/> {weatherDesc} </p>
          <p> Температура воздуха: {temp}°C </p>
          <p> По ощущениям: {feelsLike}°C </p>
          <p> Влажность воздуха: {humidity}% </p>
          <p> Ветер: {windspeed}км/ч </p>
          <p> Давление: {pressure_mmHg}мм.рт.ст. </p>
       </div>
      }
      <p>{error}</p>
      </div>
    );
  }
}

export default Info;
