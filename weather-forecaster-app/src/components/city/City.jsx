import React from 'react'
import WeatherIcon from '../weatherIcon/WeatherIcon'
const City = (props) => {
  return (
    <div
      onClick={() => props.onclick(props.city.name)}
      className="row justify-content-space-around"
    >
      <div className="col-4">{props.city.name}</div>
      <div className="col-2">{Math.round(props.city.temp)}°C</div>
      <div className="col-3">
        <WeatherIcon weatherIcon={props.city.icon} />
      </div>
    </div>
  )
}
export default City
