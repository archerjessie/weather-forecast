import React from 'react'
import WeatherIcon from '../weatherIcon/WeatherIcon'
const Weekday = (props) => (
  <ul>
    <li>{props.weekday.day}</li>
    <li>{Math.round(props.weekday.temp)}°C</li>
    <li>
      <WeatherIcon weatherIcon={props.weekday.icon} />
    </li>
  </ul>
)

export default Weekday
