import React from 'react'
import './otherCities.css'
import City from '../.././components/city/City'
import { useState } from 'react'
const OtherCities = (props) => {
  const [showOthercity, setShowOtherCity] = useState(false)
  const handleClick = () => {
    setShowOtherCity(!showOthercity)
  }

  return (
    <div className="jr_other-cities">
      <div className={showOthercity ? '' : 'd-none d-lg-block'}>
        <h4>Other Cities</h4>
        <ul>
          {props.allCities.map((city) => (
            <li key={city.name}>
              <City city={city} onclick={props.onCitySelected} />
            </li>
          ))}
        </ul>
      </div>
      <div className="d-lg-none">
        <a onClick={handleClick} href="#">
          {showOthercity ? 'hide other cities' : 'show other cities'}
        </a>
      </div>
    </div>
  )
}
export default OtherCities
