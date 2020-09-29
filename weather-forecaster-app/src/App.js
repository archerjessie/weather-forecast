import React from 'react'
import {
  fetchWeather,
  fetchWeatherGroup,
  fetchForecast,
} from './api/WeatherAPI'
import Current from './panels/current/Current'
import './App.css'
import OtherCities from './panels/otherCities/OtherCities'
import Forecast from './panels/forecast/Forecast'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: 'Melbourne',
      currentWeather: {
        temperature: '',
        main: '',
        humidity: '',
        wind: '',
      },
      allCities: [],
      forecast: [],
    }
    this.getWeather = this.getWeather.bind(this)
    this.getWeatherGroup = this.getWeatherGroup.bind(this)
    this.getForecast = this.getForecast.bind(this)
  }

  async getWeather() {
    const weatherJson = await fetchWeather(this.state.city)
    const currentWeather = {
      temperature: weatherJson.main.temp,
      main: weatherJson.weather[0].main,
      humidity: weatherJson.main.humidity,
      wind: weatherJson.wind.speed,
    }
    this.setState({ currentWeather })
  }

  async getWeatherGroup() {
    const weatherGroupJson = await fetchWeatherGroup()
    const allCities = weatherGroupJson.list.map((item) => ({
      name: item.name,
      temp: item.main.temp,
      icon: item.weather[0].icon,
    }))
    this.setState({ allCities })
  }

  async getForecast() {
    const forecastJason = await fetchForecast(this.state.city)
    const forecast = forecastJason.list
      .filter((item, index) => index % 8 === 0)
      .map((item) => ({
        day: this.getWeekDay(item.dt),
        temp: item.main.temp,
        icon: item.weather[0].icon,
      }))
    this.setState({ forecast })
  }

  getWeekDay(timestamp) {
    const date = new Date(timestamp * 1000)
    let weekday = []
    weekday[0] = 'SUN'
    weekday[1] = 'MON'
    weekday[2] = 'TUE'
    weekday[3] = 'WED'
    weekday[4] = 'THU'
    weekday[5] = 'FRI'
    weekday[6] = 'SAT'
    return weekday[date.getDay()]
  }

  componentDidMount() {
    this.getWeather()
    this.getWeatherGroup()
    this.getForecast()
    setInterval(() => {
      this.getWeather()
    }, 60000)
  }

  componentDidUpdate(prevProps, preState) {
    if (this.state.city !== preState.city) {
      this.getWeather()
      this.getForecast()
    }
  }

  onCitySelected = (name) => {
    this.setState({ city: name })
  }

  render() {
    return (
      <div className="jr_container">
        <div className="jr_card">
          <Current
            city={this.state.city}
            currentWeather={this.state.currentWeather}
          />

          <div className="row jr_bottom">
            <div className="col-lg-5 order-last order-lg-first">
              <OtherCities
                allCities={this.state.allCities.filter(
                  (x) => x.name !== this.state.city,
                )}
                onCitySelected={this.onCitySelected}
              />
            </div>
            <div className="col-lg-7 oder-first order-lg-last">
              <Forecast weekdays={this.state.forecast} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
