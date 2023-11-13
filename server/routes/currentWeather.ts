import express from 'express'
//allow request to APIs
import request from 'superagent'
//lets sensitive information hidden in an env file
import 'dotenv/config'
const router = express.Router()
const APIKey = process.env.WEATHER_API_KEY

router.get('/:cityName', async (req, res) => {
  const cityName = req.params.cityName
  try {
    const currentWeather = await request.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`
    )
    console.log(currentWeather)
    res.json(currentWeather.body)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
