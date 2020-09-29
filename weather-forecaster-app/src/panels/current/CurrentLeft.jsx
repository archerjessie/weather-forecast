import React from 'react'
const CurrentLeft = (props) => {
  return (
    <>
      <h2>{props.currentWeather.temperature}°C</h2>
      <div className="weather-main">
        <span>{props.currentWeather.main}</span>
      </div>
      <div className="row current-left-bottom justify-content-around">
        <div className="col-6 humidity">
          <span>Humidity</span>
          <br></br>
          <span>{props.currentWeather.humidity}</span>
        </div>
        <div className="col-6 wind">
          <span>WIND</span>
          <br></br>
          <span>{props.currentWeather.wind} K/M</span>
        </div>
      </div>
    </>
  )
}
export default CurrentLeft
