import express from 'express'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/image/
router.get('/', async (req, res) => {
  try {
    const queries = [
      'Javascript Typescript',
      'Programmer Coding Hacking Meme',
      'Visual Studio Code',
      'Computer Programmer Mad Bug',
    ]

    let query = queries[Math.floor(Math.random() * queries.length)] as string

    if (req.query.query) query = req.query.query as string

    const url =
      'https://tenor.googleapis.com/v2/search?q=' +
      query +
      '&key=' +
      process.env.TENOR_KEY +
      '&client_key=api_test_site&random=true'

    const response = await request.get(url)

    // Extract the gif
    const gif = response.body.results[0]
    // console.log(gif)

    res.json(gif)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
