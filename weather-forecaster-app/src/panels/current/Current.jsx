import React from 'react'
import CurrentLeft from './CurrentLeft'
import './current.css'

const Current = (props) => {
  return (
    <div className={`jr_current-weather ${props.city.toLowerCase()}`}>
      <div className="row">
        <div className="col-lg-6 order-lg-last current-right">
          <span> {props.city} </span>
        </div>
        <div className="col-lg-6 order-lg-first current-left">
          <CurrentLeft currentWeather={props.currentWeather} />
        </div>
      </div>
      <div className="bottom-strip"></div>
    </div>
  )
}
export default Current
