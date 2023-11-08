import { useState, useEffect } from 'react'
import { getCurrentWeather } from '../apiClient.ts'

// import { CWeather } from '../../models/currentWeather.ts'
const APIKey = 'a02d2ac517fb496a844af3ce53a6b86c'

export default function CurrentWeather() {
  const [weather, setWeather] = useState(null)
  //state to store the city input
  const [city, setCity] = useState('')

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2) // Converts Kelvin to Celsius and rounds to 2 decimal places
  }

  const handleChange = async (event) => {
    setCity(event.target.value)
    console.log(city)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const weatherData = await getCurrentWeather(city, APIKey)
      const updatedWeatherData = { ...weatherData } // Create a copy of the original object
      updatedWeatherData.main.temp = kelvinToCelsius(
        updatedWeatherData.main.temp
      ) // Convert temperature to Celsius
      setWeather(weatherData)
      console.log(weatherData)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  return (
    <div>
      <h1>Current Weather</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter city name:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <h2>
            Weather for {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp} &deg;C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}
