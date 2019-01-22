import React, { Component } from 'react';
import Slider from 'react-slick';
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
//

class HourlyInfo extends Component {

  renderHourlyInfoElement = (data = [], index) => {
         const {time, tempC} = data,
                weatherIcon = data.weatherIconUrl[0].value,
                description = data.lang_ru[0].value;
         return (
          <div key={index} className="hourlyinfo-item">
           <div className="hourlyinfo-content">
             <p>{timeLine[time]}</p>
             <img src={weatherIcon} alt="weatherIcon"/>
             <p className="hourlyinfo-temp">{tempC}°</p>
             <p className="hourlyinfo-description">{description}</p>
           </div>
          </div>
       );
     }

  render() {
    const {hourlyData} = this.props.data;
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
      <div className="hourlyinfo__section">
        {hourlyData === undefined ? '' : <h4>Погода в течении дня</h4>}
        <Slider {...settings} >
            {hourlyData === undefined ? '' : hourlyData.map(this.renderHourlyInfoElement)}
        </Slider>
      </div>
    );
  }
}

export default HourlyInfo;
