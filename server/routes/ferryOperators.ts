import express from 'express'
import { FerryOperator } from '../../models/ferrys.ts' 

const router = express.Router()

// GET /api/v1/welcome/
router.get('/', (req, res) => {
  try {
    // server.get('/api/v1/movies', async(req, res) => {
    //     const token = process.env.MOVIEDB_API_TOKEN
    //     console.log(token)
    //     const response = await request
    //     .get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`)
    //     .set('Authorization', `Bearer ${token}`)
    //     res.json(response.body.results)
    //   })



  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router