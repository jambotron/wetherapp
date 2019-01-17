import React, { Component } from 'react';

class Forecast extends Component {

    renderDayInfoElement = (data = [], index) => {
           const {date, mintempC, maxtempC} = data,
                  weatherIcon = data.hourly[4].weatherIconUrl[0].value;
           return (
             <li key={index}>
               <p>{date}</p>
               <img src={weatherIcon} alt="weatherIcon"/>
               <p>{mintempC}°  {maxtempC}°</p>
             </li>);
       }

    render () {
      const {daysData} = this.props;

      return (
        <div className="daysInfo">
          {daysData === undefined ? '' : <h4>Погода в ближайшие дни</h4>}
          <div className="daysInfo__item">
            {daysData === undefined ? '' : daysData.map(this.renderDayInfoElement)}
          </div>
        </div>
      );
    }
  }

export default Forecast;
