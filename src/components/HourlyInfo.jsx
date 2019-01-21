import React, { Component } from 'react';
import './HourlyInfo.css';

const timeLine = {
  0: '00:00',
  300: '03:00',
  600: '06:00',
  900: '09:00',
  1200: '12:00',
  1500: '15:00',
  1800: '18:00',
  2100: '21:00',
};

class HourlyInfo extends Component {

  renderHourlyInfoElement = (data = [], index) => {
         const {time, tempC} = data,
                weatherIcon = data.weatherIconUrl[0].value,
                description = data.lang_ru[0].value;
         return (
          <li key={index}>
             <p>{timeLine[time]}</p>
             <img src={weatherIcon} alt="weatherIcon"/>
             <p className="hourlyinfo-temp">{tempC}°</p>
             <p className="hourlyinfo-description">{description}</p>
          </li>
       );
     }

  render () {
    const {hourlyData} = this.props.data;

    return (
      <div className="hourlyinfo__section">
        {hourlyData === undefined ? '' : <h4>Погода в течении дня</h4>}
        <div className="hourlyinfo-items">
          {hourlyData === undefined ? '' : hourlyData.map(this.renderHourlyInfoElement)}
        </div>
      </div>
    );
  }
}

export default HourlyInfo;
