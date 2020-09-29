import React from 'react'
import Weekday from '../../components/weekday/Weekday'
import './forecast.css'
const Forecast = (props) => {
  return (
    <div className="jr_forecast">
      <h3>Forecast</h3>
      <div className="row justify-content-between">
        {props.weekdays.map((weekday) => (
          <div className="col-2" key={weekday.day}>
            <Weekday weekday={weekday} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
