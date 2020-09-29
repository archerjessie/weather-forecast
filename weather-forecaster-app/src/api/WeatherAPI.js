import cities from './cities.json'

const baseUrl = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export async function fetchWeather(city) {
  let response = await fetch(
    `${baseUrl}weather?id=${cities[city]}&units=metric&appid=${API_KEY}`,
  )
  let data = await response.json()
  return data
}

export async function fetchWeatherGroup() {
  let response = await fetch(
    `${baseUrl}group?id=${Object.values(cities).join(
      ',',
    )}&units=metric&appid=${API_KEY}`,
  )
  let data = await response.json()
  return data
}

export async function fetchForecast(city) {
  let response = await fetch(
    `${baseUrl}forecast?id=${cities[city]}&cnt=33&units=metric&appid=${API_KEY}`,
  )
  let data = await response.json()
  return data
}
