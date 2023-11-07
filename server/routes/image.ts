import express from 'express'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/image/
router.get('/', async (req, res) => {
  try {
    const queries = ['Javascript', 'Cute Cat']
    const query = queries[Math.floor(Math.random() * queries.length)]

    const url =
      'https://tenor.googleapis.com/v2/search?q=' +
      query +
      '&key=' +
      process.env.TENOR_KEY +
      '&client_key=api_test_site&limit=1&random=true'

    const response = await request.get(url)

    // Extract the gif
    const gif = response.body.results[0]

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
