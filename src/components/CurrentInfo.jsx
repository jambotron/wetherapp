import React, { Component } from 'react';
import './CurrentInfo.css';


class CurrentInfo extends Component {
  render () {
    const {location, temp, feelsLike, windspeed, humidity, pressure, weatherDesc, weatherIcon, localtime, error} = this.props.data;

    return (
      <div className="currentinfo-section container">
      { location &&
        <div>
          <h3> {location} </h3>
          <div className="currentinfo-main">
            <img src={weatherIcon} alt="weather-icon"/>
            <span className="current-temp">{temp}°</span>
          </div>
          <p className="currentinfo-desc"> {weatherDesc} </p>
          <p className="update-info"> Обновлено в {`${new Date(localtime).getHours()}:${(new Date(localtime).getMinutes()).length < 2 ? '0'+new Date(localtime).getMinutes() : new Date(localtime).getMinutes()}`}</p>
          <div className="additional-info">
            <div className="additional-items">
              <p> По ощущениям {feelsLike}° </p>
              <p> Ветер {windspeed}км/ч </p>
            </div>
            <div className="additional-items">
              <p> Влажность {humidity}% </p>
              <p> Давление {Math.round(pressure/1.33322)}мм </p>
            </div>
          </div>
       </div>
      }
      <p>{error}</p>
      </div>
    );
  }
}

export default CurrentInfo;
