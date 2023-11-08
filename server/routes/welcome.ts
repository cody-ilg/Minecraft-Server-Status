import express from 'express'
import { Welcome } from '../../models/welcome.ts'
import weather from './weather.js'

const router = express.Router()

// GET /api/v1/welcome/
router.get('/', (req, res) => {
  try {
    // Getting the current time
    const nowTime = new Date()

    // Rounding down to the nearest hour
    // The (0, 0, 0) is setting the minutes, seconds and milliseconds down to 0.
    nowTime.setMinutes(nowTime.getMinutes() - 1, 0, 0)

    // Converting the date into the correct key format
    console.log(weather.hourly.time[0])
    const key = nowTime.toISOString()
    console.log(weather.hourly.time[weather.hourly.time.length - 1])
    console.log(key)
    // Get the index of the key
    const index = weather.hourly.time.indexOf(key)

    console.log('test', index)

    // Get temperature for the related time
    const temperature = weather.hourly.temperature2m[0]

    res.json({ temp: temperature, time: nowTime } as Welcome)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
