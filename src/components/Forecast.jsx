import React, { Component } from 'react';
import Slider from 'react-slick';
import './Forecast.css';

const weekDays = ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."]

class Forecast extends Component {
  state = {
    display: true,
    width: 600
  };

    renderDayInfoElement = (data = [], index) => {
           const {date, mintempC, maxtempC} = data,
                  weatherIcon = data.hourly[4].weatherIconUrl[0].value,
                  weatherDesc = data.hourly[4].lang_ru[0].value;

           return (
             <div key={index} className="daysinfo-item">
               <div className="dayinfo-content">
                 <p>{`${weekDays[new Date(date).getDay()]} ${new Date(date).getDate()}`}</p>
                 <img src={weatherIcon} alt="weather-icon"/>
                 <p className="daysinfo-temp">{mintempC}°  <span>{maxtempC}°</span></p>
                 <p className="daysinfo-description">{weatherDesc}</p>
               </div>
             </div>);
       }

    render () {
      const {daysData} = this.props.data;

      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        swipeToSlide: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
      };

      return (
        <div className="forecast-section">
          {daysData === undefined ? '' : <h4>Погода в ближайшие дни</h4>}
          <Slider {...settings}>
            {daysData === undefined ? '' : daysData.map(this.renderDayInfoElement)}
          </Slider>
        </div>
      );
    }
  }

export default Forecast;
