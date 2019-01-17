import React, { Component } from 'react';

class HourlyInfo extends Component {

  renderHourlyInfoElement = (data = [], index) => {
         const {time, tempC} = data,
                weatherIcon = data.weatherIconUrl[0].value;
         return <li key={index}>
             <p>{time}</p>
             <img src={weatherIcon} alt="weatherIcon"/>
             <p>{tempC}°</p>
         </li>;
     }

  render () {
    const {hourlyData} = this.props;

    return (
      <div>
        {hourlyData === undefined ? '' : <h4>Погода в течении дня</h4>}
        <div className="hourlyInfo">
          {hourlyData === undefined ? '' : hourlyData.map(this.renderHourlyInfoElement)}
        </div>
      </div>
    );
  }
}

export default HourlyInfo;
