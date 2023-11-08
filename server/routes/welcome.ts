import express from 'express'
import { getDisney } from "../../client/components/Disney.tsx"
import request from 'superagent'

const router = express.Router()

// GET /api/v1/welcome/
router.get('/',async(req, res) => {
  const getDisney = await request.get('https://api.disneyapi.dev/character')
  res.json(getDisney.body)
})

export default router
