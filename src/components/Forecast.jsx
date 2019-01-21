import React, { Component } from 'react';
import './Forecast.css';

const weekDays = ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."]

class Forecast extends Component {

    renderDayInfoElement = (data = [], index) => {
           const {date, mintempC, maxtempC} = data,
                  weatherIcon = data.hourly[4].weatherIconUrl[0].value,
                  weatherDesc = data.hourly[4].lang_ru[0].value;
           return (
             <li key={index}>
               <p>{`${weekDays[new Date(date).getDay()]} ${new Date(date).getDate()}`}</p>
               <img src={weatherIcon} alt="weather-icon"/>
               <p className="daysinfo-temp">{mintempC}°  <span>{maxtempC}°</span></p>
               <p className="daysinfo-description">{weatherDesc}</p>
             </li>);
       }

    render () {
      const {daysData} = this.props.data;

      return (
        <div className="forecast-section">
          {daysData === undefined ? '' : <h4>Погода в ближайшие дни</h4>}
          <div className="daysinfo-items">
            {daysData === undefined ? '' : daysData.map(this.renderDayInfoElement)}
          </div>
        </div>
      );
    }
  }

export default Forecast;
