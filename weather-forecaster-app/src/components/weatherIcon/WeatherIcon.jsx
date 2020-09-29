import React from 'react'

const WeatherIcon = (props) => (
  <img
    className="city-weather"
    src={'https://openweathermap.org/img/wn/' + props.weatherIcon + '.png'}
    alt="weather picture"
  />
)
export default WeatherIcon
